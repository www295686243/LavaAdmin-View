import config from '@/views/system/config/config/index.vue'
import configForm from '@/views/system/config/config/form.vue'

import configOption from '@/views/system/config/config-options/index.vue'
import configOptionForm from '@/views/system/config/config-options/form.vue'

import adminLog from '@/views/system/admin-log/index.vue'

export default [
  {
    path: '/system/config/config',
    component: config
  },
  {
    path: '/system/config/config/form',
    component: configForm
  },
  {
    path: '/system/config/config-option',
    component: configOption
  },
  {
    path: '/system/config/config-option/form',
    component: configOptionForm
  },
  {
    path: '/system/admin-log',
    component: adminLog
  }
]
