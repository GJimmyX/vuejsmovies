<template>
    <div>
        <h3>Films français</h3>
        <div class="row col-12">
            <div class="card col-2" v-for="fmovie in fmovies" v-bind:key="fmovie.id"> 
                <h3 scope="row">{{fmovie.title}}</h3>
                <img :src="'https://image.tmdb.org/t/p/original' + fmovie.poster_path" alt="Image du Film">
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
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr_FR&region=french&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(res => {
                this.fmovies = res.data.results;
                console.log(this.fmovies);
            })
        }
    }
</script>