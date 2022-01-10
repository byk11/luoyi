import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import axios from "axios";

Vue.config.productionTip = false
// 添加事件总线对象
// axios.defaults.baseURL = 'http://localhost:8088/'
// Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue();

// 安装toast插件
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
