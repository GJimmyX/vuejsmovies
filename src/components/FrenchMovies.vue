<template>
    <div>
        <h2>Films français</h2>
        <div class="row col-12">
            <div class="card col-2" v-for="fmovie in fmovies" v-bind:key="fmovie.id"> 
                <router-link :to="'/MovieDetails/' + fmovie.id"><h3 scope="row">{{fmovie.title}}</h3></router-link>
                <img :src="'https://image.tmdb.org/t/p/original' + fmovie.poster_path" alt="Image du Film">
                <p class="text-justify">{{fmovie.overview}}</p>
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
                fmovies: null,
            };
        },
        created: function() {
            axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr_FR&region=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(fres => {
                this.fmovies = fres.data.results;
                console.log(this.fmovies);
            })
        }
    }
</script>