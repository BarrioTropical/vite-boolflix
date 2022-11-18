<template>
    <div class="media text-center">
    <img :src="item.poster_path ? imgBasePath+item.poster_path : 'https://via.placeholder.com/342x513'" alt="item.title">
        <h4>{{item.original_title}}</h4>
        <div>{{item.title}}</div>
        <div>{{item.vote_average}}</div>
        
        <div>{{item.original_language}}</div>
    </div>
</template>

<script>
    export default {
        props:{
            item: Object
        },
        data(){
            return{
            imgBasePath: 'https://image.tmdb.org/t/p/w342'
        }
        }
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";
div{
    color: white;
}

h4{
    text-transform: capitalize;
    color: white;
}

img{
    width: 100%;
    box-shadow: 0 0 6px 3px rgba($color: #000000, $alpha: 0.15);
}

</style>