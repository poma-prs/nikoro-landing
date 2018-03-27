<template>
  <div class="slider-block">
    <div class="container">
      <h2 class="title title-font">Наши работы</h2>
    </div>
    <flickity class="flickity-slider" ref="flickity" :options="flickityOptions">
      <block-item v-for="page in pages" :img="page.img" @next="next" @previous="previous">
      </block-item>
    </flickity>

    <div class="page-dots">
      <div v-for="(i, index) in pages" @click="select(index)" :class="{ selected: selectInd == index }"></div>
    </div>
    <app-modal id="block11-modal" message="Заявка оставлена в блоке №11 (Наши работы)" :success="success"></app-modal>
  </div>
</template>

<script>
  var Flickity = require('vue-flickity');
  var blockItem = require('./block11-item.vue');
  var appModal = require('../app-modal.vue');

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
          img: 'assets/images/block11/item_1.jpg'
        },{
          img: 'assets/images/block11/item_2.jpg'
        },{
          img: 'assets/images/block11/item_3.jpg'
        },{
          img: 'assets/images/block11/item_4.jpg'
        },{
          img: 'assets/images/block11/item_5.jpg'
        },{
          img: 'assets/images/block11/item_6.jpg'
        },{
          img: 'assets/images/block11/item_7.jpg'
        },{
          img: 'assets/images/block11/item_8.jpg'
        },{
          img: 'assets/images/block11/item_9.jpg'
        },{
          img: 'assets/images/block11/item_10.jpg'
        },{
          img: 'assets/images/block11/item_11.jpg'
        }, {
          img: 'assets/images/block11/item_12.jpg'
        },{
          img: 'assets/images/block11/item_13.jpg'
        },{
          img: 'assets/images/block11/item_14.jpg'
        },{
          img: 'assets/images/block11/item_15.jpg'
        },{
          img: 'assets/images/block11/item_16.jpg'
        },{
          img: 'assets/images/block11/item_17.jpg'
        },{
          img: 'assets/images/block11/item_18.jpg'
        },{
          img: 'assets/images/block11/item_19.jpg'
        },{
          img: 'assets/images/block11/item_20.jpg'
        },{
          img: 'assets/images/block11/item_21.jpg'
        }
        ,{
          img: 'assets/images/block11/item_22.jpg'
        }
        ,{
          img: 'assets/images/block11/item_23.jpg'
        }
        ,{
          img: 'assets/images/block11/item_24.jpg'
        }
        ,{
          img: 'assets/images/block11/item_25.jpg'
        }
        ,{
          img: 'assets/images/block11/item_26.jpg'
        }
        ,{
          img: 'assets/images/block11/item_27.jpg'
        }
        ,{
          img: 'assets/images/block11/item_28.jpg'
        }
        ]
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
    components: { Flickity, blockItem, appModal }
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
