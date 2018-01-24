// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import axios from 'axios'

// 注意一定要在main里面引入mock不然没法获得模拟数据
import Mock from './mock/mock' 

Vue.config.productionTip = false;

// 修改vue原型链，axios
// Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
});
