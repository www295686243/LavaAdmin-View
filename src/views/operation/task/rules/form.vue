<template>
  <FormRender :form="form" :Service="Service">
    <FormInput v-model="form.title" :field="formFields.title"></FormInput>
    <FormCounter v-model="form.get_number" :field="formFields.get_number"></FormCounter>
    <FormGroupPopup
      title="任务规则"
      v-model="form.rules"
      :initForm="rulesForm"
      :fields="rulesFormFields">
      <template v-slot="{ v }">
        <FormSelect v-model="v.rule_name" :field="rulesFormFields.rule_name"></FormSelect>
        <FormSelect v-model="v.operator" :field="rulesFormFields.operator"></FormSelect>
        <FormCounter v-model="v.target_number" :field="rulesFormFields.target_number"></FormCounter>
      </template>
    </FormGroupPopup>
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
    get_number: 1,
    rules: [],
    rewards: []
  }

  private rulesForm = {
    rule_name: '',
    operator: '',
    target_number: 10
  }

  private rewardsForm = {
    reward_name: '',
    coupon_template_id: 0,
    amount: '',
    give_number: 1,
    expiry_day: 30
  }

  private formFields: IFormFields = ValidateService.genRules({
    title: {
      prop: 'title',
      label: '任务名',
      rule: [ValidateService.required, ValidateService.max(60)]
    },
    get_number: {
      prop: 'get_number',
      label: '领取次数',
      rule: [ValidateService.minNum(0)],
      min: 0
    }
  })

  private rulesFormFields: IFormFields = ValidateService.genRules({
    rule_name: {
      prop: 'rule_name',
      label: '任务类型',
      options: [
        { id: 'register-view', display_name: '新用户查看' },
        { id: 'view', display_name: '用户查看' }
      ],
      rule: [ValidateService.required({ trigger: 'change' })]
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
      rule: [ValidateService.required({ type: 'number' })]
    }
  })

  private rewardsFormFields: IFormFields = ValidateService.genRules({
    reward_name: {
      prop: 'reward_name',
      label: '奖励类型'
    },
    coupon_template_id: {
      prop: 'coupon_template_id',
      label: '优惠券模板'
    },
    amount: {
      prop: 'amount',
      label: '金额'
    },
    give_number: {
      prop: 'give_number',
      label: '奖励数量'
    },
    expiry_day: {
      prop: 'expiry_day',
      label: '到期天数'
    }
  })
}
</script>
