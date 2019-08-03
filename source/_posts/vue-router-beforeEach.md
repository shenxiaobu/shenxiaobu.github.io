---
title: vue.router.beforeEach
date: 2019-08-03 08:11:08
tags:
	- vue
---

# vue router.beforeEach()，详解

router.beforeEach（）一般用来做一些进入页面的限制。比如没有登录，就不能进入某些页面，只有登录了之后才有权限查看某些页面。。。说白了就是路由拦截。

## 第一步 规定进入路由需不需要权限

```js
 @/router/index.js
 import A from '@/components/a'
{
     path: '/a',
     name: 'a',
     component:	A,
     meta : {                      //加一个自定义obj
   			requireAuth:true      //这个参数 true 代表需要登录才能进入A
     }
   },

```

## 第二步 使用vuex整一个userId

```js
@/assets/store.js
//使用vuex三步走
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//这个理论来说
const store = new Vuex.Store({
	state:{
		userId : ''
	}
})

export default store

```

## 第三步 使用router.beforeEach()

```js
@/main.js
思路：【
	如果（即将进入的这个路由需要权限才能进入）{
	
		如果(能获取到这个老哥的userID){
			就让这个老哥进入这个路由
		}否则{
			就让这个老哥进入b这个页面
		}
		
	} 即将进入的路由不需要权限就能进入 {
	
		就让这个老哥进入这个路由
		
	}
】
对应代码：
import store from '@/assets/store'   //把这个userId获取过来
router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(store.state.userId){
			next()
		}else{
			next({path:'/b'})
		}
	}else{
		next()
	}
})

```

## 第四步

第三步这个/b路由其实就是登陆页面，
当进入A页面之前，需要请求接口，获取一下是否有登陆过，然后把这个userId存在vuex的state里。
当没有userId时，则在登陆之后，存一个userId到state里。然后就敲完收工