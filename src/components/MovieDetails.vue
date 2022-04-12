<template>
    <div class="row col-12" v-if="movie">
        <div class="col-4">
            <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image du Film">
        </div>
        <div class="col-4">
            <div class="video">
                <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + movie_key" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="text m-auto">
                <h2>{{movie.title}}</h2>
                <p class="text-justify">{{movie.overview}}</p>
                <h5 class="text-center">Date de sortie: {{movie.release_date}}</h5>
                <h5 class="text-center">Note moyenne: {{movie.vote_average}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
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

<style scoped>
    .row{
        margin: 2% 0;
        align-items: center;
    }
    .row .col-4 img{
        width: 50%;
    }
    .row .col-4 .text{
        width: 50%;
    }
    .row .col-4 .text h5{
        font-weight: 700;
    }
</style>