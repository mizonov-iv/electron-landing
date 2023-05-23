<template>
  <div class="container px-4" id="custom-cards">
    <h2 class="mt-5 pb-2 border-bottom text-center">Комплексные решения</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col" v-for="(item, index) in solutions" :key="index">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bg-setup" :style="{ 'background-image': 'url(' + item.img_url + ')'}">
          <div class="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1 mb-5">
          </div>
        </div>
        <h4 class="mb-3 lh-1 fw-bold text-center">{{item.title}}</h4>
      </div>
    </div>

    <div>
      <h2 class="mt-5 mb-3 pb-2 border-bottom text-center">Электромонтажные работы под ключ и с гарантией качества</h2>
      <p class="lead">Tamers Electron - это команда лучших специалистов в сфере электроснабжения, готовых реализовать проекты любой сложности от «А» до «Я» с соблюдением всех требований государственных стандартов.</p>
      <br>
      <p class="lead">Выполнение электромонтажных работ - это задача, требующая профессиональной подготовки с целью обеспечить надёжное подключение и соединение при соблюдении необходимых мер безопасности.
      </p>
      <br>
      <p class="lead">
        Мы предлагаем услуги по проведению профессиональных электромонтажных работ, обеспечивая вас быстрым и грамотным обслуживанием по доступным ценам.
      </p>

      <br>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
const solutions = ref([
  {
    title: "КВАРТИРЫ",
    img_url: "/img/complex-solutions/apartments.jpg",
    price: "от 1 200 руб./кв. м"
  },
  {
    title: "ДОМА",
    img_url: "/img/complex-solutions/home.jpg",
    price: "от 1 450 руб./кв. м"
  },
  {
    title: "ОФИСЫ",
    img_url: "/img/complex-solutions/office.jpg",
    price: "от 1 050 руб./кв. м"
  },
])
</script>

<style scoped>
.bg-setup {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>