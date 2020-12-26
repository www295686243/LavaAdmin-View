<template>
  <TableRender :Service="Service" :onLoad="handleLoad" :inDialog="!!params">
    <TableText prop="title" label="任务名" :width="120"></TableText>
    <TableText prop="target_number" label="目标数量" :width="120"></TableText>
    <TableText prop="complete_number" label="完成数量" :width="120"></TableText>
    <TableText prop="task_complete_time" label="完成时间" :width="180"></TableText>
    <TableOptions prop="is_complete" label="是否完成" :minWidth="100" :bool="true"></TableOptions>
    <TableAction :buttons="[
      { name: '明细', onClick: handleViews, onShow: handleOnShow }
    ]" :minWidth="140" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import DialogService from '@/service/DialogService/Service'

@Component
export default class ViewOperationTaskRuleRecordIndex extends Vue {
  @Prop()
  params!: { task_recordable_id: string; task_recordable_type: string; task_record_id: string };

  private Service = Service

  private handleLoad (params: any) {
    return Service.index({
      ...params,
      task_record_id: this.params.task_record_id
    })
  }

  private handleViews ({ user_id = '' }) {
    DialogService.show(require('@/views/components/InfoViews.vue').default, { id: this.params.task_recordable_id, _model: this.params.task_recordable_type, share_user_id: user_id, is_new_user: 1 })
  }

  private handleOnShow ({ task_rule_name = 0 }) {
    return [Service.getOptionsValue('task_rule_name', 1, '分享-新用户访问'), Service.getOptionsValue('task_rule_name', 2, '分享-用户访问')].includes(task_rule_name)
  }
}
</script>
