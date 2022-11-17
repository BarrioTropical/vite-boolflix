<template>
    <header class="d-flex justify-content-between align-items-center">
    <h1>Boolfix</h1>
    <SearchComponent/>
    </header>   
</template>

<script>
import { store } from "../store";
import SearchComponent from './SearchComponent.vue';
    export default {
    name: "HeaderComponent",
    component: {},
    data() {
        return { store };
    },
    components: { SearchComponent }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";

.navbar{
    border-bottom: 2px solid gray;
    padding: 20px;
}

</style>