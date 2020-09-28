import job from '@/views/hr/hr-job/index.vue'
import jobForm from '@/views/hr/hr-job/form.vue'
import resume from '@/views/hr/hr-resume/index.vue'
import resumeForm from '@/views/hr/hr-resume/form.vue'
import infoCheck from '@/views/info/info-check/index.vue'
import infoCheckForm from '@/views/info/info-check/form.vue'

export default [
  {
    path: '/hr/job',
    component: job
  },
  {
    path: '/hr/job/form',
    component: jobForm
  },
  {
    path: '/hr/resume',
    component: resume
  },
  {
    path: '/hr/resume/form',
    component: resumeForm
  },
  {
    path: '/hr/info-check',
    component: infoCheck
  },
  {
    path: '/hr/info-check/form',
    component: infoCheckForm
  }
]
