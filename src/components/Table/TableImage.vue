<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :min-width="minWidth || 91"
    :align="align"
  >
    <template slot-scope="scope">
      <img :src="scope.row[prop]"  width="70" height="70" v-if="scope.row[prop]"/>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import TableMixins from './TableMixins'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class TableImage extends Mixins(TableMixins) {
}
</script>
