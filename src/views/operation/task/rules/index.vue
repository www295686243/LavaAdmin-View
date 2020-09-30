<template>
  <TableRender :Service="Service">
    <TableText prop="title" label="任务名" :width="160"></TableText>
    <TableText prop="get_number" label="领取次数" :width="100"></TableText>
    <TableAction :buttons="[
      { name: '编辑' },
      { name: '删除' }
    ]" :minWidth="260" />
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
