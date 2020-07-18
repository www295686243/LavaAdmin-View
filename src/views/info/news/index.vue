<template>
  <PageContainer>
    <TableRender :Service="Service">
      <TableText prop="id" label="ID" :width="200"></TableText>
      <TableText prop="user_id" label="userid" :width="200"></TableText>
      <TableText prop="text" label="text" :width="200"></TableText>
      <TableText prop="textarea" label="textarea" :width="200"></TableText>
      <TableOptions prop="select" label="select" :colors="{ 1: 'success', 2: 'error' }" :options="getOptions()" :props="{ label: 'label', value: 'value' }"></TableOptions>
      <TableOptions prop="radio" label="radio" :colors="{ 1: 'success', 2: 'error' }" :options="getOptions()" :props="{ label: 'label', value: 'value' }"></TableOptions>
      <TableOptions prop="switch" label="switch" :options="[{label: '开', value: 1}, {label: '关', value: 0}]" :props="{ label: 'label', value: 'value' }"></TableOptions>
      <TableText prop="datetime" label="datetime"></TableText>
      <TableCheckbox prop="checkbox" label="checkbox" :options="getOptions()" :props="{ label: 'label', value: 'value' }"></TableCheckbox>
      <TableText prop="file" label="file"></TableText>
      <TableImage prop="image" label="image"></TableImage>
      <TableText prop="files" label="files"></TableText>
      <TableImages prop="images" label="images"></TableImages>
      <TableCascader prop="cascader" label="cascader"></TableCascader>
      <TableAction :buttons="[
        { name: '编辑' },
        { name: '删除' }
      ]" :minWidth="160" />
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import ConstService from '@/service/ConstService'

@Component
export default class ViewInfoNewsIndex extends Vue {
  private Service = Service

  private getOptions () {
    return ConstService.getOptions()
  }
}
</script>
