<template>
  <div class="slider-block">
    <flickity class="flickity-slider" ref="flickity" :options="flickityOptions">
      <block-item v-for="page in pages" :title='page.title' :desc="page.desc"
        :img="page.img" :bg-img="page.bgImg" @next="next" @previous="previous">
      </block-item>
    </flickity>
    <div class="page-dots">
      <div v-for="(i, index) in pages" @click="select(index)" :class="{ selected: selectInd == index }"></div>
    </div>
  </div>
</template>

<script>
  var Flickity = require('vue-flickity');
  var blockItem = require('./block6-item.vue');

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
          title: '"Умный дом"',
          desc: 'Строя вместе с нами вы получаете технологию умного дома абсолютно бесплатно',
          img: '/assets/images/block6/item1.jpg'
        },{
          title: '"Умный дом"',
          desc: 'Управление светильником или целым домом! Выбор за тобой!',
          img: '/assets/images/block6/item2-1.jpg',
          bgImg: '/assets/images/block6/item2.jpg'
        },{
          title: '"Умный дом"',
          desc: 'Современным технологиям - эксклюзивный дизайн. Наши пульты органично впишутся в ваш дизайн',
          img: '/assets/images/block6/item3-1.jpg',
          bgImg: '/assets/images/block6/item3.jpg'
        },{
          title: '"Умный дом"',
          desc: 'Да хоть из-за границы! Умным домом можно управлять не только с приложения или пульта, но и через Интернет',
          img: '/assets/images/block6/item4.jpg'
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
    padding-bottom: 20px;

    .title {
      font-size: 37px;
      margin-bottom: 30px;
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
