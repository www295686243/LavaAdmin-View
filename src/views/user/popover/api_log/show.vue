<template>
  <FormRender :Service="Service" :form="info" class="view-popover-api_log-show">
    <el-row>
      <el-col :span="12">
        <FormText v-model="info.method" :field="formFields.method"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.name" :field="formFields.name"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.path" :field="formFields.path"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.ip" :field="formFields.ip"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.status" :field="formFields.status"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.created_at" :field="formFields.created_at"></FormText>
      </el-col>
      <el-col :span="24">
        <FormText v-model="info.desc" :field="formFields.desc"></FormText>
      </el-col>
      <el-col :span="24">
        <FormText v-model="info.input._env.ua" :field="formFields.input._env.ua"></FormText>
      </el-col>
      <el-col :span="24">
        <FormText v-model="info.input._env.device" :field="formFields.input._env.device"></FormText>
      </el-col>
      <el-col :span="24">
        <FormText v-model="info.input._env.engine" :field="formFields.input._env.engine"></FormText>
      </el-col>
      <el-col :span="24">
        <FormText v-model="info.input._env.browser" :field="formFields.input._env.browser"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.input._env.os" :field="formFields.input._env.os"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.input._env.platform" :field="formFields.input._env.platform"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.input._env.screen_width" :field="formFields.input._env.screen_width"></FormText>
      </el-col>
      <el-col :span="12">
        <FormText v-model="info.input._env.screen_height" :field="formFields.input._env.screen_height"></FormText>
      </el-col>
    </el-row>
    <div slot="footer"></div>
  </FormRender>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Service from './Service'
import { IFormFields } from '@/interface/common'

@Component
export default class ViewPopoverApiLogShow extends Vue {
  @Prop()
  id!: string

  private Service = Service
  private info = {
    id: this.id,
    method: '',
    name: '',
    path: '',
    ip: '',
    input: {
      _env: {
        os: {
          name: '',
          version: ''
        },
        ua: '',
        cpu: {},
        device: {
          type: '',
          model: '',
          vendor: ''
        },
        engine: {
          name: '',
          version: ''
        },
        browser: {
          name: '',
          major: '',
          version: ''
        },
        platform: '',
        screen_width: 0,
        screen_height: 0
      }
    },
    extra: {},
    status: '',
    code: 0,
    desc: '',
    created_at: ''
  }

  private formFields: IFormFields = {
    method: {
      prop: 'method',
      label: '模式',
      readonly: true
    },
    name: {
      prop: 'name',
      label: '标识',
      readonly: true
    },
    path: {
      prop: 'path',
      label: '路径',
      readonly: true
    },
    ip: {
      prop: 'ip',
      label: 'IP',
      readonly: true
    },
    status: {
      prop: 'status',
      label: '结果',
      readonly: true
    },
    created_at: {
      prop: 'created_at',
      label: '时间',
      readonly: true
    },
    desc: {
      prop: 'desc',
      label: '描述',
      readonly: true
    },
    input: {
      _env: {
        os: {
          prop: 'os',
          label: '操作系统',
          readonly: true
        },
        ua: {
          prop: 'ua',
          label: 'UA',
          readonly: true
        },
        device: {
          prop: 'device',
          label: '设备',
          readonly: true
        },
        engine: {
          prop: 'engine',
          label: '内核',
          readonly: true
        },
        browser: {
          prop: 'browser',
          label: '浏览器',
          readonly: true
        },
        platform: {
          prop: 'platform',
          label: '平台',
          readonly: true
        },
        screen_width: {
          prop: 'screen_width',
          label: '屏幕宽度',
          readonly: true
        },
        screen_height: {
          prop: 'screen_height',
          label: '屏幕高度',
          readonly: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
.view-popover-api_log-show {
  padding: 0;
}
</style>
