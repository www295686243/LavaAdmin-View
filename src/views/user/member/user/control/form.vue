<template>
  <FormRender :form="form" :Service="Service">
    <FormSwitch v-model="form.is_disable_all_push" :field="formFields.is_disable_all_push"></FormSwitch>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import RouterService from '@/service/RouterService'

@Component
export default class ViewUserMemberUserControlForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    is_disable_all_push: 0
  }

  private formFields: IFormFields = ValidateService.genRules({
    is_disable_all_push: {
      prop: 'is_disable_all_push',
      label: '关闭所有推送'
    }
  })
}
</script>
