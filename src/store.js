import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/movie/550?api_key=97f8cf3d84935c53d2fc6377f5b7d40f',
    characterList: [],
    loading: false,
})