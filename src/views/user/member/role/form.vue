<template>
  <FormRender :Service="Service" :data="data">
    <FormText v-model="data.display_name" :field="formFields.display_name"></FormText>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewUserMemberRoleForm extends Vue {
  private Service = Service
  private data = {
    id: RouterService.query('id'),
    display_name: ''
  }

  private formFields: IFormFields = {
    display_name: ValidateService.genRule({
      prop: 'display_name',
      label: '名称',
      rule: [ValidateService.required, ValidateService.max(30)]
    })
  }
}
</script>
