<template>
  <div class="block"
      :style="{ backgroundImage: bgImg ? 'url(' + bgImg + ')' : 'none' }">
    <div class="container">
      <div class="row">
        <div class="hidden-xs col-sm-1">
          <div class="arrow left-arrow" @click="previous"></div>
        </div>
        <div class="col-sm-4">
          <div class="content">
            <div class="title">{{ title }}</div>
            <div class="desc">{{ desc }}</div>
            <div class="btn">Оставить заявку</div>
          </div>
        </div>
        <div class="col-sm-6">
          <img class="hidden-xs" v-if="img && !bgImg" :src="img">
          <div class="visible-xs text-center">
            <img v-if="img" :src="img" style="height: 200px;">
          </div>
        </div>
        <div class="hidden-xs col-sm-1">
          <div class="arrow right-arrow" @click="next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      title: { type: String },
      desc: { type: String },
      img: { type: String },
      bgImg: { type: String }
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
    padding: 70px 0 15px;
    width: 100%;
    background-size: cover;

    @media (max-width: 767px) {
      background-size: auto 100%;
      background-position: top right;
      background-repeat: no-repeat;
      background-image: none !important;
    }

    .title {
      font-size: 37px;
      margin-bottom: 30px;
      font-weight: bold;
      text-align: center;
    }

    .content {
      font-size: 16px;

      @media (min-width: 768px) {
        max-width: 300px;
        margin: 50px auto 0;
      }

      .desc {
        margin-bottom: 30px;
      }

      .btn {
        color: white;
        background-color: #ea1821;
        border-radius: 0;
        font-size: 16px;
        padding: 13px 40px;
        width: 100%;
      }
    }

    .row {
      @media (min-width: 767px) {
        display: flex;
        align-items: stretch;
        height: 400px;
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
  }
</style>
