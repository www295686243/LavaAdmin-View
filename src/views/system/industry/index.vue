<template>
  <TableRender :Service="Service">
    <TableText prop="display_name" label="名称" :width="400"></TableText>
    <TableAction :buttons="[
      { name: '编辑' },
      { name: '删除' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewSystemIndustryIndex extends Vue {
  private Service = Service
}
</script>
