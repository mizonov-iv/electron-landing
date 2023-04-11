<template>
  <div class="container-fluid">
    <Navbar/>
    <Hero/>
    <Features/>
<!--    <ComplexSolutions/>-->
    <Slider/>
    <Benefits/>
    <Why/>
    <p class="text-center display-5">Оставьте эксперсс заявку</p>
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


