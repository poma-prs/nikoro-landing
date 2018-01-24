var Vue = require('vue');

// part view components
var app = require('./index.vue');

new Vue({
  el: 'app',
  components: { app: app }
});
