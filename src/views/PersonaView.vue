<template>
    <div style="text-aling:left">
        lista de personas
        <form @submit.prevent="CrearPersona">
            <input type="text" v-model="payload.nombre" placeholder="Nombre">
            <input type="text" v-model="payload.direccion" placeholder="Direccion">
            <button>Agregar</button>
        </form>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Direccion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) of personas" :id="key">
                    <th scope="row">{{ value.id }}</th>
                    <td>{{ value.nombre }}</td>
                    <td>{{ value.direccion }}</td>
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