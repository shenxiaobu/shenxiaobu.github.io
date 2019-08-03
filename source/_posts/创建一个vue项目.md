---
layout: w
title: 创建一个vue项目
date: 2019-08-03 08:02:42
tags:
	- vue
---

## vue创建项目（npm安装→初始化项目）

#### 第一步npm安装

首先：先从nodejs.org中下载nodejs





![img](https:////upload-images.jianshu.io/upload_images/11329965-5a9ee3f9b2ca0d00.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/741/format/webp)

图1

双击安装，在安装界面一直Next 



![img](https:////upload-images.jianshu.io/upload_images/11329965-748c9758d8aa015a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/669/format/webp)

图2





![img](https:////upload-images.jianshu.io/upload_images/11329965-9ade95930e2b8c76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/459/format/webp)

图3





![img](https:////upload-images.jianshu.io/upload_images/11329965-f9a0c21c5e3464bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/450/format/webp)

图4

直到Finish完成安装。

打开控制命令行程序（CMD）,检查是否正常



![img](https:////upload-images.jianshu.io/upload_images/11329965-fb027342d30fdb7c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/766/format/webp)

图5

#### **使用淘宝****NPM** **镜像** 

大家都知道国内直接使用npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

$  npm  install  -g  cnpm  --registry=https://registry.npm.taobao.org

这样就可以使用cnpm 命令来安装模块了：



## 第二步项目初始化

1.第一步：安装vue-cli

cnpm install vue-cli -g       //全局安装 vue-cli



![img](https:////upload-images.jianshu.io/upload_images/11329965-094a17436eaf17f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/729/format/webp)

图6

查看vue-cli是否成功，不能检查vue-cli,需要检查vue

如果安装完成后执行 上面的cnpm 或者  vue 命令显示 并不是系统命令时，就得去配置环境变量了。

执行npm config get prefix 查看文件下载路径在哪里，复制下面的路径，然后找到系统变量path，

新建一个，将路径复制进去，既可完成。



![img](https:////upload-images.jianshu.io/upload_images/11329965-ae7cd3b0e279c411.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/822/format/webp)

图7

选定路径，新建vue项目，这里我是在桌面上新建了sun文件夹，cd目录路径

下面我一项目名为sell新建vue项目

vue init webpack   ”项目名称“



![img](https:////upload-images.jianshu.io/upload_images/11329965-88a69349b40ee7fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/937/format/webp)

图8

现在已经创建好了，那就让项目先安装下依赖再运行一下，会出现下面的页面，操作指令是：

cnpm install

cnpm run dev

注意 这里要在sell下进行安装和运行哦!!!



![img](https:////upload-images.jianshu.io/upload_images/11329965-50edf57d11e52e8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/911/format/webp)

图9

啦啦啦  安装成功。



![img](https:////upload-images.jianshu.io/upload_images/11329965-294736ff74303070.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)

图10

利用vue-cil初始化构建vue项目，我们会获得一个初始化的文件夹结构，如下：





![img](https:////upload-images.jianshu.io/upload_images/11329965-3bea73f6363501a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/739/format/webp)

图11

下面开始进入你的vue之旅吧！！

https://cn.vuejs.org/                     //官网才是开始的必经之路。。。。