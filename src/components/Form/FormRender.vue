<template>
  <div class="FormRender">
    <div class="FormMainContainer">
      <el-form :model="data" label-width="90px" ref="FormElement" class="FormContentContainer">
        <slot></slot>
      </el-form>
    </div>
    <div class="FormFooterContainer">
      <slot name="footer">
        <ButtonSubmit :onClick="handleSubmit">提交</ButtonSubmit>
        <ButtonSubmit :onClick="handleReset" type="" style="margin-left: 8px">重置</ButtonSubmit>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormRender extends Vue {
  readonly $refs!: {
    FormElement: any;
  }

  @Prop()
  data!: object

  @Prop()
  onSubmit!: Function

  private handleSubmit () {
    return Promise.resolve()
      .then(() => this.$refs.FormElement.validate())
      .then(() => {
        if (this.onSubmit) {
          return this.onSubmit()
        }
      })
  }

  private handleReset () {
    this.$refs.FormElement.resetFields()
    this.$emit('formReset')
  }

  public validateField (props: string | string[]) {
    this.$refs.FormElement.validateField(props)
  }
}
</script>

<style lang="scss">
.FormRender {
  height: 100%;
  display: flex;
  flex-direction: column;
  .FormFooterContainer {
    background: #f4f4f4;
    text-align: center;
    padding: 15px 0;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .FormMainContainer {
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1 1 0;
  }
  .FormContentContainer {
    margin: 0 auto;
  }
}
</style>
