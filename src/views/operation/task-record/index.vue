<template>
  <el-tabs v-model="activeName" tab-position="left" class="view-user-form">
    <el-tab-pane :label="v.title" :name="v.name" v-for="v in taskList" :key="v.id" lazy><Table :isShowInfo="v.isShowInfo" :taskId="v.id"></Table></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import cache from '@/plugins/cache'
import { Component, Vue } from 'vue-property-decorator'
import Table from './components/table.vue'

@Component({
  components: {
    Table
  }
})
export default class ViewOperationTaskRecordIndex extends Vue {
  private taskList = [] as any[]
  private activeName = ''

  created () {
    this.taskList = (cache.config.get('task') || []).map((res: any) => {
      res.name = res.id.toString()
      res.isShowInfo = [1, 8, 9].includes(res.id)
      return res
    })
    this.activeName = this.taskList[0].name
  }
}
</script>
