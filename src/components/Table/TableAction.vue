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
      <template v-for="(v, key) in column.actions">
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
import { ITableColumns } from '@/interface/common'

@Component
export default class TableAction extends Vue {
  @Prop()
  column!: ITableColumns

  private handleClickAfter (scope: { row: any; $index: number }, v: { onClick: Function }) {
    return v.onClick(scope.row, scope.$index)
      .then(() => {
        this.$emit('remove')
      })
  }
}
</script>
