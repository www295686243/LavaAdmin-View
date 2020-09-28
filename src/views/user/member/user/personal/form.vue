<template>
  <FormRender :form="form" :Service="Service">
    <el-row :gutter="20">
      <el-col :span="12">
        <FormImage v-model="form.avatar" :field="formFields.avatar"></FormImage>
        <FormText v-model="form.name" :field="formFields.name"></FormText>
        <FormText v-model="form.id_card" :field="formFields.id_card"></FormText>
        <FormText v-model="form.phone" :field="formFields.phone"></FormText>
        <FormText v-model="form.email" :field="formFields.email"></FormText>
        <FormCascader v-model="form.city" :field="formFields.city"></FormCascader>
        <FormText v-model="form.address" :field="formFields.address"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="form.company" :field="formFields.company"></FormText>
        <FormMultipleCascader v-model="form.industry" :field="formFields.industry" type="industry"></FormMultipleCascader>
        <FormText v-model="form.position" :field="formFields.position"></FormText>
        <FormSelect v-model="form.position_attr" :field="formFields.position_attr"></FormSelect>
        <FormSelect v-model="form.seniority" :field="formFields.seniority"></FormSelect>
        <FormCheckbox v-model="form.tags" :field="formFields.tags" type="label-string"></FormCheckbox>
        <FormTextarea v-model="form.intro" :field="formFields.intro"></FormTextarea>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <FormGroupRender v-model="form.education_experience" title="教育经历" :initData="education_experience_form">
          <template v-slot="{ v }">
            <FormRangeDate
              v-model="v.rangeDate"
              :minValue.sync="v.minDate"
              :maxValue.sync="v.maxDate"
              :field="educationExperienceFormFields.rangeDate" />
            <FormText v-model="v.school" :field="educationExperienceFormFields.school"></FormText>
            <FormText v-model="v.profession" :field="educationExperienceFormFields.profession"></FormText>
          </template>
        </FormGroupRender>
      </el-col>
      <el-col :span="8">
        <FormGroupRender v-model="form.work_experience" title="工作经历" :initData="work_experience_form">
          <template v-slot="{ v }">
            <FormRangeDate
              v-model="v.rangeDate"
              :minValue.sync="v.minDate"
              :maxValue.sync="v.maxDate"
              :field="workExperienceFormFields.rangeDate" />
            <FormText v-model="v.company" :field="workExperienceFormFields.company"></FormText>
            <FormText v-model="v.position" :field="workExperienceFormFields.position"></FormText>
            <FormCascader v-model="v.city" :field="workExperienceFormFields.city"></FormCascader>
            <FormText v-model="v.address" :field="workExperienceFormFields.address"></FormText>
          </template>
        </FormGroupRender>
      </el-col>
      <el-col :span="8">
        <FormGroupRender v-model="form.honorary_certificate" title="荣誉证书" :initData="honorary_certificate_form">
          <template v-slot="{ v }">
            <FormText v-model="v.name" :field="honoraryCertificateFormFields.name"></FormText>
            <FormImages v-model="v.images" :field="honoraryCertificateFormFields.images"></FormImages>
          </template>
        </FormGroupRender>
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
    avatar: '',
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
    tags: '',
    education_experience: [],
    work_experience: [],
    honorary_certificate: [],
    industry: []
  }

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
    name: {
      prop: 'name',
      label: '姓名',
      rule: [ValidateService.fullname, ValidateService.optional]
    },
    avatar: {
      prop: 'avatar',
      label: '头像'
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
    tags: {
      prop: 'tags',
      label: '自我评价'
    },
    work_experience: {
      prop: 'work_experience',
      label: '工作经历'
    },
    honorary_certificate: {
      prop: 'honorary_certificate',
      label: '荣誉证书'
    },
    industry: {
      prop: 'industry',
      label: '行业'
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
