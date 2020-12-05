import { IFormFieldItem, IFormFields } from '@/interface/common'

function checkIdcard (e: any) {
  /* eslint-disable */
  var t, r, a, n = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], i = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2], o = function(e: any, t: any, r: any) {
      var a, n, i, o;
      return o = new Date(e,t - 1,r),
      a = o.getFullYear(),
      n = o.getMonth() + 1,
      i = o.getDate(),
      e == a && t == n && r == i
  }
  ;
  if (/^\d{15}$/.test(e))
      return t = "19" + e.substr(6, 2),
      r = e.substr(8, 2),
      a = e.substr(10, 2),
      o(t, r, a);
  if (/^\d{17}\d|x$/i.test(e)) {
      for (var s, l = 0, u = 0; u < e.length - 1; u++)
          l += parseInt(e.substr(u, 1), 10) * n[u];
      return s = l % 11,
      t = e.substr(6, 4),
      r = e.substr(10, 2),
      a = e.substr(12, 2),
      i[s] == e.substr(17, 1).toUpperCase() && o(t, r, a)
  }
  return !1
  /* eslint-enable */
}

function checkAdult (t: any) {
  let date: any = 0
  /* eslint-disable */
  if (t.length > 15) {
    var a = parseInt(t.substr(6, 4), 10)
      , n = parseInt(t.substr(10, 2), 10)
      , i = parseInt(t.substr(12, 2), 10)
      date = new Date(a,n - 1,i)
  } else {
    var a = parseInt('19' + t.substr(6, 2), 10)
      , n = parseInt(t.substr(8, 2), 10)
      , i = parseInt(t.substr(10, 2), 10)
      date = new Date(a,n - 1,i)
  }
  /* eslint-enable */
  const now = new Date()
  const boundaryDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())
  return date.getTime() <= boundaryDate.getTime()
}

function checkEmail (value: string) {
  if (value && value.length > 50) {
    return false
  }
  const valid = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(value)
  if (!valid) return false
  // qq邮箱如果是数字开头后面不能带字母
  if (/^\d+\D+@qq\.com$/gi.test(value)) {
    return false
  }
  // 手机号开头的邮箱放开限制
  if (/^\d{11}@(163|126|sohu|21cn|hotmail)\.com$/gi.test(value)) {
    return true
  }
  // 163、126、sohu、21cn 邮箱需要以字母开头
  if (/^[^a-z].*@(163|126|sohu|21cn|hotmail)\.com$/gi.test(value)) {
    return false
  }

  // sina 邮箱下划线不能在首尾
  if (/^_.*@sina\.(com|cn)$/gi.test(value)) {
    return false
  }
  if (/^_.*@vip.sina.com$/gi.test(value)) {
    return false
  }

  // 139、189邮箱前缀为手机号，可以设置邮箱别名，别名以字母开头
  if (/^\d.*(139\.com|189\.cn)$/.test(value)) {
    // 如果是数字开头 则只能是手机号作为前缀
    if (!/^(1)\d{10}@(139\.com|189\.cn)$/.test(value)) {
      return false
    }
  }

  return valid
}

function validateNotSpace (name: string, value: string, callback: Function) {
  if (!value || !((/\s/g).test(value))) {
    callback()
  } else {
    callback(new Error(`${name}不能包含空格`))
  }
}

function validateUsername (rule: any, value: string, callback: Function) {
  if (!value || !((/[\u4e00-\u9fa5_\s]/g).test(value))) {
    callback()
  } else {
    callback(new Error('用户名不能包含中文或空格'))
  }
}

function validateTerm (rule: any, value: string, callback: Function) {
  if (value) {
    callback()
  } else {
    callback(new Error('请阅读并同意相关协议'))
  }
}

function validateIdcard (rule: any, value: string, callback: Function) {
  if (!value || checkIdcard(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的身份证号'))
  }
}

function validateAdult (rule: any, value: string, callback: Function) {
  if (!value || checkAdult(value)) {
    callback()
  } else {
    callback(new Error('不支持18岁以下用户'))
  }
}

function validateEmail (rule: any, value: string, callback: Function) {
  if (!value || checkEmail(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的邮箱'))
  }
}

function validateMinValue (name: string, value: number, minValue: number, callback: Function) {
  if (value >= minValue) {
    callback()
  } else {
    callback(new Error(`${name}最小值为${minValue}`))
  }
}

function validateMaxValue (name: string, value: number, maxValue: number, callback: Function) {
  if (value <= maxValue) {
    callback()
  } else {
    callback(new Error(`${name}最大值为${maxValue}`))
  }
}

function validatePhone (name: string, value: string, callback: Function) {
  if (!value || (/^(1)\d{10}$/.test(value) || /^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value))) {
    callback()
  } else {
    callback(new Error(`${name}格式不正确`))
  }
}

class ValidateService {
  genRule (field: IFormFieldItem) {
    const innerRules = field.rule || []
    const rules = innerRules
      .reduce((res, callback: Function | object) => {
        const obj = typeof callback === 'function' ? callback.call(this, { name: field.label }) : callback
        const rules = typeof obj === 'function' ? obj({ name: field.label }) : obj
        return Object.assign({}, res, rules)
      }, {})
    field.rule = Object.values(rules)
    return field
  }

  genRules (fields: { [key: string]: IFormFieldItem }): IFormFields {
    Object.keys(fields).forEach((key) => {
      fields[key] = this.genRule(fields[key])
    })
    return fields
  }

  required ({ trigger = 'blur', type = 'string' } = {}) {
    return function ({ name = '' } = {}) {
      return {
        required: {
          type,
          required: true,
          message: `请${trigger === 'blur' ? '输入' : '选择'}${name}`,
          trigger
        }
      }
    }
  }

  bewteen (min = 0, max = 0) {
    return function ({ name = '' } = {}) {
      return {
        bewteen: { min, max, message: `${name}长度应为${min}-${max}`, trigger: 'blur' }
      }
    }
  }

  len (len = 2) {
    return function ({ name = '' } = {}) {
      return {
        len: { len, message: `请输入${len}位${name}`, trigger: 'blur' }
      }
    }
  }

  min (min = 0) {
    return function ({ name = '' } = {}) {
      return {
        min: { min, message: `${name}最少${min}个字符`, trigger: 'blur' }
      }
    }
  }

  minNum (min = 0) {
    return function ({ name = '' } = {}) {
      return {
        min: { min, validator: (rule: any, value: number, callback: Function) => validateMinValue(name, value, min, callback), trigger: 'blur' }
      }
    }
  }

  max (max = 0) {
    return function ({ name = '' } = {}) {
      return {
        max: { max, message: `${name}最多${max}个字符`, trigger: 'blur' }
      }
    }
  }

  maxNum (max = 0) {
    return function ({ name = '' } = {}) {
      return {
        max: { max, validator: (rule: any, value: number, callback: Function) => validateMaxValue(name, value, max, callback), trigger: 'blur' }
      }
    }
  }

  notSpace ({ name = '' } = {}) {
    return {
      notSpace: { validator: (rule: any, value: string, callback: Function) => validateNotSpace(name, value, callback), trigger: 'blur' }
    }
  }

  optional () {
    return {
      required: { required: false }
    }
  }

  username ({ name = '用户名' } = {}) {
    return Object.assign({}, this.required()({ name }), this.bewteen(6, 30)({ name }), {
      username: { validator: validateUsername, trigger: 'blur' }
    })
  }

  nickname ({ name = '昵称' } = {}) {
    return Object.assign({}, this.bewteen(2, 30)({ name }))
  }

  loginPassword ({ name = '密码' } = {}) {
    return Object.assign({}, this.required()({ name }), this.bewteen(6, 30)({ name }))
  }

  newPassword ({ name = '新密码' } = {}) {
    return Object.assign({}, this.required()({ name }), this.bewteen(8, 28)({ name }), {
      newPassword: { pattern: new RegExp(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/), message: '必须包含大写字母、小写字母和数字', trigger: 'blur' }
    })
  }

  captcha ({ name = '验证码' } = {}) {
    return Object.assign({}, this.required()({ name }), this.len(4)({ name }))
  }

  idcard ({ name = '身份证' } = {}) {
    return Object.assign({}, this.max(18)({ name }), {
      idcard: { validator: validateIdcard, trigger: 'blur' },
      adult: { validator: validateAdult, trigger: 'blur' }
    })
  }

  term () {
    return {
      term: { validator: validateTerm, trigger: 'blur' }
    }
  }

  smsCode ({ name = '验证码' } = {}) {
    return Object.assign({}, this.required()({ name }), this.len(6)({ name }))
  }

  phone ({ name = '联系电话' } = {}) {
    return Object.assign({}, {
      phone: { validator: (rule: any, value: string, callback: Function) => validatePhone(name, value, callback), trigger: 'blur' }
    })
  }

  telephone ({ name = '联系电话' } = {}) {
    return {
      telephone: { pattern: new RegExp(/^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/), message: `${name}格式不正确`, trigger: 'blur' }
    }
  }

  mobile ({ name = '手机号' } = {}) {
    return Object.assign({}, this.max(11)({ name }), {
      mobile: { pattern: new RegExp(/^(1)\d{10}$/), message: `${name}格式不正确`, trigger: 'blur' }
    })
  }

  fullname ({ name = '姓名' } = {}) {
    return Object.assign({}, this.max(20)({ name }), {
      fullname: { pattern: new RegExp(/^([\u2e80-\u9fff.·•]{2,20})$/), message: `${name}格式不正确`, trigger: 'blur' }
    })
  }

  email () {
    return Object.assign({}, {
      email: { validator: validateEmail, trigger: 'blur' }
    })
  }

  validator (validator: Function) {
    return Object.assign({}, {
      validator: { validator, trigger: 'blur' }
    })
  }
}

export default new ValidateService()
