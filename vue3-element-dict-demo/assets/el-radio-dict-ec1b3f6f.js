import{d as E,r as o,b as P,o as T,e as b,f as u,g as d}from"./index-32b2178c.js";const g={class:"el-radio-dict"},y=d("div",{class:"title"},"基础用法",-1),C=d("div",{class:"title"},"过滤数据",-1),f=d("div",{class:"title"},"禁用数据",-1),D=d("div",{class:"title"},"配置keyValue及赋值",-1),R=E({__name:"el-radio-dict",setup(N){const s=o(""),i=o(""),r=o(""),v=o(""),c=o(""),p=o("001"),m=o("001"),a=n=>{console.log("🚀 ~ file: App.vue:5 ~ dictChange ~ val:",n)},V=n=>n.filter(e=>e.value==="001"||e.value==="002"),_=n=>n.map(e=>({...e,disabled:e.value==="001"||e.value==="002"}));return(n,e)=>{const t=P("el-radio-dict",!0);return T(),b("div",g,[y,u(t,{onDictChange:a,clearable:"",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),C,u(t,{onDictChange:a,clearable:"",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l),dictType:{type:"PERSON_TYPE",filters:"001,002"}},null,8,["modelValue"]),u(t,{onDictChange:a,clearable:"",modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l),filterDataFun:V,dictType:"PERSON_TYPE"},null,8,["modelValue"]),f,u(t,{onDictChange:a,dictType:"PERSON_TYPE",clearable:"",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=l=>v.value=l),disableObj:{disableValue:"001,002"}},null,8,["modelValue"]),u(t,{onDictChange:a,dictType:"PERSON_TYPE",disabledDataFun:_,clearable:"",modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=l=>c.value=l)},null,8,["modelValue"]),D,u(t,{onDictChange:a,clearable:"",modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=l=>p.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),u(t,{onDictChange:a,keyValue:!0,clearable:"",modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=l=>m.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"])])}}});export{R as default};
