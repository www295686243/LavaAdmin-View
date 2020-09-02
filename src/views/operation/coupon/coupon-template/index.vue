<template>
  <TableRender :Service="Service">
    <TableText prop="display_name" label="券名" :width="160"></TableText>
    <TableText prop="desc" label="描述" :width="300"></TableText>
    <TableOptions prop="is_trade" label="是否可交易" :width="100" :options="ConstService.getBoolOptions()"></TableOptions>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import ConstService from '@/service/ConstService'

@Component
export default class ViewOperationCouponTemplateIndex extends Vue {
  private Service = Service
  private ConstService = ConstService
}
</script>
