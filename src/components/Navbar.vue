<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img style="display: block; margin: 0 auto; width: 120px; height: 100px;" src="/img/logo.jpeg" alt="logo">
        <p>Tamers Electron</p>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Главная</router-link>
          </li>
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Услуги
            </div>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Электромонтажные работы</a></li>
              <li><a class="dropdown-item" href="#">Слаботочные сети</a></li>
              <li><a class="dropdown-item" href="#">Система умный дом</a></li>
              <li><a class="dropdown-item" href="#">Декоративное освещение</a></li>
              <li><a class="dropdown-item" href="#">Сборка электрощита</a></li>
              <li><a class="dropdown-item" href="#">Заземление</a></li>
              <li><a class="dropdown-item" href="#">Молниезащита</a></li>
              <li><a class="dropdown-item" href="#">Проектирование</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/works">Наши работы</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О нас</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Контакты</router-link>
          </li>
        </ul>
        <!-- Button trigger modal -->
        <button type="button" class="btn text-light" style="background: #f57c00" data-bs-toggle="modal" data-bs-target="#Modal">
          Заказать звонок
        </button>
      </div>
    </div>
  </nav>

  <!-- Modal -->
  <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Оставьте заявакзаявку, мы свяжемся с вами</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="text-center">Введите свое имя и контактный телефон. Наш менеджер свяжется с Вами в кротчайшие сроки.</p>
          <ContactForm/>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import ContactForm from "./ContactForm.vue";
</script>