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
      {{getValue(scope.row)}}
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITableColumns } from '@/interface/common'
import { getDeepValue } from '@/plugins/tools'

@Component
export default class TableImage extends Vue {
  private props = {
    value: 'id',
    label: 'display_name'
  }

  @Prop()
  column!: ITableColumns

  private getValue (row: any) {
    const values = getDeepValue(this.column.prop as string, row)
    if (Array.isArray(values)) {
      if (Array.isArray(this.column.options)) {
        return this.column.options.filter((res) => values.includes(res[this.props.value]))
          .map((res) => res[this.props.label])
          .join('、')
      } else {
        return values.join('、')
      }
    } else {
      return '--'
    }
  }
}
</script>
