(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{555:function(t,e,s){"use strict";s.r(e);var a=s(2),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("vue-elment-dict是一款基于elment组件库升级后形成的一个字典包。能够让您的项目经过一次配置，后续使用简单。"),s("RouterLink",{attrs:{to:"/guide/fast/"}},[t._v("快速开始>>")])],1),t._v(" "),s("h2",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ol",[s("li",[t._v("配置项多，更灵活，减少对后端开发人员的依赖")]),t._v(" "),s("li",[t._v("可用组件多，很多组件（包含联级选项和树菜单组件）均可直接使用")]),t._v(" "),s("li",[t._v("全局过滤器多，使用简单，提升效率")]),t._v(" "),s("li",[t._v("全局方法多，实用")]),t._v(" "),s("li",[t._v("性能优越，对于同个字典类型的请求，同时只会请求一次")]),t._v(" "),s("li",[t._v("适用场景多，嵌套iframe业务功能页也可使用")]),t._v(" "),s("li",[t._v("可配置版本，实现字典数据自动更新")]),t._v(" "),s("li",[t._v("使用缓存，减少请求，提升性能。")]),t._v(" "),s("li",[t._v("也可配置本地固定字典数据")]),t._v(" "),s("li",[t._v("补充解决element的message消息提示框的不足")]),t._v(" "),s("li",[t._v("暴露防止重复请求封装方法，使用后可减少请求")])]),t._v(" "),s("h2",{attrs:{id:"项目依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目依赖"}},[t._v("#")]),t._v(" 项目依赖")]),t._v(" "),s("ol",[s("li",[t._v("element部分组件")]),t._v(" "),s("li",[t._v("day.js")])]),t._v(" "),s("h2",{attrs:{id:"后端字典接口要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端字典接口要求"}},[t._v("#")]),t._v(" 后端字典接口要求")]),t._v(" "),s("p",[s("strong",[t._v("可以请求单个或多个甚至全部字典类型数据")])]),t._v(" "),s("p",[t._v("注意：此字典包可以对接口数据和接口请求进行配置，但是为了减少配置，后端尽可能按此包默认形式返回对前端更加友好。具体请求格式可以参照。"),s("RouterLink",{attrs:{to:"/guide/directory-structure/"}},[t._v("目录结构>>")]),t._v("中 模拟接口请求的形式。具体如下：")],1),t._v(" "),s("ol",[s("li",[t._v('默认请求参数： {type: ""} type为空返回全部字典值')]),t._v(" "),s("li",[t._v('获取多个字典 请求参数 {type: "AAC004,AAC005"} 英文逗号隔开')])]),t._v(" "),s("p",[t._v("如果接口与字典包不符，可参照"),s("RouterLink",{attrs:{to:"/guide/config/"}},[t._v("字典包配置项>>")])],1),t._v(" "),s("wap-feed-baidu-ad"),t._v(" "),s("h2",{attrs:{id:"暴露的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暴露的方法"}},[t._v("#")]),t._v(" 暴露的方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("dayFormat                日期格式化\ndesensitization          数据脱敏\ngetCodeByLabel           根据字典中文返回字典值\ngetCodeByLabels          根据多个字典中文返回多个字典值\ngetDictObjByDictTypes    通过字典类型查询字典类型数据\ngetLabelByCode           根据字典值返回字典中文\ngetLabelByCodes          根据多个字典值返回多个字典中文\ngetTreeCodeByLabel       树形数据根据字典中文返回字典值\ngetTreeCodeByLabels      树形数据根据多个字典中文返回多个字典值\ngetTreeLabelByCode       树形数据根据字典值返回字典中文\ngetTreeLabelByCodes      树形数据根据多个字典值返回多个字典中文\nmessage                  message方法，与element的message使用方法一致，弥补其不足\nrequest                  暴露防止重复请求的方法  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("以上方法均被字典包自动挂载到Vue实例，在页面上可直接使用this.$方法名调用。新增的方法不要与之冲突。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("对于无法使用this调用的地方，可以使用按需加载的方式")]),t._v(" "),s("p",[t._v('import {方法名} from "vue-element-dict"')]),t._v(" "),s("p",[t._v('const {方法名} = require("vue-element-dict")')]),t._v(" "),s("p",[t._v("以上两种方式均可")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("vue-elment-dict 真香，使用后大家都说好，更多经验分享可关注微信公众号【爆米花小布】")])],1)}),[],!1,null,null,null);e.default=v.exports}}]);