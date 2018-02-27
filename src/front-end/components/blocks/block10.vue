<template>
  <div class="block">
    <div class="container">
      <h2 class="title title-font">Каркасный дом вашей мечты уже есть в каталоге:</h2>
      <div class="row">
        <div class="col-sm-4" v-for="home in homes">
          <div class="home-item">
            <img :src="home.img" :alt="home.name">
            <div class="home-desc">
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
          <h2 class="title title-font">Посмотрите каталог из 20 лучших проектов</h2>
        </div>
        <div class="col-sm-5">
          <div class="btn" data-toggle="modal" data-target="#block9-modal" onclick="yaCounter47630926.reachGoal('showmodal5'); return true;">Получить каталог</div>
        </div>
      </div>
    </div>

    <app-modal id="block9-modal" :isemail="true" :isphone="true"
      message="Заявка оставлена в блоке №10 (Каталог). ВЫСЛАТЬ КАТАЛОГ С ДОМАМИ!"
      :success="success"></app-modal>
  </div>
</template>

<script>
  var appModal = require('../app-modal.vue');

  module.exports = {
    data() {
      return {
        homes: [{
          square: 130,
          sizes: '7x9',
          price: 'от 1.430.000 рублей',
          img: 'assets/images/block10/home1.jpg'
        },{
          square: 115,
          sizes: '9x11',
          price: 'от 1.265.000 рублей',
          img: 'assets/images/block10/home2.jpg'
        },{
          square: 85,
          sizes: '8x9',
          price: 'от 935.000 рублей',
          img: 'assets/images/block10/home3.jpg'
        },{
          square: 190,
          sizes: '9x10,5',
          price: 'от 2.090.000 рублей',
          img: 'assets/images/block10/home4.jpg'
        },{
          square: 107,
          sizes: '13x10',
          price: 'от 1.177.000 рублей',
          img: 'assets/images/block10/home5.jpg'
        },{
          square: 48,
          sizes: '6x8',
          price: 'от 528.000 рублей',
          img: 'assets/images/block10/home6.jpg'
        }]
      }
    },
    components: { appModal: appModal },
    methods: {
      success() {
        yaCounter47630926.reachGoal('sendapplication5');
      }
    }
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
      font-weight: bold;
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
        transition:all 0.3s ease;
      }

      &:hover::before {
        @media (min-width: 768px) {
          height: 100%;
        }
      }

      .home-desc {
        margin-left: calc(15% + 4px);
        padding: 20px;

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

        &:hover {
          color: white;
          background-color: #bb131a;
        }
      }
    }
  }
</style>
