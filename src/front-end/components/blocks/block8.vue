<template>
  <div class="block">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h2 class="title title-font">Почему у 98,7% людей возникают трудности со строительством дома, а наши клиенты не знают проблем?</h2>

          <div class="row">
            <div class="col-sm-6">
              <p>Комплексный подход к строительству от разработки строительного проекта до установки сантехники</p>

              <h3>Акция</h3>
              <p>Строительный проект в подарок</p>
            </div>
            <div class="col-sm-6">
              <div class="counter">
                <div>До конца акции:</div>
                <div class="digits">
                  <div>{{ days }}<br><span>дней</span></div>
                  <div>{{ hours | leadZero }}<br><span>часов</span></div>
                  <div>:</div>
                  <div>{{ minutes | leadZero }}<br><span>минут</span></div>
                  <div>:</div>
                  <div>{{ seconds | leadZero }}<br><span>секунд</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <div class="btn">Заказать строительство дома</div>
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
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    },
    methods: {
      updateCounter() {
        var dtime = 14 * 24 * 60 * 60 * 1000;
        var time = dtime - (Date.now() - new Date('02/01/2018').getTime()) % dtime;
        this.days = Math.floor(time / (24 * 60 * 60 * 1000));
        time -= this.days * 24 * 60 * 60 * 1000;
        this.hours = Math.floor(time / (60 * 60 * 1000));
        time -= this.hours * 60 * 60 * 1000;
        this.minutes = Math.floor(time / (60 * 1000));
        time -= this.minutes * 60 * 1000;
        this.seconds = Math.floor(time / 1000);
      }
    },
    mounted() {
      this.updateCounter();
      setInterval(this.updateCounter, 1000);
    },
    filters: {
      leadZero: function (value) {
        if (value < 0 || value >= 10) return value;
        return '0' + value;
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    padding: 70px 0;
    color: white;
    background-color: #1b1d1c;

    @media (min-width: 768px) {
      background: url(assets/images/block8/background.jpg) right center no-repeat, #1b1d1c;
      background-size: contain;
    }

    .title {
      font-size: 37px;
      font-weight: bold;
      margin-bottom: 70px;
    }

    .counter {
      border: 2px solid #ea1821;
      padding: 25px;
      margin-bottom: 50px;

      @media (max-width: 767px) {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      .digits {
        display: flex;
        justify-content: space-between;
        font-size: 37px;
        font-weight: bold;
        text-align: center;
        line-height: 0.6;
        margin-top: 30px;

        & > * {
          margin: 0 5px;

          &:first-child {
            margin-left: 0;
            margin-right: 20px;
          }

          &:last-child {
            margin-right: 0;
          }
        }

        span {
          font-size: 16px;
          font-weight: normal;
          line-height: 1;
        }
      }
    }

    .btn {
      color: white;
      background-color: #ea1821;
      border-radius: 0;
      font-size: 16px;
      padding: 13px 30px;
      max-width: 100%;

      @media (max-width: 767px) {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }

      &:hover {
        color: white;
        background-color: #bb131a;
      }
    }
  }
</style>
