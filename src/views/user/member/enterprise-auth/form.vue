<template>
  <FormRender :Service="Service" :form="form">
    <FormText v-model="form.company" :field="formFields.company"></FormText>
    <FormText v-model="form.business_license" :field="formFields.business_license"></FormText>
    <FormCascader v-model="form.city" :field="formFields.city"></FormCascader>
    <FormText v-model="form.address" :field="formFields.address"></FormText>
    <FormTextarea v-model="form.intro" :field="formFields.intro"></FormTextarea>
    <FormImages v-model="form.certificates" :field="formFields.certificates"></FormImages>
    <FormRadio v-model="form.auth_status" :field="formFields.auth_status"></FormRadio>
    <FormTextarea v-model="form.refuse_reason" :field="formFields.refuse_reason"></FormTextarea>
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
export default class ViewUserMemberEnterpriseAuthForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    company: '',
    business_license: '',
    city: 0,
    address: '',
    intro: '',
    certificates: [],
    auth_status: '',
    refuse_reason: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    company: {
      prop: 'company',
      label: '公司名',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    business_license: {
      prop: 'business_license',
      label: '营业执照',
      rule: [ValidateService.required, ValidateService.max(18)]
    },
    city: {
      prop: 'city',
      label: '省市区',
      options: ConstService.getAreaOptions(),
      props: {
        label: 'name',
        value: 'id'
      },
      filterable: true,
      rule: [ValidateService.required({ type: 'number' })]
    },
    address: {
      prop: 'address',
      label: '详细地址',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    intro: {
      prop: 'intro',
      label: '简介',
      rule: [ValidateService.required, ValidateService.max(255)]
    },
    certificates: {
      prop: 'certificates',
      label: '证件',
      rule: [ValidateService.required({ type: 'array' })]
    },
    auth_status: {
      prop: 'auth_status',
      label: '状态',
      rule: [ValidateService.required({ type: 'number' })]
    },
    refuse_reason: {
      prop: 'refuse_reason',
      label: '拒绝原因',
      rule: [ValidateService.max(255)]
    }
  })
}
</script>
