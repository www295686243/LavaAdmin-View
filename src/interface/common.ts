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
  children?: IMenu[]
}

export interface IResult {
  message: string,
  data: any,
  code: number,
  status: string
}

export interface ITableColumns {
  prop?: string
  label?: string
  type?: string
  width?: number
  minWidth?: number
  fixed?: string
  element?: string
  align?: string
  options?: any[]
  optionsList?: any[] // 一般用于级联组件,扁平化的树形列表
  props?: {
    label: string
    value?: string
  }
  actions?: ITableColumnAction[]
}

interface ITableColumnAction {
  name: string
  type?: string
  size?: string
  onClick: Function
}

export interface ITableIndexParams {
  page: number
  limit?: number
}
