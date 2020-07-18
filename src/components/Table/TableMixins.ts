import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormMixins extends Vue {
  @Prop()
  prop!: string

  @Prop()
  label!: string

  @Prop()
  width!: number

  @Prop()
  minWidth!: number

  @Prop()
  align!: string

  @Prop({
    default: () => {
      return {}
    }
  })
  props!: { label: string; value: any }
}
