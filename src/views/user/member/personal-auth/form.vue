<template>
  <FormRender :Service="Service" :onLoadAfter="handleChange" :form="form">
    <FormInput v-model="form.name" :field="formFields.name"></FormInput>
    <FormInput v-model="form.company" :field="formFields.company"></FormInput>
    <FormInput v-model="form.position" :field="formFields.position"></FormInput>
    <FormCascader v-model="form.city" :field="formFields.city"></FormCascader>
    <FormInput v-model="form.address" :field="formFields.address"></FormInput>
    <FormTextarea v-model="form.intro" :field="formFields.intro"></FormTextarea>
    <FormImages v-model="form.certificates" :field="formFields.certificates"></FormImages>
    <FormRadio v-model="form.status" :field="formFields.status" @change="handleChange"></FormRadio>
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
export default class ViewUserMemberPersonalAuthForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    name: '',
    company: '',
    position: '',
    city: 0,
    address: '',
    intro: '',
    certificates: [],
    status: Service.getStatusValue(1, '待审核'),
    refuse_reason: ''
  }

  private formFields: IFormFields = {}

  private initFormFields () {
    return ValidateService.genRules({
      name: {
        prop: 'name',
        label: '姓名',
        rule: [ValidateService.required, ValidateService.fullname]
      },
      company: {
        prop: 'company',
        label: '公司名',
        rule: [ValidateService.required, ValidateService.max(60)]
      },
      position: {
        prop: 'position',
        label: '职位',
        rule: [ValidateService.required, ValidateService.max(60)]
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
      status: {
        prop: 'status',
        label: '状态',
        rule: [ValidateService.required({ type: 'number' })]
      },
      refuse_reason: {
        prop: 'refuse_reason',
        label: '拒绝原因',
        rule: [ValidateService.max(255), () => {
          return {
            refuse_reason: {
              required: this.form.status === Service.getStatusValue(3, '已拒绝'),
              validator: (rule: any, value: string, callback: Function) => {
                if (this.form.status === Service.getStatusValue(3, '已拒绝') && !value) {
                  callback(new Error('请输入拒绝原因'))
                }
                callback()
              },
              trigger: 'blur'
            }
          }
        }]
      }
    })
  }

  private handleChange () {
    return Promise.resolve()
      .then(() => {
        this.formFields = this.initFormFields()
      })
  }
}
</script>
