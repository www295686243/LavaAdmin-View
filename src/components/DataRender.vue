<template>
  <div class="DataRender">
    <slot v-if="status === STATUS.SUCCESS"></slot>
    <div v-else-if="status === STATUS.LOADING" v-loading="status === STATUS.LOADING" style="height: 40%"></div>
    <div v-else-if="status === STATUS.ERROR" class="result">{{result.text}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IResult } from '@/interface/common'

const STATUS = {
  INIT: 0, // 占位(暂未用到)
  LOADING: 1,
  SUCCESS: 2,
  WAIT: 3,
  ERROR: -1
}

@Component
export default class DataRender extends Vue {
  @Prop({ default: () => () => Promise.resolve() })
  readonly onLoad!: Function

  @Prop({ default: 0 })
  readonly wait!: number

  status: number = STATUS.INIT

  result = {
    text: '数据错误'
  }

  STATUS = STATUS

  initLoad () {
    if (this.wait > 0) {
      setTimeout(() => {
        if (this.status === STATUS.WAIT) {
          this.status = STATUS.LOADING
        }
      }, this.wait)
    } else {
      this.status = STATUS.LOADING
    }
    return this.doOnLoad()
  }

  private doOnLoad () {
    return this.onLoad()
      .then(() => {
        this.status = STATUS.SUCCESS
        this.$nextTick(() => {
          this.$emit('success')
        })
      })
      .catch((res: IResult) => {
        this.result.text = res.message
        this.status = STATUS.ERROR
        throw res
      })
  }

  public reload () {
    return this.initLoad()
  }

  created () {
    this.initLoad()
  }
}
</script>

<style lang="scss">
.DataRender {
  height: 100%;
  .result {
    text-align: center;
    line-height: 50vh;
  }
}
</style>
