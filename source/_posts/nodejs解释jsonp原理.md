---
title: nodejs解释jsonp原理
date: 2019-03-06 21:44:07
categories: 底层原理
tags: 
	- jsonp
	- nodejs
---

### node边实现一个服务器

新建一个jsonp.js的文件，复制下面代码；

```
 const http = require('http');
    // 导入解析 URL 地址的核心模块
    const urlModule = require('url');

    const server = http.createServer();
    // 监听 服务器的 request 请求事件，处理每个请求
    server.on('request', (req, res) => {
      const url = req.url;

      // 解析客户端请求的URL地址
      var info = urlModule.parse(url, true);

      // 如果请求的 URL 地址是 /getjsonp ，则表示要获取JSONP类型的数据
      if (info.pathname === '/getjsonp') {
        // 获取客户端指定的回调函数的名称
        var cbName = info.query.callback;
        // 手动拼接要返回给客户端的数据对象
        var data = {
          name: 'zs',
          age: 22,
          gender: '男',
          hobby: ['吃饭', '睡觉', '运动']
        }
        // 拼接出一个方法的调用，在调用这个方法的时候，把要发送给客户端的数据，序列化为字符串，作为参数传递给这个调用的方法：
        var result = `${cbName}(${JSON.stringify(data)})`;
        // 将拼接好的方法的调用，返回给客户端去解析执行
        res.end(result);
      } else {
        res.end('404');
      }
    });

    server.listen(3000, () => {
      console.log('server running at http://127.0.0.1:3000');
    });
```

在jsonp.js所在文件夹右键打开命令窗口

执行`node jsonp.js`

```js
xiaobu@DESKTOP-P7959T8 MINGW64 ~/Desktop
$ node jsonp.js
server running at http://127.0.0.1:3000

```

这样服务器就打开了

接下来就是客户端这边了

新建一个html文件，代码如下

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  <script>
    function showInfo123(data) {
      console.log(data)
    }
  </script>

<script src="http://127.0.0.1:3000/getjsonp?callback=showInfo123"></script>
<!-- <script>
  show()
</script> -->

</body>

</html>
```

在浏览器中打开这个文件，并查看console日志，就能看到服务器返回的数据。如图

![1551880444096](1551880444096.png)

```
jsonp原理：
	就是利用script标签+回调函数来获取请求的数据
	解决了跨域问题，与ajax请求数据方式完全不同
```

