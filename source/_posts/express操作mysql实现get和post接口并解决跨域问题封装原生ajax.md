---
title: express操作mysql实现get和post接口并解决跨域问题封装原生ajax
date: 2019-04-06 12:50:11
categories: "日常笔记"
tags:
	- mysql
	- node
	- express
	- ajax
---

### 实现一个post接口

打开Navicat Premium 设计一个新闻评论表

![1554526464133](1554526464133.png)

[使用promise封装mysql实现第一个接口设计](<https://shenxiaobu.github.io/2019/03/29/%E4%BD%BF%E7%94%A8promise%E5%B0%81%E8%A3%85mysql%E5%AE%9E%E7%8E%B0%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1/>)

在这的基础上，在router.js上添加代码

```js
//评论新闻列表
router.post('/postnewscomments',function(req,res){
	req.on('data',function(data){
		data = JSON.parse(data)
		console.log(data)
		var params = [data.username,data.add_time,data.content,data.newsid]
		var sql = "insert into newscomments (username,add_time,content,newsid) values(?,?,?,?)"
		Mysql.query(sql,params,function(err,results,fields){
			var resData = {}
			if(err){
				resData.status = 1
				resData.message = err
			}else{
				resData.status = 0
				resData.message = results
			}
			res.send(resData)
		})
    })
})
```

由于没有采用表单进行post提交，所以无法通过 req.body 获取表单提交的数据，应该使用 req.on('data',function(data){}  获取ajax里面 send 的数据。

为了解决跨域，还得在router.js文件前面添加代码

```js
var express = require('express')
var router = express.Router()

router.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});
```

index.html界面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./common.js"></script>
    <title>Document</title>
</head>
<body>
        <script>
            $(function(){
                var data = {}
                //获取content
                var a = document.getElementById("content");
                    console.log(a)
                    a.addEventListener("change",function(e){
                        data.content = e.target.value;
                    })

                //点击提交   
                document.getElementById("btn").onclick = function(){
                    var inputs = document.querySelectorAll("input")
                    console.log(inputs)
                    
                    inputs.forEach(item => {
                        item.name ? data[item.name] = item.value : '';
                    });
                    data.add_time = getTime() ;
                    console.log(data)
                    // postAjax("http://127.0.0.1:3000/postnewscomments",data,function(data){
                    //     if((JSON.parse(data).status) == 0){
                    //         console.log("提交成功")
                    //     }else{
                    //         console.log(JSON.parse(data).message)
                    //     }
                    // })

                    Ajax({
                        type: "post",
                        url: "http://127.0.0.1:3000/postnewscomments",
                        data: data,
                        success: function(data){
                            if((JSON.parse(data).status) == 0){
                                console.log("提交成功")
                            }else{
                                console.log(JSON.parse(data).message)
                            }
                        }
                    })

                }

                //请求数据
                Ajax({
                    type: "get",
                    url: "http://127.0.0.1:3000/api/getnewsList",
                    // data: {
                    //     newsid: 1,
                    //     pageIndex: 1
                    // },
                    data: "newsid=1&pageIndex=1",
                    success: function(data){
                        console.log(data)
                    }
                })
                var  getData = {
                        newsid: 1,
                        pageIndex: 1
                    };
                getAjax("http://127.0.0.1:3000/api/getnewsList",getData,function(data){
                    console.log(data)
                })
                getAjax("http://127.0.0.1:3000/api/getnewsList","newsid=1&pageIndex=2",function(data){
                    console.log(data)
                })

                 //请求数据
                 Ajax({
                    type: "get",
                    url: "http://127.0.0.1:3000/api/getimgcategory",
                    success: function(data){
                        console.log(data)
                    }
                })

                getAjax("http://127.0.0.1:3000/api/getimgcategory",function(data){
                    console.log(data)
                })
            })
            </script>
        <div class="div-box">
            <label for="content">评论内容</label>
            <textarea name="content" id="content"></textarea>
        </div>
        <div class="div-box">
            <label for="newsid" >ID</label>
            <input name="newsid" id="newsid" type="text" value="2">
        </div>
        <div class="div-box">
                <label for="username" >用户名</label>
                <input name="username" id="username" type="text" value="小布">
        </div>
        <div class="div-box">
            <input type="button" id="btn" value="提交评论">
        </div>

      
</body>
</html>
```

common.js

原生js里面的ajax的post请求里面的send(string)必须是string，是字符串类型

![1554527403079](1554527403079.png)

```js

/**
 * @ 使用get方式获取请求数据
 * 第一个参数为  url 请求的地址
 * 第二个参数为 data 请求的地址的参数（为空可省略）
 * 第三个参数为 回调函数  第二个参数为空的情况下，就是第二个参数
 */
function getAjax(){
    console.log(arguments.length)
    var arg = arguments;
    var xmlhttp;
    //拼接数据
    if(arguments.length == 3){
        if(typeof(arg[1])=='string'){
            arg[0] += "?";
            arg[0] += arg[1];
        }else{
            //如果是对象，转化为字符串，"?id=1&name=xiaobu"
            var str="";
            var i = 0;
            for(var key in arg[1]){
               i++;
               str +=  i == 1 ? "?"+key+"="+arg[1][key] : "&"+key+"="+arg[1][key];
            };
            arg[0] += str;
        }
        console.log(arg[0])
    }
    //创建异步对象
    if (window.XMLHttpRequest){
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else{
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //请求头（get方式可以省略）
    //请求行
    xmlhttp.open("get",arg[0],true);
    //回调函数
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            arg.length == 2 ? arg[1](xmlhttp.responseText):arg[2](xmlhttp.responseText);
        }
    }
    //发送请求主体（get方式 send里面是null）
    xmlhttp.send();
}

/**
 * post 上传数据
 * 第一个参数为  url 请求的地址
 * 第二个参数为 data 请求的地址的参数（为空可省略）
 * 第三个参数为 回调函数  第二个参数为空的情况下，就是第二个参数
 */
function postAjax(){
    var xmlhttp;
    var arg = arguments;
    //创建异步对象
    if (window.XMLHttpRequest){
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else{
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //请求行
    xmlhttp.open("post",arg[0],true);
    //请求头
    //有数据才要设置
    if(arg[1]){
        xmlhttp.setRequestHeader('Content-type','application/www-x-form-urlencoded');
    }
    //回调函数
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            arg.length == 2 ? arg[1](xmlhttp.responseText) : arg[2](xmlhttp.responseText);
        }
    }
    // console.log(data = arg.length == 2 ? "":arg[1]);
    //发送请求主体（必须转化为字符串）
    xmlhttp.send(data = arg.length == 2 ? "":JSON.stringify(arg[1]));
}


/**
 * Ajax请求
 * 参数是一个对象
 * 对象内有 请求方式，请求地址，请求携带的数据，回调函数
 */

    function Ajax(options){
        var xmlhttp;
        //创建异步对象
        if (window.XMLHttpRequest){
            // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        else{
            // IE6, IE5 浏览器执行代码
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        if(options.type == 'get'){
            if(typeof(options.data)=='string'){
                options.url += "?";
                options.url += options.data;
            }else{
                var str="";
                var i = 0;
                for(var key in options.data){
                   i++;
                   str +=  i == 1 ? "?"+key+"="+options.data[key] : "&"+key+"="+options.data[key];
                };
                options.url += str;
            }
            console.log(options.url)
        }
        //创建请求行
        xmlhttp.open(options.type,options.url,true);
         //创建请求头
        if(options.type == 'post'&&options.data){
            xmlhttp.setRequestHeader('Content-type','application/www-x-form-urlencoded');
        }
        //回调函数
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                options.success(xmlhttp.responseText);
            }
        }
        //发送主体
        xmlhttp.send(options.type == 'get'? '': JSON.stringify(options.data));
    }



/**
 *  获取当前时间戳
 */
    function getTime(){
        var mydate = new Date();
        var year = mydate.getFullYear();
        var month = JSON.stringify(mydate.getMonth() + 1).padStart(2,"0");
        var day =  JSON.stringify(mydate.getDate()).padStart(2,"0");
        var hour =  JSON.stringify(mydate.getHours()).padStart(2,"0");
        var min =  JSON.stringify(mydate.getMinutes()).padStart(2,"0");
        var second = JSON.stringify(mydate.getSeconds()).padStart(2,"0");
        return year+"-"+month+"-"+day+" "+hour+":"+min+":"+second;
    }
```

router.js

```js
var express = require('express')
var router = express.Router()
var Mysql = require('./mysqlFun') 

router.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

//获取轮播图
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

//获取菜单列表
router.get("/api/getmenu",function(req,res){
		var data = {}
		var sql = "select * from menu"
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

//获取图片分类
router.get("/api/getimgcategory",function(req,res){
	var data = {}
	var sql = "select * from imgcategory"
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

//获取图片列表
router.get("/api/getimgList/:id",function(req,res){
	var data = {}
	var id = req.params.id
	var sql = id == 0 ? "select * from img_list":`select * from img_list where category_id = ${id}` 
	
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

//获取新闻列表
router.get("/api/getnewsList/:pageIndex",function(req,res){
	var data = {}
	var pagesize = 10
	var startrow = (req.params.pageIndex - 1) * pagesize 
	var sql = `select * from newslist limit ${startrow},${pagesize}` 
	
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
//获取新闻列表
router.get("/api/getnewsList",function(req,res){
	var data = {}
	var pagesize = 10
	var startrow = (req.query.pageIndex - 1) * pagesize 
	var sql = `select * from newslist limit ${startrow},${pagesize}` 
	
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
//获取新闻评论列表
router.get("/api/getnewscomments/:newsid/:pageIndex",function(req,res){
	var data = {}
	var pagesize = 10
	var id = req.params.newsid
	var startrow = (req.params.pageIndex - 1) * pagesize 
	var sql = `select * from newscomments where newsid = ${id} limit ${startrow},${pagesize}` 
	
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

//评论新闻列表
router.post('/postnewscomments',function(req,res){
	req.on('data',function(data){
		data = JSON.parse(data)
		console.log(data)
		var params = [data.username,data.add_time,data.content,data.newsid]
		var sql = "insert into newscomments (username,add_time,content,newsid) values(?,?,?,?)"
		Mysql.query(sql,params,function(err,results,fields){
			var resData = {}
			if(err){
				resData.status = 1
				resData.message = err
			}else{
				resData.status = 0
				resData.message = results
			}
			res.send(resData)
		})
    })
})


module.exports = router
```

app.js

```js
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())

var router = require('./router')
app.use(router)

app.listen(3000,function(){
    console.log("server is running at 127.0.0.1:3000")
})
```

mysql.config.js

```js
module.exports = {
    host : 'localhost',
    port : 3306,//端口号
    database : 'vueproject1',//数据库名
    user : 'root',//数据库用户名
    password : 'root'//数据库密码
};
```

mysqlFun.js

```js
var mysql = require('mysql')

var mysqlConfig = require('./mysql.Config')

module.exports = {
	// query: function(sql,params){
	// 	return new Promise(function(resolve , reject){
	// 		var connection = mysql.createConnection(mysqlConfig);
	// 		connection.connect(function(err){
	// 			if(err){
	// 				console.log(err)
	// 				return reject(err)
	// 			}
	// 			connection.query(sql,params,function(err,results,fields){
	// 				if(err){
	// 					console.log(err)
	// 					return reject(err)
	// 				}
	// 				var options = {};
	// 				options.results = results;
	// 				options.fields = fields;
	// 				resolve(options)
	// 			})
	// 			connection.end(function(err){
	// 				if(err){
	// 					console.log(err)
	// 					return reject(err)
	// 				}
	// 			})
	// 		})
	// 	})
	// }
	// query: function(sql,params,callback){
	// 	var connection = mysql.createConnection(mysqlConfig);
	// 	connection.connect(function(err){
	// 		if(err) return callback(err)
	// 		connection.query(sql,params,function(err,results,fields){
	// 			if(err) return callback(err)
	// 			callback(null,results,fields)
	// 		})
	// 		connection.end(function(err){
	// 			if(err) return callback(err)
	// 		})
	// 	})
	// }

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





