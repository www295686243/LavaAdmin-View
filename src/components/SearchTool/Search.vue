<template>
  <div class="SearchTool">
    <el-form :inline="true" :model="form" ref="FormElement">
      <el-form-item :label="formFields.field.label" :prop="formFields.field.prop" :rules="formFields.field.rule">
        <el-select v-model="form.field" placeholder="请选择字段" class="field-select" @change="createForm">
          <el-option
            v-for="item in innerFields"
            :key="item.name"
            :label="item.display_name"
            :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="条件" v-if="innerWheres.length > 1" prop="operator">
        <el-select v-model="form.operator" placeholder="请选择条件" class="where-select" @change="handleChangeWhere">
          <el-option
            v-for="item in innerWheres"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <component :is="valueComponent" :operator="form.operator" :type="form.type" v-model="form.value" :options="innerOptions"></component>
      <el-form-item>
        <ButtonSubmit :onClick="addWhere" type="primary" plain>添加条件</ButtonSubmit>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tag-container">
      <el-button-group v-for="(tag, index) in SqlService.list" :key="index">
        <el-button type="warning" size="mini" plain v-html="tag.text"></el-button>
        <el-button type="warning" icon="el-icon-edit" size="mini" @click="handleEditTag(index)" plain></el-button>
        <el-button type="warning" icon="el-icon-delete" size="mini" @click="handleRemoveTag(index)" plain></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts">
import { IFormFields } from '@/interface/common'
import ValidateService from '@/service/ValidateService'
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import getOperatorConfig from './config'
import bigIntValue from './bigIntValue.vue'
import dateTimeValue from './dateTimeValue.vue'
import dateValue from './dateValue.vue'
import intOptionsValue from './intOptionsValue.vue'
import intValue from './intValue.vue'
import stringOptionsValue from './stringOptionsValue.vue'
import stringValue from './stringValue.vue'
import RouterService from '@/service/RouterService'
import QueryString from 'qs'
import SqlService, { ListItem } from '@/service/SqlService'

interface SearchFields {
  name: string;
  display_name: string;
  type: string;
  options?: SearchOptions[];
}

interface SearchOptions {
  display_name: string;
  id: number | string;
  children?: SearchOptions[];
  [key: string]: any;
}

interface WhereItem { label: string; value: string }

@Component({
  components: {
    bigIntValue,
    dateTimeValue,
    dateValue,
    intOptionsValue,
    intValue,
    stringOptionsValue,
    stringValue
  }
})
export default class SearchToolEntra extends Vue {
  @Ref()
  FormElement!: any

  @Prop()
  fields!: SearchFields[]

  private valueComponent = ''
  private innerFields: SearchFields[] = []
  private innerOptions: SearchOptions[] = []
  private innerWheres: WhereItem[] = []
  private SqlService = new SqlService()
  private form: ListItem = {
    field: '',
    operator: '',
    value: '',
    type: ''
  }

  private formFields: IFormFields = ValidateService.genRules({
    field: {
      prop: 'field',
      label: '字段',
      options: this.getFields(),
      rule: [ValidateService.required({ trigger: 'change' })],
      props: {
        value: 'name'
      }
    }
  })

  private createForm (field: string, row?: ListItem) {
    const fieldItem = this.innerFields.find((res: SearchFields) => res.name === field) as SearchFields
    this.innerWheres = getOperatorConfig(fieldItem.type)
    this.innerOptions = JSON.parse(JSON.stringify(fieldItem.options || []))
    this.form.field = field
    this.form.operator = (row && row.operator) || this.innerWheres[0].value
    if (fieldItem.type === 'intOptions' && row && row.value) {
      this.form.value = (row.value as string[]).map((num) => {
        if (num.length >= 16) {
          return num
        } else {
          return Number(num)
        }
      })
    } else {
      this.form.value = (row && row.value as string) || ''
    }
    this.form.type = fieldItem.type
    this.valueComponent = this.form.type + 'Value'
  }

  private addWhere () {
    return this.FormElement.validate()
      .then(() => {
        const fieldItem = this.innerFields.find((res: SearchFields) => res.name === this.form.field) as SearchFields
        const operatorItem = getOperatorConfig(fieldItem.type).find((res) => res.value === this.form.operator) as WhereItem
        let valueDisplayName: string[] = []
        if ((fieldItem.options as SearchOptions[]).length > 0) {
          valueDisplayName = (fieldItem.options as SearchOptions[])
            .filter((res) => (this.form.value as string[]).includes(res.id as string))
            .map((res) => res.display_name)
        }
        this.SqlService.where({
          field: this.form.field,
          operator: this.form.operator,
          value: this.form.value,
          fieldDisplayName: fieldItem.display_name,
          operatorDisplayName: operatorItem.label,
          valueDisplayName
        })
        this.initForm()
        this.resetFields()
      })
  }

  private initForm () {
    this.form.field = ''
    this.form.operator = ''
    this.form.value = ''
    this.form.type = ''
    this.valueComponent = ''
    this.innerWheres = []
    this.innerOptions = []
    this.$nextTick(() => {
      this.FormElement.clearValidate()
    })
  }

  private resetFields () {
    const fields: string[] = this.SqlService.getFields()
    this.innerFields = this.getFields().filter((res: SearchFields) => !fields.includes(res.name))
  }

  private handleSubmit () {
    RouterService.replace(RouterService.getPath(), { _search: QueryString.stringify(this.SqlService.get()) || undefined })
  }

  private getFields (): SearchFields[] {
    return this.fields ? JSON.parse(JSON.stringify(this.fields)) : []
  }

  private handleEditTag (index: number) {
    const item = this.SqlService.getItem(index) as ListItem
    const fieldItem = this.getFields().find((res: SearchFields) => res.name === item.field) as SearchFields
    Object.assign(this.form, {
      field: item.field,
      operator: item.operator,
      value: item.value,
      type: fieldItem.type
    })
    this.handleRemoveTag(index)
    this.innerWheres = getOperatorConfig(fieldItem.type)
    this.innerOptions = JSON.parse(JSON.stringify(fieldItem.options || []))
    this.valueComponent = fieldItem.type + 'Value'
  }

  private handleRemoveTag (index: number) {
    this.SqlService.removeItem(index)
    this.resetFields()
  }

  private handleChangeWhere () {
    if (this.form.type === 'date' || this.form.type === 'datetime') {
      this.form.value = ''
    }
  }

  private initSearchList () {
    const searchList = Object.values(QueryString.parse(RouterService.query('_search') as string)) as unknown as ListItem[]
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
.SearchTool {
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
