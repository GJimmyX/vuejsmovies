<template>
    <div>
        <h2>Films français</h2>
        <movie-list :movies="movies">
        </movie-list>
    </div> 
</template>

<script>
    import MovieList from './utils/MovieList.vue';
    import axios from 'axios';

    export default {
        components: { MovieList },
        name: 'FrenchMovies',
        data() {
            return{
                movies: null,
            };
        },
        created: function() {
            axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&region=FR&sort_by=popularity.desc&certification_country=us&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=fr&with_watch_monetization_types=flatrate')
            .then(res => {
                this.movies = res.data.results;
            })
        }
    }
</script>