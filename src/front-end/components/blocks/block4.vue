<template>
  <div class="block">
    <div class="container">
      <div class="title">Рассчитать стоимость своего дома</div>
      <div class="slider">
        <vue-slider v-model="square" v-bind="options">
          <template slot="tooltip" scope="tooltip">
            <div class="slider-tooltip">{{ tooltip.value }} м2</div>
          </template>
        </vue-slider>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="home-types">
            <radiobox v-model="selectedType" name="hometype" :options="types" defind="1"></radiobox>
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
        <div class="btn">Получить подробный рассчет стоимости</div>
      </div>
    </div>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component';

  var radiobox = require('../radiobox.vue');

  module.exports = {
    data() {
      return {
        square: 150,
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
            backgroundColor: "white",
            boxShadow: "none",
          }
        },
        selectedType: null,
        types: [{
          text: "Дача",
          desc: "",
          price: 15500,
          discountPrice: 11990
        },{
          text: "Классика",
          desc: "",
          price: 18300,
          discountPrice: 15990
        },{
          text: "Под ключ",
          desc: "",
          price: 21000,
          discountPrice: 19900
        }]
      }
    },
    computed: {
      summary: function() {
        var price = this.selectedType
          ? this.selectedType.discountPrice
          : this.types[0].discountPrice;
        return price * this.square;
      }
    },
    components: { vueSlider, radiobox },
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
    }
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    padding: 70px 0;

    .title {
      font-size: 37px;
      text-align: center;
      margin-bottom: 70px;
    }

    .slider {
      margin-bottom: 60px;

      .slider-tooltip {
        color: black;
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
      margin-top: 38px;

      .sum-label {
        font-size: 21px;
        color: #555555;
        text-align: left;
      }

      .sum-price {
        text-align: center;
        font-size: 37px;
        line-height: 2;
        font-weight: bold;

        @media (min-width: 767px) {
          width: 400px;
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
      }
    }
  }
</style>
