## gitlab api doc
https://docs.gitlab.com/ee/api/api_resources.html

## gitlab 配置
有些api需要权限的，需要配置

User Settings =>  Access Tokens

[参考图1](./api_config_1.png)
[参考图2](./api_config_2.png)

## 调用 api
```js
// 新建一个 Issues
fetch(
  'http://gitlab.xxxx.xxx/api/v4/projects/319/issues?title=title2&description=description2 @laifubin', 
{
  { 
    headers: {
    'Private-Token': 'zo7DnX9hdTVZZ8q3VPTY'
    }
  }
})
```