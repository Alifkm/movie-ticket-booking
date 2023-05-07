<script setup>
  import { useRouter, RouterLink } from 'vue-router';
  import { ref, onBeforeMount } from "vue";
  import axios from 'axios';

  const router = useRouter();
  const movies = ref([]);
  onBeforeMount(async () => {
    await axios.get("http://www.omdbapi.com/?apikey=31ccf49&s=star-wars")
      .then(response => movies.value = response.data.Search)
  })
</script>

<template>
  <div class="flex justify-center items-center p-5 my-10">
    <h1 class="text-4xl font-bold">Movie Ticket Booking</h1>
  </div>
  <section class="grid gap-4 grid-cols-auto lg:grid-cols-4 md:grid-cols-3 justify-items-center mb-10">
    <div class="rounded-md overflow-hidden card main-card cursor-pointer shadow-md" v-for="(movie, index) in movies" :key="index" 
    @click="router.push(`/movie/${movie.imdbID}`)">
      
      <img class="mb-5 card__poster" :src="movie.Poster" :alt="movie.Title">
      <p class="text-center font-medium px-2">{{ movie.Title }}</p>
      <p class="text-center p-5">{{ movie.Type }}</p>
    </div>
  </section>
  <div class="flex justify-center items-center mb-10">
    <RouterLink to="/history"><button class="rounded-lg px-40 py-5 btn">History</button></RouterLink>
  </div>
</template>