<template>
  <TableRender :Service="Service">
    <TableText prop="title" label="任务名" :width="160"></TableText>
    <TableText prop="desc" label="任务描述" :width="300"></TableText>
    <TableAction :buttons="[
      { name: '规则与奖励', onClick: handlePushRule },
      { name: '编辑' }
    ]" :minWidth="260" />
  </TableRender>
</template>

<script lang="ts">
import RouterService from '@/service/RouterService'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewOperationTaskIndex extends Vue {
  private Service = Service

  private handlePushRule (row: { id: string; task_type: number }) {
    RouterService.push('rules', { task_id: row.id, task_type: row.task_type })
  }
}
</script>
