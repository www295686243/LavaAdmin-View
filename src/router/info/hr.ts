import job from '@/views/hr/hr-job/index.vue'
import jobForm from '@/views/hr/hr-job/form.vue'
import resume from '@/views/hr/hr-resume/index.vue'
import resumeForm from '@/views/hr/hr-resume/form.vue'
import infoCheck from '@/views/info/info-check/index.vue'
import infoCheckForm from '@/views/info/info-check/form.vue'
import infoComplaint from '@/views/info/info-complaint/index.vue'
import infoComplaintForm from '@/views/info/info-complaint/form.vue'
import infoProvide from '@/views/info/info-provide/index.vue'
import infoProvideForm from '@/views/info/info-provide/form.vue'
import infoDelivery from '@/views/info/info-delivery/index.vue'

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
  },
  {
    path: '/hr/info-complaint',
    component: infoComplaint
  },
  {
    path: '/hr/info-complaint/form',
    component: infoComplaintForm
  },
  {
    path: '/hr/job-provide',
    component: infoProvide
  },
  {
    path: '/hr/job-provide/form',
    component: infoProvideForm
  },
  {
    path: '/hr/resume-provide',
    component: infoProvide
  },
  {
    path: '/hr/resume-provide/form',
    component: infoProvideForm
  },
  {
    path: '/hr/info-delivery',
    component: infoDelivery
  }
]
