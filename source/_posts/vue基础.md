---
title: vue基础
date: 2019-03-06 12:17:19
categories: "日常笔记"
tags: 
	- vue
---

### vue基础

![](01.MVC和MVVM的关系图解.png)

![](lifecycle.png)

生命周期演示

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
    <input type="button" value="修改msg" @click="msg='No'">
    <h3 id="h3">{{ msg }}</h3>
  </div>

  <script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        msg: 'ok'
      },
      methods: {
        show() {
          console.log('执行了show方法')
        }
      },
      beforeCreate() { // 这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
        // console.log(this.msg)
        // this.show()
        // 注意： 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
      },
      created() { // 这是遇到的第二个生命周期函数
        // console.log(this.msg)
        // this.show()
        //  在 created 中，data 和 methods 都已经被初始化好了！
        // 如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
      },
      beforeMount() { // 这是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
        // console.log(document.getElementById('h3').innerText)
        // 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
      },
      mounted() { // 这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
        // console.log(document.getElementById('h3').innerText)
        // 注意： mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在我们的内存中，一动不动
      },


      // 接下来的是运行中的两个事件
      beforeUpdate() { // 这时候，表示 我们的界面还没有被更新【数据被更新了吗？  数据肯定被更新了】
        /* console.log('界面上元素的内容：' + document.getElementById('h3').innerText)
        console.log('data 中的 msg 数据是：' + this.msg) */
        // 得出结论： 当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
      },
      updated() {
        console.log('界面上元素的内容：' + document.getElementById('h3').innerText)
        console.log('data 中的 msg 数据是：' + this.msg)
        // updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
      }
    });
  </script>
</body>

</html>
```

生命周期总结

```
beforeCreate()  表示实例完全被创建出来之前，会执行它
注意： 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化

created()   表示示例已经创建好了在 created 中，data 和 methods 都已经被初始化好了！
  如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
  
 beforeMount()  表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中，挂载尚未完成
  在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
  
 mounted()  表示内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
 注意： mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在我们的内存中，一动不动
 
 beforeUpdate()  当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
 
 updated()  updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
```



品牌列表案例

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
  <!-- 需要用到Jquery吗？？？ -->
</head>

<body>
  <div id="app">
    <!-- {{1+1}} -->


    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Id:
          <input type="text" class="form-control" v-model="id">
        </label>

        <label>
          Name:
          <input type="text" class="form-control" v-model="name" @keyup.f2="add">
        </label>

        <!-- 在Vue中，使用事件绑定机制，为元素指定处理函数的时候，如果加了小括号，就可以给函数传参了 -->
        <input type="button" value="添加" class="btn btn-primary" @click="add()">

        <label>
          搜索名称关键字：
          <!-- 注意： Vue中所有的指令，在调用的时候，都以 v- 开头 -->
          <input type="text" class="form-control" v-model="keywords" id="search" v-focus v-color="'green'">
        </label>
      </div>
    </div>



    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <!-- 之前， v-for 中的数据，都是直接从 data 上的list中直接渲染过来的 -->
        <!-- 现在， 我们自定义了一个 search 方法，同时，把 所有的关键字，通过传参的形式，传递给了 search 方法 -->
        <!-- 在 search 方法内部，通过 执行 for 循环， 把所有符合 搜索关键字的数据，保存到 一个新数组中，返回 -->
        <tr v-for="item in search(keywords)" :key="item.id">
          <td>{{ item.id }}</td>
          <td v-text="item.name"></td>
          <td>{{ item.ctime | dateFormat('yyyy-mm-dd') }}</td>
          <td>
            <a href="" @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>



  </div>


  <div id="app2">
    <h3 v-color="'pink'" v-fontweight="900" v-fontsize="50">{{ dt | dateFormat }}</h3>
  </div>

  <script>
    // 全局的过滤器， 进行时间的格式化
    // 所谓的全局过滤器，就是所有的VM实例都共享的
    Vue.filter('dateFormat', function (dateStr, pattern = "") {
      // 根据给定的时间字符串，得到特定的时间
      var dt = new Date(dateStr)

      //   yyyy-mm-dd
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()

      // return y + '-' + m + '-' + d



      if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
      } else {
        var hh = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
      }
    })


    // 自定义全局按键修饰符
    Vue.config.keyCodes.f2 = 113

    // 使用  Vue.directive() 定义全局的指令  v-focus
    // 其中：参数1 ： 指令的名称，注意，在定义的时候，指令的名称前面，不需要加 v- 前缀, 
    // 但是： 在调用的时候，必须 在指令名称前 加上 v- 前缀来进行调用
    //  参数2： 是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
    Vue.directive('focus', {
      bind: function (el) { // 每当指令绑定到元素上的时候，会立即执行这个 bind 函数，只执行一次
        // 注意： 在每个 函数中，第一个参数，永远是 el ，表示 被绑定了指令的那个元素，这个 el 参数，是一个原生的JS对象
        // 在元素 刚绑定了指令的时候，还没有 插入到 DOM中去，这时候，调用 focus 方法没有作用
        //  因为，一个元素，只有插入DOM之后，才能获取焦点
        // el.focus()
      },
      inserted: function (el) {  // inserted 表示元素 插入到DOM中的时候，会执行 inserted 函数【触发1次】
        el.focus()
        // 和JS行为有关的操作，最好在 inserted 中去执行，否则 JS行为不生效
      },
      updated: function (el) {  // 当VNode更新的时候，会执行 updated， 可能会触发多次

      }
    })

    // 自定义一个 设置字体颜色的 指令
    Vue.directive('color', {
      // 样式，只要通过指令绑定给了元素，不管这个元素有没有被插入到页面中去，这个元素肯定有了一个内联的样式
      // 将来元素肯定会显示到页面中，这时候，浏览器的渲染引擎必然会解析样式，应用给这个元素
      bind: function (el, binding) {
        // el.style.color = 'red'
        // console.log(binding.name)
        // 和样式相关的操作，一般都可以在 bind 执行

        // console.log(binding.value)
        // console.log(binding.expression)

        el.style.color = binding.value
      }
    })


    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        id: '',
        name: '',
        keywords: '', // 搜索的关键字
        list: [
          { id: 1, name: '奔驰', ctime: new Date() },
          { id: 2, name: '宝马', ctime: new Date() }
        ]
      },
      methods: {
        add() { // 添加的方法
          // console.log('ok')
          // 分析：
          // 1. 获取到 id 和 name ,直接从 data 上面获取 
          // 2. 组织出一个对象
          // 3. 把这个对象，调用 数组的 相关方法，添加到 当前 data 上的 list 中
          // 4. 注意：在Vue中，已经实现了数据的双向绑定，每当我们修改了 data 中的数据，Vue会默认监听到数据的改动，自动把最新的数据，应用到页面上；

          // 5. 当我们意识到上面的第四步的时候，就证明大家已经入门Vue了，我们更多的是在进行 VM中 Model 数据的操作，同时，在操作Model数据的时候，指定的业务逻辑操作；

          var car = { id: this.id, name: this.name, ctime: new Date() }
          this.list.push(car)
          this.id = this.name = ''
        },
        del(id) { // 根据Id删除数据
          // 分析：
          // 1. 如何根据Id，找到要删除这一项的索引
          // 2. 如果找到索引了，直接调用 数组的 splice 方法

          /* this.list.some((item, i) => {
            if (item.id == id) {
              this.list.splice(i, 1)
              // 在 数组的 some 方法中，如果 return true，就会立即终止这个数组的后续循环
              return true;
            }
          }) */


          var index = this.list.findIndex(item => {
            if (item.id == id) {
              return true;
            }
          })

          // console.log(index)
          this.list.splice(index, 1)
        },
        search(keywords) { // 根据关键字，进行数据的搜索
          /* var newList = []
          this.list.forEach(item => {
            if (item.name.indexOf(keywords) != -1) {
              newList.push(item)
            }
          })
          return newList */

          // 注意：  forEach   some   filter   findIndex   这些都属于数组的新方法，
          //  都会对数组中的每一项，进行遍历，执行相关的操作；
          return this.list.filter(item => {
            // if(item.name.indexOf(keywords) != -1)

            // 注意 ： ES6中，为字符串提供了一个新方法，叫做  String.prototype.includes('要包含的字符串')
            //  如果包含，则返回 true ，否则返回 false
            //  contain
            if (item.name.includes(keywords)) {
              return item
            }
          })

          // return newList
        }
      }
    });


    // 如何自定义一个私有的过滤器（局部）
    var vm2 = new Vue({
      el: '#app2',
      data: {
        dt: new Date()
      },
      methods: {},
      filters: { // 定义私有过滤器    过滤器有两个 条件  【过滤器名称 和 处理函数】
        // 过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候 优先调用私有过滤器
        dateFormat: function (dateStr, pattern = '') {
          // 根据给定的时间字符串，得到特定的时间
          var dt = new Date(dateStr)

          //   yyyy-mm-dd
          var y = dt.getFullYear()
          var m = (dt.getMonth() + 1).toString().padStart(2, '0')
          var d = dt.getDate().toString().padStart(2, '0')

          if (pattern.toLowerCase() === 'yyyy-mm-dd') {
            return `${y}-${m}-${d}`
          } else {
            var hh = dt.getHours().toString().padStart(2, '0')
            var mm = dt.getMinutes().toString().padStart(2, '0')
            var ss = dt.getSeconds().toString().padStart(2, '0')

            return `${y}-${m}-${d} ${hh}:${mm}:${ss} ~~~~~~~`
          }
        }
      },
      directives: { // 自定义私有指令
        'fontweight': { // 设置字体粗细的
          bind: function (el, binding) {
            el.style.fontWeight = binding.value
          }
        },
        'fontsize': function (el, binding) { // 注意：这个 function 等同于 把 代码写到了 bind 和 update 中去
          el.style.fontSize = parseInt(binding.value) + 'px'
        }
      }
    })

    // 过滤器的定义语法
    // Vue.filter('过滤器的名称', function(){})

    // 过滤器中的 function ，第一个参数，已经被规定死了，永远都是 过滤器 管道符前面 传递过来的数据
    /* Vue.filter('过滤器的名称', function (data) {
      return data + '123'
    }) */

    // document.getElementById('search').focus()

  </script>
</body>

</html>

<!-- 过滤器调用时候的格式    {{ name | 过滤器的名称 }} -->
```

知识点

```
 <!-- 之前， v-for 中的数据，都是直接从 data 上的list中直接渲染过来的 -->
        <!-- 现在， 我们自定义了一个 search 方法，同时，把 所有的关键字，通过传参的形式，传递给了 search 方法 -->
        <!-- 在 search 方法内部，通过 执行 for 循环， 把所有符合 搜索关键字的数据，保存到 一个新数组中，返回 -->
        <tr v-for="item in search(keywords)" :key="item.id">
            
 渲染方式采用 search(keywords)  采用方法返回的值作为循环的对象。
 
  数组的push()方法  向数组的末尾添加一个或更多元素，并返回新的长度。
  数组的splice()方法   从数组中添加或删除元素
  移除数组的第三个元素，并在数组第三个位置添加新元素:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"Lemon","Kiwi");

fruits 输出结果：
Banana,Orange,Lemon,Kiwi,Mango
          
```

*array*.splice(*index*,*howmany*,*item1*,.....,*itemX*)

## 参数 Values

| 参数                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| *index*               | 必需。规定从何处添加/删除元素。 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。 |
| *howmany*             | 必需。规定应该删除多少元素。必须是数字，但可以是 "0"。 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。 |
| *item1*, ..., *itemX* | 可选。要添加到数组的新元素                                   |

forEach   some   filter   findIndex   这些都属于数组的新方法

[点击查看forEach详解](http://www.runoob.com/jsref/jsref-foreach.html)

[点击查看some详解](http://www.runoob.com/jsref/jsref-some.html)

[点击查看filter详解](http://www.runoob.com/jsref/jsref-filter.html)

[点击查看findIndex详解](http://www.runoob.com/jsref/jsref-findindex.html)

[点击学习vue过滤器](https://cn.vuejs.org/v2/guide/filters.html)

[点击学习vue自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)

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
    <p>{{ msg | msgFormat('疯狂+1', '123') | test }}</p>
  </div>

  <script>
    // 定义一个 Vue 全局的过滤器，名字叫做  msgFormat
    Vue.filter('msgFormat', function (msg, arg, arg2) {
      // 字符串的  replace 方法，第一个参数，除了可写一个 字符串之外，还可以定义一个正则
      return msg.replace(/单纯/g, arg + arg2)
    })

    Vue.filter('test', function (msg) {
      return msg + '========'
    })


    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的男人'
      },
      methods: {}
    });
  </script>
</body>

</html>
```

