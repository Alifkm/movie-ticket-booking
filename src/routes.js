import { createRouter, createWebHistory } from "vue-router";
import MovieCard from "../src/components/MovieCard.vue";
import MovieDetail from "../src/components/MovieDetail.vue";
import MovieSeat from "../src/components/MovieSeat.vue";
import MovieHistory from "../src/components/MovieHistory.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home',
      component: MovieCard 
    },
    { 
      path: '/movie/:id',
      name: "detail", 
      component: MovieDetail 
    },
    { 
      path: '/movie/:id/seat',
      name: "seat", 
      component: MovieSeat 
    },
    { 
      path: '/history',
      name: "history", 
      component: MovieHistory 
    }
  ]
});

export default router;