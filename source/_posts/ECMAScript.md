---
title: ECMAScript
date: 2019-04-01 22:14:43
tags:
	- js
---

#### Number

JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：

```js
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
```

Number可以直接做四则运算，规则和数学一致：

```js
1 + 2; // 3
(1 + 2) * 5 / 2; // 7.5
2 / 0; // Infinity
0 / 0; // NaN
10 % 3; // 1
10.5 % 3; // 1.5
```

注意`%`是求余运算。

#### 字符串

字符串是以单引号'或双引号"括起来的任意文本，比如`'abc'`，`"xyz"`等等。请注意，`''`或`""`本身只是一种表示方式，不是字符串的一部分，因此，字符串`'abc'`只有`a`，`b`，`c`这3个字符。

#### 布尔值

```js
true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值
```

`&&`运算是与运算，只有所有都为`true`，`&&`运算结果才是`true`：

`!`运算是非运算，它是一个单目运算符，把`true`变成`false`，`false`变成`true`：

```js
! true; // 结果为false
! false; // 结果为true
! (2 > 5); // 结果为true
```

### 比较运算符

当我们对Number做比较时，可以通过比较运算符得到一个布尔值：

```js
2 > 5; // false
5 >= 2; // true
7 == 7; // true
```

实际上，JavaScript允许对任意数据类型做比较：

```js
false == 0; // true
false === 0; // false
```

要特别注意相等运算符`==`。JavaScript在设计时，有两种比较运算符：

第一种是`==`比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

第二种是`===`比较，它不会自动转换数据类型，如果数据类型不一致，返回`false`，如果一致，再比较。

由于JavaScript这个设计缺陷，*不要*使用`==`比较，始终坚持使用`===`比较。

另一个例外是`NaN`这个特殊的Number与所有其他值都不相等，包括它自己：

```js
NaN === NaN; // false
```

唯一能判断`NaN`的方法是通过`isNaN()`函数：

```js
isNaN(NaN); // true
```

最后要注意浮点数的相等比较：

```js
1 / 3 === (1 - 2 / 3); // false
```

这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

```js
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
```

#### null和undefined

`null`表示一个“空”的值，它和`0`以及空字符串`''`不同，`0`是一个数值，`''`表示长度为0的字符串，而`null`表示“空”。

在其他语言中，也有类似JavaScript的`null`的表示，例如Java也用`null`，Swift用`nil`，Python用`None`表示。但是，在JavaScript中，还有一个和`null`类似的`undefined`，它表示“未定义”。

JavaScript的设计者希望用`null`表示一个空的值，而`undefined`表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用`null`。`undefined`仅仅在判断函数参数是否传递的情况下有用。

#### 数组

数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。例如：

```
[1, 2, 3.14, 'Hello', null, true];
```

上述数组包含6个元素。数组用`[]`表示，元素之间用`,`分隔。

另一种创建数组的方法是通过`Array()`函数实现：

```
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
```

然而，出于代码的可读性考虑，强烈建议直接使用`[]`。

数组的元素可以通过索引来访问。请注意，索引的起始值为`0`：

```js
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined

//数组可以对其进行赋值
arr[9] = 6;
console.log(arr[9])    // 6
console.log(arr[8])  //返回undefined
console.log(arr[7])  //返回undefined
console.log(arr[6])  //返回undefined
//向一个数组添加元素，通常使用如下方法
arr[arr.length] = 想要的值;
```

#### 对象

JavaScript的对象是一组由键-值组成的无序集合，例如：

```js
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
```

JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述`person`对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，`person`的`name`属性为`'Bob'`，`zipcode`属性为`null`。

要获取一个对象的属性，我们用`对象变量.属性名`的方式：

```js
person.name; // 'Bob'
person.zipcode; // null
```

#### 字符串

------

JavaScript的字符串就是用`''`或`""`括起来的字符表示。

如果`'`本身也是一个字符，那就可以用`""`括起来，比如`"I'm OK"`包含的字符是`I`，`'`，`m`，空格，`O`，`K`这6个字符。

如果字符串内部既包含`'`又包含`"`怎么办？可以用转义字符`\`来标识，比如：

```js
'I\'m \"OK\"!';
```

表示的字符串内容是：`I'm "OK"!`

转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。

ASCII字符可以以`\x##`形式的十六进制表示，例如：

```js
'\x41'; // 完全等同于 'A'
```

还可以用`\u####`表示一个Unicode字符：

```
'\u4e2d\u6587'; // 完全等同于 '中文'
```

### 多行字符串

由于多行字符串用`\n`写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 *`* ... *`* 表示：

```js
`这是一个
多行
字符串`;
```

*注意*：反引号在键盘的ESC下方，数字键1的左边

#### 字符串

阅读: 262705

------

JavaScript的字符串就是用`''`或`""`括起来的字符表示。

如果`'`本身也是一个字符，那就可以用`""`括起来，比如`"I'm OK"`包含的字符是`I`，`'`，`m`，空格，`O`，`K`这6个字符。

如果字符串内部既包含`'`又包含`"`怎么办？可以用转义字符`\`来标识，比如：

```
'I\'m \"OK\"!';
```

表示的字符串内容是：`I'm "OK"!`

转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。

ASCII字符可以以`\x##`形式的十六进制表示，例如：

```
'\x41'; // 完全等同于 'A'
```

还可以用`\u####`表示一个Unicode字符：

```
'\u4e2d\u6587'; // 完全等同于 '中文'
```

### 多行字符串

由于多行字符串用`\n`写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 *`* ... *`* 表示：

```
`这是一个
多行
字符串`;
```

*注意*：反引号在键盘的ESC下方，数字键1的左边：

```ascii
┌─────┐ ┌─────┬─────┬─────┬─────┐
│ ESC │ │ F1  │ F2  │ F3  │ F4  │
│     │ │     │     │     │     │
└─────┘ └─────┴─────┴─────┴─────┘
┌─────┬─────┬─────┬─────┬─────┐
│  ~  │  !  │  @  │  #  │  $  │
│  `  │  1  │  2  │  3  │  4  │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┘
│        │     │     │     │
│  tab   │  Q  │  W  │  E  │
├────────┴──┬──┴──┬──┴──┬──┘
│           │     │     │
│ caps lock │  A  │  S  │
└───────────┴─────┴─────┘
```

练习：测试你的浏览器是否支持ES6标准，如果不支持，请把多行字符串用`\n`重新表示出来：

`// 如果浏览器不支持ES6，将报SyntaxError错误: ` Run

### 模板字符串

要把多个字符串连接起来，可以用`+`号连接：

```js
var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
alert(message);
```

如果有很多变量需要连接，用`+`号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量：

```js
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);
```

练习：测试你的浏览器是否支持ES6模板字符串，如果不支持，请把模板字符串改为`+`连接的普通字符串：

```js
'use strict';  // 如果浏览器支持模板字符串，将会替换字符串内部的变量: var name = '小明'; var age = 20;

console.log(`你好, ${name}, 你今年${age}岁了!`);
```

#### 字符串

阅读: 262705

------

JavaScript的字符串就是用`''`或`""`括起来的字符表示。

如果`'`本身也是一个字符，那就可以用`""`括起来，比如`"I'm OK"`包含的字符是`I`，`'`，`m`，空格，`O`，`K`这6个字符。

如果字符串内部既包含`'`又包含`"`怎么办？可以用转义字符`\`来标识，比如：

```
'I\'m \"OK\"!';
```

表示的字符串内容是：`I'm "OK"!`

转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。

ASCII字符可以以`\x##`形式的十六进制表示，例如：

```
'\x41'; // 完全等同于 'A'
```

还可以用`\u####`表示一个Unicode字符：

```
'\u4e2d\u6587'; // 完全等同于 '中文'
```

### 多行字符串

由于多行字符串用`\n`写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 *`* ... *`* 表示：

```
`这是一个
多行
字符串`;
```

*注意*：反引号在键盘的ESC下方，数字键1的左边：

```ascii
┌─────┐ ┌─────┬─────┬─────┬─────┐
│ ESC │ │ F1  │ F2  │ F3  │ F4  │
│     │ │     │     │     │     │
└─────┘ └─────┴─────┴─────┴─────┘
┌─────┬─────┬─────┬─────┬─────┐
│  ~  │  !  │  @  │  #  │  $  │
│  `  │  1  │  2  │  3  │  4  │
├─────┴──┬──┴──┬──┴──┬──┴──┬──┘
│        │     │     │     │
│  tab   │  Q  │  W  │  E  │
├────────┴──┬──┴──┬──┴──┬──┘
│           │     │     │
│ caps lock │  A  │  S  │
└───────────┴─────┴─────┘
```

练习：测试你的浏览器是否支持ES6标准，如果不支持，请把多行字符串用`\n`重新表示出来：

`// 如果浏览器不支持ES6，将报SyntaxError错误: ` Run

### 模板字符串

要把多个字符串连接起来，可以用`+`号连接：

```
var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
alert(message);
```

如果有很多变量需要连接，用`+`号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量：

```
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);
```

练习：测试你的浏览器是否支持ES6模板字符串，如果不支持，请把模板字符串改为`+`连接的普通字符串：

`'use strict';  // 如果浏览器支持模板字符串，将会替换字符串内部的变量: var name = '小明'; var age = 20; ` Run

### 操作字符串

字符串常见的操作如下：

```js
var s = 'Hello, world!';
s.length; // 13
```

要获取字符串某个指定位置的字符，使用类似Array的下标操作，索引号从0开始：

```js
var s = 'Hello, world!';

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined
```

#####需要特别注意的是*，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：

```js
var s = 'Test';
s[0] = 'X';
alert(s); // s仍然为'Test'
```

JavaScript为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串：

### toUpperCase

`toUpperCase()`把一个字符串全部变为大写：

```js
var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'
```

### toLowerCase

`toLowerCase()`把一个字符串全部变为小写：

```js
var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'
```

### indexOf

`indexOf()`会搜索指定字符串出现的位置：

```js
var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
```

### substring

`substring()`返回指定索引区间的子串：

```js
var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
```

#### 数组

阅读: 281796

------

JavaScript的`Array`可以包含任意数据类型，并通过索引来访问每个元素。

要取得`Array`的长度，直接访问`length`属性：

```js
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; // 6
```

*请注意*，直接给`Array`的`length`赋一个新的值会导致`Array`大小的变化：

```js
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]
```

`Array`可以通过索引把对应的元素修改为新的值，因此，对`Array`的索引进行赋值会直接修改这个`Array`：

```js
var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr; // arr现在变为['A', 99, 'C']
```

*请注意*，如果通过索引赋值时，索引超过了范围，同样会引起`Array`大小的变化：

```js
var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
```

大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的`Array`却不会有任何错误。在编写代码时，不建议直接修改`Array`的大小，访问索引时要确保索引不会越界。

### indexOf

与String类似，`Array`也可以通过`indexOf()`来搜索一个指定的元素的位置：

```js
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
```

注意了，数字`30`和字符串`'30'`是不同的元素。

### slice

`slice()`就是对应String的`substring()`版本，它截取`Array`的部分元素，然后返回一个新的`Array`：

```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
```

注意到`slice()`的起止参数包括开始索引，不包括结束索引。

如果不给`slice()`传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个`Array`：

```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false
```

### push和pop

`push()`向`Array`的末尾添加若干元素，`pop()`则把`Array`的最后一个元素删除掉：

```js
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
arr; // []
```

### unshift和shift

如果要往`Array`的头部添加若干元素，使用`unshift()`方法，`shift()`方法则把`Array`的第一个元素删掉：

```js
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []
```

### sort

`sort()`可以对当前`Array`进行排序，它会直接修改当前`Array`的元素位置，直接调用时，按照默认顺序排序：

```js
var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']
```

能否按照我们自己指定的顺序排序呢？完全可以，我们将在后面的函数中讲到。

### reverse

`reverse()`把整个`Array`的元素给掉个个，也就是反转：

```js
var arr = ['one', 'two', 'three'];
arr.reverse(); 
arr; // ['three', 'two', 'one']
```

### splice

`splice()`方法是修改`Array`的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

### concat

`concat()`方法把当前的`Array`和另一个`Array`连接起来，并返回一个新的`Array`：

```js
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```

*请注意*，`concat()`方法并没有修改当前`Array`，而是返回了一个新的`Array`。

实际上，`concat()`方法可以接收任意个元素和`Array`，并且自动把`Array`拆开，然后全部添加到新的`Array`里：

```js
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```

### join

`join()`方法是一个非常实用的方法，它把当前`Array`的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
```

如果`Array`的元素不是字符串，将自动转换为字符串后再连接。

### 多维数组

如果数组的某个元素又是一个`Array`，则可以形成多维数组，例如：

```js
var arr = [[1, 2, 3], [400, 500, 600], '-'];
```

上述`Array`包含3个元素，其中头两个元素本身也是`Array`。

#### 对象

------

JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。

JavaScript的对象用于描述现实世界中的某个对象。例如，为了描述“小明”这个淘气的小朋友，我们可以用若干键值对来描述他：

```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
```

JavaScript用一个`{...}`表示一个对象，键值对以`xxx: xxx`形式申明，用`,`隔开。注意，最后一个键值对不需要在末尾加`,`，如果加了，有的浏览器（如低版本的IE）将报错。

上述对象申明了一个`name`属性，值是`'小明'`，`birth`属性，值是`1990`，以及其他一些属性。最后，把这个对象赋值给变量`xiaoming`后，就可以通过变量`xiaoming`来获取小明的属性了：

```js
xiaoming.name; // '小明'
xiaoming.birth; // 1990
```

访问属性是通过`.`操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用`''`括起来：

```js
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
```

`xiaohong`的属性名`middle-school`不是一个有效的变量，就需要用`''`括起来。访问这个属性也无法使用`.`操作符，必须用`['xxx']`来访问：

```js
xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'
```

也可以用`xiaohong['name']`来访问`xiaohong`的`name`属性，不过`xiaohong.name`的写法更简洁。我们在编写JavaScript代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过`object.prop`的形式访问一个属性了。

实际上JavaScript对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。

如果访问一个不存在的属性会返回什么呢？JavaScript规定，访问不存在的属性不报错，而是返回`undefined`：

`'use strict';  var xiaoming = {     name: '小明' }; ` Run

由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：

```js
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```

如果我们要检测`xiaoming`是否拥有某一属性，可以用`in`操作符：

```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```

不过要小心，如果`in`判断一个属性存在，这个属性不一定是`xiaoming`的，它可能是`xiaoming`继承得到的：

```js
'toString' in xiaoming; // true
```

因为`toString`定义在`object`对象中，而所有对象最终都会在原型链上指向`object`，所以`xiaoming`也拥有`toString`属性。

要判断一个属性是否是`xiaoming`自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法：

```js
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
```

