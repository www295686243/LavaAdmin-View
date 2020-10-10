<template>
  <div class="FormGroupPopup">
    <el-card>
      <div slot="header">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col>
            {{title}}
          </el-col>
          <el-col class="header-action">
            <ButtonSubmit :onClick="createGroup">添加</ButtonSubmit>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="60">
        <el-col :span="24 / col" v-for="(v, index) in innerValue" :key="index" class="FormGroup-col">
          <FormText label-width="82px" :value="getValue(v, field)" :field="field" v-for="field in fields" :key="field.prop"></FormText>
          <div class="FormGroup-footer">
            <ButtonSubmit size="mini" :onClick="() => handleEdit(index)">编辑</ButtonSubmit>
            <ButtonDelete size="mini" type="danger" :onClick="() => handleDelete(index)">删除</ButtonDelete>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      :visible.sync="isShowDialog"
      v-if="isShowDialog"
      :close-on-click-modal="false"
      custom-class="FormGroupDialog"
      :append-to-body="true"
      :destroy-on-close="true"
      @close="handleClose"
      width="600px">
      <FormRender :form="innerForm" :onSubmit="handleSubmit" :disableSubmitAndBackBtn="true">
        <slot :v="innerForm"></slot>
      </FormRender>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { IFormFieldItem, IFormFields } from '@/interface/common'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'FormGroupPopup'
})
export default class FormGroupPopup extends Vue {
  @Prop()
  title!: string

  @Prop({ default: () => [] })
  value!: any[]

  @Prop()
  initForm!: { [key: string]: any }

  @Prop()
  fields!: IFormFields[]

  @Prop({ default: 3 })
  col!: number

  private innerValue: any[] = this.value || []
  private isShowDialog = false
  private innerForm = {}
  private editIndex = -1

  private createGroup () {
    Object.keys(this.initForm).forEach((key) => {
      this.$set(this.innerForm, key, this.initForm[key])
    })
    this.isShowDialog = true
  }

  private getValue (row: any, field: IFormFieldItem) {
    let value = ''
    if (field.valueFormat) {
      value = field.valueFormat
      Object.keys(row).forEach((key) => {
        value = value.replace(key, row[key])
      })
      return value
    } else if (field.options) {
      const innerValue = row[field.prop as string]
      const optionItem = field.options.find((res) => res.id === innerValue)
      return optionItem.display_name
    } else {
      const innerValue = row[field.prop as string]
      if (Array.isArray(innerValue) && (field.prop as string).includes('images')) {
        return innerValue.length + '张图片'
      } else {
        return innerValue
      }
    }
  }

  private handleSubmit () {
    return Promise.resolve()
      .then(() => {
        if (this.editIndex === -1) {
          this.innerValue.push(JSON.parse(JSON.stringify(this.innerForm)))
        } else {
          Object.assign(this.innerValue[this.editIndex], this.innerForm)
        }
        this.editIndex = -1
        this.isShowDialog = false
      })
  }

  private handleDelete (index: number) {
    return Promise.resolve()
      .then(() => {
        this.innerValue.splice(index, 1)
      })
  }

  private handleEdit (index: number) {
    this.editIndex = index
    Object.assign(this.innerForm, this.innerValue[index])
    this.isShowDialog = true
  }

  private handleClose () {
    this.editIndex = -1
  }
}
</script>

<style lang="scss">
.FormGroupPopup {
  .header-action {
    text-align: right;
  }
  .FormGroup-footer {
    text-align: right;
    .ButtonSubmit {
      margin-right: 10px;
    }
  }
  .FormGroup-col:not(:first-child) {
    margin-top: 24px;
  }
}
.FormGroupDialog {
  .el-dialog__body {
    height: 50vh;
    overflow-y: auto;
  }
}
</style>
