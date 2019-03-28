import Vue from 'vue'
import Vant from 'vant' // 引入已安装好的 Vant ui 这个插件
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import {axios} from 'axios'
Vue.prototype.$ajax=axios;
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
const eventBus = new Vue();
Vue.config.productionTip = false;
Vue.use(Vant); // 引用Vant 这个插件
Vue.prototype.$eventBus = eventBus;
// import Vant from 'vant'
// import 'vant/lib/index.css'
// // Vue.config.productionTip = false
// Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
