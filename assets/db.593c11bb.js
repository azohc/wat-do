const a=(t,o)=>{const e=localStorage.getItem(t),l={date:new Date,elapsedTime:o};localStorage.setItem(t,JSON.stringify(e?e.concat([l]):[l]))},g=()=>{let t={},o=Object.keys(localStorage),e=o.length;for(;e--;)t[o[e]]=JSON.parse(localStorage.getItem(o[e]));return t};export{g,a as l};
