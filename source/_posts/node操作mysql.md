---
title: node操作mysql
date: 2019-03-29 01:09:22
categories: "日常笔记"
tags:
	- node
	- express
	- mysql
---

## Node连接Mysql

说到node，可能大家会想到MOngoDB作为数据库，这里将会介绍node与mysql的连接，并分享了封装好的实例代码，在项目开发中可直接使用。下一篇博客将会讲node连接MongoDB。

## 安装Mysql模块

```
npm install mysql
```

## 连接Mysql

```javascript
  /**
 * students.js
 * 操作mysql数据库
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'xiaobu'
});
 
connection.connect();
 
    //查询语句
// connection.query('SELECT * from student', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

    //插入方式 1
// var  addSql = 'INSERT INTO student (name,age,hobbies) VALUES(?,?,?)';
// var  addSqlParams = ['祥', 8 ,'踢球'];
// //增
// connection.query(addSql,addSqlParams,function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
    //插入方式2
    // connection.query('INSERT INTO student VALUES(null,"布鲁克斯", 18 ,"唱歌")',function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    //更新
    // connection.query("UPDATE student SET name = ? WHERE id = ?", ['xiaobu',4],function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
      
    //删除数据
    // connection.query('DELETE FROM student where id=2',function (err, result) {
    //     if (err) throw err;
    //     console.log(result.affectedRows);
    //   });
 
connection.end();
```

host：连接的服务器
user：数据库用户名
password：设置的MySQL密码
database： 要连接的数据库名

## 常用的SQL语句

具体的使用这里不做详细说明，包括select、insert、update、delete等语句。

# Node操作Mysql

**查询**

```javascript
    //查询语句
// connection.query('SELECT * from student', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);  //results是执行的结果，fields是字段
// });
```

**添加**

```javascript
    //插入方式 1
var  addSql = 'INSERT INTO student (name,age,hobbies) VALUES(?,?,?)';
var  addSqlParams = ['祥', 8 ,'踢球'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
    if (err) throw err;
    console.log(result);
  });
    //插入方式2
    connection.query('INSERT INTO student VALUES(null,"布鲁克斯", 18 ,"唱歌")',function (err, result) {
        if (err) throw err;
        console.log(result);
      });
```

**删除**

```javascript
 	//删除数据
    connection.query('DELETE FROM student where id=2',function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows);
      });
```

**更新**

```javascript
 //更新
    connection.query("UPDATE student SET name = ? WHERE id = ?", ['xiaobu',4],function (err, result) {
        if (err) throw err;
        console.log(result);
      });
```

**结束连接**

```javascript
connection.end(function(err) {
});
connection.destroy();
```

这两种都行，第二种是强制结束。

## 封装

说了这么多，感觉操作起来还是挺简单的。在实际开发中，我们想要操作起来更方便，那就让我们自己封装一下来使用。直接上代码：

封装好的代码

1.数据库配置文件

```javascript
module.exports = {
    host : 'localhost',
    port : 3306,//端口号
    database : 'xiaobu',//数据库名
    user : 'root',//数据库用户名
    password : 'root'//数据库密码
};
```

2.封装、暴露方法

```javascript
let mysql = require('mysql');//引入mysql模块

var databaseConfig = require('./mysql.config');  //引入数据库配置模块中的数据

//向外暴露方法
module.exports = {
    query: function(sql,params,callback){
         //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        var connection = mysql.createConnection(databaseConfig);
        connection.connect(function(err){
            if(err) {
                console.log("数据库连接失败")
                return callback(err)
            }
            //开始数据操作
            //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
            connection.query( sql, params, function(err,results,fields ){
                if(err){
                        console.log('数据操作失败');
                       return callback(err)
                    }
                    //将查询出来的数据返回给回调函数
                    callback(null,results, fields);
                    //results作为数据操作后的结果，fields作为数据库连接的一些字段
                    //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                    connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        return callback(err)
                    }
                })
            })
        })
    }
}
```

3.演示实例

```javascript
var express = require('express')
var Student = require('./mysql')
var router = express.Router()

router.get('/',function(req,res){
    res.redirect('/students')
})

//获取数据列表，显示数据
router.get('/students',function(req,res){
    var sql = 'select * from student'
    Student.query(sql,function(err,results, fields){
        if(err) res.send(err)
        res.render("index.html",{
            students: results
        })
    })
})

//点击添加学生，跳转到添加学生界面
router.get('/students/new',function(req,res){
    res.render("new.html")
})

//点击提交，添加学生数据
router.post('/students/new',function(req,res){
    var data = req.body;
    var params = [];
    for(var key in data){
        params.push(data[key])
    }
    console.log(params);
    var sql = 'insert into student (name,gender,age,hobbies) values(?,?,?,?)';
    Student.query(sql,params,function(err,result,fields){
        if(err) res.send(err)
        res.redirect("/students")
    })
})

//点击编辑，跳转到编辑页面
router.get('/students/edit',(req,res) => {
    var id = req.query.id;
    var sql = `select * from student where id = ${id}`;
    Student.query(sql,function(err,results,fields){
        if(err) res.send(err)
        res.render('edit.html',{
            data: results[0]
        })
    })
})

//提交编辑,更新数据
router.post("/students/edit",(req,res) => {
    var data = req.body;
    var sql = 'update student set name = ?,gender = ?,age = ?, hobbies = ? where id = ?';
    var params = [];
    for(var key in data){
        params.push(data[key])
    }
    var id = params.shift();
    params.push(id);
    Student.query(sql,params,function(err,result,fields){
        if(err) res.send(err)
        res.redirect("/students");
    })
})

//点击删除，删除数据
router.get("/students/delete",function(req,res){
    var id = req.query.id;
    var sql = 'delete from student where id = ?'
    Student.query(sql,id,function(err,result,fields){
        if(err) res.send(err)
        res.redirect("/students")
    })
})
module.exports = router
```

app.js

```js
var express = require('express')
var app = express()
var router = require('./router')
var bodyParser = require('body-parser')
//配置art-template模板引擎
app.engine('.html',require('express-art-template'))

//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())

app.use("/node_modules/",express.static('./node_modules/'))
app.use("/public/",express.static('./public/'))

// router(app)
app.use(router)    //将路由挂载到app

app.listen(3000,function(){
    console.log("server is running at 127.0.0.1:3000")
})
```

主要目录如下

> /node_modules
>
> /public
>
> /views
>
> > index.hrml	首页
> >
> > edit.html	更新学生信息界面
> >
> > new.html	添加学生界面
>
> app.js		//项目启动文件
>
> mysql.config.js	//数据库配置
>
> mysql.js           //封装的数据库方法
>
> router.js	//执行操作
>
> package.json
>
> package-lock.json

