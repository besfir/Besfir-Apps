import{g as I,Z as T,$ as O,v as C,x as $,y as w,a0 as V,a1 as H,o as n,L as S,a2 as W,w as k,B as d,C as j,i as e,I as m,c as l,H as c,b as y,d as P,t as A,a as x,e as z,Y as q,A as B,J as L,K as N,a3 as D,m as F,u as J,a4 as R,j as E,a5 as G}from"./BPyegW9r.js";import{_ as K}from"./DoVNp_M-.js";import{_ as Y}from"./EmbWVJJv.js";const Z=x("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),M=I({inheritAttrs:!1,__name:"PageCard",props:{...T,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o={wrapper:"relative group",to:"hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{wrapper:"mb-6 flex",base:"w-10 h-10 flex-shrink-0 text-primary"},body:{base:"flex-1"},title:"text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"},p=t,r=O(),{ui:i,attrs:s}=C("page.card",$(p,"ui"),o,$(p,"class"),!0),f=w(()=>V(p)),u=w(()=>(p.title||r.title&&H(r.title())||"Card link").trim());return(a,v)=>{const b=z,h=q,_=K;return n(),S(_,j({class:[e(i).wrapper,a.to&&e(i).to]},e(s),{ui:e(i)}),W({default:k(()=>[a.to?(n(),S(b,j({key:0,"aria-label":e(u)},e(f),{class:"focus:outline-none",tabindex:"-1"}),{default:k(()=>[Z]),_:1},16,["aria-label"])):m("",!0),t.icon||a.$slots.icon?(n(),l("div",{key:1,class:c(e(i).icon.wrapper)},[d(a.$slots,"icon",{},()=>[y(h,{name:t.icon,class:c(e(i).icon.base)},null,8,["name","class"])])],2)):m("",!0),t.title||a.$slots.title?(n(),l("p",{key:2,class:c(e(i).title)},[d(a.$slots,"title",{},()=>[P(A(t.title),1)])],2)):m("",!0),t.description||a.$slots.description?(n(),l("p",{key:3,class:c(e(i).description)},[d(a.$slots,"description",{},()=>[P(A(t.description),1)])],2)):m("",!0),d(a.$slots,"default")]),_:2},[a.$slots.header?{name:"header",fn:k(()=>[d(a.$slots,"header")]),key:"0"}:void 0,a.$slots.footer?{name:"footer",fn:k(()=>[d(a.$slots,"footer")]),key:"1"}:void 0]),1040,["class","ui"])}}}),Q={key:2},X=I({inheritAttrs:!1,__name:"PageHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},align:{type:String,default:"left"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o=t,p=w(()=>{const s=B("gap-8 sm:gap-y-16",o.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),f=B("",o.align==="center"&&"text-center flex flex-col items-center",o.align==="right"&&"lg:order-last"),u=B("mt-8 flex flex-wrap gap-x-3 gap-y-1.5",o.align==="center"&&"justify-center");return{wrapper:"py-8 sm:py-16",container:s,base:f,icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:u}}),{ui:r,attrs:i}=C("page.hero",$(o,"ui"),p,$(o,"class"),!0);return(s,f)=>{var v,b;const u=q,a=D;return n(),l("div",j({class:e(r).wrapper},e(i)),[x("div",{class:c(e(r).container)},[t.icon||s.$slots.icon||t.title||s.$slots.title||t.description||s.$slots.description||(v=t.links)!=null&&v.length||s.$slots.links?(n(),l("div",{key:0,class:c(e(r).base)},[t.icon||s.$slots.icon?(n(),l("div",{key:0,class:c(e(r).icon.wrapper)},[d(s.$slots,"icon",{},()=>[y(u,{name:t.icon,class:c(e(r).icon.base)},null,8,["name","class"])])],2)):m("",!0),x("h1",{class:c(e(r).title)},[d(s.$slots,"title",{},()=>[P(A(t.title),1)])],2),t.description||s.$slots.description?(n(),l("p",{key:1,class:c(e(r).description)},[d(s.$slots,"description",{},()=>[P(A(t.description),1)])],2)):m("",!0),(b=t.links)!=null&&b.length||s.$slots.links?(n(),l("div",{key:2,class:c(e(r).links)},[d(s.$slots,"links",{},()=>[(n(!0),l(L,null,N(t.links,(h,_)=>(n(),S(a,j({key:_,ref_for:!0},h,{onClick:h.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2)):m("",!0),s.$slots.default?d(s.$slots,"default",{key:1}):t.align==="right"?(n(),l("div",Q)):m("",!0)],2)],16)}}}),ee=I({inheritAttrs:!1,__name:"Page",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o={wrapper:"flex flex-col lg:grid lg:grid-cols-10 lg:gap-8",left:"lg:col-span-2",center:{narrow:"lg:col-span-6",base:"lg:col-span-8",full:"lg:col-span-10"},right:"lg:col-span-2 order-first lg:order-last"},p=t,r=O(),{ui:i,attrs:s}=C("page",$(p,"ui"),o,$(p,"class"),!0),f=w(()=>r.left&&r.right?i.value.center.narrow:r.left||r.right?i.value.center.base:i.value.center.full);return(u,a)=>(n(),l("div",j({class:e(i).wrapper},e(s)),[u.$slots.left?(n(),l("div",{key:0,class:c(e(i).left)},[d(u.$slots,"left")],2)):m("",!0),x("div",{class:c(e(f))},[d(u.$slots,"default")],2),u.$slots.right?(n(),l("div",{key:1,class:c(e(i).right)},[d(u.$slots,"right")],2)):m("",!0)],16))}}),te={class:"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-4"},se={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"},re=I({__name:"index",setup(t){const{t:o}=F(),p=[{to:"/qrcode-generator/url",title:o("index.qrcode.title"),description:o("index.qrcode.description"),icon:"i-besfir-qrcode"},{to:"/format-converter/json-to-yaml",title:o("format-converter.meta.json-yaml.title"),description:o("format-converter.meta.json-yaml.description"),icon:"i-ph-arrows-clockwise"},{to:"/format-converter/yaml-to-json",title:o("format-converter.meta.yaml-json.title"),description:o("format-converter.meta.yaml-json.description"),icon:"i-ph-arrows-clockwise"},{title:"PDF Password Remover",description:"WIP",icon:"i-besfir-password"},{title:"Team Generator",description:"WIP",icon:"i-besfir-team"},{title:"Search Console Indexing",description:"WIP",icon:"i-besfir-indexing"}],r=p.filter(f=>["i-besfir-qrcode","i-besfir-password","i-besfir-team","i-besfir-indexing"].includes(f.icon)),i=w(()=>o("index.description"));J({title:"Besfir Apps",titleTemplate:"%siteName",meta:[{name:"description",content:i.value}]});const s=R();return(f,u)=>{const a=G,v=M,b=X,h=Y,_=ee,U=E;return n(),S(U,null,{default:k(()=>[y(b,{title:"Besfir Apps",description:e(i),links:[{label:f.$t("index.contact"),to:"mailto:admin@besfir.org",size:"lg",leadingIcon:"i-ph-envelope-open-duotone"}]},{default:k(()=>[x("div",te,[(n(!0),l(L,null,N(e(r),g=>(n(),S(v,{key:g.to,to:g.to,title:g.title,description:g.description,ui:{description:"line-clamp-3",title:"block"}},{title:k(()=>[P(A(g.title),1),y(a,{name:"i-ph-medal",class:"text-primary"})]),_:2},1032,["to","title","description"]))),128))])]),_:1},8,["description","links"]),y(h),y(_,null,{default:k(()=>[x("div",se,[(n(),l(L,null,N(p,g=>y(v,{key:g.to,to:g.to?e(s)(g.to):"",title:g.title,description:g.description,icon:g.icon,ui:{description:"line-clamp-3",title:"block"}},null,8,["to","title","description","icon"])),64))])]),_:1}),y(h)]),_:1})}}});export{re as default};
