import job from '@/views/hr/hr-job/index.vue'
import jobForm from '@/views/hr/hr-job/form.vue'
import resume from '@/views/hr/hr-resume/index.vue'
import resumeForm from '@/views/hr/hr-resume/form.vue'

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
  }
]
