---
title: 如何自如的使用npm在项目中安装和删除模块包
date: 2019-03-12 09:52:50
categories: "日常笔记"
tags: 
	- npm
---

```
npm是javascript的包管理工具，利用npm可以安装、删除、发布模块包，提高开发效率。
```

1、安装模块包
npm安装模块包的方式有两种：全局安装和本地安装

全局安装：

npm install <package-name> -g

`-g <=>  -global`

全局安装后，可以通过使用对应模块包的命令行工具执行操作命令

本地安装：

本地安装模块包的一个特点就是：在使用安装好的模块包时，需要通过require('<package-name>')来引入到项目中使用；

本地安装时还需要考虑的一个问题就是安装好模块包后，其信息是否要写入到项目package.json中？如果写，写到哪？因此，本地安装衍生出三种命令，分别为：

npm install <package-name>
安装模块包，模块包的信息不会写入到项目的package.json文件中；

npm install <package-name> --save

`--save <=>   -S`

安装模块包，并且将模块包的信息写入到项目package.json中的dependencies对象中；

npm install <package-name> --save-dev

`--save-dev <=>  -D`

安装模块包，并且将模块包的信息写入到项目package.json中的devDependencies对象中；

2、删除模块包
删除与安装相对应，也分为全局删除和本地删除

全局删除：

npm uninsatll <package-name> -g
本地删除：

对应的，本地删除也需要考虑是否再删除模块包的同时删除项目package.json中对应的信息，因此，利用npm本地删除模块包的命令也是三种，分别为：

npm uninstall <package-name>
删除模块包，对应模块包的信息不会从项目package.json文件中删除；

npm uninstall <package-name> --save
删除模块包，并且将对应的模块包信息从项目package.json的dependencies对象中删除；

npm uninstall <package-name> --save-dev
删除模块包，并且将对应的模块包信息从项目package.json的devDependencies对象中删除；

参考文献
[1] 【npm】利用npm安装/删除/发布/更新/撤销发布包
[2] npm install 时，如何只安装dependencies，而不安装devDependencies

[3] npm里我要删除一个包或者添加一个包怎么弄？

