<template>
    <div style="text-aling:left">
        lista de Productos
        <form @submit.prevent="crearProducto()">
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.nombre" placeholder="Nombre">
            </div>
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.descripcion" placeholder="Descripicion">    
            </div>
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.cantidad" placeholder="Cantidad">
            </div>
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.idc" placeholder="Categoria">
            </div>
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.codigo" placeholder="Codigo">
            </div>
            <div style="margin-top: 5mm;">
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>
            
        </form>
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
                <tr v-for="(value, key) of productos" :id="key">
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
    
  </template>

<script>
    export default{
        name: 'ProductoView',
        props:[],
        emits:[],
        data(){
            return{
                productos:[],
                payload:{
                    nombre:"",
                    descripcion:"",
                    cantidad: 0,
                    idc: 0,
                    codigo:""
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