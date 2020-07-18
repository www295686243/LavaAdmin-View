<template>
  <div class="TableRender">
    <div class="function-container">
      <div v-permission="'store'" v-if="!!Service.store"><ButtonSubmit :onClick="() => RouterService.pushForm()">添加{{Service.name}}</ButtonSubmit></div>
      <InfoSearchContainer
        @submit="search"
        :fields="searchFields"
        v-if="searchFields">
      </InfoSearchContainer>
    </div>
    <el-table
      ref="table"
      border
      :data="list"
      v-loading="isLoading"
      row-key="id"
      :max-height="maxHeight"
      :empty-text="emptyText">
      <slot></slot>
    </el-table>
    <TablePagination
      @changePage="pageLoad"
      v-if="isShowPagination"
      :pagination="pagination">
    </TablePagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import { IPagination, IResult, ISearchFields, IService } from '@/interface/common'
import TablePagination from '@/components/Table/TablePagination.vue'
import InfoSearchContainer from '../InfoSearchContainer.vue'
import RouterService from '@/service/RouterService'

@Component({
  components: {
    TablePagination,
    InfoSearchContainer
  }
})
export default class TableRender extends Vue {
  $refs!: {
    table: any;
  }

  @Prop()
  onLoad!: Function

  @Prop()
  searchFields!: ISearchFields[]

  @Prop()
  Service!: IService

  @Provide()
  tableService = this.Service

  private maxHeight = 500
  private isLoading = false
  private pagination: IPagination = {
    page: 1,
    limit: 10,
    total: 0,
    pageSize: 10
  }

  private isShowPagination = false
  private list: any[] = []
  private emptyText = '暂无数据'
  private searchParams = {}
  private RouterService = RouterService

  private initLoad () {
    if (this.isLoading) return
    this.isLoading = true
    return Promise.resolve()
      .then(() => {
        if (this.onLoad) {
          return this.onLoad({
            ...this.pagination,
            ...this.searchParams
          })
        } else {
          return this.Service.index({
            ...this.pagination,
            ...this.searchParams
          })
        }
      })
      .then((res: IResult) => {
        if (Array.isArray(res.data)) {
          this.list = res.data
        } else if (res.data && res.data.data) {
          this.isShowPagination = true
          this.pagination.total = res.data.total
          this.pagination.pageSize = res.data.per_page
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
    this.initLoad()
  }

  private removeReload () {
    if (this.list.length === 1) {
      this.pagination.page = this.pagination.page > 1 ? --this.pagination.page : 1
    }
    this.reload()
  }

  reload () {
    this.list = []
    this.initLoad()
  }

  private search (params: object) {
    if (params) {
      this.searchParams = params
    }
    this.initLoad()
  }

  created () {
    this.maxHeight = document.body.clientHeight - 250
    this.initLoad()
    if (this.Service) {
      this.tableService.refresh = this.removeReload
    }
  }
}
</script>

<style lang="scss">
.TableRender {
  height: 100%;
  .function-container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
  }
}
</style>
