<template>
  <FormRender :form="form" :Service="Service">
    <FormText v-model="form.name" :field="formFields.name"></FormText>
    <FormText v-model="form.display_name" :field="formFields.display_name"></FormText>
    <FormText v-model="form.value" :field="formFields.value"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

@Component
export default class PlatformConfigBaseForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    name: '',
    display_name: '',
    value: '',
    guard_name: RouterService.query('guard_name')
  }

  private formFields: IFormFields = {
    name: ValidateService.genRule({
      prop: 'name',
      label: '标识',
      disabled: !!this.form.id,
      rule: [ValidateService.required, ValidateService.max(60)]
    }),
    display_name: ValidateService.genRule({
      prop: 'display_name',
      label: '名称',
      rule: [ValidateService.required, ValidateService.max(60)]
    }),
    value: ValidateService.genRule({
      prop: 'value',
      label: '值',
      rule: [ValidateService.required, ValidateService.max(120)]
    })
  }
}
</script>
