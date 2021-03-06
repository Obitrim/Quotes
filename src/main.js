import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

// bootstrap imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts.css';

Vue.config.productionTip = false
Vue.use(VueRouter);

var router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
