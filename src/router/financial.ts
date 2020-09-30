import cashApply from '@/views/financial/cash-apply/index.vue'
import cashApplyForm from '@/views/financial/cash-apply/form.vue'
import cashApprove from '@/views/financial/cash-approve/index.vue'
import cashApproveForm from '@/views/financial/cash-approve/form.vue'

export default [
  {
    path: '/financial/cash-apply',
    component: cashApply
  },
  {
    path: '/financial/cash-apply/form',
    component: cashApplyForm
  },
  {
    path: '/financial/cash-approve',
    component: cashApprove
  },
  {
    path: '/financial/cash-approve/form',
    component: cashApproveForm
  }
]
