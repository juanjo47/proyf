<template>
    <div style="text-aling:left">
        editar persona
        <form @submit.prevent="editar()" action="">
            <div>
                <input type="text" v-model="payload.nombre" placeholder="nombre">
            </div>
            <div>
                <input type="text" v-model="payload.direccion" placeholder="direccion">
            </div>
            <div>
                <button>Editar</button>
            </div>
        </form>
    </div>
    
  </template>

<script>
    export default{
        name: 'PersonaEditarView',
        props:[],
        emits:[],
        data(){
            return{
                personaId:0,
                payload:{
                    nombre:"",
                    direccion:""
                }
                }
        },
        methods:{
            load(){
                this.personaId = this.$route.params.id 
            },
            getPersona(){

                this.axios.get("http://localhost:5000/persona/"+this.personaId)
                .then((response) => {this.payload = response.data})
                .catch((err) => (console.log(err)))
            },
            editar(){
                this.axios.patch("http://localhost:5000/persona/"+this.personaId,this.payload)
                .then((response) => {console.log(response)})
                .catch((err) => {console.log(err)})
            }
            
        },
        computed: {           
        },
        mounted(){
            this.load(),
            this.getPersona()
        }
        
    }
</script>

<style lang="scss">


</style>