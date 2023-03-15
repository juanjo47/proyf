<template>
    <div style="text-aling:left">
        <div class="input-group mb-3">
            <button class="btn btn-outline-primary" type="button" id="button-addon1" data-bs-toggle="modal"
              data-bs-target="#modal">Nuevo <i class="bi bi-plus-circle"></i></button>
              <input type="search" class="form-control" placeholder="Buscar producto considere las mayusculas" 
            aria-label="Recipient's username" aria-describedby="button-addon2" v-model="buscar">
        </div>
        lista de Productos
        <i class="bi bi-funnel-fill"></i> Edad <input type="range" id="volume" min="0" max="60" step="1" v-model="range"
            @mouseup="filtroEdad()">{{ range }}
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Codigo</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) of productos" :id="key" v-show="buscar == '' && value.cantidad <= range">
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.descripcion }}</td>
                    <td>{{ value.cantidad }}</td>
                    //<td v-on="getCatego(value.idc)">{{ value.categoria }}</td>
                    <td>{{ value.idc }}</td>
                    <td>{{ value.codigo }}</td>
                    <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
                    <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
                </tr>
                <tr v-for="(value, key) of productos" :id="key" v-show="value.nombre.includes(buscar) && value.cantidad <= range">
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.descripcion }}</td>
                    <td>{{ value.cantidad }}</td>
                    <td>{{ value.idc }}</td>
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
              <h1 class="modal-title fs-5" id="modalLabel">Nuevo Producto</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <FormCategoriaNueva
                :inpayload="payload"
                @on-payload="crearProducto($event)"
              ></FormCategoriaNueva>
            </div>
          </div>
        </div>
      </div>

  </template>

<script>
    export default{
        name: 'ProductoView',
        props:[],
        emits:[],
        //idca:'',
        data(){
            return{
                buscar:'',
                range:50,
                productos:[],
                payload:{
                    nombre:"",
                    descripcion:"",
                    cantidad: 0,
                    idc: 0,
                    codigo:"",
                    categoria:''
                }
            }
        },
        methods:{
            getProductos(){
                this.axios.get("http://localhost:5000/producto")
                .then((response) =>(this.productos = response.data))
                .catch((err)=>(console.log(err)))
                .finally()
            },
            crearProducto(){
                this.axios.post("http://localhost:5000/producto", this.payload)
                .then((response) =>{
                    //this.getProductos(); console.log(response)
                    this.productos.push(response.data)
                })
                .catch((err)=>(console.log(err)))
                .finally()
            },
            editar(item){
                this.$router.push('/producto/'+item.id+'/editar');
                console.log(item)
            },
            eliminar(item){
                this.axios.delete("http://localhost:5000/producto/"+item.id)
                .then((response) => {this.getProductos();console.log(response)})
                .catch((err) => (console.log(err)))
            },
            getCatego(idc){
                this.axios.get("http://localhost:5000/categoria/"+ idc)
                .then((response) =>(this.categoria = response.data.nombre))
                //console.log(this.categoria)
                .catch((err)=>(console.log(err)))
            }
        },
        computed: {           
        },
        mounted(){
            this.getProductos();
        }
        
    }
</script>

<style lang="scss">

</style>
