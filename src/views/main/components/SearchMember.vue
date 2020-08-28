<template>
  <div class="SearchMember">
    <el-form :inline="true" size="small">
      <el-form-item>
        <el-input placeholder="请输入内容" v-model="search.keyword" :style="{ width: '335px' }" clearable>
          <el-select v-model="search.field" slot="prepend" placeholder="请选择" class="search-prepend">
            <el-option label="用户昵称" value="nickname"></el-option>
            <el-option label="用户ID" value="id"></el-option>
            <el-option label="手机号" value="phone"></el-option>
          </el-select>
          <ButtonSubmit slot="append" icon="el-icon-search" :onClick="handleSubmit"></ButtonSubmit>
        </el-input>
      </el-form-item>
    </el-form>
    <el-popover
      placement="bottom"
      trigger="manual"
      class="user-list-popover"
      v-model="isShowUserList">
      <ul class="user-list">
        <el-popover
          v-for="v in userList"
          :key="v.id"
          placement="right"
          popper-class="SearchMember-btns-popover"
          trigger="hover">
          <li slot="reference">{{v.nickname}}</li>
          <ul class="user-list-btns">
            <li>用户ID: {{v.id}}</li>
            <li><ButtonSubmit size="mini" :onClick="() => handlePopover('/user/popover/api_log/index', v.id)">活动轨迹</ButtonSubmit></li>
          </ul>
        </el-popover>
      </ul>
      <div style="padding: 10px; text-align: center"><ButtonSubmit size="mini" :onClick="handleClosePopover">关闭</ButtonSubmit></div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from '@/plugins/axios'
import DialogService from '@/service/DialogService/Service.ts'

@Component
export default class SearchMember extends Vue {
  private search = {
    field: 'nickname',
    keyword: ''
  }

  private isShowUserList = false
  private userList = []

  private handleSubmit () {
    return Promise.resolve()
      .then(() => {
        if (this.search.keyword !== '') {
          return axios.get('user', {
            _search: [{
              field: this.search.field,
              where: '等于',
              value: this.search.keyword,
              type: 'string'
            }]
          })
            .then((res) => {
              this.userList = res.data.data || []
              this.isShowUserList = this.userList.length > 0
              if (!this.isShowUserList) {
                this.$message({
                  showClose: true,
                  message: '该用户不存在',
                  type: 'error'
                })
              }
            })
        }
      })
  }

  private handlePopover (path: string, user_id: string) {
    DialogService.show(require(`@/views${path}.vue`).default, {
      id: user_id
    })
  }

  private handleClosePopover () {
    this.isShowUserList = false
  }
}
</script>

<style lang="scss">
.SearchMember {
  .search-prepend {
    .el-input {
      width: 100px;
    }
  }
  .el-form-item {
    margin-bottom: 0 !important;
  }
  .user-list {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 8px 10px;
      cursor: pointer;
      position: relative;
      &:hover {
        background: #f7f7f7;
      }
      &:after {
        content: ' ';
        position: absolute;
        width: 7px;
        height: 7px;
        border-top: 1px solid #C0C4CC;
        border-right: 1px solid #C0C4CC;
        transform: rotate(45deg) translateY(-70%);
        right: 15px;
        top: 50%;
      }
    }
    li:not(:last-child) {
      border-bottom: 1px solid #EBEEF5;
    }
  }
  .user-list-popover {
    .el-popover {
      min-width: 120px;
      padding: 0;
    }
  }
}
.SearchMember-btns-popover {
  .user-list-btns {
    list-style: none;
    margin: 0;
    padding: 0;
    li:not(:last-child) {
      padding-bottom: 10px;
    }
  }
}
</style>
