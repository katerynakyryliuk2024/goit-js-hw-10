import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector(".delay-input");console.dir(n);const s=document.querySelector(".form");console.dir(s);s.addEventListener("submit",e=>{e.preventDefault();const r=e.target[0].value;console.dir(r),console.dir(e.target[2]),new Promise((t,i)=>{setTimeout(()=>{if(e.target[2].checked)return t();i()},r)}).then(t=>o.success({title:"Ok",message:`✅ Fulfilled promise in ${r}ms`})).catch(t=>o.error({title:"Error",message:`❌ Rejected promise in ${r}ms`}))});
//# sourceMappingURL=2-snackbar.js.map
