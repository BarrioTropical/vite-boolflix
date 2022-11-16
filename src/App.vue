<template>
    <HeaderComponent/>
    <main>
    <MainComponent/>
    
    </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

    export default {
    components: { HeaderComponent, MainComponent }
}
</script>

<style lang="scss" scoped>
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "@fortawesome/fontawesome-free/scss/solid.scss";
@import "@fortawesome/fontawesome-free/scss/brands.scss";
@import "@fortawesome/fontawesome-free/scss/regular.scss";

</style>