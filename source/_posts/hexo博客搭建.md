---
title: hexo博客搭建
date: 2019-03-05 10:45:39
categories: 日常记录
tags: 
	- hexo
	- blog
	- NexT
---

### hexo博客搭建

1. 安装Git
2. 安装Node.js
3. 安装Hexo
4. Hexo博客初始化
5. Hexo博客部署到GitHub
6. 备份博客源文件
7. 拓展
   1. 更换hexo主题
   2. 修改站点语言
   3. 开启搜索，字数统计和阅读时长统计
   4. 添加分类和标签
   5. 更换页面菜单布局位置
   6. 配置文章浏览量
   7. 插入本地图片
   8. 设置动态背景
   9. 添加Fork me on GitHub
   10. 添加友情链接
   11. 设置阅读全文

# 1.安装Git

Git是目前世界上最先进的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。也就是用来管理你的hexo博客文章，上传到GitHub的工具。Git非常强大，我觉得建议每个人都去了解一下。廖雪峰老师的Git教程写的非常好，大家可以了解一下。[Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

windows：到git官网上下载,[Download git](https://gitforwindows.org/),下载后会有一个Git Bash的命令行工具，以后就用这个工具来使用git。

linux：对linux来说实在是太简单了，因为最早的git就是在linux上编写的，只需要一行代码

`sudo apt-get install git`

安装好后，用`git --version` 来查看一下版本

```
xiaobu@DESKTOP-P7959T8 MINGW64 /f/blog/myblog
$ git --version
git version 2.21.0.windows.1
```

# 2.安装Nodejs

Hexo是基于nodeJS编写的，所以需要安装一下nodeJs和里面的npm工具。[点击下载nodejs](<https://nodejs.org/en/>)

windows：nodejs选择LTS版本就行了。

linux：

```
sudo apt-get install nodejs
sudo apt-get install npm
```

安装完后，打开命令行

node -v
npm -v

检查一下有没有安装成功

```
xiaobu@DESKTOP-P7959T8 MINGW64 /f/blog/myblog
$ node -v
v8.11.4

xiaobu@DESKTOP-P7959T8 MINGW64 /f/blog/myblog
$ npm -v
5.6.0

```

## 3.安装hexo

前面git和nodejs安装好后，就可以安装hexo了，你可以先创建一个文件夹blog，然后`cd`到这个文件夹下（或者在这个文件夹下直接右键git bash打开）。

输入命令

`npm install -g hexo-cli`

依旧用`hexo -v`查看一下版本

```
xiaobu@DESKTOP-P7959T8 MINGW64 /f/blog/myblog
$ hexo -v
hexo: 3.8.0
hexo-cli: 1.1.0
os: Windows_NT 10.0.10240 win32 x64
http_parser: 2.8.0
node: 8.11.4
v8: 6.2.414.54
uv: 1.19.1
zlib: 1.2.11
ares: 1.10.1-DEV
modules: 57
nghttp2: 1.32.0
napi: 3
openssl: 1.0.2p
icu: 60.1
unicode: 10.0
cldr: 32.0
tz: 2017c
```

至此就全部安装完了。

接下来初始化一下hexo

`hexo init myblog`

这个myblog可以自己取什么名字都行，然后

```
cd myblog //进入这个myblog文件夹
npm install
```

新建完成后，指定文件夹目录下有：

- node_modules: 依赖包
- public：存放生成的页面
- scaffolds：生成文章的一些模板
- source：用来存放你的文章
- themes：主题
- ** _config.yml: 博客的配置文件**

```
hexo g
hexo server
```

打开hexo的服务，在浏览器输入localhost:4000就可以看到你生成的博客了。

大概长这样：

![blockchain](http://ww1.sinaimg.cn/large/d40b6c29gy1fvrksvj6e0j211c0f2n60.jpg)

使用ctrl+c可以把服务关掉。

## 4.GitHub创建个人仓库

首先，你先要有一个GitHub账户，去注册一个吧。

注册完登录后，在GitHub.com中看到一个New repository，新建仓库

![blockchain](http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstcm7ej20ei0c1aah.jpg )

创建一个和你用户名相同的仓库，[后面加.github.io](http://xn--yfr16an19l.github.io/)，只有这样，将来要部署到GitHub page的时候，才会被识别，[也就是xxxx.github.io](http://xn--xxxx-4m5f354ev5p.github.io/)，其中xxx就是你注册GitHub的用户名。我这里是已经建过了。

![](http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstusrdj20iw0o4myp.jpg)

点击create repository。

## 5生成SSH添加到GitHub

回到你的git bash中，

```
git config --global user.name "yourname"
git config --global user.email "youremail"
```

这里的yourname输入你的GitHub用户名，youremail输入你GitHub的邮箱。这样GitHub才能知道你是不是对应它的账户。

可以用以下两条，检查一下你有没有输对

```
git config user.name
git config user.email
```

然后创建SSH,一路回车

```
ssh-keygen -t rsa -C "youremail"
```

这个时候它会告诉你已经生成了.ssh的文件夹。在你的电脑中找到这个文件夹。

![](http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstd106j20kb073gll.jpg)

ssh，简单来讲，就是一个秘钥，其中，id_rsa是你这台电脑的私人秘钥，不能给别人看的，id_rsa.pub是公共秘钥，可以随便给别人看。把这个公钥放在GitHub上，这样当你链接GitHub自己的账户时，它就会根据公钥匹配你的私钥，当能够相互匹配时，才能够顺利的通过git上传你的文件到GitHub上。

而后在GitHub的setting中，找到SSH keys的设置选项，点击New SSH key

把你的id_rsa.pub里面的信息复制进去。

![](http://ww1.sinaimg.cn/large/d40b6c29gy1fvrkstdifaj210s0gfjrz.jpg)

## 6.将hexo部署到GitHub

这一步，我们就可以将hexo和GitHub关联起来，也就是将hexo生成的文章部署到GitHub上，打开站点配置文件 `_config.yml`，翻到最后，修改为
YourgithubName就是你的GitHub账户

```
deploy:
  type: git
  repo: https://github.com/YourgithubName/YourgithubName.github.io.git
  branch: master
```

这个时候需要先安装deploy-git ，也就是部署的命令,这样你才能用命令部署到GitHub。

```
npm install hexo-deployer-git --save
```

然后

```
hexo clean
hexo generate
hexo deploy
```

其中 `hexo clean`清除了你之前生成的东西，也可以不加。
`hexo generate `顾名思义,生成静态文章，可以用 `hexo g`缩写
`hexo deploy` 部署文章，可以用`hexo d `缩写

注意deploy时可能要你输入username和password。

得到下图就说明部署成功了，过一会儿就可以在`http://yourname.github.io` 这个网站看到你的博客了！！

```
Branch 'master' set up to track remote branch 'master' from 'https://github.com/shenxiaobu/shenxiaobu.github.io.git'.
INFO  Deploy done: git
```

新建一个文章

```
hexo new newpapername
```

然后在source/_post中打开markdown文件，就可以开始编辑了。当你写完的时候，再

```
hexo clean
hexo g
hexo d
```

就可以看到更新了。



## 7拓展

​	1）更换hexo主题

​	下载

​	[NexT主题](<https://github.com/theme-next/hexo-theme-next>)

解压到 F:\blog\myblog\themes

![1551756486185](C:\Users\xiaobu\AppData\Roaming\Typora\typora-user-images\1551756486185.png)

修改`F:\blog\myblog\_config.yml`配置文件

```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: hexo-theme-next-master
```

2)修改站点语言

编辑`F:\blog\myblog\_config.yml`文件

```
# Site
title: 祥你的365夜
subtitle:
description: 如果有一腔热血，又足够努力，人生最坏的结果，也不过是大器晚成而已！
keywords:
author: shenxiaobu
language: zh-CN
timezone:
```

3）开启搜索、字数统计和阅读时长统计

安装依赖hexo-symbols-count-time、hexo-generator-searchdb，安装依赖不成功时先删除D:\mytest\myhexo\node_modules文件夹，重新安装依赖

```
npm install hexo-symbols-count-time --save

npm install hexo-generator-searchdb --save
```

配置主题样式文件

进入`F:\blog\myblog\themes\hexo-theme-next-master\`文件夹，编辑_config.yml文件

```
# Local search
# Dependencies: https://github.com/theme-next/hexo-generator-searchdb
local_search:
  enable: true

# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: false
  awl: 4
  wpm: 275
```

配置站点文件

编辑`F:\blog\myblog\_config.yml`文件

```
#阅读时长和本文字数
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true

#搜索功能
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```

4）添加分类和标签

```
$ hexo new page categories

$ hexo new page tags
```

编辑`F:\blog\myblog\source\categories\index.md`

```

---
title: categories
date: 2019-01-22 16:37:58
type: "categories"   #这部分是新添加的
---
```

编辑`F:\blog\myblog\source\tags\index.md`

```

---
title: tags
date: 2019-01-22 16:38:40
type: "tags" #新添加的内容
---
```

修改菜单，添加categories和tags到主题的.config配置文件menu中

```
menu:
  home: / || home
  #about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
```

新增文章的时候，需要添加categories、tags

如

```
---
title: hexo博客搭建
date: 2019-01-23 09:07:30
categories: 日常记录
tags: 
  - hexo
  - git
  - github
  - node
  - markdown
---
```

5)更换NexT主题布局方式

进去主题里面的配置文件更改

```
# Schemes
#scheme: Muse
#scheme: Mist
scheme: Pisces
#scheme: Gemini
```

6）配置文章浏览量

注册

[https://leancloud.cn/](<https://leancloud.cn/>)

创建应用

![](https://i.imgur.com/NHal0S7.png)

创建Class

![](https://i.imgur.com/eXGym94.png)

配置web安全域名

![](https://i.imgur.com/FEbZt23.png)

获取app_id、app_key

![](https://i.imgur.com/SE6pqQj.png)



编辑`D:\blog\myblog\themes\hexo-theme-next-master\_config.yml`配置文件，填app_id

app_key;security设置为false

```
# Show number of visitors to each article.
# You can visit https://leancloud.cn get AppID and AppKey.
leancloud_visitors:
  enable: true
  app_id: BedsOkBLOBR4nM4W52xTcBhb-gzGzoHsz #<app_id>
  app_key: EEaRfb6dCMaS38laDCkSYhM9 #<app_key>
  # Dependencies: https://github.com/theme-next/hexo-leancloud-counter-security
  # If you don't care about security in leancloud counter and just want to use it directly
  # (without hexo-leancloud-counter-security plugin), set `security` to `false`.
  security: false
  betterPerformance: false
```

7）插入本地图片

安装依赖

```
npm install hexo-asset-image --save
```

编辑`D:\blog\myblog\_config.yml`配置文件

```
post_asset_folder: true
```

命令hexo new post test来生成博文时，/source/_post文件夹中除了test.md外，还有一个同名test文件夹，将需要用的图片放到该文件夹，然后在markdown上引用它，并修改路径名，如下图

### ![1551848109753](1551848109753.png)

8)设置动态背景

进入D:\blog\myblog\themes\hexo-theme-next-master\layout\文件夹，编辑_layout.swig文件，在`</body>`之前添加

```
<script type="text/javascript" src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js"></script>
```

9)添加Fork me on GitHub

进入D:\blog\myblog\themes\hexo-theme-next-master\layout\文件夹，编辑_layout.swig文件，在
`<div class="headband"></div>`下面添加选择的[图标样式代码](http://tholman.com/github-corners/)

```
<a href="https://github.com/shenxiaobu/" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
```

10）添加友情链接

方式一
进入`D:\blog\myblog\themes\hexo-theme-next-master\layout\_partials`文件夹，在`footer.swig`文件末尾追加

```
<div>友情链接：
 <a class="theme-link"  href="http://collect.w3ctrain.com/"> 前端收藏夹 </a><span>&nbsp;&nbsp;</span>
 <a class="theme-link" href="http://www.alloyteam.com/nav/"> Web前端导航 </a><span>&nbsp;&nbsp;</span>
 <a class="theme-link"  href="http://www.runoob.com/"> 菜鸟教程 </a><span>&nbsp;&nbsp;</span>
 <a class="theme-link" href="https://mccxj.github.io/"> 小毛的胡思乱想 </a><span>&nbsp;&nbsp;</span>
</div>
```

方式二
进入`D:\blog\myblog\themes\hexo-theme-next-master`文件夹，编辑`_config.yml`文件

```
# Blog rolls
links_icon: link
links_title: Links
links_layout: block
#links_layout: inline
#links:
  #Title: http://example.com
links:
  美团技术团队: https://tech.meituan.com/
  百度FEX: http://fex.baidu.com/
  淘宝FED: http://taobaofed.org/
```

11）设置阅读全文

进入`D:\blog\myblog\themes\hexo-theme-next-master`文件夹，编辑`_config.yml`文件

```
# Automatically Excerpt. Not recommend.
# Use <!-- more --> in the post to control excerpt accurately.
auto_excerpt:
  enable: true
  length: 150
```

参考：

[hexo史上最全搭建教程](https://blog.csdn.net/sinat_37781304/article/details/82729029)

[[持续更新]Hexo博客主题安装及Next主题个性化修改](https://www.lixint.me/hexo-theme-diy.html)

[小兵兵的hexo搭建](https://shenlibing.github.io/myhexo/2019/01/23/hexo%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/#more)