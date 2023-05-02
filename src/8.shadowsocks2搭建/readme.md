> 项目源码： https://github.com/shadowsocks/go-shadowsocks2

# 服务端配置

#### 1. 二进制文件的配置

##### ------------------------------- 电脑本地 ----------------------------------- 

1. 下载二进制文件(`https://github.com/shadowsocks/go-shadowsocks2/releases`)，解压并重命名为 `shadowsocks2`,(scp shadowsocks2 root@x.x.x.x:/opt/bin/)将文件上传到服务器

##### ------------------------------- 服务器 -----------------------------------

2. 将 `shadowsocks2` 文件放到 `/opt/bin` 目录下，并将文件到权限设置为 `711` ：
```shell
sudo chmod 711 /opt/bin/shadowsocks2
```
#### 2. 创建服务

1. 创建文件：
```shell
sudo vim /etc/systemd/system/shadowsocks2.service
```

2. 添加文件内容
```shell

# https://github.com/shadowsocks/go-shadowsocks2
[Unit]
Description=shadowsocks2
After=syslog.target
After=network.target

[Service]
RestartSec=2s
Type=simple
User=root
Group=root
WorkingDirectory=/var/log/shadowsocks2/
ExecStart=/opt/bin/shadowsocks2 -s 'ss://AEAD_CHACHA20_POLY1305:you_password@:8080'(密码、端口号)
Restart=always

[Install]
WantedBy=multi-user.target

```

3. 创建日志目录
```sh
sudo mkdir -p /var/log/shadowsocks2/
```

4. 启用服务
```shell
sudo systemctl enable shadowsocks2
sudo systemctl daemon-reload
sudo systemctl restart shadowsocks2
```

# 客户端使用
windows shadowsocks 下载：https://github.com/shadowsocks/shadowsocks-windows/releases
android shadowsocks 下载：https://github.com/shadowsocks/shadowsocks-android/releases
