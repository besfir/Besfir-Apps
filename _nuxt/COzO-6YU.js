import{_ as st}from"./Bqx6ZtdW.js";import{i as Fe,g as q,a0 as at,v as H,aR as lt,J as ut,aS as ct,o as B,c as A,H as K,I as Ve,j as te,w as N,a as T,t as k,l as P,P as dt,z as V,F as U,_ as ft,m as gt,n as Se,q as ht,s as Pe,av as mt,E as x,aN as pt,aj as wt,aT as j,A as J,d as D,G as oe,aU as yt,M as ze,N as qe,$ as se,b as I,a2 as Ce,aV as bt,h as Ct,k as Et,aW as Bt,U as _t}from"./Chbyz37e.js";import{_ as Oe}from"./B0ycVnT8.js";import{_ as vt}from"./C8Gfsaf-.js";import{_ as It}from"./Ds_9sXJ5.js";import{c as At}from"./B-TUU__J.js";import{d as ke}from"./BPcQbAJ2.js";const Nt={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},Tt=()=>{const{t:e}=Fe(),t=[{icon:"i-ph-device-mobile-fill",label:e("qrcode.contact.mobile"),code:"CELL"},{icon:"i-ph-house-line-fill",label:e("qrcode.contact.home"),code:"HOME,VOICE"},{icon:"i-ph-buildings-fill",label:e("qrcode.contact.work"),code:"WORK,VOICE"},{icon:"i-besfir-fax",label:e("qrcode.contact.home-fax"),code:"HOME,FAX"},{icon:"i-besfir-fax",label:e("qrcode.contact.work-fax"),code:"WORK,FAX"},{icon:"i-ph-phone-call-fill",label:e("qrcode.contact.other"),code:"OTHER"}],i=()=>({...t[0],value:""}),r=[{icon:"i-ph-buildings-fill",label:e("qrcode.contact.work"),code:"WORK"},{icon:"i-ph-house-line-fill",label:e("qrcode.contact.home"),code:"HOME"},{icon:"i-ph-map-pin-fill",label:e("qrcode.contact.other"),code:"OTHER"}],o=()=>({...r[0],value:""}),n=[{icon:"i-ph-buildings-fill",label:e("qrcode.contact.work"),code:"WORK"},{icon:"i-ph-house-line-fill",label:e("qrcode.contact.personal"),code:"HOME"},{icon:"i-ph-map-pin-fill",label:e("qrcode.contact.other"),code:"OTHER"}];return{telephoneOptions:t,telephoneFormInitValue:i,addressOptions:r,addressFormInitValue:o,emailOptions:n,emailFormInitValue:()=>({...n[0],value:""})}},Mt=()=>{const{t:e}=Fe();return{routes:[{label:e("qrcode.tabs.url"),to:"url"},{label:e("qrcode.tabs.contact"),to:"contact"},{label:e("qrcode.tabs.wifi"),to:"wifi"},{label:e("qrcode.tabs.email"),to:"email"},{label:e("qrcode.tabs.text"),to:"text"}],...Tt()}},Re=ct({componentName:"NuxtLinkLocale"}),St=q({name:"NuxtLinkLocale",props:{...Re.props,locale:{type:String,default:void 0,required:!1}},setup(e,{slots:t}){const i=at(),r=H(()=>{const s=e.to??e.href;return s!=null?i(s,e.locale):s}),o=H(()=>{if(e.external||e.target&&e.target!=="_self")return!0;const s=e.to??e.href;return typeof s=="object"?!1:s===""||s==null||lt(s,{acceptRelative:!0})}),n=()=>{const s={...e};return o.value||(s.to=r.value),delete s.href,delete s.locale,s};return()=>ut(Re,n(),t.default)}}),Pt={class:"text-ellipsis overflow-hidden"},kt=q({__name:"Tabs",setup(e){const{routes:t}=Mt();return(i,r)=>{const o=St;return B(),A("div",{role:"tablist",class:"relative bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full h-10 inline-grid items-center",style:dt(`grid-template-columns:repeat(${P(t).length}, minmax(0, 1fr))`)},[(B(!0),A(K,null,Ve(P(t),({label:n,to:s})=>(B(),te(o,{key:n,to:"/qrcode-generator/"+s,class:"px-3 h-8 rounded-lg text-sm flex items-center justify-center","active-class":"bg-white shadow-sm dark:bg-gray-900"},{default:N(()=>[T("span",Pt,k(n),1)]),_:2},1032,["to"]))),128))],4)}}}),He=q({__name:"Card",props:{type:{}},setup(e){return(t,i)=>(B(),A("div",{class:U(["bg-slate-100 dark:bg-gray-800 px-4 py-5 sm:p-6 md:rounded-lg",t.type==="tab"?"rounded-t-lg":"rounded-b-lg"])},[V(t.$slots,"default")],2))}}),he=gt(Se.ui.strategy,Se.ui.formGroup,Nt),Rt=q({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(he.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:t,attrs:i}=ht("formGroup",Pe(e,"ui"),he,Pe(e,"class")),r=mt("form-errors",null),o=H(()=>{var a,l;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(l=(a=r==null?void 0:r.value)==null?void 0:a.find(u=>u.path===e.name))==null?void 0:l.message}),n=H(()=>t.value.size[e.size??he.default.size]),s=x(pt("$0do7hMDEUC"));return wt("form-group",{error:o,inputId:s,name:H(()=>e.name),size:H(()=>e.size),eagerValidation:H(()=>e.eagerValidation)}),{ui:t,attrs:i,inputId:s,size:n,error:o}}}),Lt=["for"];function $t(e,t,i,r,o,n){return B(),A("div",J({class:e.ui.wrapper},e.attrs),[T("div",{class:U(e.ui.inner)},[e.label||e.$slots.label?(B(),A("div",{key:0,class:U([e.ui.label.wrapper,e.size])},[T("label",{for:e.inputId,class:U([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?V(e.$slots,"label",j(J({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(B(),A(K,{key:1},[D(k(e.label),1)],64))],10,Lt),e.hint||e.$slots.hint?(B(),A("span",{key:0,class:U([e.ui.hint])},[e.$slots.hint?V(e.$slots,"hint",j(J({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(B(),A(K,{key:1},[D(k(e.hint),1)],64))],2)):oe("",!0)],2)):oe("",!0),e.description||e.$slots.description?(B(),A("p",{key:1,class:U([e.ui.description,e.size])},[e.$slots.description?V(e.$slots,"description",j(J({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(B(),A(K,{key:1},[D(k(e.description),1)],64))],2)):oe("",!0)],2),T("div",{class:U([e.label?e.ui.container:""])},[V(e.$slots,"default",j(yt({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(B(),A("p",{key:0,class:U([e.ui.error,e.size])},[e.$slots.error?V(e.$slots,"error",j(J({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(B(),A(K,{key:1},[D(k(e.error),1)],64))],2)):e.help||e.$slots.help?(B(),A("p",{key:1,class:U([e.ui.help,e.size])},[e.$slots.help?V(e.$slots,"help",j(J({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(B(),A(K,{key:1},[D(k(e.help),1)],64))],2)):oe("",!0)],2)],16)}const Ut=ft(Rt,[["render",$t]]),Dt=q({__name:"ButtonToggles",props:ze({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=qe(e,"modelValue");return(i,r)=>{const o=se;return B(!0),A(K,null,Ve(i.options,n=>{var s;return B(),te(o,{key:n.value,variant:((s=t.value)==null?void 0:s.value)===n.value?"soft":"ghost",onClick:a=>t.value=n},{default:N(()=>[D(k(n.label),1)]),_:2},1032,["variant","onClick"])}),128)}}}),Ft={class:"flex items-center justify-between"},Vt={class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},zt={class:"space-y-4"},qt={class:"space-x-4"},Ot=q({__name:"DownloadModal",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:ze(["download:png","download:svg"],["update:modelValue"]),setup(e){const t=qe(e,"modelValue"),i=[70,100,150,200,500,1e3].map(n=>({label:n+"px",value:n+""})),r=x(i[3]),o=x("");return(n,s)=>{const a=se,l=vt,u=Ut,c=Dt,y=se,g=Oe,d=It;return B(),te(d,{modelValue:t.value,"onUpdate:modelValue":s[5]||(s[5]=f=>t.value=f)},{default:N(()=>[I(g,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:N(()=>[T("div",Ft,[T("h3",Vt,k(n.$t("qrcode.preview.downloadQr")),1),I(a,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:s[0]||(s[0]=f=>t.value=!1)})])]),default:N(()=>[T("div",zt,[I(u,{label:n.$t("qrcode.preview.fileName")},{default:N(()=>[I(l,{modelValue:P(o),"onUpdate:modelValue":s[1]||(s[1]=f=>Ce(o)?o.value=f:null),placeholder:"qrcode_download",autofocus:""},null,8,["modelValue"])]),_:1},8,["label"]),I(u,{label:n.$t("qrcode.preview.imageSize")},{default:N(()=>[I(c,{modelValue:P(r),"onUpdate:modelValue":s[2]||(s[2]=f=>Ce(r)?r.value=f:null),options:P(i)},null,8,["modelValue","options"])]),_:1},8,["label"]),T("div",qt,[I(y,{onClick:s[3]||(s[3]=f=>n.$emit("download:svg",{size:P(r).value,fileName:P(o)}))},{default:N(()=>[D(k(n.$t("qrcode.preview.downloadSvg")),1)]),_:1}),I(y,{color:"gray",onClick:s[4]||(s[4]=f=>n.$emit("download:png",{size:P(r).value,fileName:P(o)}))},{default:N(()=>[D(k(n.$t("qrcode.preview.downloadPng")),1)]),_:1})])])]),_:1})]),_:1},8,["modelValue"])}}});var Ht=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ke={},M={};let Ie;const Kt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};M.getSymbolTotalCodewords=function(t){return Kt[t]};M.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};M.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Ie=t};M.isKanjiModeEnabled=function(){return typeof Ie<"u"};M.toSJIS=function(t){return Ie(t)};var ue={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(ue);function je(){this.buffer=[],this.length=0}je.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var jt=je;function ne(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}ne.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};ne.prototype.get=function(e,t){return this.data[e*this.size+t]};ne.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};ne.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Jt=ne,Je={};(function(e){const t=M.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([n[a],n[l]]);return o}})(Je);var Ye={};const Yt=M.getSymbolSize,Le=7;Ye.getPositions=function(t){const i=Yt(t);return[[0,0],[i-Le,0],[0,i-Le]]};var Ge={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,l=0,u=null,c=null;for(let y=0;y<n;y++){a=l=0,u=c=null;for(let g=0;g<n;g++){let d=o.get(y,g);d===u?a++:(a>=5&&(s+=t.N1+(a-5)),u=d,a=1),d=o.get(g,y),d===c?l++:(l>=5&&(s+=t.N1+(l-5)),c=d,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const u=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(u===4||u===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,l=0;for(let u=0;u<n;u++){a=l=0;for(let c=0;c<n;c++)a=a<<1&2047|o.get(u,c),c>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(c,u),c>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let l=0;l<s;l++)n+=o.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(o,l,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let u=0;u<s;u++){n(u),e.applyMask(u,o);const c=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(u,o),c<l&&(l=c,a=u)}return a}})(Ge);var ce={};const z=ue,re=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ie=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ce.getBlocksCount=function(t,i){switch(i){case z.L:return re[(t-1)*4+0];case z.M:return re[(t-1)*4+1];case z.Q:return re[(t-1)*4+2];case z.H:return re[(t-1)*4+3];default:return}};ce.getTotalCodewordsCount=function(t,i){switch(i){case z.L:return ie[(t-1)*4+0];case z.M:return ie[(t-1)*4+1];case z.Q:return ie[(t-1)*4+2];case z.H:return ie[(t-1)*4+3];default:return}};var Qe={},de={};const Z=new Uint8Array(512),ae=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Z[i]=t,ae[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Z[i]=Z[i-255]})();de.log=function(t){if(t<1)throw new Error("log("+t+")");return ae[t]};de.exp=function(t){return Z[t]};de.mul=function(t,i){return t===0||i===0?0:Z[ae[t]+ae[i]]};(function(e){const t=de;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let l=0;l<o.length;l++)n[l]^=t.mul(o[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(Qe);const We=Qe;function Ae(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Ae.prototype.initialize=function(t){this.degree=t,this.genPoly=We.generateECPolynomial(this.degree)};Ae.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=We.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var Gt=Ae,Xe={},O={},Ne={};Ne.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var L={};const Ze="[0-9]+",Qt="[A-Z $%*+\\-./:]+";let ee="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ee=ee.replace(/u/g,"\\u");const Wt="(?:(?![A-Z0-9 $%*+\\-./:]|"+ee+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(ee,"g");L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");L.BYTE=new RegExp(Wt,"g");L.NUMERIC=new RegExp(Ze,"g");L.ALPHANUMERIC=new RegExp(Qt,"g");const Xt=new RegExp("^"+ee+"$"),Zt=new RegExp("^"+Ze+"$"),xt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return Xt.test(t)};L.testNumeric=function(t){return Zt.test(t)};L.testAlphanumeric=function(t){return xt.test(t)};(function(e){const t=Ne,i=L;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(O);(function(e){const t=M,i=ce,r=ue,o=O,n=Ne,s=7973,a=t.getBCHDigit(s);function l(g,d,f){for(let w=1;w<=40;w++)if(d<=e.getCapacity(w,f,g))return w}function u(g,d){return o.getCharCountIndicator(g,d)+4}function c(g,d){let f=0;return g.forEach(function(w){const v=u(w.mode,d);f+=v+w.getBitsLength()}),f}function y(g,d){for(let f=1;f<=40;f++)if(c(g,f)<=e.getCapacity(f,d,o.MIXED))return f}e.from=function(d,f){return n.isValid(d)?parseInt(d,10):f},e.getCapacity=function(d,f,w){if(!n.isValid(d))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=o.BYTE);const v=t.getSymbolTotalCodewords(d),p=i.getTotalCodewordsCount(d,f),b=(v-p)*8;if(w===o.MIXED)return b;const m=b-u(w,d);switch(w){case o.NUMERIC:return Math.floor(m/10*3);case o.ALPHANUMERIC:return Math.floor(m/11*2);case o.KANJI:return Math.floor(m/13);case o.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(d,f){let w;const v=r.from(f,r.M);if(Array.isArray(d)){if(d.length>1)return y(d,v);if(d.length===0)return 1;w=d[0]}else w=d;return l(w.mode,w.getLength(),v)},e.getEncodedBits=function(d){if(!n.isValid(d)||d<7)throw new Error("Invalid QR Code version");let f=d<<12;for(;t.getBCHDigit(f)-a>=0;)f^=s<<t.getBCHDigit(f)-a;return d<<12|f}})(Xe);var xe={};const Ee=M,et=1335,en=21522,$e=Ee.getBCHDigit(et);xe.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;Ee.getBCHDigit(o)-$e>=0;)o^=et<<Ee.getBCHDigit(o)-$e;return(r<<10|o)^en};var tt={};const tn=O;function Y(e){this.mode=tn.NUMERIC,this.data=e.toString()}Y.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var nn=Y;const on=O,me=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function G(e){this.mode=on.ALPHANUMERIC,this.data=e}G.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};G.prototype.getLength=function(){return this.data.length};G.prototype.getBitsLength=function(){return G.getBitsLength(this.data.length)};G.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=me.indexOf(this.data[i])*45;r+=me.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(me.indexOf(this.data[i]),6)};var rn=G,sn=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const an=sn,ln=O;function Q(e){this.mode=ln.BYTE,typeof e=="string"&&(e=an(e)),this.data=new Uint8Array(e)}Q.getBitsLength=function(t){return t*8};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var un=Q;const cn=O,dn=M;function W(e){this.mode=cn.KANJI,this.data=e}W.getBitsLength=function(t){return t*13};W.prototype.getLength=function(){return this.data.length};W.prototype.getBitsLength=function(){return W.getBitsLength(this.data.length)};W.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=dn.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var fn=W,nt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,u,c,y,g,d,f,w,v;!a.empty();){l=a.pop(),u=l.value,y=l.cost,g=i[u]||{};for(c in g)g.hasOwnProperty(c)&&(d=g[c],f=y+d,w=s[c],v=typeof s[c]>"u",(v||w>f)&&(s[c]=f,a.push(c,f),n[c]=u))}if(typeof o<"u"&&typeof s[o]>"u"){var p=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(p)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(nt);var gn=nt.exports;(function(e){const t=O,i=nn,r=rn,o=un,n=fn,s=L,a=M,l=gn;function u(p){return unescape(encodeURIComponent(p)).length}function c(p,b,m){const h=[];let C;for(;(C=p.exec(m))!==null;)h.push({data:C[0],index:C.index,mode:b,length:C[0].length});return h}function y(p){const b=c(s.NUMERIC,t.NUMERIC,p),m=c(s.ALPHANUMERIC,t.ALPHANUMERIC,p);let h,C;return a.isKanjiModeEnabled()?(h=c(s.BYTE,t.BYTE,p),C=c(s.KANJI,t.KANJI,p)):(h=c(s.BYTE_KANJI,t.BYTE,p),C=[]),b.concat(m,h,C).sort(function(_,S){return _.index-S.index}).map(function(_){return{data:_.data,mode:_.mode,length:_.length}})}function g(p,b){switch(b){case t.NUMERIC:return i.getBitsLength(p);case t.ALPHANUMERIC:return r.getBitsLength(p);case t.KANJI:return n.getBitsLength(p);case t.BYTE:return o.getBitsLength(p)}}function d(p){return p.reduce(function(b,m){const h=b.length-1>=0?b[b.length-1]:null;return h&&h.mode===m.mode?(b[b.length-1].data+=m.data,b):(b.push(m),b)},[])}function f(p){const b=[];for(let m=0;m<p.length;m++){const h=p[m];switch(h.mode){case t.NUMERIC:b.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:b.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:b.push([h,{data:h.data,mode:t.BYTE,length:u(h.data)}]);break;case t.BYTE:b.push([{data:h.data,mode:t.BYTE,length:u(h.data)}])}}return b}function w(p,b){const m={},h={start:{}};let C=["start"];for(let E=0;E<p.length;E++){const _=p[E],S=[];for(let F=0;F<_.length;F++){const R=_[F],X=""+E+F;S.push(X),m[X]={node:R,lastCount:0},h[X]={};for(let ge=0;ge<C.length;ge++){const $=C[ge];m[$]&&m[$].node.mode===R.mode?(h[$][X]=g(m[$].lastCount+R.length,R.mode)-g(m[$].lastCount,R.mode),m[$].lastCount+=R.length):(m[$]&&(m[$].lastCount=R.length),h[$][X]=g(R.length,R.mode)+4+t.getCharCountIndicator(R.mode,b))}}C=S}for(let E=0;E<C.length;E++)h[C[E]].end=0;return{map:h,table:m}}function v(p,b){let m;const h=t.getBestModeForData(p);if(m=t.from(b,h),m!==t.BYTE&&m.bit<h.bit)throw new Error('"'+p+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(h));switch(m===t.KANJI&&!a.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new i(p);case t.ALPHANUMERIC:return new r(p);case t.KANJI:return new n(p);case t.BYTE:return new o(p)}}e.fromArray=function(b){return b.reduce(function(m,h){return typeof h=="string"?m.push(v(h,null)):h.data&&m.push(v(h.data,h.mode)),m},[])},e.fromString=function(b,m){const h=y(b,a.isKanjiModeEnabled()),C=f(h),E=w(C,m),_=l.find_path(E.map,"start","end"),S=[];for(let F=1;F<_.length-1;F++)S.push(E.table[_[F]].node);return e.fromArray(d(S))},e.rawSplit=function(b){return e.fromArray(y(b,a.isKanjiModeEnabled()))}})(tt);const fe=M,pe=ue,hn=jt,mn=Jt,pn=Je,wn=Ye,Be=Ge,_e=ce,yn=Gt,le=Xe,bn=xe,Cn=O,we=tt;function En(e,t){const i=e.size,r=wn.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(n+a,s+l,!0,!0):e.set(n+a,s+l,!1,!0))}}function Bn(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function _n(e,t){const i=pn.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,n+a,!0,!0):e.set(o+s,n+a,!1,!0)}}function vn(e,t){const i=e.size,r=le.getEncodedBits(t);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+i-8-3,s=(r>>a&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function ye(e,t,i){const r=e.size,o=bn.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function In(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(o,a-l)){let u=!1;s<t.length&&(u=(t[s]>>>n&1)===1),e.set(o,a-l,u),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function An(e,t,i){const r=new hn;i.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),Cn.getCharCountIndicator(l.mode,e)),l.write(r)});const o=fe.getSymbolTotalCodewords(e),n=_e.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return Nn(r,e,t)}function Nn(e,t,i){const r=fe.getSymbolTotalCodewords(t),o=_e.getTotalCodewordsCount(t,i),n=r-o,s=_e.getBlocksCount(t,i),a=r%s,l=s-a,u=Math.floor(r/s),c=Math.floor(n/s),y=c+1,g=u-c,d=new yn(g);let f=0;const w=new Array(s),v=new Array(s);let p=0;const b=new Uint8Array(e.buffer);for(let _=0;_<s;_++){const S=_<l?c:y;w[_]=b.slice(f,f+S),v[_]=d.encode(w[_]),f+=S,p=Math.max(p,S)}const m=new Uint8Array(r);let h=0,C,E;for(C=0;C<p;C++)for(E=0;E<s;E++)C<w[E].length&&(m[h++]=w[E][C]);for(C=0;C<g;C++)for(E=0;E<s;E++)m[h++]=v[E][C];return m}function Tn(e,t,i,r){let o;if(Array.isArray(e))o=we.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const c=we.rawSplit(e);u=le.getBestVersionForData(c,i)}o=we.fromString(e,u||40)}else throw new Error("Invalid data");const n=le.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=An(t,i,o),a=fe.getSymbolSize(t),l=new mn(a);return En(l,t),Bn(l),_n(l,t),ye(l,i,0),t>=7&&vn(l,t),In(l,s),isNaN(r)&&(r=Be.getBestMask(l,ye.bind(null,l,i))),Be.applyMask(r,l),ye(l,i,r),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Ke.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=pe.M,o,n;return typeof i<"u"&&(r=pe.from(i.errorCorrectionLevel,pe.M),o=le.from(i.version),n=Be.from(i.maskPattern),i.toSJISFunc&&fe.setToSJISFunction(i.toSJISFunc)),Tn(t,o,r,n)};var ot={},Te={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,n),u=Math.floor((s+n.margin*2)*l),c=n.margin*l,y=[n.color.light,n.color.dark];for(let g=0;g<u;g++)for(let d=0;d<u;d++){let f=(g*u+d)*4,w=n.color.light;if(g>=c&&d>=c&&g<u-c&&d<u-c){const v=Math.floor((g-c)/l),p=Math.floor((d-c)/l);w=y[a[v*s+p]?1:0]}r[f++]=w.r,r[f++]=w.g,r[f++]=w.b,r[f]=w.a}}})(Te);(function(e){const t=Te;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,u=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(u=r()),l=t.getOptions(l);const c=t.getImageWidth(n.modules.size,l),y=u.getContext("2d"),g=y.createImageData(c,c);return t.qrToImageData(g.data,n,l),i(y,u,c),y.putImageData(g,0,0),u},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const u=e.render(n,s,l),c=l.type||"image/png",y=l.rendererOpts||{};return u.toDataURL(c,y.quality)}})(ot);var rt={};const Mn=Te;function Ue(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function be(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Sn(e,t,i){let r="",o=0,n=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),u=Math.floor(a/t);!l&&!n&&(n=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=n?be("M",l+i,.5+u+i):be("m",o,0),o=0,n=!1),l+1<t&&e[a+1]||(r+=be("h",s),s=0)):o++}return r}rt.render=function(t,i,r){const o=Mn.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+o.margin*2,l=o.color.light.a?"<path "+Ue(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+Ue(o.color.dark,"stroke")+' d="'+Sn(s,n,o.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(o.block?'width="100%" height="100%"':o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+c+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof r=="function"&&r(null,g),g};const Pn=Ht,ve=Ke,it=ot,kn=rt;function Me(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Pn())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(l,u){try{const c=ve.create(i,r);l(e(c,t,r))}catch(c){u(c)}})}try{const l=ve.create(i,r);o(null,e(l,t,r))}catch(l){o(l)}}ve.create;Me.bind(null,it.render);var Rn=Me.bind(null,it.renderToDataURL),De=Me.bind(null,function(e,t,i){return kn.render(e,i)});const Ln=["innerHTML"],$n={class:"space-y-4"},Un=q({__name:"Preview",props:{text:{},isInvalid:{type:Boolean}},setup(e){const t=e,{text:i}=bt(t),r=x(),o=x(!1),{gray:n}=At().tailwindColors;function s(u){De(u||"https://pettyapp.xyz",{type:"svg",color:{dark:u?n[800]:n[300]}},function(c,y){c&&console.error(c),r.value=y})}s(i.value),Ct(i,Et(s,500));function a({fileName:u,size:c}){De(i.value||"https://pettyapp.xyz",{type:"svg",width:+c,color:{dark:n[800]}},function(y,g){y&&console.error(y);const d=new Blob([g],{type:"image/svg+xml"}),f=Bt(d);ke(f.value,u||"qrcode_download.svg")})}function l({fileName:u,size:c}){Rn(i.value||"https://pettyapp.xyz",{type:"image/png",width:+c,color:{dark:n[800]}},function(y,g){y&&console.error(y),ke(g,u||"qrcode_download.png")})}return(u,c)=>{const y=Oe,g=se,d=Ot,f=He;return B(),te(f,{type:"preview",class:"space-y-4"},{default:N(()=>[I(y,{ui:{base:"overflow-hidden",body:{padding:""},background:"dark:bg-white"}},{default:N(()=>[T("div",{class:"mx-auto max-w-[300px]",innerHTML:P(r)},null,8,Ln)]),_:1}),T("div",$n,[I(g,{"leading-icon":"i-ph-download",disabled:u.isInvalid,size:"lg",block:"",onClick:c[0]||(c[0]=w=>o.value=!0)},{default:N(()=>[D(k(u.$t("common.download")),1)]),_:1},8,["disabled"])]),I(d,{modelValue:P(o),"onUpdate:modelValue":c[1]||(c[1]=w=>Ce(o)?o.value=w:null),"onDownload:png":l,"onDownload:svg":a},null,8,["modelValue"])]),_:1})}}}),Dn={class:"md:grid grid-cols-3 gap-x-6"},Fn={class:"col-span-2"},Vn={class:"col-span-1"},Yn=q({__name:"Page",props:{text:{},isInvalid:{type:Boolean}},setup(e){return(t,i)=>{const r=st,o=kt,n=He,s=Un,a=_t;return B(),te(a,{class:"py-10 space-y-6"},{default:N(()=>[I(r),T("div",Dn,[T("div",Fn,[I(o),I(n,{type:"tab",class:"mt-2 space-y-4"},{default:N(()=>[V(t.$slots,"default")]),_:3})]),T("div",Vn,[I(s,{text:t.text,"is-invalid":t.isInvalid},null,8,["text","is-invalid"])])]),I(r)]),_:3})}}});export{Yn as _,Mt as u};
