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
      <span :style="{ color: getColor(scope.row) }">{{getValue(scope.row)}}</span>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITableColumns } from '@/interface/common'
import { getDeepValue } from '@/plugins/tools'
import ConstService from '@/service/ConstService'

@Component
export default class TableOptions extends Vue {
  private props = {
    value: 'id',
    label: 'display_name'
  }

  @Prop()
  column!: ITableColumns

  private getValue (row: any) {
    const value = getDeepValue(this.column.prop as string, row)
    if (Array.isArray(this.column.options)) {
      const item = this.column.options.find((res) => res[this.props.value] === value)
      return item ? item[this.props.label] : '--'
    } else {
      return '--'
    }
  }

  private getColor (row: any) {
    const value = getDeepValue(this.column.prop as string, row)
    if (Array.isArray(this.column.options)) {
      const item = this.column.options.find((res) => res[this.props.value] === value)
      if (item && item.color) {
        return ConstService.getColor(item.color)
      }
    }
    if (this.column.colors && this.column.colors[value]) {
      return ConstService.getColor(this.column.colors[value])
    }
    return ConstService.getColor('')
  }

  created () {
    Object.assign(this.props, this.column.props)
  }
}
</script>
