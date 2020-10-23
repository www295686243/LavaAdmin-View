<template>
  <FormRender :form="form" :Service="Service">
    <FormSelect v-model="form.task_rule_name" :field="formFields.task_rule_name"></FormSelect>
    <FormSelect v-model="form.operator" :field="formFields.operator"></FormSelect>
    <FormCounter v-model="form.target_number" :field="formFields.target_number"></FormCounter>
    <FormInput v-model="form.task_interface" :field="formFields.task_interface"></FormInput>
    <FormGiveCoupon v-model="form.rewards" :col="4" v-if="isShowRewards"></FormGiveCoupon>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import TaskService from '../Service'
import RouterService from '@/service/RouterService'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'

@Component
export default class ViewOperationTaskForm extends Vue {
  private isShowRewards = Number(RouterService.query('task_type')) === TaskService.getOptionsValue('task_type', 3, '阶梯任务')
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    task_id: RouterService.query('task_id'),
    task_rule_name: '',
    operator: '',
    target_number: 1,
    task_interface: '',
    rewards: []
  }

  private formFields: IFormFields = ValidateService.genRules({
    task_rule_name: {
      prop: 'task_rule_name',
      label: '任务规则',
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    },
    operator: {
      prop: 'operator',
      label: '任务条件',
      options: [
        { id: '>', display_name: '大于' },
        { id: '>=', display_name: '大于等于' },
        { id: '=', display_name: '等于' },
        { id: '<', display_name: '小于' },
        { id: '<=', display_name: '小于等于' }
      ],
      rule: [ValidateService.required({ trigger: 'change' })]
    },
    target_number: {
      prop: 'target_number',
      label: '目标数量',
      rule: [ValidateService.required({ type: 'number' }), ValidateService.minNum(1)],
      min: 1
    },
    task_interface: {
      prop: 'task_interface',
      label: '任务接口',
      rule: [ValidateService.required, ValidateService.max(255)]
    }
  })
}
</script>
