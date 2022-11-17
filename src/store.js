import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    //apiURL: 'https://api.themoviedb.org/3/movie/550?api_key=97f8cf3d84935c53d2fc6377f5b7d40f',
    endpoint: 'search/movie',
    params: {
        api_key: '97f8cf3d84935c53d2fc6377f5b7d40f',
        query: '',
        language: 'it-IT',
        include_adult: 'false',
    },

    //listMovie: [],

    //getMostPopular() {
    //axios.get(this.apiURL).then((res) => {

    //this.listMovie = [...res.data.results];
    //})
    //}
})