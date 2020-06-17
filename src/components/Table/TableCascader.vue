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
import { getAncestorsAndSelf, getDeepValue } from '@/plugins/tools'

@Component
export default class TableImages extends Vue {
  private props = {
    label: 'display_name',
    value: 'id'
  }

  @Prop()
  column!: ITableColumns

  private getValue (row: any) {
    const value = getDeepValue(this.column.prop as string, row)
    if (value) {
      const paths = getAncestorsAndSelf(value, this.column.options as any[], this.props.value)
      return paths.map((res: any) => res[this.props.label]).join('/')
    } else {
      return '--'
    }
  }

  created () {
    Object.assign(this.props, this.column.props)
  }
}
</script>
