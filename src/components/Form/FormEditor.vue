<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule">
    <VueNeditorWrap v-model="innerValue" :config="editorConfig" :destroy="false" @ready="editorReady" @beforeInit="editorBeforeInit" ref="NEditor"></VueNeditorWrap>
  </el-form-item>
</template>

<script lang="ts">
import FormMixins from './FormMixins'
import { Component, Mixins, Inject, Prop } from 'vue-property-decorator'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VueNeditorWrap from 'vue-neditor-wrap-wx'
import ImageManageService from '@/service/ImageManageService/Service'
import { IService } from '@/interface/common'

@Component({
  components: {
    VueNeditorWrap
  }
})
export default class FormEditor extends Mixins(FormMixins) {
  readonly $refs!: {
    NEditor: any;
  }

  @Inject('formService')
  formService!: IService

  @Prop()
  fieldService!: IService

  private ImageManageService!: ImageManageService

  private editor!: any

  private editorConfig = {
    // 你的UEditor资源存放的路径,相对于打包后的index.html
    UEDITOR_HOME_URL: '/NEditor/',
    // 编辑器不自动被内容撑高
    autoHeightEnabled: false,
    // 初始容器高度
    initialFrameHeight: 240,
    // 初始容器宽度
    initialFrameWidth: '100%',
    // 关闭自动保存
    enableAutoSave: false,
    toolbars: [
      [
        'fullscreen',
        'source',
        'undo',
        'redo',
        'bold',
        'italic',
        'underline',
        'fontborder',
        'strikethrough',
        'superscript',
        'subscript',
        'removeformat',
        'searchreplace',
        'autotypeset',
        'blockquote',
        'pasteplain',
        'forecolor',
        'backcolor',
        'insertorderedlist',
        'insertunorderedlist',
        'lineheight',
        'paragraph',
        'fontfamily',
        'fontsize',
        'indent',
        'justifyleft',
        'justifycenter',
        'justifyright',
        'justifyjustify',
        'link',
        'insertimage',
        'insertimages',
        'attachment',
        'horizontal'
      ],
      [
        'inserttable',
        'deletetable',
        'insertparagraphbeforetable',
        'insertrow',
        'deleterow',
        'insertcol',
        'deletecol',
        'mergecells',
        'mergeright',
        'mergedown',
        'splittocells',
        'splittorows',
        'splittocols'
      ]
    ]
  }

  private handleChangeModal () {
    const modelName = this.fieldService ? this.fieldService.getModelName() : this.formService.getModelName()
    return this.ImageManageService.open('multiple', modelName)
      .then((data: object[]) => {
        const imgs = data.map((res: any) => res.full_url)
          .map((img: string) => '<p><img src="' + img + '" /></p>')
          .join('')
        this.editor.execCommand('inserthtml', imgs)
      })
  }

  private editorReady (editor: any) {
    this.editor = editor
  }

  private editorBeforeInit () {
    this.$refs.NEditor.registerButton({
      name: 'insertimages',
      icon: require('@/assets/images/editor-images.png'),
      tip: '图片上传',
      handler: () => this.handleChangeModal()
    })
  }

  created () {
    this.innerValue = this.innerValue || ''
    this.ImageManageService = new ImageManageService()
  }
}
</script>

<style lang="scss">
#edui107.edui-for-insertimage {
  display: none !important;
}
</style>
