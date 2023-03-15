<template>
    <div style="text-aling:left">
        lista de personas
        <form @submit.prevent="crearPersona()">
            <div>
                
            </div>
            <div>
                
            </div>
            <input type="text" v-model="payload.nombre" placeholder="Nombre">
            <input type="text" v-model="payload.direccion" placeholder="Direccion">
            <button type="submit" class="btn btn-primary">Agregar</button>
        </form>
        <!-- <input type="search" class="form-control"> -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Direccion</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) of personas" :id="key">
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.direccion }}</td>
                    <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
                    <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    
  </template>

<script>
    export default{
        name: 'PersonaView',
        props:[],
        emits:[],
        data(){
            return{
                personas:[],
                payload:{
                    nombre:"",
                    direccion:""
                }
            }
        },
        methods:{
            getPersonas(){
                this.axios.get("http://localhost:5000/persona")
                .then((response) =>(this.personas = response.data))
                .catch((err)=>(console.log(err)))
                .finally()
            },
            crearPersona(){
                this.axios.post("http://localhost:5000/persona", this.payload)
                .then((response) =>{
                    //this.getPersonas(); console.log(response)
                    this.personas.push(response.data)
                })
                .catch((err)=>(console.log(err)))
                .finally()
            },
            editar(item){
                this.$router.push('/persona/'+item.id+'/editar');
                console.log(item)
            },
            eliminar(item){
                this.axios.delete("http://localhost:5000/persona/"+item.id)
                .then((response) => {this.getPersonas();console.log(response)})
                .catch((err) => (console.log(err)))
            }
        },
        computed: {           
        },
        mounted(){
            this.getPersonas();
        }
        
    }
</script>

<style lang="scss">


</style>