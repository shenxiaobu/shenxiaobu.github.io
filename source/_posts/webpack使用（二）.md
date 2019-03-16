---
title: webpack使用（二）
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

   -----

   继续上面的案例

   上面说到了` import Vue from 'vue' `如果不配置webpack.config.js的话，引用的包是一个vue.runtime.common.js 的包。这个包并不能实现像网页那样一个齐全的功能，只提供了runtime-only的方式，并没有像网页上那样的使用方式。

   那么这个包是怎么用呢？

   我们把之前对webpackage.config.js关于resolve的配置去除掉vue部分，这样我们引用的vue就是这个runtime-only的方式了

   去掉之后运行项目，毫无疑问报错了

   ```
   [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
   ```

   所以引入.vue文件，runtime-only编译形式能够对.vue 文件有效。

   在src目录下新建一个 login.vue的文件

   ```vue
   <template></template>
   <script></script>
   <style></style>
   ```

   这是.vue文件的目录结构

   ```vue
   login.vue文件
   <template>
   	<h5>这是{{msg}}登陆组件</h5>
   </template>
   <script>
   export default {
     data() {
       // 注意：组件中的 data 必须是 function
       return {
         msg: "xiaobu"
       };
     },
   
     methods: {
       show() {
         console.log("调用了 login.vue 中的 show 方法");
       }
     }
   };
   </script>
   <style>
   	h5{
   		color: red;
   	}
   </style>
   ```

   在main.js文件上引入组件

   ```js
   //main.js
   import $ from 'jquery'
   
   import './css/index.css'
   import './css/index.less'
   import './css/index.scss'
   // import 'bootstrap/dist/css/bootstrap.css'
   import "bootstrap"
   
   
   $(function(){
   	$('li:odd').css('backgroundColor','red')
   	$('li:even').css('backgroundColor',function(){
   		return '#'+'123336'
   	})
   })
   
   class Person{
   	static info = {name: "xiaobu",age: 24}
   }
   
   console.log(Person.info)
   
   
   import Vue from "vue/dist/vue.js"
   
   /*先安装 vue-loader,vue-template-compiler
   然后在 webpack.config.js 配置
   const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader@15以上的要用这个
   plugins: [  //配置插件的节点n
   		new VueLoaderPlugin() //vue-loader@15以上的要用这个
   	],
   	module:{   //这个节点用来配置所有第三方模块加载器
   	{test: /\.vue$/, use: 'vue-loader'}			//配置处理 vue的第三方loader规则
   	}
   */
   import login from "./login.vue"
   
   
   var vm = new Vue({
   	el: "#app",
   	data:{
   		msg: "你好?"
   	},
   	methods:{},
   // components:{
   // 		// "login":{
   // 		// 	template: "<h1>你好</h1>"
   // 		// }
   // 		login
   // 	}
   	/*render: function(createElement){  //会把这个#app的内容都替换掉
   		return createElement(login)
   	}*/
   	render: c => c(login)   //上面的简写
   })
   
   ```

   遇到的自己挖的坑，在配置loader的时候，没写好，弄了半天硬是不行。

   一开始是因为vue-loader版本过高，后来知道是V15的版本必须加上

   ```js
   const VueLoaderPlugin = require("vue/lib/plugin")
   module.exports={
       plugins:[
       new VueLoaderPlugin()
   ],
   	module:{
           rules:[
               {test: /\.vue$/,use: "vue-loader"}
           ]
   	}
   }
   
   ```

   上面的配置就是正确的配置

   但是就是因为自己的一时疏忽，配置loader的时候写成

   `{test: /.\vue$/,use:"vue-loader"}`

   不仔细看根本不知道哪里错了，就是这么个问题浪费了一下午。

   后来终于好了。

   `注意： vue版本和 vue-template-complier版本必须一致`

   ```js
   //总结梳理： webpack中如何使用 vue：
   //1. 安装vue包  cnpm i vue -S
   //2. 由于在webpack中，推荐使用 .vue这个组件模板文件定义组件，所以需要安装能解析这种文件的 loader   
   cnpm vue-loader vue-template-complier -D
   注意：再次强调，vue和vue-template-complier版本必须一致
   //3. 在main.js 中 导入 vue模块， import Vue from 'vue'
   //4. 定义一个 .vue结尾的组件，其中组件由三部分组成：<template>,<script>,<style>
   //5. 使用 import login from './login.vue' 导入这个组件
   //6. 创建vm的实例 var vm = new Vue({el: '#app',render: c=>(login)})
   //7. 在页面中创建一个 id为app的div元素，作为我们vm实例要控制的区域
   ```

   ----

   上面在vue文件中的script标签中讲到了 export default，接下来就将这个 export default 和 export。

   ```js
   //js文件或者 script标签里面
   //注意： export default 向外暴露的成员，可以使用任意的变量来接收
   //注意： 在一个模块中，export default 只允许向外暴露一次
   //注意： 在一个模块中，可以同时使用export default 和 export 向外暴露成员
   
   
   //注意：使用export向外暴露的成员，只能使用 { } 的形式来接收，这种形式叫做 [按需导出]
   //注意： export 可以向外暴露多个成员，同时，如果某些成员我们在import的时候不需要，则可以不在 { } 中定义
   //注意：使用export到处的成员，必须严格按照 导出时候的名称，来使用 {} 按需接收
   //注意: 使用export 导出的成员，如果就想换个名称来接收，可以使用as 来起别名
   ```

   测试

   1. 在src目录下新建一个叫做test.js的文件

   2. 在js文件上做导出

   3. 在main.js文件上做导入

      ```js
      //test.js文件如下
      export default  {
          data:{
              name: "xiaobu",
              age: "24",
              favorite: "basketball"
          }
      }
      
      export var name = "buge"
      export var star = "james"
      export var goods = {
          song: "小星星",
          who: "刘德华"
      }
      ```

      ```js
      //main.js文件如下
      import xiaobu,{name,star as s,goods,good} from './test.js'
      
      console.log(xiaobu)  //{data: {name: "xiaobu", age: "24", favorite: "basketball"}}
      console.log("export name的值是---"+name) //export name的值是---buge
      console.log("export star的值是---"+s) //export star的值是---james
      console.log(goods)// {song: "小星星", who: "刘德华"}
      console.log(star)   //报错，star is not defind
      console.log(good)  // nudefined 
      
      //*** as ***  后面是前面的别名，取别名之后，原先的名字不能用
      ```

      ----

      

   ---

   ##### webpack中使用vue-router

   1. 下载vue vue-router包，`cnpm i vue vue-router -S`
   2. 在main.js文件中引入包  `import Vue from "vue"` ` import VueRouter from "vue-router"`
   3. 在main.js文件中 安装该包  Vue.use(VueRouter)
   4. 这样就可以在main.js中使用路由了
   5. 创建路由界面，名字为  name.vue

   ```html
   <!--index.html界面-->
   <div id="app">
       
   </div>
   ```

   ```js
   //main.js文件
   import Vue from "vue"
   import VueRouter from "vue-router"
   Vue.use(VueRouter)
   
   import login from "./main/login.vue"
   import register from "./main/register.vue"
   
   var router = new VueRouter({  
       routes:[ //注意是routes   是route没有r，然后加s，代表有多个路由，是数组
       {path: "/",redirect: "/login"},//重定向
       {path: "/login",component:login}//component 没有加s，除非是类似经典路由布局那样的
        {path: "/register",component: register}   
       ]
   })
   
   var vm = new Vue({
       el:"#app",
       render: c=>c(app),
       router               //一定要记得挂载到vm实例上
   })
   ```

   ```vue
   ./main/login.vue文件
   <template>
       <div>这是account的登陆组件</div>
   </template>
   <script>
           export default {
               data() {
               // 注意：组件中的 data 必须是 function
                   return {
   
                   }
               },
   
               methods: {}
   };
   </script>
   <style  scoped>
   
       /*普通的style标签只支持普通的样式，如果想要启用scss或less，需要为style设置 lang属性*/
       /*在.vue文件中定义 style 样式的话，那么推荐开启 scoped 属性，以免污染全局样式*/
       div{
           color: green;
       }
   </style>
   ```

   ```vue
   ./main/register.vue文件
   <template>
       <div>这是account的注册组件</div>
   </template>
   <script>
           export default {
               data() {
               // 注意：组件中的 data 必须是 function
                   return {
   
                   }
               },
   
               methods: {}
   };
   </script>
   <style>
   
   </style>
   ```

   ##### scoped的原理

   原理就是在该组件上添加一个 data-v-组件代号  的属性，只有拥有该属性能够有该样式，所以相当于只对组件本身有效，对别的组件无效。

   ![1552631895604](1552631895604.png)

   

   

   

   

   