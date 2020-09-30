<template>
  <FormRender :form="form" :Service="Service">
    <FormSelect v-model="form.status" :field="formFields.status"></FormSelect>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import ConstService from '@/service/ConstService'

@Component
export default class ViewOtherWeChatNotifyUserForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    status: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    status: {
      prop: 'status',
      label: '状态',
      options: ConstService.getOptions(Service.getModelName() + ':status').map((res) => {
        res.disabled = ![ConstService.getOptionsValue(85, '已通过'), ConstService.getOptionsValue(86, '已拒绝')].includes(res.id)
        return res
      })
    }
  })
}
</script>
