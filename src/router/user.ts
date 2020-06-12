import position from '@/views/user/admin/position/index.vue'
import positionForm from '@/views/user/admin/position/form.vue'
import positionPermissions from '@/views/user/admin/position/permissions.vue'

export default [
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
  }
]
