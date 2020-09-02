import './class-component-hooks'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import PageContainer from './components/PageContainer.vue'
import DataRender from './components/DataRender.vue'
import ButtonSubmit from './components/Button/ButtonSubmit.vue'
import ButtonDelete from './components/Button/ButtonDelete.vue'

import FormRender from './components/Form/FormRender.vue'
import FormText from './components/Form/FormText.vue'
import FormTextarea from './components/Form/FormTextarea.vue'
import FormSelect from './components/Form/FormSelect.vue'
import FormCounter from './components/Form/FormCounter.vue'
import FormRadio from './components/Form/FormRadio.vue'
import FormSwitch from './components/Form/FormSwitch.vue'
import FormDate from './components/Form/FormDate.vue'
import FormCheckbox from './components/Form/FormCheckbox.vue'
import FormCascader from './components/Form/FormCascader.vue'
import FormImage from './components/Form/FormImage.vue'
import FormImages from './components/Form/FormImages.vue'
import FormGroupRender from './components/Form/FormGroupRender.vue'
import FormRangeDate from './components/Form/FormRangeDate.vue'

import TableRender from './components/Table/TableRender.vue'
import TableText from './components/Table/TableText.vue'
import TableOptions from './components/Table/TableOptions.vue'
import TableCheckbox from './components/Table/TableCheckbox.vue'
import TableImage from './components/Table/TableImage.vue'
import TableImages from './components/Table/TableImages.vue'
import TableCascader from './components/Table/TableCascader.vue'
import TableAction from './components/Table/TableAction.vue'

import RouterService from '@/service/RouterService'
import UserService from '@/service/UserService'

Vue.component('ButtonSubmit', ButtonSubmit)
Vue.component('ButtonDelete', ButtonDelete)
Vue.component('PageContainer', PageContainer)
Vue.component('DataRender', DataRender)

Vue.component('FormRender', FormRender)
Vue.component('FormText', FormText)
Vue.component('FormTextarea', FormTextarea)
Vue.component('FormSelect', FormSelect)
Vue.component('FormCounter', FormCounter)
Vue.component('FormRadio', FormRadio)
Vue.component('FormSwitch', FormSwitch)
Vue.component('FormDate', FormDate)
Vue.component('FormCheckbox', FormCheckbox)
Vue.component('FormCascader', FormCascader)
Vue.component('FormImage', FormImage)
Vue.component('FormImages', FormImages)
Vue.component('FormRangeDate', FormRangeDate)

Vue.component('TableRender', TableRender)
Vue.component('TableText', TableText)
Vue.component('TableOptions', TableOptions)
Vue.component('TableCheckbox', TableCheckbox)
Vue.component('TableImage', TableImage)
Vue.component('TableImages', TableImages)
Vue.component('TableCascader', TableCascader)
Vue.component('TableAction', TableAction)
Vue.component('FormGroupRender', FormGroupRender)

RouterService.init(router)
UserService.init()

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('permission', (el, params) => {
  const result = UserService.hasPermission(params.value)
  if (!result) {
    el.style.display = 'none'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
