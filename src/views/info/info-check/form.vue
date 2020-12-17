<template>
  <FormRender :form="form" :Service="Service">
    <el-form :model="form.contents" label-width="100px">
      <HrJobForm :form="form.contents" v-if="form.info_checkable_type === 'App\\Models\\Info\\Hr\\HrJob'"></HrJobForm>
      <HrResumeForm :form="form.contents" v-else-if="form.info_checkable_type === 'App\\Models\\Info\\Hr\\HrResume'"></HrResumeForm>
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
import RouterService from '@/service/RouterService'

@Component({
  components: {
    HrJobForm,
    HrResumeForm
  }
})
export default class ViewInfoCheckForm extends Vue {
  private Service = new Service()
  private form = {
    id: RouterService.query('id'),
    info_checkable_type: '',
    contents: {},
    status: this.Service.getStatusValue(2, '已通过'),
    refuse_reason: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    status: {
      prop: 'status',
      label: '状态'
    },
    refuse_reason: {
      prop: 'refuse_reason',
      label: '拒绝原因',
      rule: [ValidateService.max(255), () => {
        return {
          refuse_reason: {
            required: this.form.status === this.Service.getStatusValue(3, '已拒绝'),
            validator: (rule: any, value: string, callback: Function) => {
              if (this.form.status === this.Service.getStatusValue(3, '已拒绝') && !value) {
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
</script>
