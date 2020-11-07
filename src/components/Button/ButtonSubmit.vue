<template>
  <el-button
    class="ButtonSubmit"
    @click="handleSubmit"
    :loading="loading"
    :class="{long: long}"
    :type="type"
    v-bind="$attrs">
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IResult } from '@/interface/common'

@Component({
  inheritAttrs: false
})
export default class ButtonSubmit extends Vue {
  @Prop({ default: () => () => Promise.resolve })
  onClick!: Function

  @Prop({ default: false })
  long!: boolean

  @Prop({ default: 'primary' })
  type!: string

  private loading = false

  private handleSubmit () {
    if (this.loading) return
    this.loading = true
    const result = this.onClick()
    if (result && typeof result.then === 'function') {
      result
        .then((res: IResult) => {
          if (res && res.message) {
            this.$message({
              showClose: true,
              message: res.message,
              type: 'success'
            })
          }
          this.loading = false
        })
        .catch((res: IResult) => {
          if (res) {
            if (res.code === 422) {
              const errList = Object.values(res.data) as string[][]
              const messageHTML = errList.map((item) => item.join('<br>')).join('<br>')
              this.$message({
                showClose: true,
                dangerouslyUseHTMLString: true,
                duration: 5000,
                message: '<div style="line-height: 1.4">' + messageHTML + '</div>',
                type: 'error'
              })
            } else if (res.message) {
              this.$message({
                showClose: true,
                message: res.message,
                duration: 5000,
                type: 'error'
              })
            }
          }
          this.loading = false
        })
    } else {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.long {
  width: 100%
}
</style>
