<template>
  <div class="ImageMaskContainer" :class="{ auto: this.size === 'auto' }" :style="{ width: this.size + 'px', height: this.size + 'px' }">
    <div class="mask">
      <i class="el-icon-close" @click="handleRemove"></i>
      <i class="el-icon-view" @click="handleViewImages"></i>
    </div>
    <el-image :src="innerValue[index]" fit="cover" v-if="typeof index === 'number'"></el-image>
    <el-image :src="innerValue" fit="cover" v-else></el-image>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import CarouselService from '@/service/CarouselService/Service'

@Component
export default class ImageMaskContainer extends Vue {
  @Prop()
  value!: string | string[]

  @Prop()
  index!: number

  @Prop({ default: 150 })
  size!: number | string

  @Watch('value')
  onValue (val: string) {
    this.innerValue = val
  }

  @Watch('innerValue')
  onInnerValue (val: string) {
    this.$emit('input', val)
  }

  private innerValue = this.value

  private handleRemove () {
    if (Array.isArray(this.innerValue)) {
      this.innerValue.splice(this.index, 1)
    } else {
      this.innerValue = ''
    }
  }

  private handleViewImages () {
    CarouselService.open(Array.isArray(this.innerValue) ? this.innerValue : [this.innerValue], {
      autoplay: false,
      index: this.index || 0
    })
  }
}
</script>

<style lang="scss">
.ImageMaskContainer {
  position: relative;
  cursor: pointer;
  &.auto {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
  .mask {
    display: none;
    background: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    .el-icon-close {
      transform: translate(-150%, -50%);
    }
    .el-icon-view {
      transform: translate(50%, -50%);
    }
  }
  .el-image {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  i {
    position: absolute;
    left: 50%;
    top: 50%;
    color: #ffffff;
    font-size: 30px;
  }
  &:hover {
    .mask {
      display: block;
    }
  }
}
</style>
