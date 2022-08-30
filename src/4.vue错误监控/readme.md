## 通过Vue提供的errorHandler钩子搜集错误信息
- vue2：https://v2.cn.vuejs.org/v2/api/#errorHandler
- vue3：https://cn.vuejs.org/api/application.html#app-config-errorhandler

```js
/** error.js */
import Vue from 'vue'
import { env } from '@/config/env'

const cache = []
const isPushError = /^(test|pre)-/.test(location.hostname)

Vue.config.errorHandler = function(err, vm, info) {

  // 收集测试环境和演示环境的js报错
  if (!isPushError && cache.every(el => el.message !== err.message)) {
    cache.push({
      message: err.message,
      stack: err.stack,
      info,
      href: location.href
    })
  }
  throw err
}

isPushError && setInterval(() => {
  if (cache.length > 0) {
    // 搜集错误信息
    fetch(env.VUE_APP_MONITOR_URL + '/log/loading.gif', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cache)
    })
    cache.length = 0
  }
}, 5000)
```

最后在main.js引入error.js文件即可

## 可以结合企业微信机器人或者通过gitlab api 创建 Issues 通知到个人