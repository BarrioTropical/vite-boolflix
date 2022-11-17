<template>
    <HeaderComponent/>
    
    <main>
    <ListComponent :items="store.movie"/>
    </main>
</template>

<script>
import axios from 'axios';
import {store} from './store'
import HeaderComponent from './components/HeaderComponent.vue';
import ListComponent from './components/ListComponent.vue';

    export default {
    components: { HeaderComponent, ListComponent },

    data(){
        return{
            store
        }
    },
    watch:{
        'store.params.query'(newVal, oldVal){
            if(newVal !== oldVal){
                this.getMovie();
            }
        }
    },
    methods: {
        getMovie(){
            const apiurl = store.baseUrl + store.endpoint;
            const params = store.params;
            axios.get(apiurl, {params}).then((res) => {
                console.log(res.data.results);
                store.movie = res.data.results;
            })
        }
    },
    created(){

    },
}
</script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "@fortawesome/fontawesome-free/scss/solid.scss";
@import "@fortawesome/fontawesome-free/scss/brands.scss";
@import "@fortawesome/fontawesome-free/scss/regular.scss";
@import "./assets/styles/generals.scss";



</style>