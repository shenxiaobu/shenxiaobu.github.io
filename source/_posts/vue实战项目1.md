---
title: vue实战项目1
date: 2019-03-16 22:13:34
categories: "日常记录"
tags:
	- vue
	- application
---

### vue项目实战

[第一步，搭建好目录，并配置好文件](https://shenxiaobu.github.io/2019/03/16/vue%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%981/)

搭建好文件目录并将配置文件配置好后。

执行命令 `cnpm install`，将项目依赖包和工具下载下来。

在index.html文件里面的body内创建一个div

```html
<div id="app"></div>
```

在main.js文件里面引入vue和app.vue组件，并创建一个vue实例，render界面

```
import Vue from 'vue'
import app from './app.vue'
var vm = new Vue({
 	el: "#app",
    render:c=>c(app)
})
```

```vue
app.vue文件
<template>
	<h1>你好</h1>
</template>
<script></script>
<style></style>
```

执行命令 `cnpm run dev`  显示效果如下

![1552747844009](1552747844009.png)

接下来就是实现顶部标题栏，这里采用 mint-ui中 header组件。

在main.js中引用组件，并安装到vue上

```js
//在main.js文件  增加代码
import {Header} from 'mint-ui'  
Vue.component(Header.name,Header)
console.log(Header.name)  //结果为 mt-header 有结果说明引包成功
```

```vue
//app.vue文件中引用header
<template>
	<mt-header title="小布商城"></mt-header>
	<h1>你好</h1>
</template>

```

这样子的话，执行项目会报错

![1552748492838](1552748492838.png)

```
[WDS] Errors while compiling. Reload prevented.
./node_modules/_vue-loader@13.7.3@vue-loader/lib/template-compiler?{"id":"data-v-5ef48958","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=template&index=0!./src/app.vue
(Emitted value instead of an instance of Error) 
  Error compiling template:
  
  
  <mt-header title="小布商城"></mt-header>
  <h1>你好</h1>
  
  
  
  - Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.

 @ ./src/app.vue 11:0-276
 @ ./src/main.js
 @ multi ./node_modules/_webpack-dev-server@2.11.3@webpack-dev-server/client?http://localhost:3000 webpack/hot/dev-server ./src/main.js
errors @ bundle.js:10120
onmessage @ bundle.js:12061
EventTarget.dispatchEvent @ bundle.js:12241
(anonymous) @ bundle.js:12958
SockJS._transportMessage @ bundle.js:12956
EventEmitter.emit @ bundle.js:12157
WebSocketTransport.ws.onmessage @ bundle.js:15032
```

报错原因就是 template只能有一个子标签（一级的子元素），不能有两个子标签

解决办法，用div包住刚刚的 mt-header和h1 标签

```vue
<template>
	<div>
		<mt-header title="小布商城"></mt-header>
		<h1>你好</h1>
	</div>
</template>
```

点击 ctrl+ s 保存，报错自动消失，并显示界面如下

![1552748750357](1552748750357.png)

接下来实现底部tabbar部分

tabbar我们采用 MUI的tabbar找到MUI的tabbar示例，右键查看源代码，并把tabbar的代码复制到app.vue中,并将父元素的div加以个 app-container类

```
<template>
    <div class="app-container">
        <mt-header title="小布商城"></mt-header>
        <h1>你好</h1>
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
    
</template>
<script></script>
<style></style>
```

保存，显示效果如下

![1552749104693](1552749104693.png)

为什么和MUI示例的样式不一样呢？因为没有引入css文件，接下来就是引入mui.css了

```js
// main.js文件下引入 mui.css(事先已经存放好位置了)

import './lib/mui/css/mui.min.css'
```

保存后效果如下

![1552749413240](1552749413240.png)

接下来就是更改底部的icon和对应的文字了。

我们要做的四个tabbar  分别是  首页   会员    购物车   搜索

在mui的icon示例中 我们找到了  首页  会员呢  搜索的图标，但是购物车的图标我们并没有看到。暂时先修改三个

##### 购物车的图标怎么找？

浏览mui的示例时，我们看到了关于  icon 的示例还有另一个icon-extra.html示例，打开后发现有我们需要的购物车图标。审查元素后发现是引用了mui-icon-extra mui-icon-extra-cart 两个类。

![1552749911201](1552749911201.png)

我们将原先的 mui-icon mui-icon-contact 类更换为mui-icon-extra mui-icon-extra-cart 这两个类。显示效果如下

![1552750077775](1552750077775.png)

不仅图标没出来，连购物车三个字的样式都变了，所以可以想到，刚刚的 mui-icon类 是不可以删除的，这个类有样式，将 mui-icon 类添加进去。

```html
<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
</a>
```

![1552750231268](1552750231268.png)

购物车三个字的样式回来了，但是图标的问题还是没解决，那为什么示例的代码就能正常显示图标，我们的就不行呢？所以查看示例icon-extra.html文件的源代码

![1552750382550](1552750382550.png)

我们发现它不仅引用了mui.min.css 还引用了 icons-extra.css

于是我们将示例中的 icons-extra.css 文件复制一份放到和 我们的mui.min.css文件同级

并按照合适的路径在main.js文件中引入该css文件。

保存执行，报错

![1552750771370](1552750771370.png)

因为在 icons-extra.css 文件中还引入了  路径为 ../fonts/mui-icons-extra.ttf 的字体文件，所以我们从示例中复制一份字体文件，并按照路径所示位置放好，刚好是在mui下的fonts目录下。目录如图所示![1552750990714](1552750990714.png)

放好字体文件并确保存放的位置是正确的后，保存，界面显示如下

![1552751122875](1552751122875.png)

这样我们的顶部和底部的样式基本就ok了

接下来，我们完成 tabbar 路由部分

首先将tabbar 中的a标签 改为 router-link标签，把href 改为 to，并把跳转的路由更换，tabbar部分的代码如下

```html
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
	</nav>
```

#### 实现路由

要实现路由，首先肯定得引入路由包，并在Vue上安装,引入 router.js文件，并将router挂载到vue实例上，这样就可以在 router.js 文件上配置路由

```js
//main.js 文件上引入 vue-router并安装到Vue上

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

var vm = new Vue({
    el: "#app",
    render: c=>c(app),
    router      //将路由挂载到实例上
})
```

 router.js 文件配置路由

```js
import VueRouter from 'vue-router'

var router = new VueRouter({
  routes:[  ]
})

export default router
```

这样底部的菜单就可以一点击改变浏览器跑到相应的地址了，只是没有做页面跳转。

接下来在src下创建一个 叫做 components的文件夹，components下创建一个 tabbar的文件夹，tarbar文件夹下创建四个.vue文件分别为

1. HomeContainer.vue
2. MemberContainer.vue
3. ShopcarContainer.vue
4. SearchContainer.vue  

四个文件的内容分别为相应的文件名，如HomeContainer.vue

```vue
<template>
    <h1>HomeContainer.vue</h1>
</template>
<script></script>
<style></style>
```

配置router.js文件

```JS
import VueRouter from 'vue-router'
import home from './components/tabbar/HomeContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'

var router = new VueRouter({
  routes:[  
    {path: '/',redirect: '/home'},
    {path: '/home', component: home},
    {path: '/member', component: member},
    {path: '/shopcar', component: shopcar},
    {path: 'search', component: search}
  ]
})

export default router
```

保存后查看是否有报错，如果有报错的话，很大原因是文件名打错了，或者是哪个字母漏了或多了，根据报错查找原因，这次是因为tabbar文件夹的名字取成 tarbar了，导致报错，修改完后；

#### 点击tabbar 还是不跳转？

原因就是没有在 app.vue 放置一个 router-view标签。添加并保存后点击tabbar效果，发现点击搜索，并没有跳转，经过检查，发现是因为路由配置出错，在 search 路由哪里，少了个 / ，添加后成功。 所以配置路由一定要细心



![1552753737543](1552753737543.png)



补充：刚刚我们做的顶部mt-header，没有设置fixed属性，会导致，顶部标题会跟着移动，所以我们在app.vue文件上给 mt-header 标签添加 fixed 属性使其固定在顶部。

但是给定了fixed属性后，我们的界面变成了这样。

![1552754370867](1552754370867.png)

在app.vue文件中设置样式

```css
.app-container{
    padding-top: 40px;
    padding-bottom: 50px;
}
```

成功回到想要的样式。

----

#### 接下来在home界面制作轮播图

轮播图采用mint-ui的组件，使用 mint-ui组件注意事项

1. 因为我们是按需引入的方式引入mint-ui，所以我们需要先引入我们标签上出现的mt-name  中的 name引入进来。
2. 如前面我们用到了 `mt-header` ，所以我们引入 `import {Header} from 'mint-ui'`
3. 引入了还不够，还得在Vue上创建该组件`Vue.component(Header.name,Header)`

由于mint-ui的官网进不去，我们没法查看文档，于是我们去github上查找mint-ui的项目，并下载下来，我们可以查看example里面的代码，然后复制代码块来使用。

[mint-ui在github上的下载地址](https://github.com/ElemeFE/mint-ui)

![1552792984950](1552792984950.png)

查看mint-ui里面example的 swipe 部分，复制代码块到home。

```html
  <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
```

点击保存直接报错，原因就是我们没有引入标签的样式，由于上面使用了两个mt的mint自定义标签，所以我们需要引用两个，使用首字母全大写的方式进行引入，如下

```js
import {Header,Swipe,SwipeItem} from 'mint-ui'
```

还是报错，因为还没有引入组件

```js
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
```

保存还是报错，报错如下

```
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead
```

这个报错前面就遇到过了，就是因为 .vue文件上的 template 标签只能包住一个 子标签，我们现在的代码如下：

![1552793787465](1552793787465.png)

```vue
<template>
	<div>
    	<!--轮播图部分-->
    	<mt-swipe :auto="4000">
     		<mt-swipe-item class="slide1">1</mt-swipe-item>
      		<mt-swipe-item class="slide2">2</mt-swipe-item>
      		<mt-swipe-item class="slide3">3</mt-swipe-item>
    	</mt-swipe>
    	<h1>HomeContainer.vue</h1>
	</div>
</template>
<script></script>
<style></style>
```

保存，报错消失，显示效果如下

![1552793946849](1552793946849.png)

我们要的轮播图还是没有出现，这时我们就要审查元素，查看我们的轮播图的标签有没有渲染在页面上，查看并分析原因，我们发现轮播图的高度为0

![1552794158912](1552794158912.png)

所以我们认为是没有给轮播图高度导致的页面上没有显示出来，所以先试着给轮播图高度，然后看看效果

![1552794222708](1552794222708.png)

说明确实是因为没有高度而导致轮播图没显示，所以我们在 HomeContainer.vue里面的style中用scss 给界面写样式

`注意：在.vue文件中的style中写样式，必须带上 scoped，这样才会控制作用范围只在当前vue文件有效，避免污染全局，可以设置 lang属性为 scss，代表使用 scss预演编写样式`

这时我们可以把 app.vue里面的你好给去掉了，占位置，然后编写我们的轮播图样式。

我们先来熟悉下scss的编写，下面完成一个需求

三个轮播图页面显示背景分别为黄色，红色，蓝色

```scss
<style lang="scss" scoped>
	.mint-swipe{
		height: 200px;
		.mint-swipe-item {
            &:nth-child(1){
                background: yellow;
            }
            &:nth-child(2){
                background: red;
            }
            &:nth-child(3){
                background: blue;
            }
		}
	}
</style>
```

![1552795167260](1552795167260.png)

效果实现，接下来我们使用请求的数据来渲染轮播图，涉及到请求，首先就得想到

vue-resource 包，来发送请求并获取相应数据。

注意

```
不仅要在 main.js文件上 引入 vue-resource 包
还得  在Vue上安装，两条指令缺一不可

import VueResource from 'vue-resource'
Vue.use(VueResource)
```

在HomeContainer.vue文件上的script标签上使用请求，并渲染到界面

```vue
<template>
    <div>
        <!--轮播图部分-->
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in bannerList" :key="item.img" >
            <router-link :to="item.url"><img :src="item.img" /></router-link>
        </mt-swipe-item>
        </mt-swipe>

        <h1>HomeContainer.vue</h1>
     </div>
</template>
<script>
  import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                bannerList: []
            }
        },
        created(){
            this.getBannerList()
        },
        methods:{
            getBannerList(){
                console.log("123")
                this.$http.get('http://47.89.21.179:8080/api/getlunbo').then(result=>{
                    console.log(result.body)
                    if(result.body.status === 0){
                        this.bannerList = result.body.message
                    }else{
                         Toast("请求失败")
                    }
                })
            }
        }
    }

</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item {
            &:nth-child(1){
                background: yellow;
            }
            &:nth-child(2){
                background: red;
            }
            &:nth-child(3){
                background: blue;
            }
            img{
                width: 100%;
                height: 100%;
            }
		}
    }
</style>
```



做到这里有三个问题？

1. 为什么router.js文件里面需要引入vue-router？

2. 为什么HomeContainer.vue中有使用到vue-resource却不用在文件上单独引包？
3. 为什么main.js文件上引用了 mint-ui上的toast，HomeContainer.vue上不能用，会报错说没有定义toast，还得在HomeContainer.vue文件上单独引用才可以使用Toast？

第一个问题，应该还好，因为router.js里面，使用了 new VueRouter({})

第二个问题，应该就是HomeContainer.vue是vue文件，在main.js引用的vue包，都能直接使用吧。

第三个问题，应该就是 Toast 不是mint-ui的标签，并没有使用 Vue.component()进行组件安装，所以需要使用得单独引用吧。



个人乱个解释，如有看到，并有错误请指点微信(syx365night)

这样轮播图部分就完成了，接下来就是制作菜单

----

菜单部分我们采用，mui里面的九宫格，同样的直接复制代码块，然后进行整改。

````html
 <!--菜单部分-->
        <div class="app-menu">
             <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
        </div>      
````

显示效果如下

![1552801503730](1552801503730.png)

我们要做的事六个格子的菜单，标题分别为  新闻资讯、图片分享、商品购买、留言反馈、视频专区、联系我们。

我们在src目录下新建一个文件夹images，专门用来存放照片，当然以后可能照片也是从服务器获取。

为了界面代码简洁，我们在制作了一串列表数据，并使用 v-for的形式渲染界面。

数据如下

```json
menuList:[
                        {id:1,title:'新闻资讯',img:'./src/images/menu1.png',url:""},
                        {id:2,title:'图片分享',img:'./src/images/menu2.png',url:""},
                        {id:3,title:'商品购买',img:'./src/images/menu3.png',url:""},
                        {id:4,title:'留言反馈',img:'./src/images/menu4.png',url:""},
                        {id:5,title:'视频专区',img:'./src/images/menu5.png',url:""},
                        {id:6,title:'联系我们',img:'./src/images/menu6.png',url:""},
                   ]
```

```html
  <!--菜单部分-->
        <div class="app-menu">
             <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
                    v-for="item in menuList" :key="item.id">
                        <router-link :to="item.url">
		                    <img :src="item.img"/>
                            <div class="mui-media-body">{{item.title}}</div>
                        </router-link>
                    </li>
		        </ul> 
        </div>      
```

显示效果如下

![1552802174625](1552802174625.png)

接下来就是修改样式了

将图片大小修改为 宽 60px，高 60px

将背景修改为 白色

将标题的字体大小改为 13px

样式代码如下

```scss
<style lang="scss" scoped>
    .app-menu{
        .mui-grid-view.mui-grid-9{
            background: #fff;
            img{
                width: 60px;
                height: 60px;
            }
            .mui-media-body{
                font-size: 13px;
            }
        }
    }
</style>
```

显示效果如下

![1552802643778](1552802643778.png)

发现有边框格子不好看，删除掉边框

```scss
.app-menu{
        .mui-grid-view.mui-grid-9{
            background: #fff;
            border: none;
           .mui-table-view-cell{
               border: 0;         /* border：0 与 border：none  */
                img{
                    width: 60px;
                    height: 60px;
                }
                .mui-media-body{
                    font-size: 13px;
                }
           }
        }
    }
```

显示效果如下

![1552803177033](1552803177033.png)

这里我们就要扯到  border:none 和 border: 0 的区别了

详情请看[border:none与border:0的区别](https://blog.csdn.net/u010200222/article/details/45622647)

这样菜单部分就完成了

----

接下来设置切换路由时的动画效果

在app.vue中添加v-enter,v-leave-to,v-enter-active,v-leave-active类的样式，并用transition 标签包住 路由容器。

```html
app.vue
<transition>
	<router-view></router-view>
</transition>
```

```scss
app.vue
<style lang="scss" scoped>
	.v-enter{
		opacity: 0;
        transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
        transform: translateX(-100%);
	}
	v-enter-active,v-leave-active{
		transition: all 0.5s ease;
	}
</style>

```

查看点击切换路由的时候，发现前面忘记对 linkActiveClass 进行设置了，导致home图标一直是高亮的。回到刚刚的路由，我们只要在router.js

文件中定义一个类，使其高亮显示就好了。因为我们用的是 mui 的组件，所以其实那个类mui已经给我们了，查看 home 标签的 类就可以发现那个类的名字叫做 mui-active

![1552805175763](1552805175763.png)

然后将 router.js文件中的路由配置中加一个 linkActiveClass属性，值为'mui-active'，然后把app.vue文件中home里面的mui-active类去掉就可以了

![1552805389742](1552805389742.png)

----

回到动画这，由于设置了动画，出现了许多问题

![1552805819059](1552805819059.png)

图片上只写了 overflow  其实是 overflow-x

设置完在 app-container类设置完 overflow-x属性为 hidden后还存在问题。

![1552821067729](1552821067729.png)

换页的时候会从地下跑上去。这不是我们想要的，解决办法

给  .v-leave-to  一个为 absolute的定位就可以了，至于为什么，我也不知道。

由于我们前面各个页面的内容是用 h1 包住的，还是会存在 滚动条的问题，所以得把 h1 标签改为  div标签  如下

```html
<template>
    <div>ShopcarContainer.vue</div>
</template>
<script></script>
<style></style>
```

这样我们的Home界面就差不多。

---

制作我们的新闻资讯页面，首先就是配置HomeContainer.vue文件里面 新闻资讯那个

router-link 的to 属性，改为 /home/newslist  ，其次在router.js文件上添加一个路由

```
{path: '/home/newslist'，component: newslist}
```

然后记得在前面引入路由

```
import newslist from './components/news/newslist.vue'
```

最后根据这个路径创建一个文件夹，其实顺序说反了，不过都一样，反过来做的出来

更聪明。切记，路径很容易出错，所以一定要小心字母大小写以及少写或者多写。

点击新闻资讯显示效果如下

![1553001873471](1553001873471.png)

接下来就是新闻列表了，查看了新闻列表的样式，发现mui里面的 media-list 例子非常一致，于是采用他作为我们新闻列表的样式，查看源代码，复制

点击保存，报错了，显示错误原因是因为例子中有图片，将图片修改为我们本地图片

显示效果如下

![1553002360180](1553002360180.png)

接下来修改样式

```
<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="https://shenxiaobu.github.io/images/xiaobu.png">
                <div class="mui-media-body">
                    <h1 class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</h1>
                    <p class="subtitle">
                        <span>发表时间：2019-03-19 21:35:32</span><span>点击100次</span>
                    </p>
                </div>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .mui-table-view{
        .mui-media-body{
            h1{
                font-size: 14px;
            }
            p{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #226aff;
            }

        }
    }
</style>
```

接下来就是采用 axios  获取新闻列表数据。

`cnpm i axios -S` 安装axios    然后再main.js上引入 并安装

```js
import axios from 'axios'
axios.defaults.baseURL = 'http://47.89.21.179:8080' //设置访问根路径
Vue.prototype.axios = axios  //在Vue中添加axios的方法
```

在新闻列表页上使用axios请求并渲染数据

```vue
<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
            <router-link :to="'/home/newsList/newsinfo/'+item.id">
                <img class="mui-media-object mui-pull-left" src="https://shenxiaobu.github.io/images/xiaobu.png">
                <div class="mui-media-body">
                    <h1 class='mui-ellipsis'>{{item.title}}</h1>
                    <p class="subtitle">
                        <span>发表时间：{{item.add_time}}</span><span>点击{{item.click}}次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                newsList: []
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                this.axios.get('api/getnewslist').then(result => {
                    console.log(result.data)
                    if(result.data.status === 0){
                        this.newsList = result.data.message
                    }else{
                        Toast("新闻列表获取失败")
                    }
                })
            }
        }
    }

</script>
```

显示效果如下

![1553005327395](1553005327395.png)

可以发现，时间格式不是我们想要的，这是我们可以想到过滤器，接下来我们使用过滤器来解决时间格式这个问题

推荐个好插件，一个时间格式化的插件  moment。

三部曲

1. 安装 `cnpm i moment -S`
2. 引用 `import moment from 'moment'`
3. 调用

```
import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern='YYYY-MM-DD HH-mm-ss'){
    return moment(dataStr).format(pattern)
})
```

在日期中后面加个管道符，然后加 dataFormat，就可以实现时间格式过滤了

```
{{item.add_time|dataFormat}}
```

显示效果如下

![1553006264832](1553006264832.png)

接下来就是制作新闻详情

---

配置路由，在新闻列表中配置路由

然后在router.js添加路由，并创建相应的路由文件

```
  <router-link :to="'/home/newsList/newsinfo/'+item.id"></router-link>
  
  import newsinfo from './components/news/newsinfo.vue'
   {path: "/home/newslist/newsinfo/:id", component: newsinfo}
```

![1553006876936](1553006876936.png)

接下来就是获取数据，写页面。

```vue
<template>
     <div class="newsinfo-container">
        <h1 class="title">{{newsInfo.title}}</h1>
        <p class="subtitle">
            <span>创建时间： {{newsInfo.add_time | dataFormat}}</span>
            <span>点击{{newsInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html='newsInfo.content'></div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                id: this.$route.params.id,
                newsInfo: {}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.axios.get('api/getnew/'+this.id)
                .then(result => {
                     if(result.data.status === 0){
                           this.newsInfo = result.data.message[0] 
                       }else{
                           Toast("获取新闻详情失败")
                       }
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
 .newsinfo-container{
        padding: 0 5px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #226aff;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
```

还差一个评论页面，由于很多地方都有用到评论，所以评论和评论列表，我们把它制作

成一个组件，名在叫做 comment.vue.

在components下新建一个文件夹subcomponents，然后在这个文件夹下创建一个

comment.vue  内容如下

```vue
<template>
    <div>这是评论组件</div>
</template>
<script></script>
<style></style>
```

在newsinfo.vue上引用comment组件  

```js
<template>
	<comment-box></comment-box>
</template>
<script>
   import comment from '../subcomponents/comment.vue'
	export default {
        data(){
            return {}
        },
        methods:{},
        components:{
            "comment-box":comment
        }
	}
</script>
```

显示效果如下

![1553008528358](1553008528358.png)

按钮使用 mint-ui 的button

```html
 <mt-button type="primary" size="large">发表评论</mt-button>
 <mt-button type="danger" size="large" plain>加载更多</mt-button>
```

使用到 mint-ui  所以得在main.js上引入，并导入组件。

#### 评论组件

获取评论列表数据，渲染界面。

加载更多数据，页码+1，完成数组拼接 

发表评论，完成数组头部插入数据

axios post提交注意事项

```js
<script>
import qs from 'qs'
import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                pageIndex: 1,
                commentList: [],
                content: ''
            }
        },
        props:['id'],
        created(){
            this.getCommentList()
        },
        methods:{
            getCommentList(){
                this.axios.get('api/getcomments/'+this.id,{
                    params:{
                        pageindex: this.pageIndex
                    }
                }).then(result => {
                    console.log(result.data)
                    if(result.data.status === 0){
                        this.commentList = this.commentList.concat(result.data.message) 
                    }else{
                        Toast("请求失败")
                    }
                })
            },
            getMore(){
                this.pageIndex++;
                this.getCommentList();
            },
            postComment(){
                this.content = this.content.trim()
                if(this.content.length == 0)
                     return Toast("请输入内容")
              this.axios.post('api/postcomment/'+this.id,qs.stringify({"content":this.content}),
              {headers:{
                  'Content-Type': 'application/X-www-form-urlencoded'
              }})
                // this.$http.post('api/postcomment/'+this.id,{"content":this.content})
                    .then(result => {
                        if(result.data.status === 0){
                            var cmt = {
                                user_name:'匿名用户',
                                add_time: Date.now(),
                                content: this.content
                            }
                            this.commentList.unshift(cmt)
                            this.content = ''
                        }else{
                            Toast("信息提交不成功")
                        }
                    })
                }
            }
    }
```

需要引入qs，对 对象 进行转译



----

#### 制作图片资讯

顶部采用MUI 的组件代码块，tab-top-webview-main.html，复制这个文件内有效内容

到我们的组件上，并修改样式。渲染完我们自己的顶部分类内容后，发现左右滑动不

了，原因是因为代码块内部有  .mui-scroll-wrapper类，要实现scroll滑动，还得去查看

官方文档关于 scroll的详细介绍

![1553396721135](1553396721135.png)

在我们的组件上引用了如下

```js
import mui from '../../lib/mui/js/mui.min.js'
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```

运行后发现报错，原因是因为引入的mui.js文件在严格模式下会出问题，所以我们要

不适用严格模式运行，所以引入插件 ` babel-plugin-transform-remove-strict-mode`

`cnpm i babel-plugin-transform-remove-strict-mode -S`

安装完成后在 .babelrc 文件上加入

```
"transform-remove-strict-mode"
```

这样直接刷新的新闻资讯页面的时候就能滑动了，但是从其他地方跳转到新闻资讯后

左右滑动不了。原因是我们刚刚没有把scroll初始化放在Vue实例的生命周期函数中去，

因为我们是对界面渲染完后，才初始化的，所以得放在 mounted 上。

```
   mounted(){
          mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
```

这时就ok了

![1553397958190](1553397958190.png)

下面的图片展示采用 mint-ui的懒加载，按需引入mint-ui组件的话并没有懒加载效果

所以得引入全部的 mint-ui组件，还有就是懒加载使用方法看官方文档，经常更新

得给元素设置一个宽高。。。





商品购买界面  使用经典两列布局

商品详情界面  使用 mui 里面的 card 组件。

第一个轮播图，发现和home界面的轮播图相似，所以我们自己将轮播图封装起来，

在 subcomponents文件夹下新建一个swiper.vue的文件。

```vue
<template>
     <mt-swipe :auto="4000">
        <mt-swipe-item v-for='item in bannerList' :key="item.img">
            <img :src="item.img" :class="{'full':isfull}" />
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default {
        props:['bannerList',"isfull"]
};
</script>
<style lang="scss" scoped>
     .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            text-align: center;
            img{
                height: 100%;
                &.full{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
```

因为首页的轮播图 宽高都是百分百，商品详情的轮播图是高百分百，宽自适应，所以

设置了一个full类，用来判断是否该全100%



下面的数量添加，采用 MUI的 numberbox组件。还是采用自己封装她，然后哪里需要

就哪里引入，由于这个box的组件又是得引入js，并初始化，所以还是得放在生命周期

上的mounted上初始化

```vue
<template>
        <div class="mui-numbox" data-numbox-min='1' >
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" @change='getSelectCount'  ref='count' class="mui-input-numbox" type="number" value="1" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
</template>
<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default{
        mounted(){
            mui('.mui-numbox').numbox()
        },
        props:['maxnum'],
        methods:{
            getSelectCount(){
                this.$emit('func',parseInt(this.$refs.count.value))
            }
        },
        watch:{   //设置了max-box的最大数量，然而因为父组件的最大数量是通过请求得来的数据，
                  //是异步的，所以max值会是undefined，但是最后max的值总会是我们想要的值，
                  //所以采用watch监听属性值的变化，并渲染上去,查看mui的maxbox的js方法
            maxnum: function(newVal, oldVal){
                mui('.mui-numbox').numbox()
                .setOption('max',newVal)
            }
        }
    }
</script>
```

由于要设置一个最大值等于库存量，所以得组件传值，将库存量的值传给组件，但是由

于库存量的值是通过请求得来的数据，属于异步操作，所以组件上的最大值一开始渲染

的时候是一个undefined，所以我们的使用watch 监听库存量的值，并使用js方法改变

最大值。因为迟早会请求到数据，所以使用watch监听数据改变。

![1553398911883](1553398911883.png)



注意： 别以为这样就完事了，但是其实里面输入一个超过库存量的值，然后再点外面的

空白，虽然会里面的数值会变成库存量，但是里面的真实值其实是你输入的超过库存量

的值。

![1553399261538](1553399261538.png)

```js
  getSelectCount(data){
                    this.selectCount = data

                    console.log(data)
                    if(this.selectCount > this.goodsInfo.stock_quantity)
                        this.selectCount = this.goodsInfo.stock_quantity
                }
```

----

后面的图文介绍，因为是使用 v-html 引入的，里面的表情并没有 scoped自己添加的那

样的自定义属性，所以标有 scoped属性 里面的样式，对 v-html 的样式是不起效果的。

所以引入了  deep

### deep深度多用选择器

deep 能够影响子元素的渲染，未采用 /deep/ 的时候

![1553399808871](1553399808871.png)

采用/deep/的时候

```scss
<style lang='scss' scoped>

    .goods-desc{
        padding: 4px;
        .title{
            font-size: 16px;
            margin: 15px 0;
            text-align: center;
            color: #226aff;
        }
        /deep/ .content{
            text-align: center;
            img{
                width: 100%;
                margin: 0;
                vertical-align: middle;
            }
            p{
                margin: 0;
            }
        }
        
        
    }
</style>
```

![1553399912141](1553399912141.png)

另一种方法就是去掉  scoped属性，但是为了避免后期不必要的麻烦，还是尽量不要去

掉scoped，然后采用deep深度作用选择器，具体使用方法，查看官方文档



----

接下来就是添加购物车  小球动画了

 实现原理：

 1. 获取numbox中数量的位置1，底部菜单购物车徽章的位置2

 2. 让小球从位置1 以需要的贝赛尔曲线轨迹运动到位置2

 3. 由于每把手机的宽高比都不一样，所以得采用先获取位置，再定位。

 4. 由于mounted上理论上界面是都渲染好了，但是为了更精准点，我们延迟一秒后

    再对小球进行定位

	5.  为了防止重复点击，影响小球效果，得让小球显示的时候禁止点击

在 文本框中输入一个小球的 div

```vue
 <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" ref="ball" v-show="ballflag"></div>
        </transition>
```

修改小球的样式

```css
.ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: red;
            position: absolute;
            z-index: 11;
        }
```

小球的位置获取到文本框的位置后再进行定位

```js
 mounted(){
                var that = this;
                setTimeout(function(){
                    that.setBallposition()
                },1000)
                //使用一次性定时器，确保界面完全加载后再将小球定位
                //注意，定时器里面一定不能用this，得使用代称
            },
 methods:{
      setBallposition(){
      		//test 就是文本框的位置
                    var test = document.getElementById("test");
             //getBoundingClientRect 获取四个边的距离       
                    const testposition = test.getBoundingClientRect();
                   this.$refs.ball.style.top = (testposition.top+10)+'px';
                    this.$refs.ball.style.left = (testposition.left+10)+'px';
                },
 }
```

在添加购物车按钮中添加一个事件,并在data上定义一个isClick，防止重复点击

```
<mt-button type='danger' size="small" palin @click="addshopcar">加入购物车</mt-button>
```

```js
 addshopcar(){
                        var that = this;
                        if(this.isClick){
                            Toast("如果要大幅度更改数量可以直接在输入框修改数量")
                        }else{
                            this.isClick = !this.isClick
                             setTimeout(function(){
                                that.isClick = !that.isClick
                            },3000)
                             this.ballflag = !this.ballflag;
                        }
    
},
```

定义动画

````js
 beforeEnter(el){
                    el.style.transform = "translate(0,0)"
                },
                enter(el,done){
                    el.offsetWidth;
                    const badgeposition = document.getElementById("badge").getBoundingClientRect();
                    const ballposition = this.$refs.ball.getBoundingClientRect();
                    var xdist = badgeposition.x - ballposition.x;
                    var ydist = badgeposition.y - ballposition.y;
                    el.style.transform = `translate(${xdist}px,${ydist}px)`;
                    el.style.transition = 'all 0.5s cubic-bezier(0.4,-0.3,1,.68)'
                    done()
                },
                afterEnter(el){
                    this.ballflag =!this.ballflag;
                },
````

----

接下来就是购物车使用 vuex 的部分了

安装 vuex， `cnpm i vuex -S`

在main.js 中引入 vuex

```js
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state:{
        car: []
    },
    mutations:{
        
    },
    getters:{
        
    }
})

//在实例上挂载store
var vm = new Vue({
    data:{
        
    },
    methods:{},
    store
})
```

由于后期会写很多方法和数据在 store里面，所以新建一个 store.js

的文件，在里面书写 store

```js
//main.js

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store.js'
//在实例上挂载store
var vm = new Vue({
    data:{
        
    },
    methods:{},
    store
})
```

```js
//store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
	state:{ //this.$store.state
		car: car
	},
	mutations:{
		
	},
	getters:{ //this.$store.getters.方法名称
			
		
	}	

})

export default store;
```

第一步：点击加入购物车按钮

1. 组建一个对象，包括 id，数量,价格，是否选中；
2. 调用store中mutations中加入购物车的方法
3. 这个方法是存储购物车的

```js
addToCar(state,goodsinfo){   //this.$store.commit("方法名称"，一个参数)
			//点击加入购物车，把商品信息保存到store中的car中
			//分析：
			//1. 如果购物车中，之前就已经有这个对应的商品了，那么只需要更新数量
			//2. 如果没有，则直接把商品数据，push到car中即可
			var flag = false
			state.car.some(item => {
				if(item.id == goodsinfo.id){
					flag = true
					item.count += parseInt(goodsinfo.count)
					return true
				}
			})

			//如果最终循环完毕，得到的flag还是false，则把商品直接push到购物车中
			if(!flag){
				state.car.push(goodsinfo)
			}
			localStorage.setItem('car',JSON.stringify(state.car))
		}
	},
```

```js
getters:{ //this.$store.getters.方法名称
			getCount:function(state){
				var c = 0;
				state.car.forEach(item => {
					c += item.count
				});
				return c
			},
			getGoodsCount:function(state){
				var s = {};
				state.car.forEach(item => {
					s[item.id] = item.count
				})
				return s
			}
	}	
```









