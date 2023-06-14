<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div>
    <div class="top">
      <h1>Soap2Morrow</h1>
      <h3>Purchases</h3>
    </div>
  </div>
  <div class="buy">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 20rem;
}

.buy {
  display: grid;
  position: relative;
  color: aliceblue;
  grid-template-columns: repeat(5, 1fr);
  /* left: 100px; */
  background-image: linear-gradient(
    /* 90deg, */ #020024 0%,
    #090979 35%,
    #00d4ff 100%
  );
}

.top {
  text-align: center;
  color: aliceblue;
  background-color: rgb(6, 86, 140);
}
</style>
