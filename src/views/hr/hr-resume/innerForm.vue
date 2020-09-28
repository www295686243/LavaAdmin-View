<template>
  <el-row :gutter="20">
    <el-col :span="10">
      <FormText v-model="form.title" :field="formFields.title"></FormText>
      <FormMultipleCascader v-model="form.industry" :field="formFields.industry" type="industry"></FormMultipleCascader>
      <FormTextarea v-model="form.description" :field="formFields.description"></FormTextarea>
      <FormSalary
        v-model="form.monthly_range"
        :minValue.sync="form.monthly_pay_min"
        :maxValue.sync="form.monthly_pay_max"
        :isNegotiable.sync="form.is_negotiate"
        :field="formFields.monthly_range">
      </FormSalary>
      <FormCascader v-model="form.city" :field="formFields.city" type="city"></FormCascader>
      <FormRadio v-model="form.is_other_user" :field="formFields.is_other_user" :fieldService="Service"></FormRadio>
      <FormRadio v-model="form.status" :field="formFields.status" :fieldService="Service"></FormRadio>
      <FormSwitch v-model="form.is_force_show_user_info" :field="formFields.is_force_show_user_info"></FormSwitch>
    </el-col>
    <el-col :span="10">
      <FormSelect v-model="form.education" :field="formFields.education" :fieldService="Service"></FormSelect>
      <FormSelect v-model="form.seniority" :field="formFields.seniority" :fieldService="Service"></FormSelect>
      <FormCheckbox v-model="form.treatment" :field="formFields.treatment" type="label-string" :fieldService="Service"></FormCheckbox>
      <FormText v-model="form.treatment_input" :field="formFields.treatment_input"></FormText>
      <FormDate v-model="form.end_time" :field="formFields.end_time" type="date"></FormDate>
      <FormText v-model="form.contacts" :field="formFields.contacts"></FormText>
      <FormText v-model="form.phone" :field="formFields.phone"></FormText>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import ConstService from '@/service/ConstService'
import FormSalary from '@/components/Form/FormSalary.vue'

@Component({
  components: {
    FormSalary
  }
})
export default class ViewHrResumeInnerForm extends Vue {
  @Prop()
  form!: any

  private Service = Service

  private formFields: IFormFields = ValidateService.genRules({
    title: {
      prop: 'title',
      label: '标题',
      rule: [ValidateService.required, ValidateService.max(42)]
    },
    industry: {
      prop: 'industry',
      label: '行业',
      rule: [ValidateService.required({ trigger: 'change', type: 'array' })]
    },
    education: {
      prop: 'education',
      label: '学历'
    },
    seniority: {
      prop: 'seniority',
      label: '工作年限'
    },
    treatment: {
      prop: 'treatment',
      label: '待遇情况'
    },
    treatment_input: {
      prop: 'treatment_input',
      label: '',
      rule: [ValidateService.max(6)]
    },
    monthly_range: {
      prop: 'monthly_range',
      label: '月薪范围',
      rule: [ValidateService.required]
    },
    end_time: {
      prop: 'end_time',
      label: '截止日期',
      rule: [ValidateService.required]
    },
    city: {
      prop: 'city',
      label: '期望城市',
      rule: [ValidateService.required]
    },
    description: {
      prop: 'description',
      label: '岗位描述',
      rule: [ValidateService.max(255)]
    },
    contacts: {
      prop: 'contacts',
      label: '联系人',
      rule: [ValidateService.required, ValidateService.fullname]
    },
    phone: {
      prop: 'phone',
      label: '联系电话',
      rule: [ValidateService.required, ValidateService.phone]
    },
    is_other_user: {
      prop: 'is_other_user',
      label: '代发',
      options: ConstService.getBoolOptions()
    },
    status: {
      prop: 'status',
      label: '状态'
    },
    is_force_show_user_info: {
      prop: 'is_force_show_user_info',
      label: '公开详情'
    }
  })
}
</script>
