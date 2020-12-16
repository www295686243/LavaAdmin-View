<template>
  <TableRender :Service="Service">
    <TableText prop="send_user.nickname" label="投递人" :minWidth="140"></TableText>
    <TableText prop="send_info.title" label="投递信息" :minWidth="300"></TableText>
    <TableText prop="receive_user.nickname" label="接收人" :minWidth="140"></TableText>
    <TableText prop="receive_info.title" label="接收信息" :minWidth="300"></TableText>
    <TableText prop="type" label="投递类型" :minWidth="120"></TableText>
    <TableText prop="created_at" label="投递时间" :minWidth="160"></TableText>
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewInfoDeliveryIndex extends Vue {
  private Service = new Service()
}
</script>
