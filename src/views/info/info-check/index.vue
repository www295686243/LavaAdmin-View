<template>
  <TableRender :Service="Service">
    <TableText prop="user.nickname" label="发布者" :width="200"></TableText>
    <TableOptions prop="info_checkable_type" label="类型" :options="ConstService.getModelNames()" :width="100"></TableOptions>
    <TableText prop="info_title" label="标题" :width="400"></TableText>
    <TableOptions prop="status" label="状态" :width="160"></TableOptions>
    <TableText prop="created_at" label="发布时间" :width="160"></TableText>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConstService from '@/service/ConstService'
import Service from './Service'

@Component
export default class ViewInfoCheckIndex extends Vue {
  private Service = new Service()
  private ConstService = ConstService
}
</script>
