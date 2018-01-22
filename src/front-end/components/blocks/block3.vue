<template>
  <div class="block">
    <div class="container">
      <div class="row">
        <div class="col-sm-5 hidden-xs img-container">
          <img src="/assets/images/block3/home1.png">
        </div>
        <div class="col-sm-7">
          <div class="title">Преимущества каркасных домов</div>
          <div class="benefits">
            <div class="benefit" v-for="item in benefits">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var benefits = [
    'На 50% дешевле кирпичного дома',
    'Возможность круглогодичного строительства',
    'Любая архитектурная форма и отделка',
    'Прогрев дома от 5 до 20°C за 1 час',
    'Сроки возведения 30-120 дней',
    '50 лет - срок службы до первого серьезного ремонта',
    'Затраты на отопление на 58% меньше'
  ];

  module.exports = {
    data() {
      return { benefits };
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    padding: 50px 0;
    background-color: #1b1d1c;
    color: white;

    @media (max-width: 767px) {
      background-image: url(assets/images/block3/home1.png);
      background-size: cover;
      background-position: right;

      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }

    .row {
      display: flex;
      align-items: stretch;
    }

    .img-container {
      position: relative;

      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 20%;
        bottom: 0;
        border: 2px #ea1821 solid;
      }

      img {
        max-width: none;
        max-height: none;
        position: absolute;
        top: 0;
        right: 10%;
        height: 105%;
      }
    }

    .title {
      margin: 30px 0;
      font-size: 37px;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    .benefits {
      .benefit {
        position: relative;
        padding: 22px 0;
        padding-left: 70px;
        font-size: 16px;

        &::before {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 56px;
          height: 2px;
          background-color: #ea1821;
        }

        &:hover {
          padding-left: 98px;

          &::before {
            width: 84px;
          }
        }
      }
    }
  }
</style>
