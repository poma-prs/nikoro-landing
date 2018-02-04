<template>
  <div class="slider-block">
    <div class="container">
      <h2 class="title title-font">Варианты внешней отделки</h2>
    </div>
    <flickity class="flickity-slider" ref="flickity" :options="flickityOptions">
      <block-item v-for="page in pages" :name='page.name' :img="page.img" @next="next" @previous="previous">
      </block-item>
    </flickity>
    <div class="page-dots">
      <div v-for="(i, index) in pages" @click="select(index)" :class="{ selected: selectInd == index }"></div>
    </div>
  </div>
</template>

<script>
  var Flickity = require('vue-flickity');
  var blockItem = require('./block11-item.vue');

  module.exports = {
    data() {
      return {
        flickityOptions: {
          adaptiveHeight: true,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: true
        },
        selectInd: 0,
        pages: [{
          name: 'Облицовочный кирпич',
          img: '/assets/images/block11/item1.jpg'
        },{
          name: 'Декоративная штукатурка',
          img: '/assets/images/block11/item2.jpg'
        },{
          name: 'Металлосайдинг',
          img: '/assets/images/block11/item3.jpg'
        },{
          name: 'Облицовочный кирпич',
          img: '/assets/images/block11/item4.jpg'
        },{
          name: 'Имитация бруса',
          img: '/assets/images/block11/item5.jpg'
        },{
          name: 'Вагонка',
          img: '/assets/images/block11/item6.jpg'
        }]
      }
    },
    mounted() {
      var that = this;
      this.$refs.flickity.on('select', function() {
        that.selectInd = that.$refs.flickity.selectedIndex();
      })
    },
    methods: {
      next() {
        this.$refs.flickity.next();
      },
      previous() {
        this.$refs.flickity.previous();
      },
      select(ind) {
        this.$refs.flickity.select(ind);
      }
    },
    components: { Flickity, blockItem }
  };
</script>

<style lang="scss" scoped>
  .slider-block {
    position: relative;
    overflow: hidden;
    padding: 70px 0 40px;

    .title {
      font-size: 37px;
      font-weight: bold;
      margin-bottom: 30px;
      text-align: center;
    }

    .flickity-slider:focus {
      outline: none;
    }

    .page-dots {
      text-align: center;

      & > * {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #ea1821;
        border-radius: 50%;
        margin: 10px;
        cursor: pointer;

        &.selected  {
          background-color: #ea1821;
        }
      }
    }
  }
</style>
