<template>
  <h2 class="mt-5 pb-2 border-bottom text-center">Преимущества и выгоды умного дома</h2>
  <div class="d-flex flex-md-row flex-column col-12 mx-auto mt-3">
    <div class="border d-flex align-items-md-center flex-column align-items-center col-md-3 flex-wrap p-2" v-for="(item, index) in features" :key="index">
      <img class="w-25" :src="item.img_url" :alt="item.title">
      <p class="mt-3 fw-bold text-center">{{ item.title }}</p>
      <p class="mt-3 text-center">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const features = ref([
  {
    title: "Интеграция с инженерными системами",
    text: "Комплексные решения \"под ключ\": от разработки проекта до пуско-наладочных работ.\n" +
        "\n" +
        "Проекты разработаны в соответствии с современными требованиями и нормативами.\n" +
        "\n" +
        "Гибкая поэтапная система оплаты. Выполнение работ с соблюдением сроков.\n" +
        "\n" +
        "Бесплатно: техническая консультация, первичные расчеты сметы, выезд на объект.",
    img_url: "/icons/features/list.png"
  },
  {
    title: "Безопасность и защита имущества",
    text: "Сообщит об утечке газа, протечке воды или пожаре Вам и соответствующим службам. Перекроет газ/воду. отключит электричество.\n" +
        "\n" +
        "Система охраны защитит от воров.\n" +
        "\n" +
        "Имитирует ваше присутствие во время отъезда - включает и выключает свет, раздвигает и задвигает шторы.\n" +
        "\n" +
        "При вашем уходе из дома поставит его на сигнализацию, выключит свет и обесточит все розетки, кроме нужных.\n" +
        "\n" +
        "Наружная защита дома - системы молниезащиты и антиобледенения крыши.",
    img_url: "/icons/features/home.png"
  },
  {
    title: "Комфорт и забота о здоровье",
    text: "Комфортный микроклимат - благодаря автоматическому контролю работы систем отопления, кондиционирования и вентиляции.\n" +
        "\n" +
        "Всегда доступная чистая вода, поставляемая системой водоснабжения.\n" +
        "\n" +
        "Умное освещение - система сама выключит свет при Вашем отсутствии, закроет шторы с наступлением сумерек.\n" +
        "\n" +
        "Экономит время, благодаря автоматизации процессов и возможности удаленного управления.\n" +
        "\n" +
        "Простота управления: удобный интерфейс мобильного приложения и высокая скорость работы.",
    img_url: "/icons/features/delivery-truck.png"
  },
  {
    title: "Энергосбережение и экономия",
    text: "Свет только там, где есть люди.\n" +
        "\n" +
        "Сберегающая тепло система вентиляции.\n" +
        "\n" +
        "Оптимальная работа всех инженерных систем дома в целях экономии энергии.\n" +
        "\n" +
        "Поддерживает минимальную температуру ночью или в Ваше отсутствие и повышает температуру перед пробуждением или приходом домой.",
    img_url: "/icons/features/drill.png"
  },
])
</script>