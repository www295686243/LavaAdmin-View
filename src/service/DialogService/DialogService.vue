<template>
  <el-dialog
    :visible.sync="isShowModal"
    :close-on-click-modal="false"
    @close="close"
    custom-class="DialogService"
    :append-to-body="true"
    :width="width">
    <component :is="this.component" :data="data" @done="handleDone"></component>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DialogService extends Vue {
  @Prop()
  component!: string
  @Prop()
  data!: any
  @Prop({ default: '500px' })
  width!: string

  private isShowModal: boolean = false
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
