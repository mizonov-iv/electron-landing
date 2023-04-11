<template>
  <div class="flex items-center justify-between border-2 h-20 px-5 md:px-20 lg:px-20">

    <div class="flex flex-row items-center w-1/5 cursor-pointer border-2 sm:mr-3">
      <img class="block mr-1 sm:mr-4" src="/Logo.svg" alt="logotype">
      <p class="text-2xl font-bold uppercase hidden sm:block">Electron Tamers</p>
    </div>

    <div class="flex flex-col justify-center h-20 w-4/5 sm:w-2/5 lg:w-3/5 border-2 sm:relative">
      <p class="block text-sm font-medium md:mb-1 sm:px-2">Электромонтажные <br class="md:hidden"> работы в Екатеринбурге</p>
      <ul
          class="lg:flex flex-row text-right uppercase border-2 absolute top-20 right-0 w-60 1/2 h-screen sm:w-full sm:h-1/2 sm:static z-40"
          :class="[burgerToggler ? 'block': 'hidden' ]"
      >
        <li class="nav-link">Главная</li>
        <li class="nav-link">Услуги</li>
        <li class="nav-link">Наши работы</li>
        <li class="nav-link">О нас</li>
        <li class="nav-link">Контакты</li>
      </ul>
    </div>

    <div class="flex w-1/5 lg:hidden">
      <div class="w-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </div>

      <div class="w-40" @click.prevent="burgerToggler = !burgerToggler">
        <svg v-if="!burgerToggler" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <svg v-if="burgerToggler" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </div>
    </div>

    <div class="hidden lg:block lg:flex md:flex-col items-center w-1/5 border-2">
      <a class=" block text-lg font-semibold" href="tel:+79920125212">+7 (992) 012-52-12</a>
      <button class="block text-base font-bold text-amber-500 hover:text-amber-500/60">Заказать звонок</button>
    </div>

  </div>
</template>


<!--<template>-->
<!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand" href="#">Tamers Electron</a>-->
<!--      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--        <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link active" aria-current="page" href="#">Главная</a>-->
<!--          </li>-->
<!--          <li class="nav-item dropdown">-->
<!--            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--              Услуги-->
<!--            </a>-->
<!--            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--              <li><a class="dropdown-item" href="#">Электромонтажные работы</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Слаботочные сети</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Система умный дом</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Декоративное освещение</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Сборка электрощита</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Заземление</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Молниезащита</a></li>-->
<!--              <li><a class="dropdown-item" href="#">Проектирование</a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#">Наши работы</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#">О нас</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#">Контакты</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <button class="btn btn-danger">Заказать звонок</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
<!--</template>-->

<script setup>

import {ref} from "vue";

const burgerToggler = ref(false)
</script>

<style scoped>

</style>