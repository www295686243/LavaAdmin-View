<template>
  <div class="FormContainer">
    <el-form :model="data" label-width="90px" ref="FormElement">
      <slot></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormContainer extends Vue {
  readonly $refs!: {
    FormElement: any;
  }

  @Prop()
  data!: object

  public validate () {
    return this.$refs.FormElement.validate()
  }

  public validateField (props: string | string[]) {
    this.$refs.FormElement.validateField(props)
  }
}
</script>
