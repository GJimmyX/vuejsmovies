<template>
    <movie-card :movie="movie">
    </movie-card>
</template>

<script>
    import MovieCard from './utils/MovieCard.vue';
    import axios from 'axios';

    export default {
        components: { MovieCard },
        name: 'MovieDetails',
        data() {
            return{
                movie: null,
                movie_key: null,
            };
        },
        created: function() {
            axios
            .get('https://api.themoviedb.org/3/movie/'+this.$route.params.id+'?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr')
            .then(res => {
                this.movie = res.data;
            })
            axios
            .get('https://api.themoviedb.org/3/movie/'+this.$route.params.id+'/videos?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr')
            .then(res => {
                this.movie_key = res.data.results[0].key;
            })
        }
    }
</script>