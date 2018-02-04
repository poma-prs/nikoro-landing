<template>
  <div class="block">
    <div class="container">

      <div class="row">
        <div class="col-sm-offset-1 col-sm-11">
          <h2 class="title title-font">Преимущества каркасных домов</h2>
          <ul class="benefits">
            <li class="benefit" v-for="(item, index) in benefits" v-if="index < 4">{{ item }}</li>
          </ul>
          <ul class="benefits">
            <li class="benefit" v-for="(item, index) in benefits" v-if="index > 3">{{ item }}</li>
          </ul>
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
    'Затраты на отопление на 58% меньше',
    'Можно строить и отделывать поэтапно'
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
    padding: 70px 0;
    background-color: #fafafa;
    background-image: url(assets/images/block3/background.jpg);
    background-size: cover;

    .title {
      font-size: 37px;
      font-weight: bold;
      margin: 0;
      margin-bottom: 45px;

      @media (max-width: 767px){
        text-align: center;
      }
    }

    .benefits {
      list-style-type: none;
      padding: 0;
    }

    @media (min-width: 768px) {
      .benefits {
        display: flex;
        justify-content: space-between;
      }

      .benefit {
        position: relative;
        border: 2px solid #ea1821;
        padding: 15px;
        height: 180px;
        max-width: 180px;
        margin: 25px 5px;

        &::before {
          content: ' ';
          position: absolute;
          height: 30px;
          bottom: 10px;
          right: 24px;
          border-left: 2px solid #ea1821;
          transition:all 0.3s ease;
        }

        &::after {
          content: ' ';
          position: absolute;
          width: 30px;
          bottom: 24px;
          right: 10px;
          border-top: 2px solid #ea1821;
          transition:all 0.3s ease;
        }

        &:hover {
          &::before {
            transform: rotate(90deg);
          }

          &::after {
            transform: rotate(90deg);
          }
        }
      }
    }

    @media (max-width: 767px) {
      .benefit {
        position: relative;
        padding: 10px 0 10px 50px;

        &::before {
          content: ' ';
          position: absolute;
          width: 35px;
          left: 0;
          top: 50%;
          border-top: 2px solid #ea1821;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
