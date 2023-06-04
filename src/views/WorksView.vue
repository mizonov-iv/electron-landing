<template>
  <div class="container mx-auto mb-5">
    <h2 class="m-3 pb-2 text-center fw-bold fs-1 mt-4">Квартиры</h2>
    <UmashevaSlider/>
    <SherbakovaSlider/>
    <RiveraSlider/>

    <h2 class="m-3 pb-2 text-center fw-bold fs-1 mt-4">Офисные помещения</h2>
    <MelnicaSlider/>
    <DedSlider/>

    <h2 class="m-3 pb-2 text-center fw-bold fs-1 mt-4">Система умный дом</h2>
    <SmartSlider/>

    <h2 class="m-3 pb-2 text-center fw-bold fs-1 mt-4">Декоративное освещение</h2>
    <VerhSlider/>
    <BerezkaSlider/>
    <HomeSlider/>

  </div>
</template>

<script>
import UmashevaSlider from "../components/sliders/apartments/UmashevaSlider.vue";
import SherbakovaSlider from "../components/sliders/apartments/SherbakovaSlider.vue";
import RiveraSlider from "../components/sliders/apartments/RiveraSlider.vue";
import MelnicaSlider from "../components/sliders/office/MelnicaSlider.vue";
import DedSlider from "../components/sliders/office/DedSlider.vue";
import SmartSlider from "../components/sliders/smart/SmartSlider.vue";
import VerhSlider from "../components/sliders/decor/VerhSlider.vue";
import BerezkaSlider from "../components/sliders/decor/BerezkaSlider.vue";
import HomeSlider from "../components/sliders/decor/HomeSlider.vue";

export default {
  components: {
    HomeSlider,
    BerezkaSlider,
    VerhSlider, SmartSlider, DedSlider, MelnicaSlider, RiveraSlider, UmashevaSlider, SherbakovaSlider}
}
</script>