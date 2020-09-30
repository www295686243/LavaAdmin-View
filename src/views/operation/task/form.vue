<template>
  <FormRender :form="form" :Service="Service">
    <FormText v-model="form.title" :field="formFields.title"></FormText>
    <FormText v-model="form.desc" :field="formFields.desc"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewOperationTaskForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    title: '',
    desc: '',
    get_number: 1
  }

  private formFields: IFormFields = ValidateService.genRules({
    title: {
      prop: 'title',
      label: '任务名',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    desc: {
      prop: 'desc',
      label: '任务描述',
      rule: [ValidateService.required, ValidateService.max(255)]
    }
  })
}
</script>
