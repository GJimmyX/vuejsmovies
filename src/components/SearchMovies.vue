<template>
    <div>
        <h2>Rechercher un Film</h2>
        <div class="col-3 align-middle">
            <input v-model="query" placeholder="Recherche ..." @keyup="recherche">
        </div>
        <div class="row col-12">
            <div class="card col-2" v-for="movie in movies" :key="movie.id">
                <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image du Film">
                <router-link :to="'/MovieDetails/' + movie.id"><h3 scope="row">{{movie.title}}</h3></router-link>
            </div>
        </div>
    </div> 
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'SearchMovies',
        data() {
            return{
                movies: null,
                query: null,
            };
        },
        methods: {
            recherche() {
                console.log('https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&query='+this.query+'&page=1&include_adult=false')
                axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&query='+this.query+'&page=1&include_adult=false')
                .then(res => {
                    this.movies = res.data.results;
                    console.log(res);
                })
            }
        }
    }
</script>

<style>
    div .col-3{
        margin: auto;
    }
</style>