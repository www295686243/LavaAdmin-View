<template>
  <PageContainer>
    <TableRender
      :addBtnText="Service.name"
      :onLoad="(params) => Service.index(params)"
      :tableColumns="tableColumns">
    </TableRender>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import { ITableColumns } from '@/interface/common'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'

@Component
export default class ViewInfoNewsIndex extends Vue {
  private Service = Service

  private tableColumns: ITableColumns[] = [
    {
      prop: 'id',
      label: 'ID',
      width: 200
    },
    {
      prop: 'user_id',
      label: 'userid',
      width: 200
    },
    {
      prop: 'text',
      label: 'text'
    },
    {
      prop: 'textarea',
      label: 'textarea'
    },
    {
      prop: 'select',
      label: 'select',
      element: 'options',
      options: ConstService.getAppOptions('options')
    },
    {
      prop: 'radio',
      label: 'radio'
    },
    {
      prop: 'switch',
      label: 'switch'
    },
    {
      prop: 'datetime',
      label: 'datetime'
    },
    {
      prop: 'checkbox',
      label: 'checkbox',
      element: 'checkbox',
      options: ConstService.getAppOptions('options')
    },
    {
      prop: 'counter',
      label: 'counter'
    },
    {
      prop: 'file',
      label: 'file'
    },
    {
      prop: 'image',
      label: 'image',
      element: 'image'
    },
    {
      prop: 'files',
      label: 'files'
    },
    {
      prop: 'images',
      label: 'images',
      element: 'images'
    },
    {
      prop: 'cascader',
      label: 'cascader'
    },
    {
      prop: '_action',
      label: '操作',
      minWidth: 160,
      actions: [
        {
          name: '编辑',
          onClick: (row: any) => {
            RouterService.pushForm({ id: row.id })
          }
        },
        {
          name: '删除',
          onClick: (row: any) => Service.destroy(row.id)
        }
      ]
    }
  ]
}
</script>
