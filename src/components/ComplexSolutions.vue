<template>
  <div class="container px-4" id="custom-cards">
    <h2 class="mt-5 mb-3 pb-2 border-bottom text-center">Комплексные решения</h2>

    <div class="d-flex flex-column justify-content-center flex-md-row" >
      <div class="col-10 col-sm-3 mx-auto" v-for="(item, index) in solutions" :key="index">
        <img class="d-block rounded-5" :src="item.img_url" alt="">
        <h4 class="mt-2 mb-3 fs-4 fw-normal text-center">{{item.title}}</h4>
      </div>
    </div>

    <div>
      <h2 class="mt-5 mb-3 pb-2 border-bottom text-center">Электромонтажные работы под ключ и с гарантией качества</h2>
      <p class="lead"><strong>Tamers Electron</strong> - это команда <strong>лучших специалистов в сфере электроснабжения</strong>, готовых реализовать проекты любой сложности от «А» до «Я» с <strong>соблюдением всех требований</strong> государственных стандартов.</p>
      <br>
      <p class="lead">Выполнение электромонтажных работ - это задача, требующая профессиональной подготовки с целью обеспечить надёжное подключение и соединение при соблюдении необходимых мер безопасности.
      </p>
      <br>
      <p class="lead">
        Мы предлагаем услуги по проведению профессиональных электромонтажных работ, обеспечивая вас <strong>быстрым и грамотным обслуживанием по доступным ценам</strong>.
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
    img_url: "/img/complex-solutions/apartments.jfif",
    price: "от 1 200 руб./кв. м"
  },
  {
    title: "ДОМА",
    img_url: "/img/complex-solutions/home.jfif",
    price: "от 1 450 руб./кв. м"
  },
  {
    title: "ОФИСЫ",
    img_url: "/img/complex-solutions/office.jfif",
    price: "от 1 050 руб./кв. м"
  },
])
</script>

<style scoped>
.bg-setup {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>