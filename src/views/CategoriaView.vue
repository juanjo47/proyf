<template>
    <div style="text-aling:left">
        lista de Categorias
        <form @submit.prevent="crearCategoria()">
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.nombre" placeholder="Nombre">
            </div>
            <div style="margin-top: 5mm;">
                <input type="text" v-model="payload.almacen" placeholder="Almacen">    
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
                    <th scope="col">Almacen</th>
                    <th scope="col">Codigo</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) of categorias" :id="key">
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
    
  </template>

<script>
    export default{
        name: 'CategoriaView',
        props:[],
        emits:[],
        data(){
            return{
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
                .finally()
            },
            crearCategoria(){
                this.axios.post("http://localhost:5000/categoria", this.payload)
                .then((response) =>{
                    //this.getCategorias(); console.log(response)
                    this.categorias.push(response.data)
                })
                .catch((err)=>(console.log(err)))
                .finally()
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
        }
        
    }
</script>

<style lang="scss">


</style>