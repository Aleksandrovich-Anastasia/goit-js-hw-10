import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{i as a}from"./assets/vendor-B0WGwTj1.js";const e=document.querySelector(".form");e.addEventListener("submit",s=>{s.preventDefault();const o=Number(e.elements.delay.value),i=e.elements.state.value;c(o,i).then(t=>{a.success({message:`
          <svg class="toast-icon" width="24" height="24">
            <use xlink:href="./img/sprite.svg#icon-ok"></use>
          </svg>
          <span class="toast-text-acc">OK</span><span class="toast-text">Fulfilled promise in ${t}ms</span>`,position:"topRight",timeout:3e3,icon:"",close:!1,class:"custom-toast custom-toast-success"})}).catch(t=>{a.error({message:`
          <svg class="toast-icon" width="24" height="24">
            <use xlink:href="./img/sprite.svg#icon-error"></use>
          </svg>
          <span class="toast-text-acc">Error</span><span class="toast-text">Rejected promise in ${t}ms</span>`,position:"topRight",icon:"",timeout:3e3,close:!1,class:"custom-toast custom-toast-error"})}),e.reset()});function c(s,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(s):t(s)},s)})}
//# sourceMappingURL=2-snakbar.js.map
