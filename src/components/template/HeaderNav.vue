<template>
    <header>
        <img src="../.././assets/logo.png" alt="Image pour le header">
        <h1>VUE JS MOVIES</h1>
        <nav>
            <ul>
                <li><router-link to="/LastMovies">VueJSMovies</router-link></li>
                <li><router-link to="/FrenchMovies">Films Français</router-link></li>
                <li><router-link to="/AmericanMovies">Films Américains</router-link></li>
                <li><router-link to="/TopRatedMovies">Top 50: les mieux notés</router-link></li>
                <li><router-link to="/LastMovies">Films de 2021</router-link></li>
                <li><router-link to="/SearchMovies">rechercher un film</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderNav',
    }
</script>


<style scoped>
    header{
        padding: 0 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header h1{
        margin: 0;
        padding: 5% 0;
    }
    header nav{
        width: 100%;
    }
    header nav ul{
        display: flex;
        justify-content: space-around;
        padding: 0;
    }
    header nav ul li{
        list-style: none;
    }
</style>