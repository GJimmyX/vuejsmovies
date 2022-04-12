<template>
    <div>
        <h2>Vos films préférés sont sur VueJS Movies !</h2>
        <div class="row col-12">
            <div class="card col-2" v-for="movie in movies" v-bind:key="movie.id"> 
                <router-link :to="'/MovieDetails/' + movie.id"><h3 scope="row">{{movie.title}}</h3></router-link>
                <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image du Film">
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
        name: 'LastMovies',
        data() {
            return{
                movies: null,
            };
        },
        created: function() {
            axios
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate')
            .then(res => {
                this.movies = res.data.results;
            })
        }
    }
</script>

<style>
    div h2{
        margin: 0;
        padding: 2% 0;
        font-weight: 700;
        font-size: 2.5em;
    }
    div .row{
        padding: 0;
        margin: 0;
        justify-content: center;
    }
    div .row .card{
        justify-content: space-between;
        align-items: center;
        margin: 2% 2%;
        padding: 2% 0%;
    }
    div .row .card a h3{
        font-weight: 500;
        font-size: 1.5em;
        color: black;
    }
    div .row .card img{
        width: 60%;
        margin-bottom: 5%;
    }
    div .row .card h5{
        margin: 0;
    }
    div .row .card p{
        width: 75%;
        margin-bottom: 5%;
        font-size: 0.75em;
    }
</style>