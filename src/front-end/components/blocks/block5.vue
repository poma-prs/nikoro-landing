<template>
  <div class="block">
    <div class="container">
      <div class="title">Дом вашей мечты уже есть в каталоге:</div>
      <div class="row">
        <div class="col-sm-4" v-for="home in homes">
          <div class="home-item">
            <img :src="home.img" :alt="home.name">
            <div class="home-desc">
              <div class="home-name">{{home.name}}</div>
              <div class="home-attr">
                <span>Общая площадь:</span>
                <span>{{home.square}} м<sup>2</sup></span>
              </div>
              <div class="home-attr">
                <span>Размер:</span>
                <span>{{home.sizes}} м</span>
              </div>
              <div class="home-price">{{ home.price }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row catalog">
        <div class="col-sm-7">
          <div class="title">Посмотрите каталог из 20 лучших наших проектов</div>
        </div>
        <div class="col-sm-5">
          <div class="btn">Получить каталог</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        homes: [{
          name: 'Каркасный дом',
          square: 130,
          sizes: '7x9',
          price: 'от 1.560.000 рублей',
          img: '/assets/images/block5/home1.jpg'
        },{
          name: 'Каркасный дом',
          square: 64,
          sizes: '6,4x7,2',
          price: 'от 990.000 рублей',
          img: '/assets/images/block5/home2.jpg'
        },{
          name: 'Дом из газобетона',
          square: 166,
          sizes: '18,4x14,3',
          price: 'от 2.350.000 рублей',
          img: '/assets/images/block5/home3.jpg'
        },{
          name: 'Каркасный дом',
          square: 85,
          sizes: '8x9',
          price: 'от 1.020.000 рублей',
          img: '/assets/images/block5/home4.jpg'
        },{
          name: 'Баня из бруса',
          square: 42,
          sizes: '5,2x10,7',
          price: 'от 408.000 рублей',
          img: '/assets/images/block5/home5.jpg'
        },{
          name: 'Газобетонный дом',
          square: 195,
          sizes: '14x16,3',
          price: 'от 5.070.000 рублей',
          img: '/assets/images/block5/home6.jpg'
        }]
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    padding: 70px 0;
    background-color: #1b1d1c;
    color: white;

    .title {
      font-size: 37px;
      margin-bottom: 30px;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    .home-item {
      position: relative;
      padding-top: 20px;
      margin: 15px 10px;
      z-index: 0;

      img {
        display: block;
        width: 90%;
      }

      &::before {
        content: ' ';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 85%;
        height: 80%;
        border: 2px #EA1821 solid;
        z-index: -1;
      }

      &:hover::before {
        @media (min-width: 768px) {
          height: 100%;
        }
      }

      .home-desc {
        margin-left: calc(15% + 4px);
        padding: 20px;

        .home-name {
          font-size: 21px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .home-attr {
          display: flex;
          line-height: 2;
          justify-content: space-between;
        }

        .home-price {
          font-size: 21px;
          font-weight: bold;
          text-align: right;
          margin-top: 10px;
        }
      }
    }

    .catalog {
      text-align: center;
      margin-top: 40px;

      @media (min-width: 767px) {
        display: flex;
        align-items: stretch;
      }

      .title {
        display: inline-block;
        max-width: 500px;
        text-align: left;
        margin: 0;

        @media (max-width: 767px) {
          margin-bottom: 20px;
          text-align: center;
        }
      }

      .btn {
        @media (min-width: 768px) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        @media (max-width: 767px) {
          width: 100%;
        }

        color: white;
        background-color: #ea1821;
        border-radius: 0;
        font-size: 16px;
        padding: 13px 40px;
      }
    }
  }
</style>
