<template>
  <div class="block">
    <div class="container">
      <h2 class="title title-font">Как мы работаем</h2>
      <div>
        <img class="work-scheme" src="assets/images/block12/work.png" alt="Схема работы строительной компании каркасных домов Никоро">
      </div>

      <form class="form-horizontal" @submit.prevent="submit" v-if="!done">
        <div class="form-group">
          <div class="col-sm-4">
            <input type="text" name="name" pattern="[a-zA-Zа-яА-Я\s]+" placeholder="Введите имя" v-model="name" title="Введите только буквы">
          </div>
          <div class="col-sm-4">
            <input type="tel" name="phone" pattern="\s*[0-9+][0-9-()\s]*" placeholder="Введите телефон" v-model="phone" title="Пример: +79991112233">
          </div>
          <div class="col-sm-4">
            <button type="submit" class="btn">Отправить заявку</button>
            <div class="personal-data">
              Отправляя персональные данные, вы соглашаетесь на их обработку
            </div>
          </div>
        </div>
      </form>

      <div class="thanks" v-else>
        <svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="230 230 52 52" enable-background="new 230 230 52 52" xml:space="preserve" width="100px" height="100px">
          <switch>
            <g i:extraneous="self">
              <g>
                <g>
                  <path fill="#ea1821" d="M256,230.5c-14.1,0-25.5,11.4-25.5,25.5s11.4,25.5,25.5,25.5c14.1,0,25.5-11.4,25.5-25.5      S270.1,230.5,256,230.5z M256,278.2c-12.2,0-22.2-9.9-22.2-22.2c0-12.2,9.9-22.2,22.2-22.2c12.2,0,22.2,9.9,22.2,22.2      C278.2,268.2,268.2,278.2,256,278.2z"/>
                  <path fill="#ea1821" d="M265.2,247.7l-13.1,13.1l-5.3-5.3c-0.7-0.7-1.7-0.7-2.4,0c-0.7,0.7-0.7,1.7,0,2.4l6.5,6.5      c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5c0,0,0,0,0,0l14.3-14.3c0.7-0.7,0.7-1.7,0-2.4C266.9,247,265.9,247,265.2,247.7z"/>
                </g>
              </g>
            </g>
          </switch>
        </svg><br>
        <span>Спасибо! Наш менеджер cкоро свяжется с вами</span>
      </div>

    </div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        name: '',
        phone: '',
        done: false
      }
    },
    components: {},
    methods: {
      submit() {
        if (!this.name || !this.phone) {
          return;
        }

        var that = this;
        $.ajax({
          type: "POST",
          url: 'email.php',
          data: {
            desc: 'Пользователь оставил заявку в блоке "Как мы работаем"',
            name: this.name,
            phone: this.phone
          },
          success: function() {
            that.done = true;
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .block {
    padding: 50px 0;
    background-color: #1b1d1c;
    color: white;

    .title {
      font-size: 37px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 40px;
    }

    .work-scheme {
      margin-bottom: 70px;
    }

    input {
      border: 2px solid #ea1821;
      padding: 12px 15px;
      width: 100%;
      background-color: #1b1b1c;

      @media (max-width: 767px) {
        margin-bottom: 15px;
      }
    }

    .btn {
      border-radius: 0;
      background-color: #EA1821;
      padding: 14px 15px;
      width: 100%;

      &:hover {
        color: white;
        background-color: #bb131a;
      }
    }

    .personal-data {
      text-align: center;
      font-size: 12px;
      padding: 15px 30px 0;
    }

    .thanks {
      text-align: center;

      span {
        font-size: 21px;
        line-height: 30px;
      }
    }
  }
</style>
