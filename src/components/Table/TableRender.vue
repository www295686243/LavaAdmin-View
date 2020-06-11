<template>
  <div class="TableRender">
    <el-table
      ref="table"
      border
      :data="list"
      v-loading="isLoading"
      row-key="id"
      :max-height="maxHeight"
      :empty-text="emptyText">
      <template v-for="(v, index) in tableColumns">
        <TableAction :key="index" :column="v" v-if="v.prop === '_action'" @remove="removeReload"></TableAction>
        <TableText :key="index" :column="v" v-else></TableText>
      </template>
    </el-table>
    <TablePagination
      @changePage="pageLoad"
      v-if="isShowPagination"
      :pagination="pagination">
    </TablePagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IPagination, IResult, ITableColumns } from '@/interface/common'
import TablePagination from '@/components/Table/TablePagination.vue'
import TableText from './TableText.vue'
import TableAction from './TableAction.vue'

@Component({
  components: {
    TablePagination,
    TableText,
    TableAction
  }
})
export default class TableRender extends Vue {
  $refs!: {
    table: any;
  }

  @Prop({ default: () => () => Promise.resolve() })
  onLoad!: Function

  @Prop({ default: () => [] })
  tableColumns!: ITableColumns[]

  private maxHeight = 500
  private isLoading = false
  private pagination: IPagination = {
    page: 1,
    limit: 10,
    total: 0
  }

  private isShowPagination = false
  private list: any[] = []
  private emptyText = '暂无数据'

  private initLoad (params?: any) {
    if (this.isLoading) return
    this.isLoading = true
    return this.onLoad({
      ...params,
      ...this.pagination
    })
      .then((res: IResult) => {
        if (Array.isArray(res.data)) {
          this.list = res.data
        } else if (res.data && res.data.data) {
          this.isShowPagination = true
          this.pagination.total = res.data.total
          this.list = res.data.data
          return res.data.data
        }
      })
      .then(() => {
        this.isLoading = false
      })
      .catch((err: any) => {
        this.isLoading = false
        if (err && err.message) {
          this.emptyText = err.message
        }
      })
  }

  private pageLoad () {
    return this.initLoad()
  }

  removeReload () {
    if (this.list.length === 1) {
      this.pagination.page = this.pagination.page > 1 ? --this.pagination.page : 1
    }
    this.reload()
  }

  reload () {
    this.list = []
    this.initLoad()
  }

  created () {
    this.maxHeight = document.body.clientHeight - 250
    this.initLoad()
  }
}
</script>

<style lang="scss">
.TableRender {
  height: 100%;
}
</style>
