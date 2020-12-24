<template>
  <TableRender :onLoad="handleLoad" :Service="Service" :inDialog="!!params">
    <TableText prop="method" label="模式" :width="100"></TableText>
    <TableText prop="path" label="地址" :width="200"></TableText>
    <TableText prop="ip" label="IP" :width="140"></TableText>
    <TableText prop="status" label="结果" :width="100"></TableText>
    <TableText prop="created_at" label="时间" :width="170"></TableText>
    <TableText prop="desc" label="描述"></TableText>
    <TableAction :buttons="[
      { name: '查看详情', onClick: handleOpenShow }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewUserPopoverApiLog extends Vue {
  @Prop()
  params!: { id: string }

  private Service = Service

  private handleLoad (params: any) {
    return Service.index({
      ...params,
      user_id: this.params.id
    })
  }

  private handleOpenShow (row: { id: string }) {
    return DialogService.show(require('./show.vue').default, { id: row.id })
  }
}
</script>
