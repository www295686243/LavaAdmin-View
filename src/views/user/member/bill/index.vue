<template>
  <TableRender :onLoad="handleLoad" :Service="Service" :inDialog="!!params">
    <TableText prop="total_amount" label="总金额" :width="100" align="right"></TableText>
    <TableText prop="cash_amount" label="现金" :width="100" align="right"></TableText>
    <TableText prop="balance_amount" label="余额" :width="100" align="right"></TableText>
    <TableText prop="coupon_amount" label="优惠券金额" :width="100" align="right"></TableText>
    <TableText prop="created_at" label="日期" :width="160"></TableText>
    <TableText prop="desc" label="说明"></TableText>
  </TableRender>
</template>

<script lang="ts">
import SqlService from '@/service/SqlService'
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewUserMemberBillIndex extends Vue {
  @Prop()
  params!: { id: string }

  private Service = Service

  private handleLoad (params: any) {
    let _search
    if (this.params && this.params.id) {
      _search = (new SqlService())
        .where({ field: 'user_id', operator: '=', value: this.params.id })
        .get()
    }
    return Service.index({
      ...params,
      _search
    })
  }
}
</script>
