<template>
  <FormGroupPopup
    title="奖励"
    :onLoad="handleLoad"
    v-model="innerValue"
    :initForm="rewardsForm"
    :col="col"
    :fields="rewardsFormFields">
    <template v-slot="{ v }">
      <FormSelect v-model="v.coupon_template_id" :field="rewardsFormFields.coupon_template_id"></FormSelect>
      <FormSelect v-model="v.amount" :field="rewardsFormFields.amount"></FormSelect>
      <FormCounter v-model="v.give_number" :field="rewardsFormFields.give_number"></FormCounter>
      <FormCounter v-model="v.expiry_day" :field="rewardsFormFields.expiry_day"></FormCounter>
    </template>
  </FormGroupPopup>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import axios from '@/plugins/axios'

interface RewardItem {
  reward_name: string;
  coupon_template_id: string;
  amount: number;
  give_number: number;
  expiry_day: number;
}

@Component
export default class FormGiveCoupon extends Vue {
  @Prop()
  value!: RewardItem[]

  @Prop({ default: 3 })
  col!: number

  private innerValue: RewardItem[] = this.value

  private rewardsForm = {
    reward_name: 'coupon',
    coupon_template_id: '',
    amount: '',
    give_number: 1,
    expiry_day: 30
  }

  private handleLoad () {
    return axios.get('coupon_template/getAll')
      .then((res) => {
        this.rewardsFormFields.coupon_template_id.options = res.data
      })
  }

  private rewardsFormFields: IFormFields = ValidateService.genRules({
    coupon_template_id: {
      prop: 'coupon_template_id',
      label: '优惠券模板',
      options: [],
      props: {
        value: 'id'
      },
      rule: [ValidateService.required({ trigger: 'change', type: 'number' })]
    },
    amount: {
      prop: 'amount',
      label: '金额',
      options: [
        { display_name: '3元', value: 3 },
        { display_name: '5元', value: 5 }
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
