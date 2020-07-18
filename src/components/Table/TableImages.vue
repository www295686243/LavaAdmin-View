<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :min-width="minWidth || 108"
    :align="align"
  >
    <template slot-scope="scope">
      <el-button :disabled="!scope.row[prop]" size="small" @click="handleOpenImages(scope.row[prop])">总共{{scope.row[prop] ? scope.row[prop].length : 0}}张图</el-button>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import TableMixins from './TableMixins'
import { Component, Mixins } from 'vue-property-decorator'
import CarouselService from '@/service/CarouselService/Service'

@Component
export default class TableImages extends Mixins(TableMixins) {
  private handleOpenImages (images: string[]) {
    if (images) {
      CarouselService.open(images)
    }
  }
}
</script>
