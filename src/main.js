import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
// 引入全局样式
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
