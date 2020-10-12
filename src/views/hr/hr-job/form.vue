<template>
  <FormRender :form="form" :Service="Service">
    <InnerForm :form="form"></InnerForm>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import ConstService from '@/service/ConstService'
import InnerForm from './innerForm.vue'

@Component({
  components: {
    InnerForm
  }
})
export default class ViewHrJobForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    title: '',
    company_name: '',
    monthly_pay_min: '',
    monthly_pay_max: '',
    monthly_range: '1',
    is_negotiate: 0,
    recruiter_number: 1,
    education: '',
    seniority: '',
    treatment: '',
    treatment_input: '',
    city: '',
    address: '',
    end_time: '',
    contacts: '',
    phone: RouterService.query('phone'),
    status: ConstService.getOptionsValue(50, '已发布'),
    is_other_user: 0,
    provide_user_id: RouterService.query('provide_user_id'),
    description: RouterService.query('description'),
    is_push: 0,
    industry: [],
    info_provide_id: RouterService.query('info_provide_id')
  }
}
</script>
