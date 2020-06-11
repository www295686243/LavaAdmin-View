import './class-component-hooks'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import PageContainer from './components/PageContainer.vue'
import ButtonSubmit from './components/Button/ButtonSubmit.vue'
import ButtonDelete from './components/Button/ButtonDelete.vue'

import RouterService from '@/service/RouterService'
import UserService from '@/service/UserService'

Vue.component('ButtonSubmit', ButtonSubmit)
Vue.component('ButtonDelete', ButtonDelete)
Vue.component('PageContainer', PageContainer)

RouterService.init(router)
UserService.init()

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
