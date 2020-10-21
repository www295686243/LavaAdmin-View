<template>
  <FormRender :onLoad="handleLoad" :form="form" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
    <FormGroupPopup
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
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import axios from '@/plugins/axios'

@Component
export default class TableAction extends Vue {
  private form = {
    rewards: []
  }

  private rewardsForm = {
    reward_name: 'coupon',
    coupon_template_id: '',
    amount: 3,
    give_number: 1,
    expiry_day: 30
  }

  private rewardsFormFields: IFormFields = ValidateService.genRules({
    coupon_template_id: {
      prop: 'coupon_template_id',
      label: '优惠券',
      options: [],
      rule: [ValidateService.required({ type: 'number' })]
    },
    amount: {
      prop: 'amount',
      label: '金额',
      options: [
        { display_name: '3元', id: 3 },
        { display_name: '5元', id: 5 }
      ],
      rule: [ValidateService.required({ type: 'number' })]
    },
    give_number: {
      prop: 'give_number',
      label: '赠送数量',
      rule: [ValidateService.required({ type: 'number' })]
    },
    expiry_day: {
      prop: 'expiry_day',
      label: '过期天数',
      rule: [ValidateService.required({ type: 'number' })]
    }
  })

  private handleLoad () {
    return axios.get('coupon_template/getAll')
      .then((res) => {
        this.rewardsFormFields.coupon_template_id.options = res.data
      })
  }

  private handleSubmit () {
    return Promise.resolve()
      .then(() => {
        this.$emit('done', this.form.rewards)
      })
  }
}
</script>
