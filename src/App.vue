<template>
  <div class="container-fluid">
    <Navbar/>
    <Hero/>
    <Features/>
<!--    <ComplexSolutions/>-->
    <Slider/>
    <Benefits/>
    <Why/>
    <h2 class="m-5 pb-2 border-bottom text-center">Оставьте эксперсс заявку</h2>
    <ContactForm/>
    <Footer/>
  </div>

</template>

<script setup>

import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import ComplexSolutions from "./components/ComplexSolutions.vue";
import Benefits from "./components/Benefits.vue";
import Why from "./components/Why.vue";
import Slider from "./components/Slider.vue";
import Footer from "./components/Footer.vue";
import ContactForm from "./components/ContactForm.vue";
</script>


