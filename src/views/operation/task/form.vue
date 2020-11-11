<template>
  <FormRender :form="form" :Service="Service" :onSubmit="handleSubmit">
    <FormSelect v-model="form.task_mode" :field="formFields.task_mode"></FormSelect>
    <FormSelect v-model="form.task_type" :field="formFields.task_type"></FormSelect>
    <FormSelect v-model="form.task_name" :field="formFields.task_name"></FormSelect>
    <FormInput v-model="form.title" :field="formFields.title"></FormInput>
    <FormInput v-model="form.desc" :field="formFields.desc"></FormInput>
    <FormGiveCoupon v-model="form.rewards" :col="4"></FormGiveCoupon>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewOperationTaskForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    task_name: '',
    title: '',
    desc: '',
    task_mode: 1,
    task_type: 1,
    rewards: []
  }

  private formFields: IFormFields = ValidateService.genRules({
    task_name: {
      prop: 'task_name',
      label: '任务标识',
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    },
    title: {
      prop: 'title',
      label: '任务名',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    desc: {
      prop: 'desc',
      label: '任务描述',
      rule: [ValidateService.required, ValidateService.max(255)]
    },
    task_mode: {
      prop: 'task_mode',
      label: '任务模式',
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    },
    task_type: {
      prop: 'task_type',
      label: '任务类型',
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    }
  })

  private handleSubmit () {
    return Promise.resolve()
      .then(() => {
        if (this.form.id) {
          return Service.update(this.form)
        } else {
          return Service.store(this.form)
        }
      })
  }
}
</script>
