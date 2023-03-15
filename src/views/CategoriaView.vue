<template>
    <div style="text-aling:left">
        <div class="input-group mb-3">
            <button class="btn btn-outline-primary" type="button" id="button-addon1" data-bs-toggle="modal"
              data-bs-target="#modal">Nuevo <i class="bi bi-plus-circle"></i></button>

            <input type="search" class="form-control" placeholder="Buscar categoria considere mayusculas" 
            aria-label="Recipient's username" aria-describedby="button-addon2" v-model="buscar">
            
        </div>
        lista de Categorias
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Almacen</th>
                    <th scope="col">Codigo</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) of categorias" :id="key" v-show="buscar == ''">
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.almacen }}</td>
                    <td>{{ value.codigo }}</td>
                    <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
                    <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
                </tr>
                <tr v-for="(value, key) of categorias" :id="key" v-show="value.nombre.includes(buscar)">
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.almacen }}</td>
                    <td>{{ value.codigo }}</td>
                    <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
                    <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="modalLabel">Nueva Categoria</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <FormCategoriaNueva
                :inpayload="payload"
                @on-payload="crearCategoria($event)"
              ></FormCategoriaNueva>
            </div>
          </div>
        </div>
      </div>
    
  </template>

<script>
    import FormCategoriaNueva  from "../components/FormCategoriaNueva.vue";
    export default{
        name: 'CategoriaView',
        props:[],
        emits:[],
        data(){
            return{
                buscar:'',
                categorias:[],
                payload:{
                    nombre:"",
                    almacen:"",
                    codigo:""
                }
            }
        },
        methods:{
            getCategorias(){
                this.axios.get("http://localhost:5000/categoria")
                .then((response) =>(this.categorias = response.data))
                .catch((err)=>(console.log(err)))
            },
            crearCategoria(payload){
                this.axios.post("http://localhost:5000/categoria",payload)
                .then((response) =>{
                    //this.getCategorias(); console.log(response)
                    this.categorias.push(response.data)
                })
                .catch((err)=>{console.log(err)})
                console.log(this.payload);
            },
            editar(item){
                this.$router.push('/categoria/'+item.id+'/editar');
                console.log(item)
            },
            eliminar(item){
                this.axios.delete("http://localhost:5000/categoria/"+item.id)
                .then((response) => {this.getCategorias();console.log(response)})
                .catch((err) => (console.log(err)))
            }
        },
        computed: {           
        },
        mounted(){
            this.getCategorias();
        },
        components:{
            FormCategoriaNueva,
        }
        
    }
</script>

<style lang="scss">


</style>