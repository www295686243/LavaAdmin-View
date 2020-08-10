<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormImages">
    <el-row :gutter="8" class="images-container" v-if="innerValue.length > 0">
      <el-col :span="4" v-for="(img, index) in innerValue" :key="index">
        <div class="cover-img">
          <ImageMaskContainer v-model="innerValue" :index="index" size="auto"></ImageMaskContainer>
        </div>
      </el-col>
    </el-row>
    <div>
      <ButtonSubmit icon="el-icon-picture-outline" :onClick="handleChangeModal">添加图片</ButtonSubmit>
    </div>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins } from 'vue-property-decorator'
import ImageManageService from '@/service/ImageManageService/Service'
import CarouselService from '@/service/CarouselService/Service'
import ImageMaskContainer from '@/components/ImageMaskContainer.vue'

@Component({
  components: {
    ImageMaskContainer
  }
})
export default class FormImages extends Mixins(FormMixins) {
  private ImageManageService!: ImageManageService

  private handleChangeModal () {
    return this.ImageManageService.open('multiple')
      .then((data: { full_url: string }[]) => {
        const imgs = data.map((res) => res.full_url)
        this.innerValue = this.innerValue.concat(imgs)
      })
      .catch((err: object) => console.log(err))
  }

  private handleRemove (index: number) {
    this.innerValue.splice(index, 1)
  }

  private handleViewImages (index: number) {
    CarouselService.open(this.innerValue, {
      autoplay: false,
      index
    })
  }

  created () {
    this.innerValue = this.innerValue || []
    this.ImageManageService = new ImageManageService()
  }
}
</script>

<style lang="scss">
.FormImages {
  .images-container {
    line-height: normal;
    margin-bottom: 5px;
    overflow: hidden;
    .el-col {
      margin-top: 8px;
    }
    .cover-img {
      position: relative;
      cursor: pointer;
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .el-image {
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
