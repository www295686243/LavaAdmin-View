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
      <template v-for="(v, key) in innerActions">
        <ButtonDelete
          :key="key"
          type="danger"
          :size="v.size || 'small'"
          :onClick="() => handleClickAfter(scope, v)"
          style="margin-left: 10px;"
          v-if="v.name === '删除'">
          {{v.name}}
        </ButtonDelete>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'primary'"
          :size="v.size || 'small'"
          :onClick="() => v.onClick(scope.row, scope.$index)"
          v-else-if="v.name === '编辑'">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ITableColumns, ITableColumnAction } from '@/interface/common'
import RouterService from '@/service/RouterService'
import UserService from '@/service/UserService'

@Component
export default class TableAction extends Vue {
  @Prop()
  column!: ITableColumns

  private innerActions: ITableColumnAction[] = []

  private handleClickAfter (scope: { row: any; $index: number }, v: { onClick: Function }) {
    return v.onClick(scope.row, scope.$index)
      .then(() => {
        this.$emit('remove')
      })
  }

  created () {
    if (this.column.actions && this.column.actions.length > 0) {
      const controllerName = RouterService.getControllerName()
      this.innerActions = this.column.actions.filter((res) => {
        if (res.name === '编辑') {
          res.permission = 'update'
        } else if (res.name === '删除') {
          res.permission = 'destroy'
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
}
</script>
