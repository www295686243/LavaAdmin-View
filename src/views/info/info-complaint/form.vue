<template>
  <FormRender :form="form" :Service="Service">
    <FormTextarea v-model="form.complaint_content" :field="formFields.complaint_content"></FormTextarea>
    <FormTextarea v-model="form.handle_content" :field="formFields.handle_content"></FormTextarea>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import RouterService from '@/service/RouterService'

@Component
export default class ViewInfoComplaintForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    handle_content: '',
    complaint_content: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    handle_content: {
      prop: 'handle_content',
      label: '回复'
    },
    complaint_content: {
      prop: 'complaint_content',
      label: '投诉',
      disabled: true
    }
  })
}
</script>
