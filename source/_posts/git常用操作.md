---
title: git常用操作
date: 2019-08-03 07:52:46
tags:
	- git
---

#### 将本地资源上传到远程库

1. 在git上创建一个库，复制库的 链接

2. 在本地目录上执行 git init  在该目录创建一个本地仓库  .git

3. 执行 touch .gitignore 创建一个 .gitignore文件，用来去除一些不想上传的文件

4. 点击.gitignore文件，编辑内容，内容大致如下

   ```
   node_modules
   .git
   .vscode
   .idea
   ```

5. 执行git remote add origin(远程库名) +刚刚复制的链接   用来创建一个连接远程库

6. 执行 git remote -v  可查看连接的远程库

7. 执行 git add .     将本地文件上传  本地电脑与 本地库的中间层  add 后面有个空格

8. 执行 git status 可查看文件的状态

9. 执行 git commit -m "备注信息" 可将中间层的文件上传到本地库

10. 执行 git push -u origin master  可将本地仓库提交到远程仓库，一般这时候会报错。

11. 因为远程仓库是新建的，会有两个readme的md文件，本地仓库没有，所以需要合并

12. 执行 git pull --rebase origin master  将远程库的资源拉取到本地仓库

13. 执行 git push -u origin master 成功将本地资源上传到远程仓库



#### 将远程仓库的文件拉取到本地电脑

1. 在一个文件目录下右键打开git  命令窗口  执行 git clone  远程仓库链接
2. 会弹出一个输入用户名和密码的界面，输入用户名和密码即可
3. 账号密码成功之后本地电脑就会有远程仓库的所有文件。