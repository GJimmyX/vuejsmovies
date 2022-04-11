<template>
    <div>
        <h2>Rechercher un Film</h2>
        <div class="col-3 align-middle">
            <label for="movieSearch">
                <input type="text" name="movieSearch" id="movieSearch">
            </label>
        </div>
    </div> 
</template>

<script>
    export default {
        name: 'SearchMovies',
    }
</script>

<style>
    div .col-3{
        margin: auto;
    }
</style>