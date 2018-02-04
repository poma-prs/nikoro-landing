<template>
  <div class="block">
    <div class="container">
      <h2 class="title title-font">Как мы работаем</h2>
      <div>
        <img class="work-scheme" src="/assets/images/block12/work.png" alt="Схема работы строительной компании каркасных домов Никоро">
      </div>

      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-4">
            <input type="text" name="name" placeholder="Введите имя">
          </div>
          <div class="col-sm-4">
            <input type="tel" name="tel" pattern="[0-9-+()\s]+" placeholder="Введите телефон">
          </div>
          <div class="col-sm-4">
            <button type="submit" class="btn">Отправить заявку</button>
            <div class="personal-data">
              Отправляя персональные данные, вы соглашаетесь на их обработку
            </div>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  module.exports = {
    components: {}
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
  }
</style>
