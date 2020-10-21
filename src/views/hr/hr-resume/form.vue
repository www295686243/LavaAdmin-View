<template>
  <FormRender :form="form" :Service="Service">
    <InnerForm :form="form"></InnerForm>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import FormSalary from '@/components/Form/FormSalary.vue'
import InnerForm from './innerForm.vue'

@Component({
  components: {
    FormSalary,
    InnerForm
  }
})
export default class ViewHrResumeForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    title: '',
    monthly_pay_min: '',
    monthly_pay_max: '',
    monthly_range: '1',
    is_negotiate: 0,
    education: '',
    seniority: '',
    treatment: '',
    treatment_input: '',
    city: '',
    end_time: '',
    contacts: '',
    phone: RouterService.query('phone'),
    status: Service.getStatusValue(1, '已发布'),
    is_other_user: 0,
    provide_user_id: RouterService.query('provide_user_id'),
    description: RouterService.query('description'),
    industry: [],
    is_force_show_user_info: 0
  }
}
</script>
