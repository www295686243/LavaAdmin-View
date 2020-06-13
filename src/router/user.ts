// 职位
import position from '@/views/user/admin/position/index.vue'
import positionForm from '@/views/user/admin/position/form.vue'
import positionPermissions from '@/views/user/admin/position/permissions.vue'
// 员工
import employee from '@/views/user/admin/employee/index.vue'
import employeeForm from '@/views/user/admin/employee/form.vue'

export default [
  // 职位
  {
    path: '/user/admin/position',
    component: position
  },
  {
    path: '/user/admin/position/form',
    component: positionForm
  },
  {
    path: '/user/admin/position/permissions',
    component: positionPermissions,
    meta: {
      title: '权限管理'
    }
  },
  // 员工
  {
    path: '/user/admin/employee',
    component: employee
  },
  {
    path: '/user/admin/employee/form',
    component: employeeForm
  }
]
