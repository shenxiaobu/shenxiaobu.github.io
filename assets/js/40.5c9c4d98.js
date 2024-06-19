(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{755:function(e,v,_){"use strict";_.r(v);var t=_(2),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"vue项目的模式和环境变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue项目的模式和环境变量"}},[e._v("#")]),e._v(" vue项目的模式和环境变量"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F%E5%92%8C%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[e._v("#")]),e._v(" 模式"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),_("OutboundLink")],1)]),e._v(" "),_("p",[_("strong",[e._v("模式")]),e._v("是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("development")]),e._v(" 模式用于 "),_("code",[e._v("vue-cli-service serve")])]),e._v(" "),_("li",[_("code",[e._v("test")]),e._v(" 模式用于 "),_("code",[e._v("vue-cli-service test:unit")])]),e._v(" "),_("li",[_("code",[e._v("production")]),e._v(" 模式用于 "),_("code",[e._v("vue-cli-service build")]),e._v(" 和 "),_("code",[e._v("vue-cli-service test:e2e")])])]),e._v(" "),_("p",[e._v("你可以通过传递 "),_("code",[e._v("--mode")]),e._v(" 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("vue-cli-service build --mode development\n")])])]),_("p",[e._v("当运行 "),_("code",[e._v("vue-cli-service")]),e._v(" 命令时，所有的环境变量都从对应的"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("环境文件"),_("OutboundLink")],1),e._v("中载入。如果文件内部不包含 "),_("code",[e._v("NODE_ENV")]),e._v(" 变量，它的值将取决于模式，例如，在 "),_("code",[e._v("production")]),e._v(" 模式下被设置为 "),_("code",[e._v('"production"')]),e._v("，在 "),_("code",[e._v("test")]),e._v(" 模式下被设置为 "),_("code",[e._v('"test"')]),e._v("，默认则是 "),_("code",[e._v('"development"')]),e._v("。")]),e._v(" "),_("p",[_("code",[e._v("NODE_ENV")]),e._v(" 将决定您的应用运行的模式，是开发，生产还是测试，因此也决定了创建哪种 webpack 配置。")]),e._v(" "),_("p",[e._v("例如通过将 "),_("code",[e._v("NODE_ENV")]),e._v(" 设置为 "),_("code",[e._v('"test"')]),e._v("，Vue CLI 会创建一个优化过后的，并且旨在用于单元测试的 webpack 配置，它并不会处理图片以及一些对单元测试非必需的其他资源。")]),e._v(" "),_("p",[e._v("同理，"),_("code",[e._v("NODE_ENV=development")]),e._v(" 创建一个 webpack 配置，该配置启用热更新，不会对资源进行 hash 也不会打出 vendor bundles，目的是为了在开发的时候能够快速重新构建。")]),e._v(" "),_("p",[e._v("当你运行 "),_("code",[e._v("vue-cli-service build")]),e._v(" 命令时，无论你要部署到哪个环境，应该始终把 "),_("code",[e._v("NODE_ENV")]),e._v(" 设置为 "),_("code",[e._v('"production"')]),e._v(" 来获取可用于部署的应用程序。")]),e._v(" "),_("p",[e._v("NODE_ENV")]),e._v(" "),_("p",[e._v("如果在环境中有默认的 "),_("code",[e._v("NODE_ENV")]),e._v("，你应该移除它或在运行 "),_("code",[e._v("vue-cli-service")]),e._v(" 命令的时候明确地设置 "),_("code",[e._v("NODE_ENV")]),e._v("。")]),e._v(" "),_("wap-feed-baidu-ad"),e._v(" "),_("h2",{attrs:{id:"环境变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[e._v("#")]),e._v(" 环境变量"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),_("OutboundLink")],1)]),e._v(" "),_("p",[e._v("你可以在你的项目根目录中放置下列文件来指定环境变量：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v(".env                # 在所有的环境中被载入\n.env.local          # 在所有的环境中被载入，但会被 git 忽略\n.env.[mode]         # 只在指定的模式中被载入\n.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略\n")])])]),_("p",[e._v("一个环境文件只包含环境变量的“键=值”对：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("FOO=bar\nVUE_APP_NOT_SECRET_CODE=some_value\n")])])]),_("p",[e._v("警告")]),e._v(" "),_("p",[e._v("不要在你的应用程序中存储任何机密信息（例如私有 API 密钥）！")]),e._v(" "),_("p",[e._v("环境变量会随着构建打包嵌入到输出代码，意味着任何人都有机会能够看到它。")]),e._v(" "),_("p",[e._v("请注意，只有 "),_("code",[e._v("NODE_ENV")]),e._v("，"),_("code",[e._v("BASE_URL")]),e._v(" 和以 "),_("code",[e._v("VUE_APP_")]),e._v(" 开头的变量将通过 "),_("code",[e._v("webpack.DefinePlugin")]),e._v(" 静态地嵌入到"),_("em",[e._v("客户端侧")]),e._v("的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。")]),e._v(" "),_("p",[e._v("想要了解解析环境文件规则的细节，请参考 "),_("a",{attrs:{href:"https://github.com/motdotla/dotenv#rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotenv"),_("OutboundLink")],1),e._v("。我们也使用 "),_("a",{attrs:{href:"https://github.com/motdotla/dotenv-expand",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotenv-expand"),_("OutboundLink")],1),e._v(" 来实现变量扩展 (Vue CLI 3.5+ 支持)。例如：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("FOO=foo\nBAR=bar\n\nCONCAT=$FOO$BAR # CONCAT=foobar\n")])])]),_("p",[e._v("被载入的变量将会对 "),_("code",[e._v("vue-cli-service")]),e._v(" 的所有命令、插件和依赖可用。")]),e._v(" "),_("p",[e._v("环境文件加载优先级")]),e._v(" "),_("p",[e._v("为一个特定模式准备的环境文件 (例如 "),_("code",[e._v(".env.production")]),e._v(") 将会比一般的环境文件 (例如 "),_("code",[e._v(".env")]),e._v(") 拥有更高的优先级。")]),e._v(" "),_("p",[e._v("此外，Vue CLI 启动时已经存在的环境变量拥有最高优先级，并不会被 "),_("code",[e._v(".env")]),e._v(" 文件覆写。")]),e._v(" "),_("p",[_("code",[e._v(".env")]),e._v(" 环境文件是通过运行 "),_("code",[e._v("vue-cli-service")]),e._v(" 命令载入的，因此环境文件发生变化，你需要重启服务。")]),e._v(" "),_("h2",{attrs:{id:"示例-staging-模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例-staging-模式"}},[e._v("#")]),e._v(" 示例：Staging 模式"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%A4%BA%E4%BE%8B%EF%BC%9Astaging-%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),_("OutboundLink")],1)]),e._v(" "),_("p",[e._v("假设我们有一个应用包含以下 "),_("code",[e._v(".env")]),e._v(" 文件：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("VUE_APP_TITLE=My App\n")])])]),_("p",[e._v("和 "),_("code",[e._v(".env.staging")]),e._v(" 文件：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("NODE_ENV=production\nVUE_APP_TITLE=My App (staging)\n")])])]),_("ul",[_("li",[_("code",[e._v("vue-cli-service build")]),e._v(" 会加载可能存在的 "),_("code",[e._v(".env")]),e._v("、"),_("code",[e._v(".env.production")]),e._v(" 和 "),_("code",[e._v(".env.production.local")]),e._v(" 文件然后构建出生产环境应用。")]),e._v(" "),_("li",[_("code",[e._v("vue-cli-service build --mode staging")]),e._v(" 会在 staging 模式下加载可能存在的 "),_("code",[e._v(".env")]),e._v("、"),_("code",[e._v(".env.staging")]),e._v(" 和 "),_("code",[e._v(".env.staging.local")]),e._v(" 文件然后构建出生产环境应用。")])]),e._v(" "),_("p",[e._v("这两种情况下，根据 "),_("code",[e._v("NODE_ENV")]),e._v("，构建出的应用都是生产环境应用，但是在 staging 版本中，"),_("code",[e._v("process.env.VUE_APP_TITLE")]),e._v(" 被覆写成了另一个值。")]),e._v(" "),_("h2",{attrs:{id:"在客户端侧代码中使用环境变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在客户端侧代码中使用环境变量"}},[e._v("#")]),e._v(" 在客户端侧代码中使用环境变量"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),_("OutboundLink")],1)]),e._v(" "),_("p",[e._v("只有以 "),_("code",[e._v("VUE_APP_")]),e._v(" 开头的变量会被 "),_("code",[e._v("webpack.DefinePlugin")]),e._v(" 静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("console.log(process.env.VUE_APP_SECRET)\n")])])]),_("p",[e._v("在构建过程中，"),_("code",[e._v("process.env.VUE_APP_SECRET")]),e._v(" 将会被相应的值所取代。在 "),_("code",[e._v("VUE_APP_SECRET=secret")]),e._v(" 的情况下，它会被替换为 "),_("code",[e._v('"secret"')]),e._v("。")]),e._v(" "),_("p",[e._v("除了 "),_("code",[e._v("VUE_APP_*")]),e._v(" 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("NODE_ENV")]),e._v(" - 会是 "),_("code",[e._v('"development"')]),e._v("、"),_("code",[e._v('"production"')]),e._v(" 或 "),_("code",[e._v('"test"')]),e._v(" 中的一个。具体的值取决于应用运行的"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("模式"),_("OutboundLink")],1),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("BASE_URL")]),e._v(" - 会和 "),_("code",[e._v("vue.config.js")]),e._v(" 中的 "),_("code",[e._v("publicPath")]),e._v(" 选项相符，即你的应用会部署到的基础路径。")])]),e._v(" "),_("p",[e._v("所有解析出来的环境变量都可以在 "),_("code",[e._v("public/index.html")]),e._v(" 中以 "),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E6%8F%92%E5%80%BC",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML 插值"),_("OutboundLink")],1),e._v("中介绍的方式使用。")]),e._v(" "),_("p",[e._v("提示")]),e._v(" "),_("p",[e._v("你可以在 "),_("code",[e._v("vue.config.js")]),e._v(" 文件中计算环境变量。它们仍然需要以 "),_("code",[e._v("VUE_APP_")]),e._v(" 前缀开头。这可以用于版本信息:")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("process.env.VUE_APP_VERSION = require('./package.json').version\n\nmodule.exports = {\n  // config\n}\n")])])]),_("h2",{attrs:{id:"只在本地有效的变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#只在本地有效的变量"}},[e._v("#")]),e._v(" 只在本地有效的变量"),_("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%8F%AA%E5%9C%A8%E6%9C%AC%E5%9C%B0%E6%9C%89%E6%95%88%E7%9A%84%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("#"),_("OutboundLink")],1)]),e._v(" "),_("p",[e._v("有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 "),_("code",[e._v(".env.local")]),e._v(" 文件取而代之。本地环境文件默认会被忽略，且出现在 "),_("code",[e._v(".gitignore")]),e._v(" 中。")]),e._v(" "),_("p",[_("code",[e._v(".local")]),e._v(" 也可以加在指定模式的环境文件上，比如 "),_("code",[e._v(".env.development.local")]),e._v(" 将会在 development 模式下被载入，且被 git 忽略。")])],1)}),[],!1,null,null,null);v.default=a.exports}}]);