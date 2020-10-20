export interface ListItem {
  field: string;
  operator: string;
  value: string | number | (number | string)[] | null;
  type?: string;
  text?: string;
}

interface SearchParams extends ListItem {
  fieldDisplayName?: string;
  operatorDisplayName?: string;
  valueDisplayName?: string | string[];
}

export default class SqlService {
  list: (ListItem | ListItem[])[] = []

  public where (params: SearchParams) {
    return this.addWhere(params)
  }

  public wheres (params: SearchParams[]) {
    return this.addWheres(params)
  }

  public orWhere (params: SearchParams) {
    return this.addWhere({
      ...params,
      type: 'or'
    })
  }

  public orWheres (params: SearchParams[]) {
    return this.addWheres(params.map((res) => {
      res.type = 'or'
      return res
    }))
  }

  private addWhere ({ field, operator, value, fieldDisplayName, operatorDisplayName, valueDisplayName, type = 'and' }: SearchParams) {
    this.list.push({
      field,
      operator,
      value,
      text: `${fieldDisplayName || field} <span class="as">${operatorDisplayName || operator}</span> ${valueDisplayName || value}`,
      type
    })
    return this
  }

  private addWheres (params: SearchParams[]) {
    this.list.push(params.map((res) => {
      return {
        field: res.field,
        operator: res.operator,
        value: res.value,
        text: `${res.fieldDisplayName || res.field} <span class="as">${res.operatorDisplayName || res.operator}</span> ${res.valueDisplayName || res.value}`,
        type: res.type
      }
    }))
    return this
  }

  public get () {
    return this.list.map((res) => {
      if (Array.isArray(res)) {
        return res.map((item) => {
          return {
            field: item.field,
            operator: item.operator,
            value: item.value,
            type: item.type
          }
        })
      } else {
        return {
          field: res.field,
          operator: res.operator,
          value: res.value,
          type: res.type
        }
      }
    })
  }

  public getItem (index: number) {
    return this.list[index]
  }

  public removeItem (index: number) {
    this.list.splice(index, 1)
  }

  public getFields () {
    return this.list.reduce((acc, res) => {
      if (Array.isArray(res)) {
        const arr = res.map((item) => item.field)
        return acc.concat(arr)
      } else {
        return acc.concat([res.field])
      }
    }, [] as string[])
  }
}
