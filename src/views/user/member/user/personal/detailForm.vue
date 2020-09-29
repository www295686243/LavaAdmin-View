<template>
  <FormRender :form="form" :Service="Service">
    <InnerDetailForm :form="form"></InnerDetailForm>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Service from './Service'
import RouterService from '@/service/RouterService'
import InnerDetailForm from './innerDetailForm.vue'

@Component({
  components: {
    InnerDetailForm
  }
})
export default class ViewHrJobForm extends Vue {
  private Service = Service
  private form = {
    id: RouterService.query('id'),
    avatar: '',
    tags: '',
    education_experience: [],
    work_experience: [],
    honorary_certificate: []
  }
}
</script>
