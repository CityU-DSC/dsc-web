import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";

import { routes } from "./routes";

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


const router = new VueRouter({
  routes,
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
