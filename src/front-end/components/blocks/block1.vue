<template>
  <div class="block">
    <div class="content container-fluid">
      <div class="row flex-centered">
        <div class="main-info flex-centered ">
            <div class="text-wrap flex-centered">
              <div class="title">СТРОИТЕЛЬСТВО</div>
              <div class="subtitle">энергоэффективных домов</div>
              <div class="subtitle">по каркасной технологии</div>
            </div>
            <div class="price-wrap">от <span class="price">10 900</span> руб/м<sup>2</sup>

            </div>
            <div class="red-outline"></div>
        </div>
        <div class="extra-info col-xs-12 col-sm-11 col-md-10 col-lg-6">
          Все услуги строительства от фундамента до внутренней отделки в Ижевске и по Удмуртской Республике
        </div>
        <div class="call call-to-apply-wrap ">
          <div class="call-to-apply flex-centered ">
            <div class="call-title">ЗАПИШИСЬ БЕСПЛАТНО</div>
            <div class="call-subtitle">на экскурсию по готовым объектам</div>
            <div class="btn" data-toggle="modal" data-target="#block1-modal" onclick="yaCounter47630926.reachGoal('showmodal1'); return true;">Остaвить заявку</div>

          </div>
        </div>

      </div>

    </div>

    <app-modal id="block1-modal" message="Заявка оставлена в блоке №1 (Оффер)"
      :success="success"></app-modal>

  </div>
</template>

<script>
  var appModal = require('../app-modal.vue');

  module.exports = {
    components: { appModal: appModal },
    methods: {
      success() {
        yaCounter47630926.reachGoal('sendapplication1');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;

    background-image: url(assets/images/block1/bg-min.jpg);
    background-size: cover;
    background-position: center;

    .btn {
      border-radius: 0;
      background-color: #EA1821;
      font-size: 16px;
      padding: 12px 15px;
      min-width: 230px;
      max-width: 100%;
      display: inline-block;

      @media (max-width: 767px) {
        width: 100%;
      }

      &:hover {
        color: white;
        background-color: #bb131a;
      }
    }

    .flex-centered{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }

    .content{
      padding-top: 100px;
      padding-bottom: 20px;
      min-height: 95vh;
      color: white;
      font-family: "Times New Roman";
      transition: all .3s ease 0s;

      @media (min-width: 768px) {
        padding-top: 200px;
      }

      .main-info{
        position: relative;
        .text-wrap{
          background: rgba(27, 29, 28, 0.71);
          padding:20px;
          z-index: 0;
          .title{
            font-size:54px;
            font-weight: 600;
            line-height: 1;
            @media (max-width: 767px) {
              font-size:34px;
            }
          }
          .subtitle{
            font-size:40px;
            text-align: center;
            font-weight: 500;
            line-height: 1.1;
            @media (max-width: 767px) {
              font-size:24px;
            }
          }
        }

        .price-wrap{
          z-index: 2;
          position: relative;
          font-size:38px;
          background: #EA1821;
          padding:5px 15px;
          margin-top: 10px;
          .price{
            font-size:64px;
            line-height: 1.1;
            font-weight: 600;
            @media (max-width: 767px) {
              font-size:44px;
            }
          }
          @media (max-width: 767px) {
            font-size:22px;
          }
        }

        .red-outline{
          position: absolute;
          bottom: 40px;
          left:-20px;
          right:-20px;
          height: 50%;
          border-bottom: 3px #EA1821 solid;
          z-index: 1;

          &:before {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 40px;
            border-top: 3px #ea1821 solid;
            border-left: 3px #ea1821 solid;
          }

          &:after {
            content: ' ';
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 40px;
            border-top: 3px #ea1821 solid;
            border-right: 3px #ea1821 solid;
          }
        }


      }

      .extra-info{
        text-align: center;
        font-family: Arial;
        font-size: 25px;
        margin-top: 10px;
        @media (max-width: 767px) {
          font-size:16px;
        }
      }

      .call{
        margin-top: 80px;
        width:60%;
        @media (max-width: 767px) {
          width:100%;
        }
      }

      .call-to-apply-wrap{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        @media (max-width: 767px) {
          flex-direction: column;
        }


        .call-to-apply{
          text-align: center;
          font-family: Arial;
          font-size: 16px;
          background: #1b1d1c;
          padding: 5px 10px;
          padding-bottom: 20px;
          position: relative;
          margin-bottom: 80px;
          .call-title{
            font-size: 22px;
            color: #EA1821;
          }
          .call-subtitle{

          }
          .btn{
            font-size:18px;
            position: absolute;
            bottom: -50%;
          }
        }
      }
    }


  }
</style>
