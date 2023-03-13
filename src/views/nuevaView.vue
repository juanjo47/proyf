<template>
    <div class="about">
      <h1>Esta es la nueva pagina</h1>
      <router-link to="/about">About</router-link>
      <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title"> Card Title</h5>
        <p class="card-text"> some quick example text to bluid in the  card title</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
    </div>
    
  </template>

<script>

    export default{
        name: 'nuevaView',
        props:[],
        emits:[],
        data(){
            return{
                data:[]
            }
        },
        methods:{
            getPersonas(){
                this.axios.get("http://localhost:5000/persona")
                .then((response) =>(this.data = response.data))
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