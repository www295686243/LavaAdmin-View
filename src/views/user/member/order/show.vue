<template>
  <FormRender :Service="Service" :form="info">
    <FormInput v-model="info.user.nickname" :field="formFields.nickname"></FormInput>
    <FormInput v-model="info.user_orderable.title" :field="formFields.title"></FormInput>
    <FormInput v-model="info.total_amount" :field="formFields.total_amount"></FormInput>
    <FormInput v-model="info.cash_amount" :field="formFields.cash_amount"></FormInput>
    <FormInput v-model="info.balance_amount" :field="formFields.balance_amount"></FormInput>
    <FormInput v-model="info.coupon_amount" :field="formFields.coupon_amount"></FormInput>
    <FormInput v-model="info.user_coupon.display_name" :field="formFields.display_name"></FormInput>
    <FormSelect v-model="info.pay_status" :field="formFields.pay_status"></FormSelect>
    <FormInput v-model="info.paid_at" :field="formFields.paid_at"></FormInput>
    <div slot="footer"></div>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'

@Component
export default class ViewUserMemberOrderShow extends Vue {
  @Prop()
  params!: { id: string }

  private Service = Service
  private info = {
    id: this.params.id,
    user: {
      nickname: ''
    },
    user_orderable: {
      title: ''
    },
    total_amount: 0,
    cash_amount: 0,
    balance_amount: 0,
    coupon_amount: 0,
    user_coupon: {
      display_name: ''
    },
    pay_status: '',
    paid_at: ''
  }

  private formFields: IFormFields = {
    nickname: {
      prop: 'nickname',
      label: '支付人',
      readonly: true
    },
    title: {
      prop: 'title',
      label: '信息',
      readonly: true
    },
    total_amount: {
      prop: 'total_amount',
      label: '总金额',
      readonly: true
    },
    cash_amount: {
      prop: 'cash_amount',
      label: '现金',
      readonly: true
    },
    balance_amount: {
      prop: 'balance_amount',
      label: '余额',
      readonly: true
    },
    coupon_amount: {
      prop: 'coupon_amount',
      label: '优惠券金额',
      readonly: true
    },
    display_name: {
      prop: 'display_name',
      label: '优惠券',
      readonly: true
    },
    pay_status: {
      prop: 'pay_status',
      label: '支付状态',
      disabled: true
    },
    paid_at: {
      prop: 'paid_at',
      label: '支付时间',
      readonly: true
    }
  }
}
</script>
