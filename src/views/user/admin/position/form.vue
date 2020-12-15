<template>
  <FormRender :Service="Service" :form="form">
    <FormInput v-model="form.name" :field="formFields.name"></FormInput>
    <FormInput v-model="form.display_name" :field="formFields.display_name"></FormInput>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewUserAdminPositionForm extends Vue {
  private Service = Service

  private form = {
    id: RouterService.query('id'),
    name: '',
    display_name: ''
  }

  private formFields = ValidateService.genRules({
    name: {
      prop: 'name',
      label: '标识',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    display_name: {
      prop: 'display_name',
      label: '名称',
      rule: [ValidateService.required, ValidateService.max(30)]
    }
  })
}
</script>
