<template>
  <div class="mb-5">
    <Slider/>
    <h1 class="m-5 pb-2 text-center">Фотографии монтажа</h1>
    <SliderMelnica/>
    <SliderRivera/>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import SliderMelnica from "../components/SliderMelnica.vue";
import SliderRivera from "../components/SliderRivera.vue";

export default {
  components: {SliderRivera, Slider, SliderMelnica}
}
</script>