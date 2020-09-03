<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="user.nickname" label="支付人" :width="160"></TableText>
    <TableText prop="user_orderable.title" label="订单信息" :width="220"></TableText>
    <TableText prop="total_amount" label="总金额" :width="100" align="right"></TableText>
    <TableText prop="user_coupon.display_name" label="优惠券" :width="100"></TableText>
    <TableText prop="user_coupon.amount" label="优惠券金额" :width="100" align="right"></TableText>
    <TableOptions prop="pay_status" label="支付状态" :width="100"></TableOptions>
    <TableText prop="paid_at" label="支付时间" :width="160"></TableText>
    <TableAction :buttons="[
      { name: '查看详情' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'
import { ISearchFields } from '@/interface/common'

@Component
export default class ViewUserMemberNotifyIndex extends Vue {
  private Service = Service
  private RouterService = RouterService
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'user_id',
      display_name: '支付人ID',
      type: 'string'
    },
    {
      name: 'user_coupon_id',
      display_name: '优惠券id',
      type: 'string'
    }
  ]
}
</script>
