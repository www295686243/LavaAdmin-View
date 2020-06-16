<template>
  <el-dialog
    title="图片集"
    width="60%"
    :visible.sync="dialogVisible">
    <el-carousel :interval="4000" :autoplay="autoplay" :initial-index="index" @change="handleChange" :height="height">
      <el-carousel-item v-for="(url, index) in list" :key="index">
        <img :src="url" width="100%" ref="imgs" @load="handleImgLoad(index)">
      </el-carousel-item>
    </el-carousel>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ServiceCarousel extends Vue {
  $refs!: {
    imgs: Element[];
  }

  @Prop({ default: true })
  autoplay!: boolean

  @Prop({ default: 0 })
  index!: number

  private dialogVisible = false
  private list: string[] = []
  private height = ''

  public open (list: string[]) {
    this.list = list
    this.dialogVisible = true
  }

  private handleImgLoad (index: number) {
    if (index === this.index) {
      this.handleChange(this.index)
    }
  }

  private handleChange (index: number) {
    this.height = this.$refs.imgs[index].clientHeight + 'px'
  }
}
</script>
