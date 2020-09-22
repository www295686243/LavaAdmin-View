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
import { codesToPaths, getAncestorsAndSelf, getCodeParents, getDeepValue } from '@/plugins/tools'

@Component
export default class TableImages extends Mixins(TableMixins) {
  @Prop()
  type!: string

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
    const value = getDeepValue(this.prop, row)
    if (value) {
      if (this.type === 'city') {
        const codes = getCodeParents(value)
        const paths = codesToPaths(codes, this.options as any[])
        return paths.map((res: any) => res.name).join('/')
      } else {
        const paths = getAncestorsAndSelf(value, this.options as any[], this.props.value)
        return paths.map((res: any) => res[this.props.label]).join('/')
      }
    } else {
      return '--'
    }
  }
}
</script>
