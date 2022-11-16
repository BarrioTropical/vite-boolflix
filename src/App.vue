<template>
    <HeaderComponent/>
    <main>
    <ListComponent/>
    </main>
</template>

<script>
import {store} from './store'
import HeaderComponent from './components/HeaderComponent.vue';
import ListComponent from './components/ListComponent.vue';

    export default {
    components: { HeaderComponent, ListComponent },

    data(){
        return{
            
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "@fortawesome/fontawesome-free/scss/solid.scss";
@import "@fortawesome/fontawesome-free/scss/brands.scss";
@import "@fortawesome/fontawesome-free/scss/regular.scss";



</style>