<template>
  <FormRender :form="form" :Service="Service">
    <FormInput v-model="form.title" :field="formFields.title"></FormInput>
    <FormSelect v-model="form.operator" :field="formFields.operator"></FormSelect>
    <FormCounter v-model="form.target_number" :field="formFields.target_number"></FormCounter>
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
    task_id: RouterService.query('task_id'),
    title: '',
    operator: '',
    target_number: 1,
    rewards: []
  }

  private formFields: IFormFields = ValidateService.genRules({
    title: {
      prop: 'title',
      label: '子任务名',
      rule: [ValidateService.max(60)]
    },
    operator: {
      prop: 'operator',
      label: '任务条件',
      options: [
        { value: '>', display_name: '大于' },
        { value: '>=', display_name: '大于等于' },
        { value: '=', display_name: '等于' },
        { value: '<', display_name: '小于' },
        { value: '<=', display_name: '小于等于' }
      ],
      rule: [ValidateService.required({ trigger: 'change' })]
    },
    target_number: {
      prop: 'target_number',
      label: '目标数量',
      rule: [ValidateService.required({ type: 'number' }), ValidateService.minNum(1)],
      min: 1
    }
  })
}
</script>
