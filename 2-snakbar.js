import{s as i}from"./assets/sprite-Bj-bcaRk.js";/* empty css                     */import{i as r}from"./assets/vendor-B0WGwTj1.js";const e=document.querySelector(".form");e.addEventListener("submit",s=>{s.preventDefault();const o=Number(e.elements.delay.value),a=e.elements.state.value;c(o,a).then(t=>{r.success({message:`
          <svg class="toast-icon" width="24" height="24">
                <use xlink:href="${i}#icon-ok"></use>
              </svg>
              <span class="toast-text-acc">Error</span>
              <span class="toast-text">Fulfilled promise in ${t}ms</span>`,position:"topRight",timeout:3e3,icon:"",close:!1,class:"custom-toast custom-toast-success"})}).catch(t=>{r.error({message:`
          <svg class="toast-icon" width="24" height="24">
                <use xlink:href="${i}#icon-error"></use>
              </svg>
              <span class="toast-text-acc">Error</span>
              <span class="toast-text">Rejected promise in ${t}ms</span>`,position:"topRight",icon:"",timeout:3e3,close:!1,class:"custom-toast custom-toast-error"})}),e.reset()});function c(s,o){return new Promise((a,t)=>{setTimeout(()=>{o==="fulfilled"?a(s):t(s)},s)})}
//# sourceMappingURL=2-snakbar.js.map
