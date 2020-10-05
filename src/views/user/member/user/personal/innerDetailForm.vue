<template>
  <div>
    <FormImage v-model="form.avatar" :field="formFields.avatar"></FormImage>
    <FormCheckbox v-model="form.tags" :field="formFields.tags" type="label-string" :fieldService="Service"></FormCheckbox>
    <el-row :gutter="20">
      <el-col :span="12">
        <FormGroupRender v-model="form.education_experience" title="教育经历" :initForm="education_experience_form">
          <template v-slot="{ v }">
            <FormRangeDate
              v-model="v.rangeDate"
              :minValue.sync="v.minDate"
              :maxValue.sync="v.maxDate"
              :field="educationExperienceFormFields.rangeDate" />
            <FormInput v-model="v.school" :field="educationExperienceFormFields.school"></FormInput>
            <FormInput v-model="v.profession" :field="educationExperienceFormFields.profession"></FormInput>
          </template>
        </FormGroupRender>
      </el-col>
      <el-col :span="12">
        <FormGroupRender v-model="form.work_experience" title="工作经历" :initForm="work_experience_form">
          <template v-slot="{ v }">
            <FormRangeDate
              v-model="v.rangeDate"
              :minValue.sync="v.minDate"
              :maxValue.sync="v.maxDate"
              :field="workExperienceFormFields.rangeDate" />
            <FormInput v-model="v.company" :field="workExperienceFormFields.company"></FormInput>
            <FormInput v-model="v.position" :field="workExperienceFormFields.position"></FormInput>
            <FormCascader v-model="v.city" :field="workExperienceFormFields.city"></FormCascader>
            <FormInput v-model="v.address" :field="workExperienceFormFields.address"></FormInput>
          </template>
        </FormGroupRender>
      </el-col>
      <el-col :span="12">
        <FormGroupRender v-model="form.honorary_certificate" title="荣誉证书" :initForm="honorary_certificate_form">
          <template v-slot="{ v }">
            <FormInput v-model="v.name" :field="honoraryCertificateFormFields.name"></FormInput>
            <FormImages v-model="v.images" :field="honoraryCertificateFormFields.images"></FormImages>
          </template>
        </FormGroupRender>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import ConstService from '@/service/ConstService'

@Component
export default class ViewHrJobInnerForm extends Vue {
  @Prop()
  form!: any

  private Service = Service

  private education_experience_form = {
    rangeDate: [],
    minDate: '',
    maxDate: '',
    school: '',
    profession: ''
  }

  private work_experience_form = {
    rangeDate: [],
    minDate: '',
    maxDate: '',
    company: '',
    position: '',
    city: 0,
    address: ''
  }

  private honorary_certificate_form = {
    name: '',
    images: []
  }

  private formFields: IFormFields = ValidateService.genRules({
    avatar: {
      prop: 'avatar',
      label: '头像'
    },
    tags: {
      prop: 'tags',
      label: '自我评价'
    }
  })

  private educationExperienceFormFields: IFormFields = ValidateService.genRules({
    rangeDate: {
      prop: 'rangeDate',
      label: '日期',
      rule: [ValidateService.required({ type: 'array', trigger: 'change' })]
    },
    school: {
      prop: 'school',
      label: '学校名称',
      rule: [ValidateService.required, ValidateService.max(30)]
    },
    profession: {
      prop: 'profession',
      label: '专业名称',
      rule: [ValidateService.required, ValidateService.max(30)]
    }
  })

  private workExperienceFormFields: IFormFields = ValidateService.genRules({
    rangeDate: {
      prop: 'rangeDate',
      label: '日期',
      rule: [ValidateService.required({ type: 'array', trigger: 'change' })]
    },
    company: {
      prop: 'company',
      label: '公司名',
      rule: [ValidateService.required, ValidateService.max(30)]
    },
    position: {
      prop: 'position',
      label: '职位名',
      rule: [ValidateService.required, ValidateService.max(30)]
    },
    city: {
      prop: 'city',
      label: '公司地区',
      rule: [ValidateService.required({ type: 'number' })],
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
      rule: [ValidateService.required, ValidateService.max(60)]
    }
  })

  private honoraryCertificateFormFields: IFormFields = ValidateService.genRules({
    name: {
      prop: 'name',
      label: '证书名称',
      rule: [ValidateService.required, ValidateService.max(30)],
      width: 520
    },
    images: {
      prop: 'images',
      label: '证书图片',
      rule: [ValidateService.required({ type: 'array', trigger: 'change' })]
    }
  })
}
</script>
