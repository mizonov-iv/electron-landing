<template>
  <img class="img-fluid d-block" src="/img/hero-bg.jpg" alt="hero-bg">
  <div class="d-flex flex-md-row justify-content-md-center align-items-center col-md-10 col-10 flex-column mx-auto" style="background-color: #363636">
    <div class="p-3 col-md-3 d-flex text-light hero-item-orange"
        v-for="(item, index) in features" :key="index">
      <img class="mx-2" :src="item.img_url" alt="">
      <p class="mx-2">{{item.name}}</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const features = ref([
  {
    name: "16 лет на рэнке электроснабжения",
    img_url: "/icons/worker.svg"
  },
  {
    name: "Более 300 выполненных проектов",
    img_url: "/icons/light.svg"
  },
  {
    name: "Доступные цены",
    img_url: "/icons/count.svg"
  },
  {
    name: "РАССЧИТАТЬ СТОИМОСТЬ",
    img_url: "/icons/calculator.svg"
  },
])

</script>

<style scoped>

</style>