<template>
  <div class="hero">
    <div class="features w-75">
      <ul class="d-flex flex-md-row justify-content-md-between flex-column justify-content-center w-100 p-0">
        <li class="d-flex justify-content-center align-items-center p-2 features__item" v-for="(item, index) in features" :key="index">
          <img class="features__item--img" :src="item.img_url" :alt="item.name">
          <p class="features__item-text">{{item.name}}</p>
        </li>
      </ul>
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