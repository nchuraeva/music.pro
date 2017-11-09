// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import { routes } from './router/routers'

Vue.use(VueRouter)
Vue.config.productionTip = false
export const router = new  VueRouter({
  mode:'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})