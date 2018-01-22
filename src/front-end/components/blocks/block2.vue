<template>
  <div class="block">
    <div class="container">
      <div class="title">Наши преимущества</div>
      <div class="row">
        <div class="col-sm-4" v-for="item in benefits">
          <div class="benefit">
            <div class="shape-container"><img :src="item.img"></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container partners">
      <div class="title">Партнеры</div>
      <div class="row">
        <div class="col-sm-6" v-for="item in partners">
          <div class="partner-container"><img :src="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var benefits = [{
    img: '/assets/images/block2/shape1.png',
    text: 'Входим в ГК "Дом", основанную в 1997г.'
  },{
    img: '/assets/images/block2/shape2.png',
    text: 'Гарантия 10 лет'
  },{
    img: '/assets/images/block2/shape3.png',
    text: 'Материалы высокого качества'
  },{
    img: '/assets/images/block2/shape4.png',
    text: 'Бесплатный проект'
  },{
    img: '/assets/images/block2/shape5.png',
    text: 'Опыт бригад более 5 лет'
  },{
    img: '/assets/images/block2/shape6.png',
    text: 'Строим по технологии СНиП СП31-105-2002'
  }];

  var partners = [
    '/assets/images/block2/partner1.png',
    '/assets/images/block2/partner1.png'
  ];

  module.exports = {
    data() {
      return { benefits, partners };
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    padding: 50px 0;
    background-color: white;

    .title {
      font-size: 37px;
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

    .partners {
      text-align: center;

      .title {
        font-size: 23px;
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 30px;
      }

      .partner-container {
        margin-bottom: 25px;
      }
    }
  }
</style>
