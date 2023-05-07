<script setup>
  import { useHistoryStore } from '@/stores/history';
  const history_store = useHistoryStore();
</script>

<template>
  <div class="my-5">
    <RouterLink to="/"><i class="fa-sharp fa-solid fa-arrow-left text-4xl hover:scale-110 transition-all"></i></RouterLink>
  </div>
  <div class="flex justify-center items-center p-5 mb-10">
    <p class="text-4xl font-bold">Booking History</p>
  </div>
  <section>
    <div class="flex items-center gap-10 mb-10" v-for="(history, index) in history_store.histories" :key="index">
      <div class="shadow-sm bg-amber-600 rounded-md overflow-hidden card">
        <img class="card__poster" :src="history.poster" :alt="history.title">
      </div>
      <div>
        <p>{{ history.title }}</p>
        <p>Seats: </p>
      </div>
    </div>
  </section>
</template>