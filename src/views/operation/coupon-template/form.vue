<template>
  <FormRender :form="form" :Service="Service">
    <FormInput v-model="form.display_name" :field="formFields.display_name"></FormInput>
    <FormInput v-model="form.desc" :field="formFields.desc"></FormInput>
    <FormSwitch v-model="form.is_trade" :field="formFields.is_trade"></FormSwitch>
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
export default class ViewOperationCouponTemplateForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    display_name: '',
    desc: '',
    is_trade: 0
  }

  private formFields: IFormFields = ValidateService.genRules({
    display_name: {
      prop: 'display_name',
      label: '券名',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    desc: {
      prop: 'desc',
      label: '描述',
      rule: [ValidateService.max(255)]
    },
    is_trade: {
      prop: 'is_trade',
      label: '是否可交易',
      options: ConstService.getBoolOptions()
    }
  })
}
</script>
