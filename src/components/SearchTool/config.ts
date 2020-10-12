const config = {
  bigInt: [
    { label: '等于', value: '=' },
    { label: '包含', value: 'in' },
    { label: '不包含', value: 'notIn' },
    { label: '不等于', value: '<>' }
  ],
  int: [
    { label: '等于', value: '=' },
    { label: '包含', value: 'in' },
    { label: '不包含', value: 'notIn' },
    { label: '大于', value: '>' },
    { label: '大于等于', value: '>=' },
    { label: '小于', value: '<' },
    { label: '小于等于', value: '<=' },
    { label: '不等于', value: '<>' }
  ],
  date: [
    { label: '范围', value: 'between' },
    { label: '大于', value: '>' },
    { label: '小于', value: '<' },
    { label: '等于', value: '=' }
  ],
  datetime: [
    { label: '范围', value: 'between' },
    { label: '大于', value: '>' },
    { label: '小于', value: '<' },
    { label: '等于', value: '=' }
  ],
  string: [
    { label: '等于', value: '=' },
    { label: '包含', value: 'like' },
    { label: '不包含', value: 'notLike' }
  ],
  intOptions: [
    { label: '包含', value: 'in' }
  ],
  stringOptions: [
    { label: '包含', value: 'like' }
  ]
} as {
  [key: string]: { label: string; value: string }[];
}

export default function (name: string) {
  return config[name]
}
