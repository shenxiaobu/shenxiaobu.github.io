(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModule"],{"0e2b":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'.home[data-v-6d3ce3fc],.home .search[data-v-6d3ce3fc]{width:100%}.home .content-box[data-v-6d3ce3fc]{overflow-y:auto;display:flex;flex-wrap:wrap;justify-content:space-between}.home .content-box[data-v-6d3ce3fc]:after{content:"";width:23%;margin:5px}.home .content-box .tags[data-v-6d3ce3fc]{width:23%;height:60px;line-height:60px;text-align:center;font-size:16px;font-weight:bolder;margin:5px;cursor:pointer}.home .content-box .tags[data-v-6d3ce3fc]:hover{color:#00f;font-size:22px}.home .content-box .empty-box[data-v-6d3ce3fc]{width:23%;overflow:hidden;margin:5px}',""]),e.exports=t},1259:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home flex-c-s flex-col"},[t("el-input",{staticClass:"search",attrs:{placeholder:"请输入搜索关键词"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),t("div",{staticClass:"content-box flex-grow"},[e._l(e.search(e.value),(function(a,o){return t("el-tag",{key:o,staticClass:"tags",attrs:{plain:"",type:"primary",size:"large"},on:{click:function(t){return e.go(a.path)}}},[e._v(e._s(a.meta.title))])})),t("div",{staticClass:"empty-box"})],2)],1)},n=[],r=(a("14d9"),a("ca83")),c={name:"home",data(){return{value:""}},computed:{menus(){return r["default"].options.routes.filter(e=>e.meta&&e.meta.title&&"目录"!==e.meta.title)}},methods:{go(e){this.$router.push(e)},getChildren(e){var t=[];if(Array.isArray(e))for(var a=0,o=e.length;a<o;a++){const o=e[a];t.push(o),Array.isArray(o.children)&&o.children.length>0&&(t=t.concat(this.getChildren(o.children)),o.children=[])}return t},search(e){return this.menus.filter(t=>{if(t.meta.title.includes(e))return t})}}},i=c,s=(a("6a83"),a("2877")),l=Object(s["a"])(i,o,n,!1,null,"6d3ce3fc",null);t["default"]=l.exports},1840:function(e,t,a){var o=a("0e2b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("357a7c19",o,!0,{sourceMap:!1,shadowMode:!1})},"6a83":function(e,t,a){"use strict";a("1840")}}]);
//# sourceMappingURL=commonModule.2151dbb0.js.map