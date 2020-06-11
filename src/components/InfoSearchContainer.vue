<template>
  <div class="InfoSearchContainer">
    <el-form :inline="true" :model="form">
      <el-form-item label="字段">
        <el-select v-model="form.field" placeholder="请选择字段" class="field-select" @change="handleChangeFields">
          <el-option
            v-for="item in selectFields"
            :key="item.name"
            :label="item.display_name"
            :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="条件" v-if="form.wheres.length > 0">
        <el-select v-model="form.where" placeholder="请选择条件" class="where-select">
          <el-option
            v-for="item in form.wheres"
            :key="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="值">
        <el-date-picker
          v-if="form.where === '日期范围' && isDateFormat === true"
          v-model="form.value"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd HH:mm:ss"
          align="right">
        </el-date-picker>
        <el-date-picker
          v-else-if="isDateFormat === true"
          v-model="form.value"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间">
        </el-date-picker>
        <el-cascader
          v-else-if="form.type === 'classify'"
          v-model="form.value"
          :options="form.options"
          :props="{multiple: true}"
          @change="onChangeCascader"
          collapse-tags
          clearable>
        </el-cascader>
        <el-select
          @change="onChangeSelect"
          v-else-if="form.options.length > 0"
          v-model="form.value"
          multiple
          placeholder="请选择">
          <el-option
            v-for="v in form.options"
            :key="v.value"
            :label="v.label"
            :value="v.value">
          </el-option>
        </el-select>
        <el-input v-else v-model="form.value" placeholder="请输入值" class="value-input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="addWhere" type="primary" plain>添加条件</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tag-container">
      <el-button-group v-for="(tag, index) in searchList" :key="tag.text">
        <el-button type="warning" size="mini" plain v-html="tag.text"></el-button>
        <el-button type="warning" icon="el-icon-edit" size="mini" @click="handleEditTag(index)" plain></el-button>
        <el-button type="warning" icon="el-icon-delete" size="mini" @click="handleRemoveTag(index)" plain></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class InfoSearchContainer extends Vue {
  @Prop()
  fields!: any[]

  private selectFields: any[] = []

  private intWheres: string[] = ['等于', '包含', '不包含', '大于', '大于等于', '小于', '小于等于', '不等于']

  private dateWheres: string[] = ['日期范围', '大于', '小于', '等于']

  private stringWheres: string[] = ['等于', '包含', '不包含']

  private searchList: any = []

  private form: {
    wheres: string[];
    [key: string]: any;
  } = {
    field: '',
    fieldText: '',
    where: '',
    value: '',
    valueText: '',
    type: '',
    options: [],
    flatOptions: [],
    wheres: []
  }

  private isDateFormat = false

  @Watch('form.type')
  onFormType (val: string) {
    this.isDateFormat = ['date', 'datetime', 'timestamp'].includes(val)
  }

  private addWhere () {
    this.form.valueText = this.form.value || this.form.valueText
    const text = `${this.form.fieldText} ${this.form.where} ${this.form.valueText}`
    const item = this.searchList.find((res: any) => res.text === text)
    if (this.form.field && this.form.where && this.form.value.length > 0 && !item) {
      this.searchList.push({
        form: Object.assign({}, this.form),
        text: `${this.form.fieldText} <span class="as">${this.form.where}</span> ${this.form.valueText}`
      })
      this.initForm()
      this.resetFields()
    }
  }

  private resetFields () {
    const fields: string[] = this.searchList.map((res: any) => res.form.field)
    this.selectFields = this.getFields().filter((res: any) => !fields.includes(res.name))
  }

  private handleChangeFields (name: string) {
    const item = this.selectFields.find((res: any) => res.name === name)
    this.form.fieldText = item.display_name
    this.form.type = item.type
    this.form.options = item.options || []
    this.form.flatOptions = item.flatOptions || []
    this.form.valueText = ''
    this.form.value = ''
    if (this.form.options.length > 0) {
      this.form.wheres = []
    } else if (['tinyInt', 'smallInt', 'int', 'bigInt', 'decimal', 'double', 'float'].includes(item.type)) {
      this.form.wheres = this.intWheres
    } else if (['date', 'datetime', 'timestamp'].includes(item.type)) {
      this.form.wheres = this.dateWheres
    } else {
      this.form.wheres = this.stringWheres
    }
    if (this.form.wheres.length > 0) {
      this.form.where = this.form.wheres[0]
    } else {
      this.form.where = '包含'
    }
  }

  private handleRemoveTag (index: number) {
    this.searchList.splice(index, 1)
    this.resetFields()
  }

  private handleEditTag (index: number) {
    const item = this.searchList[index]
    Object.assign(this.form, item.form)
    this.handleRemoveTag(index)
  }

  private handleSubmit () {
    const search = this.searchList.map((res: any) => {
      return {
        field: res.form.field,
        where: res.form.where,
        value: res.form.value,
        type: res.form.type
      }
    })
    this.$emit('submit', { _search: search })
  }

  private getFields (): any[] {
    return this.fields ? JSON.parse(JSON.stringify(this.fields)) : []
  }

  private onChangeSelect (arr: (number|string)[]) {
    this.form.valueText = this.form.options.filter((res: any) => arr.includes(res.value))
      .map((res: any) => res.label).join()
  }

  private onChangeCascader (values: any) {
    this.form.valueText = values
      .map((ids: number[]) => {
        const id = ids[ids.length - 1]
        const item: any = this.form.flatOptions.find((res: any) => res.value === id)
        if (item) {
          return item.label
        }
      })
  }

  private initForm () {
    this.form.field = ''
    this.form.where = ''
    this.form.value = ''
    this.form.type = ''
    this.form.wheres = []
  }

  private mounted () {
    this.selectFields = this.getFields()
  }
}
</script>

<style lang="scss" scope>
.field-select {
  width: 120px;
}
.where-select {
  width: 120px;
}
.value-input {
  width: 120px !important;
}
.InfoSearchContainer {
  text-align: right;
  .el-form-item {
    margin-bottom: 0;
  }
}
.tag-container {
  padding: 10px;
  & > .el-button-group:not(:first-child) {
    margin-left: 10px;
  }
  .as {
    color: #67C23A
  }
  .el-button-group .el-button:first-child:hover {
    background: #fdf6ec;
    border-color: #f5dab1;
    color: #E6A23C;
  }
  .el-button-group .el-button--warning:first-child {
    border-color: #f5dab1;
  }
  .el-button-group .el-button--warning:not(:first-child):not(:last-child) {
    border-color: #f5dab1;
  }
  .el-button-group .el-button--warning:last-child {
    border-color: #f5dab1;
  }
}
</style>
