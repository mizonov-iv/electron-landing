<template>
  <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom">Реализация проектов любой сложности под ключ от заявки до конечной сдачи работ</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col" v-for="(item, index) in features" :key="index">
        <div class="feature-icon">
          <img :src="item.img_url" :alt="item.title">
        </div>
        <h2>{{ item.title }}</h2>

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