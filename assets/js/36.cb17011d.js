(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{747:function(t,s,r){"use strict";r.r(s);var a=r(2),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vscode插件之sftp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vscode插件之sftp"}},[t._v("#")]),t._v(" vsCode插件之sftp")]),t._v(" "),r("p",[t._v("一款前端一键部署的插件")]),t._v(" "),r("h2",{attrs:{id:"sftp-自动部署步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sftp-自动部署步骤"}},[t._v("#")]),t._v(" sftp 自动部署步骤")]),t._v(" "),r("ol",[r("li",[t._v("在"),r("code",[t._v("vscode")]),t._v("扩展中搜索 "),r("code",[t._v("sftp")]),t._v(" 并下载安装")]),t._v(" "),r("li",[r("code",[t._v("F1")]),t._v("或者"),r("code",[t._v("ctrl+shift+p")]),t._v("调出命令窗口输入 "),r("code",[t._v("sftp")]),t._v(" 点击 "),r("code",[t._v("SFTP:Config")])]),t._v(" "),r("li",[t._v("编辑 "),r("code",[t._v("sftp.json")]),t._v(" 文件并保存会在当前工程下形成 "),r("code",[t._v("sftp.json")]),t._v(" 文件")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Server"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用时需要把注释去掉")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"host"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ip地址"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器ip")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"protocol"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sftp"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"port"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//端口")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"username"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户名")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"password"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"密码"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//登录密码")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"remotePath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发布路径"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代码部署路径")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uploadOnSave"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("只需要配置"),r("code",[t._v("host")]),t._v("、"),r("code",[t._v("username")]),t._v("、"),r("code",[t._v("password")]),t._v("以及 "),r("code",[t._v("remotePath")]),t._v("四个参数就可以使用了。")]),t._v(" "),r("ol",[r("li",[t._v("同步到远程")])]),t._v(" "),r("ul",[r("li",[t._v("同步全部的工程文件，可以在需要同步的文件夹上面右键：选择SFTP:Sync Local -> remote，即可同步到远程服务器。")]),t._v(" "),r("li",[t._v("同步单一的文件，在以在需要同步的文件上右键，选择Upload，即可同步到远程服务器")])]),t._v(" "),r("ol",[r("li",[t._v("完整的配置项列表,可以按需配置")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"host"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"远程ip地址"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"port"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"username"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"登录名"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"password"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"登录密码"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"protocol"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sftp"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"agent"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"privateKeyPath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"null或如果链接服务器用的不是账号密码是key文件 这里为key文件路径"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"passphrase"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"passive"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"interactiveAuth"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"remotePath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"需要打到的远程的文件夹地址"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"context"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"本地项目地址"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uploadOnSave"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"syncMode"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"ignore"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/.vscode/**"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/.git/**"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/.DS_Store"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"watcher"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"files"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"autoUpload"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"autoDelete"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("wap-feed-baidu-ad"),t._v(" "),r("h2",{attrs:{id:"配置多个-sftp-切换部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置多个-sftp-切换部署"}},[t._v("#")]),t._v(" 配置多个 sftp，切换部署")]),t._v(" "),r("ol",[r("li",[t._v("配置文件sftp.json")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaobu"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//名字  使用时需要把注释去掉")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"protocol"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sftp"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//协议  使用时需要把注释去掉")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"port"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"username"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器用户名")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "privateKeyPath": "服务器密钥文件路径",  //或者服务器密钥文件登录')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"remotePath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/charge/springboot/view/"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//部署到服务器的目录，会被profiles中的配置覆盖")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"profiles"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"test"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//sftp 的名字  当使用这个时 按下面的配置进行部署 ")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"host"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务器主机地址"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"port"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("22130")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"username"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"password"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx@1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"remotePath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/www/ylzued"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uploadOnSave"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"prod"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"host"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务器主机地址"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"port"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("22130")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"username"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"password"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx@1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"remotePath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/www/ylzued"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uploadOnSave"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("ol",[r("li",[t._v("切换部署服务 "),r("code",[t._v("ctrl + shift + p")]),t._v("打开,点击 "),r("code",[t._v("SFTP:Set Profile")]),t._v("，出现配置的列表，选择需要的服务设置（active）。")]),t._v(" "),r("li",[t._v("同步到远程")])]),t._v(" "),r("ul",[r("li",[t._v("同步全部的工程文件，可以在需要同步的文件夹上面右键：选择SFTP:Sync Local -> remote，即可同步到远程服务器。")]),t._v(" "),r("li",[t._v("同步单一的文件，在以在需要同步的文件上右键，选择Upload，即可同步到远程服务器")])])],1)}),[],!1,null,null,null);s.default=p.exports}}]);