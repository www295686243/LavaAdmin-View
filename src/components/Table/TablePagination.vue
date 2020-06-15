<template>
  <div style="text-align: right">
    <br />
    <el-pagination
      background
      layout="prev, pager, next, total"
      @size-change="changePageSize"
      @current-change="changePage"
      :current-page="pagination.page"
      :page-size="pagination.pageSize"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IPagination } from '@/interface/common'

@Component
export default class TablePagination extends Vue {
  @Prop()
  pagination!: IPagination

  private changePage (page: number) {
    this.pagination.page = page
    this.$emit('changePage')
  }

  private changePageSize (pageSize: number) {
    this.pagination.limit = pageSize
    this.changePage(1)
  }
}
</script>
