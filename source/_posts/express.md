---
title: express
date: 2019-03-25 17:01:26
categories: "日常笔记"
tags:
	- express
	- node
---

### express

##### 创建第一个最简单的express服务

1. 新建一个目录 express_study，在这个目录下执行命令`npm init --yes`

2. 安装express `npm install express --save`

3. 新建一个app.js文件，编辑内容

   ```js
   //引入express模块
   import express = require('express')
   //创建app
   var app = express()
   
   app.get("/",function(req,res){
       res.send("hello express!")
   })
   
   app.listen(3000,function(){
       console.log("app 127.0.0.1:3000 is running ...")
   })
   ```

4. 在执行命令 `node app.js`，然后在浏览器输入地址，成功显示 hello express！

5. ctrl+c退出服务



##### 修改代码自动重启服务器nodemon工具

1. 下载nodemon，`npm install nodemon --global`

2. 使用nodemon 执行文件，`nodemon app.js`  然后就可以实现更改内容不用重启

   服务器了

![1553505409046](1553505409046.png)

3. 点击保存（ctrl + s），服务器自动重启



##### 静态资源

在app.js里面加入一行

```js
//当以 /public/ 开头的时候，去 ./public/目录中找对应的资源
app.use("/public/",express.static("./public/"))
```

就可以在浏览器输入地址查看到相应的静态资源

![1553506461447](1553506461447.png)

如果把代码改为

```js
//当以 / 开头的时候，去 ./public/目录中找对应的资源
app.use(express.static("./public/"))
```

此时访问index.html 页面只需要 输入 127.0.0.1:3000/index.html

![1553506727171](1553506727171.png)



![1553506958425](1553506958425.png)



##### express获取post数据

在express中内置获取表单post请求的API，需要我们使用一个第三方包body-parser

安装

```shell
npm install --save body-parser
```

配置

```js
//引包
var bodyParser = require('body-parser')
//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())
```

[文档](https://www.npmjs.com/package/body-parser)



##### express 使用 art-template

安装：

```shell
npm install art-template --save
npm install express-art-template --save
```

配置：

![1553509168911](1553509168911.png)



![1553512774946](1553512774946.png)



为了使app.js的代码更整洁，把路由部分的代码分离出去

新建一个 router.js的文件，在里面写内容

```js
module.exports = function(app){
    app.use('/',function(req,res){
        res.send("hello router")
    })
}
```

则在app.js中需要引入router.js

```js
var express = require('express')
var router = require('./router')
var app = express()
 	app.use('/node_modules/',express.static('./node_modules/'))
	app.use('/public/',express.static('./public/'))
	router(app)    //引入路由
	app.listen(3000,function(){
    console.log("server is running at 127.0.0.1:3000")
})
```

这样就可以把路由部分写在router.js了，但是这样的路由书写方式还不是我们想要的

express给我们带来了另一种书写方式

```js
//router.js
var express = require('express')
var router = express.Router()
	router.get('/',function(req,res){
        res.send("hello express-router")
	})
module.exports = router
```

app.js 则采用另一种方式引用

```js
//app.js
var express = require('express')
var router = require('./router')

var app = express()
	app.use('/node_modules/',express.static('./node_modules/'))
	app.use('/public/',express.static('./public/'))
	app.use(router)       //把路由容器挂载到app中
	app.listen(3000,function(){
        console.log("server is running in 127.0.0.1:3000")
	})
```



使用模块化设计，由于router.js上也会有很多方法，所以另外新建一个专门用来操作

数据的文件，新建一个 student.js的文件，用来数据操作

```js
/**
 * students.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs = require('fs')
var dbPath = './db.json'


/**
 * 获取所有学生列表
 * return []
 */
    exports.find = function(callback){
        fs.readFile(dbPath,'utf-8',function(err,data){
            if(err){
                return callback(err)
            }
            callback(null,JSON.parse(data).students)
        })
    }

 /**
  * 添加保存学生
  */
    exports.save = function(student,callback){
        fs.readFile(dbPath,function(err,data){
            if(err){
                return callback(err)
            }
            var db = JSON.parse(data)
            student.id = parseInt(db.students.length>=1?db.students[db.students.length-1].id:0) + 1
            db.students.push(student)
            var fileData = JSON.stringify(db)
            fs.writeFile(dbPath,fileData,function(err){
                if(err){
                    callback(err)
                }else{
                    callback(null)
                }
            })
        })
    }

/**
 * 跳转编辑页
 */
    exports.goEdit = function(id,callback){
        fs.readFile(dbPath,'utf-8',function(err,data){
            if(err){
                return callback(err)
            }
            var db = JSON.parse(data)
            var stu = db.students.find(item => {
                return item.id == id
            })
            callback(null,stu)
        })
    }

/**
 * 更新学生
 */
    exports.updateById = function(student,callback){
        fs.readFile(dbPath,'utf-8',function(err,data){
            if(err){
                return callback(err)
            }
            var db = JSON.parse(data)
            var stu = db.students.find(item => {
                return item.id == student.id  //不要使用全等
            })
            for(var key in student){
                stu[key] = student[key]
            }

            var fileData = JSON.stringify(db)
            fs.writeFile(dbPath,fileData,function(err){
                if(err){
                    callback(err)
                }else{
                    callback(null)
                }
            })

        })
    }


/**
 * 删除学生
 */

    exports.delete = function(id,callback){
        fs.readFile(dbPath,'utf-8',function(err,data){
            if(err){
                return callback(err)
            }
            var db = JSON.parse(data)
            var deleteId = db.students.findIndex(item => {
                return item.id == id
            })
            db.students.splice(deleteId,1)

            fs.writeFile(dbPath,JSON.stringify(db),function(err){
                if(err){
                    return callback(err)
                }
                callback(null)
            })
        })
    }
```

在router.js上引入

```js
var fs = require('fs')
var Student = require('./students')
var express = require('express')
var router = express.Router()
router.get('/students',function(req,res){
     Student.find(function(err,data){
        if(err){
            return res.status(500).send('server error')
        }
        res.render('index.html',{
            title: 'hello world',
            students: data     //data就是获取到的学生表
        })
    })
})
router.get('/students/new',function(req,res){
  res.render("new.html")
})
router.post('/students/new',function(req,res){
    // console.log(req.body)
    Student.save(req.body,function(err){
        if(err){
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit',function(req,res){
    res.send("/students/new")
})
router.post('/students/edit',function(req,res){
    res.send("/students/new")
})
router.get('/students/delete',function(req,res){
    res.send("/students/new")
})

module.exports = router
```

```js
var express = require('express')
var fs = require('fs')
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



### mongodb 的安装

[下载地址](https://www.mongodb.com/download-center/community)

安装完 

![1553590137499](1553590137499.png)

```
将mongodb路径C:\Program Files\MongoDB\Server\4.0\bin添加到环境变量
```

启动：

```
在想要执行mongodb操作的盘符下新建一个文件夹data，data下再新建一个db文件夹
```

然后再命令窗口输入 mongod  回车

```shell
mongod
```

![1553606652312](1553606652312.png)

执行完就代表启动成功了

关闭的话：在命令窗口  ctrl+c  或者关闭命令窗口

```shell
#mongodb 默认使用执行mongod 命令所处盘符目录下的 /data/db 作为自己的数据库存
#储目录
#所以在第一次执行该命令之前，先自己手动新建一个 /data/db
mongod
```

如果想要修改默认的存储目录，可以

```shell
mongod --dbpath=书存储目录路径
```

停止

```
在开启服务的控制台，直接 ctrl+c 即可停止
或者直接关闭开启服务器的控制台也可以
```

8.4 连接数据库

连接：

```shell
# 该命令默认连接本机的mongodb 服务
mongo
```

退出：

```shell
# 在连接状态输入 exit 退出连接
exit
```

8.5 基本命令

- `show dbs`

  查看显示所有数据库

- `db`

  查看当前操作的数据库

- `use 数据库名称`

  切换到指定数据（如果没有，会新建）

- `show collections` 

  - 展示数据库的集合

- `db.集合.find()`

  - 展示数据

- 插入数据

  - db.集合名.inserOne({"name":"张三"})
- ![1553609921448](1553609921448.png)

####  8.6 在node中操作mongodb

​	8.6.1 使用官方的 mongodb 包来操作

​	

​	8.6.2 使用第三方包 mongoose 操作





### 使用mongoose工具操作mongodb实现前面的学生管理系统

新建一个文件夹 ，将刚刚使用文件操作的学生管理系统代码除了node_nodules文件夹

都复制过来，删掉db.json(不用文件存储数据了)

文件目录如下

> mongoose_crud
>
> > public
> >
> > views
> >
> > > index.html
> > >
> > > edit.html
> > >
> > > new.html
> >
> > app.js
> >
> > router.js
> >
> > package-lock.json
> >
> > package.json
> >
> > students.js

1. 执行`npm install` 安装依赖包
2. 重写student.js文件内容

```js
//students.js  
/*
* 使用mongoose操作mongodb实现学生信息管理
* 引入mongoose，导出student模块
*/

var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接student数据库，没有的话会创建一个student数据库
mongoose.connect("mongodb://loaclhost/student"，{useNewUrlParser: true})

//制作集合结构（表结构）
var studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: Number,
        enum:[0,1],
        default: 0
    },
    age:{
        type: Number
    },
    hobbies:{
        type: String
    }
})

module.exports = mongoose.model("Student",studentSchema)
```



3. 执行命令启动程序，报错，mongoose没定义，因为没有下载mongoose，所以下

   载mongoose， `npm i mongoose`

4. 执行命令，还是报错，因为mongodb没有打开，所以在数据库所在盘执行命令

   `mongod` 启动mongodb数据库。

5. 修改router.js文件

```js
//router.js
/*
* 引入express
* 引入students.js传递过来的数据模型
*/

var express = require('express')
var Student = require('./studets')
var router = express.Router()

//重定向
router.get('/',function(req,res){
     res.redirect('/students')
})

//获取数据，渲染列表
router.get("/students",function(req,res){
    Student.find(function(err,ret){
        if(err) return res.status(500).send("server error")
        res.render("index.html",{
            students:ret
        })
    })
})

//点击添加，跳转到添加界面
router.get("/students/new",function(req,res){
    res.render("new.html")
})

//点击提交，实现添加功能
router.post("/students/new",function(req,res){
    //app.js需要引入获取post表单数据的第三方插件 body-parser
    //采用 req.body 获取表单数据
    var data = new Student(req.body)
    data.save(function(err){
        if(err) return res.status(500).send("server error")
        res.redirect('/students')
    })
})


//点击编辑，跳转到编辑界面，并带有该id的信息
router.get('/students/edit',function(req,res){
    var id = req.query.id; //版本在变化，以前获取到的id值是被双引号包住的
    //现在是require._id，id值才是被双引号包住的，得使用正则表达式去掉双引号
    //require.query._id.replace(/"/g,'')  去掉两边的双引号
    
    Student.findById(id,function(err,ret){
        if(err) return res.status(500).send('server error')
        res.render("edit.html",{data:ret})  //ret是我们想要的对象
    })
    
    //如果采用find的方法，则ret是一个数组，我们想要的对象被[]包住
    //属性的id记得前面加下划线  _id
    Student.find({_id:id},function(err,ret){
        if(err) return res.status(500).send('server error')
        //ret得取索引为0的才是我们想要的对象
        res.render("edit.html",{data:ret[0]})  
    })
})

//提交编辑，实现更新
router.post("/students/edit",function(req,res){
    var id = req.body.id
    var data = req.body
    Student.findByIdAndUpdate(id,data,function(err){
        if(err) return res.status(500).send("server error")
        res.redirect("/students")
    })
})

//点击删除，实现删除功能
router.get('/students/delete',function(req,res){
    Student.findByIdAndRemove(req.query.id,function(err){
        if(err) return reqs.status(500).send("server error")
        res.redirect("/students")
    })
})

```

app.js 文件如下

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

