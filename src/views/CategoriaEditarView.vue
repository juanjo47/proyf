<template>
    <div style="text-aling:left">
        <b>Editar Categoria</b>
        <form @submit.prevent="editar()" action="">
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
                <button class="btn btn-info">Confirma Editado</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'CategoriaEditarView',
        props:[],
        emits:[],
        data(){
            return{
                categoriaId:0,
                payload:{
                    nombre:"",
                    almacen:"",
                    codigo:""
                }
                }
        },
        methods:{
            load(){
                this.categoriaId = this.$route.params.id 
            },
            getCategoria(){

                this.axios.get("http://localhost:5000/categoria/"+this.categoriaId)
                .then((response) => {this.payload = response.data})
                .catch((err) => (console.log(err)))
            },
            editar(){
                this.axios.patch("http://localhost:5000/categoria/"+this.categoriaId,this.payload)
                .then((response) => {console.log(response)})
                .catch((err) => {console.log(err)})
            }
            
        },
        computed: {           
        },
        mounted(){
            this.load(),
            this.getCategoria()
        }
        
    }
</script>

<style lang="scss">


</style>