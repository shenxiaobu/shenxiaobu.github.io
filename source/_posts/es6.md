---
title: es6
date: 2019-03-26 15:26:28
categories: "日常笔记"
tags:
	- es6
---

#### es6

数组find方法原理

```js
//因为find已经是系统方法，所以使用myFind代替

var user=[
    {name: '张三'},
    {name: '李四'},
    {name: '王五'},
    {name: '陈六'}
    ]
Array.prototype.myFind = function(conditionFunc){
    for(var i = 0; i< this.length; i++){
        if(conditionFunc(this[i],i)){
            return this[i]
        }
    }
}
var a = user.myFind(function(item,index){
    console.log(index)  //李四的下标，相当于上面的i
    return item.name === "李四"
})

console.dir(a)   //object

```

数组findIndex方法原理

```js
//因为find已经是系统方法，所以使用myFindIndex代替

var user=[
    {name: '张三'},
    {name: '李四'},
    {name: '王五'},
    {name: '陈六'}
    ]
Array.prototype.myFindIndex = function(conditionFunc){
    for(var i = 0; i< this.length; i++){
        if(conditionFunc(this[i],i)){
            return i
        }
    }
}
var a = user.myFindIndex(function(item,index){
    console.log(index)  //李四的下标，相当于上面的i
    return item.name === "李四"
})

console.dir(a)   //1
```











