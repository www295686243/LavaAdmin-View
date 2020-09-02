<template>
  <DataRender :onLoad="handleLoad">
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
      <el-card header="菜单" style="margin-top: 20px">
        <FormTree
          ref="menuTreeElement"
          :treeList="menus"
          :defaultCheckedKeys="menuPermissions">
        </FormTree>
      </el-card>
    </div>
    <template slot="footer">
      <ButtonSubmit :onClick="handleSubmit">提交</ButtonSubmit>
    </template>
  </DataRender>
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
export default class ViewUserAdminPositionPermission extends Vue {
  $refs!: {
    menuTreeElement: any;
    interfaceTreeElement: any;
  }

  private interface: any[] = []
  private interfacePermissions: any[] = []
  private menus: any[] = []
  private menuPermissions: number[] = []
  private handleLoad () {
    return Service.getPermissions(RouterService.query('id'))
      .then((res) => {
        this.interface = res.data.interface
        this.interfacePermissions = res.data.interface_permissions
        this.menus = res.data.menus
        this.menuPermissions = res.data.menu_permissions
      })
  }

  private handleSubmit () {
    const menus = this.$refs.menuTreeElement.getCheckedNodeIds()
    const permissions = this.$refs.interfaceTreeElement.getCheckedNodeIds()
    return Service.updatePermissions(RouterService.query('id'), {
      permissions,
      menus
    })
      .then(() => {
        RouterService.go()
      })
  }
}
</script>

<style lang="scss">
</style>
