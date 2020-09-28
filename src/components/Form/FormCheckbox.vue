<template>
  <el-form-item :label="field.label" :prop="field.prop" :rules="field.rule" class="FormCheckbox">
    <el-checkbox-group v-model="innerValue">
      <el-checkbox :label="v[props.value]" v-for="v in options" :key="v[props.value]" :disabled="field.disabled">{{v[props.label]}}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script lang="ts">
import { Component, Vue, Inject, Watch, Prop } from 'vue-property-decorator'
import { IService, IOptions, IFormFieldItem } from '@/interface/common'
import ConstService from '@/service/ConstService'

@Component
export default class FormCheckbox extends Vue {
  @Inject('formService')
  formService!: IService

  @Prop()
  fieldService!: IService

  @Prop()
  field!: IFormFieldItem

  @Prop()
  value!: any

  // value-array, label-array, value-string, label-string
  @Prop({ default: 'value-array' })
  type!: string

  @Watch('value')
  onValue (val: string | number[] | string[]) {
    this.setInnerValue(val)
  }

  @Watch('innerValue')
  onInnerValue (val: number[] | string[]) {
    this.setValue(val)
  }

  private props = {
    value: 'id',
    label: 'display_name'
  }

  private options = [] as IOptions[]
  private innerValue: string[] | number[] = []

  private setInnerValue (value: string | number[] | string[]) {
    if (this.type === 'value-string' || this.type === 'label-string') {
      if (Array.isArray(value)) {
        console.error(`${this.type}：数据格式错误`)
      }
      this.innerValue = (value as string).split(',').filter((res) => res)
    } else {
      this.innerValue = JSON.parse(JSON.stringify(value))
    }
  }

  private setValue (value: string[] | number[]) {
    let innerValue!: string | number[] | string[]
    if (this.type === 'value-string' || this.type === 'label-string') {
      innerValue = value.join()
    } else {
      innerValue = JSON.parse(JSON.stringify(value))
    }
    this.$emit('input', innerValue)
  }

  created () {
    this.setInnerValue(this.value)
    Object.assign(this.props, this.field.props)
    if (this.type === 'label-array' || this.type === 'label-string') {
      Object.assign(this.props, { value: this.props.label, label: this.props.label })
    }
    if (this.field.options) {
      this.options = this.field.options
    } else {
      const modelName = this.fieldService ? this.fieldService.getModelName() : this.formService.getModelName()
      this.options = ConstService.getOptions(modelName + ':' + this.field.prop)
      if (this.options.length === 0) {
        this.options = ConstService.getGlobalOptions(this.field.prop as string)
      }
    }
  }
}
</script>

<style lang="scss">
.FormCheckbox {
  margin-bottom: 0px;
}
</style>
