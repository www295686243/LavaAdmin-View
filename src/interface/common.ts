export interface IPagination {
  page: number
  limit: number
  total: number
}

export interface IImage {
  id: number
  user_id: number
  model: string
  info_id: number
  url: string
  width: number
  height: number
}

export interface IMenu {
  id: number
  parent_id: number
  display_name: string
  icon?: string
  route: string
  depth: number
  params?: string[]
  default_params?: { [key: string]: string | number };
  children?: IMenu[]
}

export interface IResult {
  message: string,
  data: any,
  code: number,
  status: string
}

export interface ITableColumnAction {
  name: string
  type?: string
  size?: string
  permission?: string
  onClick: Function
}

export interface ITableIndexParams {
  page: number
  limit?: number
}

export interface IFormFieldItem {
  prop?: string
  label: string
  options?: any[] // 下拉或多选的选项
  optionsList?: any[] // 一般用于级联菜单，扁平化的树形列表
  rule?: any[]
  props?: {
    checkStrictly?: boolean
    value?: string // value字段名
    label?: string // label字段名
  }
  width?: number // 元素宽度
  defaultValue?: any
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  multiple?: boolean // 一般用于select
  min?: number // 一般用于FormCounter组件里
  max?: number // 一般用于FormCounter组件里
  tips?: string // 一般用于表单下方的提示性文字
  maxlength?: number // 一般用于textarea
  uploadParams?: IUploadParams // 一般用于图片上传表单
  filterable?: boolean // 一般用于cascader表单
}

export interface IUploadParams {
  type: string;
  info_id?: number | string;
  marking?: string | number;
}

export interface IFormFields {
  [key: string]: IFormFieldItem
}

export interface ISearchFields {
  name: string,
  display_name: string,
  type: string,
  options?: IOptions[]
}

export interface IOptions {
  display_name: string;
  id: number;
  children?: IOptions[];
  [key: string]: any;
}

export interface IService {
  index: Function;
  show: Function;
  store: Function;
  update: Function;
  destroy: Function;
  refresh: Function;
  limit?: number;
  getPermissionName: Function;
  getModelName: Function;
}
