# @ahg0313/util 常用工具

## 数字

### 生成指定范围的随机数
```javascript
import {au_random} from '@ahg0313/utils'

au_random(1, 100)
```

## 字符串
### 手机号脱敏
```javascript
import {au_telDesensitization} from '@ahg0313/utils'

au_telDesensitization('123') // ''
au_telDesensitization('15612345678') // 156****5678'
```
### queryStr 转 Object
```javascript
import {au_queryStrToObj} from '@ahg0313/utils'

au_queryStrToObj() // {a: 1, b: 2}
au_queryStrToObj() // {}
```

## 对象
### obj 转 queryStr
```javascript
import {au_objToQueryStr} from '@ahg0313/utils'

au_objToQueryStr() // ''
au_objToQueryStr({a: 1, b: 2}) // 'a=1&b=2'
```

## 图片
### 图片压缩
```javascript
import {au_pictureCompression} from '@ahg0313/utils'

au_pictureCompression(file, {size, maxWidth, maxHeight}) // => {base64data, width, height}
```

## 文件
### base64转文件
```javascript
import {au_base64ToFile} from '@ahg0313/utils'

au_base64ToFile(base64, fileName)
```

## 日期
### 时间戳转日期
```javascript
import {au_timeStampToDate} from '@ahg0313/utils'

au_timeStampToDate(Date.now(), '-') //  yyyy-MM-dd HH:mm:ss
au_timeStampToDate(Date.now(), '/') //  yyyy/MM/dd HH:mm:ss
```

## 本地存储
### cookie
```javascript
import {au_cookie} from '@ahg0313/utils'

// 获取 
au_cookie.get('key') // (key: string) => string | undefined

// 设置
// options = {
//  expires: '',
// }
au_cookie.set('key', value, options) // (key: string, value: string, options: Object) => void

// 删除
au_cookie.remove('key', options)
```
更多文档请查看 [js-cookie](https://github.com/js-cookie/js-cookie)

### localStorage json 数据
```javascript
import {au_localStorage} from '@ahg0313/utils'

// 设置
au_localStorage.set('key', {...val}) // (key: string, val: Object) => void

// 获取
au_localStorage.get(key) // (key: string) => Object | null
```

### sessionStorage json 数据
```javascript
import {au_localStorage} from '@ahg0313/utils'

// 设置
au_sessionStorage.set('key', {...val}) // (key: string, val: Object) => void

// 获取
au_sessionStorage.get(key) // (key: string) => Object | null
```
