<template>
  <el-table-column
    prop="_action"
    label="操作"
    :width="width"
    :min-width="minWidth"
  >
    <template slot-scope="scope">
      <template v-for="(v, key) in innerButtons">
        <ButtonDelete
          :key="key"
          type="danger"
          :size="v.size || 'small'"
          :onClick="() => handleDestroy(scope, v)"
          style="margin-left: 10px;"
          v-if="v.name === '删除'">
          {{v.name}}
        </ButtonDelete>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'primary'"
          :size="v.size || 'small'"
          :onClick="() => handleEdit(scope, v)"
          v-else-if="v.name === '编辑'">
          {{v.name}}
        </ButtonSubmit>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'warning'"
          :size="v.size || 'small'"
          :onClick="() => handleShow(scope, v)"
          v-else-if="v.name === '查看详情'">
          {{v.name}}
        </ButtonSubmit>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'warning'"
          :size="v.size || 'small'"
          :onClick="() => v.onClick(scope.row, scope.$index)"
          v-else>
          {{v.name}}
        </ButtonSubmit>
      </template>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import TableMixins from './TableMixins'
import { Component, Prop, Inject, Mixins } from 'vue-property-decorator'
import { ITableColumnAction, IService } from '@/interface/common'
import RouterService from '@/service/RouterService'
import UserService from '@/service/UserService'
import DialogService from '@/service/DialogService/Service'

@Component
export default class TableAction extends Mixins(TableMixins) {
  @Prop()
  buttons!: ITableColumnAction[]

  @Inject('tableService')
  tableService!: IService

  private innerButtons: ITableColumnAction[] = []

  private handleDestroy (scope: { row: any; $index: number }, v: { onClick: Function }) {
    return Promise.resolve()
      .then(() => {
        if (v.onClick) {
          return v.onClick(scope.row, scope.$index)
        } else {
          return this.tableService.destroy(scope.row.id)
        }
      })
      .then(() => {
        this.tableService.refresh()
      })
  }

  private handleEdit (scope: { row: any; $index: number }, v: { onClick: Function }) {
    return Promise.resolve()
      .then(() => {
        if (v.onClick) {
          return v.onClick(scope.row, scope.$index)
        } else {
          return RouterService.pushForm({ id: scope.row.id })
        }
      })
  }

  private handleShow (scope: { row: any; $index: number }, v: { onClick: Function }) {
    return Promise.resolve()
      .then(() => {
        if (v.onClick) {
          return v.onClick(scope.row, scope.$index)
        } else {
          return DialogService.show(require('@/views' + RouterService.getPath() + '/show.vue').default, { id: scope.row.id })
        }
      })
  }

  created () {
    const controllerName = RouterService.getControllerName()
    this.innerButtons = this.buttons.filter((res) => {
      if (res.name === '编辑') {
        res.permission = 'update'
      } else if (res.name === '删除') {
        res.permission = 'destroy'
      } else if (res.name === '查看详情') {
        res.permission = 'show'
      }
      if (res.permission) {
        const permissionName = controllerName + '@' + res.permission
        return UserService.hasPermission(permissionName)
      } else {
        return true
      }
    })
  }
}
</script>
