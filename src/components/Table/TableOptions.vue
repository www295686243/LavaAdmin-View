<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :min-width="minWidth"
    :align="align"
  >
    <template slot-scope="scope">
      <span :style="{ color: getColor(scope.row) }">{{getValue(scope.row)}}</span>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import TableMixins from './TableMixins'
import { Component, Mixins, Prop, Inject } from 'vue-property-decorator'
import { getDeepValue } from '@/plugins/tools'
import ConstService from '@/service/ConstService'
import { IService, IOptions } from '@/interface/common'

@Component
export default class TableOptions extends Mixins(TableMixins) {
  @Prop({
    default: () => {
      return {
        value: 'id',
        label: 'display_name'
      }
    }
  })
  props!: { label: string; value: any }

  @Prop({ default: false })
  bool!: boolean

  @Prop()
  colors!: { [key: string]: string }

  @Inject('tableService')
  tableService!: IService

  private options = [] as IOptions[]

  private getValue (row: any) {
    let value = getDeepValue(this.prop, row)
    value = this.bool && !value ? 0 : value
    const item = this.options.find((res) => res[this.props.value] === value)
    return item ? item[this.props.label] : '--'
  }

  private getColor (row: any) {
    let value = getDeepValue(this.prop, row)
    value = this.bool && !value ? 0 : value
    const item = this.options.find((res) => res[this.props.value] === value)
    if (item && item.color) {
      return ConstService.getColor(item.color)
    }
    if (this.colors && this.colors[value]) {
      return ConstService.getColor(this.colors[value])
    }
    return ConstService.getColor('')
  }

  created () {
    this.options = ConstService.getOptions(this.tableService.getModelName() + ':' + this.prop)
  }
}
</script>
