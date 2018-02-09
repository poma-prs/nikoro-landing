<template>
  <div class="header-root">
    <div class="container">
      <div class="row hidden-xs">
        <div class="col-xs-4">
          <img class="logo" alt="Nikoro logo Строительство каркасных домов" src="assets/images/logo-white.png">
        </div>
        <div class="col-sm-8">
          <div class="nav">
            <a class="link" href="#advantages" v-smooth-scroll>Преимущества</a>
            <a class="link" href="#calculator" v-smooth-scroll>Калькулятор</a>
            <a class="link" href="#projects" v-smooth-scroll>Проекты</a>
            <a class="link" href="#contacts" v-smooth-scroll>Контакты</a>
            <a class="tel" href="tel:+79501738827" title="Телефон" onclick="yaCounter47630926.reachGoal('phonenumbertop'); return true;">+7 (950) 173-88-27</a>
          </div>
        </div>
      </div>
      <div class="row visible-xs">
        <div class="nav nav-xs">
          <a class="tel" href="tel:+79501738827" onclick="yaCounter47630926.reachGoal('phonenumbertop'); return true;">
            <i class="fa fa-phone" aria-hidden="true"></i> +7 (950) 173-88-27
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = { };
</script>

<style lang="scss" scoped>
  .header-root {
    height: 60px;
    background-color: rgba(0,0,0,0.1);
    padding: 10px 0;

    img.logo {
      height: 30px;
    }

    .nav {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;

      a {
        color: #999999;
        position: relative;

        &:hover, &:focus {
          color: white;
          text-decoration: none;

          &::before {
            content: ' ';
            position: absolute;
            width: 90%;
            height: 2px;
            background-color: #ea1821;
            left: 5%;
            bottom: -3px;
          }
        }
      }

      &.nav-xs {
        @media (min-width: 768px) {
          display: none;
        }

        a.tel {
          color: white;

          &:hover, &:focus {
            color: white;

            &::before {
              display: none;
            }
          }
        }
      }

      &.nav-sm {
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
  }
</style>
