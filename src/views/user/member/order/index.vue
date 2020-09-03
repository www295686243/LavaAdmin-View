<template>
  <TableRender :onLoad="handleLoad" :Service="Service" :searchFields="searchFields">
    <TableText prop="user.nickname" label="支付人" :width="160"></TableText>
    <TableText prop="user_orderable.title" label="订单信息" :width="220"></TableText>
    <TableText prop="total_amount" label="总金额" :width="100" align="right"></TableText>
    <TableText prop="user_coupon.display_name" label="优惠券" :width="100"></TableText>
    <TableText prop="coupon_amount" label="优惠券金额" :width="100" align="right"></TableText>
    <TableOptions prop="pay_status" label="支付状态" :width="100"></TableOptions>
    <TableText prop="paid_at" label="支付时间" :width="160"></TableText>
    <TableAction :buttons="[
      { name: '查看详情', onClick: handleOpenShow }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'
import { ISearchFields } from '@/interface/common'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewUserMemberNotifyIndex extends Vue {
  @Prop()
  id!: string

  private Service = Service
  private RouterService = RouterService
  private ConstService = ConstService

  private searchFields: ISearchFields[] | null = [
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

  private handleLoad (params: any) {
    let _search
    if (this.id) {
      _search = [{
        field: 'user_id',
        where: '等于',
        value: this.id,
        type: 'string'
      }]
    }
    return Service.index({
      ...params,
      _search
    })
  }

  private handleOpenShow (row: { id: string }) {
    return DialogService.show(require('./show.vue').default, { id: row.id })
  }

  created () {
    if (this.id) {
      this.searchFields = null
    }
  }
}
</script>
