import{d as g,r as t,l as f,n as E,b as T,o as y,e as P,f as u,g as d}from"./index-a4e1db39.js";const C=d("div",{class:"title"},"基础用法",-1),D=d("div",{class:"title"},"过滤数据",-1),R=d("div",{class:"title"},"禁用数据",-1),N=d("div",{class:"title"},"配置keyValue及赋值",-1),U=g({__name:"el-radio-button-dict",setup(O){const i=t(""),r=t(""),c=t(""),v=t(""),p=t(""),m=t("001"),V=t("001"),o=a=>{console.log("🚀 ~ file: App.vue:5 ~ dictChange ~ val:",a)},_=a=>a.filter(e=>e.value==="001"||e.value==="002"),b=a=>a.map(e=>({...e,disabled:e.value==="001"||e.value==="002"})),s=t(null);return f(async()=>{if(await E(),s.value.scrollHeight){const a={demoContainerHeight:s.value.scrollHeight+20};window.parent.postMessage(a,"*")}}),(a,e)=>{const n=T("el-radio-button-dict",!0);return y(),P("div",{class:"el-radio-button-dict",ref_key:"containerRef",ref:s},[C,u(n,{onDictChange:o,clearable:"",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),D,u(n,{onDictChange:o,size:"small",clearable:"",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=l=>r.value=l),dictType:{type:"PERSON_TYPE",filters:"001,002"}},null,8,["modelValue"]),u(n,{onDictChange:o,clearable:"",modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=l=>c.value=l),filterDataFun:_,dictType:"PERSON_TYPE"},null,8,["modelValue"]),R,u(n,{onDictChange:o,dictType:"PERSON_TYPE",clearable:"",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=l=>v.value=l),disableObj:{disableValue:"001,002"}},null,8,["modelValue"]),u(n,{onDictChange:o,dictType:"PERSON_TYPE",disabledDataFun:b,clearable:"",modelValue:p.value,"onUpdate:modelValue":e[4]||(e[4]=l=>p.value=l)},null,8,["modelValue"]),N,u(n,{onDictChange:o,clearable:"",modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=l=>m.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"]),u(n,{onDictChange:o,keyValue:!0,clearable:"",modelValue:V.value,"onUpdate:modelValue":e[6]||(e[6]=l=>V.value=l),dictType:"PERSON_TYPE"},null,8,["modelValue"])],512)}}});export{U as default};
