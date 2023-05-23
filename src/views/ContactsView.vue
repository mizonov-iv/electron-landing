<template>
  <div class="h-50 mb-5">
    <h2 class="m-5 pb-2 border-bottom text-center">Как с нами связаться:</h2>

    <h4 class="mt-5 pb-2 text-center">Вы всегда можете воспользоваться формой обратной связи:</h4>
    <ContactForm/>

  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  components: {ContactForm}
}
</script>

<style scoped>

</style>