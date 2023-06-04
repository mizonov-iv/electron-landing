<template>
  <h3 class="m-3 border-bottom text-center mb-3">Ресторан вьетнамской кухни Дед Хо</h3>
  <div class="container ">
    <div id="ded" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#ded" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#ded" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#ded" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#ded" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#ded" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#ded" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active " data-bs-interval="2000">
          <img src="/img/slider/office/ded/1.jpeg" class="umasheva-slider-img" alt="slide">
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src="/img/slider/office/ded/2.jpeg" class="umasheva-slider-img" alt="slide">
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src="/img/slider/office/ded/3.jpeg" class="umasheva-slider-img" alt="slide">
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src="/img/slider/office/ded/4.jpeg" class="umasheva-slider-img" alt="slide">
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src="/img/slider/office/ded/5.jpeg" class="umasheva-slider-img" alt="slide">
        </div>
        <div class="carousel-item " data-bs-interval="2000">
          <img src="/img/slider/office/ded/6.jpeg" class="umasheva-slider-img" alt="slide">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#ded" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#ded" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style>
.umasheva-slider-img {
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

@media (min-width: 600px) {
  .umasheva-slider-img {
    height: 600px;
  }
}
</style>