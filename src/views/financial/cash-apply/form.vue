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
      options: Service.getOptions('status').map((res) => {
        res.disabled = ![Service.getStatusValue(2, '已通过'), Service.getStatusValue(3, '已拒绝')].includes(res.value)
        return res
      })
    }
  })
}
</script>
