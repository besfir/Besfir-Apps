import{g as s,o as p,c as v,a,t as b,s as f,aj as u,al as o,aI as h,i as x,j as d,k as r,aJ as g,ar as _,B as z,aK as y,Z as w}from"./D4v7JD0t.js";const C={wrapper:{horizontal:"inline-flex -space-x-px",vertical:"inline-flex flex-col -space-y-px"},rounded:"rounded-md",shadow:"shadow-sm",orientation:{"rounded-none":{horizontal:{start:"rounded-s-none",end:"rounded-e-none"},vertical:{start:"rounded-t-none",end:"rounded-b-none"}},"rounded-sm":{horizontal:{start:"rounded-s-sm",end:"rounded-e-sm"},vertical:{start:"rounded-t-sm",end:"rounded-b-sm"}},rounded:{horizontal:{start:"rounded-s",end:"rounded-e"},vertical:{start:"rounded-t",end:"rounded-b"}},"rounded-md":{horizontal:{start:"rounded-s-md",end:"rounded-e-md"},vertical:{start:"rounded-t-md",end:"rounded-b-md"}},"rounded-lg":{horizontal:{start:"rounded-s-lg",end:"rounded-e-lg"},vertical:{start:"rounded-t-lg",end:"rounded-b-lg"}},"rounded-xl":{horizontal:{start:"rounded-s-xl",end:"rounded-e-xl"},vertical:{start:"rounded-t-xl",end:"rounded-b-xl"}},"rounded-2xl":{horizontal:{start:"rounded-s-2xl",end:"rounded-e-2xl"},vertical:{start:"rounded-t-2xl",end:"rounded-b-2xl"}},"rounded-3xl":{horizontal:{start:"rounded-s-3xl",end:"rounded-e-3xl"},vertical:{start:"rounded-t-3xl",end:"rounded-b-3xl"}},"rounded-full":{horizontal:{start:"rounded-s-full",end:"rounded-e-full"},vertical:{start:"rounded-t-full",end:"rounded-b-full"}}}},G={class:"sm:grid grid-cols-4 items-center"},B={class:"text-sm font-medium mb-1.5 sm:mb-0"},S={class:"col-start-2 col-span-3 space-y-4"},A=s({__name:"FormGroup",props:{label:{}},setup(e){return(n,t)=>(p(),v("div",G,[a("div",B,b(n.label),1),a("div",S,[f(n.$slots,"default")])]))}}),j=u(o.ui.strategy,o.ui.button,h),k=u(o.ui.strategy,o.ui.buttonGroup,C),I=s({name:"ButtonGroup",inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(j.size).includes(e)}},orientation:{type:String,default:"horizontal",validator(e){return["horizontal","vertical"].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:t,attrs:l}=x("buttonGroup",d(e,"ui"),k),i=r(()=>g(n)),c=r(()=>_(z(t.value.wrapper[e.orientation],t.value.rounded,t.value.shadow),e.class)),m=r(()=>t.value.orientation[t.value.rounded][e.orientation]);return y({orientation:d(e,"orientation"),size:d(e,"size"),ui:t,rounded:m}),()=>w("div",{class:c.value,...l.value},i.value)}});export{I as _,A as a};
