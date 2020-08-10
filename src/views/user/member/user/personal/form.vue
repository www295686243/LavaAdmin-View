<template>
  <FormRender :data="data" :Service="Service">
    <FormText v-model="data.name" :field="formFields.name"></FormText>
    <FormText v-model="data.id_card" :field="formFields.id_card"></FormText>
    <FormSelect v-model="data.seniority" :field="formFields.seniority"></FormSelect>
    <FormTextarea v-model="data.intro" :field="formFields.intro"></FormTextarea>
    <FormText v-model="data.company" :field="formFields.company"></FormText>
    <FormText v-model="data.position" :field="formFields.position"></FormText>
    <FormCascader v-model="data.city" :field="formFields.city"></FormCascader>
    <FormText v-model="data.address" :field="formFields.address"></FormText>
    <FormCheckbox v-model="data.tags" :field="formFields.tags"></FormCheckbox>
    <FormText v-model="data.education_experience" :field="formFields.education_experience"></FormText>
    <FormText v-model="data.work_experience" :field="formFields.work_experience"></FormText>
    <FormText v-model="data.honorary_certificate" :field="formFields.honorary_certificate"></FormText>
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
export default class ViewUserMemberUserPersonalForm extends Vue {
  private Service = Service
  private data = {
    id: RouterService.query('id'),
    name: '',
    id_card: '',
    seniority: '',
    intro: '',
    company: '',
    position: '',
    city: 0,
    address: '',
    tags: [],
    education_experience: [],
    work_experience: [],
    honorary_certificate: []
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
      label: '工作年限',
      options: ConstService.getUserOptions('seniority')
    },
    intro: {
      prop: 'intro',
      label: '个人介绍',
      rule: [ValidateService.max(255)]
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
      label: '详细地址',
      rule: [ValidateService.max(60)]
    },
    tags: {
      prop: 'tags',
      label: '自我评价',
      options: ConstService.getUserOptions('personal_tags')
    },
    education_experience: {
      prop: 'education_experience',
      label: '教育经历'
    },
    work_experience: {
      prop: 'work_experience',
      label: '工作经历'
    },
    honorary_certificate: {
      prop: 'honorary_certificate',
      label: '荣誉证书'
    }
  })
}
</script>
