import{_ as x,r as k,o as r,c as d,a as o,b as A,n as y,u as R,p as G,d as P,t as X,e as _,w as Y,f as z,g as f,h as c,i as h,j as u,k as w,F as C,l as H,S as K}from"./index.35ee0923.js";const M={class:"p-4"},U={__name:"Pill",props:{clickable:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},setup(t){const s=t,a=k(s.active),i="inline-block rounded border-2 border-black border-b-black   px-3 py-1 shadow-md text-center h-16 text-xl flex justify-around   items-center ",p="hover:font-bold hover:shadow-xl",n="cursor-default",e=" bg-slate-400",v=" bg-slate-300";return(m,g)=>(r(),d("div",M,[o("a",{class:y([i].concat(s.clickable?p:n).concat(a.value?e:v)),href:"#"},[A(m.$slots,"default",{},void 0,!0)],2)]))}};var T=x(U,[["__scopeId","data-v-aeb1112c"]]);const b=t=>(G("data-v-53242127"),t=t(),P(),t),D={class:"lds-ellipsis"},q=b(()=>o("div",null,null,-1)),J=b(()=>o("div",null,null,-1)),Q=b(()=>o("div",null,null,-1)),W=b(()=>o("div",null,null,-1)),Z=[q,J,Q,W],ee={__name:"Spinner",props:{color:{default:"black"}},setup(t){return R(s=>({f28458ee:t.color})),(s,a)=>(r(),d("div",D,Z))}};var I=x(ee,[["__scopeId","data-v-53242127"]]);const te={key:0,class:"flex h-[400px] w-full items-center justify-center"},se={class:"mi-auto my-10 flex w-11/12 basis-1/4 flex-wrap items-center justify-around"},oe={__name:"Activity",props:{rolling:{type:Boolean,default:!0}},emits:["rolled"],async setup(t,{emit:s}){let a,i;const n=X(t,"rolling"),e=k({}),v=_(()=>e.value.participants===1?"solo":`${e.value.participants} people`),m=_(()=>{const l=["\u{1FAF0}","\u{1F4B0}","\u{1F4B8}","\u{1F911}"],S=e.value.price,O=1+Math.floor(S*3);return S===0?"zero cost":Array(O).fill(l[l.length*Math.random()|0]).join("")}),g=async()=>{console.debug("Activity:: Fetching... ");const l=await fetch("http://www.boredapi.com/api/activity/");l.ok?(console.debug("Activity:: HTTP OK: ",l.status),e.value=await l.json()):console.error("Activity:: HTTP Error: "+l.status,l),s("rolled")};Y(n,async()=>n.value&&g()),n&&([a,i]=z(()=>g()),await a,i());const E="text-7xl",L="text-6xl",$="text-5xl",V="text-4xl",B=_(()=>F.value?V:N.value?$:j.value?L:E),j=_(()=>e.value.activity.length>22),N=_(()=>e.value.activity.length>33),F=_(()=>e.value.activity.length>60);return(l,S)=>f(n)?(r(),d("div",te,[c(I)])):(r(),d(C,{key:1},[o("h1",{class:y("hyphens-auto mi-auto my-6  w-4/5  break-words text-center lowercase ".concat(f(B)))},h(e.value.activity),3),o("div",se,[c(T,null,{default:u(()=>[w(h(e.value.type),1)]),_:1}),c(T,null,{default:u(()=>[w(h(f(v)),1)]),_:1}),c(T,null,{default:u(()=>[w(h(f(m)),1)]),_:1})])],64))}};const ae={class:"fixed bottom-0 w-full py-6"},le={__name:"StickyFooter",setup(t){return(s,a)=>(r(),d("footer",ae,[A(s.$slots,"default",{},void 0,!0)]))}};var ne=x(le,[["__scopeId","data-v-d44bd1f8"]]);const ce={class:"mi-auto fallback-activity flex w-full items-center justify-center"},re={class:"mi-auto flex w-[77vw] justify-between"},ie={__name:"RollView",setup(t){const s="h-14 flex justify-around items-center text-2xl   basis-32 inline-block rounded border-2 border-black   border-b-black px-3 py-1 text-white shadow-md   hover:font-bold hover:shadow-xl",a=k(!0),i=()=>{console.log(`starting to ${response.value.activity}...`)},p=()=>a.value=!0;return(n,e)=>(r(),d(C,null,[(r(),H(K,null,{fallback:u(()=>[o("div",ce,[c(I)])]),default:u(()=>[c(oe,{rolling:a.value,onRolled:e[0]||(e[0]=v=>a.value=!1)},null,8,["rolling"])]),_:1})),c(ne,null,{default:u(()=>[o("div",re,[o("button",{class:y(s.concat(" bg-green-700")),onClick:i}," ok ",2),o("button",{class:y(s.concat(" bg-red-700")),onClick:p}," nah ",2)])]),_:1})],64))}};var ue=x(ie,[["__scopeId","data-v-06ca0aab"]]);export{ue as default};
