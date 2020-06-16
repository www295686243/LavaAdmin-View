<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormImage">
    <div class="cover-controller" v-if="innerValue">
      <div class="cover-img">
        <el-image :src="innerValue" fit="cover"></el-image>
        <div class="cover-action">
          <i class="el-icon-close" @click="handleRemove"></i>
        </div>
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

@Component
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
      width: 150px;
      height: 150px;
      .el-image {
        width: 100%;
        height: 100%;
      }
      &:hover {
        .cover-action {
          display: block;
        }
      }
    }
    .cover-action {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, .6);
      text-align: center;
      i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 50px;
        cursor: pointer;
      }
    }
  }
}
</style>
