<script setup>
  import { useRoute, useRouter, RouterLink } from "vue-router";
  import { ref, onBeforeMount } from "vue";
  import axios from "axios";

  const route = useRoute();
  const router = useRouter();
  const {id} = route.params;
  const movie = ref([]);
  
  onBeforeMount(async () => {
    await axios.get(`http://www.omdbapi.com/?apikey=31ccf49&i=${id}`)
      .then(response => movie.value = response.data)
  })
</script>

<template>
  <section>
    <div class="my-5">
      <RouterLink to="/"><i class="fa-sharp fa-solid fa-arrow-left text-4xl hover:scale-110 transition-all"></i></RouterLink>
    </div>
    <div class="flex justify-center items-center gap-10 mb-10">
      <div class="shadow-sm bg-amber-600 rounded-md overflow-hidden card">
        <img class="mb-5 card__poster" :src="movie.Poster" :alt="movie.Title">
        <p class="text-center font-medium px-2">{{ movie.Title }}</p>
        <p class="px-5 my-5 text-center">{{ movie.Type }}</p>
      </div>
      <div>
        <ul>
          <li>Actors: {{ movie.Actors }}</li>
          <li>Director: {{ movie.Director }}</li>
          <li>Genre: {{ movie.Genre }}</li>
          <li>Plot: {{ movie.Plot }}</li>
          <li>Rated: {{ movie.Rated }}</li>
          <li>Runtime: {{ movie.Runtime }}</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center mb-10">
      <button @click="router.push(`/movie/${movie.imdbID}/seat`)" class="rounded-lg px-40 py-5 btn">BOOK</button>
    </div>
  </section>
</template>
