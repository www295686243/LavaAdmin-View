<template>
  <div class="view-login">
    <el-card style="width: 250px;">
      <div slot="header">
        <span>管理员登录</span>
      </div>
      <el-form label-width="60px" :model="form">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <ButtonSubmit :long="true" :onClick="handleSubmit">登陆</ButtonSubmit>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RouterService from '@/service/RouterService'
import UserService from '@/service/UserService'

@Component
export default class Login extends Vue {
  private form = {
    username: 'root',
    password: '111111'
  }

  private handleSubmit () {
    return UserService.login(this.form)
      .then(() => {
        RouterService.replace('/')
      })
  }
}
</script>

<style lang="scss">
.view-login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
