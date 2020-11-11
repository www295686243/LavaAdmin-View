import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { IFormFieldItem } from '@/interface/common'

@Component
export default class FormMixins extends Vue {
  @Prop()
  field!: IFormFieldItem

  @Prop()
  value!: any

  public innerValue: any = (this.value === undefined || this.value === null) ? '' : this.value

  @Watch('value')
  onValue (val: any) {
    this.innerValue = val
  }

  @Watch('innerValue')
  onInnerValue (val: any) {
    this.$emit('input', val)
  }
}
