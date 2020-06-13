// 职位
import position from '@/views/user/admin/position/index.vue'
import positionForm from '@/views/user/admin/position/form.vue'
import positionPermissions from '@/views/user/admin/position/permissions.vue'
// 员工
import employee from '@/views/user/admin/employee/index.vue'
import employeeForm from '@/views/user/admin/employee/form.vue'
// 会员
import user from '@/views/user/member/user/index.vue'
import userForm from '@/views/user/member/user/form.vue'
// 角色
import role from '@/views/user/member/role/index.vue'
import roleForm from '@/views/user/member/role/form.vue'
import rolePermissions from '@/views/user/member/role/permissions.vue'

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
  },
  // 会员
  {
    path: '/user/member/user',
    component: user
  },
  {
    path: '/user/member/user/form',
    component: userForm
  },
  // 角色
  {
    path: '/user/member/role',
    component: role
  },
  {
    path: '/user/member/role/form',
    component: roleForm
  },
  {
    path: '/user/member/role/permissions',
    component: rolePermissions,
    meta: {
      title: '权限管理'
    }
  }
]
