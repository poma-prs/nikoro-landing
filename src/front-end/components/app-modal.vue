<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form @submit.prevent="submit" v-if="!done">
            <input type="hidden" name="message" v-model="message">
            <div class="form-group">
              <input type="text" name="name" pattern="[a-zA-Zа-яА-Я]+" placeholder="Введите имя" v-model="name" title="Введите только буквы">
            </div>
            <div class="form-group" v-if="isphone">
              <input type="tel" name="phone" pattern="\s*[0-9+][0-9-()\s]*" placeholder="Введите телефон" v-model="phone" title="Пример: +79991112233">
            </div>
            <div class="form-group" v-if="isemail">
              <input type="email" name="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Введите email" v-model="email" title="Пример: example@site.ru">
            </div>
            <div class="form-group">
              <button type="submit" class="btn">Отправить заявку</button>
              <div class="personal-data">
                Отправляя персональные данные, вы соглашаетесь на их обработку
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
            <span>Спасибо!</span><br>
            Наш менеджер cкоро свяжется с вами
            <div class="btn" data-dismiss="modal" aria-label="Close">Закрыть</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        done: false
      }
    },
    props: {
      message: { type: String },
      isphone: { type: Boolean, default: true },
      isemail: { type: Boolean, default: false }
    },
    methods: {
      submit() {
        if (!this.name || this.isphone && !this.phone || this.isemail && !this.email) {
          return;
        }

        var that = this;
        $.ajax({
          type: "POST",
          url: 'email.php',
          data: {
            desc: this.message,
            name: this.name,
            phone: this.phone,
            email: this.email
          },
          success: function() {
            console.log(that.done);
            that.done = true;
            console.log(that.done);
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .modal-header {
    border: 0;

    .close {
      position: relative;
      color: white;
      font-size: 25px;
      width: 30px;
      height: 30px;

      &::before {
        content: ' ';
        position: absolute;
        height: 30px;
        top: 0;
        left: 14px;
        border-left: 2px solid white;
        transform: rotate(45deg);
      }

      &::after {
        content: ' ';
        position: absolute;
        width: 30px;
        top: 14px;
        left: 0;
        border-top: 2px solid white;
        transform: rotate(45deg);
      }
    }
  }

  .modal-content {
    border: 0;
    border-radius: 0;
    background-color: #1b1b1c;
    color: white;
    text-align: center;

    form {
      @media (min-width: 768px) {
        display: inline-block;
        margin: 0 auto;
        max-width: 300px;
      }
    }

    input {
      border: 2px solid #ea1821;
      padding: 12px 15px;
      width: 100%;
      background-color: #1b1b1c;
      margin-bottom: 15px;
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
      font-size: 21px;
      margin: 0 auto;
      max-width: 400px;

      span {
        font-size: 25px;
      }

      i {
        font-size: 50px;
        color: #EA1821;
      }

      .btn {
        margin-top: 20px;
      }
    }
  }
</style>
