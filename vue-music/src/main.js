import Vue from 'vue'
import App from './App.vue'
import router from './router'

//完整引入 mint-ui
import MintUI, {Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/mock'

Vue.config.productionTip = false


Vue.use(MintUI)
Vue.prototype.$indicator = Indicator

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
