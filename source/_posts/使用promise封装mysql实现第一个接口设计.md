---
title: 使用promise封装mysql实现第一个接口设计
date: 2019-03-29 23:19:48
categories: "日常笔记"
tags:
	- mysql
	- promise
	- express
---

### 使用express操作数据库，实现第一个接口

1. 打开`Navicat Premium` 创建一个数据库
2. 设计一个banner表，包含id，img，url，并插入数据
3. 创建一个目录作为项目根目录
4. 在根目录下 执行命令 `npm init -y` 
5. 创建一个文件 app.js 作为项目入口文件
6. 下载 express，mysql，执行命令 `npm i express mysql`

项目目录结构如下

> /node_modules
>
> app.js	//入口文件
>
> router.js	//路由文件
>
> mysql.config.js	//mysql配置文件
>
> mysqlFun.js	//封装mysql方法

```js
//app.js
var express = require('express')
var app = express()

var router = require('./router')

app.use(router)

app.listen(3000,function(){
    console.log("server is running at 127.0.0.1:3000")
})
```

```js
//mysql.config.js
module.exports = {
    host : 'localhost',
    port : 3306,//端口号
    database : 'vueproject1',//数据库名
    user : 'root',//数据库用户名
    password : 'root'//数据库密码
};
```

#### 注意：promise的resolve和reject只能接受一个参数

```js
//mysqlFun.js
var mysql = require('mysql')
var mysqlConfig = require('./mysql.Config')

module.exports = {
	query: function(sql,params){
		return new Promise(function(resolve , reject){
			var connection = mysql.createConnection(mysqlConfig);
			connection.connect(function(err){
				if(err){
					console.log(err)
					return reject(err)
				}
				connection.query(sql,params,function(err,results,fields){
					if(err){
						console.log(err)
						return reject(err)
					}
         //注意：promise的resolve和reject只能接受一个参数
					var options = {};
					options.results = results;
					options.fields = fields;
					resolve(options)
				})
				connection.end(function(err){
					if(err){
						console.log(err)
						return reject(err)
					}
				})
			})
		})
	}
}


```

```js
//router.js
var express = require('express')
var router = express.Router()
var Mysql = require('./mysqlFun') 

router.get("/api/getlunbo",function(req,res){
	var data = {};
	var sql = 'select * from banner'
	Mysql.query(sql)
	.then(function(options){
		data.status = 0;
		data.message = options.results;
		console.log(options.fields);
		res.send(data)
	},function(err){
		data.status = 1;
		data.message = err;
		res.send(data)
	})
	
})

module.exports = router
```

执行命令

```shell
node app.js
```

显示如下

![1553873628324](1553873628324.png)

##### 使用回调函数封装mysql方法

```js
//mysqlFun.js
var mysql = require('mysql')

var mysqlConfig = require('./mysql.Config')

module.exports = {
	query: function(sql,params,callback){
		var connection = mysql.createConnection(mysqlConfig);
		connection.connect(function(err){
			if(err) return callback(err)
			connection.query(sql,params,function(err,results,fields){
				if(err) return callback(err)
				//callback(results,fields)
                //加个null好理解些，没有null时测试也成功
                callback(null,results,fields) 
			})
			connection.end(function(err){
				if(err) return callback(err)
			})
		})
	}
}

```

```js
//router.js
var express = require('express')
var router = express.Router()
var Mysql = require('./mysqlFun') 

router.get("/api/getlunbo",function(req,res){
	var data = {};
	var sql = 'select * from banner'
	Mysql.query(sql,function(err,results,fields){
		if(err) {
			data.status = 1;
			data.message = err;
		}else{
			data.status = 0;
			data.message = results;
		}
		res.send(data)
	})
})

module.exports = router
```

#### 封装一个即能使用回调函数，也能使用promise的mysql操作方法

```js
//mysqlFun.js
//这里的callback && callback(data);相当于 if callback {callback()};
//目的是万一使用的是promise的形式就没有传递回调函数导致出错
var mysql = require('mysql')

var mysqlConfig = require('./mysql.Config')

module.exports = {
    	query: function(sql,params,callback){
		return new Promise(function(resolve,reject){
			var connection = mysql.createConnection(mysqlConfig);
			connection.connect(function(err){
				if(err){
					callback && callback(err)
					reject(err)
					return;
				}
				connection.query(sql,params,function(err,results,fields){
					if(err){
						callback && callback(err)
						reject(err)
						return;
					}
              //注意：reject 和 resolve 只能带一个参数
					var options = {}
					options.results = results;
					options.fields = fields;
					resolve(options)
					callback && callback(null,results,fields)
				})
				connection.end(function(err){
					if(err){
						callback && callback(err)
						reject(err)
						return;
					}
				})
			})
		})
	}
}
```

```js
//router.js
var express = require('express')
var router = express.Router()
var Mysql = require('./mysqlFun') 

router.get("/api/getlunbo",function(req,res){
	var data = {};
	var sql = 'select * from banner'
	// Mysql.query(sql)
	// .then(function(options){
	// 	data.status = 0;
	// 	data.message = options.results;
	// 	console.log(options.fields);
	// 	res.send(data)
	// },function(err){
	// 	data.status = 1;
	// 	data.message = err;
	// 	res.send(data)
	// })

	Mysql.query(sql,function(err,results,fields){
		if(err) {
			data.status = 1;
			data.message = err;
		}else{
			data.status = 0;
			data.message = results;
		}
		res.send(data)
	})
	
})

module.exports = router
```





