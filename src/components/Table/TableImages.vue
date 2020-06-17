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
      <el-button :disabled="!scope.row[column.prop]" size="small" @click="handleOpenImages(scope.row[column.prop])">总共{{scope.row[column.prop] ? scope.row[column.prop].length : 0}}张图</el-button>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITableColumns } from '@/interface/common'
import CarouselService from '@/service/CarouselService/Service'

@Component
export default class TableImages extends Vue {
  @Prop()
  column!: ITableColumns

  private handleOpenImages (images: string[]) {
    if (images) {
      CarouselService.open(images)
    }
  }
}
</script>
