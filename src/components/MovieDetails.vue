<template>
    <div class="row col-12">
        <div class="card col-2" v-for="dmovie in dmovies" v-bind:key="dmovie.id"> 
            <router-link :to="'/MovieDetails/' + dmovie.id"><h3 scope="row">{{dmovie.title}}</h3></router-link>
            <img :src="'https://image.tmdb.org/t/p/original' + dmovie.poster_path" alt="Image du Film">
            <p class="text-justify">{{dmovie.overview}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MovieDetails',
    }
</script>