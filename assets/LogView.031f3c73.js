import{g as m}from"./db.593c11bb.js";import{r as p,c as e,F as c,q as _,o as s,b as t,h as a,z as u}from"./index.7cc7e5b6.js";const h={class:"mi-auto my-6 flex w-4/5 flex-col"},f=t("span",null," you did ",-1),y={class:"font-semibold"},v={class:"flex justify-end"},x=t("span",null," for ",-1),g={class:"mx-2"},k={key:0},T={key:1},L=t("hr",{class:"m-3 flex-grow rounded border-2"},null,-1),b={key:1},w=t("span",null," there is no record of any done activities... ",-1),S=[w],V={__name:"LogView",setup(B){const l=p(Object.entries(m())),r=(i,d)=>{let o=`${i} ${d}`;return i!==1&&(o+="s"),o+" "};return(i,d)=>(s(),e("div",h,[l.value.length?(s(!0),e(c,{key:0},_(l.value,o=>(s(),e("div",null,[f,t("span",y,a(o[0]),1),(s(!0),e(c,null,_(o[1],n=>(s(),e("div",v,[x,t("span",g,[n.elapsedTime.hours?(s(),e("span",k,a(r(n.elapsedTime.hours,"hour")),1)):u("",!0),n.elapsedTime.minutes?(s(),e("span",T,a(r(n.elapsedTime.minutes,"minute")),1)):u("",!0),t("span",null,a(r(n.elapsedTime.seconds,"second")),1)]),t("span",null," on "+a(new Date(n.date).toLocaleDateString("es-ES")),1)]))),256)),L]))),256)):(s(),e("div",b,S))]))}};export{V as default};
