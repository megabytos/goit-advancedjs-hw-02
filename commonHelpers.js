import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");t.disabled=!0;let o;e.addEventListener("click",()=>{e.disabled=!0,t.disabled=!1,o=setInterval(()=>{document.body.style.backgroundColor=r()},1e3)});t.addEventListener("click",()=>{e.disabled=!1,t.disabled=!0,clearInterval(o)});function r(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map