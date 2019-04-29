/** 
 * reLift-HTML v0.0.5
 * Copyright 2019 Mardix mcx2082@gmail.com
 * License: MIT
 * https://github.com/mardix/relift-html
 * Build date: 4/29/2019, 12:30:42 AM
 * 
 */
const e=e=>Array.from(e.attributes).map(e=>({[e.name]:e.value})).reduce((e,t)=>({...e,...t}),{}),t=(e,t)=>Array.from(e.childNodes).filter(e=>t(e)).map(e=>({[t(e)]:e})).reduce((e,t)=>({...e,...t}),{});const n=(e,t)=>(t&&t.toString&&(e&&(e+="."),e+=t.toString()),e),r=Symbol("ProxyTarget");var o=(e,t)=>{let o=!1,i=!1;const c=new WeakMap,l=new WeakMap,s=(e,r,c,l)=>{o?i||(i=!0):t.call(f,n(e,r),l,c)},a=(e,t)=>{const n=c.get(e);n&&n.delete(t)},u={get(e,t,o){if("___target___"===t)return e;if(t===r)return e;const i=Reflect.get(e,t,o);if((e=>null===e||"object"!=typeof e&&"function"!=typeof e)(i)||"constructor"===t)return i;const s=((e,t)=>{let n=c.get(e);if(n)return n;n=new Map,c.set(e,n);let r=n.get(t);return r||(r=Reflect.getOwnPropertyDescriptor(e,t),n.set(t,r)),r})(e,t);if(s&&!s.configurable){if(s.set&&!s.get)return;if(!1===s.writable)return i}return l.set(i,n(l.get(e),t)),new Proxy(i,u)},set(e,t,n,o){n&&void 0!==n[r]&&(n=n[r]);const i=Reflect.get(e,t,o),c=Reflect.set(e,t,n);return i!==n&&s(l.get(e),t,i,n),c},defineProperty(e,t,n){const r=Reflect.defineProperty(e,t,n);return a(e,t),s(l.get(e),t,void 0,n.value),r},deleteProperty(e,t){const n=Reflect.get(e,t),r=Reflect.deleteProperty(e,t);return a(e,t),s(l.get(e),t,n),r},apply(e,n,r){if(!o){o=!0;const c=Reflect.apply(e,n,r);return i&&t(),o=!1,i=!1,c}return Reflect.apply(e,n,r)}};l.set(e,"");const f=new Proxy(e,u);return f};const i=[];for(const e in document){const t=null===document[e]||"function"==typeof document[e];e.startsWith("on")&&t&&i.push(e.substring(2))}const c="r-events-list",l=e=>`r-on-${e}`;const s={$for:function(e,t,n){const r=/(.*)\s+(in)\s+(.*)$/.exec(t);if(4===r.length){const t=r[1].replace("(","").replace(")",""),o=r[3];b(e,`\${${o}.map(function(${t}) { return \``,"`}.bind(this)).join('')}"),d(e,n)}},$if:function(e,t,n){d(e,n),m(e,`\${${t} ? `);const r=e.nextElementSibling;r&&u(r,"else")?(b(e,"`","`"),d(r,"else"),b(r,":`","`}")):b(e,"`","`:``}")},$value:function(e,t,n){const r=e.nodeName.toLowerCase();f(e,"default");u(e,"default")&&d(e,"default");"textarea"===r?e.innerHTML=`\${${t}}`:"input"===r&&(["radio","checkbox"].includes(e.getAttribute("type"))||e.setAttribute("value",`\${${t}}`));d(e,n)}};const a=e=>`r-${e}`,u=(e,t)=>e.hasAttribute(a(t)),f=(e,t)=>e.getAttribute(a(t)),d=(e,t)=>e.removeAttribute(a(t)),p=(e,t)=>e.querySelectorAll(`[${a(t)}]`),m=(e,t)=>e.insertAdjacentText("beforebegin",t),b=(e,t,n)=>{m(e,t),((e,t)=>e.insertAdjacentText("afterend",t))(e,n)};const g=(e,t)=>e&&"function"==typeof e[t],y=e=>(new DOMParser).parseFromString(e,"text/html").body.firstChild,$=e=>t=>new Function(`return \`${e}\``).call(t),A=(e,t)=>n=>n[e]=t({...n});function h(n,r=null,o={}){r&&(n.innerHTML=r);const a=n.cloneNode(!0);!function(e){for(const t of e.querySelectorAll("[\\@call]")){const e=t.getAttribute("@call");t.removeAttribute("@call");let n=["click"];t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?n=["input","paste"]:t instanceof HTMLSelectElement?n=["change"]:t instanceof HTMLFormElement?n=["submit"]:t instanceof HTMLAnchorElement&&t.setAttribute("href","javascript:void(0);");let r=(t.getAttribute(c)||"").split(",").filter(e=>e);r=r.concat(n),t.setAttribute(c,r.join(","));for(const r of n)t.setAttribute(l(r),e)}for(const t of i)for(const n of e.querySelectorAll(`[\\@${t}]`)){const e=(n.getAttribute(c)||"").split(",").filter(e=>e);e.push(t),n.setAttribute(c,e.join(",")),n.setAttribute(l(t),n.getAttribute(`@${t}`)),n.removeAttribute(`@${t}`),n instanceof HTMLAnchorElement&&n.setAttribute("href","javascript:void(0);")}}(a),function(e,t={}){const n={...t,...s};for(const t in n){const r=t.replace("$","");for(const o of p(e,r))if(u(o,r)){const e=f(o,r);n[t](o,e,r)}}}(a),n.innerHTML=a.innerHTML,function(e,t){function n(e){Array.from(e.querySelectorAll(`[${c}]`)).map(e=>{(e.getAttribute(c)||"").split(",").filter(e=>e).map(n=>{e[`on${n}`]=(r=>{r.preventDefault();const o=e.getAttribute(l(n));t[o].call(t,r)})})})}const r=new MutationObserver(e=>{[...e].filter(e=>e.addedNodes.length>0).map(e=>e.target).map(e=>n(e))});r.observe(e,{attributes:!0,childList:!0,subtree:!0}),n(e)}(n,o);const d=$(a.outerHTML);return r=>{const o=y(d(r));return function n(r,o,i={}){if(i={key:e=>e.id,...i},"string"==typeof o){const e=o;(o=document.createElement(r.tagName)).innerHTML=e}const c=t(r,i.key);let l;for(l=0;o.firstChild;l++){const t=o.removeChild(o.firstChild);if(l>=r.childNodes.length){r.appendChild(t);continue}let s=r.childNodes[l];const a=i.key(t);if(i.key(s)||a){const e=a&&a in c?c[a]:t;e!==s&&(s=r.insertBefore(e,s))}if(s.nodeType!==t.nodeType||s.tagName!==t.tagName)r.replaceChild(t,s);else if([Node.TEXT_NODE,Node.COMMENT_NODE].indexOf(s.nodeType)>=0)s.textContent!==t.textContent&&(s.textContent=t.textContent);else if(s!==t){const r=e(s),o=e(t);for(const e in r)e in o||s.removeAttribute(e);for(const e in o)e in r&&r[e]===o[e]||s.setAttribute(e,o[e]);n(s,t)}}for(;r.childNodes.length>l;)r.removeChild(r.lastChild)}(n,o)}}export default function(e={}){const t=["data","el","template","created","updated","$store"],n={el:null,data:{},template:null,created:()=>{},updated:()=>{},$store:{},...e},r="string"==typeof n.el?document.querySelector(n.el):n.el;if(!(r instanceof HTMLElement))throw new Error(`reLift-HTML setup error: 'el' is not a DOM Element. >> el: ${n.el}`);const i=n.template?n.template:r.innerHTML,c=Object.keys(n).filter(e=>!t.includes(e)).filter(e=>g(n,e)).reduce((e,t)=>({...e,[t]:n[t]}),{}),l=Object.keys(n.data).filter(e=>!g(n.data,e)).reduce((e,t)=>({...e,[t]:n.data[t]}),{}),s=Object.keys(n.data).filter(e=>g(n.data,e)).map(e=>A(e,n.data[e])),a=e=>s.forEach(t=>t(e));let u={$store:{},...l},f=void 0;function d(e=!0){b({...u})&&e&&n.updated.call(m)}Object.keys(n.$store).length&&(f=n.$store,u.$store=n.$store.getState(),n.$store.subscribe(e=>{u.$store=n.$store.getState(),a(u),d()}));const p=o(u,()=>{a(u),d()}),m={...c,el:r,data:p,render:d,store:f},b=h(r,i,m);document.addEventListener("DOMContentLoaded",()=>{a(u),d(!1),n.created.call(m),r.style.display="block"})}