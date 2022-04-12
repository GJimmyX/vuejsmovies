<template>
    <div>
        <h2>Les films les mieux notés sont sur VueJS Movies !</h2>
        <movie-list :movies="movies">
        </movie-list>
    </div> 
</template>

<script>
    import MovieList from './utils/MovieList.vue';
    import axios from 'axios';

    export default {
        components: { MovieList },
        name: 'TopRatedMovies',
        data() {
            return{
                movies: null,
            };
        },
        created: function(){
            axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&sort_by=vote_average.desc&certification_country=us&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate')
            .then(res => {
                this.movies = res.data.results;
            })
        }
    }
</script>