<template>
  <TableRender :Service="Service" :onLoad="handleLoad">
    <TableText prop="sell_user.nickname" label="出售人" :width="160"></TableText>
    <TableText prop="buy_user.nickname" label="购买人" :width="160"></TableText>
    <TableText prop="user_coupon.display_name" label="优惠券" :width="140"></TableText>
    <TableText prop="user_coupon.amount" label="票价" :minWidth="120" align="right"></TableText>
    <TableText prop="amount" label="支付金额" :minWidth="120" align="right"></TableText>
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewOperationCouponMarketIndex extends Vue {
  @Prop()
  params!: { coupon_order_id: string }

  private Service = Service

  private handleLoad (params: any) {
    return Service.index({
      ...params,
      coupon_order_id: this.params.coupon_order_id
    })
  }
}
</script>
