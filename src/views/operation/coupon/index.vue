<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="display_name" label="名称" :width="100"></TableText>
    <TableText prop="amount" label="金额" :width="80" align="right"></TableText>
    <TableText prop="user.nickname" label="归属者" :width="160"></TableText>
    <TableOptions prop="coupon_status" label="状态" :width="100"></TableOptions>
    <TableText prop="start_at" label="开始时间" :width="180"></TableText>
    <TableText prop="end_at" label="过期时间" :width="180"></TableText>
    <TableText prop="source" label="来源"></TableText>
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ISearchFields } from '@/interface/common'
import ConstService from '@/service/ConstService'

@Component
export default class ViewOperationCouponIndex extends Vue {
  private Service = Service
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'user_id',
      display_name: '用户ID',
      type: 'string'
    },
    {
      name: 'coupon_status',
      display_name: '优惠券状态',
      type: 'intOptions',
      options: Service.getOptions('coupon_status')
    },
    {
      name: 'start_at',
      display_name: '开始时间',
      type: 'datetime'
    },
    {
      name: 'end_at',
      display_name: '过期时间',
      type: 'datetime'
    }
  ]
}
</script>
