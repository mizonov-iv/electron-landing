<template>
  <div class="footer mt-auto py-3 footer-bg">
    <div class="container d-flex flex-column flex-md-row justify-content-md-center align-items-center">
      <div class="footer__logo mb-5">
        <img src="/img/logotype.png" alt="logo">
      </div>

      <div class="w-50">
<!--        <div class="h6 text-center m-0 mt-5">-->
<!--          <p class="fw-bold m-0">Екатеринбург</p>-->
<!--        </div>-->
        <div class="h6 text-center mt-2">
          <p class="fw-bold m-0 mb-1">Телефон</p>
          <a class="fw-light text-decoration-none" href="tel:+79920125212">+7-992-012-52-12</a>
          <br>
          <a class="fw-light text-decoration-none" href="tel:+79126451078">+7-912-645-10-78</a>
        </div>
        <div class="h6 text-center m-0 mt-2">
          <p class="fw-bold m-0">E-mail</p>
          <a class="fw-light text-decoration-none" href="mailto:tamers.ekb@mail.ru">tamers.ekb@mail.ru</a>
        </div>
        <div class="h6 text-center m-0 mt-2">
          <p class="fw-bold m-0">Режим работы</p>
          <p class="fw-light m-0">09:00 до 18:00</p>
        </div>
      </div>
    </div>
    <div>
      <hr class="border-1 w-100">
      <div class="h6 text-center">
        <p>© «Tamers Electron» - "Электромонтажные работы в Екатеринбурге", 2010-2023.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer__logo {
  width: 200px;
  height: 45px;
  /*margin: 0 auto;*/
}
.footer-bg {
  background: rgba(130,130,130,0.3);
}
</style>