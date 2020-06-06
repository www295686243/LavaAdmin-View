<template>
  <el-popover
    placement="top"
    width="160"
    v-model="visible">
    <p>{{title}}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
      <el-button type="primary" size="mini" @click="handleClick" :loading="loading">确定</el-button>
    </div>
    <el-button :type="type" :size="size" :icon="icon" slot="reference" :disabled="disabled">
      <slot>删除</slot>
    </el-button>
  </el-popover>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IResult } from '@/interface/common'

@Component
export default class ButtonDelete extends Vue {
  @Prop({ default: () => () => Promise.resolve })
  onClick!: Function

  @Prop({ default: () => () => Promise.resolve })
  onClickAfter!: Function

  @Prop({ default: 'warning' })
  type!: string

  @Prop({ default: 'small' })
  size!: string

  @Prop({ default: '您真的要删除吗' })
  title!: string

  @Prop()
  icon!: string

  @Prop({ default: false })
  disabled!: boolean

  private loading = false
  private visible = false

  private handleClick () {
    if (this.loading) return
    this.loading = true
    this.onClick()
      .then((res: IResult) => {
        if (res && res.message) {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'success'
          })
        }
        this.handleloaded()
        return this.onClickAfter()
      })
      .catch((res: IResult) => {
        if (res && res.message) {
          this.$message({
            showClose: true,
            message: res.message,
            type: 'error'
          })
        }
        this.handleloaded()
      })
  }

  private handleloaded () {
    this.visible = false
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
