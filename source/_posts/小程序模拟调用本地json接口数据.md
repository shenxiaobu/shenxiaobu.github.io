---
title: 小程序模拟调用本地json接口数据
date: 2019-05-01 13:13:13
tags:
	- 微信小程序
---

#### 小程序模拟调用本地json接口数据

把准备好的json数据渲染到前端界面，模拟在这里加载本地json数据。效果如下，能看到界面渲染的数据。

![1556687765777](1556687765777.png)

1：新建一个data文件夹，在文件夹底下新建一个js文件，写好准备的json格式的数据：并且定义数据出口

```js
module.exports = {
  dataList: json
}
```

![1556687840646](1556687840646.png)

1.json:

```js
// 本地模拟json数据
var json = [{
  "id": 1
},
{
  "id": 2
},
{
  "id": 3
},
{
  "id": 4
}
]

// 定义数据出口
module.exports = {
  dataList: json
}
```

2：wxml

```html
<!--列表渲染  -->
<block wx:for="{{dataList}}" wx:key="item">
 <view class='item-container'>
  <!--序列号  -->
  <text>{{item.id}}</text>
 </view>
</block>
```

3：wxss

```css
.item-container{
 border: 5px solid #ffffff;
  height: 110rpx;
  line-height: 110rpx;
  margin-bottom:4rpx;
  text-align: center; 
  background: #f6c8fb;
  color: #ffffff;
  
}
```

4：js

```js
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../data/json.js');
Page({
  data: {
  },
  //我们在这里加载本地json数据
  onLoad: function () {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      dataList: jsonData.dataList
    });
    console.log(this.data.dataList)
  },
})

```

显示效果上面已经说了，打印的数据如下

![1556688123842](1556688123842.png)