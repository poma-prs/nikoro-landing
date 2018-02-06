<template>
  <div class="radio-container">
    <label class="radio-box" v-for="(opt, index) in options">
      <span class="opt-text">{{ opt.text }}</span>
      <span class="opt-desc" v-if="opt.desc">{{ opt.desc }}</span>
      <input type="radio" :checked="index == defind ? 'checked': ''" :name="name" :value="index" @change="onChange">
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
  module.exports = {
    props: {
      name: { type: String },
      options: { type: Array },
      defind: {
        type: Number,
        default: 0
      },
      value: { type: Object }
    },
    created() {
      this.$emit('input', this.options[this.defind]);
    },
    methods: {
      onChange (event) {
        if (event.target.checked) {
          this.$emit('input', this.options[event.target.value])
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .radio-container {
    display: inline-block;

    .radio-box {
      display: block;
      position: relative;
      padding-left: 50px;
      margin: 35px 0;
      cursor: pointer;
      font-size: 16px;
      line-height: 28px;
      user-select: none;
      text-align: left;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      .opt-text {

      }

      .opt-desc {
        display: block;
        color: #999;
        font-weight: normal;
      }

      .checkmark {
        position: absolute;
        top: 50%;
        left: 0;
        height: 28px;
        width: 28px;
        border: 2px solid #ea1821;
        border-radius: 0;
        transform: translateY(-50%);

        &::after {
          display: none;
          content: "";
          position: absolute;
          top: 4px;
          left: 4px;
          width: 16px;
          height: 16px;
          background-color: #ea1821;
        }
      }

      &:hover input ~ .checkmark {
        top: calc(50% - 1px);
        left: -1px;
        height: 30px;
        width: 30px;
      }

      &:hover input ~ .checkmark::after {
        width: 18px;
        height: 18px;
      }

      @keyframes tick {
        0% {
          transform: scale(0);
        }
        90% {
          transform: scale(1.4);
        }
        100% {
          transform: scale(1);
        }
      }

      input:checked ~ .checkmark::after {
        display: block;
        animation: tick .2s ease-in-out;
      }
    }
  }
</style>
