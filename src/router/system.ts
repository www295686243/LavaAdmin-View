import config from '@/views/system/config/index.vue'
import configForm from '@/views/system/config/form.vue'

import adminLog from '@/views/system/admin-log/index.vue'

export default [
  {
    path: '/system/config',
    component: config
  },
  {
    path: '/system/config/form',
    component: configForm
  },
  {
    path: '/system/admin-log',
    component: adminLog
  }
]
