学习笔记

## 有限状态机

- 每一个状态都是一个机器

   - 在每一个机器里，我们可以做计算、存储、输出......
   - 所有的这些机器接受的输入是一致的
   - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）

- 每一个机器知道下一个状态
   - 每个机器都有确定的下一个状态（Moore）
   - 每个机器根据输入决定下一个状态(Mealy)

## JS中的有限状态机（Mealy）

```
function state(input) {
    // code...
    return next // 返回值作为下一个状态
}

// call
while(input) {
    // 获取输入
    state = state(input)  // 把状态机的返回值作为下一个状态
}
```

## 浏览器工作原理

- ISO-OSI 七层网络模型

应用层   HTTP

表示

会话

传输   TCP

网络   IP协议 Internet

数据链路  4G/5G/wifi

物理层

- TCP 与 IP 的基础知识

    - 流
    - 端口
    - require('net')
    - 包
    - IP地址
    - libnet/libcap

- HTTP
   - request
   - response

