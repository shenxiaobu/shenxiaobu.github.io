---
title: vue
date: 2019-03-04 14:14:37
categories: "前端纪录"
tags: 
     - vue
     - 前端
---

## vue笔记

vue的基本代码

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <!-- 1. 导入Vue的包 -->
  <script src="./lib/vue-2.4.0.js"></script>
</head>

<body>
  <!-- 将来 new 的Vue实例，会控制这个 元素中的所有内容 -->
  <!-- Vue 实例所控制的这个元素区域，就是我们的 V  -->
  <div id="app">
    <p>{{ msg }}</p>
  </div>

  <script>
    // 2. 创建一个Vue的实例
    // 当我们导入包之后，在浏览器的内存中，就多了一个 Vue 构造函数
    //  注意：我们 new 出来的这个 vm 对象，就是我们 MVVM中的 VM调度者
    var vm = new Vue({
      el: '#app',  // 表示，当前我们 new 的这个 Vue 实例，要控制页面上的哪个区域
      // 这里的 data 就是 MVVM中的 M，专门用来保存 每个页面的数据的
      data: { // data 属性中，存放的是 el 中要用到的数据
        msg: '欢迎学习Vue' // 通过 Vue 提供的指令，很方便的就能把数据渲染到页面上，程序员不再手动操作DOM元素了【前端的Vue之类的框架，不提倡我们去手动操作DOM元素了】
      }
    })
  </script>
</body>
</html>
```

vue v-cloak 的学习

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    [v-cloak] {
      /* display: none; */
    }
  </style>
</head>

<body>
  <div id="app">
    <!-- 使用 v-cloak 能够解决 插值表达式闪烁的问题 -->
    <p v-cloak>++++++++ {{ msg }} ----------</p>
    <h4 v-text="msg">==================</h4>
    <!-- 默认 v-text 是没有闪烁问题的 -->
    <!-- v-text会覆盖元素中原本的内容，但是 插值表达式  只会替换自己的这个占位符，不会把 整个元素的内容清空 -->

    <div>{{msg2}}</div>
    <div v-text="msg2"></div>
    <div v-html="msg2">1212112</div>

    <!-- v-bind: 是 Vue中，提供的用于绑定属性的指令 -->
    <!-- <input type="button" value="按钮" v-bind:title="mytitle + '123'"> -->
    <!-- 注意： v-bind: 指令可以被简写为 :要绑定的属性 -->
    <!-- v-bind 中，可以写合法的JS表达式 -->

    <!-- Vue 中提供了 v-on: 事件绑定机制 -->
    <!-- <input type="button" value="按钮" :title="mytitle + '123'" v-on:click="alert('hello')"> -->


    <input type="button" value="按钮" @click="show">
  </div>


  <script src="./lib/vue-2.4.0.js"></script>

  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '123',
        msg2: '<h1>哈哈，我是一个大大的H1， 我大，我骄傲</h1>',
        mytitle: '这是一个自己定义的title'
      },
      methods: { // 这个 methods属性中定义了当前Vue实例所有可用的方法
        show: function () {
          alert('Hello')
        }
      }
    })
    /* document.getElementById('btn').onclick = function(){
      alert('Hello')
    } */
  </script>
</body>

</html>
```

```vue

<!-- 1. 如何定义一个基本的Vue代码结构 -->
<!-- 2. 插值表达式 和  v-text   -->
<!-- 3. v-cloak -->
<!-- 4. v-html -->
<!-- 5. v-bind   Vue提供的属性绑定机制   缩写是 : -->
<!-- 6. v-on     Vue提供的事件绑定机制   缩写是 @ -->
```

vue利用js字符串的substring()截取字符串实现文字跑马灯效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <!-- 1. 导入Vue包 -->
  <script src="./lib/vue-2.4.0.js"></script>
</head>

<body>
  <!-- 2. 创建一个要控制的区域 -->
  <div id="app">
    <input type="button" value="浪起来" @click="lang">
    <input type="button" value="低调" @click="stop">

    <h4>{{ msg }}</h4>

  </div>

  <script>
    // 注意：在 VM实例中，如果想要获取 data 上的数据，或者 想要调用 methods 中的 方法，必须通过 this.数据属性名  或  this.方法名 来进行访问，这里的this，就表示 我们 new 出来的  VM 实例对象
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '猥琐发育，别浪~~！',
        intervalId: null // 在data上定义 定时器Id
      },
      methods: {
        lang() {
          // console.log(this.msg)
          // 获取到头的第一个字符
          // this

          if (this.intervalId != null) return;

          this.intervalId = setInterval(() => {
            var start = this.msg.substring(0, 1)
            // 获取到 后面的所有字符
            var end = this.msg.substring(1)
            // 重新拼接得到新的字符串，并赋值给 this.msg
            this.msg = end + start
          }, 400)

          // 注意： VM实例，会监听自己身上 data 中所有数据的改变，只要数据一发生变化，就会自动把 最新的数据，从data 上同步到页面中去；【好处：程序员只需要关心数据，不需要考虑如何重新渲染DOM页面】
        },
        stop() { // 停止定时器
          clearInterval(this.intervalId)
          // 每当清除了定时器之后，需要重新把 intervalId 置为 null
          this.intervalId = null;
        }
      }
    })


    // 分析：
    // 1. 给 【浪起来】 按钮，绑定一个点击事件   v-on   @
    // 2. 在按钮的事件处理函数中，写相关的业务逻辑代码：拿到 msg 字符串，然后 调用 字符串的 substring 来进行字符串的截取操作，把 第一个字符截取出来，放到最后一个位置即可；
    // 3. 为了实现点击下按钮，自动截取的功能，需要把 2 步骤中的代码，放到一个定时器中去；
  </script>
</body>

</html>
```

vue 里面事件修饰符那些事

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <style>
    .inner {
      height: 150px;
      background-color: darkcyan;
    }

    .outer {
      padding: 40px;
      background-color: red;
    }
  </style>
</head>

<body>
  <div id="app">

    <!-- 使用  .stop  阻止冒泡 -->
    <div class="inner" @click="div1Handler">
      <input type="button" value="戳他" @click.stop="btnHandler">
    </div> 

    <!-- 使用 .prevent 阻止默认行为 -->
    <a href="http://www.baidu.com" @click.prevent="linkClick">有问题，先去百度</a>

    <!-- 使用  .capture 实现捕获触发事件的机制 -->
    <div class="inner" @click.capture="div1Handler">
      <input type="button" value="戳他" @click="btnHandler">
    </div> 

    <!-- 使用 .self 实现只有点击当前元素时候，才会触发事件处理函数 -->
    <!-- <div class="inner" @click="div1Handler">
      <input type="button" value="戳他" @click="btnHandler">
    </div> -->

    <!-- 使用 .once 只触发一次事件处理函数 -->
    <!-- <a href="http://www.baidu.com" @click.prevent.once="linkClick">有问题，先去百度</a> -->


    <!-- 演示： .stop 和 .self 的区别 -->
    <!-- <div class="outer" @click="div2Handler">
      <div class="inner" @click="div1Handler">
        <input type="button" value="戳他" @click.stop="btnHandler">
      </div>
    </div> -->

    <!-- .self 只会阻止自己身上冒泡行为的触发，并不会真正阻止 冒泡的行为 -->
    <div class="outer" @click="div2Handler">
      <div class="inner" @click.self="div1Handler">
        <input type="button" value="戳他" @click="btnHandler">
      </div>
    </div> 

  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {
        div1Handler() {
          console.log('这是触发了 inner div 的点击事件')
        },
        btnHandler() {
          console.log('这是触发了 btn 按钮 的点击事件')
        },
        linkClick() {
          console.log('触发了连接的点击事件')
        },
        div2Handler() {
          console.log('这是触发了 outer div 的点击事件')
        }
      }
    });
  </script>
</body>

</html>
```

```html
<!-- 使用  .stop  阻止冒泡 -->
<!-- 使用 .prevent 阻止默认行为 -->
<!-- 使用  .capture 实现捕获触发事件的机制 -->
<!-- 使用 .self 实现只有点击当前元素时候，才会触发事件处理函数 -->
<!-- 使用 .once 只触发一次事件处理函数 -->
<!-- 演示： .stop 和 .self 的区别 -->
<!-- .self 只会阻止自己身上冒泡行为的触发，并不会真正阻止 冒泡的行为 -->
```

vue  v-model指令的学习

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
    <h4>{{ msg }}</h4>

    <!-- v-bind 只能实现数据的单向绑定，从 M 自动绑定到 V， 无法实现数据的双向绑定  -->
    <!-- <input type="text" v-bind:value="msg" style="width:100%;"> -->

    <!-- 使用  v-model 指令，可以实现 表单元素和 Model 中数据的双向数据绑定 -->
    <!-- 注意： v-model 只能运用在 表单元素中 -->
    <!-- input(radio, text, address, email....)   select    checkbox   textarea   -->
    <input type="text" style="width:100%;" v-model="msg">
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '大家都是好学生，爱敲代码，爱学习，爱思考，简直是完美，没瑕疵！'
      },
      methods: {
      }
    });
  </script>
</body>

</html>
```

```html
<!-- v-bind 只能实现数据的单向绑定，从 M 自动绑定到 V， 无法实现数据的双向绑定  -->
    <!-- <input type="text" v-bind:value="msg" style="width:100%;"> -->

    <!-- 使用  v-model 指令，可以实现 表单元素和 Model 中数据的双向数据绑定 -->
    <!-- 注意： v-model 只能运用在 表单元素中 -->
    <!-- input(radio, text, address, email....)   select    checkbox   textarea   -->
```

vue 实现简单的计算器

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
    <input type="text" v-model="n1">

    <select v-model="opt">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>

    <input type="text" v-model="n2">

    <input type="button" value="=" @click="calc">

    <input type="text" v-model="result">
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        n1: 0,
        n2: 0,
        result: 0,
        opt: '+'
      },
      methods: {
        calc() { // 计算器算数的方法  
          // 逻辑：
          /* switch (this.opt) {
            case '+':
              this.result = parseInt(this.n1) + parseInt(this.n2)
              break;
            case '-':
              this.result = parseInt(this.n1) - parseInt(this.n2)
              break;
            case '*':
              this.result = parseInt(this.n1) * parseInt(this.n2)
              break;
            case '/':
              this.result = parseInt(this.n1) / parseInt(this.n2)
              break;
          } */

          // 注意：这是投机取巧的方式，正式开发中，尽量少用
          var codeStr = 'parseInt(this.n1) ' + this.opt + ' parseInt(this.n2)'
          this.result = eval(codeStr)
        }
      }
    });
  </script>
</body>

</html>
```

vue中的样式 - class

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <style>
    .red {
      color: red;
    }

    .thin {
      font-weight: 200;
    }

    .italic {
      font-style: italic;
    }

    .active {
      letter-spacing: 0.5em;
    }
  </style>
</head>

<body>
  <div id="app">
    <!-- <h1 class="red thin">这是一个很大很大的H1，大到你无法想象！！！</h1> -->

    <!-- 第一种使用方式，直接传递一个数组，注意： 这里的 class 需要使用  v-bind 做数据绑定 -->
    <!-- <h1 :class="['thin', 'italic']">这是一个很大很大的H1，大到你无法想象！！！</h1> -->

    <!-- 在数组中使用三元表达式 -->
    <!-- <h1 :class="['thin', 'italic', flag?'active':'']">这是一个很大很大的H1，大到你无法想象！！！</h1> -->

    <!-- 在数组中使用 对象来代替三元表达式，提高代码的可读性 -->
    <!-- <h1 :class="['thin', 'italic', {'active':flag} ]">这是一个很大很大的H1，大到你无法想象！！！</h1> -->

    <!-- 在为 class 使用 v-bind 绑定 对象的时候，对象的属性是类名，由于 对象的属性可带引号，也可不带引号，所以 这里我没写引号；  属性的值 是一个标识符 -->
    <h1 :class="classObj">这是一个很大很大的H1，大到你无法想象！！！</h1>


  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        flag: true,
        classObj: { red: true, thin: true, italic: false, active: false }
      },
      methods: {}
    });
  </script>
</body>

</html>
```

vue中的样式 - style

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
    <!-- 对象就是无序键值对的集合 -->
    <!-- <h1 :style="styleObj1">这是一个h1</h1> -->

    <h1 :style="[ styleObj1, styleObj2 ]">这是一个h1</h1>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        styleObj1: { color: 'red', 'font-weight': 200 },
        styleObj2: { 'font-style': 'italic' }
      },
      methods: {}
    });
  </script>
</body>

</html>
```

v-for循环普通数组

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
    <!-- <p>{{list[0]}}</p>
    <p>{{list[1]}}</p>
    <p>{{list[2]}}</p>
    <p>{{list[3]}}</p>
    <p>{{list[4]}}</p> -->

    <p v-for="(item, i) in list">索引值：{{i}} --- 每一项：{{item}}</p>

  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        list: [1, 2, 3, 4, 5, 6]
      },
      methods: {}
    });
  </script>
</body>

</html>
```

显示如下：

```
索引值：0 --- 每一项：1

索引值：1 --- 每一项：2

索引值：2 --- 每一项：3

索引值：3 --- 每一项：4

索引值：4 --- 每一项：5

索引值：5 --- 每一项：6
```



v-for循环对象数组

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
    <p v-for="(user, i) in list">Id：{{ user.id }} --- 名字：{{ user.name }} --- 索引：{{i}}</p>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        list: [
          { id: 1, name: 'zs1' },
          { id: 2, name: 'zs2' },
          { id: 3, name: 'zs3' },
          { id: 4, name: 'zs4' }
        ]
      },
      methods: {}
    });
  </script>
</body>

</html>
```

显示如下

```
Id：1 --- 名字：zs1 --- 索引：0

Id：2 --- 名字：zs2 --- 索引：1

Id：3 --- 名字：zs3 --- 索引：2

Id：4 --- 名字：zs4 --- 索引：3
```



v-for 循环对象

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
    <!-- 注意：在遍历对象身上的键值对的时候， 除了 有  val  key  ,在第三个位置还有 一个 索引  -->
    <p v-for="(val, key, i) in user">值是： {{ val }} --- 键是： {{key}} -- 索引： {{i}}</p>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        user: {
          id: 1,
          name: '托尼·屎大颗',
          gender: '男'
        }
      },
      methods: {}
    });
  </script>
</body>

</html>

```

显示如下：

```
值是： 1 --- 键是： id -- 索引： 0

值是： 托尼·屎大颗 --- 键是： name -- 索引： 1

值是： 男 --- 键是： gender -- 索引： 2
```

v-for 迭代数字

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
    <!-- in 后面我们放过  普通数组，对象数组，对象， 还可以放数字 -->
    <!-- 注意：如果使用 v-for 迭代数字的话，前面的 count 值从 1 开始 -->
    <p v-for="count in 6">这是第 {{ count }} 次循环</p>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {}
    });
  </script>
</body>

</html>
```

显示如下

```
这是第 1 次循环

这是第 2 次循环

这是第 3 次循环

这是第 4 次循环

这是第 5 次循环

这是第 6 次循环
```

v-for循环中key属性的使用

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

    <div>
      <label>Id:
        <input type="text" v-model="id">
      </label>

      <label>Name:
        <input type="text" v-model="name">
      </label>

      <input type="button" value="添加" @click="add">
    </div>

    <!-- 注意： v-for 循环的时候，key 属性只能使用 number获取string -->
    <!-- 注意： key 在使用的时候，必须使用 v-bind 属性绑定的形式，指定 key 的值 -->
    <!-- 在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果 v-for 有问题，必须 在使用 v-for 的同时，指定 唯一的 字符串/数字 类型 :key 值 -->
    <p v-for="item in list" :key="item.id">
      <input type="checkbox">{{item.id}} --- {{item.name}}
    </p>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        id: '',
        name: '',
        list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '嬴政' },
          { id: 3, name: '赵高' },
          { id: 4, name: '韩非' },
          { id: 5, name: '荀子' }
        ]
      },
      methods: {
        add() { // 添加方法
          this.list.unshift({ id: this.id, name: this.name })
        }
      }
    });
  </script>
</body>

</html>
```

显示效果如下

![1551800766565](C:\Users\xiaobu\AppData\Roaming\Typora\typora-user-images\1551800766565.png)

v-if和v-show的使用

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

    <!-- <input type="button" value="toggle" @click="toggle"> -->
    <input type="button" value="toggle" @click="flag=!flag">

    <!-- v-if 的特点：每次都会重新删除或创建元素 -->
    <!-- v-show 的特点： 每次不会重新进行DOM的删除和创建操作，只是切换了元素的 display:none 样式 -->

    <!-- v-if 有较高的切换性能消耗 -->
    <!-- v-show 有较高的初始渲染消耗 -->

    <!-- 如果元素涉及到频繁的切换，最好不要使用 v-if, 而是推荐使用 v-show -->
    <!-- 如果元素可能永远也不会被显示出来被用户看到，则推荐使用 v-if -->
    <h3 v-if="flag">这是用v-if控制的元素</h3>
    <h3 v-show="flag">这是用v-show控制的元素</h3>

  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        flag: false
      },
      methods: {
        /* toggle() {
          this.flag = !this.flag
        } */
      }
    });
  </script>
</body>

</html>
```

```html
<!-- 1. MVC 和 MVVM 的区别 -->

<!-- 2. 学习了Vue中最基本代码的结构 -->

<!-- 3. 插值表达式   v-cloak   v-text   v-html   v-bind（缩写是:）   v-on（缩写是@）   v-model   v-for   v-if     v-show -->

<!-- 4. 事件修饰符  ：  .stop   .prevent   .capture   .self     .once -->

<!-- 5. el  指定要控制的区域    data 是个对象，指定了控制的区域内要用到的数据    methods 虽然带个s后缀，但是是个对象，这里可以自定义了方法 -->

<!-- 6. 在 VM 实例中，如果要访问 data 上的数据，或者要访问 methods 中的方法， 必须带 this -->

<!-- 7. 在 v-for 要会使用 key 属性 （只接受 string / number） -->

<!-- 8. v-model 只能应用于表单元素 -->

<!-- 9. 在vue中绑定样式两种方式  v-bind:class   v-bind:style -->
```

![](G:\前端\vuejs深入浅出资料\day1\笔记\01.MVC和MVVM的关系图解.png)

