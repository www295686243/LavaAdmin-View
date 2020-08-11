<template>
  <div class="FormGroupRender">
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
      <template v-for="(v, index) in innerValue">
        <div :key="index" class="FormGroup-item">
          <el-form label-width="90px" ref="formElement" :model="v">
            <slot :index="index" :v="v"></slot>
            <ButtonDelete class="card-delete-btn" :onClick="() => removeGroup(index)">删除</ButtonDelete>
          </el-form>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref, Watch } from 'vue-property-decorator'

interface FormElement {
  validate: Function;
  validateField: Function;
  resetFields: Function;
  clearValidate: Function;
}

@Component({
  name: 'FormGroupRender'
})
export default class FormGroupRender extends Vue {
  @Ref()
  formElement!: FormElement[]

  @Prop()
  title!: string

  @Prop({ default: () => [] })
  value!: any[]

  @Prop()
  initData!: { [key: string]: any }

  @Watch('innerValue')
  onInnerValue (val: any[]) {
    this.$emit('input', val)
  }

  private innerValue: any[] = this.value || []

  private createGroup () {
    return this.validate()
      .then(() => {
        this.innerValue.push(JSON.parse(JSON.stringify(this.initData)))
      })
  }

  private removeGroup (index: number) {
    this.innerValue.splice(index, 1)
  }

  public validate () {
    return (this.formElement || []).reduce((acc, form) => {
      return acc.then(() => form.validate())
    }, Promise.resolve())
  }
}
</script>

<style lang="scss">
.FormGroupRender {
  .card-header-action {
    text-align: right;
  }
  .FormGroup-item {
    padding: 16px 0;
    position: relative;
    border-bottom: 1px solid #eee;
  }
  .card-delete-btn {
    position: absolute;
    right: 0;
    top: 16px;
  }
  & + .FormGroupRender {
    margin-top: 16px;
  }
}
</style>
