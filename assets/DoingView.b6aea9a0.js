import{_ as S,u as I,S as C}from"./StickyFooter.bb4c994c.js";import{r as f,c as i,a as t,h as o,j as u,x as k,n as c,i as T,k as w,F as g,y as N,o as r,B as d,q as O,p as V,d as b}from"./index.028adc0f.js";const A="ACTIVITY_DONE",D=(s,l)=>{console.log("would save",A,{activity:s,time:l})};const h=s=>(V("data-v-12837fae"),s=s(),b(),s),E={class:"flex flex-col items-center"},B={key:0,class:"my-6 text-center text-4xl"},F=h(()=>t("span",null,":",-1)),R=h(()=>t("span",null,":",-1)),j={__name:"DoingView",setup(s){const l=N(),a=I();(!a||!a.activity||!Object.hasOwn(a.activity,"activity"))&&l.replace("/");const n=f(!0),e=f({hours:0,minutes:0,seconds:0}),m=()=>setInterval(()=>{e.value.seconds++,e.value.seconds===60&&(e.value.seconds=0,e.value.minutes++),e.value.minutes===60&&(e.value.minutes=0,e.value.hours++)},1e3);let p=m();const y=()=>{n.value=!n.value,n.value?p=m():clearInterval(p)},v=_=>(_<10?"0":"")+_,x=()=>{D(a.activity.activity,e.value),l.push("/log")};return(_,L)=>(r(),i(g,null,[t("div",E,[o(a).activity?(r(),i("h1",B," you started to "+u(o(a).activity.activity),1)):k("",!0),t("main",{class:c("mt-12 text-8xl ".concat(n.value?"":"opacity-oscillating"))},[t("span",null,u(v(e.value.hours)),1),F,t("span",null,u(v(e.value.minutes)),1),R,t("span",null,u(v(e.value.seconds)),1)],2)]),T(C,null,{default:w(()=>[t("div",{class:c(o(O))},[n.value?(r(),i("div",{key:0,class:c(o(d).concat(" max-w-xs flex-grow bg-amber-700")),onClick:y}," pause ",2)):(r(),i(g,{key:1},[t("button",{onClick:y,class:c(o(d).concat(" bg-green-700"))}," resume ",2),t("button",{onClick:x,class:c(o(d).concat(" bg-red-700"))}," finish ",2)],64))],2)]),_:1})],64))}};var z=S(j,[["__scopeId","data-v-12837fae"]]);export{z as default};
