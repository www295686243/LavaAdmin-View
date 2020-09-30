interface SearchItem {
  field: string;
  where: string;
  value: string | number | number[] | string[] | null;
  type: string;
}

export default class SqlService {
  search: SearchItem[] = []

  public where (field: string, operator: string, value: string | number | number[] | string[] | null, type = 'string') {
    this.search.push({
      field,
      where: operator,
      value,
      type
    })
    return this
  }

  public get () {
    return this.search
  }
}
