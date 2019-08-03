---
title: css经典实战
date: 2019-05-20 22:31:23
tags:
	- css
---

#### css经典实战

##### 能用html/css解决的问题就不要用js

###### 导航高亮

导航高亮是一种很常见的需求，包括当前页面的导航在菜单里高亮和hover时高亮。

你可以用js控制，但其实用一点css技巧就可以达到这个目的，而不需要使用js。

例如下代码清单

```html
<!-- home.html -->
<body class="home"></body>

<!-- buy.html -->
<body class="buy"></body>
```

所有的li也用class标识，为了有一个意义对应的关系，如下代码清单

```html
<li class="home"></li>
<li class="buy"></li>
```

然后就可以设置当前页面的样式，覆盖默认的样式，如下代码

```css
nav li{
    opacity: 0.5;
}
body.home nav li.home,
body.buy nav li.buy{
	opacity: 1;
}
```

这样，如果当前页面是home，则body.home nav li.home 这条规则生效，home导航

高亮；如果你是用js控制，那么在脚本加载好之前，当前页面是不会高亮的，而脚本加

载好之后会突然高亮。所以这种情况下用js吃力不讨好。

​	同时，hover时的高亮也可以用css的：hover选择器实现，如下代码

```css
nav li:hover{
    opacity: 1;
}
```

加上：hover选择器后的优先级将会高于原本的优先级，鼠标hover的时候将会覆盖默认

样式，即高亮生效。

​	你也可以是用js的mouse事件实现此功能，但js会在mouseover的时候添加一个类，mouseleave的时候会移除这个类，这样就变复杂了，而用css甚至可以兼容不支持

js的浏览器，所以推荐使用css。一个纯展示的静态页面，为啥要写js呢，是吧。

​	注意这个hover选择器特别的好用，几乎是用与所有需要鼠标悬浮时显示的场景



###### 鼠标悬浮时显示

​	鼠标悬浮的场景十分常见，例如导航菜单， 当鼠标hover到某个菜单时，它的子菜单就显示出来。

​	还有像在地图里面，鼠标悬浮在某个图标的位置时，就显示该图标的具体信息。

​	这类场景的实现，一般要把隐藏的对象，如子菜单、信息框作为hover目标的子元素或者相邻元素，才方便css控制，例如上面的菜单是把menu当作导航的一个相邻元素

html结构如下所示

```html
<li class="user">用户</li>
<li class="menu">
	<ul>
		<li>账户设置</li>
		<li>登出</li>
	</ul>
</li>
```

​	menu在正常态下是隐藏的，如下代码所示

```css
.menu{
    display: none;
}
```

​	当导航hover时结合相邻选择器，把它显示出来，如下代码所示

```css
.user:hover + .menu{
    display: list-item;
}
```

​	注意这里使用了一个相邻选择器，这也是上面说的为什么要写成相邻的元素。而

menu的位置可以使用absolute定位。

​	同时，menu本身hover的时候也要显示，否则鼠标一离开导航的时候，菜单就消失了，如下代码所示

```css
.menu:hover{
    display: list-item;
}
```

​	这里会出现一个小问题，即menu和导航需要挨在一起，如果中间有空隙，上面的

添加的hover就不能发挥作用了，但是实际情况下，从美观的角度，两者是要有点距离的。这个其实也好解决，只要在menu上面画一个透明的区域就好了。代码清单如下

```css
.menu{
	position: relative;
}
.menu:before{
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    width: 100%;
    height: 20px;
}
```

​	这样鼠标往下移的时候就会马上hove到menu上，而不会因为中间的缝隙导致

menu不会出来。

​	如果即写了css的hover，又监听了mouse事件，用mouse控制显示隐藏，双重

效果会发生什么情况？如果按正常思路，在mouse事件里面hover的时候，添加了一个

display:block的style，会覆盖css的设置。也就是说，只要hover一次，css的代码就不

管用了，因为内联样式的优先级高于外联。但是实际情况下会有意外发生，那就是在移

动端Safari上面，触摸会触发css的hover，并且这个触发会很高概率的先于touchstart事件，此时会先判断当前是显示还是隐藏的状态，由于css的hover发挥了作用，所以判断为显示，然后又把它隐藏了。也就是说，点一次不出来，要点两次。所以最好别同时

两个一起写。

​	第二种方法，使用子元素，这个更简单。把hover的目标和隐藏的对象当作同一个

父容器的子元素，然后hover写在这个父容器上面就可以了，不用像上面那样，隐藏的

元素本身也要写个 hover。如下代码所示

```css
.marker-container .detail-info{
    display:none;
}

.marker-container:hover .detail-info{
    display: block;
}
```

###### 自定义radio/checkbox的样式

​	我们知道，使用原生的radio/checkbox是不可以改变他的样式的，得自己

div/span去画，然后再去监听单击事件。但是这样需要自己去写逻辑控制，例如实现

radio按钮单选的功能，另外没办法使用原生radio的change事件，没有用原生来的方便

​	但实际上可以用一点css3的技巧实现自定义的目的。借助css3提供的一个伪类

:checked,只要radio/checkbox是选中状态，这个伪类就会生效，因此可以利用选中和

非选中这两个状态，去切换不同的样式。下面的代码清单是把一个checkbox和一个用来

自定义样式的span写在一个label里面，同时checkbox始终隐藏

```html
<style>
	input[type=checkbox]{
        display: none;
	}
	/*未选中的checkbox的样式*/
	.checkbox{
        /*实现略*/
	}
</style>
<label>
	<input type="checkbox">
	<span class="checkbox"></span>
</label>
```

​	写在label里面是为了能够在单击span的时候改变checkbox的状态。最后，再改一

下选中态的样式即可，如下代码

```css
input[type=checkbox]:checked + .checkbox{
	/**实现略/
}
```

​	注意，这一步很关键，添加一个打勾的背景图也可以，使用图标字体也可以。

：checked兼容性还是比较好的，只要你不需要兼容IE8就可以使用，换句话说只要你能

用 nth-of-type，就可以使用 ：checked。



###### 需要根据个数显示不同样式（向前选择器 :nth-last-child）

​	例如有1~3个item显示在同一行，但item的个数不一定，如果只有一个，那这个

item占宽100%，有2个时每一个占50%，3个时每一个占 33.3%，这个你也可以用js计

算一下，但是这样做比较繁琐，用css3就可以轻松解决这个问题，如下代码所示

```html
<style>
	li{
        width: 100%;
	}
	li:first-child:nth-last-child(2),
	li:first-child:nth-last-child(2) ~ li{
        width: 50%;
	}
	li:first-child:nth-last-child(3),
	li:first-child:nth-last-child(3) ~ li{
        width: 33.3%;
	}
</style>
<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
```

![1558367246133](1558367246133.png)

```html
<style> .terms-box + .terms-box{ display: none}</style>
<div class="terms-box"></div>
<div class="terms-box"></div>
```

​	这个时候你会想，如果有一个反过来的选择器就好了，但是css没有一个向前选择

器，无法直接隐藏第一个，这个时候用nth-last-type就可以实现，如下所示

```css
.terms-box:nth-of-type(1):nth-last-of-type(2){
    display: none;
}
```

​	当它是第一个元素，并且它是倒数第二个的时候就隐藏。这样就可以实现了有两个

terms的时候隐藏第一个，只有一个的时候不隐藏的目的了。



#####需要根据个数显示不同样式（使用flex）

​	上面是使用:first-child:nth-last-child(n)  来使根据不同个数显示不同样式，但是

如果显示个数很多的时候，显然使用上面的方法不适用于很多种情况的时候，比如十个

子元素的时候或者甚至一百个子元素的时候，所以这里来介绍下，使用flex，平分父元素。代码清单如下

```html
<style>
.parent-box {
    width: 100%;
    height: 50px;
    background: #fff;
    /* Safari */
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.parent-box .child {
    flex: 1;
    text-align: center;
    height: 50px;
    line-height: 50px;
    position: relative;
}
.parent-box .child:before {
	content: '';
    width: 80px;
    height: 4px;
    background: red;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -40px;
}

</style>
<div class="parent-box">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
</div>
```

显示效果如下

![1558448583785](1558448583785.png)

​	当然如果是三个元素，也会平分，一百个元素也会平分，利用的是flex布局的flex

属性。



​	经常会遇到一个父盒子下面有两个子元素，左边文本宽度不固定，右边要占满

整个父元素。如图所示的样式

![1558449205761](1558449205761.png)

​	其实右边的红线就是使用flex属性来书写的，详细代码如下

```html
<style>
.box{
    display: flex;
    jusitify-content: flex-start;
    align-items: center;
}
.line{
    height: 10px;
    background: red;
    flex: 1;
}
</style>
<div class="box">
	<h1>你好吗</h1><span class="line"></span>
</div>
```

​	当然，如果对flex不是很熟悉的话，点击查看flex详细解答 [flex详解](<https://shenxiaobu.github.io/2019/04/01/flex%E8%AF%A6%E8%A7%A3/>)



###### 用css画一个三角形

​	三角形的场景很常见，打开一个页面可以看到各种各样的三角形。

​	由于div一般是四边形，要画一个三角形并不是那么直观。你可以贴一张png，但是

着各种办法有点low；也可以使用svg 的形式，但是太麻烦。三角形其实是可以用css来

画的。css画三角形可以分为两种：一种是纯色的三角形，第二种是有边框色的三角形

​	三角形可以用border画出来，首先一个有四个border的div应该是这样的，如下图

所示

![1558450156666](1558450156666.png)

代码清单如下

```html
<style>
.triangle{
	border-right: 50px solid #333;
	border-left: 50px solid #000;
	border-top: 50px solid #666;
	border-bottom: 50px solid #999;
	width: 100px;
	height: 100px;
	background-color: #ccc;
}
</style>
<div class="triangle"></div>
```

然后把他的宽度和高度都设置为0，剩下四个border，就变成如下所示了

![1558450399453](1558450399453.png)

​	再把border-top去掉，这样就把上面的区域给裁掉了，如下图所示

![1558450473471](1558450473471.png)

​	接下来就是让左右两边的border透明，background的背景色去掉

就得到一个三角形，如下图所示

![1558450619174](1558450619174.png)

代码清单如下

```html
<style>
.triangle{
	border-right: 50px solid transparent;
	border-left: 50px solid transparent;	
	border-bottom: 50px solid #999;
	width: 0px;
	height: 0px;
}
</style>
<div class="triangle"></div>
```

​	这里是了底部的border作为三角形，如果要取左边的border，同理只需让上下的

两个border颜色设置为transparent，同时不要右边的border即可。



###### 控制三角形的角度

​	上面画的三角形是一个直角三角形，而用的比较多的应该是等边三角形或者接近于

等边三角形，那怎么画一个等边三角形呢？

​	首先，保持border-left和border-right的大小不变，让border-bottom不断变大，

观察一下形态是怎么变的，如下所示

![1558451649475](1558451649475.png)

​	经过上图的解释，应该明白了角度是如何调整的，需要用到三角形的数学公式，

如果要制作等边三角形，那么应该 左右两边的边框一样宽度，底部边框的高度应为

左（右）边框的根号3倍；如40px的根号3倍约为 69.28px；如下图所示，就为等边

三角形

![1558452072475](1558452072475.png)

###### 画一个有边缘的三角形

​	这种三角形很常见，特别是tip的提示框、聊天消息框等。

​	这种画法的实现其实很简单，只是不容易想到——就是先画一个深色的三角形，然

后再画一个同样大小白色的三角形盖在上面，两个三角形错位两个像素，这样深色的边

缘就刚好露出一个像素。

代码清单如下

```html
<style>
.chat-msg{
	width: 300px;
	height: 80px;
	border: 1px solid #ccc;
	position: relative;
	border-radius: 10px;
}
.chat-msg:before{
	content: '';
	position: absolute;
	left: -10px;
	top: 34px;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-right: 10px solid #ccc;
}
</style>
<div class="chat-msg"></div>
```

效果如下

![1558454119744](1558454119744.png)

​	然后再画一个白色的三角形盖上去，错位两个像素，代码清单如下

```css
.chat-msg:after{
	content: '';
	position: absolute;
	left: -8px;
	top: 34px;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-right: 10px solid #fff;
}
```

效果如下

![1558454445127](1558454445127.png)

​	上面用的属性都是css2最基本的属性，所以没有兼容性问题

###### 添加阴影

​	如果三角形要有阴影怎么办？可以用filter添加阴影效果，如下代码所示

```css
.chat-msg{
    filter: drop-shadow(0 0 2px #999);
    background: #fff;
}
```

效果如下

![1558454738928](1558454738928.png)





