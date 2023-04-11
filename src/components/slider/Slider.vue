<template>

<!--WRAPPER-->
  <div class="mx-auto overflow-hidden mt-20 relative" style="max-width: 300px; height: 300px">
<!--SLIDER-->
    <div class="" :style="{'margin-left': '-' + (100 * currentImg) + '%'}" style="display: flex">
      <SliderItem
          v-for="item in sliderImages"
          class="w-full"
          :item="item.img_url"
      />
    </div>
    <button class="border-2 p-2" @click.prevent="prevSlide">Назад</button>
    <button class="border-2 p-2" @click.prevent="nextSlide">Вперед</button>
  </div>

</template>

<script setup>
import SliderItem from "./SliderItem.vue";
import {ref} from 'vue'

const sliderImages = ref([
  {id: 1, img_url: '/img/slider/1.jpeg'},
  {id: 2, img_url: '/img/slider/2.jpeg'},
  {id: 3, img_url: '/img/slider/3.jpeg'},
  {id: 4, img_url: '/img/slider/4.jpeg'},
  {id: 5, img_url: '/img/slider/5.jpeg'},
  {id: 6, img_url: '/img/slider/6.jpeg'},
  {id: 7, img_url: '/img/slider/7.jpeg'},
])

const currentImg = ref(0)

const prevSlide = () => {
  if(currentImg.value > 0) {
    currentImg.value--
    console.log(currentImg.value)
  }
}
const nextSlide = () => {
  currentImg.value++
  console.log(currentImg.value)

}
</script>

<!--<template>-->
<!--  <div class="container">-->
<!--    <div id="carouselExampleIndicators" class="carousel slide">-->
<!--      <div class="carousel-indicators">-->
<!--        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>-->
<!--        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>-->
<!--        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>-->
<!--      </div>-->
<!--      <div class="carousel-inner">-->
<!--        <div class="carousel-item active" style="height: 500px;">-->
<!--          <img src="/img/slider/1.jpeg" class="slider-img" alt="...">-->
<!--        </div>-->
<!--        <div class="carousel-item" style="height: 300px">-->
<!--          <img src="/img/slider/2.jpeg" class="slider-img" alt="...">-->
<!--        </div>-->
<!--        <div class="carousel-item" style="height: 300px">-->
<!--          <img src="/img/slider/3.jpeg" class="slider-img" alt="...">-->
<!--        </div>-->
<!--      </div>-->
<!--      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">-->
<!--        <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--        <span class="visually-hidden">Previous</span>-->
<!--      </button>-->
<!--      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">-->
<!--        <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--        <span class="visually-hidden">Next</span>-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

