<template>
  <div class="TableRender">
    <div class="function-container" v-if="searchFields || (Service && !!Service.store && disableCreate === false)">
      <div v-permission="tableService.getPermissionName('store')" v-if="Service && !!Service.store && disableCreate === false" class="store-btn">
        <ButtonSubmit :onClick="() => RouterService.pushForm()">添加{{Service.name}}</ButtonSubmit>
      </div>
      <TableToolSearch
        :fields="searchFields"
        v-if="searchFields">
      </TableToolSearch>
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
import TableToolSearch from './TableToolSearch.vue'
import RouterService from '@/service/RouterService'
import QueryString from 'qs'

@Component({
  components: {
    TablePagination,
    TableToolSearch
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

  @Prop({ default: false })
  disableCreate!: boolean

  @Provide()
  tableService = this.Service

  private maxHeight = 500
  private isLoading = false
  private pagination: IPagination = {
    page: Number(RouterService.query('page')) || 1,
    limit: Number(RouterService.query('limit')) || (this.Service && this.Service.limit) || 10,
    total: 0
  }

  private isShowPagination = false
  private list: any[] = []
  private emptyText = '暂无数据'
  private searchParams = { _search: Object.values(QueryString.parse(RouterService.query('_search') as string)) }
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
    RouterService.replace(RouterService.getPath(), { page: this.pagination.page, limit: this.pagination.limit })
  }

  private removeReload () {
    if (this.list.length === 1) {
      const page = this.pagination.page > 1 ? --this.pagination.page : 1
      if (this.pagination.page === page) {
        this.reload()
      } else {
        this.pagination.page = page
        RouterService.replace(RouterService.getPath(), { page: this.pagination.page })
      }
    } else {
      this.reload()
    }
  }

  reload () {
    this.list = []
    this.initLoad()
  }

  created () {
    this.maxHeight = document.body.clientHeight - 280
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
    padding-bottom: 15px;
    .store-btn {
      flex: 0 0 auto;
    }
    .TableToolSearch {
      flex: 1 1 0;
    }
  }
}
</style>
