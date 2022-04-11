import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Import du routeur
import AmericanMovies from './components/AmericanMovies';
import FrenchMovies from './components/FrenchMovies';
import TopRatedMovies from './components/TopRatedMovies';
import LastMovies from './components/LastMovies';
import SearchMovies from './components/SearchMovies';
import MovieDetails from './components/MovieDetails';

Vue.use(VueRouter) // On déclare l'utilisation du routeur

const routes = [  // On déclare les routes
  {
    path: '/AmericanMovies',  // path = url
    component: AmericanMovies // composant associé
  },
  {
    path: '/FrenchMovies',  // path = url
    component: FrenchMovies // composant associé
  },
  {
    path: '/TopRatedMovies',  // path = url
    component: TopRatedMovies // composant associé
  },
  {
    path: '/LastMovies',  // path = url
    component: LastMovies // composant associé
  },
  {
    path: '/SearchMovies',  // path = url
    component: SearchMovies // composant associé
  },
  {
    path: '/MovieDetails/:id',  // path = url
    component: MovieDetails // composant associé
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
