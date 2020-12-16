<template>
  <el-tree
    :data="treeList"
    :node-key="nodeKey"
    show-checkbox
    ref="tree"
    :props="{ label: 'display_name' }"
    class="FormTree"
    :check-strictly="checkStrictly"
    :class="[maxDeep > 3 ? 'deep4' : 'deep3']"
  ></el-tree>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormTree extends Vue {
  readonly $refs!: {
    tree: any;
  }

  @Prop({ default: () => [] })
  treeList!: any[]

  @Prop({ default: () => [] })
  defaultCheckedKeys!: number[]

  @Prop({ default: 'id' })
  nodeKey!: string

  @Prop({ default: 3 })
  maxDeep!: number

  @Prop({ default: false })
  checkStrictly!: boolean

  public getCheckedNodeIds () {
    const checkedKeys = this.$refs.tree.getCheckedKeys()
    return checkedKeys
  }

  mounted () {
    this.$refs.tree.setCheckedKeys(this.defaultCheckedKeys)
  }
}
</script>

<style lang="scss">
  .FormTree {
    &.deep4 {
      .el-tree-node {
        .el-tree-node {
          .el-tree-node {
            .el-tree-node__children {
              padding-left: 54px;
              white-space: initial;
              .el-tree-node {
                display: inline-block;
                .el-tree-node__content {
                  padding-left: 0 !important;
                }
              }
            }
          }
        }
      }
    }
    &.deep3 {
      .el-tree-node {
        .el-tree-node {
          .el-tree-node__children {
            padding-left: 36px;
            white-space: initial;
            .el-tree-node {
              display: inline-block;
              .el-tree-node__content {
                padding-left: 0 !important;
              }
            }
          }
        }
      }
    }
  }
</style>
