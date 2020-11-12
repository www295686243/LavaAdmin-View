<template>
  <TableRender :Service="Service">
    <TableOptions prop="task_rule_name" label="任务规则" :width="160"></TableOptions>
    <TableText prop="title" label="子任务名" :width="120"></TableText>
    <TableText prop="operator" label="条件" :width="100"></TableText>
    <TableText prop="target_number" label="目标数量" :width="100"></TableText>
    <TableText prop="task_interface" label="任务接口" :minWidth="300"></TableText>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="120" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewOperationTaskRuleIndex extends Vue {
  private Service = Service
}
</script>
