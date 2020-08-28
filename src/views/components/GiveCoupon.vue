<template>
  <FormRender :onLoad="handleLoad" :data="form" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
    <FormSelect v-model="form.coupon_template_id" :field="formFields.coupon_template_id"></FormSelect>
    <FormSelect v-model="form.amount" :field="formFields.amount"></FormSelect>
    <FormCounter v-model="form.give_number" :field="formFields.give_number"></FormCounter>
    <FormCounter v-model="form.expiry_day" :field="formFields.expiry_day"></FormCounter>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import axios from '@/plugins/axios'

@Component
export default class TableAction extends Vue {
  @Prop()
  id!: string

  private form = {
    user_id: this.id,
    coupon_template_id: '',
    amount: 3,
    give_number: 1,
    expiry_day: 30
  }

  private formFields: IFormFields = ValidateService.genRules({
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
        this.formFields.coupon_template_id.options = res.data
      })
  }

  private handleSubmit () {
    return axios.post('user_coupon', this.form)
      .then((res) => {
        this.$emit('done')
        return res
      })
  }
}
</script>
