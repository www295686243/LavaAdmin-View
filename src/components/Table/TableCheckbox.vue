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
import { Component, Mixins, Prop, Inject } from 'vue-property-decorator'
import { getDeepValue } from '@/plugins/tools'
import { IService } from '@/interface/common'
import { OptionItem } from '@/service/ConstService'

@Component
export default class TableImage extends Mixins(TableMixins) {
  @Prop({
    default: () => {
      return {
        value: 'value',
        label: 'display_name'
      }
    }
  })
  props!: { label: string; value: any }

  @Inject('tableService')
  tableService!: IService

  private options = [] as OptionItem[]

  private getValue (row: any) {
    const values = getDeepValue(this.prop as string, row)
    if (Array.isArray(values)) {
      return this.options.filter((res) => values.includes(res[this.props.value]))
        .map((res) => res[this.props.label])
        .join('、')
    } else {
      return '--'
    }
  }

  created () {
    this.options = this.tableService.getOptions(this.prop)
  }
}
</script>
