<template>
    <header class="sticky">
    <HeaderComponent/>
</header>
    
    <main>
    <ListComponent title="Movies" :items="store.movie"/>
    <ListComponent title="Series" :items="store.tv"/>
    </main>
</template>

<script>
import axios from 'axios';
import {store} from './store';
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
                this.getSeries();
            }
        }
    },
    methods: {
        getMovie(){
            const apiurl = store.baseUrl + store.endpoint.movie;
            const params = store.params;
            axios.get(apiurl, {params}).then((res) => {
                console.log(res.data.results);
                store.movie = res.data.results;
            })
        },

        getSeries(){
            const apiurl = store.baseUrl + store.endpoint.tv;
            const params = store.params;
            axios.get(apiurl, {params}).then((res) => {
                console.log(res.data.results);
                store.tv = res.data.results;
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

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  z-index: 1000;
}

main{
    padding: 130px 20px;
}

</style>