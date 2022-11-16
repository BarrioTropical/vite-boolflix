<template>
    <section>
    <div>Logo</div>
    <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">Search now</button>
    </div>
    </section>
    
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


</style>