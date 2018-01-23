<template>
  <div>
    <div class="header">
      <app-header></app-header>
    </div>
    <block1></block1>
    <block2></block2>
    <block3></block3>
    <block4></block4>

    <block9></block9>
  </div>
</template>

<script>
  var appHeader = require('./components/blocks/header.vue');
  var block1 = require('./components/blocks/block1.vue');
  var block2 = require('./components/blocks/block2.vue');
  var block3 = require('./components/blocks/block3.vue');
  var block4 = require('./components/blocks/block4.vue');

  var block9 = require('./components/blocks/block9.vue');

  module.exports = {
    components: { appHeader, block1,
      block2, block3, block4,
      block9
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>

<style lang="scss">
  img {
    max-height: 100%;
    max-width: 100%;
  }

  body {
    height: 5000px;
  }
</style>
