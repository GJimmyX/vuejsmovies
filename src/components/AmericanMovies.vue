<template>
    <div>
        <h2>Films Américains</h2>
        <div class="row col-12">
            <div class="card col-2" v-for="amovie in amovies" v-bind:key="amovie.id"> 
                <router-link :to="'/MovieDetails/' + amovie.id"><h3 scope="row">{{amovie.title}}</h3></router-link>
                <img :src="'https://image.tmdb.org/t/p/original' + amovie.poster_path" alt="Image du Film">
                <p class="text-justify">{{amovie.overview}}</p>
            </div>
        </div>
    </div> 
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'AmericanMovies',
        data() {
            return{
                amovies: null,
            };
        },
        created: function() {
            axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=en_US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(ares => {
                this.amovies = ares.data.results;
                console.log(this.amovies);
            })
        }
    }
</script>