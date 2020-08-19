<template>
  <DataRender class="FormRender" :onLoad="handleLoad">
    <div class="FormMainContainer">
      <el-form :model="data" label-width="100px" ref="FormElement" class="FormContentContainer">
        <slot></slot>
      </el-form>
    </div>
    <slot name="footer">
      <div class="FormFooterContainer">
        <ButtonSubmit :onClick="handleSubmit">提交</ButtonSubmit>
        <ButtonSubmit :onClick="handleSubmitAndBack">提交并返回</ButtonSubmit>
        <ButtonSubmit :onClick="handleReset" type="" style="margin-left: 8px">重置</ButtonSubmit>
      </div>
    </slot>
  </DataRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IService, IResult } from '@/interface/common'
import RouterService from '@/service/RouterService'
import DataRender from '@/components/DataRender.vue'

@Component({
  components: {
    DataRender
  }
})
export default class FormRender extends Vue {
  readonly $refs!: {
    FormElement: any;
  }

  @Prop()
  data!: any

  @Prop()
  onSubmit!: Function

  @Prop()
  onLoad!: Function

  @Prop()
  Service!: IService

  private handleLoad () {
    return Promise.resolve()
      .then(() => {
        if (this.onLoad) {
          return this.onLoad()
        } else {
          if (this.data.id && this.Service.show) {
            return this.Service.show(this.data.id)
              .then((res: IResult) => {
                Object.assign(this.data, res.data)
              })
          }
        }
      })
  }

  private handleSubmit () {
    return this.validate()
      .then(() => {
        if (this.onSubmit) {
          return this.onSubmit()
        } else {
          return Promise.resolve()
            .then(() => {
              if (this.data.id) {
                return this.Service.update(this.data)
              } else {
                return this.Service.store(this.data)
              }
            })
        }
      })
  }

  private validate () {
    return this.$refs.FormElement.validate()
      .then(() => {
        return (this.$refs.FormElement.$children as any[]).reduce((acc, element) => {
          return acc.then(() => {
            if (element.$options._componentTag === 'FormGroupRender') {
              return element.validate()
            }
          })
        }, Promise.resolve())
      })
  }

  private handleSubmitAndBack () {
    return this.handleSubmit()
      .then((res: IResult) => {
        RouterService.go()
        return res
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
