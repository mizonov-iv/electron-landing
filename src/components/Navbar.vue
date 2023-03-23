<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tamers Electron</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Главная</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Услуги
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Услуга № 1</a></li>
              <li><a class="dropdown-item" href="#">Услуга № 2</a></li>
              <li><a class="dropdown-item" href="#">Услуга № 3</a></li>
              <li><a class="dropdown-item" href="#">Услуга № 4</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Наши работы</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Цены</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Контакты</a>
          </li>
        </ul>
        <button class="btn btn-danger">Заказать звонок</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>