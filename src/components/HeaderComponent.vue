<template>
    <nav class="navbar navbar-light  justify-content-between">
    <a class="navbar-brand text-white">Navbar</a>
    <form class="form-inline">
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <button type="button" class="btn btn-outline-primary">Search now</button>
    </form>
    </nav>   
</template>

<script>
import {store} from '../store'
    export default {
        name: 'HeaderComponent',
        data(){
            return {store};
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";


</style>