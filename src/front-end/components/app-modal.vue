<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form>
            <div class="form-group">
              <input type="text" name="name" placeholder="Введите имя">
            </div>
            <div class="form-group">
              <input type="tel" name="tel" pattern="[0-9-+()\s]+" placeholder="Введите телефон">
            </div>
            <div class="form-group">
              <button type="submit" class="btn">Отправить заявку</button>
              <div class="personal-data">
                Отправляя персональные данные, вы соглашаетесь на их обработку
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      message: { type: String }
    },
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
  }
</style>
