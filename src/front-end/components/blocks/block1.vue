<template>
  <div class="block">
    <div class="container-fluid">
      <div class="row">
        <div class="hidden-xs col-sm-4 image-part"></div>
        <div class="col-xs-12 col-sm-7 content-part">
          <div class="offer">
            <div class="titles">
              <div class="title">Строим дома в Ижевске</div>
              <div class="subtitle">Из деревянного каркаса и бруса</div>
            </div>
          </div>
          <div class="offer">
            <div class="buttons">
              <div class="btn">Остaвить заявку</div>
              <div class="bonus">
                Оставьте заявку на рассчет стоимости дома
                <div class="subbonus">+ бесплатно "Технология умный дом"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gift">
      <div>В ПОДАРОК</div>
      <div>Технология</div>
      <div>Умный дом</div>
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
      background-image: url(assets/images/home1.jpg);
      background-size: cover;
    }

    & > .container-fluid > .row {
      display: flex;
      align-items: stretch;
    }

    .image-part {
      background-image: url(assets/images/home1.jpg);
      background-size: cover;
    }

    .content-part {
      padding-top: 150px;
      padding-bottom: 150px;
      min-height: 90vh;
      color: white;

      @media (max-width: 767px) {
        background-color: rgba(0, 0, 0, 0.4);
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
            font-size: 50px;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .subtitle {
            font-size: 18px;
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
              width: 53%;
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

    .gift {
      position: absolute;
      left: 0;
      top: 25%;
      text-align: center;
      padding: 25px 10px;
      background-color: #1b1d1c;

      @media (max-width: 767px) {
        display: none;
      }

      & > div:not(:first-child) {
        font-size: 18px;
        font-weight: bold;
        color: white;
      }

      & > div:first-child {
        font-size: 18px;
        color: #999999;
        margin-bottom: 7px;
      }
    }
  }
</style>
