<template>
  <div class="FormMultipleGroupPopup">
    <el-card>
      <div slot="header">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col>
            {{title}}
          </el-col>
          <el-col class="card-header-action">
            <ButtonSubmit :onClick="createGroup">添加</ButtonSubmit>
          </el-col>
        </el-row>
      </div>
      <template v-for="(list, index) in innerExportValue">
        <div :key="index">
          <el-divider v-if="index > 0">并且</el-divider>
          <el-row :gutter="60">
            <el-col :span="8" v-for="(item, key) in list" :key="key" class="FormGroup-col">
              <div :key="index" class="FormGroup-item">
                <FormText label-width="68px" :value="getValue(item, field)" :field="field" v-for="field in fields" :key="field.prop"></FormText>
              </div>
            </el-col>
          </el-row>
          <div class="FormGroup-footer">
            <ButtonSubmit size="mini" :onClick="() => handleEdit(index)">编辑</ButtonSubmit>
            <ButtonDelete size="mini" type="danger" :onClick="() => handleDelete(index)">删除</ButtonDelete>
          </div>
        </div>
      </template>
    </el-card>
    <el-dialog
      :visible.sync="isShowDialog"
      v-if="isShowDialog"
      :close-on-click-modal="false"
      custom-class="FormMultipleGroupDialog"
      :append-to-body="true"
      :destroy-on-close="true"
      @close="handleClose"
      width="600px">
      <FormGroupRender :title="title" :initForm="innerForm" v-model="innerValue" ref="formGroupRenderElement">
        <template v-slot="{ v }">
          <slot :v="v"></slot>
        </template>
      </FormGroupRender>
      <div class="FormMultipleGroupDialog-footer" slot="footer">
        <ButtonSubmit :onClick="handleSubmit">确定</ButtonSubmit>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { IFormFieldItem, IFormFields } from '@/interface/common'
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'

interface FormElement {
  validate: Function;
}

@Component({
  name: 'FormMultipleGroupPopup'
})
export default class FormMultipleGroupPopup extends Vue {
  @Ref()
  formGroupRenderElement!: FormElement

  @Prop()
  title!: string

  @Prop({ default: () => [] })
  value!: any[]

  @Prop()
  initForm!: { [key: string]: any }

  @Prop()
  fields!: IFormFields[]

  private innerExportValue: any[] = this.value || []
  private innerValue: any[] = []
  private isShowDialog = false
  private innerForm = {}
  private editIndex = -1

  private createGroup () {
    Object.keys(this.initForm).forEach((key) => {
      this.$set(this.innerForm, key, this.initForm[key])
    })
    this.innerValue.push(this.innerForm)
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
    return this.formGroupRenderElement.validate()
      .then(() => {
        if (this.editIndex === -1) {
          this.innerExportValue.push(JSON.parse(JSON.stringify(this.innerValue)))
        } else {
          this.innerExportValue[this.editIndex] = JSON.parse(JSON.stringify(this.innerValue))
        }
        this.innerValue = []
        this.innerForm = {}
        this.editIndex = -1
        this.isShowDialog = false
      })
  }

  private handleDelete (index: number) {
    return Promise.resolve()
      .then(() => {
        this.innerExportValue.splice(index, 1)
      })
  }

  private handleEdit (index: number) {
    this.editIndex = index
    Object.keys(this.initForm).forEach((key) => {
      this.$set(this.innerForm, key, this.initForm[key])
    })
    this.innerValue = JSON.parse(JSON.stringify(this.innerExportValue[index]))
    this.isShowDialog = true
  }

  private handleClose () {
    this.editIndex = -1
    this.innerForm = {}
    this.innerValue = []
  }
}
</script>

<style lang="scss">
.FormMultipleGroupPopup {
  .card-header-action {
    text-align: right;
  }
  .FormGroup-item {
    .el-form-item:last-child {
      margin-bottom: 0;
    }
  }
  .FormGroup-col {
    margin-top: 20px;
  }
  .FormGroup-col:not(:last-child) {
    position: relative;
    &:before {
      content: ' ';
      position: absolute;
      right: 0;
      height: 100%;
      width: 1px;
      background: #EBEEF5;
    }
    &:after {
      position: absolute;
      content: '或者';
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      width: 12px;
      background: #fff;
    }
  }
  .FormGroup-footer {
    text-align: right;
    margin-top: 10px;
    .ButtonSubmit {
      margin-right: 10px;
    }
  }
}
.FormMultipleGroupDialog {
  .el-dialog__body {
    height: 50vh;
    overflow-y: auto;
  }
  .FormMultipleGroupDialog-footer {
    text-align: right;
  }
}
</style>
