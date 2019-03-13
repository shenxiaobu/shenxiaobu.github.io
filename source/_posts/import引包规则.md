---
title: import引包规则
date: 2019-03-13 23:58:17
categories: "日常笔记"
tags: 
	- webpack
	- node
---

#### import引包规则

1. 安装vue 包，`cnpm i vue -S`

2. 在main.js上引入包`import Vue from “vue”`

3. 在index.html界面导入`<div id="app">{{msg}}</div>`

4. 在main.js里面写上vue的基本结构

   ```js
   //main.js
   import Vue from "vue"
   var vm = Vue({
       el: "#app",
       data:{
           msg: "你好"
       }，
       methods:{}
   })
   ```

5. 执行`cnpm run dev`  执行项目

   ```
   页面报错如下
   [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
   ```

   这让我们引入思考，为什么传统vue网页在页面上使用script标签引入vue包就可以实现呢，而 `import Vue from “vue”`不行呢？

   引入了 import 的引包规则。

   ```js
   //import的引包规则 同 nodejs中require的引包规则完全一样，就语法不一样
   import Vue from "vue"   //这是import引包方式
   var Vue = require("Vue")  //这是require的引包方式
   
   //两者具有相同的引包规则
   //1.找项目根目录中有没有 node_modules的文件夹
   //2.在node_modules 中根据包名，找对应的 vue文件夹
   //3.在vue文件夹中，找一个叫做package.json的配置文件
   //4.在package.json文件中，查找一个main属性[main属性指定了这个包在被加载时候的入口文件]
   ```

   根据引包规则，查找我们的`import Vue from “vue”` 引用的是哪个包。

   ![1552494857856](1552494857856.png)

   打开package.json文件

   ```js
   //package.json 文件
   {
     "name": "vue",
     "version": "2.6.8",
     "description": "Reactive, component-oriented view layer for modern web interfaces.",
     "main": "dist/vue.runtime.common.js",
     "module": "dist/vue.runtime.esm.js",
     "unpkg": "dist/vue.js",
     "jsdelivr": "dist/vue.js",
     "typings": "types/index.d.ts",
     "files": [
       "src",
       "dist/*.js",
       "types/*.d.ts"
     ],//后面省略
   ```

   我们发现main指定的文件是一个叫做`vue.runtime.common.js`的文件，所以导致我们运行时不能正常运行。因为这不是一个齐全的vue包。

   ![1552495228833](1552495228833.png)

   知道是因为我们引的包不是我们真正要引入的包后，我们要如何才能引入想要的包呢？

   办法有三种

   1. 直接使用 路径方式，访问到那个vue.js的包

      `import Vue from "../node_modules/vue/dist/vue.js"`

      node_modules可以省略，在[webpack的基本使用](https://shenxiaobu.github.io/2019/03/05/webpack%E4%BD%BF%E7%94%A8/)已经解释过

      `import Vue from "vue/dist/vue.js"`

      但是这样子不够华丽，不推荐使用

   2. 修改vue包里面的package.json文件里面的main属性

      `"main": "dist/vue.runtime.common.js",`

      修改为`"main": "dist/vue.js",`

      修改了安装包，强烈不推荐使用

   3. 在webpack.config.js配置文件中添加resolve属性

      ```js
      //webpack.config.js文件下
      resolve: {
         alias:{  //修改vue被引入时的包的路径，相当于给 绝对路径 弄个 好看的简称
      			"vue$": "vue/dist/vue.js"
                      /*
      		同项目根目录上的package.json文件一样，我们在里面的script节点上配置了
      		"dev": "webpack-dev-server"
      		这样我们就可以使用 cnpm run dev 代替 cpm run webpack-dev-server了
      		前者就是后者的简称，就是后者的替代
      		 */
      		}
      }
      
      //main.js文件
      //还是采用华丽的引包方式
      
      import Vue from "vue"
      
      ```

      以上三种方式都能完成，第三种方式由于修改了配置文件，所以需要重启项目才能看到效果。效果如下

      ![1552496412525](1552496412525.png)

   通过这里我们了解到了webpack.config.js配置文件还有配置入口文件目录的功能，我们是否可以对我们前面引用过的bootstrap也进行同样配置呢？

   因为我们之前引入bootstrap的方式是采用路径的方式

   `import "bootstrap/dist/css/bootstrap.css"`

   这样子并不华丽，我们能否也变成

   `import “bootstrap”`

   和前面引入jquery还有vue一样呢？

   jquery为什么不用配置也可以直接 `import $ from "jquery"` 呢？

   查看jquery包的package.json文件中的main属性指向路径

   ` "main": "dist/jquery.js",`

   ![1552497178187](1552497178187.png)

   继续聊bootstrap，在main.js文件中直接使用

   `import "bootstrap"`看看会报什么错误

   ```
   transition.js:59 Uncaught ReferenceError: jQuery is not defined
       at eval (transition.js:59)
       at Object../node_modules/_bootstrap@3.4.1@bootstrap/js/transition.js (bundle.js:971)
       at __webpack_require__ (bundle.js:724)
       at fn (bundle.js:101)
       at eval (npm.js:2)
       at Object../node_modules/_bootstrap@3.4.1@bootstrap/dist/js/npm.js (bundle.js:839)
       at __webpack_require__ (bundle.js:724)
       at fn (bundle.js:101)
       at eval (main.js:17)
       at Object../src/main.js (bundle.js:1446)
   ```

   直接报错了，很明显，我们查看下bootstrap包的package.json文件中main的属性指向哪个文件。

   `"main": "./dist/js/npm",`指向js/npm文件，有点可怕

   接下来，我们通过配置webpack.config.js文件中的resolves属性下的alias属性，看看是否能够成功。

   配置如下

   ```js
   resolve:{
   		alias:{  //修改vue被引入时的包的路径，相当于给 绝对路径 弄个 好看的简称
   			"vue$": "vue/dist/vue.js",  //  前者是后者的简称
   			"bootstrap$": "bootstrap/dist/css/bootstrap.css"  //前者是后者的简称
   		}
   		/*
   		同项目根目录上的package.json文件一样，我们在里面的script节点上配置了
   		"dev": "webpack-dev-server"
   		这样我们就可以使用 cnpm run dev 代替 cpm run webpack-dev-server了
   		前者就是后者的简称，就是后者的替代
   		 */
   	}
   ```

   由于修改了webpack.config.js配置文件，所以重启项目，看看是否可以。我觉得可以，no problem。

   关闭项目，重启

   ![1552498449592](1552498449592.png)

   和想象的差不多，完全没问题，ok，就到这里，转眼已经是凌晨01：35了，该睡觉了，知识学不完的。晚安

   