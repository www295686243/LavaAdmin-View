<template>
  <FormRender :form="form" :Service="Service">
    <FormInput v-model="form.display_name" :field="formFields.display_name"></FormInput>
    <FormCounter v-model="form.value" :field="formFields.value"></FormCounter>
    <FormInput v-model="form.color" :field="formFields.color"></FormInput>
    <FormInput v-model="form.name" :field="formFields.name"></FormInput>
    <FormCounter v-model="form.sort" :field="formFields.sort"></FormCounter>
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
    color: '',
    config_id: RouterService.query('config_id'),
    sort: '',
    value: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    name: {
      prop: 'name',
      label: '标识',
      rule: [ValidateService.max(120)]
    },
    display_name: {
      prop: 'display_name',
      label: '名称',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    value: {
      prop: 'value',
      label: '值',
      rule: [ValidateService.required({ type: 'number' })]
    },
    color: {
      prop: 'color',
      label: '颜色值'
    },
    sort: {
      prop: 'sort',
      label: '排序'
    }
  })
}
</script>
