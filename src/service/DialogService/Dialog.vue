<template>
  <el-dialog
    :visible.sync="isShowModal"
    :close-on-click-modal="false"
    @close="close"
    custom-class="ServiceDialog"
    :append-to-body="true"
    :width="params.width || '800px'">
    <component :is="this.component" :params="params" @done="handleDone"></component>
    <span slot="footer" v-if="params.hideCloseBtn === false">
      <el-button type="primary" @click="close">关 闭</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { DialogParams } from './Service'

@Component
export default class ServiceDialog extends Vue {
  @Prop()
  component!: string

  @Prop()
  params!: DialogParams

  private isShowModal = false
  private resolve!: Function
  private reject!: Function

  open () {
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
      this.isShowModal = true
    })
  }

  close () {
    this.isShowModal = false
    this.reject('关闭弹窗')
  }

  handleDone (data: any) {
    this.isShowModal = false
    this.resolve(data)
  }
}
</script>

<style lang="scss">
.ServiceDialog {
  .el-dialog__body {
    height: 60vh;
    overflow-y: auto;
  }
  .el-input.is-disabled .el-input__inner {
    background-color: #FFF;
    border-color: #DCDFE6;
    color: #606266;
  }
}
</style>
