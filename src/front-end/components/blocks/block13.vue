<template>
  <div class="block">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <a href="http://go.2gis.com/mddes" target="_blank" title="2GIS, г. Ижевск, ул. Орджоникидзе, 2, Офис 66" onclick="yaCounter47630926.reachGoal('seemap'); return true;">
            г. Ижевск,<br>
            ул. Орджоникидзе, 2,<br>
            Офис 66<br>
          </a>
        </div>
        <div class="col-sm-4">
          <a class="tel" href="tel:+79501738827" title="Телефон" onclick="yaCounter47630926.reachGoal('phonenumberbottom'); return true;">+7 (950) 173-88-27</a><br>
          <a class="email" href="mailto:sk.nikoro@yandex.ru" title="Email" onclick="yaCounter47630926.reachGoal('email'); return true;">sk.nikoro@yandex.ru</a>
        </div>
        <div class="col-sm-4 links">
          <a href="http://instagram.com/sk_nikoro" target="_blank" title="Никоро в Instagram"><i class="fa fa-instagram"></i></a>
          <a href="https://vk.com/sk_nikoro" target="_blank" title="Никоро в VK"><i class="fa fa-vk"></i></a>
        </div>
      </div>
      <div class="row yandex-map" >
        <iframe src="https://yandex.ru/map-widget/v1/-/CBeta0HKoB" width="100%" height="400" frameborder="0"></iframe>
      </div>


      <div class="partners">
        <div><img src="assets/images/block13/partner1.png" alt="Группа Компаний Дом"></div>
        <div><img src="assets/images/block13/partner2.png" alt="ПК Строй-Элемент"></div>
        <div><img src="assets/images/block13/partner3.png" alt="Завьяловские сады"></div>
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
    padding: 70px 0;
    background-color: #fafafa;
    line-height: 2;

    .yandex-map{
      margin-top: 70px;
    }


    @media (max-width: 767px) {
      text-align: center;
    }

    a {
      color: #ea1821;

      &:hover, &:visited, &:focus, &:active {
        color: #bb131a;
      }
    }

    .links {
      font-size: 37px;
      text-align: center;

      a {
        display: inline-block;
        color: #1b1b1c;
        margin: 0 10px;
        border: 2px solid #1b1b1c;
        border-radius: 50%;
        height: 56px;
        width: 56px;
        line-height: 50px;

        &:visited {
          color: #1b1b1c;
        }

        &:hover, &:focus, &:active {
          color: #ea1821;
          border-color: #ea1821;
        }
      }
    }

    .partners {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        height: 60px;
        max-width: 25%;
        margin: 0 10px;
      }

      & > *:last-child {
        height: 100px;
      }
    }
  }
</style>
