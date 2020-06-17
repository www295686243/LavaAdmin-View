function recursiveGetAncestors (id: number, list: any[], paths: any[], field: string) {
  const item: any = list.find((res: any) => res[field] === id)
  if (item) {
    paths.unshift(item)
    if (item.parent_id) {
      recursiveGetAncestors(item.parent_id, list, paths, field)
    }
  }
  return paths
}

/**
 * 在一个树形结构中，给出一个id，递归获得当前对象与先祖的结果列表
 * @param currentId
 * @param list
 * @param field 索引的字段
 * @return [object(先祖), object(父级), object(当前)]
 */
export function getAncestorsAndSelf (currentId: number, list: any[], field = 'id'): any[] {
  if (currentId) {
    return recursiveGetAncestors(currentId, list, [], field)
  } else {
    return []
  }
}

/**
 * 格式化日期
 * @param value
 * @param fmt Y-m-d/Y-m-d H:i/Y-m
 */
export function getDate (value?: Date, fmt = 'Y-m-d'): string {
  const date = value ? new Date(value) : new Date()
  const year = date.getFullYear()
  let month: string = (date.getMonth() + 1) + ''
  let day: string = date.getDate() + ''
  let hours: string = date.getHours() + ''
  let minutes: string = date.getMinutes() + ''
  let seconds: string = date.getSeconds() + ''
  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }
  if (hours.length === 1) {
    hours = '0' + hours
  }
  if (minutes.length === 1) {
    minutes = '0' + minutes
  }
  if (seconds.length === 1) {
    seconds = '0' + seconds
  }
  if (fmt === 'Y-m-d H:i') {
    return `${year}-${month}-${day} ${hours}:${minutes}`
  } else if (fmt === 'Y-m') {
    return `${year}-${month}`
  } else if (fmt === 'Y-m-d H:i:s') {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  } else {
    return `${year}-${month}-${day}`
  }
}

export function getDeepValue (field: string, row: any) {
  // 例：field = price||set_meal.price
  return field.split('||') // ['price', 'set_meal.price']
    .filter((key: string) => key) // ['price', 'set_meal.price']
    .map((field: string) => { // 返回 ['', '11.00']
      // set_meal.price
      return field.split('.') // ['set_meal', 'price']
        .filter((key: string) => key)
        .reduce((acc, key: string) => {
          // 循环第一次：row['set_meal']，第二次：row['set_meal']['price']
          if (acc && acc[key]) {
            return acc[key]
          } else {
            return null
          }
        }, row)
    })
    .find((value) => value) // 找到有效的值返回
}

// 将给定的字符串转换为 「变种驼峰命名」 ab-cd => AbCd
export function studly (str: string) {
  return str.split('-')
    .filter((res) => res)
    .reduce((acc, res) => {
      acc += res.charAt(0).toUpperCase() + res.slice(1)
      return acc
    }, '')
}
