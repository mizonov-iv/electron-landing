<template>
  <div class="container px-4" id="custom-cards">
    <h2 class="mt-5 pb-2 border-bottom text-center">Комплексные решения</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col" v-for="(item, index) in solutions" :key="index">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg rr" :style="{ 'background-image': 'url(' + item.img_url + ')'}">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">{{item.title}}</h2>
<!--            <p class="text-center fw-bold ">{{item.price}}</p>-->
          </div>
        </div>
      </div>
    </div>



    <div>
      <h2 class="mt-5 pb-2 border-bottom text-center">Электромонтажные работы под ключ и с гарантией качества</h2>
      <p>Срочно потребовались услуги электрика или нужна помощь в установке электрооборудования в Краснодаре и Краснодарском крае? Обратитесь в «ЭЛЕКТРОМОНТАЖ» — наш сотрудник будет направлен на ваш объект в течение 1 часа после заявки!</p>
      <br>
      <p>Электромонтажные работы требуют соответствующих знаний и квалификации. Услуги электрика — область, в которой непрофессионализм недопустим, а попытки сэкономить могут не только привести к порче дорогого оборудования, но и крайне опасны для жизни и здоровья людей. Поэтому рекомендуем обратиться в профильную фирму, сотрудники которой обладают соответствующими разрядами и допусками к проведению данных работ.</p>
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
.rr {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>