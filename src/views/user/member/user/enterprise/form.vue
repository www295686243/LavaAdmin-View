<template>
  <FormRender :data="form" :Service="Service">
    <FormText v-model="form.company" :field="formFields.company"></FormText>
    <FormText v-model="form.business_license" :field="formFields.business_license"></FormText>
    <FormCascader v-model="form.city" :field="formFields.city"></FormCascader>
    <FormText v-model="form.address" :field="formFields.address"></FormText>
    <FormTextarea v-model="form.intro" :field="formFields.intro"></FormTextarea>
    <FormCheckbox v-model="form.tags" :field="formFields.tags"></FormCheckbox>
    <FormImages v-model="form.company_images" :field="formFields.company_images"></FormImages>
    <FormSelect v-model="form.company_scale" :field="formFields.company_scale"></FormSelect>
    <el-divider>运营人信息</el-divider>
    <FormText v-model="form.name" :field="formFields.name"></FormText>
    <FormText v-model="form.id_card" :field="formFields.id_card"></FormText>
    <FormText v-model="form.position" :field="formFields.position"></FormText>
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
    company: '',
    business_license: '',
    city: 0,
    address: '',
    intro: '',
    tags: [],
    company_images: [],
    company_scale: 0,
    name: '',
    id_card: '',
    position: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
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
    }
  })
}
</script>
