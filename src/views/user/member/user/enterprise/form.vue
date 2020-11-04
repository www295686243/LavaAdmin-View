<template>
  <FormRender :form="form" :Service="Service">
    <el-row :gutter="20">
      <el-col :span="14">
        <FormImage v-model="form.avatar" :field="formFields.avatar"></FormImage>
        <FormInput v-model="form.company" :field="formFields.company"></FormInput>
        <FormInput v-model="form.business_license" :field="formFields.business_license"></FormInput>
        <FormMultipleCascader v-model="form.industry" :field="formFields.industry" type="industry"></FormMultipleCascader>
        <FormCascader v-model="form.city" :field="formFields.city"></FormCascader>
        <FormInput v-model="form.address" :field="formFields.address"></FormInput>
        <FormSelect v-model="form.industry_attr" :field="formFields.industry_attr"></FormSelect>
        <FormSelect v-model="form.company_scale" :field="formFields.company_scale"></FormSelect>
        <FormTextarea v-model="form.intro" :field="formFields.intro"></FormTextarea>
        <FormCheckbox v-model="form.tags" :field="formFields.tags" type="label-string"></FormCheckbox>
      </el-col>
      <el-col :span="10">
        <el-divider>运营人信息</el-divider>
        <FormInput v-model="form.name" :field="formFields.name"></FormInput>
        <FormInput v-model="form.id_card" :field="formFields.id_card"></FormInput>
        <FormInput v-model="form.position" :field="formFields.position"></FormInput>
        <FormInput v-model="form.phone" :field="formFields.phone"></FormInput>
        <FormInput v-model="form.email" :field="formFields.email"></FormInput>
      </el-col>
    </el-row>
    <FormImages v-model="form.company_images" :field="formFields.company_images"></FormImages>
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
export default class ViewUserMemberUserEnterpriseForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    avatar: '',
    company: '',
    business_license: '',
    city: 0,
    address: '',
    intro: '',
    industry_attr: '',
    industry: [],
    tags: '',
    company_images: [],
    company_scale: 0,
    name: '',
    id_card: '',
    position: '',
    phone: '',
    email: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    avatar: {
      prop: 'avatar',
      label: 'LOGO'
    },
    company: {
      prop: 'company',
      label: '公司名',
      rule: [ValidateService.max(60)]
    },
    business_license: {
      prop: 'business_license',
      label: '营业执照',
      rule: [ValidateService.len(18)]
    },
    city: {
      prop: 'city',
      label: '公司地区',
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
    intro: {
      prop: 'intro',
      label: '公司简介',
      rule: [ValidateService.max(255)]
    },
    industry_attr: {
      prop: 'industry_attr',
      label: '行业属性'
    },
    industry: {
      prop: 'industry',
      label: '行业',
      props: {
        value: 'id'
      }
    },
    email: {
      prop: 'email',
      label: '邮箱',
      rule: [ValidateService.email]
    },
    tags: {
      prop: 'tags',
      label: '公司标签'
    },
    company_images: {
      prop: 'company_images',
      label: '公司图片'
    },
    company_scale: {
      prop: 'company_scale',
      label: '企业规模'
    },
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
    position: {
      prop: 'position',
      label: '职位',
      rule: [ValidateService.max(60)]
    },
    phone: {
      prop: 'phone',
      label: '联系电话',
      rule: [ValidateService.phone]
    }
  })
}
</script>
