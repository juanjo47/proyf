<template>
    <div>
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
    </div>    
</template>

<script>
    export default {
        name: 'FormProductoNuevo',
        props: ["inpayload"],
        emits:("on-payload"),
        data(){
            return{
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
            crearProducto(){
                this.$emit('on-payload', this.payload);

            }
        },
        computed:{
        },
        mounted(){
            this.payload = this.inpayload;
        },
        components:{
        }
    }
</script>

<style lang="scss">

</style>
