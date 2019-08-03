---
title: css实现div中图片高度与父级div宽宽度一致
date: 2019-08-03 08:16:38
tags:
	- css
---

# css实现div中图片高度与父级div宽度一致



需求：1.父级div不设置高度

　　　2.图片高度自适应，并且显示为正方形；

以前遇到列表中图片高度必须和父级宽度相同，并且需要为正方形的时

**1.html**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```html
<ul>
    <li class="bli">
        <div class="imgbox">
            <img src="upimg/comm.png"/>
        </div>
        <p>喵喵喵喵喵喵111</p>
    </li>
    <li class="bli">
        <div class="imgbox">
            <img src="upimg/comm1.png"/>
        </div>
        <p>喵喵喵喵喵喵222</p>
    </li>
    <li class="bli">
        <div class="imgbox">
            <img src="upimg/comm2.png"/>
        </div>
        <p>喵喵喵喵喵喵333</p>
    </li>
</ul>
```

```css
ul{
    overflow: hidden;
}
.bli{
    float: left;
    width: 49%;
    margin:0 2% 2% 0;
    background: white;
    outline: 1px solid red;
}
.bli:nth-child(even){
    margin-right: 0;
}
.imgbox{
    position: relative;
    overflow: hidden;
    padding-bottom: 100%;/*重要属性,如果要设置 16：9  那就是  100*9/16=56%*/
    outline: 1px solid green;
}
.imgbox img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
}
```

**说明**：装图片的盒子imgbox，设置的padding-bottom，当该值为百分比属性时，是基于父元素宽度的百分比，所以这里设置100%的时候，就相当于形成了一个正方形。

　　　当然，也可以设置padding-top。这时img就需要设置top:0;了。记得img要设置100%宽度哦。

　　　这个方式和js的先获取父级div宽度再设置图片高度相比方便太多太多了。