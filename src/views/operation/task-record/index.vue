<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="title" label="任务名" :width="160"></TableText>
    <TableText prop="user.nickname" label="领取人" :width="160"></TableText>
    <TableText prop="task_recordable.title" label="任务信息" :minWidth="220"></TableText>
    <TableOptions prop="task_recordable_type" label="任务类型" :options="ConstService.getModelNames()" :width="100"></TableOptions>
    <TableText prop="created_at" label="领取时间" :width="180"></TableText>
    <TableText prop="task_complete_time" label="完成时间" :width="180"></TableText>
    <TableOptions prop="is_complete" label="是否完成" :minWidth="100" :bool="true"></TableOptions>
    <TableAction :buttons="[
      { name: '任务详情', onClick: handleTaskRecord }
    ]" :minWidth="260" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'
import { ISearchFields } from '@/interface/common'
import cache from '@/plugins/cache'

@Component
export default class ViewOperationTaskRecordIndex extends Vue {
  private Service = Service
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'task_id',
      display_name: '任务类型',
      type: 'intOptions',
      options: cache.config.get('task') || [],
      props: {
        label: 'title',
        value: 'id'
      }
    },
    {
      name: 'is_complete',
      display_name: '是否完成',
      type: 'int'
    },
    {
      name: 'task_complete_time',
      display_name: '完成时间',
      type: 'datetime'
    }
  ]

  private handleTaskRecord (row: { id: string; task_recordable_id: string; task_recordable_type: string }) {
    DialogService.show(require('./task-rule-record/index.vue').default, { task_recordable_id: row.task_recordable_id, task_recordable_type: row.task_recordable_type, task_record_id: row.id })
  }
}
</script>
