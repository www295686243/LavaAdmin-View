import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class SearchMixins extends Vue {
  @Prop()
  value!: any

  @Prop()
  operator!: string

  @Prop()
  type!: string

  public innerValue: any = this.value === undefined ? '' : this.value

  @Watch('value')
  onValue (val: any) {
    this.innerValue = val
  }

  @Watch('innerValue')
  onInnerValue (val: any) {
    this.$emit('input', val)
  }
}
