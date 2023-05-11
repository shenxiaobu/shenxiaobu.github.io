import{d as u,r as i,b as c,o as T,e as f,f as e,w as t,g as n,k as E,t as w}from"./index-32b2178c.js";const P={ref:"container",class:"el-table-colmun-dict"},g=n("div",{class:"title"},"基础用法",-1),V=n("div",{class:"title"},"设置默认值",-1),C=n("div",{class:"title"},"其他用法",-1),O=u({__name:"el-table-column-dict",setup(N){const s=i([{name:"沈小布",idCard:"350624202201011314",phone:"18851314520",type:"001",birthday:"2022-01-01 12:22:22",address:"宁夏回族自治区闽宁镇金滩村520街道1314号",code:"12345678901234567890",areaCode:"350600"},{name:"邱哞哞",idCard:"350624202201015200",phone:"18855201314",type:"003",birthday:"2022-01-01",address:"宁夏回族自治区闽宁镇金滩村1314街道520号",code:"98765432109876543210",areaCode:"350500"}]),y=i([{name:"沈小布",idCard:"350624202201011314",phone:"18851314520",type:"001",birthday:"2022-01-01",address:"宁夏回族自治区闽宁镇金滩村520街道1314号",code:"12345678901234567890",areaCode:"350624"},{name:"",idCard:"",phone:"",type:"",birthday:"",address:"",areaCode:"",code:""}]),m=i([{type1:"001",type2:"002,003",type3:"002,003,004"},{type1:"001",type2:"002,004",type3:"001,003,005"}]),b=i([{type1:["001"],type2:["002","003"],type3:["002","003","004"]},{type1:["001"],type2:["002","004"],type3:["001","003","005"]}]),p=i([{type1:"001",type2:"002|003",type3:"002|003|004"},{type1:"001",type2:"002|004",type3:"001|003|005"}]),l=r=>r.map(o=>o.label).join("/");return(r,o)=>{const a=c("el-table-column-dict",!0),d=c("el-table");return T(),f("div",P,[g,e(d,{data:s.value},{default:t(()=>[e(a,{align:"center",maskType:"name",prop:"name",label:"姓名","min-width":"100"},{header:t(({column:h,$index:_})=>[E(w(_+","+h.label),1)]),_:1}),e(a,{align:"center",maskType:"idCard",prop:"idCard",label:"身份证号","min-width":"150"}),e(a,{align:"center",maskType:"mobile",prop:"phone",label:"手机号","min-width":"100"}),e(a,{align:"center",dictType:"PERSON_TYPE",prop:"type",label:"人员类型","min-width":"150"}),e(a,{align:"center",dictTreeType:"area",prop:"areaCode",label:"所属地区","min-width":"150"}),e(a,{align:"center",dateFormat:"yy:MM",prop:"birthday",label:"出生日期","min-width":"100"}),e(a,{maskType:"address",prop:"address",label:"出生地","min-width":"150"}),e(a,{align:"center",maskStart:4,desensitizationPlaceholder:5,maskEnd:4,prop:"code",label:"统一信用代码","min-width":"150"})]),_:1},8,["data"]),V,e(d,{data:y.value},{default:t(()=>[e(a,{defaultVal:"张三",align:"center",desensitization:"name",prop:"name",label:"姓名","min-width":"100"}),e(a,{defaultVal:"还没入户",align:"center",desensitization:"idCard",prop:"idCard",label:"身份证号","min-width":"150"}),e(a,{defaultVal:"没手机",align:"center",desensitization:"mobile",prop:"phone",label:"手机号","min-width":"100"}),e(a,{defaultVal:"不知道啥类型",align:"center",dictType:"PERSON_TYPE",prop:"type",label:"人员类型","min-width":"150"}),e(a,{defaultVal:"不知道啥地区",align:"center",dictTreeType:"area",prop:"areaCode",label:"所属地区","min-width":"150"}),e(a,{defaultVal:"无人知晓",align:"center",dateFormat:"yyyy:MM:dd",prop:"birthday",label:"出生日期","min-width":"100"}),e(a,{defaultVal:"未知",desensitization:"address",prop:"address",label:"出生地","min-width":"150"}),e(a,{defaultVal:"这家伙没企业",align:"center",maskStart:1,maskMiddle:2,maskEnd:3,prop:"code",label:"统一信用代码","min-width":"150"})]),_:1},8,["data"]),C,e(d,{data:m.value},{default:t(()=>[e(a,{defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type1",label:"人员类型1","min-width":"150"}),e(a,{defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type2",label:"人员类2","min-width":"300"}),e(a,{defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type3",label:"人员类型3","min-width":"450"})]),_:1},8,["data"]),e(d,{data:b.value},{default:t(()=>[e(a,{formatFun:l,defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type1",label:"人员类型1","min-width":"150"}),e(a,{formatFun:l,defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type2",label:"人员类2","min-width":"300"}),e(a,{formatFun:l,defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type3",label:"人员类型3","min-width":"450"})]),_:1},8,["data"]),e(d,{data:p.value},{default:t(()=>[e(a,{spacer:"|",defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type1",label:"人员类型1","min-width":"150"}),e(a,{spacer:"|",defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type2",label:"人员类2","min-width":"300"}),e(a,{spacer:"|",defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type3",label:"人员类型3","min-width":"450"})]),_:1},8,["data"]),e(d,{data:p.value},{default:t(()=>[e(a,{formatFun:l,spacer:"|",defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type1",label:"人员类型1","min-width":"150"}),e(a,{formatFun:l,spacer:"|",defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type2",label:"人员类2","min-width":"300"}),e(a,{formatFun:l,spacer:"|",defaultVal:"未知",align:"center",dictType:"PERSON_TYPE",prop:"type3",label:"人员类型3","min-width":"450"})]),_:1},8,["data"])],512)}}});export{O as default};
