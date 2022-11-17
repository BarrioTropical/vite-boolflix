<template>
    <div>
    <ProductComponent/>
    </div>
</template>

<script>
import {store} from '../store'
import ProductComponent from './ProductComponent.vue';
    export default {
    name: "ListComponent",
    data() {
        return { store };
    },
    components: { ProductComponent }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";

</style>