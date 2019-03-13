---
title: vscode编辑器自动生成代码片段
date: 2019-03-13 22:24:29
categories: 编辑器的使用
tags: -VSCode
---

#### vscode 快速生成代码片段

##### 如何快速生成代码片段

在.html结尾的文件   `!+enter ` 快速生成 html 代码片段如下,在其他类型的文件输入该命令则无效

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

##### 添加别的代码片段

> 打开vscode编辑器
>
> > 文件(File）=》首选项（Preferences）=》用户代码片段（User Snippets）
> >
> > >搜索html，打开html.json

```json
html.json文件显示如下
{
		// Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
}
```

`prefix` 表示生成对应预设代码的命令（此处设置的vh）

`$0` 表示生成代码后鼠标光标的位置

`body` 包住的内容就是代码片段的内容，每一行用双引号包住，并以逗号结尾。如需要缩进，使用tab键使代码整齐。具体如下

```json
{
	// Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "vh",
		"body": [
		"<!DOCTYPE html>",
		"<html lang='en'>",
		"	<head>",
		"		<meta charset='UTF-8'>",
		"		<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
		"		<meta http-equiv='X-UA-Compatible' content='ie=edge'>",
		"		<title>Document</title>",
		"		<script src='./lib/vue-2.4.0.js'></script>",
		"	</head>",
		"<body>",
		"	<div id='app'>",
		"		$0",
		"	</div>",
		"<script>",
		"				var vm = new Vue({",
		"					el: '#app',",
		"					data: {},",
		"					methods: {}",  
		"				});",
		"</script>",
		"</body>",
		"</html>"
		],
		"description": "Log output to console"
	}
}
```

这样就可以在 .html文件上 使用 vh+enter 就可以跳出代码块了。

测试过了

```
vh+enter   ok
Vh+enter   ok
VH+enter   ok
vH+enter   ok
结论：和大小写没关系，应该是两个变量都转化为小写再进行比较，因为我把prefix的值改为大写后，上面四个命令照样ok。
```

同理，如果想要在.vue文件使用快捷方式生成代码块，只要在用户代码块那里选择vue.json文件，在里面进行配置。

