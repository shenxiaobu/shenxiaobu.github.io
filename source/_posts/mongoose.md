---
title: mongoose
date: 2019-03-27 12:07:24
categories: "日常笔记"
tags:
	- mongoose
	- mongodb
	- node
	- express
---

#### mongoose

*首先要确保安装了MongoDB和Node.js.*

接下来使用`npm`以下命令从命令行安装Mongoose ：

```
$ npm install mongoose
```

现在说我们喜欢模糊的小猫，想要记录我们在MongoDB中见过的每只小猫。我们需要做的第一件事是在项目中包含mongoose，并`test`在我们本地运行的MongoDB实例上打开与数据库的连接。

```javascript
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
```

我们与在localhost上运行的测试数据库有挂起的连接。如果我们成功连接或发生连接错误，我们现在需要收到通知：

```javascript
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```

一旦我们的连接打开，我们的回调就会被调用。为简洁起见，我们假设所有后续代码都在此回调中。

使用Mongoose，一切都来自[Schema](https://mongoosejs.com/docs/guide.html)。让我们来参考它并定义我们的小猫。

```javascript
var kittySchema = new mongoose.Schema({
  name: String
});
```

到现在为止还挺好。我们有一个带有一个属性的模式`name`，它将是一个 `String`。下一步是将模式编译为[模型](https://mongoosejs.com/docs/models.html)。

```javascript
var Kitten = mongoose.model('Kitten', kittySchema);
```

模型是用于构造文档的类。在这种情况下，每个文档都将是一个小猫，其属性和行为在我们的模式中声明。让我们创建一个小猫文件，代表我们刚刚在人行道上遇到的小家伙：

```javascript
var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
```

小猫可以喵喵叫，让我们来看看如何在我们的文档中添加“说话”功能：

```javascript
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);
```

添加到`methods`模式属性的函数将编译到`Model`原型中并在每个文档实例上公开：

```javascript
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
```

我们有说话的小猫！但是我们还没有向MongoDB保存任何内容。可以通过调用其[save](https://mongoosejs.com/docs/api.html#model_Model-save)方法将每个文档保存到数据库中。如果发生任何回调，则回调的第一个参数将是错误。

```javascript
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
```

说时间流逝，我们想要显示我们见过的所有小猫。我们可以通过我们的Kitten [模型](https://mongoosejs.com/docs/models.html)访问所有小猫文档。

```javascript
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
```

我们只是将数据库中的所有小猫记录到控制台。如果我们想按名称过滤我们的小猫，Mongoose支持MongoDB丰富的[查询](https://mongoosejs.com/docs/queries.html)语法。

```javascript
Kitten.find({ name: /^fluff/ }, callback);
```

这将搜索具有以“Fluff”开头的name属性的所有文档，并将结果作为一组kittens返回给回调。



```js
//mongoose_demo1.js
//引入mongoose
var mongoose = require('mongoose');

//连接mongodb中的test数据库
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

//设计集合结构（表结构）
var kittySchema = new mongoose.Schema({
  name: String
	});
//给集合添加一个speak的方法
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

//查看连接状态
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  //定义一个 kitten 采用 kittySchema 集合结构
  var Kitten = mongoose.model('Kitten', kittySchema);

  //定义一只 silence 猫
  var silence = new Kitten({ name: 'Silence' });

  //保存到数据库（异步的）
  silence.save(function(err,a){
  	if(err) return console.error(err)
  		a.speak()  //保存完说出猫的名字
  })

  //定义一值fluffy 猫
  var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak();   //说出自己的名字

	//将fluffy 的猫数据保存到数据库（异步）
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak(); //保存完说出猫的名字
  });

//查找kitten集合中的所有数据，下面的kittens，只是个形参，可以是任意合理的值
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
});
```

在命令窗口上运行这个文件 ` node mongoose_demo1.js`

第一次运行结果如下

![1553660436316](1553660436316.png)

![1553660662122](1553660662122.png)

```js
//查询名字以 S 开头的纪录
Kitten.find({name: /^S/ },function (err, kittens) {
  		if (err) return console.error(err);
  			console.log(kittens);
		})
```



起步：

```js
//mongoose_demo2.js

//mongoose_demo2.js

//引入mongoose

var mongoose = require('mongoose')

//连接数据库
//指定连接的数据库不存在时，会自动创建出来
mongoose.connect('mongodb://localhost/xiaobu',{useNewUrlParser: true});

//设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//约束的目的是为了保证数据的完整性，不要脏数据
// var blogSchema = new Schema({
// 	title: String,
// 	author: String,
// 	body: String,
// 	comments:[{body:String,date: Date}],
// 	date: {type: Date,default: Date.now},
// 	hidden: Boolean,
// 	meta:{
// 		votes: Number,
// 		favs: Number
// 	}
// });
var userSchema = new mongoose.Schema({
	username:{
		type: String,
		required: true //必须有
	},
	password:{
		type: String,
		required: true
	},
	email:{
		type:String
	}
})


//查看连接状态
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

//将文档结构 发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数： 传入一个大写名词单数字符串用来表示你的数据库名称
//				mongoose会自动将大写名词的字符串生成 小写复数的集合名称
//				例如这里的User 最终会变成 users 集合名称
//第二个参数： 架构Schema
//
// 返回值 ： 模型架构函数
	var User = mongoose.model('User',userSchema)


//当我们有了模型构造函数之后，就可以使用这个构造函数对User 中的数据为所欲为了

	
})
```

#### 插入数据

```js
//插入数据
	var user = new User({   //user名字随便取，合理就行
		username: 'admin',
		password: '123456',
		email: '110@123.com'
	})
	
    //插入数据
	user.save(function(err,ret){   //user是前面定义的
		if(err){
			console.log("保存失败")
		}else{
			console.log("保存成功")
			console.log(ret)
		}
	})
```

#### 查询数据

```js
//查询数据
	//查询多条记录
	User.find(function(err,ret){    //User，是前面定义模型架构函数的User
        if(err) return console.error(err)
        console.log(ret)   //查询到的结果 ret
	})
	
	//查询有条件的多条记录
	User.find({username:/^x/},function(err,ret){
        if(err) return console.error(err)
        console.log(ret)  //没有数据则 是一个空数组 []
	})
	
	//查询一条记录
	User.findOne(function(err,ret){
     	if(err) return console.error(err)
        console.log(ret)  //没有数据则返回一个  null
	})
	//查询有条件的一条记录
	User.findOne({username:/^x/},function(err,ret){
     	if(err) return console.error(err)
        console.log(ret)  //没有数据则返回一个  null
	})
```

#### 删除数据

```js
//删除数据
		User.remove({
			username: 'yanxiang'
		},function(err,ret){
			if(err){
				console.log("删除失败")
			}else{
				console.log("删除成功")
				console.log(ret)
			}
		})
```

![1553671381405](1553671381405.png)

#### 更新数据

```js
//更新数据
	// User.findByIdAndUpdate('id值',{要修改的属性:修改后的值},function(err,ret){...})
	
	User.findByIdAndUpdate("5c9b21f043a6320d1ce7de95",{
		username: 'shenxiaobu'
	},function(err,ret){
		if(err) {
			console.log("更新失败")
		}else{
			console.log("更新成功")
		}
	})
```

![1553671521267](1553671521267.png)



