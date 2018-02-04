<template>
  <div class="block">
    <div class="container">
      <div class="title">Группа Компаний “Дом” в цифрах</div>
      <div class="row">
        <div class="col-sm-3 text-center" v-for="item in items">
          <div class="item">
            <div class="item-value">{{ item.value }}</div>
            <hr>
            <div class="item-text">{{ item.text }}</div>
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
        items: [{
          value: '>300',
          text: 'сотрудников работает ежедневно'
        },{
          value: '21',
          text: 'год опыта в строительстве'
        },{
          value: '137',
          text: 'объектов сдали за последние 5 лет'
        },{
          value: '10',
          text: 'лет гарантии на работы'
        }]
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    padding: 50px 0;
    background-color: #fafafa;

    .title {
      font-size: 21px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 40px;
    }

    .item {
      display: inline-block;
      max-width: 170px;

      .item-value {
        font-size: 37px;
        font-weight: bold;
        margin-top: 20px;
      }

      hr {
        border: 0;
        border-bottom: 2px solid #ea1821;
        width: 80%;
        transition:all 0.3s ease;
      }

      &:hover {
        hr {
          width: 100%;
        }
      }
    }
  }
</style>
