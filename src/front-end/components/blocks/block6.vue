<template>
  <div class="block">
    <div class="container">
      <h2 class="title title-font">Рассчитайте стоимость своего дома</h2>
      <div class="slider">
        <vue-slider v-model="square" v-bind="options">
          <template slot="tooltip" scope="tooltip">
            <div class="slider-tooltip">{{ tooltip.value }} м<sup>2</sup></div>
          </template>
        </vue-slider>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="home-types">
            <radiobox v-model="selectedType" name="hometype" :options="types" :defind="1"></radiobox>
          </div>
        </div>
        <div class="col-sm-6 text-center">
          <div class="summary">
            <div class="sum-label">СТОИМОСТЬ ДОМА:</div>
            <div class="sum-price">{{ summary | rubles }}</div>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <div class="btn" data-toggle="modal" data-target="#block6-modal" onclick="yaCounter47630926.reachGoal('showmodal3'); return true;">Получить подробный расчет стоимости</div>
      </div>
    </div>

    <app-modal id="block6-modal" :message="message" :success="success"></app-modal>
  </div>
</template>

<script>
  var vueSlider = require('vue-slider-component');
  var radiobox = require('../radiobox.vue');
  var appModal = require('../app-modal.vue');

  module.exports = {
    data() {
      return {
        square: 109,
        options: {
          max: 500,
          height: 3,
          tooltipDir: "top",
          processStyle: {
            backgroundColor: "#ea1821"
          },
          bgStyle: {
            backgroundColor: "#ea1821"
          },
          sliderStyle: {
            border: "2px solid #ea1821",
            height: "28px",
            width: "28px",
            top: "-12px",
            backgroundColor: "#1b1d1c",
            boxShadow: "none",
          }
        },
        selectedType: null,
        types: [{
          text: "“Дача”",
          desc: "",
          price: 14500,
          discountPrice: 11000
        },{
          text: "“Классика”",
          desc: "Буду жить постоянно",
          price: 17300,
          discountPrice: 12500
        },{
          text: "“Под ключ”",
          desc: "Буду жить постоянно",
          price: 19500,
          discountPrice: 14000
        }]
      }
    },
    computed: {
      summary: function() {
        var price = this.selectedType
          ? this.selectedType.discountPrice
          : this.types[0].discountPrice;
        return price * this.square;
      },
      message() {
        return 'Заявка оставлена в блоке №6 (Калькулятор). ' +
          (this.selectedType
            ? 'Выбраны параметры: ' + this.selectedType.text + ', ' + this.square + 'м2, Итого: ' + this.summary + ' рублей'
            : 'Параметры не выбраны');

      }
    },
    components: { vueSlider: vueSlider, radiobox: radiobox, appModal: appModal },
    filters: {
      rubles: function (value) {
        if (!value) return '0 рублей';
        value = parseInt(value);
        var result = '';
        while (value != 0) {
          let v = (value % 1000).toString();
          value = Math.floor(value / 1000);
          while (value != 0 && v.length < 3)
            v = '0' + v;
          result = v + ' ' + result;
        }
        return result + ' рублей';
      }
    },
    methods: {
      success() {
        yaCounter47630926.reachGoal('sendapplication3');
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
      text-align: center;
      margin-bottom: 70px;
    }

    .slider {
      @media (min-width: 768px) {
        margin-bottom: 60px;
      }

      .slider-tooltip {
        color: white;
        font-size: 21px;
        font-weight: bold;
        white-space: nowrap;
      }
    }

    .home-types {
      text-align: center;
    }

    .summary {
      display: inline-block;
      border: 2px solid #ea1821;
      padding: 20px;

      @media (min-width: 768px) {
        margin-top: 38px;
      }

      .sum-label {
        font-size: 21px;
        color: #999999;
        text-align: left;
      }

      .sum-price {
        text-align: center;
        font-size: 37px;
        font-weight: bold;

        @media (min-width: 768px) {
          width: 400px;
          line-height: 2;
          margin-top: 15px;
        }
      }
    }

    .btn-container {
      margin-top: 40px;
      text-align: center;

      .btn {
        color: white;
        background-color: #ea1821;
        border-radius: 0;
        font-size: 16px;
        padding: 13px 30px;
        max-width: 100%;

        @media (max-width: 767px) {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        &:hover {
          color: white;
          background-color: #bb131a;
        }
      }
    }
  }
</style>
