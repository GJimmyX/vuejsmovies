<template>
  <div id="app">
    <HeaderNav />
      <div v-if="$route.path == '/'">
        <LastMovies />
      </div>
      <div v-else>
        <router-view :key="$route.fullPath"></router-view>
      </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav.vue';
import LastMovies from './components/LastMovies.vue';
import FooterApp from './components/template/FooterApp.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    LastMovies,
    FooterApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
