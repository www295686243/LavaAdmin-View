<template>
  <FormRender :form="form" :Service="Service">
    <InnerForm :form="form"></InnerForm>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import InnerForm from './innerForm.vue'

@Component({
  components: {
    InnerForm
  }
})
export default class ViewHrResumeForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    title: '',
    monthly_salary_min: '',
    monthly_salary_max: '',
    monthly_range: '1',
    is_negotiate: 0,
    education: '',
    seniority: '',
    treatment: '',
    treatment_input: '',
    city: '',
    end_time: '',
    contacts: RouterService.query('contacts'),
    phone: RouterService.query('phone'),
    status: Service.getStatusValue(1, '已发布'),
    provide_user_id: RouterService.query('provide_user_id'),
    description: RouterService.query('description'),
    is_push: 0,
    industry: [],
    info_provide_id: RouterService.query('info_provide_id')
  }
}
</script>
