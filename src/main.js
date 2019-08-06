import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import axios from 'axios'
Vue.use(iView);
import VueResource from 'vue-resource'
Vue.use(VueResource)
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name,VTable)
Vue.component(VPagination.name,VPagination)

// import VueAxios from './vue-axios'
// Vue.use(VueAxios,axios);
// import axios from "axios"
// Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
