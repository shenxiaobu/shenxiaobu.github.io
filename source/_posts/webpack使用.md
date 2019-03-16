---
title: webpack的基本使用
date: 2019-03-05 13:48:23
categories: "日常记录"
tags: 
	- webpack
---

# Webpack

### webpack最基本的使用

创建文件根目录如下

> webpack-study
>
> > /dist
> >
> > > bundle.js    //执行webpack 打包命令时生成的
> >
> > /node_modules   //执行npm install 时生成的模板文件
> >
> > /src
> >
> > > /css
> > >
> > > /js
> > >
> > > /image
> > >
> > > index.html      //要显示的界面
> > >
> > > main.js       // 入口文件
> >
> > package.json    //执行npm init 时生成的文件
> >
> > package-lock.json
> >
> > webpack.config.js

1. 安装node

2. 创建如上目录

   ```html
   index.html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>隔行变色</title>
     <!--因为 main中的代码，涉及到了ES6的新语法，但是浏览器不识别-->
   <!--<script src="main.js"></script>-->
   
      <!-- 通过webpack 这么一个前端构建工具，把main.js做了一下处理，生成了一个bundle.js的文件-->
   	<script src="../dist/bundle.js"></script>
   
   </head>
   <body>
   	<ul>
   		<li>1</li>
   		<li>2</li>
   		<li>3</li>
   		<li>4</li>
   		<li>5</li>
   		<li>6</li>
   	</ul>
   </body>
   </html>
   
   ```

   ```js
   main.js
   //这是main.js 是我们项目的js入口文件
   
   //1. 导入jquery
   //import *** from *** 是 ES6中导入模块的方式
   //由于ES6的代码 太高级了 浏览器解析不了，所以这一行执行报错
   import $ from 'jquery'
   // const $ = require('jquery')
   
   $(function(){
   	$('li:odd').css('backgroundColor','yellow')
   	$('li:even').css('backgroundColor',function(){
   		return '#'+'D97634'
   	})
   })
   //经过刚才的演示  webpack 可以做什么事情？？？？
   
   //1. webpack能够处理js文件的互相依赖关系
   //2. webpack能够处理js的兼容问题，把高级浏览器不识别的语法转为低级的浏览器能够正常识别的语法
   
   // 刚才运行的命令格式  webpack 要打包的文件的路径 -o 打包好的输出文件的路径
   
   // 先执行 npm init 初始化，会创建一个 package.json的文件，里面的配置用于，存储依赖项，每安装一个包，这里的依赖项配置就会添加相应的包名称，以后即使没有module文件，只要有这个文件在，也可以通过 npm intall 命令把需要用到的包下载下来
   // 由于需要引入jquery 所以得先下载 npm i jquery --save
   //如： webpack .\src\main.js -o .\dist\bundle.js
   ```

   效果显示如下

   ![1552195421995](1552195421995.png)

   这样就可以运行index.html文件并实现隔行换色效果了，但是为了避免每次打包都得输入很长的命令，于是创建了一个webpack.config.js的文件进行配置

   ```js
   webpack.config.js文件（webpack是基于node的，所以也有node的模块）
   
   const path = require('path')
   
   //这个配置文件其实就是一个js文件，通过Node中的模块操作，向外暴露了一个 配置对象
   module.exports = {
   	// 大家已经学会了举一反三  大家觉得在配置文件中 需要手动指定  入口 和  出口
   	entry: path.join(__dirname,'./src/main.js'),//入口  表示要使用 webpack 打包哪个文件
   	output:{ //输出文件相关的配置
   		path: path.join(__dirname,'./dist'), //指定打包好的文件输出到哪个目录去
   		filename: 'bundle.js'  //指定 输出文件的名称
   	}
   }
   
   // 当我们在控制台直接输入 webpack命令的时候，webpack做了一下几步
   //  1  首先，webpack 发现 我们并没有通过 命令的形式，给他制定入口和出口
   //  2  webpack就会去项目的根目录 查找一个叫做  ‘webpack.config.js’的配置文件
   //  3  当找到配置文件后，webpack 会去解析执行这个 配置文件  当解析执行完配置文件后就得到了 配置文件中，到处的配置对象
   //  4 当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口 然后进行打包构建
   ```

   配置完成后打包就不需要再输入 入口文件和出口文件了，直接输入webpack 回车即可。

   更改颜色为red，并执行webpack命令，刷新浏览器，效果如下

   ![1552196415094](1552196415094.png)

   每次都要执行webpack命令进行打包也是挺麻烦的，为了实现每次保存，自动打包，我们用到了 webpack-dev-server 工具

   这个工具可以帮我们实现保存自动打包。

   1. 执行命令  `cnpm i webpack-dev-server --save-dev`安装到开发依赖，执行完毕后会多了个package.json文件，效果如下

      ![1552197918444](1552197918444.png)

      由于不是全局安装，所以无法执行该命令

   G:\前端\vuejs深入浅出资料\day5\代码\webpack-study2>webpack-dev-server
   'webpack-dev-server' 不是内部或外部命令，也不是可运行的程序
   或批处理文件。

   所以需要到package.json文件里面修改配置

   在`scripts`节点下新增`"dev": "webpack-dev-server"`指令

   执行npm run dev 命令是还是报错，因为还需要一个局部的webpack包，效果如下

   ![1552199753582](1552199753582.png)

   解决： 1. 执行命令 `npm i webpack -D` 局部安装 webpack包

   由于npm命令安装比较慢，所以采用cnpm安装，如下图

   ![1552200596168](1552200596168.png)

   由于webpack的版本在 4.0以上 所以还得再安装一个

   webpack-cli 包，执行命令为` cnpm i webpack-cli -D`

   再执行`npm run dev`效果如下

   ```c#
   > webpack-study2@1.0.0 dev G:\前端\vuejs深入浅出资料\day5\代码\webpack-study2
   > webpack-dev-server
   
   i ｢wds｣: Project is running at http://localhost:8080/
   i ｢wds｣: webpack output is served from /
   i ｢wdm｣: Hash: 7fbd96ee591e95cde72b
   Version: webpack 4.29.6
   Time: 1392ms
   Built at: 2019-03-10 14:47:53
       Asset     Size  Chunks             Chunk Names
   bundle.js  652 KiB    main  [emitted]  main
   Entrypoint main = bundle.js
   [0] multi ./node_modules/_webpack-dev-server@3.2.1@webpack-dev-server/client?http://localhost:8080 ./src/main.js 40 bytes {main} [built]
   [./node_modules/_ansi-html@0.0.7@ansi-html/index.js] 4.16 KiB {main} [built]
   [./node_modules/_ansi-regex@2.1.1@ansi-regex/index.js] 135 bytes {main} [built]
   [./node_modules/_events@3.0.0@events/events.js] 13.3 KiB {main} [built]
   [./node_modules/_jquery@3.3.1@jquery/dist/jquery.js] 265 KiB {main} [built]
   [./node_modules/_loglevel@1.6.1@loglevel/lib/loglevel.js] 7.68 KiB {main} [built]
   [./node_modules/_querystring-es3@0.2.1@querystring-es3/index.js] 127 bytes {main} [built]
   [./node_modules/_strip-ansi@3.0.1@strip-ansi/index.js] 161 bytes {main} [built]
   [./node_modules/_url@0.11.0@url/url.js] 22.8 KiB {main} [built]
   [./node_modules/_webpack-dev-server@3.2.1@webpack-dev-server/client/index.js?http://localhost:8080] ./node_modules/_webpack-dev-server@3.2.1@webpack-dev-server/client?http://localhost:8080 8.1 KiB {main} [built]
   [./node_modules/_webpack-dev-server@3.2.1@webpack-dev-server/client/overlay.js] 3.59 KiB {main} [built]
   [./node_modules/_webpack-dev-server@3.2.1@webpack-dev-server/client/socket.js] 1.05 KiB {main} [built]
   [./node_modules/_webpack@4.29.6@webpack/hot/emitter.js] (webpack)/hot/emitter.js 75 bytes {main} [built]
   [./node_modules/webpack/hot sync ^\.\/log$] ./node_modules/webpack/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
   [./src/main.js] 161 bytes {main} [built]
       + 12 hidden modules
   i ｢wdm｣: Compiled successfully.
   ```

   这样就可以通过访问 http://localhost:8080 来访问项目了，但是这样打包后会产生一个名为 bundle.js的文件，并存储在根目录下，但是我们看不到他，所以需要到刚刚引用 bundle.js那里去更换访问路径，以访问到打包后的bundle.js文件。这样就实现了每次保存都会有新的bundle.js文件，无需手动执行。

   ```html
   <!doctype>
   <html>
   	<head>
   		<meta charset="UTF-8">
   		<meta name="viewport" content="width=device-width, initial-scale=1.0">
   		<meta http-equiv="X-UA-Compatible" content="ie=edge">
   		<title>变色</title>
           <!--这是之前自己手动执行webpack打包后产生的bundle.js文件-->
   		<!--<script src="../dist/bundle.js"></script>-->
         <!--这是webpack-dev-server 自动执行webpack打包后产生的bundle.js文件，位置在根目录下且我们看不见-->
   	<script src="/bundle.js"></script>
   	</head>
   	<body>
   		<ul>
   			<li>1</li>
   			<li>1</li>
   			<li>1</li>
   			<li>1</li>
   		</ul>
   	
   	</body>
   </html>
   ```

   这样就实现了每次保存都会实时编译了。效果如下，更改颜色为green并按ctrl+s保存，立马变颜色

   ![1552201348447](1552201348447.png)


但是这样还有一个问题就是，每次执行 npm run dev后还得手动点开链接，所以在package.json里面配置script下的“dev”

`"dev": "webpack-dev-server --open --port 3000"`

现在执行`npm run dev`命令，浏览器被自动打开，达成我们的目的了，但是还是有不足，就是浏览器页面在根目录上，并没有在我们的index.html。所以还得更改配置

`"dev": "webpack-dev-server --open --port 3000 --contentBase src"`

这样就实现了直接到src下的index界面。

由于每次保存都是重新执行打包，而且会刷新浏览器进行重新渲染。采用 --hot 这个命令 实现只对bundle.js进行补丁，以及异步更新。

`"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"`

第二种方式实现 open  port  contenBase hot  功能

```js
在package.json文件里面配置
"dev":"webpack-dev-server"
在webpack.config.js里面配置

const path = require('path')

//启用热更新的第二步
const webpack = require("webpack")

module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output:{
		path: path.join(__dirname,'./dist'), //指定打包好的文件输出到哪个目录去
		filename: 'bundle.js'  //指定 输出文件的名称
	},
	devServer: {  //这是配置 dev-server 命令参数的第二种形式，相对来说，这首方式麻烦一些
		// --open --port 3000 --contentBase src --hot
		open: true,  //自动打开浏览器
		port: 3000,   //设置启动时候的运行端口
		contentBase: 'src',  //指定托管的根目录
		hot: true   //启用热更新的第一步

	},
	plugins: [  //配置插件的节点n
		new webpack.HotModuleReplacementPlugin()   //new 一个热更新的模块对象，这是 启用热更新的第三步
	]
}
```

## 使用`html-webpack-plugin`插件配置启动页面

由于使用`--contentBase`指令的过程比较繁琐，需要指定启动的目录，同时还需要修改index.html中script标签的src属性，所以推荐大家使用`html-webpack-plugin`插件配置启动页面.

1. 运行`cnpm i html-webpack-plugin --save-dev`安装到开发依赖
2. 修改`webpack.config.js`配置文件如下：

```
    // 导入处理路径的模块
    var path = require('path');
    // 导入自动生成HTMl文件的插件
    var htmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
        output: { // 配置输出选项
            path: path.resolve(__dirname, 'dist'), // 配置输出的路径
            filename: 'bundle.js' // 配置输出的文件名
        },
        plugins:[ // 添加plugins节点配置插件
            new htmlWebpackPlugin({
                template:path.resolve(__dirname, 'src/index.html'),//模板路径
                filename:'index.html'//自动在根目录生成的HTML文件的名称，我们看不见，所以可以省略 -contentBase src  这个配置
            })
        ]
    }
```

3. 修改`package.json`中`script`节点中的dev指令如下：

```
"dev": "webpack-dev-server"  //或者下面这样
"dev": "webpack-dev-server --open --port 3000 --hot"
//不需要配置  contentBase src了

```

4. 将index.html中script标签注释掉，因为`html-webpack-plugin`插件会自动把bundle.js注入到index.html页面中！



现在好像都差不多了，但是，如果引入css文件呢？

```
在main.js上引入css时，
import './css/index.css' 
会引发问题
You may need an appropriate loader to handle this file type.
 提示我们需要一个合适的loader
```

所以此时我们就去下载 style-loader和 css-loader，执行命令

`npm i style-loader css-loader -D`

下载完成后修改webpack.config.js文件来配置loader规则

```js
	//module与entry，output，plugins同级
	module:{   //这个节点用来配置所有第三方模块加载器
		rules:[  //所有第三方模块的规则
			{test: /\.css$/, use:['style-loader','css-loader']}  //配置处理.css文件的第三方loader规则
		]
	}
```

![1552317211318](1552317211318.png)

![1552317563232](1552317563232.png)

引入less文件，同css。

1. `cnpm i less-loader less -D` 安装less-loader 和 less

2. ` import './css/index.less'` 引入less文件

3. ```js
   在webpack.config.js里面配置 module里面的rules配置规则
   module:{   //这个节点用来配置所有第三方模块加载器
   		rules:[  //所有第三方模块的规则
   			{test: /\.css$/, use:['style-loader','css-loader']} , //配置处理.css文件的第三方loader规则
   			{test: /\.less$/, use:['style-loader','css-loader','less-loader']} //注意：顺序是从后面到前面，less转译成css，css转译成js
   		]
   	}
   ```

   这样就完成了对less文件的引入

   

引用scss文件，同less

1. `cnpm i sass-loader -D`安装sass-loader配置webpack.config.js文件

2. ```
   module:{   //这个节点用来配置所有第三方模块加载器
   		rules:[  //所有第三方模块的规则
   			{test: /\.css$/, use:['style-loader','css-loader']} , //配置处理.css文件的第三方loader规则
   			{test: /\.less$/, use:['style-loader','css-loader','less-loader']}, //注意：顺序是从后面到前面，less转译成css，css转译成js
   				{test: /\.scss$/, use:['style-loader','css-loader','sass-loader']} //注意：顺序是从后面到前面，less转译成css，css转译成js
   		]
   	}
   ```

3. `运行  npm run dev`发现错误`应用sass-loader需要先安装 node-sass` 所以安装 node-sass

4. `npm i node-sass -D`安装完成后，执行`npm run dev`，ok没问题，成功引入.scss文件

如果在css或less或scss文件上，有应用到url 背景图片的时候，有缺少了 url-loader 和 file-loader

1. `cnpm i url-loader file-loader -D`  安装url-loader 和file-loader

2. 在webpack.config.js上添加配置 

3. ```
   	module:{   //这个节点用来配置所有第三方模块加载器
      		rules:[  //所有第三方模块的规则
      			{test: /\.css$/, use:['style-loader','css-loader']} , //配置处理.css文件的第三方loader规则
      			{test: /\.less$/, use:['style-loader','css-loader','less-loader']} ,
      			{test: /\.scss$/, use:['style-loader','css-loader','sass-loader']} ,
      			{test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=9435'} 
      		]
      	}
      
   ```

4. `执行 npm run dev` 就可以实现了

注意：

![1552381533226](C:\Users\xiaobu\AppData\Roaming\Typora\typora-user-images\1552381533226.png)



如果引入bootstrap包，并使用bootstrap的字体呢？

```html
<!--index.html文件引入 字体图标-->
<div class="glyphicon glyphicon-heart" style="color: red"></div>
```

1. `cnpm i bootstrap@3.3.7 -S` 安装bootstrap 

   注意： 版本号一定要下去，因为不加版本号默认是下载最新的bootstrap，bootstrap版本四和三很大区别，所以不熟悉慎用。

2. 在main.js上引用bootstrap

   //注意：如果通过路径的形式，去引入node_modules中的文件，可以直接省略 路径前面的 node_module 这一层目录，直接写 包的名称，然后后面跟上具体的文件路径

   //不写 node_modules这一层目录，默认就会去node_modules中寻找

   `import 'bootstrap/dist/css/bootstrap.css'`

3. `cnpm run dev`执行项目发现会出现一个错误

   ```js
   You may need an appropriate loader to handle this file type.
   | import 'bootstrap/dist/css/bootstrap.css'
   
   //没有加载合适的loader，所以出错
   ```

4. 配置rules

   ```js
   module:{   //这个节点用来配置所有第三方模块加载器
   		rules:[  //所有第三方模块的规则
   			{test: /\.css$/, use:['style-loader','css-loader']} , //配置处理.css文件的第三方loader规则
   			{test: /\.less$/, use:['style-loader','css-loader','less-loader']} , //配置处理 .less的第三方loader规则
   			{test: /\.scss$/, use:['style-loader','css-loader','sass-loader']} ,//配置处理 .scss的第三方loader规则
   			{test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=9435'} ,//配置处理图片 的第三方loader规则
   			{test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'}  //配置处理 字体的第三方loader规则
   		]
   	}
   ```

   5.执行`cnpm run dev` 成功得到一个爱心图标如下

   ![1552409777752](1552409777752.png)

####  webpack打包常见问题

```
package.json文件
由于是json文件，所以必须严格按照json格式书写，不能有注释，如
"scripts": {
    //"test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --port 3000  --hot"
  },
这样将报错  Ejsonparse  json转译错误

`如果遇到npm run dev` 报错说  webpack-dev-server 不是内部或外部的命令，也不是运行程序，则很大可能就是根目录的node_modules 文件夹没有了，需要重新安装，安装命令如下
npm install  执行这个命令，就会根据package.json里面的依赖包及版本号进行下载相应所依赖的包。
由于npm install 会比较慢，我们时常安装一半没耐心，会ctrl+c终止掉，这样做的话，我们就必须把 node_modules 文件夹删除掉，重新安装，这次执行 cnpm install  命令。这样就重新安装完了。
```

##### 在main.js文件中输入一些ES6或者ES7的语法

```js
class Person{
	static info = {name: "xiaobu",age: 24}
}

console.log(Person.info)



Module parse failed: Unexpected token (17:13)
You may need an appropriate loader to handle this file type.
|
| class Person{
>       static info = {name: "xiaobu",age: 24}
| }
|
 @ multi ./node_modules/_webpack-dev-server@3.2.1@webpack-dev-server/client?http://localhost:3000 (webpack)/hot/dev-server.js ./src/main.js mai
n[2]
```

在main.js文件中引用ES6或者ES7的新语法，webpack并不能完全识别并处理；这时候需要借助 第三方的 loader，来帮助webpack处理这些高级的语法，当第三方loader把高级语法转化为 低级语法之后会把结果交给webpack打包到bundle.js文件中

通过Babel，可以帮我们将高级的语法转化为低级的语法

1. 在webpack中，可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能

   1. 第一套： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
   2. 第二套： cnpm i babel-preset-env babel-preset-stage-0 -D

2. 打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则：

   1. `{test: /\.js$/, use: 'babel-loader',exclude: /node_modules/}`

   2. 注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude选项排除掉，原因有两

      1. 如果不排除 node_modules，则Babel会把node_modules中所有的第三方js文件，都打包编译，这样会非常消耗cpu，同时，打包速度非常慢；
      2. 哪怕最终Babel把所有的node_modules中的js都转化完毕了，但是，项目也无法正常运行

   3. 在项目的根目录中，新建一个叫做 .babelrc 的Babel配置文件，这个配置文件属于json格式，所以 .babelrc 文件严格遵守json书写格式，不能有注释，属性必须双引号包住。

      1. 在 .babelrc 写如下配置

         ```json
         {
             "presets":["env","stage-0"],
             "plugins":["transform-runtime"]
         }
         ```

   `注意：babel-loader必须加版本号 @7   因为新版本会出问题`

   最后成功在控制台看到如下图所示

   ![1552456317309](1552456317309.png)

## 在网页中会引用哪些常见的静态资源？

+ JS
 - .js  .jsx  .coffee  .ts（TypeScript  类 C# 语言）
+ CSS
 - .css  .less   .sass  .scss
+ Images
 - .jpg   .png   .gif   .bmp   .svg
+ 字体文件（Fonts）
 - .svg   .ttf   .eot   .woff   .woff2
+ 模板文件
 - .ejs   .jade  .vue【这是在webpack中定义组件的方式，推荐这么用】


## 网页中引入的静态资源多了以后有什么问题？？？
1. 网页加载速度慢， 因为 我们要发起很多的二次请求；
2. 要处理错综复杂的依赖关系


## 如何解决上述两个问题
1. 合并、压缩、精灵图、图片的Base64编码
2. 可以使用之前学过的requireJS、也可以使用webpack可以解决各个包之间的复杂依赖关系；

## 什么是webpack?
webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；


## 如何完美实现上述的2种解决方案
1. 使用Gulp， 是基于 task 任务的；
2. 使用Webpack， 是基于整个项目进行构建的；
+ 借助于webpack这个前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等诸多功能。
+ 根据官网的图片介绍webpack打包的过程
+ [webpack官网](http://webpack.github.io/)

## webpack安装的两种方式
1. 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令
2. 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中

## 初步使用webpack打包构建列表隔行变色案例
1. 运行`npm init`初始化项目，使用npm管理项目中的依赖包
2. 创建项目基本的目录结构
3. 使用`cnpm i jquery --save`安装jquery类库
4. 创建`main.js`并书写各行变色的代码逻辑：
```
	// 导入jquery类库
    import $ from 'jquery'

    // 设置偶数行背景色，索引从0开始，0是偶数
    $('#list li:even').css('backgroundColor','lightblue');
    // 设置奇数行背景色
    $('#list li:odd').css('backgroundColor','pink');
```
5. 直接在页面上引用`main.js`会报错，因为浏览器不认识`import`这种高级的JS语法，需要使用webpack进行处理，webpack默认会把这种高级的语法转换为低级的浏览器能识别的语法；
6. 运行`webpack 入口文件路径 输出文件路径`对`main.js`进行处理：
```
webpack src/js/main.js dist/bundle.js
```

## 使用webpack的配置文件简化打包时候的命令
1. 在项目根目录中创建`webpack.config.js`
2. 由于运行webpack命令的时候，webpack需要指定入口文件和输出文件的路径，所以，我们需要在`webpack.config.js`中配置这两个路径：
```
    // 导入处理路径的模块
    var path = require('path');

    // 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
    module.exports = {
        entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
        output: { // 配置输出选项
            path: path.resolve(__dirname, 'dist'), // 配置输出的路径
            filename: 'bundle.js' // 配置输出的文件名
        }
    }
```

## 实现webpack的实时打包构建
1. 由于每次重新修改代码之后，都需要手动运行webpack打包的命令，比较麻烦，所以使用`webpack-dev-server`来实现代码实时打包编译，当修改代码之后，会自动进行打包构建。
2. 运行`cnpm i webpack-dev-server --save-dev`安装到开发依赖
3. 安装完成之后，在命令行直接运行`webpack-dev-server`来进行打包，发现报错，此时需要借助于`package.json`文件中的指令，来进行运行`webpack-dev-server`命令，在`scripts`节点下新增`"dev": "webpack-dev-server"`指令，发现可以进行实时打包，但是dist目录下并没有生成`bundle.js`文件，这是因为`webpack-dev-server`将打包好的文件放在了内存中
 + 把`bundle.js`放在内存中的好处是：由于需要实时打包编译，所以放在内存中速度会非常快
 + 这个时候访问webpack-dev-server启动的`http://localhost:8080/`网站，发现是一个文件夹的面板，需要点击到src目录下，才能打开我们的index首页，此时引用不到bundle.js文件，需要修改index.html中script的src属性为:`<script src="../bundle.js"></script>`
 + 为了能在访问`http://localhost:8080/`的时候直接访问到index首页，可以使用`--contentBase src`指令来修改dev指令，指定启动的根目录：
 ```
 "dev": "webpack-dev-server --contentBase src"
 ```
 同时修改index页面中script的src属性为`<script src="bundle.js"></script>`

## 使用`html-webpack-plugin`插件配置启动页面
由于使用`--contentBase`指令的过程比较繁琐，需要指定启动的目录，同时还需要修改index.html中script标签的src属性，所以推荐大家使用`html-webpack-plugin`插件配置启动页面.
1. 运行`cnpm i html-webpack-plugin --save-dev`安装到开发依赖
2. 修改`webpack.config.js`配置文件如下：
```
    // 导入处理路径的模块
    var path = require('path');
    // 导入自动生成HTMl文件的插件
    var htmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
        output: { // 配置输出选项
            path: path.resolve(__dirname, 'dist'), // 配置输出的路径
            filename: 'bundle.js' // 配置输出的文件名
        },
        plugins:[ // 添加plugins节点配置插件
            new htmlWebpackPlugin({
                template:path.resolve(__dirname, 'src/index.html'),//模板路径
                filename:'index.html'//自动生成的HTML文件的名称
            })
        ]
    }
```
3. 修改`package.json`中`script`节点中的dev指令如下：
```
"dev": "webpack-dev-server"
```
4. 将index.html中script标签注释掉，因为`html-webpack-plugin`插件会自动把bundle.js注入到index.html页面中！

## 实现自动打开浏览器、热更新和配置浏览器的默认端口号
**注意：热更新在JS中表现的不明显，可以从一会儿要讲到的CSS身上进行介绍说明！**
### 方式1：
+ 修改`package.json`的script节点如下，其中`--open`表示自动打开浏览器，`--port 4321`表示打开的端口号为4321，`--hot`表示启用浏览器热更新：
```
"dev": "webpack-dev-server --hot --port 4321 --open"
```

### 方式2：
1. 修改`webpack.config.js`文件，新增`devServer`节点如下：
```
devServer:{
        hot:true,
        open:true,
        port:4321
    }
```
2. 在头部引入`webpack`模块：
```
var webpack = require('webpack');
```
3. 在`plugins`节点下新增：
```
new webpack.HotModuleReplacementPlugin()
```

## 使用webpack打包css文件
1. 运行`cnpm i style-loader css-loader --save-dev`
2. 修改`webpack.config.js`这个配置文件：
```
module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }//处理css文件的规则
        ]
    }
```
3. 注意：`use`表示使用哪些模块来处理`test`所匹配到的文件；`use`中相关loader模块的调用顺序是从后向前调用的；

## 使用webpack打包less文件
1. 运行`cnpm i less-loader less -D`
2. 修改`webpack.config.js`这个配置文件：
```
{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
```

## 使用webpack打包sass文件
1. 运行`cnpm i sass-loader node-sass --save-dev`
2. 在`webpack.config.js`中添加处理sass文件的loader模块：
```
{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
```

## 使用webpack处理css中的路径
1. 运行`cnpm i url-loader file-loader --save-dev`
2. 在`webpack.config.js`中添加处理url路径的loader模块：
```
{ test: /\.(png|jpg|gif)$/, use: 'url-loader' }
```
3. 可以通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：
```
{ test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960' },
```

## 使用babel处理高级JS语法
1. 运行`cnpm i babel-core babel-loader babel-plugin-transform-runtime --save-dev`安装babel的相关loader包
2. 运行`cnpm i babel-preset-es2015 babel-preset-stage-0 --save-dev`安装babel转换的语法
3. 在`webpack.config.js`中添加相关loader模块，其中需要注意的是，一定要把`node_modules`文件夹添加到排除项：
```
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
```
4. 在项目根目录中添加`.babelrc`文件，并修改这个配置文件如下：
```
{
    "presets":["es2015", "stage-0"],
    "plugins":["transform-runtime"]
}
```
5. **注意：语法插件`babel-preset-es2015`可以更新为`babel-preset-env`，它包含了所有的ES相关的语法；**

## 相关文章
[babel-preset-env：你需要的唯一Babel插件](https://segmentfault.com/p/1210000008466178)
[Runtime transform 运行时编译es6](https://segmentfault.com/a/1190000009065987)