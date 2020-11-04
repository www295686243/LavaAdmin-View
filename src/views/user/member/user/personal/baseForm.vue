<template>
  <FormRender :form="form" :Service="Service">
    <el-row :gutter="20">
      <el-col :span="12">
        <FormInput v-model="form.name" :field="formFields.name"></FormInput>
        <FormInput v-model="form.id_card" :field="formFields.id_card"></FormInput>
        <FormInput v-model="form.phone" :field="formFields.phone"></FormInput>
        <FormInput v-model="form.email" :field="formFields.email"></FormInput>
        <FormCascader v-model="form.city" :field="formFields.city"></FormCascader>
        <FormInput v-model="form.address" :field="formFields.address"></FormInput>
      </el-col>
      <el-col :span="12">
        <FormInput v-model="form.company" :field="formFields.company"></FormInput>
        <FormMultipleCascader v-model="form.industry" :field="formFields.industry" type="industry"></FormMultipleCascader>
        <FormInput v-model="form.position" :field="formFields.position"></FormInput>
        <FormSelect v-model="form.position_attr" :field="formFields.position_attr"></FormSelect>
        <FormSelect v-model="form.seniority" :field="formFields.seniority"></FormSelect>
        <FormTextarea v-model="form.intro" :field="formFields.intro"></FormTextarea>
      </el-col>
    </el-row>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import ConstService from '@/service/ConstService'
import RouterService from '@/service/RouterService'

@Component
export default class ViewUserMemberUserPersonalForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    name: '',
    id_card: '',
    seniority: '',
    intro: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    position_attr: '',
    city: 0,
    address: '',
    industry: []
  }

  private formFields: IFormFields = ValidateService.genRules({
    name: {
      prop: 'name',
      label: '姓名',
      rule: [ValidateService.fullname, ValidateService.optional]
    },
    id_card: {
      prop: 'id_card',
      label: '身份证',
      rule: [ValidateService.idcard, ValidateService.optional]
    },
    seniority: {
      prop: 'seniority',
      label: '工作年限'
    },
    intro: {
      prop: 'intro',
      label: '个人介绍',
      rule: [ValidateService.max(255)]
    },
    email: {
      prop: 'email',
      label: '邮箱',
      rule: [ValidateService.email]
    },
    phone: {
      prop: 'phone',
      label: '手机号',
      rule: [ValidateService.mobile]
    },
    company: {
      prop: 'company',
      label: '公司名',
      rule: [ValidateService.max(60)]
    },
    position: {
      prop: 'position',
      label: '职位',
      rule: [ValidateService.max(60)]
    },
    position_attr: {
      prop: 'position_attr',
      label: '职位属性'
    },
    city: {
      prop: 'city',
      label: '所在地区',
      options: ConstService.getAreaOptions(),
      props: {
        label: 'name',
        value: 'id'
      },
      filterable: true
    },
    address: {
      prop: 'address',
      label: '街道地址',
      rule: [ValidateService.max(60)]
    },
    industry: {
      prop: 'industry',
      label: '行业',
      props: {
        value: 'id'
      }
    }
  })
}
</script>
