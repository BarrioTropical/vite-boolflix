<template>
    <div class="maincontainer">
        <div class="product-container">
            <div class="front">
                <div class="media text-center">
                <img :src="item.poster_path ? imgBasePath+item.poster_path : '/public/placeholder.jpg'" alt="item.title || item.name">
                <h4>{{item.original_title || item.original_name}}</h4>
                <div>{{item.title}}</div>
                <div><span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>{{item.vote_average}}</div>
                <div class="flag" v-if="availableFlag.includes(item.original_language)"><img :src="'/flags/' + item.original_language +'.png'" :alt="item.original_language + 'Flag'"></div>
                <div>{{item.original_language}}</div>
                </div>
            </div>

            <div class="back">
                <h4>{{ item.title || item.name }}</h4>
                <div><span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span></div>
                <div class="flag" v-if="availableFlag.includes(item.original_language)"><img :src="'/flags/' + item.original_language + '.png'" :alt="item.original_language"></div>
                <div class="description"><p>{{ item.overview }}</p></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:{
            item: Object
        },
        data(){
            return{
            availableFlag: [
                    'de', 'es', 'en','fr', 'it'
            ],
            imgBasePath: 'https://image.tmdb.org/t/p/w342'
        }
        },
        computed: {
            stars(){
                return Math.ceil(this.item.vote_average / 2);
            }
        },
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

.flag{
        img{
            width: 20px;
        }
    }

.maincontainer{
        width: 342px;
        height: 650px;
        background-color: black;
        border: 1px solid darkgrey;
        border-radius: 1rem;
        
        &:hover .product-container{
            transform: rotateY(180deg);
        }

        .product-container{
            text-align: center;
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            .front{
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
            .back{
            position: absolute;
            padding: 50px 10px;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;    
            height: 100%;
            transform: rotateY(180deg);
            overflow: hidden;
            
        }

        }
       

    }

</style>