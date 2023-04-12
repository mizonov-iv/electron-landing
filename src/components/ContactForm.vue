<template>
  <div class="mt-4 mb-4">
    <form class="col-9 col-md-7 mx-auto d-flex flex-column  align-items-center" id="tg">
      <div class="form-floating w-100">
        <input
            class="form-control m-1"
            type="text"
            placeholder="Введите имя..."
            v-model="form.name"
            id="validationUsername"
        >
        <label for="validationUsername">Ваше имя</label>
      </div>
      <div class="form-floating w-100">
        <input
            class="form-control m-1"
            type="tel"
            placeholder="Номер телефона"
            v-model="form.phone"
            v-mask="'+7(###)###-##-##'"
            id="validationPhone"
        >
        <label for="validationPhone">Номер телефона</label>
      </div>
      <button
          class="btn btn btn-outline-dark mt-1 w-100 p-3"
          @click.prevent="sendMessage"
          :disabled="form.name === '' || form.phone === ''"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {mask} from "vue-the-mask";

export default {
  data: () => ({
    form: {
      name: "",
      phone: ""
    }
  }),
  directives: {mask},
  methods: {
    sendMessage() {

      const TOKEN = "6007647990:AAHb4yoQud_IOGMHq4y54qwWKcWfvtsgSWM"
      const CHAT_ID = "-1001908951551"
      const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

      let message = `<b>Заявка с сайта</b>\n`
      message += `<b>Отправитель: </b> ${this.form.name} \n`
      message += `<b>Телефон: </b> ${this.form.phone}`

      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })

      this.form.name = ""
      this.form.phone = ""
    }
  }
}
</script>

<style scoped>

</style>