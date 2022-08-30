## gitlab 界面配置

project => Settings => Integrations

- URL: 钩子事件触发时，会调用这个URL，即你的api url
- Secret Token: 可以随便写的token，将与X-Gitlab-Token HTTP头中的请求一起发送

最后点击 add webhook添加即可

[参考图1](./webhook_1.png)
[参考图2](./webhook_1.png)
### nodejs api 代码(http://192.168.114.146:3100/webhook)
```js
const hapi = require('@hapi/hapi')
const server = hapi.server({
  port:3100
})

const SECRET = '123123'
server.route([
  {
    path: '/webhook',
    method: 'post',
    handler: async (request, h) => {
      const { 'x-gitlab-event': event, 'x-gitlab-token': token } = request.headers
      console.log('Secret Token:',token, ',event:', event)

      if (event !== 'Push Hook' || token !== SECRET) return h.response('Unauthorized').code(401)
      const { ref, repository: { name: projectName }, commits } = request.payload

      console.log(ref, projectName,commits,555)

      /** to do something */

      return h.response('OK').code(200)
    }
  }
])

server.start().then(() => {
  console.log('Server running at:', server.info.uri)
})
```