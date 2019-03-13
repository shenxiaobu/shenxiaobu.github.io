---
title: vue-router
date: 2019-03-08 20:41:10
categories: "日常笔记"
tags: 
	- vue
	- vue-router
---

#### vue最基本的哈希路由

1. 引入vue包，再引入vue-router包

   ```html
    <script src="./lib/vue-2.4.0.js"></script>
     <!-- 1. 安装 vue-router 路由模块 -->
     <script src="./lib/vue-router-3.0.1.js"></script>
   ```

2. 设置哈希跳转

   ```html
     <div id="app">
   	<a href="#/login">登录</a> 
   	<a href="#/register">注册</a> 
       <!-- 这是 vue-router 提供的元素，专门用来 当作占位符的，将来，路由规则，匹配到的组件，就会展示到这个 router-view 中去 -->
       <!-- 所以： 我们可以把 router-view 认为是一个占位符 -->
         <router-view></router-view>
     </div>
   ```

3. 注册组件与路由，并将路由挂载到实例上

   ```js
    <script>
   // 组件的模板对象
       var login = {
         template: '<h1>登录组件</h1>'
       }
       var register = {
         template: '<h1>注册组件</h1>'
       }
   
   // 2. 创建一个路由对象， 当 导入 vue-router 包之后，在 window 全局对象中，就有了一个 路由的构造函数，叫做 VueRouter
       // 在 new 路由对象的时候，可以为 构造函数，传递一个配置对象
       var routerObj = new VueRouter({
         // route // 这个配置对象中的 route 表示 【路由匹配规则】 的意思
         routes: [ // 路由匹配规则 
           // 每个路由规则，都是一个对象，这个规则对象，身上，有两个必须的属性：
           //  属性1 是 path， 表示监听 哪个路由链接地址；
           //  属性2 是 component， 表示，如果 路由是前面匹配到的 path ，则展示 component 属性对应的那个组件
           // 注意： component 的属性值，必须是一个 组件的模板对象， 不能是 组件的引用名称；
           { path: '/login', component: login },
           { path: '/register', component: register }
         ]
       })
       
        // 创建 Vue 实例，得到 ViewModel
       var vm = new Vue({
         el: '#app',
         data: {},
         methods: {},
         router: routerObj // 将路由规则对象，注册到 vm 实例上，用来监听 URL 地址的变化，然后展示对应的组件
       });
     </script>
   ```

#### router-link路由

```html
 <!-- router-link 默认渲染为一个a 标签,可以使用tag属性更改默认标签 -->
    <router-link to="/login" tag="span">登录</router-link>
    <router-link to="/register">注册</router-link>

```

```js
 var routerObj = new VueRouter({
      // route // 这个配置对象中的 route 表示 【路由匹配规则】 的意思
      routes: [ // 路由匹配规则 
        // 每个路由规则，都是一个对象，这个规则对象，身上，有两个必须的属性：
        //  属性1 是 path， 表示监听 哪个路由链接地址；
        //  属性2 是 component， 表示，如果 路由是前面匹配到的 path ，则展示 component 属性对应的那个组件
        // 注意： component 的属性值，必须是一个 组件的模板对象， 不能是 组件的引用名称；
        //设置重定向，直接到 /login界面
        { path: '/', redirect: '/login' }, // 这里的 redirect 和 Node 中的 redirect 完全是两码事
        { path: '/login', component: login },
        { path: '/register', component: register }
      ],
      linkActiveClass: 'myactive'  //修改默认类为 myactive
    })
 
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      router: routerObj // 将路由规则对象，注册到 vm 实例上，用来监听 URL 地址的变化，然后展示对应的组件
    });
```

#### 路由规则定义参数 query

```html
 <div id="app">

    <!-- 如果在路由中，使用 查询字符串，给路由传递参数，则 不需要修改 路由规则的 path 属性 -->
    <router-link to="/login?id=10&name=zs">登录</router-link>
    <router-link to="/register">注册</router-link>

    <router-view></router-view>

  </div>
```

```js
 <script>

    var login = {
      template: '<h1>登录 --- {{ $route.query.id }} --- {{ $route.query.name }}</h1>',
      data(){
        return {
          msg: '123'
        }
      },
      created(){ // 组件的生命周期钩子函数
        // console.log(this.$route)
        // console.log(this.$route.query.id)
      }
    }

    var register = {
      template: '<h1>注册</h1>'
    }

    var router = new VueRouter({
      routes: [
        { path: '/login', component: login },
        { path: '/register', component: register }
      ]
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      // router: router  一样的时候可以写成如下样子
      router
    });
  </script>
```

#### 路由规则传参方式2 params

```html
<div id="app">

    <!-- 如果在路由中，使用 查询字符串，给路由传递参数，则 不需要修改 路由规则的 path 属性 -->
    <router-link to="/login/12/ls">登录</router-link>
    <router-link to="/register">注册</router-link>

    <router-view></router-view>

  </div>
```

```js
<script>

    var login = {
      template: '<h1>登录 --- {{ $route.params.id }} --- {{ $route.params.name }}</h1>',
      data(){
        return {
          msg: '123'
        }
      },
      created(){ // 组件的生命周期钩子函数
        console.log(this.$route.params.id)
      }
    }

    var register = {
      template: '<h1>注册</h1>'
    }

    var router = new VueRouter({
      routes: [
        { path: '/login/:id/:name', component: login },
        { path: '/register', component: register }
      ]
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      // router: router
      router
    });
  </script>
```

#### 路由的嵌套

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <script src="./lib/vue-router-3.0.1.js"></script>
</head>

<body>
  <div id="app">

    <router-link to="/account">Account</router-link>

    <router-view></router-view>

  </div>

  <template id="tmpl">
    <div>
      <h1>这是 Account 组件</h1>

      <router-link to="/account/login">登录</router-link>
      <router-link to="/account/register">注册</router-link>

      <router-view></router-view>
    </div>
  </template>

  <script>

    // 组件的模板对象
    var account = {
      template: '#tmpl'
    }

    var login = {
      template: '<h3>登录</h3>'
    }

    var register = {
      template: '<h3>注册</h3>'
    }

    var router = new VueRouter({
      routes: [
        {
          path: '/account',
          component: account,
          // 使用 children 属性，实现子路由，同时，子路由的 path 前面，不要带 / ，否则永远以根路径开始请求，这样不方便我们用户去理解URL地址
          children: [
            { path: 'login', component: login },
            { path: 'register', component: register }
          ]
        }
        // { path: '/account/login', component: login },
        // { path: '/account/register', component: register }
      ]
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      router
    });
  </script>
</body>

</html>
```

#### 经典路由布局

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <script src="./lib/vue-router-3.0.1.js"></script>
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
    }

    .header {
      background-color: orange;
      height: 80px;
    }

    h1 {
      margin: 0;
      padding: 0;
      font-size: 16px;
    }

    .container {
      display: flex;
      height: 600px;
    }

    .left {
      background-color: lightgreen;
      flex: 2;
    }

    .main {
      background-color: lightpink;
      flex: 8;
    }
  </style>
</head>

<body>
  <div id="app">

    <router-view></router-view>
    <div class="container">
      <router-view name="left"></router-view>
      <router-view name="main"></router-view>
    </div>

  </div>

  <script>

    var header = {
      template: '<h1 class="header">Header头部区域</h1>'
    }

    var leftBox = {
      template: '<h1 class="left">Left侧边栏区域</h1>'
    }

    var mainBox = {
      template: '<h1 class="main">mainBox主体区域</h1>'
    }

    // 创建路由对象
    var router = new VueRouter({
      routes: [
        /* { path: '/', component: header },
        { path: '/left', component: leftBox },
        { path: '/main', component: mainBox } */


        {
          path: '/', components: {
            'default': header,
            'left': leftBox,
            'main': mainBox
          }
        }
      ]
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      router
    });
  </script>
</body>

</html>
```



