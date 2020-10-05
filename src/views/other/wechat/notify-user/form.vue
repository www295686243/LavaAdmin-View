<template>
  <FormRender :form="form" :Service="Service">
    <FormInput v-model="form.user_id" :field="formFields.user_id"></FormInput>
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
    notify_template_id: RouterService.query('notify_template_id'),
    user_id: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    user_id: {
      prop: 'user_id',
      label: '用户id',
      rule: [ValidateService.required]
    }
  })
}
</script>
