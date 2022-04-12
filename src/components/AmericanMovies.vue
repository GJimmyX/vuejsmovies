<template>
    <div>
        <h2>Films Américains</h2>
        <sort-buttons :movies="movies" @sort-movies="sortMovies">
        </sort-buttons>
        <movie-list :movies="movies">
        </movie-list>
    </div> 
</template>

<script>
    import SortButtons from './utils/SortButtons.vue';
    import MovieList from './utils/MovieList.vue';
    import axios from 'axios';

    export default {
        components: { SortButtons, MovieList },
        name: 'AmericanMovies',
        data() {
            return{
                movies: null,
            };
        },
        methods: {
            sortMovies(sortedMovies){
                this.movies = sortedMovies;
                console.log('sort-movies');
            }
        },
        created: function() {
            axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&region=US&sort_by=popularity.desc&certification_country=us&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate')
            .then(res => {
                this.movies = res.data.results;
            })
        }
    }
</script>