var Vue = require('vue');
var vueSmoothScroll = require('vue-smooth-scroll');

Vue.use(vueSmoothScroll);

// part view components
var app = require('./index.vue');

new Vue({
  el: 'app',
  components: { app: app }
});
