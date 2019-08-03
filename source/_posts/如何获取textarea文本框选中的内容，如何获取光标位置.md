---
title: 如何获取textarea文本框选中的内容，如何获取光标位置
date: 2019-04-30 22:28:57
tags:
	- css
	- js
---

#### 如何获取textarea文本框选中的内容，如何获取光标位置

##### 应用场景

在一次项目中，需要制作一个回复二级评论时，前面增加一个@某某某的前缀，然后键盘输入

删除键的时候可以删除该前缀。

很明显，当是回复二级评论的时候，获取回复的人的名称，并在输入框同级处加一个div，内容

为“@某某某”，使用绝对定位将位置定在输入框的左上角，重点是当输入框的光标在 0 的时候，

点击删除键 需要删除该div。

因此需要获取光标位置

##### 获取光标位置

通过对象的selectionStart（选中范围的起点）和selectionEnd（选中范围的末点），然后通过截取字符串substring来获取选中范围的.

几个TextRange（顾名思义，TextRange就可以理解为文本的选择范围）的常用属性及方法：

属性

boundingWidth 获取绑定TextRange对象的矩形的宽度

boundingHeight 获取绑定TextRange对象的矩形的高度

boundingLeft 获取绑定TextRange对象的矩形左边缘和包含TextRange对象的左侧之间的距离

boundingTop Retrieves the distance between the top edge of the rectangle that bounds the TextRange object and the top side of the object that contains the TextRange.

offsetLeft 获取对象相对于版面或由offsetParent属性指定的父坐标的计算左侧位置

offsetTop 获取对象相对于版面或由offsetParent属性指定的父坐标的计算顶端位置

htmltext 选中范围内包含的html片段

text 设置或获取范围内包含的纯文本

方法

moveStart 设置文本范围的开始位置

moveEnd 设置文本范围的结束位置

collapse 将插入点移动到当前范围的开始或结尾

select 将当前选择区置为当前对象，也就是从moveStart设置的位置开始到moveEnd设置的位置结束的范围

代码实例

```js
<!doctype html>
<head>
	 <meta charset="utf-8">
	<title>获取光标</title>
</head>
<body>
	<textarea id="textarea">爆米花小布，你是最棒的</textarea>
	<button id="getSelectedText" value="dianji">点击</button>
<script>
   
 window.onload = function() {

   var textarea = document.getElementById('textarea');
   
   var getPosi = document.getElementById('getSelectedText');

    
  getPosi.onclick = function () {
      
  	console.log(getSelectedObj(textarea))
    
  }

      
function getSelectedObj(obj) {
     
  	 var selectedObj = { };

   
       	 // 获取选区的开始位置
         
	 selectedObj.startPos = obj.selectionStart || "",
            
       	 // 获取选区的结束位置
            
  	selectedObj.endPos = obj.selectionEnd || "";
         
	//获取文本内容
	selectedObj.content = obj.value;
	//获取选中文本
	selectedObj.selectedContent = 	           obj.value.substring(obj.selectionStart,obj.selectionEnd) || "";
 	return selectedObj;
  }
  
}
</script>
```



![1556519056708](1.jpg)

自己封装一个方法，获取文本内容，选中内容，光标的始末位置