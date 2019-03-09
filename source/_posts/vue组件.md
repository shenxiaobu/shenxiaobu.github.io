---
title: vue组件
date: 2019-03-08 13:32:54
categories: 日常笔记
tags: 
	- vue	
	- 小程序
---

### vue组件

```
注意： 代码风格，由于html标签都是单个单词的标签，为了更好的区分组件与标签，组件名应该使用两个单词的组成，如:
goods_list
```

vue组件的第一种用法

```html
   //组件的引用
<div id="app">
    <!-- 如果要使用组件，直接，把组件的名称，以 HTML 标签的形式，引入到页面中，即可 -->
    <my-com1></my-com1>
 </div>
    
<script>
  // 1.1 使用 Vue.extend 来创建全局的Vue组件
    // var com1 = Vue.extend({
    //   template: '<h3>这是使用 Vue.extend 创建的组件</h3>' // 通过 template 属性，指定了组件要展示的HTML结构
    // })
    // 1.2 使用 Vue.component('组件的名称', 创建出来的组件模板对象)
    // Vue.component('myCom1', com1)
    // 如果使用 Vue.component 定义全局组件的时候，组件名称使用了 驼峰命名，则在引用组件的时候，需要把 大写的驼峰改为小写的字母，同时，两个单词之前，使用 - 链接；
    // 如果不使用驼峰,则直接拿名称来使用即可;
    // Vue.component('myCom1', com1)

    // Vue.component 第一个参数:组件的名称,将来在引用组件的时候,就是一个 标签形式 来引入 它的
    // 第二个参数: Vue.extend 创建的组件  ,其中 template 就是组件将来要展示的HTML内容
    Vue.component('myCom1', Vue.extend({
      template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
    }))
     
  // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
</script>
```

### vue组件的第二种创建方式

```html
  //组件的引用
<div id="app">
    <!-- 如果要使用组件，直接，把组件的名称，以 HTML 标签的形式，引入到页面中，即可 -->
    <my-com2></my-com2>
 </div>
   
 <script>
    //直接使用vue.component()创建
 // 注意:不论是哪种方式创建出来的组件,组件的 template 属性指向的模板内容,必须有且只能有唯一的一个根元素
    Vue.component('myCom2', {
      template: '<div>
      <h3>这是直接使用 Vue.component 创建出来的组件</h3>		<span>123</span>
      </div>'
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
</script>
```

vue组件的第三种创建方式

```html
  <div id="app">
    <my-com3></my-com3>
  </div>
  
   <!-- 在 被控制的 #app 外面,使用 template 元素,定义组件的HTML模板结构  -->
  <template id="tmpl">
    <div>
      <h1>这是通过 template 元素,在外部定义的组件结构,这个方式,有代码的只能提示和高亮</h1>
      <h4>好用,不错!</h4>
    </div>
  </template>
  
  <script>
    Vue.component('myCom3', {
      template: '#tmpl'
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });

  </script>
```

#### 私有组件

```html
  <div id="app1">
      //无法访问app2的私有组件login-box
    <login-box></login-box>
  </div>
  <div id="app2">
    <login-box></login-box>
  </div>
  <template id="tmpl2">
    <h1>这是私有的 login 组件</h1>
  </template>
  <script>
   var vm1 = new Vue({
      el: '#app1',
      data: {},
      methods: {},
      filters: {},
      directives: {},
   });
    var vm2 = new Vue({
      el: '#app2',
      data: {},
      methods: {},
      filters: {},
      directives: {},
      components: { // 定义实例内部私有组件的
        loginBox: {
          template: '#tmpl2'
        }
      }
  </script>
```

```
注意：私有的属性，是components，单词后面要加一个s，因为私有的组件可以定义多个组件。
定义全局的组件，一次定义一个，所以是
vue.component(组件名，{template：组件内容})
没有加s （个人理解）
```



#### 组件中的data和methods

代码风格注意事项先来一波

```js
*组件的 data 必须是一个函数。
当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
当 data 的值是一个对象时，它会在这个组件的所有实例之间共享。想象一下，假如一个 TodoList 组件的数据是这样的：

data: {
  listTitle: '',
  todos: []
}
我们可能希望重用这个组件，允许用户维护多个列表 (比如分为购物、心愿单、日常事务等)。这时就会产生问题。因为每个组件的实例都引用了相同的数据对象，更改其中一个列表的标题就会改变其它每一个列表的标题。增删改一个待办事项的时候也是如此。

取而代之的是，我们希望每个组件实例都管理其自己的数据。为了做到这一点，每个实例必须生成一个独立的数据对象。在 JavaScript 中，在一个函数中返回这个对象就可以了：

data: function () {
  return {
    listTitle: '',
    todos: []
  }
}
反例
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})
export default {
  data: {
    foo: 'bar'
  }
}
好例子
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data: {
    foo: 'bar'
  }
})
```

[参考vue官网代码风格](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E6%95%B0%E6%8D%AE-%E5%BF%85%E8%A6%81)

```html
组件中的data
  <div id="app">
    <my-com1></my-com1>
  </div>
  
  <script>
    // 1. 组件可以有自己的 data 数据
    // 2. 组件的 data 和 实例的 data 有点不一样,实例中的 data 可以为一个对象,但是 组件中的 data 必须是一个方法
    // 3. 组件中的 data 除了必须为一个方法之外,这个方法内部,还必须返回一个对象才行;
    // 4. 组件中 的data 数据,使用方式,和实例中的 data 使用方式完全一样!!!
    Vue.component('myCom1', {
      template: '<h1>这是全局组件 --- {{msg}}</h1>',
      data: function () {
        return {
          msg: '这是组件的中data定义的数据'
        }
      }
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
  </script>
```

```html
组件中的methods
 <div id="app">
    <my-counter></my-counter>
    <hr>
    <my-counter></my-counter>
    <hr>
    <my-counter></my-counter>
  </div>
  
    <template id="tmpl">
    <div>
      <input type="button" value="+1" @click="increment">
      <h3>{{count}}</h3>
    </div>
  </template>
  
  <script>
    var dataObj = { count: 0 }

    // 这是一个计数器的组件, 身上有个按钮,每当点击按钮,让 data 中的 count 值 +1
    Vue.component('myCounter', {
      template: '#tmpl',
      data: function () {
        // return dataObj  如果采用这个，则导致每个组件的count数据共享，都是一样的值
        return { count: 0 }
      },
      methods: {
        increment() {
          this.count++
        }
      }
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
  </script>

```

#### 组件切换方式1

```html
<div id="app">
    <a href="" @click.prevent="flag=true">登录</a>
    <a href="" @click.prevent="flag=false">注册</a>
    <login-box v-if="flag"></login-box>
    <register-box v-else="flag"></register-box>
 </div>
<script>
    vue.component('loginBox',{
        template: '<h3>登陆组件</h3>'
    })
    vue.component('registerBox',{
        template: '<h3>注册组件</h3>'
    })
    var vm = new vue({
        el: #app,
        data:{
        flag: false
    	},
       	methods:{}                   
    })
</script>
  
```

组件切换方式2

```html
<div id="app">
    <a href="" @click.prevent="comName='login-box'">登录</a>
    <a href="" @click.prevent="comName='register-box'">注册</a>

    <!-- Vue提供了 component ,来展示对应名称的组件 -->
    <!-- component 是一个占位符, :is 属性,可以用来指定要展示的组件的名称 -->
    <component :is="comName"></component>

    <!-- 总结:当前学习了几个 Vue 提供的标签了??? -->
    <!-- component,  template,  transition,  transitionGroup  -->

  </div>

<script>
    // 组件名称是 字符串
    Vue.component('loginBox', {
      template: '<h3>登录组件</h3>'
    })

    Vue.component('registerBox', {
      template: '<h3>注册组件</h3>'
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        comName: 'login-box' // 当前 component 中的 :is 绑定的组件的名称
      },
      methods: {}
    });
  </script>
```

组件切换动画

```html
 <style>
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }
  </style>

<div id="app">
    <a href="" @click.prevent="comName='login-box'">登录</a>
    <a href="" @click.prevent="comName='register-box'">注册</a>

    <!-- 通过 mode 属性,设置组件切换时候的 模式 -->
    <transition mode="out-in">
      <component :is="comName"></component>
    </transition>

  </div>

<script>
    // 组件名称是 字符串
    Vue.component('loginBox', {
      template: '<h3>登录组件</h3>'
    })

    Vue.component('registerBox', {
      template: '<h3>注册组件</h3>'
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        comName: 'login-box' // 当前 component 中的 :is 绑定的组件的名称
      },
      methods: {}
    });
  </script>
```

vue父组件向子组件传值

```html
<div id="app">
    <!-- 父组件，可以在引用子组件的时候， 通过 属性绑定（v-bind:） 的形式, 把 需要传递给 子组件的数据，以属性绑定的形式，传递到子组件内部，供子组件使用 -->
    <my-com v-bind:parentmsg="msg"></my-com>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '123 啊-父组件中的数据'
      },
      methods: {},

      components: {
        // 结论：经过演示，发现，子组件中，默认无法访问到 父组件中的 data 上的数据 和 methods 中的方法
        myCom: {
          data() { // 注意： 子组件中的 data 数据，并不是通过 父组件传递过来的，而是子组件自身私有的，比如： 子组件通过 Ajax ，请求回来的数据，都可以放到 data 身上；
            // data 上的数据，都是可读可写的；
            return {
              title: '123',
              content: 'qqq'
            }
          },
          template: '<h1 @click="change">这是组件定义的属性，可以用来传值{{ parentmsg }}--这是组件中自己的title：{{title}}，这是组件中自己的content:{{content}}</h1>',
          // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
          // props 中的数据，都是只读的，无法重新赋值
          props: ['parentmsg'], // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
          directives: {},
          filters: {},
          components: {},
          methods: {
            change() {
              this.parentmsg = '组件的方法被触发了'
            }
          }
        }
      }
    });
  </script>
```

微信小程序父组件设置组件内部属性的值与方法

1. 创建一个名为components目录专门用来存放组件
2. 在components目录下新建一个组件名的目录，如Dialog
3. 在组件目录下新建component将会创建出四个文件

如图所示

![1552030142489](1552030142489.png)

```html
dialog.js 文件
// components/Dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value: ""
    },
    content:{
      type: String,
      value: ""
    },
    cancelText:{
      type: String,
      value: ""
    },
    confirmText:{
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDialog:function(){
      this.setData({
        isShow:!this.data.isShow
      })
    },
    hideDialog: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    _cancelEvent:function(){
      this.triggerEvent("cancelEvent")  //点击取消触发cancelEvent事件
    },
    _confirmEvent: function () {
      this.triggerEvent("confirmEvent")  //点击确定触发confirmEvent事件
    }
  }
})


dialog.json文件
{
  "component": true,        //一定要设置为true
  "usingComponents": {}     //用到别的组的话，这里引用
}


dialog.xml文件
<view class="wx_dialog_container" hidden="{{!isShow}}">
  <view class="wx_mask"></view>
  <view class="wx_dialog">
    <view class="wx_dialog_title">{{title}}</view>
    <view class="wx_dialog_content">{{content}}</view>
    <view class="wx_dialog_footer">
      <view class="wx_dialog_btn"
        catchtap='_cancelEvent'
      >{{cancelText}}</view>
      <view class="wx_dialog_btn" 
      catchtap='_confirmEvent'
      >{{confirmText}}</view>
    </view>
  </view>
</view>


dialog.wxss文件
/* components/Dialog/dialog.wxss */
.wx_mask{
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.3);
}
.wx_dialog{
  position:fixed;
  z-index: 5000;
  width: 80%;
  max-width: 600rpx;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  background-color: #fff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}
.wx_dialog_title{
  font-size: 18px;
  padding: 15px 15px 5px;
}
.wx_dialog_content{
  padding: 15px 15px 5px;
  min-height: 40px;
  font-size: 16px;
  line-height: 1.3;
  word-wrap: break-word;
  word-break: break-all;
  color: #999999;
}
.wx_dialog_footer{
  display: flex;
  align-items: center;
  position: relative;
  line-height: 45px;
  font-size: 17px;
}
.wx_dialog_footer::before{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height:1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0 ;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  }
  .wx_dialog_btn{
    display: block;
    -webkit-flex: 1;
    flex: 1;
    -webkit-tab-highlight-color: rgba(0,0,0,0);
    position: relative;
  }
  .wx_dialog_footer .wx_dialog_btn:nth-of-type(1){
    color: #353535;
  }
  .wx_dialog_footer .wx_dialog_btn:nth-of-type(2){
    color: #3cc51f;
  }
 .wx_dialog_footer .wx_dialog_btn:nth-of-type(2):after{
   content: '';
   position: absolute;
   left: 0;
   top: 0;
   width: 1px;
   bottom: 0;
   border-left: 1px solid #d5d5d6;
   color: #d5d5d6;
   -webkit-transform-origin: 0 0 ;
   transform-origin: 0 0;
   -webkit-transform:  scaleX(0.5);
   transform: scaleX(0.5);    /*解决物理像素问题*/
  }


```

这样组件部分就完成了，就差引用组件了

比如index页面需要引用上面的 dialog组件

1.  找到index.json文件  设置属性

2. 到index.wxml文件  在需要引用的地方 使用组件并设置属性和方法
3. 在index.js文件中 对组件方法做逻辑处理

```html
index.json文件
{
  "usingComponents": {
    "dialog":"/components/Dialog/dialog"
  }
}

index.wxml文件
  <dialog id="dialog"
    title="提示"
    content="对方感觉你不帅，并递给你一张通往韩国的机票"
    cancelText="取消"
    confirmText='确定'
    bind:cancelEvent="cancel"
    bind:confirmEvent="confirm"
  ></dialog>
  <button  type="primary" bindtap='showDialog'>ClickMe</button>

index.js文件
  onReady:function(){
    this.dialog = this.selectComponent("#dialog");   //获取dialog组件对象，就可以调用组件的方法
  },
  confirm:function(){
    console.log("点击了确定");
    this.dialog.hideDialog();
  },
  cancel: function () {
    console.log("点击了不好");
    this.dialog.hideDialog();
  },
  showDialog:function(){
    this.dialog.showDialog();
  },
```

这样小程序的dialog组件就完成了

效果如下

![1552031442273](1552031442273.png)

vue组件父组件获取子组件数据的方法同小程序

```html
<div id="app">
    <!-- 父组件向子组件 传递 方法，使用的是 事件绑定机制； v-on, 当我们自定义了 一个 事件属性之后，那么，子组件就能够，通过某些方式，来调用 传递进去的 这个 方法了 -->
    <my-com2 @func="show"></my-com2>
	{{datamsgFormSon.name}}-------{{datamsgFormSon.age}}
  </div>

  <template id="tmpl">
    <div>
      <h1>这是 子组件</h1>
      <input type="button" value="这是子组件中的按钮 - 点击它，触发 父组件传递过来的 func 方法" @click="myclick">
    </div>
  </template>

  <script>

    // 定义了一个字面量类型的 组件模板对象
    var myCom2 = {
      template: '#tmpl', // 通过指定了一个 Id, 表示 说，要去加载 这个指定Id的 template 元素中的内容，当作 组件的HTML结构
      data() {
        return {
          sonmsg: { name: '大头儿子', age: 6 }
        }
      },
	
      methods: {
        myclick() {
          // 当点击子组件的按钮的时候，如何 拿到 父组件传递过来的 func 方法，并调用这个方法？？？
          //  emit 英文原意： 是触发，调用、发射的意思
          // this.$emit('func123', 123, 456)
          this.$emit('func', this.sonmsg)   //触发func函数并传递this.sonmsg这个数据过去
        }
      }
    }


    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        datamsgFormSon: { name: '小头爸爸', age: 26 }
      },
      methods: {
        show(data) {
          // console.log('调用了父组件身上的 show 方法: --- ' + data)
          // console.log(data);
          this.datamsgFormSon = data
        }
      },

      components: {
        myCom2
        // myCom2: myCom2   一样的时候可以写成上面那样
      }
    });
  </script>
```

#### 组件案例 评论列表

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <link rel="stylesheet" href="./lib/bootstrap-3.3.7.css">
</head>

<body>
  <div id="app">


    <cmt-box @func="loadComments"></cmt-box>


    <ul class="list-group">
      <li class="list-group-item" v-for="item in list" :key="item.id">
        <span class="badge">评论人： {{ item.user }}</span>
        {{ item.content }}
      </li>
    </ul>


  </div>


  <template id="tmpl">
    <div>

      <div class="form-group">
        <label>评论人：</label>
        <input type="text" class="form-control" v-model="user">
      </div>

      <div class="form-group">
        <label>评论内容：</label>
        <textarea class="form-control" v-model="content"></textarea>
      </div>

      <div class="form-group">
        <input type="button" value="发表评论" class="btn btn-primary" @click="postComment">
      </div>

    </div>
  </template>

  <script>

    var commentBox = {
      data() {
        return {
          user: '',
          content: ''
        }
      },
      template: '#tmpl',
      methods: {
        postComment() { 
 		//定义一个变量存储数据
          var comment = { id: Date.now(), user: this.user, content: this.content }
		//清空界面的数据
          this.user = '';
		  this.content = '';
			//上传数据给父组件
          this.$emit('func',comment)
		  
        }
      }
    }

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        list: [
          { id: 1, user: '李白', content: '天生我材必有用' },
          { id: 2, user: '江小白', content: '劝君更尽一杯酒' },
          { id: 3, user: '小马', content: '我姓马， 风吹草低见牛羊的马' }
        ]
      },
      beforeCreate(){ // 注意：这里不能调用 loadComments 方法，因为在执行这个钩子函数的时候，data 和 methods 都还没有被初始化好

      },
      created(){
          //第一次加载，自动调用这个方法，将数据缓存到浏览器
        this.loadComments('')
      },
      methods: {
	  
	
        loadComments(data) {
	
				/*
			如果有缓存，获取缓存的数据，如果没有缓存获取服务器的数据
			
		*/
		  this.list = JSON.parse(localStorage.getItem('cmts')） || this.list;

			if((data!='')&&(data.content!='')&&(data.user!='')){
				this.list.unshift(data);
			}else{
				console.log("数据为空");
			}
			
			localStorage.setItem('cmts',JSON.stringify(this.list))
			
		}
		
      },
      components: {
        'cmt-box': commentBox
      }
    });
  </script>
</body>

</html>
```

#### 通过 ref 属性获取DOM元素和组件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
</head>

<body>
  <div id="app">
    <input type="button" value="获取元素" @click="getElement" ref="mybtn">

    <h3 id="myh3" ref="myh3">哈哈哈， 今天天气太好了！！！</h3>

    <hr>

    <login ref="mylogin"></login>
  </div>

  <script>

    var login = {
      template: '<h1>登录组件</h1>',
      data() {
        return {
          msg: 'son msg'
        }
      },
      methods: {
        show() {
          console.log('调用了子组件的方法')
        }
      }
    }

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {
        getElement() {
           console.log(document.getElementById('myh3').innerText)

          //  ref  是 英文单词 【reference】   值类型 和 引用类型  referenceError
           console.log(this.$refs.myh3.innerText)

           console.log(this.$refs.mylogin.msg)
           this.$refs.mylogin.show()
        }
      },
      components: {
        login
      }
    });
  </script>
</body>

</html>
```

点击显示如下

![1552041157599](1552041157599.png)

