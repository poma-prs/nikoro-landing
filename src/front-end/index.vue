<template>
  <div>
    <fixed-header :fixed.sync="isFixed">
      <div class="header" :class="{ 'header-fix': isFixed, 'header-abs': !isFixed }">
        <app-header></app-header>
      </div>
    </fixed-header>
    <!-- <div class="header">

    </div> -->
    <block1 id="offer"></block1>
    <block2></block2>
    <block3 id="advantages"></block3>
    <block4></block4>
    <block5></block5>
    <block6 id="calculator"></block6>
    <block7></block7>
    <block8></block8>
    <block9></block9>
    <block10 id="projects"></block10>
    <block11></block11>
    <block12></block12>
    <block13 id="contacts"></block13>
  </div>
</template>

<script>
  var FixedHeader = require('vue-fixed-header');
  var appHeader = require('./components/blocks/header.vue');
  var block1 = require('./components/blocks/block1.vue');
  var block2 = require('./components/blocks/block2.vue');
  var block3 = require('./components/blocks/block3.vue');
  var block4 = require('./components/blocks/block4.vue');
  var block5 = require('./components/blocks/block5.vue');
  var block6 = require('./components/blocks/block6.vue');
  var block7 = require('./components/blocks/block7.vue');
  var block8 = require('./components/blocks/block8.vue');
  var block9 = require('./components/blocks/block9.vue');
  var block10 = require('./components/blocks/block10.vue');
  var block11 = require('./components/blocks/block11.vue');
  var block12 = require('./components/blocks/block12.vue');
  var block13 = require('./components/blocks/block13.vue');

  module.exports = {
    data() {
      return {
        isFixed: false
      }
    },
    mounted() {
      /*$(document).on("scroll", function() {
        $('.hidden-animated').each(function() {
          if ($(this).offset().top <= $(document).scrollTop() + $(window).height()) {
            $(this).removeClass('hidden-animated', 200);
          }
        });
      });*/
    },
    components: {
      FixedHeader: FixedHeader,
      appHeader: appHeader,
      block1: block1,
      block2: block2,
      block3: block3,
      block4: block4,
      block5: block5,
      block6: block6,
      block7: block7,
      block8: block8,
      block9: block9,
      block10: block10,
      block11: block11,
      block12: block12,
      block13: block13
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
  }

  .header-fix {
    position: fixed;
    background-color: #1B1D1C;
  }

  .header-abs {
    position: absolute;
  }
</style>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display');

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #1b1d1c;
    overflow-x: hidden;
  }

  img {
    max-height: 100%;
    max-width: 100%;
  }

  .hidden-animated {
    opacity: 0;
  }

  .title-font {
    font-family: 'Playfair Display', serif;
  }
</style>
