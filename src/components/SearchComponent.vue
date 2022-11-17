<template>
    <form class="d-flex justify-content-center align-items-center" @submit.prevent="performSearch">
        <div>
            <label class="visually-hidden" for="charactername">Search title</label>
            <input type="text" class="form-control" id="charcatername" placeholder="Search title" v-model.trim="text">
        </div>
        <div>
            <button type="submit" class="btn btn-danger">Search</button>
        </div>
    </form>
</template>

<script>
import { store } from '../store';
    export default {
        name: 'AppSearch',
        data(){
            return{
                text: ''
            }
        },
        methods:{
            performSearch(){
                console.log(this.text);
                store.params.query = this.text;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>