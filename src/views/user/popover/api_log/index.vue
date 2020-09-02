<template>
  <TableRender :onLoad="handleLoad" :Service="Service">
    <TableText prop="method" label="模式" :width="100"></TableText>
    <TableText prop="path" label="地址" :width="200"></TableText>
    <TableText prop="ip" label="IP" :width="110"></TableText>
    <TableText prop="status" label="结果" :width="100"></TableText>
    <TableText prop="created_at" label="时间" :width="170"></TableText>
    <TableText prop="desc" label="描述"></TableText>
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewUserPopoverApiLog extends Vue {
  @Prop()
  id!: string

  private Service = Service

  private handleLoad (params: any) {
    return Service.index({
      ...params,
      user_id: this.id
    })
  }
}
</script>
