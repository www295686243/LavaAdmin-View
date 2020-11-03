<template>
  <el-table-column
    prop="_action"
    label="操作"
    :width="width"
    :min-width="minWidth"
    fixed="right"
    class-name="TableAction"
  >
    <template slot-scope="scope">
      <template v-for="(v, key) in innerButtons">
        <ButtonDelete
          :key="key"
          type="danger"
          :size="v.size || 'small'"
          :onClick="() => handleDestroy(scope, v)"
          v-if="v.name === '删除' && handleOnShow(scope, v)">
          {{v.name}}
        </ButtonDelete>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'primary'"
          :size="v.size || 'small'"
          :onClick="() => handleEdit(scope, v)"
          v-else-if="v.name === '编辑' && handleOnShow(scope, v)">
          {{v.name}}
        </ButtonSubmit>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'warning'"
          :size="v.size || 'small'"
          :onClick="() => handleShow(scope, v)"
          v-else-if="v.name === '查看详情' && handleOnShow(scope, v)">
          {{v.name}}
        </ButtonSubmit>
        <el-popover
          popper-class="TableAction-popper"
          :key="key"
          v-else-if="v.name === '更多' && v.children.length > 0"
          placement="bottom">
          <div class="more-btns" v-for="(item, itemKey) in v.children" :key="itemKey">
            <ButtonDelete
              type="text"
              :size="item.size || 'small'"
              :onClick="() => handleDestroy(scope, item)"
              v-if="item.name === '删除' && handleOnShow(scope, item)">
              {{item.name}}
            </ButtonDelete>
            <ButtonSubmit
              v-else
              type="text"
              :onClick="() => item.onClick(scope.row, scope.$index)"
              :size="item.size || 'small' && handleOnShow(scope, item)">
              {{item.name}}
            </ButtonSubmit>
          </div>
          <ButtonSubmit
            slot="reference"
            :type="v.type || 'primary'"
            :size="v.size || 'small'">
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </ButtonSubmit>
        </el-popover>
        <ButtonSubmit
          :key="key"
          :type="v.type || 'warning'"
          :size="v.size || 'small'"
          :onClick="() => v.onClick(scope.row, scope.$index)"
          v-else-if="handleOnShow(scope, v)">
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

  private handleOnShow (scope: any, v: { onShow: Function }) {
    if (v.onShow) {
      return v.onShow(scope.row)
    } else {
      return true
    }
  }

  created () {
    this.innerButtons = this.buttons.filter((res) => {
      if (res.name === '编辑') {
        res.permission = 'update'
      } else if (res.name === '删除') {
        res.permission = 'destroy'
      } else if (res.name === '查看详情') {
        res.permission = 'show'
      }
      if (res.permission) {
        return UserService.hasPermission(this.tableService.getPermissionName(res.permission))
      } else {
        return true
      }
    })
  }
}
</script>

<style lang="scss">
.TableAction {
  .el-popover__reference {
    margin-left: 10px;
  }
}
.TableAction-popper {
  padding: 4px 0;
  min-width: 100px;
  .more-btns {
    .el-button {
      width: 100%;
      &:hover {
        background-color: #ecf5ff;
      }
    }
  }
}
</style>
