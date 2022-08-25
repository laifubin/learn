# 安装依赖包
`npm install husky lint-staged @commitlint/config-conventional @commitlint/cli -D`

- husky 允许我们轻松地处理Git Hooks 并在提交代码时运行我们想要的脚本
- commitlint 检测提交commit提交记录是否符合规范
- lint-staged 检查提交暂存区代码是否符合规范

# eslint初始化配置
`eslint --init` 初始化生成eslint配置文件

# lint-staged
在package.json中的配置

```js
{
  ...
  "lint-staged": {
    "*.{js,ts,vue,css}": "eslint --fix"// eslint 检查文件类型；--fix 自动修改格式错误
  }
}
```
# commitlint
在根目录下创建commitlint.config.js文件


```js
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        'body-leading-blank': [2, 'always'],//body上面有换行
        'footer-leading-blank': [1, 'always'],//footer上面有换行
        'header-max-length': [2, 'always', 108],//header上最大108字符
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',//新功能（feature）
                'fix',//修补bug
                'perf',//优化相关，比如性能提升、体验
                'style',//仅仅修改了空格,格式缩进,逗号等等（不影响代码运行的变动）
                'docs',//文档（documentation）
                'test',//增加测试
                'refactor',//重构（即不是新增功能，也不是修改bug的代码变动）
                'build',//主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
                'ci',//cli配置相关,如对k8s，docker相关配置
                'chore',//构建过程或辅助工具的变动
                'revert',//回滚到上一个版本 
            ],
        ],
    },
}
```
# husky
- 在package.json中添加一个script命令

```js
{
  ...
  "scripts": {
    "husky": "husky install"
  }
}
```

执行npm run husky会在根目录生成一个.husky文件夹，相关配置都在这里

- 在.husky目录创建pre-commit文件

```js
#!/bin/sh
. "$(dirname -- "$0")/_/husky.sh"
npx lint-staged
```

- 创建commit-msg文件

```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx commitlint --edit $1
```

# 禁用 husky
如果某次的提交想要禁用 husky，可以添加参数--no-verify

`git commit --no-verify -m "xxx"`

