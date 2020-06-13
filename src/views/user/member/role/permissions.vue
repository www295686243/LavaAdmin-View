<template>
  <PageContainer :onLoad="handleLoad">
    <div class="interface-permissions">
      <el-card header="权限">
        <FormTree
          :maxDeep="4"
          ref="interfaceTreeElement"
          :treeList="interface"
          node-key="name"
          :defaultCheckedKeys="interfacePermissions">
        </FormTree>
      </el-card>
    </div>
    <template slot="footer">
      <ButtonSubmit :onClick="handleSubmit">提交</ButtonSubmit>
    </template>
  </PageContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RouterService from '@/service/RouterService'
import Service from './Service'
import FormTree from '@/components/Form/FormTree.vue'

@Component({
  components: {
    FormTree
  }
})
export default class ViewUserMemberRolePermission extends Vue {
  $refs!: {
    interfaceTreeElement: any;
  }

  private interface: any[] = []
  private interfacePermissions: any[] = []
  private handleLoad () {
    return Service.getPermissions(RouterService.query('id') as number)
      .then((res) => {
        this.interface = res.data.interface
        this.interfacePermissions = res.data.interface_permissions
      })
  }

  private handleSubmit () {
    const permissions = this.$refs.interfaceTreeElement.getCheckedNodeIds()
    return Service.updatePermissions(RouterService.query('id') as number, {
      permissions
    })
      .then(() => {
        RouterService.go()
      })
  }
}
</script>

<style lang="scss">
</style>
