<template>
  <FormRender :form="form" :Service="Service">
    <FormTextarea v-model="form.description" :field="formFields.description"></FormTextarea>
    <FormInput v-model="form.phone" :field="formFields.phone"></FormInput>
    <FormSelect v-model="form.status" :field="formFields.status"></FormSelect>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'

@Component
export default class ViewInfoProvideForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    description: '',
    phone: '',
    status: ConstService.getOptionsValue(93, '待审核')
  }

  private formFields: IFormFields = ValidateService.genRules({
    description: {
      prop: 'description',
      label: '描述',
      rule: [ValidateService.required, ValidateService.max(255)]
    },
    phone: {
      prop: 'phone',
      label: '电话',
      rule: [ValidateService.required, ValidateService.phone]
    },
    status: {
      prop: 'status',
      label: '状态'
    }
  })
}
</script>
