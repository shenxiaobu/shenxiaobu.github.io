import{d as m,r as x,c as g,a as k,b as r,o as c,e as d,f as b,g as u,F as y,h as V,i as C,w,p as B,j as I,u as S,k as N,t as F,_ as $}from"./index-32b2178c.js";const j=o=>(B("data-v-d4db143d"),o=o(),I(),o),z={class:"home flex-c-s flex-col"},D={class:"content-box flex-grow"},E=j(()=>u("div",{class:"empty-box"},null,-1)),L=m({__name:"home",setup(o){const _=S(),l=x(""),p=g(()=>k.options.routes.filter(e=>e.meta&&e.meta.title&&e.meta.title!=="目录")),i=e=>{_.push(e)},h=e=>p.value.filter(t=>{var a;if((a=t==null?void 0:t.meta)!=null&&a.title.includes(e))return t});return(e,t)=>{const a=r("el-input"),f=r("el-tag");return c(),d("div",z,[b(a,{class:"search",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),placeholder:"请输入搜索关键词"},null,8,["modelValue"]),u("div",D,[(c(!0),d(y,null,V(h(l.value),(s,v)=>(c(),C(f,{class:"tags",plain:"",type:"success",size:"large",onClick:n=>i(s.path),key:v},{default:w(()=>{var n;return[N(F((n=s==null?void 0:s.meta)==null?void 0:n.title),1)]}),_:2},1032,["onClick"]))),128)),E])])}}});const T=$(L,[["__scopeId","data-v-d4db143d"]]);export{T as default};
