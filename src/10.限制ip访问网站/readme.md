### 可以通过程序限制，在请求头的拿到ip来限制。这里用的iptables，记录一些简单的防火墙功能都可以通过 iptables 实现。

- 查看外网ip，直接百度输入 `ip` 查询就可以了
  [如图](./ip.png)

- 禁用ip:  `iptables -I INIPUT -s 121.35.2.175 -j DROP`
- 禁用ip段:  ``

- 删除 `iptables -D INPUT 1`
- 显示当前防火墙策略中全部的过滤表信息： `iptables -L`

### 只允许121.35.2.75访问80端口,其他ip都禁止访问
- 禁用所有ip访问该服务器的80端口的： `iptables -I INPUT -p tcp --dport 80 -j DROP`
- 只允许121.35.2.75访问该服务器的80端口，其他ip限制访问：`iptables -I INPUT -s 121.35.2.75 -p tcp --dport 80 -j ACCEPT`

### 禁止192.168.124.5主机访问本机80端口
`iptables -I INPUT -s 192.168.124.5 -p tcp --dport 80 -j DROP`
