<template>
    <div>
        <h2>Films français</h2>
        <div class="row col-12">
            <div class="card col-2" v-for="movie in movies" v-bind:key="movie.id"> 
                <router-link :to="'/MovieDetails/' + movie.id"><h3 scope="row">{{movie.title}}</h3></router-link>
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image du Film">
                <h5 class="text-center">Date de sortie: {{movie.release_date}}</h5>
                <h5 class="text-center">Note moyenne: {{movie.vote_average}}</h5>
                <p class="text-justify">{{movie.overview}}</p>
            </div>
        </div>
    </div> 
</template>

<script>
    import axios from 'axios';

    export default {
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