<template>
  <div class="block">
    <div class="container-fluid">
      <div class="text-center">
        <h2 class="title title-font">
          <div class="back-container">
            <span>Каркасный дом от “Никоро” – идеальное решение, если вы…</span>
          </div>
        </h2>
      </div>
      <div class="row">
        <div class="col-sm-4 nopadding" v-for="item in features">
          <div class="feature" :style="{ backgroundImage: 'url('+ item.img + ')'}">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        features: [{
          text: 'Хотите жить в уютном, тихом и надежном доме',
          img: 'assets/images/block4/home1.jpg',
        },{
          text: 'Устали переплачивать за квартиру',
          img: 'assets/images/block4/home2.jpg',
        },{
          text: 'Мечтаете жить с детьми в просторном доме',
          img: 'assets/images/block4/home3.jpg',
        }]
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
      position: relative;
      font-size: 37px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 40px;
      z-index: 0;

      @media (min-width: 768px) {
        display: inline-block;
        max-width: 600px;
        margin: 0 auto 70px;
        padding: 20px;
        line-height: 1.3;

        &:before {
          content: ' ';
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
          bottom: 0;
          right: 20%;
          border: 2px solid #ea1821;
        }

        .back-container {
          background-color: #1b1d1c;
        }
      }
    }

    .nopadding {
      padding: 0 !important;
    }

    .feature {
      position: relative;
      background-size: cover;
      text-align: center;
      font-size: 21px;
      font-weight: bold;
      height: 33vw;
      min-height: 300px;
      z-index: 0;
      transition:all 0.3s ease;

      & > span {
        position: absolute;
        display: block;
        top: 50%;
        left: 15%;
        right: 15%;
        transform: translateY(-50%);
      }

      &:before {
        content: ' ';
        position: absolute;
        z-index: -1;
        left: 20px;
        top: 20px;
        bottom: 20px;
        right: 20px;
        border: 2px solid #ea1821;
        transition:all 0.3s ease;
      }

      &:hover {
        font-size: 22px;

        &:before {
          left: 17px;
          right: 17px;
          top: 17px;
          bottom: 17px;
        }
      }
    }
  }
</style>
