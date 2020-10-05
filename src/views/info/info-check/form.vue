<template>
  <FormRender :form="form" :Service="Service">
    <el-form :model="form.contents" label-width="100px">
      <HrJobForm :form="form.contents" v-if="form.info_checkable_type === 'App\\Models\\Info\\Hr\\HrJob'"></HrJobForm>
      <HrResumeForm :form="form.contents" v-else-if="form.info_checkable_type === 'App\\Models\\Info\\Hr\\HrResume'"></HrResumeForm>
      <PersonalDetailForm :form="form.contents" v-else-if="form.info_checkable_type === 'App\\Models\\User\\UserPersonal'"></PersonalDetailForm>
    </el-form>
    <el-divider>信息审核</el-divider>
    <FormRadio v-model="form.status" :field="formFields.status"></FormRadio>
    <FormInput v-model="form.refuse_reason" :field="formFields.refuse_reason"></FormInput>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import HrJobForm from '@/views/hr/hr-job/innerForm.vue'
import HrResumeForm from '@/views/hr/hr-resume/innerForm.vue'
import PersonalDetailForm from '@/views/user/member/user/personal/innerDetailForm.vue'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'

@Component({
  components: {
    HrJobForm,
    HrResumeForm,
    PersonalDetailForm
  }
})
export default class ViewInfoCheckForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    info_checkable_type: '',
    contents: {},
    status: ConstService.getOptionsValue(48, '已审核'),
    refuse_reason: ''
  }

  private validateReason (rule: any, value: string, callback: Function) {
    if (this.form.status === ConstService.getOptionsValue(49, '未通过') && !value) {
      callback(new Error('请输入拒绝原因'))
    }
    callback()
  }

  private formFields: IFormFields = ValidateService.genRules({
    status: {
      prop: 'status',
      label: '状态'
    },
    refuse_reason: {
      prop: 'refuse_reason',
      label: '拒绝原因',
      rule: [ValidateService.validator(this.validateReason), ValidateService.max(255)]
    }
  })
}
</script>
