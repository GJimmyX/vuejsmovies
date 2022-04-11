<template>
    <div>
        <h3>Vos films préférés sont sur VueJS Movies !</h3>
        <div class="row col-12">
            <div class="card col-2" v-for="movie in movies" v-bind:key="movie.id"> 
                <h3 scope="row">{{movie.title}}</h3>
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image du Film">
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
            .get('https://api.themoviedb.org/3/discover/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(res => {
                this.movies = res.data.results;
                console.log(this.movies);
            })
        }
    }
</script>

<style>
    div h3{
        margin: 0;
        padding: 2% 0;
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
    }
    div .row .card img{
        width: 50%;
    }
</style>