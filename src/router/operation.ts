import CouponTemplate from '@/views/operation/coupon/coupon-template/index.vue'
import CouponTemplateForm from '@/views/operation/coupon/coupon-template/form.vue'

import Coupon from '@/views/operation/coupon/coupon/index.vue'

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
  }
]
