export interface IPagination {
  page: number,
  limit: number,
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
  route?: string
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
