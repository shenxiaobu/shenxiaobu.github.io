---
title: hexo拓展补充
date: 2019-08-03 08:39:55
tags:
	- hexo
---

### git分支进行多终端工作
问题来了，如果你现在在自己的笔记本上写的博客，部署在了网站上，那么你在家里用台式机，或者实验室的台式机，发现你电脑里面没有博客的文件，或者要换电脑了，最后不知道怎么移动文件，怎么办？

在这里我们就可以利用git的分支系统进行多终端工作了，这样每次打开不一样的电脑，只需要进行简单的配置和在github上把文件同步下来，就可以无缝操作了。

机制
机制是这样的，由于hexo d上传部署到github的其实是hexo编译后的文件，是用来生成网页的，不包含源文件。



也就是上传的是在本地目录里自动生成的.deploy_git里面。

其他文件 ，包括我们写在source 里面的，和配置文件，主题文件，都没有上传到github



所以可以利用git的分支管理，将源文件上传到github的另一个分支即可。

上传分支
首先，先在github上新建一个hexo分支，如图：



然后在这个仓库的settings中，选择默认分支为hexo分支（这样每次同步的时候就不用指定分支，比较方便）。



然后在本地的任意目录下，打开git bash，

git clone git@github.com:ZJUFangzh/ZJUFangzh.github.io.git
1
将其克隆到本地，因为默认分支已经设成了hexo，所以clone时只clone了hexo。

接下来在克隆到本地的ZJUFangzh.github.io中，把除了.git 文件夹外的所有文件都删掉

把之前我们写的博客源文件全部复制过来，除了.deploy_git。这里应该说一句，复制过来的源文件应该有一个.gitignore，用来忽略一些不需要的文件，如果没有的话，自己新建一个，在里面写上如下，表示这些类型文件不需要git：

.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
![1564792983665](1564792983665.png)
注意，如果你之前克隆过theme中的主题文件，那么应该把主题文件中的.git文件夹删掉，因为git不能嵌套上传，最好是显示隐藏文件，检查一下有没有，否则上传的时候会出错，导致你的主题文件无法上传，这样你的配置在别的电脑上就用不了了。

而后

git add .
git commit –m "add branch"
git push 

这样就上传完了，可以去你的github上看一看hexo分支有没有上传上去，其中node_modules、public、db.json已经被忽略掉了，没有关系，不需要上传的，因为在别的电脑上需要重新输入命令安装 。



这样就上传完了。

更换电脑操作
一样的，跟之前的环境搭建一样，

安装git
sudo apt-get install git

设置git全局邮箱和用户名
git config --global user.name "yourgithubname"
git config --global user.email "yourgithubemail"

设置ssh key
ssh-keygen -t rsa -C "youremail"

##### 生成后填到github和coding上（有coding平台的话）

#验证是否成功
ssh -T git@github.com
ssh -T git@git.coding.net #(有coding平台的话)

安装nodejs
sudo apt-get install nodejs
sudo apt-get install npm

安装hexo
sudo npm install hexo-cli -g
1
但是已经不需要初始化了，

直接在任意文件夹下，

git clone git@………………
1
然后进入克隆到的文件夹：

cd xxx.github.io
npm install
npm install hexo-deployer-git --save

生成，部署：

hexo g
hexo d

然后就可以开始写你的新博客了

hexo new newpage

Tips:

不要忘了，每次写完最好都把源文件上传一下
git add .
git commit –m "xxxx"
git push 
1
2
3
如果是在已经编辑过的电脑上，已经有clone文件夹了，那么，每次只要和远端同步一下就行了
git pull


![1564793115523](1564793115523.png)

![1564793161213](1564793161213.png)

![1564793197592](1564793197592.png)