<template>
  <div class="block">
    <div class="container">

      <div class="row">
        <div class="col-sm-offset-1 col-sm-11">
          <h2 class="title title-font">Технология строительства каркасных домов</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1 hidden-xs img-container">
          <img src="assets/images/block2/home.png">
        </div>
        <div class="col-sm-7">
          <div class="desc">
            <div class="item-img">
              <img src="assets/images/block2/item1.jpg" alt="Сваи">
            </div>
            <h3>Сваи</h3>
            <p>Наиболее подходящий вид фундамента при строительстве каркасного дома — фундамент на винтовых сваях. Он подходит для любого рельефа местности и для любых «проблемных» грунтов.<br>
            Утепление фундамента на винтовых сваях не требуется, поскольку этот тип фундамента относится к проветриваемым. Перед установкой фундамента проводим геологическое исследование грунта.</p>
          </div>
          <div class="desc">
            <div class="item-img">
              <img src="assets/images/block2/item2.jpg" alt="Сваи">
            </div>
            <h3>Силовой каркас</h3>
            <p>Строим каркасные дома строго по технологии СНиП СП 31-105-2002. Для строительства силового каркаса используем доску хвойной породы камерной сушки 1; 2-го сорта сечением 150x50, обработанную огнебиозащитным составом.</p>
          </div>
          <div class="desc">
            <div class="item-img">
              <img src="assets/images/block2/item3.jpg" alt="Сваи">
            </div>
            <h3>Утепление</h3>
            <p>Стена каркасного дома состоит из : силового каркаса, гидро-ветрозащитной плёнки , базальтового утеплителя 150мм по несущим стойкам и 50мм перекрёстного утепления , пароизоляционной плёнки.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  var benefits = [
    'На 50% дешевле кирпичного дома',
    'Возможность круглогодичного строительства',
    'Любая архитектурная форма и отделка',
    'Прогрев дома от 5 до 20°C за 1 час',
    'Сроки возведения 30-120 дней',
    '50 лет - срок службы до первого серьезного ремонта',
    'Затраты на отопление на 58% меньше'
  ];

  module.exports = {
    data() {
      return { benefits };
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    padding: 70px 0;
    background-color: #fafafa;
    z-index: 0;

    .title {
      font-size: 37px;
      font-weight: bold;
      margin: 0;
      margin-bottom: 70px;

      @media (max-width: 767px) {
        margin-bottom: 30px;
        text-align: center;
      }
    }

    .row {
      display: flex;
      align-items: stretch;
    }

    .img-container {
      position: relative;
      min-height: 500px;

      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px #ea1821 solid;
      }

      img {
        max-width: none;
        max-height: none;
        position: absolute;
        bottom: 5%;
        right: 30px;
        height: 75%;
      }
    }

    .desc {
      position: relative;
      padding: 0 10px 10px 0;
      z-index: 0;

      @media (max-width: 767px) {
        text-align: center;
        padding-left: 10px;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }

      &:before {
        content: ' ';
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid #ea1821;
        z-index: -1;

        @media (min-width: 768px) {
          left: 50px;
        }
      }

      h3 {
        text-align: center;

        @media (min-width: 768px) {
          width: calc(100% - 300px);
          display: inline-block;
          position: relative;
          top: 30px;
          left: 0;
        }
      }

      .item-img {
        position: relative;
        display: inline-block;
        padding: 0 10px 10px 0;
        background-color: #fafafa;

        @media (max-width: 767px) {
          padding-left: 10px;
        }

        &:before {
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          right: 10px;
          bottom: 10px;
          border: 2px solid #ea1821;

          @media (max-width: 767px) {
            left: 10px;
          }
        }

        img {
          max-width: 200px;
        }
      }

      p {
        text-align: left;

        @media (min-width: 768px) {
          padding-left: 65px;
        }

        /* @media (max-width: 767px) {
          padding: 10px;
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            border-left: 2px solid #ea1821;
          }
        } */
      }
    }
  }
</style>
