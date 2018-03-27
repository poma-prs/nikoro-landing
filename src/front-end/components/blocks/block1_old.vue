<template>
  <div class="block">
    <div class="container-fluid">
      <div class="row">
        <!--<div class="hidden-xs col-sm-4 image-part"></div>-->
        <div class="col-xs-12 col-sm-7 content-part">

          <div>
            <div class="offer">
              <div class="titles">
                <div class="title-container">
                  <h1 class="title title-font">СТРОИТЕЛЬСТВО энергоэффективных домов по каркасной технологии</h1>
                </div>
                <div class="subtitle">Все услуги строительства от фундамента до внутренней отделки в Ижевске и по Удмуртской Республике</div>
                <div class="subtitle">от <span class="price">10 900</span> руб/м<sup>2</sup></div>
              </div>
            </div>
            <div>
              <div>ЗАПИШИСЬ БЕСПЛАТНО</div>
              <div>на экскурсию по готовым объектам</div>
            </div>
            <div class="offer">
              <div class="buttons">
                <div class="btn" data-toggle="modal" data-target="#block1-modal" onclick="yaCounter47630926.reachGoal('showmodal1'); return true;">Остaвить заявку</div>
                <!-- <div class="bonus">
                  Оставьте заявку на расчет стоимости дома
                  <div class="subbonus">+ бесплатно "Технология умный дом"</div>
                </div> -->
              </div>
            </div>
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
    background-color: #1B1D1C;

    background-image: url(assets/images/block1/bg-min.jpg);
    background-size: cover;
    background-position: center;

    @media (max-width: 767px) {
      background-image: url(assets/images/block1/bg-min.jpg);
      background-size: cover;
    }

    & > .container-fluid > .row {
      display: flex;
      align-items: stretch;
    }

    .image-part {
      background-image: url(assets/images/block1/bg-min.jpg);
      background-size: cover;
    }

    .content-part {
      position: relative;
      padding-top: 150px;
      padding-bottom: 150px;
      min-height: 90vh;
      color: white;

      @media (max-width: 767px) {
        background-color: rgba(0, 0, 0, 0.4);
      }

      @media (min-width: 768px) {
        & > div {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transform: translateY(-50%) translateX(-50%);
        }
      }

      .offer {
        @media (min-width: 768px) {
          text-align: right;
        }

        .titles {
          position: relative;
          display: inline-block;
          text-align: left;
          z-index: 0;
          padding-left: 10px;

          @media (min-width: 768px) {
            width: 80%;
            padding: 10px 30px;
          }

          .title-container {
            @media (min-width: 768px) {
              background-color: #1B1D1C;
            }
          }

          .title {
            font-size: 37px;
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
            margin-bottom: 20px;
          }

          .subtitle {
            font-size: 16px;
            margin-bottom: 10px;

            @media (min-width: 768px) {
              max-width: 50%;
            }
          }

          &::before {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            border: 2px #EA1821 solid;
            z-index: -1;

            @media (min-width: 768px) {
              width: 66%;
            }
          }
        }

        .buttons {
          display: flex;
          align-items: center;
          text-align: left;
          margin-top: 30px;

          @media (min-width: 768px) {
            padding-left: 20%;
          }

          @media (max-width: 767px) {
            flex-direction: column-reverse;
          }

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

          .bonus {
            display: inline-block;
            margin-left: 10px;

            @media (max-width: 767px) {
              margin-bottom: 15px;
              margin-left: 0;
              text-align: center;
              font-weight: bold;
              font-size: 16px;
            }

            .subbonus {
              font-size: 20px;
              margin-top: 7px;

              @media (min-width: 768px) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>
