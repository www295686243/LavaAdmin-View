<template>
  <TableRender :Service="Service">
    <TableText prop="display_name" label="名称" :width="200"></TableText>
    <TableText prop="value" label="值" :width="120"></TableText>
    <TableText prop="name" label="标识" :width="120"></TableText>
    <TableText prop="sort" label="顺序" :width="160"></TableText>
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
export default class ViewSystemConfigIndex extends Vue {
  private Service = Service
}
</script>
