(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{482:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"树形字典过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#树形字典过滤器"}},[t._v("#")]),t._v(" 树形字典过滤器")]),t._v(" "),s("h2",{attrs:{id:"通过code返回label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过code返回label"}},[t._v("#")]),t._v(" 通过code返回label")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @description: getTreeLabelByCode\n * @param {*} val 数据值\n * @param {*} type 字典类型\n * @param {*} defaultVal 展示默认值\n * @param {*} formatFun 对展示值进行方法格式化\n * @param {*} setting 设置，字段同字典包配置中的 treeSetting\n * @return {*} "350624"  =》 "福建省/漳州市/诏安县"\n * @author: syx\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTreeLabelByCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formatFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"通过label返回code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过label返回code"}},[t._v("#")]),t._v(" 通过label返回code")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @description: getTreeCodeByLabel\n * @param {*} val 数据值\n * @param {*} type 字典类型\n * @param {*} defaultVal 展示默认值\n * @param {*} formatFun 对展示值进行方法格式化\n * @param {*} setting 设置，字段同字典包配置中的 treeSetting\n * @return {*} "诏安县" => "35000/350600/350624"\n * @author: syx\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTreeCodeByLabel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formatFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"通过codes返回label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过codes返回label"}},[t._v("#")]),t._v(" 通过codes返回label")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @description: getTreeLabelByCodes\n * @param {*} vals 数据值\n * @param {*} type 字典类型\n * @param {*} defaultVal 展示默认值\n * @param {*} formatFunIn 对里面的数组进行方法格式化\n * @param {*} setting 设置，字段同字典包配置中的 treeSetting\n * @param {*} formatFunOut 对外面的数组进行方法格式化\n * @param {*} spacer 数据值间隔符\n * @return {*} "350624,350600" => "福建省/漳州市/诏安县,福建省/漳州市"\n * @author: syx\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTreeLabelByCodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formatFunIn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formatFunOut"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" spacer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"通过labels返回code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过labels返回code"}},[t._v("#")]),t._v(" 通过labels返回code")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @description: getTreeCodeByLabels\n * @param {*} vals 数据值\n * @param {*} type 字典类型\n * @param {*} defaultVal 展示默认值\n * @param {*} formatFunIn 对里面的数组进行方法格式化\n * @param {*} setting 设置，字段同字典包配置中的 treeSetting\n * @param {*} formatFunOut 对外面的数组进行方法格式化\n * @param {*} spacer 数据值间隔符\n * @return {*} "诏安县,漳州市" => "35000/350600/350624,35000/350600"\n * @author: syx\n */')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTreeCodeByLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formatFunIn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" formatFunOut"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" spacer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);