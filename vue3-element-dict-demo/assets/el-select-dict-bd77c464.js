import{d as b,r as o,b as _,o as y,e as g,f as u,g as s}from"./index-0dfc4819.js";const C={class:"el-select-dict"},D=s("div",{class:"title"},"基础用法",-1),N=s("div",{class:"title"},"过滤数据",-1),O=s("div",{class:"title"},"禁用数据",-1),S=s("div",{class:"title"},"配置keyValue及赋值",-1),U=b({__name:"el-select-dict",setup(f){const d=o(""),i=o(""),v=o(""),c=o(""),m=o(""),r=o("001"),p=o({value:"001",label:"企业法人"}),V=o(["001","002"]),E=o([{value:"001",label:"企业法人"},{value:"002",label:"社团法人"}]),a=n=>{console.log("🚀 ~ file: App.vue:5 ~ dictChange ~ val:",n)},P=n=>n.filter(e=>e.value==="001"||e.value==="002"),T=n=>n.map(e=>({...e,disabled:e.value==="001"||e.value==="002"}));return(n,e)=>{const t=_("el-select-dict",!0);return y(),g("div",C,[D,u(t,{onDictChange:a,clearable:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),u(t,{onDictChange:a,clearable:"",modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),N,u(t,{onDictChange:a,clearable:"",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=l=>i.value=l),dictType:{type:"PERSON_TYPE",filters:"001,002"}},null,8,["modelValue"]),u(t,{onDictChange:a,clearable:"",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=l=>v.value=l),filterDataFun:P,dictType:"PERSON_TYPE"},null,8,["modelValue"]),O,u(t,{onDictChange:a,dictType:"PERSON_TYPE",clearable:"",modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=l=>c.value=l),disableObj:{disableValue:"001,002"}},null,8,["modelValue"]),u(t,{onDictChange:a,dictType:"PERSON_TYPE",disabledDataFun:T,clearable:"",modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=l=>m.value=l)},null,8,["modelValue"]),S,u(t,{onDictChange:a,clearable:"",modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=l=>r.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),u(t,{onDictChange:a,keyValue:!0,clearable:"",modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=l=>p.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),u(t,{onDictChange:a,multiple:"",clearable:"",modelValue:V.value,"onUpdate:modelValue":e[8]||(e[8]=l=>V.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),u(t,{onDictChange:a,multiple:"",keyValue:!0,clearable:"",modelValue:E.value,"onUpdate:modelValue":e[9]||(e[9]=l=>E.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"])])}}});export{U as default};