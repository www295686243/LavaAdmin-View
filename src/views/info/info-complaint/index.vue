<template>
  <TableRender :Service="Service">
    <TableText prop="user.nickname" label="投诉人" :minWidth="140"></TableText>
    <TableOptions prop="info_complaintable_type" label="类型" :options="ConstService.getModelNames()" :width="100"></TableOptions>
    <TableText prop="info_complaintable.title" label="投诉标题" :minWidth="300"></TableText>
    <TableOptions prop="complaint_type" label="投诉类型" :minWidth="120"></TableOptions>
    <TableText prop="complaint_content" label="投诉内容" :minWidth="200"></TableText>
    <TableOptions prop="is_solve" label="是否解决" :minWidth="100" :options="ConstService.getBoolOptions()" :bool="true"></TableOptions>
    <TableText prop="created_at" label="投诉时间" :minWidth="160"></TableText>
    <TableText prop="handle_content" label="回复内容" :minWidth="300"></TableText>
    <TableAction :buttons="[
      { name: '编辑' }
    ]" :minWidth="160" />
  </TableRender>
</template>

<script lang="ts">
import ConstService from '@/service/ConstService'
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewInfoComplaintIndex extends Vue {
  private Service = Service
  private ConstService = ConstService
}
</script>
