<template>
  <div class="block">
    <div class="container">
      <h2 class="title title-font">Наши преимущества</h2>
      <div class="row">
        <div class="col-sm-4" v-for="item in benefits">
          <div class="benefit">
            <div class="shape-container"><img :src="item.img"></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var benefits = [{
    img: 'assets/images/block7/shape1.png',
    text: 'Входим в ГК "Дом", основанную в 1997г.'
  },{
    img: 'assets/images/block7/shape2.png',
    text: 'Гарантия 10 лет'
  },{
    img: 'assets/images/block7/shape3.png',
    text: 'Материалы высокого качества'
  },{
    img: 'assets/images/block7/shape4.png',
    text: 'Бесплатный проект'
  },{
    img: 'assets/images/block7/shape5.png',
    text: 'Опыт бригад более 5 лет'
  },{
    img: 'assets/images/block7/shape6.png',
    text: 'Строим по технологии СНиП СП31-105-2002'
  }];

  module.exports = {
    data() {
      return { benefits };
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    padding: 70px 0;
    background-color: #fafafa;

    .title {
      font-size: 37px;
      font-weight: bold;
      text-align: center;
    }

    .benefit {
      display: flex;
      height: 130px;
      margin-top: 30px;
      align-items: center;
      font-size: 16px;
      line-height: 2;

      .shape-container {
        min-width: 150px;
        text-align: center;

        img {
          margin-right: 20px;
        }
      }
    }
  }
</style>
