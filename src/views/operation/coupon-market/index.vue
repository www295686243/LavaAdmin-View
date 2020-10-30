<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="sell_user.nickname" label="出售人" :width="160"></TableText>
    <TableText prop="buy_user.nickname" label="购买人" :width="160"></TableText>
    <TableText prop="user_coupon.display_name" label="优惠券" :width="160"></TableText>
    <TableText prop="amount" label="出售金额" :width="120" align="right"></TableText>
    <TableOptions prop="status" label="状态" :width="160"></TableOptions>
    <TableText prop="created_at" label="出售时间" :minWidth="180"></TableText>
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'

@Component
export default class ViewOperationCouponMarketIndex extends Vue {
  private Service = Service

  private searchFields: ISearchFields[] = [
    {
      name: 'sell_user_id',
      display_name: '出售人ID',
      type: 'bigInt'
    },
    {
      name: 'buy_user_id',
      display_name: '购买人ID',
      type: 'bigInt'
    },
    {
      name: 'status',
      display_name: '状态',
      type: 'intOptions',
      options: Service.getOptions('status')
    }
  ]
}
</script>
