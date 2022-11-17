<template>
    <section class="container-fluid">
    <h2>Movies</h2>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in items" :key="item.id">
            <ProductComponent :item="items"/>
        </div>
    </div>
    
    </section>
</template>

<script>
import {store} from '../store'
import ProductComponent from './ProductComponent.vue';
    export default {
    name: "ListComponent",
    props:{
        items: Array,
    },
    components:{

    },
    data() {
        return { store };
    },
    components: { ProductComponent }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";

</style>