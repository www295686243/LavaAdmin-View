<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :min-width="minWidth"
    :align="align"
  >
    <template slot-scope="scope">
      <span :style="{ color: getColor(scope.row) }">{{ getValue(scope.row) || '--' }}</span>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import TableMixins from './TableMixins'
import { Component, Mixins, Prop } from 'vue-property-decorator'
import { getDeepValue } from '@/plugins/tools'
import ConstService from '@/service/ConstService'

@Component
export default class TableText extends Mixins(TableMixins) {
  @Prop()
  color!: string

  private getValue (row: any) {
    const field = this.prop as string
    if (Array.isArray(row[field])) {
      return this.getArrayValue(row)
    } else if (row[field] && row[field].text && row[field].color) {
      return row[field].text
    } else {
      let value = getDeepValue(field, row)
      // ''+ 表示转字符串类型 如果value是整型，0的话前端会显示 --
      if (typeof value === 'number') {
        value = '' + value
      }
      return value
    }
  }

  private getArrayValue (row: any) {
    const field = this.prop as string
    const label = this.props.label || 'display_name'
    return row[field].map((item: any) => {
      if (typeof item === 'string') {
        return item
      } else {
        return item[label]
      }
    }).join('、')
  }

  private getColor (row: any) {
    const field = this.prop as string
    if (row[field] && row[field].text && row[field].color) {
      return ConstService.getColor(row[field].color || '')
    }
  }
}
</script>
