---
title: promise
date: 2019-03-17 21:49:43
categories: "日常记录"
tags:
	- promise
	- node
---

#### promise

创建一个文件取名叫做 promise，下面包含一个files文件夹，files下面有三个txt文件

> promise
>
> > /files
> >
> > > 1.txt
> > >
> > > 2.txt
> > >
> > > 3.txt
> >
> > promise1.js

三个txt文件的内容与文件名一致。 1.txt的文件内容是  1.txt  以此类推

在promise文件下写一个文件读取的操作

```js
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,data) => {
    if(err) throw err
    console.log(data)
})
```

在该根目录下执行命令   `node  promise1.js`  输出结果 1.txt    

封装一个根据路径获取文件内容的方法  --  getFileByPath()

注释掉上面的代码，重新写一个

```js
const fs = require('fs')
const path = require('path')
function getFileByPath(path){
    fs.readFile(path,'utf-8',(err,data) => {
        if(err) throw err
        console.log(data)
    })
}
const a = path.join(__dirname,'./files/1.txt')
getFileByPath(a)
```

在该根目录下执行命令   `node  promise1.js`  输出结果 1.txt    ,虽然能输出，但是我们并不能拿到data的数据，无法对data做用户想要的操作。首先试着用return，看下能不能返回值。

```js
const fs = require('fs')
const path = require('path')
function getFileByPath(path){
    fs.readFile(path,'utf-8',(err,data) => {
        if(err) throw err
       return data
    })
}
const a = path.join(__dirname,'./files/1.txt')
var b = getFileByPath(a)
console.log(b)

```

在该根目录下执行命令   `node  promise1.js`  输出结果 undefined 

由于读取文件操作是异步操作，所以我们不该使用return，而应该想到 回调函数 callback。

```
const fs = require('fs')
const path = require('path')
function getFileByPath(path,callback){
    fs.readFile(path,'utf-8',(err,data) => {
        if(err) throw err
        callback(data)
    })
}
const a = path.join(__dirname,'./files/1.txt')
getFileByPath(a,data => {
    console.log(data)
})

```

在该根目录下执行命令   `node  promise1.js`  输出结果 1.txt ,这样我们就能在这个方法内对数据做调用者想要做的事情。不足之处就是没有对错误的时候进行处理，接下来来处理错误的回调函数

```js
const fs = require('fs')
const path = require('path')
function getFileByPath(path,callback){
    fs.readFile(path,'utf-8',(err,data) => {
        //如果报错了，进入if分支后，if后面的代码就不用执行了，用return 结束掉
        if(err) return callback(err)
        callback(data)
    })
}
const a = path.join(__dirname,'./files/1.txt')
getFileByPath(a,data => {
    console.log(data)
})
```

在该根目录下执行命令   `node  promise1.js`  输出结果 1.txt ，如果把文件改为不存在的文件，再执行命令 `node  promise1.js`  输出结果为

```
{ Error: ENOENT: no such file or directory, open 'promise\files\4.txt'
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'promise\\files\\4.txt' }
```

上面的例子没有对结果进行判断，不知道数据是成功的数据还是失败的数据，接下来就来解决这一个问题

```js
/*我们规定：如果获取成功，返回的数据放置在callback函数参数的第二个位置，
此时第一个位置的参数放一个 null；
如果获取失败，则第一个参数放置 err，第二个位置放置一个undefined*/

const fs = require('fs')
const path = require('path')
function getFileByPath(path,callback){
    fs.readFile(path,'utf-8',(err,data) => {
        //如果报错了，进入if分支后，if后面的代码就不用执行了，用return 结束掉
        if(err) return callback(err)
        callback(null，data)
    })
}
const a = path.join(__dirname,'./files/1.txt')
getFileByPath(a,（err,data) => {
    if(err) return console.log(err.message)
    console.log(data)
})
```

执行命令   `node  promise1.js`  输出结果 1.txt ，执行文件不存在时，输出为

`ENOENT: no such file or directory, open 'promise\files\4.txt'`

尽管上面的方法让我们能够知道数据是 来自 获取失败的  还是来自获取成功的，但是

失败和成功共用了同一个回调函数，这是不推荐的，接下来是用两个回调函数来做。

```js
const fs = require('fs')
const path = require('path')
function getFileByPath(path,succCb,errCb){
    fs.readFile(path,'utf-8',(err,data) => {
        //如果报错了，进入if分支后，if后面的代码就不用执行了，用return 结束掉
        if(err) return errCb(err)
        succCb(data)
    })
}
const a = path.join(__dirname,'./files/1.txt')
getFileByPath(a,err => {
   console.log(err)
},data => {
     console.log(data)
})
```

`注意：成功的回调函数一定要调用，失败的回调函数不一定要调用，需要的时候调用`

这样就初步实现了我们想要的通过路径获取文件内容方法，接下来完成一个需求

```js
//需求：先读取文件 1.txt，再读取文件 2.txt，再读取文件 3.txt
const fs = require('fs')
const path = require('path')
function getFileByPath(path,succCb,errCb){
    fs.readFile(path,'utf-8',(err,data) => {
        //如果报错了，进入if分支后，if后面的代码就不用执行了，用return 结束掉
        if(err) return errCb(err)
        succCb(data)
    })
}
const a = path.join(__dirname,'./files/1.txt')
const b = path.join(__dirname,'./files/2.txt')
const c = path.join(__dirname,'./files/3.txt')
getFileByPath(a,data => {
     console.log(data)
     getFileByPath(b,data => {
         console.log(data)
         getFileByPath(c,data => {
            console.log(data)
        })
    }) 
})
```

执行命令 `node promise1.js`  输出结果为

```
1.txt
2.txt
3.txt
```

满足需求，但是这样的写法，如果需求是十个文件的话，代码难看，会陷入一个回调地狱。

所以接下来引入 promise

### promise

###### 概念

1. Promise 是一个 构造函数，既然是构造函数，那么，我们就可以

   new Promise() 得到一个 Promise的实例；

2. 在pPromise上，有两个函数，分别叫做 resolve（成功之后的回调函数）

   和 reject（失败之后的回调函数）

3. 在Promise构造函数的Prototype 属性上，有一个 .then()方法，也就说，只要是

   Promise构造函数创建的实例，都可以访问到.then() 方法

4. Promise 表示一个 异步操作；每当我们new一个 Promise 的实例，这个实例 就表示一个具体的异步操作。

5. 既然Promise 创建的实例，是一个异步操作，那么这个异步操作的结果只能有

   两种状态

   1. 状态1： 异步执行成功了，需要在内部调用 成功的 回调函数 resolve 把

      结果返回给调用者

   2. 状态2： 异步执行失败了，需要在内部调用失败的回调函数 reject 把结果

      返回给调用者

   3. 由于 Promise 的实例，是一个异步操作，所以，内部拿到操作的结果后，

      无法使用 return 把操作结果返回给调用者；这时候，只能使用回调函数的

      形式，来吧成功或者失败的结果返回给调用者

6. 我们可以在 new出来的 Promise 实例上，调用 .then()方法，【预先】为这个 

   Promise异步操作，指定 成功（resolve）和失败（reject）回掉函数

![1552837375561](1552837375561.png)



新建一个promise2.js

```js
//注意：这里new出来的promise，只是代表【形式上】的一个异步操作；
//什么是形式上的异步操作：就是说，我们只知道它是一个异步操作，但是做什么
//具体的的异步事情不清楚
var promise = new Promise()
```

```js
//这是一个具体的异步操作，其中，使用function指定一个具体的异步操作
var promise = new Promise(function(){
	//这个function内部写的就是具体的异步操作！！！
})
```

```js
//使用promise执行一个异步的读文件操作
const fs = require('fs')
//每当new一个 Promise实例的时候，就会立即执行这个异步操作中的代码
//也就是说，new的时候，除了能够得到一个promise实例之外，还会立即调用
//我们为promise构造函数传递的那个function，执行function中的异步操作
var promise = new Promise(function(){
    fs.readFile('./files/2.txt','utf-8',(err,data) => {
        if (err) throw err
        console.log(data)
    })
})
```

一执行命令立马  显示2.txt的内容。说明new出来的实例会直接执行里面的代码，下面完成一个需求，当调用的时候再执行。

注意：在js中，只有function才能按需去执行，其他的代码都会立即执行，除非把那个方法写到function去，才能按需执行。 所以我们用function把promise实例包住就可以了。

```js
//初衷：给路径，返回读取到的内容
function getFileByPath(fpath){
	var promise = new Promise(function(){
    fs.readFile(fpath,'utf-8',(err,data) => {
        if (err) throw err
        console.log(data)
    	})
	})
}
getFileByPath('./files/2.txt')
```

这样子就只有调用的时候才会显示内容，但是对错误没有做处理



```js
const fs = require('fs')
function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,data) => {
            if(err) return reject(err)
            resolve(data)
        })
    })
    return promise
}

var p = getFileByPath('./files/2.txt')
p.then(function(data){
    console.log(data+'----')
},function(err){
     console.log(err+'----')
})
```

![1552876118030](1552876118030.png)



#### 使用primise解决回调地狱

新建一个 promise3.js

```js
const fs = require('fs')

function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
    return promise
}
//在上一个.then中，返回一个新的promise实例，就可以继续使用下一个 .then来处理
getFileByPath('./files/1.txt')
.then(function(data){
    console.log(data)
    return getFileByPath('./files/2.txt')
})
.then(function(data){
    console.log(data)
    return getFileByPath('./files/3.txt')
})
.then(function(data){
    console.log(data)
})
```

这样就解决了回调地狱的问题

存在的问题就是没有对失败时候进行处理

```js
//如果，前面的promise执行失败，我们不想让后续的pomis操作被终止，可以为每个
//promisr指定 失败的回调
const fs = require('fs')

function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
    return promise
}
//在上一个.then中，返回一个新的promise实例，就可以继续使用下一个 .then来处理
getFileByPath('./files/4.txt')  //4.txt不存在
.then(function(data){
    console.log(data)
    return getFileByPath('./files/2.txt')
},function(err){
    console.log("这是失败的结果"+err.message)
    return getFileByPath('./files/2.txt')
})
.then(function(data){
    console.log(data)
    return getFileByPath('./files/3.txt')
})
.then(function(data){
    console.log(data)
})
console.log("okok")
```

输出结果为

```
okok
这是失败的结果ENOENT: no such file or directory, open 'G:promise\files\4.txt'
2.txt
3.txt
```

```js
//有时候我们有这样的需求，和上面的需求正好相反，如果后续的promise执行依赖于前面
//的promise执行结果，如果前面的失败了，则后面的就没有执行下去的意义了，此时我们
//想要实现一旦有报错则立即终止 所有 promise 的执行

const fs = require('fs')

function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
    return promise
}
//在上一个.then中，返回一个新的promise实例，就可以继续使用下一个 .then来处理
getFileByPath('./files/4.txt')  //4.txt不存在
.then(function(data){
    console.log(data)
    return getFileByPath('./files/2.txt')
})
.then(function(data){
    console.log(data)
    return getFileByPath('./files/3.txt')
})
.then(function(data){
    console.log(data)
})
 .catch(function(err){
    console.log(err.message)
})
console.log("okok")
```

输出结果为

```
okok
ENOENT: no such file or directory, open 'G:promise\files\4.txt'
```

后续的代码没有继续执行



#### promise的使用场景

比如数据库有一张表是 人员信息，人员信息里面有 职业id，得再从职业表中获取职业名称。

```json
//使用data.json代替数据库
{
	"users":[
		{
			"id": 1,
			"name": "小布",
			"age": 24,
			"jobId": 3
		},
		{
			"id": 2,
			"name": "沈延祥",
			"age": 23,
			"jobId": 2
		},
		{
			"id": 3,
			"name": "祥你的365夜",
			"age": 22,
			"jobId": 1
		}
	],
	"jobs":[
		{
			"id": 1,
			"job": "学生" 
		},
		{
			"id": 2,
			"job": "老师" 
		},
		{
			"id": 3,
			"job": "演员" 
		}
	]
}
```

##### json-server

定义一个data.json文件

```shell
#全局安装一个 json-server  一个能够使用地址访问文件的包
cnpm install json-server -global
```

在所在目录执行命令，打开要成为接口的json文件

```shell
json-server --watch data.json
```

在浏览器输入地址，即可获取数据，同理使用ajax请求也可以获取数据

跟地址为： 127.0.0.1:3000

新建一个index.html文件

```html
<!--index.html文件-->
<!doctype html>
	<head>
		<title>promise</title>
		<meta content-type="text/html" charset='utf-8'>
	</head>
	<body>
		<form action="1111.js" id="box">
		</form>
		<script type="text/template" id="temp">
			<div>
				<label for="name">姓名</label>
				<input type="text" value="{{user.name}}" id="name" >
			</div>
			<div>
				<label for="age">年龄</label>
				<input type="text" value="{{user.age}}" id="age" >
			</div>
			<div>
				<label for="job">职业</label>
				<select>
					{{each jobs}}
					{{if user.jobId == $value.id}}
					<option value="{{$value.id}}" selected >{{$value.job}}</option>
					{{else}}
					<option value="{{$value.id}}" >{{$value.job}}</option>
					{{/if}}					
					{{/each}}
				</select>
			</div>
		</script>
	</body>
	<script src="node_modules/jquery/dist/jquery.min.js"></script>
	<script src="node_modules/art-template/lib/template-web.js"></script>
	<script>
		$(function(){
            //自己封装一个ajax的get请求

				// function get(url,callback){
				// 	var xml = new XMLHttpRequest();

				// 	xml.onload = function(){
				// 		callback(xml.responseText)
				// 	}
				// 	xml.open('get',url,true);
				// 	xml.send()
				// }

				// get('http://localhost:3000/user/2',function(userdata){
				// 	get('http://localhost:3000/jobs',function(jobsdata){
				// 		console.log(userdata)   //是一个字符串，需要转以为对象
				// 		var htmlStr = template('temp',{
				// 			user: JSON.parse(userdata),
				// 			jobs: JSON.parse(jobsdata)
				// 		})
				// 		document.querySelector("#box").innerHTML = htmlStr;
				// 	})
				// })
            
			// $.get('http://localhost:3000/user/2',function(userdata){
			// 	$.get('http://localhost:3000/jobs',function(jobdata){
			// 		console.log(userdata)
			// 		console.log(jobdata)
					// var htmlStr = template('temp',{
					// 	user: userdata,
					// 	jobs: jobdata
					// })
			// 		console.log(htmlStr);
			// 		$('#box').html(htmlStr)
			// 	})
			// })


			//使用jquery的promise
			var obj = {}
			$.get('http://localhost:3000/user/2')
			.then(function(userData){
				obj.user = userData;
				return $.get('http://localhost:3000/jobs')
			})
			.then(function(jobData){
				obj.jobs = jobData;
				var htmlStr = template('temp',obj)
				console.log(htmlStr);
				$('#box').html(htmlStr)
			})
            
            //封装promise版的 get方法
			function promiseGet(url){
				return new Promise(function(resolve,reject){
					var xml = new XMLHttpRequest();
					xml.onload = function(){
						resolve(JSON.parse(xml.responseText))
					}
					xml.open("get",url,true)
					xml.send()
				})
			}

			promiseGet('http://127.0.0.1:3000/user')
			.then(function(userdata){
				console.log(userdata)      //成功获取到数据
			})


			//封装像jquery那样即可以使用回调函数也可以使用promise的then方法 
			function bothGet(url,callback){
				return new Promise(function(resolve,reject){
					var xml = new XMLHttpRequest();
					xml.onload = function(){
						 //前面加一个callback是防止使用promise方式而没有传递callback函数导致错误
						callback && callback(JSON.parse(xml.responseText))     
						resolve(JSON.parse(xml.responseText))
					}
                    xml.onerror = function(err){
                        reject(err)
                    }
					xml.open("get",url,true)
					xml.send()
				})
			}

			bothGet('http://127.0.0.1:3000/user')
			.then(function(userdata){
				console.log(userdata)      //成功获取到数据
			})

			bothGet('http://127.0.0.1:3000/jobs',function(userdata){
				console.log(userdata)   //成功获取数据
			})

		})

		})
	</script>
</html>
```

因为使用到了 art-template 模板引擎和 jquery，所以得先安装

`cnpm install art-template jquery -S`

![1553848165505](1553848165505.png)

![1553850736436](1553850736436.png)

