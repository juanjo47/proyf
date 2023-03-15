<template>
    <div>
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
    </div>    
</template>

<script>
    export default {
        name: 'FormCategoriaNueva',
        props: ["inpayload"],
        emits:("on-payload"),
        data(){
            return{
                payload:{
                    nombre:"",
                    almacen:"",
                    codigo:""
                }
            }
        },
        methods:{
            crearCategoria(){
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
