# @ahg0313/util 常用工具

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

## 数字

### au_random 生成指定范围的随机数
```javascript
import {au_random} from '@ahg0313/utils'

au_random(1, 100)
```
