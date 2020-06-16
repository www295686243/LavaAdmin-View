<template>
  <el-table-column
    :prop="column.prop"
    :type="column.type"
    :label="column.label"
    :width="column.width"
    :min-width="column.minWidth"
    :fixed="column.fixed"
    :align="column.align"
  >
    <template slot-scope="scope">
      <img :src="scope.row[column.prop]"  width="70" height="70" v-if="scope.row[column.prop]"/>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITableColumns } from '@/interface/common'

@Component
export default class TableImage extends Vue {
  @Prop()
  column!: ITableColumns
}
</script>
