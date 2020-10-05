<template>
  <FormRender :form="form" :Service="Service" :onLoad="handleLoad">
    <FormInput v-model="form.title" :field="formFields.title"></FormInput>
    <FormCounter v-model="form.get_number" :field="formFields.get_number"></FormCounter>
    <FormMultipleGroupPopup
      title="任务规则"
      v-model="form.rules"
      :initForm="rulesForm"
      :fields="rulesFormFields">
      <template v-slot="{ v }">
        <FormSelect v-model="v.rule_name" :field="rulesFormFields.rule_name"></FormSelect>
        <FormSelect v-model="v.operator" :field="rulesFormFields.operator"></FormSelect>
        <FormCounter v-model="v.target_number" :field="rulesFormFields.target_number"></FormCounter>
      </template>
    </FormMultipleGroupPopup>
    <FormGroupPopup
      :style="{ marginTop: '20px' }"
      title="任务奖励"
      v-model="form.rewards"
      :initForm="rewardsForm"
      :fields="rewardsFormFields">
      <template v-slot="{ v }">
        <FormSelect v-model="v.coupon_template_id" :field="rewardsFormFields.coupon_template_id"></FormSelect>
        <FormSelect v-model="v.amount" :field="rewardsFormFields.amount"></FormSelect>
        <FormCounter v-model="v.give_number" :field="rewardsFormFields.give_number"></FormCounter>
        <FormCounter v-model="v.expiry_day" :field="rewardsFormFields.expiry_day"></FormCounter>
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
import axios from '@/plugins/axios'

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
  } as {
    [key: string]: any;
  }

  private rulesForm = {
    rule_name: '',
    operator: '',
    target_number: 10
  }

  private rewardsForm = {
    reward_name: 'coupon',
    coupon_template_id: 0,
    amount: '',
    give_number: 1,
    expiry_day: 30
  }

  private fetchCouponList () {
    return axios.get('coupon_template/getAll')
      .then((res) => {
        this.rewardsFormFields.coupon_template_id.options = res.data
      })
  }

  private handleLoad () {
    return this.fetchCouponList()
      .then(() => {
        if (this.form.id) {
          return Service.show(this.form.id)
            .then((res) => {
              Object.keys(this.form).forEach((key: string) => {
                this.form[key] = res.data[key] || this.form[key]
              })
            })
        }
      })
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
    coupon_template_id: {
      prop: 'coupon_template_id',
      label: '优惠券模板',
      options: [],
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    },
    amount: {
      prop: 'amount',
      label: '金额',
      options: [
        { display_name: '3元', id: 3 },
        { display_name: '5元', id: 5 }
      ],
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    },
    give_number: {
      prop: 'give_number',
      label: '奖励数量',
      min: 1,
      rule: [ValidateService.required({ trigger: 'change', type: 'number' }), ValidateService.minNum(1)]
    },
    expiry_day: {
      prop: 'expiry_day',
      label: '到期天数',
      min: 1,
      rule: [ValidateService.required({ trigger: 'change', type: 'number' }), ValidateService.minNum(1)]
    }
  })
}
</script>
