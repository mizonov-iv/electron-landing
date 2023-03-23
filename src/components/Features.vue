<template>
  <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom text-center">Реализация проектов любой сложности под ключ от заявки до конечной сдачи работ</h2>
    <div class="d-flex flex-row">
      <div class="feature d-flex flex-column align-items-center col-md-2" v-for="(item, index) in features" :key="index">
        <img class="features__item--img" :src="item.img_url" :alt="item.title">
        <p class="w-25 mt-3 text-center">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const features = ref([
  {
    title: "Составляем техническое задание",
    img_url: "/icons/features/list.png"
  },
  {
    title: "Проектируем инженерные сети",
    img_url: "/icons/features/home.png"
  },
  {
    title: "Поставляем оборудование",
    img_url: "/icons/features/delivery-truck.png"
  },
  {
    title: "Выполняем монтаж",
    img_url: "/icons/features/drill.png"
  },
  {
    title: "Производим пуско-наладку",
    img_url: "/icons/features/gears.png"
  },
  {
    title: "Производим сервисное обслуживание",
    img_url: "/icons/features/staff.png"
  },
])
</script>

<style scoped>

</style>