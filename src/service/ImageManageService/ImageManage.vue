<template>
  <el-dialog
    :visible.sync="isShowModal"
    :close-on-click-modal="false"
    :destroy-on-close="true"
    @close="close"
    title="图片管理">
    <div class="ImageManage" v-loading="isLoading">
      <el-row class="action-btn">
        <el-col :span="12">
          <el-button type="dashed" size="small" icon="md-checkmark" @click="handleSelectAll">选择全部</el-button>
          <el-button type="dashed" size="small" icon="md-close" style="margin-left: 5px" @click="handleUnSelected" :disabled="isDisableDeleteBtn">取消选中</el-button>
        </el-col>
        <el-col :span="12" class="text-right">
          <ButtonDelete icon="ios-trash-outline" :onClick="handleDestroyMore" :onClickAfter="fetchIndex" :disabled="isDisableDeleteBtn">
            删除选中项
          </ButtonDelete>
        </el-col>
      </el-row>

      <el-row class="image-list" :gutter="8">
        <el-col :span="4" v-for="(v, index) in list" :key="index">
          <div class="cover-img">
            <MaskContainer v-if="v.active" @click.native="handleSelectImage(v)">
              <i class="el-icon-check"></i>
            </MaskContainer>
            <el-image :src="v.full_url" @click="handleSelectImage(v)" fit="cover"></el-image>
          </div>
        </el-col>
      </el-row>
      <Pagination
        @changePage="handleChangePage"
        :pagination="pagination">
      </Pagination>
      <div class="upload-btn">
        <el-upload
          ref="upload"
          list-type="text"
          :data="uploadParams"
          :headers="headers"
          multiple
          :on-success="onUploaded"
          :on-error="onUploaded"
          :action="action">
          <div class="upload-btn">
            <el-button type="primary" icon="el-icon-plus">添加图片</el-button>
          </div>
        </el-upload>
      </div>
    </div>
    <div slot="footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确认选择</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import cache from '@/plugins/cache'
import { IPagination, IUploadParams } from '@/interface/common'
import axios from '@/plugins/axios'
import Pagination from '@/components/Table/TablePagination.vue'
import ConstService from '@/service/ConstService'
import RouterService from '@/service/RouterService'
import MaskContainer from '@/components/MaskContainer.vue'

@Component({
  components: {
    Pagination,
    MaskContainer
  }
})
export default class ImageManage extends Vue {
  readonly $refs!: {
    upload: any;
  }

  @Prop()
  type!: string

  private isDisableDeleteBtn = true
  private isShowModal = true
  private isLoading = false
  private pagination: IPagination = {
    page: 1,
    limit: 12,
    total: 0
  }

  private uploadParams: IUploadParams = {
    type: RouterService.getModelName(),
    info_id: RouterService.query('id') as number,
    marking: RouterService.query('marking')
  }

  private list: any[] = []
  private selection: any[] = []

  private action = cache.getBaseConfig('baseHost') + ConstService.getAppValue('adminImageHost')
  private headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: 'Bearer ' + cache.user.get('api_token')
  }

  // 已上传的数量(不论成功与失败)
  private uploaded = 0
  private resolve!: Function
  private reject!: Function

  open () {
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
      this.isShowModal = true
      this.fetchIndex()
    })
  }

  close () {
    this.isShowModal = false
    this.$destroy()
    this.$el.remove()
    this.reject()
  }

  getSingleImage () {
    return this.selection[0] || {}
  }

  getMultipleImage () {
    return this.selection
  }

  private handleSubmit () {
    this.isShowModal = false
    if (this.type === 'single') {
      this.resolve(this.getSingleImage())
    } else {
      this.resolve(this.getMultipleImage())
    }
  }

  private onUploaded (res: any, file: any, fileList: any[]) {
    this.uploaded++
    if (this.uploaded === fileList.length) {
      this.fetchIndex()
      this.$refs.upload.clearFiles()
    }
  }

  private fetchIndex () {
    if (this.isLoading) return
    this.isLoading = true
    return axios.get('image', {
      ...this.uploadParams,
      ...this.pagination
    })
      .then((res) => {
        this.list = res.data.data.map((item: any) => {
          item.active = this.isSelection(item.id)
          return item
        })
        this.pagination.total = res.data.total
        this.changeDeleteBtn()
      })
      .then(() => {
        this.isLoading = false
      })
      .catch(() => {
        this.isLoading = false
      })
  }

  private handleChangePage () {
    return this.fetchIndex()
  }

  private handleDestroyMore () {
    const ids = this.list.filter((res: any) => res.active).map((res: any) => res.id)
    return axios.post('image/destroyMore', { ids })
      .then(() => {
        this.removeSelection(ids)
        if (ids.length === this.list.length) {
          this.pagination.page = this.pagination.page > 1 ? --this.pagination.page : 1
        }
      })
  }

  private handleUnSelected () {
    this.list.forEach((res: any) => {
      res.active = false
    })
    this.removeSelection(this.list.map((res) => res.id))
  }

  private handleSelectAll () {
    this.list.forEach((res: any) => {
      res.active = true
    })
    this.addSelection(this.list.map((res) => res.id))
  }

  private handleSelectImage (v: any) {
    if (this.type === 'single') {
      this.clearSelection()
    }
    v.active = !v.active
    v.active ? this.addSelection([v.id]) : this.removeSelection([v.id])
  }

  private addSelection (ids: number[]) {
    this.removeSelection(ids)
    const list = this.list.filter((res) => ids.includes(res.id))
    this.selection = this.selection.concat(list)
    this.changeDeleteBtn()
  }

  private removeSelection (ids: number[]) {
    this.selection = this.selection.filter((res) => !ids.includes(res.id))
    this.changeDeleteBtn()
  }

  private clearSelection () {
    this.selection = []
    this.list.forEach((res: any) => {
      res.active = false
    })
  }

  private isSelection (id: number) {
    return this.selection.some((res) => res.id === id)
  }

  private changeDeleteBtn () {
    this.isDisableDeleteBtn = !this.list.some((res: any) => res.active)
  }
}
</script>

<style lang="scss">
.ImageManage {
  line-height: normal;
  .action-btn {
    .text-right {
      text-align: right;
    }
  }
  .image-list {
    margin-top: 20px;
    & > .ivu-col {
      margin-top: 10px;
    }
    .el-col {
      margin-top: 8px;
    }
  }
  .cover-img {
    position: relative;
    cursor: pointer;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .el-image {
      height: 100%;
      position: absolute;
    }
    i {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-size: 50px;
    }
  }
  .upload-btn {
    margin-top: 10px;
  }
}
</style>
