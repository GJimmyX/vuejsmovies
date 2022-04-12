<template>
    <div class="row col-12">
        <div class="card col-2" v-for="movie in movies" v-bind:key="movie.id"> 
            <router-link :to="'/MovieDetails/' + movie.id"><h3 scope="row">{{movie.title}}</h3></router-link>
            <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Image du Film">
            <h5 class="text-center">Date de sortie: {{movie.release_date}}</h5>
            <h5 class="text-center">Note moyenne: {{movie.vote_average}}</h5>
            <p class="text-justify">{{movie.overview}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'MovieList',
        props: ['movies'],
    }
</script>