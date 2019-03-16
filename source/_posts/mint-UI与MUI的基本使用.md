---
title: mint-UI与MUI的基本使用
date: 2019-03-15 16:10:31
categories: "日常笔记"
tags: 
	- mint-UI
	- MUI
---

#### mint-UI的使用

 mint-ui是基于vue的前端组件库

[Github 仓储地址](https://github.com/ElemeFE/mint-ui)

[Mint-UI官方文档](http://mint-ui.github.io/#!/zh-cn)

[mint-ui文档](https://www.cnblogs.com/smallteeth/p/6901610.html)

mint-UI特性

- Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。
- 真正意义上的按需加载组件。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。
- 考虑到移动端的性能门槛，Mint UI 采用 CSS3 处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。
- 依托 Vue.js 高效的组件化方案，Mint UI 做到了轻量化。即使全部引入，压缩后的文件体积也仅有 ~30kb (JS + CSS) gzip。

# Mint-UI中导入所有组件的配置方式

1. 安装mint-ui `cnpm i mint-ui -S`
2. 在main.js上导入 `import MintUi from "mint-ui"mint-ui`

3. 引入mint-ui样式  `import 'mint-ui/lib/style.css'`

4. 在Vue中安装 MintUi `Vue.use(MintUi)`

```
注意： mint-ui是基于vue的，前提是有安装vue，并引入vue
```

然后在组建上使用

```html
<mt-button type="primary" size="large">primary</mt-button>
```

这样就可以使用mint-ui的组件了



### Mint-UI中按需导入组件的配置方式

1. ```
   按需导入需要借助 babel-plugin-component
   1. cnpm install babel-plugin-component -D
   2. 安装好之后，将.babelrc 文件 添加一个plugin
   {
     "presets": ["env", "stage-0"],
     "plugins": ["transform-runtime", ["component", [
       {
         "libraryName": "mint-ui",
         "style": true
       }
     ]]]
   }
   ```

2. ```
   按需导入mint-ui组件
   
   import { button } from 'mint-ui'  //这里以button为例子
   ```

3. ```
   添加到vue组件上
   Vue.component(button.name,button)  //button.name就是 mt-button,也可以自定义
   ```

4. ```
   在页面上使用
   <mt-button type="danger" size="large">primary</mt-button>
   ```

   

## 介绍MUI代码块

> 注意： MUI 不同于 Mint-UI，MUI只是开发出来的一套好用的代码片段，里面提供了配套的样式、配套的HTML代码段，类似于 Bootstrap； 而 Mint-UI，是真正的组件库，是使用 Vue 技术封装出来的 成套的组件，可以无缝的和 VUE项目进行集成开发；
> 因此，从体验上来说， Mint-UI体验更好，因为这是别人帮我们开发好的现成的Vue组件；
> 从体验上来说， MUI和Bootstrap类似；
> 理论上，任何项目都可以使用 MUI 或 Bootstrap，但是，MInt-UI只适用于Vue项目；

注意： MUI 并不能使用  npm 去下载，需要自己手动从 github 上，下载现成的包，自己解压出来，然后手动拷贝到项目中使用；





##### 使用方法

1. ![1552641665702](1552641665702.png)

2. ![1552642049709](1552642049709.png)

3. ```
   导入MUI的样式表
   //用法与使用bootstrap一样，只不过bootstrap是通过npm下载的，存放目录不一样
   import './lib/mui/css/mui.min.css'
   ```

4. 根据官方提供的文档和example，尝试使用相关的组件

5. ```html
   <!--如：button的使用-->
   <button type="button" class="mui-btn">默认</button>
   <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
   <button type="button" class="mui-btn mui-btn-success">绿色</button>
   <button type="button" class="mui-btn mui-btn-warning">黄色</button>
   <button type="button" class="mui-btn mui-btn-danger">红色</button>
   <button type="button" class="mui-btn mui-btn-royal">紫色</button> 
   ```

【参考】

[MUI官网](http://dev.dcloud.net.cn/mui/)

[MUI文档](http://dev.dcloud.net.cn/mui/ui/)

[mint-ui](https://github.com/ElemeFE/mint-ui)

