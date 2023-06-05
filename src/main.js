// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// 引入 axios
// 该文件是脚手架项目中的main.js

import axios from 'axios'
Vue.prototype.$axios = axios // 在Vue的原型上添加一个$http属性，该属性保存了axios
Vue.use(Viewer)
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
