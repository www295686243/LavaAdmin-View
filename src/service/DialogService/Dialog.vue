<template>
  <el-dialog
    :visible.sync="isShowModal"
    :close-on-click-modal="false"
    @close="close"
    custom-class="ServiceDialog"
    :append-to-body="true"
    :width="width">
    <component :is="this.component" :id="id" @done="handleDone" :dialog="true"></component>
    <span slot="footer" v-if="hideCloseBtn === false">
      <el-button type="primary" @click="close">关 闭</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ServiceDialog extends Vue {
  @Prop()
  component!: string

  @Prop()
  id!: string

  @Prop({ default: '500px' })
  width!: string

  @Prop({ default: false })
  hideCloseBtn!: boolean

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
    this.reject()
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
