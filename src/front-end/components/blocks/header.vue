<template>
  <div class="header-root">
    <div class="container">
      <div class="header-content hidden-xs">
        <a class="link" href="#offer" v-smooth-scroll>
          <img class="logo" alt="Nikoro logo Строительство каркасных домов" src="assets/images/Logo_NIKORO_1.png">
        </a>

        <div class="nav">
          <a class="link" href="#advantages" v-smooth-scroll>Преимущества</a>
          <a class="link" href="#calculator" v-smooth-scroll>Калькулятор</a>
          <a class="link" href="#projects" v-smooth-scroll>Проекты</a>
          <a class="link" href="#contacts" v-smooth-scroll>Контакты</a>
          <a class="tel" href="tel:+79501738827" title="Телефон" onclick="yaCounter47630926.reachGoal('phonenumbertop'); return true;">+7 (950) 173-88-27</a>
        </div>

        <div class="link-social">
          <a  href="https://vk.com/sk_nikoro" target="_blank" title="Никоро в VK"><i class="fa fa-vk"></i></a>
        </div>
        <div class="link-social">
          <a   href="http://instagram.com/sk_nikoro" target="_blank" title="Никоро в Instagram"><i class="fa fa-instagram"></i></a>
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

    .header-content {
      display: flex;

      .nav {
        flex: 1;
      }
    }

    .link-social{
      font-size: 26px;
      background: #ccc;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      transition: all .3s ease 0s;
      margin: 0 5px;

      &:hover{
        background: #a3a3a3;
        a{
          color: #fff;
        }
      }

      a{
        color: #0c0d0d;
      }

      @media (max-width: 992px) {
        display: none;
      }
    }

    img.logo {
      height: 35px;
    }

    .nav {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;

      & > a {
        color: #999999;
        position: relative;
        padding: 0 10px;

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
