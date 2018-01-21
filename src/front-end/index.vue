<template>
  <div>
    <div class="header">
      <app-header></app-header>
    </div>
    <block1></block1>
  </div>
</template>

<script>
  var block1 = require('./components/blocks/block1.vue');
  var appHeader = require('./components/blocks/header.vue');

  module.exports = {
    components: { block1, appHeader }
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
  }

  body {
    height: 5000px;
  }
</style>
