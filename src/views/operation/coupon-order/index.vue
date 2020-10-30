<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="id" label="订单号" :width="180"></TableText>
    <TableText prop="user.nickname" label="购买人" :width="160"></TableText>
    <TableText prop="quantity" label="购买数量" :width="120"></TableText>
    <TableText prop="total_amount" label="总金额" :width="140" align="right"></TableText>
    <TableOptions prop="pay_status" label="支付状态" :width="140"></TableOptions>
    <TableText prop="paid_at" label="支付时间" :minWidth="180"></TableText>
    <TableText prop="created_at" label="下单时间" :minWidth="180"></TableText>
    <TableAction :buttons="[
      { name: '订单明细', onClick: handleOpenDetail }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewOperationCouponMarketIndex extends Vue {
  private Service = Service

  private searchFields: ISearchFields[] = [
    {
      name: 'user_id',
      display_name: '购买人ID',
      type: 'bigInt'
    }
  ]

  private handleOpenDetail (row: { id: string }) {
    DialogService.show(require('./sub/index.vue').default, { coupon_order_id: row.id })
  }
}
</script>
