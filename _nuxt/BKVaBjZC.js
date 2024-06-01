import{u as G,_ as J}from"./eJ4I3O_2.js";import{_ as K}from"./56YALfHv.js";import{_ as F,m as N,n as b,g as z,q as U,s as k,aK as L,au as Q,v as V,x as X,y as Y,o as c,c as y,a as w,aP as Z,aQ as x,A as j,F as g,z as R,d as P,t as A,G as q,ah as ee,H as ae,I as te,j as T,w as _,aI as S,E as C,i as le,u as oe,l as f,b as m,a5 as O,a0 as re}from"./Dy5Rmzhu.js";import{_ as ne}from"./D07ZU_Dw.js";import{_ as se}from"./D4LlHP4F.js";import"./Cpj98o6Y.js";import"./DRP-CR6L.js";import"./ByEKGbNK.js";import"./TfJXsWTo.js";const ie={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},D={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-radio",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},I=N(b.ui.strategy,b.ui.radio,D),ue=z({inheritAttrs:!1,props:{id:{type:String,default:null},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>I.default.color,validator(e){return b.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:t,attrs:n}=U("radio",k(e,"ui"),I,k(e,"class")),i=e.id??L("$I9s4Agc2xw"),u=Q("radio-group",null),{emitFormChange:d,color:l,name:v}=u??G(e,I),r=V({get(){return e.modelValue},set(p){o("update:modelValue",p),u||d()}});function s(p){o("change",p.target.value)}const h=V(()=>X(Y(t.value.base,t.value.form,t.value.background,t.value.border,l.value&&t.value.ring.replaceAll("{color}",l.value),l.value&&t.value.color.replaceAll("{color}",l.value)),e.inputClass));return{inputId:i,ui:t,attrs:n,pick:r,name:v,inputClass:h,onChange:s}}}),de=["data-n-ids"],pe=["id","name","required","value","disabled"],ce=["for"];function fe(e,o,t,n,i,u){return c(),y("div",{class:g(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[w("div",{class:g(e.ui.container)},[Z(w("input",j({id:e.inputId,"onUpdate:modelValue":o[0]||(o[0]=d=>e.pick=d),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:e.inputClass},e.attrs,{onChange:o[1]||(o[1]=(...d)=>e.onChange&&e.onChange(...d))}),null,16,pe),[[x,e.pick]])],2),e.label||e.$slots.label?(c(),y("div",{key:0,class:g(e.ui.inner)},[w("label",{for:e.inputId,class:g(e.ui.label)},[R(e.$slots,"label",{},()=>[P(A(e.label),1)]),e.required?(c(),y("span",{key:0,class:g(e.ui.required)},"*",2)):q("",!0)],10,ce),e.help?(c(),y("p",{key:0,class:g(e.ui.help)},A(e.help),3)):q("",!0)],2)):q("",!0)],10,de)}const E=F(ue,[["render",fe]]),B=N(b.ui.strategy,b.ui.radioGroup,ie),me=N(b.ui.strategy,b.ui.radio,D),ge=z({components:{URadio:E},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>B.default.color,validator(e){return b.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:t,attrs:n}=U("radioGroup",k(e,"ui"),B,k(e,"class")),{ui:i}=U("radio",k(e,"uiRadio"),me),{emitFormChange:u,color:d,name:l}=G(e,B);ee("radio-group",{color:d,name:l});const v=a=>{o("update:modelValue",a),o("change",a),u()},r=a=>S(a,e.valueAttribute,S(a,e.optionAttribute)),s=a=>S(a,e.optionAttribute,S(a,e.valueAttribute)),h=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:r(a),label:s(a)},p=V(()=>e.options.map(a=>h(a)));return{ui:t,uiRadio:i,attrs:n,normalizedOptions:p,onUpdate:v}}});function be(e,o,t,n,i,u){const d=E;return c(),y("div",{class:g(e.ui.wrapper)},[w("fieldset",j(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(c(),y("legend",{key:0,class:g(e.ui.legend)},[R(e.$slots,"legend",{},()=>[P(A(e.legend),1)])],2)):q("",!0),(c(!0),y(ae,null,te(e.normalizedOptions,l=>(c(),T(d,{key:l.value,label:l.label,"model-value":e.modelValue,value:l.value,help:l.help,disabled:l.disabled||e.disabled,ui:e.uiRadio,onChange:v=>e.onUpdate(l.value)},{label:_(()=>[R(e.$slots,"label",j({ref_for:!0},{option:l}))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const ve=F(ge,[["render",be]]),ye={class:"screen-reader-only"},Ae=z({__name:"wifi",setup(e){const o=[{value:"none",label:"None"},{value:"wpa",label:"WPA"},{value:"wep",label:"WEP"}],t=C(""),n=C(""),i=C(o[1].value),u=C(!0),d=V(()=>{if(!t.value&&!n.value)return"";const r=[];return t.value&&r.push(`S:${t.value};`),i.value&&r.push(`T:${i.value};`),n.value&&r.push(`P:${n.value};`),`WIFI:${r.join()};`}),{t:l}=le(),v=V(()=>l("qrcode.tabs.wifi")+" "+l("index.qrcode.title"));return oe({title:v,meta:[{name:"description",content:l("index.qrcode.description")}]}),(r,s)=>{const h=J,p=K,a=re,W=ne,H=ve,M=se;return c(),T(M,{text:f(d)},{default:_(()=>[w("h1",ye,A(f(v)),1),m(p,{label:"SSID"},{default:_(()=>[m(h,{modelValue:f(t),"onUpdate:modelValue":s[0]||(s[0]=$=>O(t)?t.value=$:null),placeholder:r.$t("qrcode.wifi.ssid")},null,8,["modelValue","placeholder"])]),_:1}),m(p,{label:r.$t("qrcode.wifi.password.label")},{default:_(()=>[m(W,{size:"sm",orientation:"horizontal"},{default:_(()=>[m(h,{modelValue:f(n),"onUpdate:modelValue":s[1]||(s[1]=$=>O(n)?n.value=$:null),type:f(u)?"password":"text",placeholder:r.$t("qrcode.wifi.password.value")},null,8,["modelValue","type","placeholder"]),m(a,{icon:f(u)?"i-heroicons-eye-slash-16-solid":"i-heroicons-eye-16-solid",color:"gray",onClick:s[2]||(s[2]=$=>u.value=!f(u))},null,8,["icon"])]),_:1})]),_:1},8,["label"]),m(p,{label:r.$t("qrcode.wifi.encryption.label")},{default:_(()=>[m(H,{modelValue:f(i),"onUpdate:modelValue":s[3]||(s[3]=$=>O(i)?i.value=$:null),options:o,ui:{fieldset:"flex gap-x-4 h-8 items-center"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["text"])}}});export{Ae as default};
