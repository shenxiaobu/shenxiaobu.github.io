---
title: vue-devtools-dev
date: 2019-03-18 22:57:59
categories: "日常笔记"
tags:
	- vue
---

### 谷歌浏览器chrome的vuejs devtools 插件的安装

github下载插件，npm包安装依赖，拖入浏览器扩展程序

具体操作：

1. #### 下载chrome扩展插件。

   在github上下载压缩包并解压到本地，github下载地址：<https://github.com/vuejs/vue-devtools

2. ## npm install

   下载完成后打开命令行cmd进入vue-devtools-master文件夹，

   1. npm install，安装依赖包；如果安装太慢，请参照文章末尾说明进行操作。

   2. npm run build

      ![1552921222183](1552921222183.png)

npm run build 执行完，会在shells>chrome下的src文件夹里生产如上图所示的几个js文件；

![1552921306142](1552921306142.png)

若不执行以上命令会报错，无法加载背景脚本"build/background.js"

3. 打开shells>chrome>manifest.json并把json文件里的"persistent":false改成true

![1552921450830](1552921450830.png)

4. **扩展chrome插件**

1.打开chrome浏览器，打开更多工具>扩展程序；

2.再点击加载已解压的扩展程序，然后把shells>chrome文件夹放入

![1552921624151](1552921624151.png)

![1552921664362](1552921664362.png)