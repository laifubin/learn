# Windows 7 安装nodejs突破V12版本

## 方法一
前提已经安装了低版本的nodejs；下面方法可以安装V16.0.0及以下版本的nodejs
1. 设置系统或者用户的环境变量

   \- 右击计算机属性=>高级系统设置=>高级=>环境变量

   \- 如下图所示，添加`NODE_SKIP_PLATFORM_CHECK=1`

2. 到nodejs官网下载对应版本的压缩包文件

   [node-v16.0.0-win-x64.zip]: https://nodejs.org/en/download/releases/

   解压并重命名为nodejs

3. 查看目前node安装目录：`npm root -g`，
   显示：`C:\Program Files\nodejs\node_modules`
   来到目录`C:\Program Files\`，并把该目录下的nodejs目录更换为刚才下载的nodejs目录
4. node -v 查看版本，输出对应的版本即可

## 方法二
1. 下载nvm并解压即可： [nvm-setup.zip]: https://github.com/coreybutler/nvm-windows/releases
2. 查看当前已下载的node版本：`nvm ls`
3. nvm下载指定版本的：nvm install 16.0.0（可以下载更高的版本，但use时不支持）
4. 切换使用该版本的node：nvm use 16.0.0
5. 查看node版本号：node -v
6. 若有提示警告，根据提示添加环境变量就行了