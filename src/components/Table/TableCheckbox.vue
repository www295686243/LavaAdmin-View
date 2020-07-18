<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :min-width="minWidth"
    :align="align"
  >
    <template slot-scope="scope">
      {{getValue(scope.row)}}
    </template>
  </el-table-column>
</template>

<script lang="ts">
import TableMixins from './TableMixins'
import { Component, Mixins, Prop } from 'vue-property-decorator'
import { getDeepValue } from '@/plugins/tools'

@Component
export default class TableImage extends Mixins(TableMixins) {
  @Prop({
    default: () => {
      return {
        value: 'id',
        label: 'display_name'
      }
    }
  })
  props!: { label: string; value: any }

  @Prop()
  options!: any[]

  private getValue (row: any) {
    const values = getDeepValue(this.prop as string, row)
    if (Array.isArray(values)) {
      if (Array.isArray(this.options)) {
        return this.options.filter((res) => values.includes(res[this.props.value]))
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
