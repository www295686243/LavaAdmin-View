<template>
  <TableRender :Service="Service" :onLoad="handleLoad" :searchFields="searchFields">
    <TableText prop="user.nickname" label="领取人" :width="180"></TableText>
    <TableText prop="task_recordable.title" label="任务信息" :minWidth="240" v-if="isShowInfo"></TableText>
    <TableOptions prop="task_recordable_type" label="任务类型" :options="ConstService.getModelNames()" :width="100" v-if="isShowInfo"></TableOptions>
    <TableText prop="created_at" label="领取时间" :width="180"></TableText>
    <TableText prop="task_complete_time" label="完成时间" :width="180"></TableText>
    <TableOptions prop="is_complete" label="是否完成" :width="100" :bool="true"></TableOptions>
    <TableAction :buttons="[
      { name: '任务详情', onClick: handleTaskRecord }
    ]" :minWidth="140" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from '../Service'
import DialogService from '@/service/DialogService/Service'
import { ISearchFields } from '@/interface/common'

@Component
export default class ViewOperationTaskRecordTable extends Vue {
  @Prop({ default: false })
  isShowInfo!: boolean

  @Prop()
  taskId!: number

  private Service = Service
  private ConstService = ConstService

  private searchFields: ISearchFields[] = [
    {
      name: 'user_id',
      display_name: '领取人ID',
      type: 'bigInt'
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

  private handleLoad (params: { page: number }) {
    return Service.index({ ...params, task_id: this.taskId })
  }

  private handleTaskRecord (row: { id: string; task_recordable_id: string; task_recordable_type: string }) {
    DialogService.show(require('../task-rule-record/index.vue').default, { task_recordable_id: row.task_recordable_id, task_recordable_type: row.task_recordable_type, task_record_id: row.id })
  }
}
</script>
