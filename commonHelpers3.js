import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as m}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",c);function c(e){e.preventDefault();const r=Number(e.currentTarget.elements.delay.value),s=Number(e.currentTarget.elements.step.value),o=Number(e.currentTarget.elements.amount.value);for(let t=1;t<=o;t++){const u=r+t*s;a(t,u).then(({position:n,delay:i})=>{m.success({message:`✅ Fulfilled promise ${n} in ${i}ms`,position:"topRight"})}).catch(({position:n,delay:i})=>{m.error({message:`❌ Rejected promise ${n} in ${i}ms`,position:"topRight"})})}e.currentTarget.reset()}function a(e,r){const s=Math.random()>.3;return new Promise((o,t)=>{setTimeout(()=>{s?o({position:e,delay:r}):t({position:e,delay:r})},r)})}
//# sourceMappingURL=commonHelpers3.js.map