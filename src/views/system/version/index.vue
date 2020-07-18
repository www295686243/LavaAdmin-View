<template>
  <PageContainer>
    <TableRender :Service="Service">
      <TableText prop="id" label="ID" :width="120"></TableText>
      <TableText prop="name" label="标识" :width="200"></TableText>
      <TableText prop="display_name" label="名称" :width="200"></TableText>
      <TableText prop="value" label="值" :width="160"></TableText>
      <TableAction :buttons="[
        { name: '编辑' }
      ]" :minWidth="160" />
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'

@Component
export default class ViewSystemVersionIndex extends Vue {
  private Service = Service
}
</script>
