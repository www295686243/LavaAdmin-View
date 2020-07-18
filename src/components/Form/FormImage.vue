<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormImage">
    <div class="cover-controller" v-if="innerValue">
      <div class="cover-img">
        <MaskContainer>
          <i class="el-icon-close" @click="handleRemove"></i>
          <i class="el-icon-view" @click="handleViewImages"></i>
        </MaskContainer>
        <el-image :src="innerValue" fit="cover"></el-image>
      </div>
    </div>
    <div>
      <el-button icon="el-icon-picture-outline" @click="handleChangeModal">添加图片</el-button>
    </div>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'
import ImageManageService from '@/service/ImageManageService/Service'
import MaskContainer from '@/components/MaskContainer.vue'
import CarouselService from '@/service/CarouselService/Service'

@Component({
  components: {
    MaskContainer
  }
})
export default class FormImage extends Mixins(FormMixins) {
  private ImageManageService!: ImageManageService

  private handleChangeModal () {
    return this.ImageManageService.open('single')
      .then((data: { full_url: string }) => {
        this.innerValue = data.full_url
      })
      .catch((err: object) => console.log(err))
  }

  private handleRemove () {
    this.innerValue = ''
  }

  private handleViewImages () {
    CarouselService.open([this.innerValue], {
      autoplay: false
    })
  }

  created () {
    this.ImageManageService = new ImageManageService()
  }
}
</script>

<style lang="scss" scoped>
.FormImage {
  .cover-controller {
    margin-bottom: 5px;
    .cover-img {
      position: relative;
      cursor: pointer;
      width: 150px;
      height: 150px;
      .el-image {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 11;
      }
      i {
        position: absolute;
        left: 50%;
        top: 50%;
        color: #ffffff;
        font-size: 30px;
      }
      .el-icon-close {
        transform: translate(-150%, -50%);
      }
      .el-icon-view {
        transform: translate(50%, -50%);
      }
      &:hover {
        .el-image {
          z-index: 9;
        }
      }
    }
  }
}
</style>
