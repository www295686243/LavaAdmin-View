<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormImage">
    <div class="cover-controller" v-if="innerValue">
      <ImageMaskContainer v-model="innerValue"></ImageMaskContainer>
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
import ImageMaskContainer from '@/components/ImageMaskContainer.vue'

@Component({
  components: {
    ImageMaskContainer
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

  created () {
    this.ImageManageService = new ImageManageService()
  }
}
</script>

<style lang="scss" scoped>
.FormImage {
  .cover-controller {
    margin-bottom: 5px;
  }
}
</style>
