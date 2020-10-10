<template>
  <DataRender :onLoad="fetchCouponList" :style="{ margin: '20px 0' }">
    <FormGroupPopup
      :title="title"
      v-model="innerValue"
      :initForm="rewardsForm"
      :col="1"
      :fields="rewardsFormFields">
      <template v-slot="{ v }">
        <FormSelect v-model="v.coupon_template_id" :field="rewardsFormFields.coupon_template_id"></FormSelect>
        <FormSelect v-model="v.amount" :field="rewardsFormFields.amount"></FormSelect>
        <FormCounter v-model="v.give_number" :field="rewardsFormFields.give_number"></FormCounter>
        <FormCounter v-model="v.expiry_day" :field="rewardsFormFields.expiry_day"></FormCounter>
      </template>
    </FormGroupPopup>
  </DataRender>
</template>

<script lang="ts">
import { IFormFields } from '@/interface/common'
import axios from '@/plugins/axios'
import ValidateService from '@/service/ValidateService'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TaskRewards extends Vue {
  @Prop({ default: '任务奖励' })
  title!: string

  @Prop()
  value!: any[]

  private innerValue = this.value

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
