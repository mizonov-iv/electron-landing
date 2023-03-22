<template>
  <div class="hero">
    <div class="features">
      <ul class="features__list" v-for="(item, index) in features" :key="index">
        <li class="features__item">
          <img class="features__item--img" :src="item.img_url" alt="">
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