<template>
  <div class="radio-container">
    <label class="radio-box" v-for="(opt, index) in options">{{ opt.text }}
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
        console.log('checked: ', event.target.checked);
        if (event.target.checked) {
          console.log(this.options[event.target.value]);
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

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 28px;
        width: 28px;
        border: 2px solid #ea1821;
        border-radius: 0;

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
        top: -1px;
        left: -1px;
        height: 30px;
        width: 30px;
      }

      &:hover input ~ .checkmark::after {
        width: 18px;
        height: 18px;
      }

      input:checked ~ .checkmark::after {
        display: block;
      }
    }
  }
</style>
