<template>
  <div class="block">
    <div class="container">
      <h2 class="title title-font">Комплектации домов</h2>
      <div class="row">
        <div class="col-sm-4" v-for="(plan, ind) in plans">
          <div class="plan-item">
            <img :src="plan.img" :alt="plan.name">
            <h3 class="plan-name">{{plan.name}}</h3>
            <div class="additional">
              <span v-if="plan.additional" @click="plan.additional = false">Скрыть</span>
              <span v-else @click="plan.additional = true">Подробнее...</span>
            </div>
            <ul class="features" :class="{ 'feature-hide': plan.additional, 'feature-show': !plan.additional }">
              <li v-for="f in plan.features">{{ f }}</li>
            </ul>
            <div class="plan-price">{{ plan.price }} руб/м<sup>2</sup></div>
            <div class="plan-discount">{{ plan.discountPrice }} руб/м<sup>2</sup></div>
            <div class="btn-container">
              <div class="btn" data-toggle="modal" :data-target="'#block5-modal-' + ind" onclick="yaCounter47630926.reachGoal('showmodal2'); return true;">Заказать</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <app-modal :id="'block5-modal-' + ind" v-for="(plan, ind) in plans"
      :message="'Заявка оставлена в блоке №5 (Комплектации домов). Выбран тип: ' + plan.name"
      :success="success"></app-modal>
  </div>
</template>

<script>
  var appModal = require('../app-modal.vue');

  module.exports = {
    data() {
      return {
        plans: [{
          name: '“Дача”',
          features: [
            'Срок строительства от 45 дней',
            'Фундамент свайно-винтовой',
            'Стандартный каркас отработанный антисептиком Neomid',
            'Базальтовый утеплитель 100мм',
            'Кровля - металлопрофиль',
            'Внешняя отделка - OSB',
            'Окна пластиковые',
            'Дверь металлическая',
            'Полы - доска шпунтованная 150x40',
            'Внутренняя отделка - вагонка'
          ],
          price: 'от 15 500',
          discountPrice: 'от 10 990',
          img: 'assets/images/block5/item1.jpg',
          additional: false
        },{
          name: '“Классика”',
          features: [
            'Срок строительства от 60 дней',
            'Фундамент свайно-винтовой',
            'Стандартный каркас отработанный антисептиком Neomid',
            'Базальтовый утеплитель 150+50 (200)мм',
            'Кровля - металлочерепица',
            'Внешняя отделка - сайдинг или имитация бруса',
            'Окна пластиковые',
            'Дверь металлическая',
            'Полы - доска шпунтованная 150x40',
            'Внутренняя отделка - ГКЛВ 12,5 мм',
            'Вентиляция',
            'Электромонтаж по всему дому, без подключения световых приборов',
            'Отопление - конвекторы электрические',
            'Монтаж канализации и водоснабжения в санузлах и кухне'
          ],
          price: 'от 18 300',
          discountPrice: 'от 14 990',
          img: 'assets/images/block5/item2.jpg',
          additional: false
        },{
          name: '“Под ключ”',
          features: [
            'Срок строительства от 75 дней',
            'Фундамент свайно-винтовой',
            'Стандартный каркас отработанный антисептиком Neomid',
            'Базальтовый утеплитель 150+50 (200)мм',
            'Кровля - металлочерепица',
            'Внешняя отделка - декоративная штукатурка или имитация бруса',
            'Окна пластиковые',
            'Дверь металлическая',
            'Полы - доска шпунтованная 150x40',
            'Внутренняя отделка - ГКЛВ 12,5 мм',
            'Вентиляция',
            'Электромонтаж по всему дому, с подключением световых приборов',
            'Отопление - тёплый пол первый этаж , установка котла и радиаторов',
            'Канализация и водоснабжение в санузлах и кухне',
            'Чистовая отделка пола - ламинат',
            'Чистовая отделка санузлов плиткой'
          ],
          price: 'от 21 000',
          discountPrice: 'от 17 900',
          img: 'assets/images/block5/item3.jpg',
          additional: false
        }]
      }
    },
    components: { appModal: appModal },
    methods: {
      success() {
        yaCounter47630926.reachGoal('sendapplication2');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .block {
    position: relative;
    padding: 70px 0;
    background-color: #fafafa;

    .title {
      font-size: 37px;
      font-weight: bold;
      margin-bottom: 30px;
      text-align: center;
    }

    .plan-item {
      position: relative;
      padding: 0 15px 15px 15px;
      margin: 15px 10px;
      z-index: 0;

      img {
        width: 100%;
      }

      &::before {
        content: ' ';
        position: absolute;
        top: 80px;
        bottom: 38px;
        left: 0;
        right: 0;
        border: 2px #EA1821 solid;
        z-index: -1;
      }

      .plan-name {
        font-size: 21px;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 15px;
        text-align: center;
      }

      .plan-price {
        text-align: center;
        margin-top: 30px;
        font-size: 16px;
        color: #999999;
        text-decoration: line-through;
      }

      .plan-discount {
        font-size: 21px;
        color: #1b1d1c;
        text-align: center;
        font-weight: bold;
        margin-bottom: 30px;
      }

      .btn-container {
        text-align: right;

        .btn {
          color: white;
          background-color: #ea1821;
          border-radius: 0;
          font-size: 16px;
          padding: 13px 40px;
          width: 240px;

          @media (max-width: 767px) {
            width: 100%;
          }

          @media (min-width: 768px) {
            display: inline-block;
          }

          &:hover {
            color: white;
            background-color: #bb131a;
          }
        }
      }
    }

    .additional {
      display: block;
      text-decoration: underline;
      color: #ea1821;
      cursor: pointer;
      text-align: center;

      &:hover {
        color: #bb131a;
      }
    }

    .features {
      font-size: 16px;
      color: #0c0d0d;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: hidden;
      transition: max-height 1s ease-in-out;;

      li {
        margin: 13px 0;
        position: relative;
        padding-left: 30px;

        &:before {
          content: ' ';
          position: absolute;
          top: 3px;
          left: 7px;
          height: 14px;
          width: 14px;
          border: 2px solid #ea1821;
        }
      }

      &.feature-show {
        max-height: 0;
      }

      &.feature-hide {
        height: auto;
        max-height: 1000px;
      }
    }
  }
</style>
