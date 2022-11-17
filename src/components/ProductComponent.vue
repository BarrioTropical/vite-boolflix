<template>
    <div>
        Sono il film/serie
    </div>
</template>

<script>

import { store } from '../store';
    export default {
        name: 'ProductComponent',
        data() {
        return { store };
    },
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/generals.scss";

</style>