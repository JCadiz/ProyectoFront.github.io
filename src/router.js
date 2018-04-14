import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import Characters from './views/Characters.vue'
import Planets from "./views/Planets.vue"
import StarShips from "./views/StarShips.vue"
import Ships from "./views/Ships.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Movies",
      name: "Movies",
      component: Movies
    },
    {
      path: "/Characters",
      name: "Characters",
      component: Characters
    },
    {
      path: "/Planets",
      name: "Planets",
      component: Planets
    },
    {
      path: "/StarShips",
      name: "StarShips",
      component: StarShips
    },
    {
      path: "/Ships",
      name: "Ships",
      component: Ships
    }
  ]
});
