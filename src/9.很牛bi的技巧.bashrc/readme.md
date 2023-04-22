#### 今天一早昌哥教了一个别名启动项目的设置，这是一个linux的命令，window的话在git bash命令窗口可用。

1. 在当前用户创建一个  `.bashrc` 文件：`code ~/.bashrc`, 用vim创建也可以
```shell
code ~/.bashrc
```

2. 内容为`alias name="your command"`
```js
alias p="pnpm"
alias oms="pnpm dev-saas --zh-oms"
```
配置完，重新打开一个命令行窗口就可以使用了，比如：查看pnpm的版本，`p -v`，可以不用全名了`pnpm -v`
[参考图1](./2023-04-22_09-22-27.png)
[参考图2](./2023-04-22_09-27-06.png)