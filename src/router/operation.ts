import CouponTemplate from '@/views/operation/coupon-template/index.vue'
import CouponTemplateForm from '@/views/operation/coupon-template/form.vue'

import Coupon from '@/views/operation/coupon/index.vue'

import task from '@/views/operation/task/index.vue'
import taskForm from '@/views/operation/task/form.vue'
import taskRule from '@/views/operation/task/rules/index.vue'
import taskRuleForm from '@/views/operation/task/rules/form.vue'

import taskRecord from '@/views/operation/task-record/index.vue'

export default [
  {
    path: '/operation/coupon-template',
    component: CouponTemplate
  },
  {
    path: '/operation/coupon-template/form',
    component: CouponTemplateForm
  },
  {
    path: '/operation/coupon',
    component: Coupon
  },
  {
    path: '/operation/task',
    component: task
  },
  {
    path: '/operation/task/form',
    component: taskForm
  },
  {
    path: '/operation/task/rules',
    component: taskRule,
    meta: {
      title: '规则与奖励'
    }
  },
  {
    path: '/operation/task/rules/form',
    component: taskRuleForm,
    meta: {
      title: '规则'
    }
  },
  {
    path: '/operation/task-record',
    component: taskRecord
  }
]
