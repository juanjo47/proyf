<template>
    <div style="text-aling:left">
        <b>Editar Producto</b>
        <form @submit.prevent="editar()" action="">
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
                <button class="btn btn-info">Confirmar Editado</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'ProductoEditarView',
        props:[],
        emits:[],
        data(){
            return{
                productoId:0,
                payload:{
                    nombre:"",
                    almacen:"",
                    codigo:""
                }
                }
        },
        methods:{
            load(){
                this.productoId = this.$route.params.id 
            },
            getProducto(){

                this.axios.get("http://localhost:5000/producto/"+this.productoId)
                .then((response) => {this.payload = response.data})
                .catch((err) => (console.log(err)))
            },
            editar(){
                this.axios.patch("http://localhost:5000/producto/"+this.productoId,this.payload)
                .then((response) => {console.log(response)})
                .catch((err) => {console.log(err)})
            }
            
        },
        computed: {           
        },
        mounted(){
            this.load(),
            this.getProducto()
        }
        
    }
</script>

<style lang="scss">


</style>