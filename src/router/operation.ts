import CouponTemplate from '@/views/operation/coupon/coupon-template/index.vue'
import CouponTemplateForm from '@/views/operation/coupon/coupon-template/form.vue'

import Coupon from '@/views/operation/coupon/coupon/index.vue'

import OptionsConfig from '@/views/options-config/index.vue'
import OptionsConfigForm from '@/views/options-config/form.vue'
import OptionsConfigOptions from '@/views/options-config/options/index.vue'
import OptionsConfigOptionsForm from '@/views/options-config/options/form.vue'

export default [
  {
    path: '/operation/coupon/coupon-template',
    component: CouponTemplate
  },
  {
    path: '/operation/coupon/coupon-template/form',
    component: CouponTemplateForm
  },
  {
    path: '/operation/coupon/coupon',
    component: Coupon
  },
  {
    path: '/operation/options/config',
    component: OptionsConfig
  },
  {
    path: '/operation/options/config/form',
    component: OptionsConfigForm
  },
  {
    path: '/operation/options/config/config-options',
    component: OptionsConfigOptions,
    meta: {
      title: '选项配置'
    }
  },
  {
    path: '/operation/options/config/config-options/form',
    component: OptionsConfigOptionsForm,
    meta: {
      title: '选项配置'
    }
  }
]
