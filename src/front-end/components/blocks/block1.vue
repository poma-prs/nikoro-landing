<template>
  <div class="block">
    <div class="container-fluid">
      <div class="row">
        <div class="hidden-xs col-sm-4 image-part"></div>
        <div class="col-xs-12 col-sm-7 content-part">

          <div>
            <div class="offer">
              <div class="titles">
                <h1 class="title title-font">Строительство каркасных домов в Ижевске от 359 000 рублей</h1>
                <div class="subtitle">Оставьте заявку на рассчет стоимости дома</div>
              </div>
            </div>
            <div class="offer">
              <div class="buttons">
                <div class="btn">Остaвить заявку</div>
                <!-- <div class="bonus">
                  Оставьте заявку на рассчет стоимости дома
                  <div class="subbonus">+ бесплатно "Технология умный дом"</div>
                </div> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    background-color: #1B1D1C;

    @media (max-width: 767px) {
      background-image: url(assets/images/block1/home.jpg);
      background-size: cover;
    }

    & > .container-fluid > .row {
      display: flex;
      align-items: stretch;
    }

    .image-part {
      background-image: url(assets/images/block1/home.jpg);
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

          .title {
            font-size: 37px;
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
            margin-bottom: 20px;

            @media (min-width: 768px) {
              background-color: #1B1D1C;
            }
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
