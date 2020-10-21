<template>
  <TableRender :Service="Service" :searchFields="searchFields">
    <TableText prop="task.title" label="任务名" :width="160"></TableText>
    <TableText prop="user.nickname" label="领取人" :width="160"></TableText>
    <TableText prop="task_recordable.title" label="任务信息" :minWidth="220"></TableText>
    <TableOptions prop="task_recordable_type" label="任务类型" :options="ConstService.getModelNames()" :width="100"></TableOptions>
    <TableOptions prop="task_rule_name" label="任务规则" :width="140"></TableOptions>
    <TableText prop="target_number" label="目标数量" :width="120"></TableText>
    <TableText prop="complete_number" label="完成数量" :width="120"></TableText>
    <TableText prop="created_at" label="领取时间" :width="180"></TableText>
    <TableText prop="task_complete_time" label="完成时间" :width="180"></TableText>
    <TableOptions prop="is_complete" label="是否完成" :minWidth="100" :options="ConstService.getBoolOptions()" :bool="true"></TableOptions>
    <TableAction :buttons="[
      { name: '明细', onClick: handleViews }
    ]" :minWidth="260" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'
import { ISearchFields } from '@/interface/common'

@Component
export default class ViewOperationTaskIndex extends Vue {
  private Service = Service
  private ConstService = ConstService
  private searchFields: ISearchFields[] = [
    {
      name: 'task_rule_name',
      display_name: '任务规则',
      type: 'intOptions',
      options: Service.getOptions('task_rule_name')
    }
  ]

  private handleViews (row: { task_recordable_type: string; task_recordable_id: string }) {
    DialogService.show(require('@/views/components/InfoViews.vue').default, { id: row.task_recordable_id, _model: row.task_recordable_type })
  }
}
</script>
