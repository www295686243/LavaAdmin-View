<template>
  <div class="TableToolSearch">
    <el-form :inline="true" :model="form">
      <el-form-item label="字段">
        <el-select v-model="form.field" placeholder="请选择字段" class="field-select" @change="createForm">
          <el-option
            v-for="item in innerFields"
            :key="item.name"
            :label="item.display_name"
            :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="条件" v-if="form.wheres.length > 0">
        <el-select v-model="form.where" placeholder="请选择条件" class="where-select" @change="handleChangeWhere">
          <el-option
            v-for="item in form.wheres"
            :key="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="值">
        <el-date-picker
          @change="handleChangeDateRange"
          v-if="form.where === '日期范围' && ['date', 'datetime'].includes(form.type)"
          v-model="form.value"
          :type="form.type === 'date' ? 'daterange' : 'datetimerange'"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :value-format="form.type === 'date' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'"
          align="right">
        </el-date-picker>
        <el-date-picker
          @change="handleChangeDate"
          v-else-if="['date', 'datetime'].includes(form.type)"
          v-model="form.value"
          :type="form.type"
          :value-format="form.type === 'date' ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'"
          placeholder="选择日期时间">
        </el-date-picker>
        <el-cascader
          v-else-if="form.type === 'classify'"
          v-model="form.value"
          :options="form.options"
          :props="{ multiple: true, value: 'id', label: 'display_name' }"
          collapse-tags
          clearable>
        </el-cascader>
        <el-select
          v-else-if="form.options.length > 0"
          v-model="form.value"
          multiple
          placeholder="请选择">
          <el-option
            v-for="(v, key) in form.options"
            :key="key"
            :label="v.display_name"
            :value="v.id">
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ISearchFields, IOptions } from '@/interface/common'
import RouterService from '@/service/RouterService'
import QueryString from 'qs'

interface Form {
  field: string;
  fieldText: string;
  type: string;
  options: IOptions[];
  value: string | string[];
  wheres: string[];
  where: string;
}

interface SearchList {
  text: string;
  form: Form;
}

@Component
export default class TableToolSearch extends Vue {
  @Prop()
  fields!: ISearchFields[]

  private innerFields: ISearchFields[] = []
  private form = {
    field: '',
    fieldText: '',
    type: '',
    options: [],
    value: '',
    wheres: [],
    where: ''
  } as Form

  private searchList: SearchList[] = []

  private createForm (field: string, row?: Form) {
    const item = this.innerFields.find((res: ISearchFields) => res.name === field) as ISearchFields
    this.form.field = field
    this.form.fieldText = item.display_name
    this.form.type = item.type
    this.form.options = item.options || []
    this.form.value = (row && row.value) || ''
    this.form.where = (row && row.where) || ''
    if (this.form.options.length > 0) {
      this.form.wheres = ['包含', '不包含']
    } else if (['tinyInt', 'smallInt', 'int', 'bigInt', 'decimal', 'double', 'float'].includes(item.type)) {
      this.form.wheres = ['等于', '包含', '不包含', '大于', '大于等于', '小于', '小于等于', '不等于']
    } else if (['date', 'datetime'].includes(item.type)) {
      this.form.wheres = ['日期范围', '大于', '小于', '等于']
    } else {
      this.form.wheres = ['等于', '包含', '不包含']
    }
    if (this.form.wheres.length > 0 && !this.form.where) {
      this.form.where = this.form.wheres[0]
    }
  }

  private addWhere () {
    const text = `${this.form.fieldText} ${this.form.where} ${this.form.value}`
    const item = this.searchList.find((res: any) => res.text === text)
    if (this.form.field && this.form.where && this.form.value !== null && this.form.value.length > 0 && !item) {
      this.searchList.push({
        form: Object.assign({}, this.form),
        text: `${this.form.fieldText} <span class="as">${this.form.where}</span> ${this.form.value}`
      })
      this.initForm()
      this.resetFields()
    } else {
      this.$message.warning('请完善筛选条件')
    }
  }

  private handleChangeWhere () {
    if (['date', 'datetime'].includes(this.form.type)) {
      this.form.value = ''
    }
  }

  private initForm () {
    this.form.field = ''
    this.form.where = ''
    this.form.value = ''
    this.form.type = ''
    this.form.wheres = []
  }

  private resetFields () {
    const fields: string[] = this.searchList.map((res: any) => res.form.field)
    this.innerFields = this.getFields().filter((res: ISearchFields) => !fields.includes(res.name))
  }

  private getFields (): ISearchFields[] {
    return this.fields ? JSON.parse(JSON.stringify(this.fields)) : []
  }

  private handleSubmit () {
    const search = this.searchList.map((res: SearchList) => {
      return {
        field: res.form.field,
        where: res.form.where,
        value: res.form.value,
        type: res.form.type
      }
    })
    RouterService.replace(RouterService.getPath(), { _search: QueryString.stringify(search) || undefined })
  }

  private handleEditTag (index: number) {
    const item = this.searchList[index]
    Object.assign(this.form, item.form)
    this.handleRemoveTag(index)
  }

  private handleRemoveTag (index: number) {
    this.searchList.splice(index, 1)
    this.resetFields()
  }

  private handleChangeDateRange (date: string[]) {
    if (this.form.type === 'date' && date) {
      if (date) {
        this.form.value = []
        this.form.value[0] = date[0] + ' 00:00:00'
        this.form.value[1] = date[1] + ' 23:59:59'
      } else {
        this.form.value = ''
      }
    }
  }

  private handleChangeDate (date: string) {
    if (this.form.type === 'date') {
      if (this.form.where === '大于') {
        this.form.value = date + ' 23:59:59'
      } else if (this.form.where === '小于') {
        this.form.value = date + ' 00:00:00'
      }
    }
  }

  private initSearchList () {
    const searchList = Object.values(QueryString.parse(RouterService.query('_search') as string)) as unknown as Form[]
    searchList.forEach((row) => {
      this.createForm(row.field, row)
      this.addWhere()
    })
  }

  mounted () {
    this.innerFields = this.getFields()
    this.initSearchList()
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
.TableToolSearch {
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
