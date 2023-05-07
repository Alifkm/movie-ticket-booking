<script setup>
  import { useRouter, useRoute } from "vue-router";
  import { useHistoryStore } from '@/stores/history';
  import { ref, onBeforeMount } from "vue";
  import axios from "axios";

  const router = useRouter();
  const route = useRoute();
  const {id} = route.params;

  const movie = ref([]);
  onBeforeMount(async () => {
    await axios.get(`http://www.omdbapi.com/?apikey=31ccf49&i=${id}`)
      .then(response => movie.value = response.data)
  })
  
  const history_store = useHistoryStore();

  const history_input = ref({
    poster: '',
    title: '',
    seats: []
  })

  const createHistory = () => {
    history_input.value.poster = movie.value.Poster;
    history_input.value.title = movie.value.Title;
    history_store.create(history_input.value);

    alert("Booking successful");
    router.push('/history');
  }

</script>

<template>
  <section class="movie-seat">
    <div class="my-5">
      <RouterLink :to="'/movie/' + id" ><i class="fa-sharp fa-solid fa-arrow-left text-white text-4xl hover:scale-110 transition-all"></i></RouterLink>
    </div>
    <div class="mb-10">
      <div class="bg-slate-50 py-2 md:py-5 lg:py-10 rounded-md mb-40">
        <p class="text-center">SCREEN</p>
      </div>
      <div class="grid gap-y-10 sm:gap-x-4 md:gap-x-8 lg:gap-x-12 grid-cols-5 justify-items-center">
        <span class="p-2 md:p-5 lg:p-10 seats">A1</span>
        <span class="p-2 md:p-5 lg:p-10 seats">A2</span>
        <span class="p-2 md:p-5 lg:p-10 seats">A3</span>
        <span class="p-2 md:p-5 lg:p-10 seats">A4</span>
        <span class="p-2 md:p-5 lg:p-10 seats">A5</span>
        <span class="p-2 md:p-5 lg:p-10 seats">B1</span>
        <span class="p-2 md:p-5 lg:p-10 seats">B2</span>
        <span class="p-2 md:p-5 lg:p-10 seats">B3</span>
        <span class="p-2 md:p-5 lg:p-10 seats">B4</span>
        <span class="p-2 md:p-5 lg:p-10 seats">B5</span>
        <span class="p-2 md:p-5 lg:p-10 seats">C1</span>
        <span class="p-2 md:p-5 lg:p-10 seats">C2</span>
        <span class="p-2 md:p-5 lg:p-10 seats">C3</span>
        <span class="p-2 md:p-5 lg:p-10 seats">C4</span>
        <span class="p-2 md:p-5 lg:p-10 seats">C5</span>
      </div>
    </div>
    <div class="flex justify-center items-center mb-10">
      <form @submit.prevent="createHistory">
      <input 
        type="number" 
        min="1"
        max="5"
        placeholder="input number of seats"
        class="mx-5"
        />
      <input 
        type="submit"
        value="Select" 
        class="rounded-lg px-40 py-5 btn text-white"/>
    </form>
    </div>
  </section>
</template>