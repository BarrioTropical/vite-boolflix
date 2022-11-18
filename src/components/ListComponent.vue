<template>
    <section class="container-fluid">
    <h2>{{title}}</h2>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in items" :key="item.id">
            <ProductComponent :item="item"/>
        </div>
    </div>
    
    </section>
</template>

<script>
import { stringifyExpression } from '@vue/compiler-core';
import {store} from '../store'
import ProductComponent from './ProductComponent.vue';
    export default {
    name: "ListComponent",
    props:{
        items: Array,
        title: String,
    },
    components: { ProductComponent },
    data() {
        return { store };
    },

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";
section{
    overflow: hidden;
        .row{
            flex-wrap: nowrap;
        }
}

h2{
    padding-bottom: 10px;
}
</style>