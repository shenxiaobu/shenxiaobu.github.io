(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{488:function(t,e,s){},517:function(t,e,s){t.exports=s.p+"assets/img/qr_code.e6554caa.png"},518:function(t,e,s){"use strict";s(488)},528:function(t,e,s){"use strict";s.r(e);s(6),s(9),s(10),s(31),s(236);var n={name:"AdvertisementOne",data:function(){return{flutter:null,isCreated:!0}},mounted:function(){var t=this;Promise.all([s.e(0),s.e(2)]).then(s.bind(null,527)).then((function(e){t.flutter=e.default}))},methods:{isMobile:function(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},close:function(){this.$refs.flutter.close()}},deactivated:function(){this.isCreated=!1,this.$refs.flutter&&this.$refs.flutter.stop()},activated:function(){!this.isCreated&&this.$refs.flutter&&this.$refs.flutter.start()}},i=(s(518),s(2)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.flutter?n(t.flutter,{ref:"flutter",tag:"component",staticClass:"flutter",attrs:{jumpStepY:t.isMobile()?5:10,jumpStepX:t.isMobile()?5:10,startPos:"leftCenter"},scopedSlots:t._u([{key:"flutter",fn:function(){return[n("div",{class:["advertisement-box",t.isMobile()?"mobile":""]},[n("i",{staticClass:"close el-icon-circle-close",on:{click:t.close}}),t._v(" "),n("img",{ref:"advertisementOne",staticClass:"qr-code",attrs:{src:s(517),alt:""}})])]},proxy:!0}],null,!1,591778163)}):t._e()}),[],!1,null,"df5ba882",null);e.default=r.exports}}]);