<template>
  <div class="block"
      :style="{ backgroundImage: img ? 'url(' + img + ')' : 'none' }">
    <div class="container">
      <div class="row hidden-xs">
        <div class="col-sm-1">
          <div class="arrow left-arrow" @click="previous"></div>
        </div>
        <div class="col-sm-1 col-sm-offset-10">
          <div class="arrow right-arrow" @click="next"></div>
        </div>
      </div>
    </div>

    <div class="info">
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      name: { type: String },
      img: { type: String }
    },
    methods: {
      next() {
        this.$emit('next');
      },
      previous() {
        this.$emit('previous');
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    margin-bottom: 25px;
    width: 100%;
    background-size: cover;

    .title {
      font-size: 37px;
      margin-bottom: 30px;
      font-weight: bold;
      text-align: center;
    }

    .container {
      height: 550px;

      @media (max-width: 767px) {
        height: 400px;
      }
    }

    .row {
      @media (min-width: 767px) {
        display: flex;
        align-items: stretch;
        height: 100%;
      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 56px;
      height: 56px;
      background-color: #fafafa;
      cursor: pointer;
      opacity: 0.5;

      &:before {
        content: ' ';
        display: block;
        position: relative;
        width: 28px;
        height: 28px;
        top: 14px;
        border: 0 solid #ea1821;
        transform: rotate(45deg);
      }

      &.left-arrow:before {
        left: 20px;
        border-width: 0 0 2px 2px;
      }

      &.right-arrow:before {
        left: 8px;
        border-width: 2px 2px 0 0;
      }
    }

    .info {
      display: inline-block;
      position: relative;
      left: 50%;
      bottom: 30px;
      transform: translateX(-50%);
      z-index: 0;

      &:before {
        content: ' ';
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
        border: 2px solid #ea1821;
        z-index: -1;
      }

      .name {
        background-color: #fafafa;
        padding: 15px 20px;
        color: #2a2a2a;
        font-size: 16px;
      }
    }
  }
</style>
