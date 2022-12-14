import { reactive } from "vue";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3',
    //apiURL: 'https://api.themoviedb.org/3/movie/550?api_key=97f8cf3d84935c53d2fc6377f5b7d40f',
    endpoint: {
        movie: '/search/movie/',
        tv: '/search/tv/',
    },
    params: {
        api_key: '97f8cf3d84935c53d2fc6377f5b7d40f',
        query: '',
        language: 'it-IT',
    },
    movie: [],
    tv: [],
})