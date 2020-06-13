<template>
  <el-table-column
    :prop="column.prop"
    :type="column.type"
    :label="column.label"
    :width="column.width"
    :min-width="column.minWidth"
    :align="column.align"
  >
    <template slot-scope="scope">
      {{ getValue(scope.row, column) || '--' }}
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITableColumns } from '@/interface/common'
import { getDeepValue } from '@/plugins/tools'

@Component
export default class TableText extends Vue {
  @Prop()
  column!: ITableColumns

  private getValue (row: any, column: ITableColumns) {
    const field = column.prop as string
    if (Array.isArray(row[field])) {
      return this.getArrayValue(row, column)
    } else {
      let value = getDeepValue(field, row)
      // ''+ 表示转字符串类型 如果value是整型，0的话前端会显示 --
      if (typeof value === 'number') {
        value = '' + value
      }
      return value
    }
  }

  private getArrayValue (row: any, column: ITableColumns) {
    const field = column.prop as string
    const label = (column.props && column.props.label) || 'display_name'
    return row[field].map((item: any) => {
      if (typeof item === 'string') {
        return item
      } else {
        return item[label]
      }
    }).join('、')
  }
}
</script>
