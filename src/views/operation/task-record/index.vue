<template>
  <TableRender :Service="Service" :onLoad="handleLoad" :searchFields="searchFields">
    <TableText prop="task_rule.title" label="任务名" :width="160"></TableText>
    <TableText prop="user.nickname" label="领取人" :width="160"></TableText>
    <TableText prop="task_recordable.title" label="领取信息" :minWidth="220"></TableText>
    <TableOptions prop="task_recordable_type" label="信息类型" :options="ConstService.getModelNames()" :width="100"></TableOptions>
    <TableText prop="created_at" label="领取时间" :width="180"></TableText>
    <TableOptions prop="is_complete" label="是否完成" :minWidth="100" :options="ConstService.getBoolOptions()" :bool="true"></TableOptions>
    <TableAction :buttons="[
      { name: '明细', onClick: handleViews }
    ]" :minWidth="260" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import RouterService from '@/service/RouterService'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'
import { ISearchFields } from '@/interface/common'
import TaskService from '@/views/operation/task/Service'

@Component
export default class ViewOperationTaskIndex extends Vue {
  private Service = Service
  private ConstService = ConstService
  private searchFields: ISearchFields[] = [
    {
      name: 'task_id',
      display_name: '任务类型',
      type: 'intOptions',
      options: []
    }
  ]

  private handleLoad (params: any) {
    return TaskService.indexAll()
      .then((res) => {
        const item = this.searchFields.find((res) => res.name === 'task_id') as ISearchFields
        item.options = res.data.map((row: { id: string; title: string }) => {
          return {
            id: row.id,
            display_name: row.title
          }
        })
      })
      .then(() => Service.index(params))
  }

  private handlePushRule (row: { id: string }) {
    RouterService.push('rules', { task_id: row.id })
  }

  private handleViews (row: { task_recordable_type: string; task_recordable_id: string }) {
    DialogService.show(require('@/views/components/InfoViews.vue').default, { id: row.task_recordable_id, _model: row.task_recordable_type })
  }
}
</script>
