(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{489:function(e,i,t){},518:function(e,i,t){"use strict";t(489)},529:function(e,i,t){"use strict";t.r(i);t(31),t(236);var n={name:"demo-container",props:{src:{type:String}},data:function(){return{show:!0}},beforeCreate:function(){this.show=!0},created:function(){var e=this;this.$once("hook:beforeDestroy",(function(){window.removeEventListener("message",e.iframeEventListener)})),window.addEventListener("message",this.iframeEventListener)},methods:{iframeEventListener:function(e){var i=e.data;(console.log("🚀 ~ file: demo-container.vue ~ line 45 ~ iframeEventListener ~ data",i),i.demoContainerHeight)&&(this.$refs.demoContainer.style.height=i.demoContainerHeight+"px")},load:function(){this.show=!1},isMobile:function(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}}},s=(t(518),t(2)),o=Object(s.a)(n,(function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"demo-container"},[i("iframe",{ref:"demoContainer",staticClass:"iframe",attrs:{width:"100%",src:this.src},on:{load:this.load}}),this._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],attrs:{id:"loading-mask-mobile"}},[this._m(0)])])}),[function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"loading-wrapper"},[i("span",{staticClass:"loading-dot loading-dot-spin"},[i("i"),this._v(" "),i("i"),this._v(" "),i("i"),this._v(" "),i("i")])])}],!1,null,"2f687fe8",null);i.default=o.exports}}]);