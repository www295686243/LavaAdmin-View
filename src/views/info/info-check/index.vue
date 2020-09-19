<template>
  <TableRender :Service="Service">
    <TableText prop="user.nickname" label="发布者" :width="200"></TableText>
    <TableText prop="info_title" label="标题" :width="400"></TableText>
    <TableOptions prop="status" label="状态" :width="160"></TableOptions>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewInfoCheckIndex extends Vue {
  private Service = Service
}
</script>
