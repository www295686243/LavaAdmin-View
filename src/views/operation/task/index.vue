<template>
  <TableRender :Service="Service">
    <TableText prop="title" label="任务名" :width="160"></TableText>
    <TableText prop="desc" label="任务描述" :width="360"></TableText>
    <TableOptions prop="task_mode" label="任务模式" :width="120"></TableOptions>
    <TableOptions prop="task_type" label="任务类型" :width="120"></TableOptions>
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

  private handlePushRule (row: { id: string; task_mode: number }) {
    RouterService.push('rules', { task_id: row.id })
  }
}
</script>
