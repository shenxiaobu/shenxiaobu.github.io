---
title: vue项目实战1
date: 2019-03-16 21:54:25
categories: "日常记录"
tags:
	- vue
	- application
---

#### 开发一个vue应用

拿到之前配置好的文件，文件目录如下

>application
>
>> /dist
>>
>> > bundle.js
>> >
>>
>> /src
>>
>> > /lib
>> >
>> > > /mui
>> > >
>> > > > /css
>> > > >
>> > > > > mui.css
>> > > > >
>> > > > > mui.min.css
>> > > >
>> > > > /fonts
>> > > >
>> > > > > mui.ttf
>> > > >
>> > > > /js
>> > > >
>> > > > > mui.js
>> > > > >
>> > > > > mui.min.js
>> >
>> > app.vue
>> >
>> > index.html
>> >
>> > main.js
>> >
>> > router.js
>> >
>>
>> .babelrc
>>
>> .gitnore
>>
>> LICENSE
>>
>> package-lock.json
>>
>> package.json
>>
>> readme.md
>>
>> webpack.config.js

配置文件如下

```json
package.json文件

{
  "name": "webpack-study2",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "dev": "webpack-dev-server --open --port 3000  --hot"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^3.3.7",
    "jquery": "^3.3.1",
    "mint-ui": "^2.2.13",
    "vue": "^2.6.8",
    "vue-resource": "^1.5.1",
    "vue-router": "^3.0.2"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-component": "^1.1.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^2.1.1",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.9.0",
    "less-loader": "^4.1.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "vue-loader": "^15.7.0",
    "vue-template-compiler": "^2.6.8",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1"
  }
}

```

```js
webpack.config.js文件

const path = require('path')

//启用热更新的第二步
//const webpack = require("webpack")

const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader@15以上的要用这个

module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output:{
		path: path.join(__dirname,'./dist'), //指定打包好的文件输出到哪个目录去
		filename: 'bundle.js'  //指定 输出文件的名称
	},
	// devServer: {  //这是配置 dev-server 命令参数的第二种形式，相对来说，这首方式麻烦一些
	// 	// --open --port 3000 --contentBase src --hot
	// 	open: true,  //自动打开浏览器
	// 	port: 3000,   //设置启动时候的运行端口
	// 	contentBase: 'src',  //指定托管的根目录
	// 	hot: true   //启用热更新的第一步

	// },
	plugins: [  //配置插件的节点n
		//new webpack.HotModuleReplacementPlugin()   //new 一个热更新的模块对象，这是 启用热更新的第三步
		new htmlWebpackPlugin({
			template: path.join(__dirname,"src/index.html"),   //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
			filename: "index.html"  //指定生成的页面的名称
		}),
		new VueLoaderPlugin() //vue-loader@15以上的要用这个
	],
	module:{   //这个节点用来配置所有第三方模块加载器
		rules:[  //所有第三方模块的规则
			{test: /\.css$/, use:['style-loader','css-loader']} , //配置处理.css文件的第三方loader规则
			{test: /\.less$/, use:['style-loader','css-loader','less-loader']} , //配置处理 .less的第三方loader规则
			{test: /\.scss$/, use:['style-loader','css-loader','sass-loader']} ,//配置处理 .scss的第三方loader规则
			{test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=9435'} ,//配置处理图片 的第三方loader规则
			{test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'} , //配置处理 字体的第三方loader规则
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, //配置处理 babel的第三方loader规则
			{test: /\.vue$/, use: 'vue-loader'}			//配置处理 vue的第三方loader规则
		]
	},
	resolve:{
		alias:{  //修改vue被引入时的包的路径，相当于给 绝对路径 弄个 好看的简称
			//"vue$": "vue/dist/vue.js",  //  前者是后者的简称
			"bootstrap$": "bootstrap/dist/css/bootstrap.css"  //前者是后者的简称
		}
		/*
		同项目根目录上的package.json文件一样，我们在里面的script节点上配置了
		"dev": "webpack-dev-server"
		这样我们就可以使用 cnpm run dev 代替 cpm run webpack-dev-server了
		前者就是后者的简称，就是后者的替代
		 */
	}
}
```

```
.bbabelrc 文件
{
    "presets": ["env", "stage-0"],
    "plugins": ["transform-runtime", ["component", [
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]]]
}
```

```
.gitignore文件

node_modules
.idea
.vscode
.git
```

LICENSE文件

```
The MIT License (MIT)

Copyright (c) 2014 connors and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

