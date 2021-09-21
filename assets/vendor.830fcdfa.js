function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c,i;function u(t,n){return c||(c=document.createElement("a")),c.href=n,t===c.href}function f(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function l(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,s){if(r){const c=a(n,e,o,s);t.p(c,r)}}function p(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function d(t,n){t.appendChild(n)}function v(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function x(){return m("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t){return""===t?null:+t}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function O(t,n){t.value=null==n?"":n}function j(t){i=t}function A(){if(!i)throw new Error("Function called outside component initialization");return i}function C(t){A().$$.on_mount.push(t)}function L(t){A().$$.after_update.push(t)}const S=[],z=[],N=[],P=[],T=Promise.resolve();let q=!1;function B(t){N.push(t)}let F=!1;const M=new Set;function D(){if(!F){F=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];j(n),G(n.$$)}for(j(null),S.length=0;z.length;)z.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];M.has(n)||(M.add(n),n())}N.length=0}while(S.length);for(;P.length;)P.pop()();q=!1,F=!1,M.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}const H=new Set;let I;function J(){I={r:0,c:[],p:I}}function K(){I.r||o(I.c),I=I.p}function Q(t,n){t&&t.i&&(H.delete(t),t.i(n))}function R(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function U(t){t&&t.c()}function V(t,e,s,c){const{fragment:i,on_mount:u,on_destroy:f,after_update:a}=t.$$;i&&i.m(e,s),c||B((()=>{const e=u.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(B)}function W(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function X(t,n){-1===t.$$.dirty[0]&&(S.push(t),q||(q=!0,T.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Y(n,r,s,c,u,f,a,l=[-1]){const h=i;j(n);const p=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:e(),dirty:l,skip_bound:!1,root:r.target||h.$$.root};a&&a(p.root);let d=!1;if(p.ctx=s?s(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&X(n,t)),e})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=(v=r.target,Array.from(v.childNodes));p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();r.intro&&Q(n.$$.fragment),V(n,r.target,r.anchor,r.customElement),D()}var v;j(h)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var tt={exports:{}};!function(t){var n=Object.prototype.hasOwnProperty,e="~";function o(){}function r(t,n,e){this.fn=t,this.context=n,this.once=e||!1}function s(t,n,o,s,c){if("function"!=typeof o)throw new TypeError("The listener must be a function");var i=new r(o,s||t,c),u=e?e+n:n;return t._events[u]?t._events[u].fn?t._events[u]=[t._events[u],i]:t._events[u].push(i):(t._events[u]=i,t._eventsCount++),t}function c(t,n){0==--t._eventsCount?t._events=new o:delete t._events[n]}function i(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(e=!1)),i.prototype.eventNames=function(){var t,o,r=[];if(0===this._eventsCount)return r;for(o in t=this._events)n.call(t,o)&&r.push(e?o.slice(1):o);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},i.prototype.listeners=function(t){var n=e?e+t:t,o=this._events[n];if(!o)return[];if(o.fn)return[o.fn];for(var r=0,s=o.length,c=new Array(s);r<s;r++)c[r]=o[r].fn;return c},i.prototype.listenerCount=function(t){var n=e?e+t:t,o=this._events[n];return o?o.fn?1:o.length:0},i.prototype.emit=function(t,n,o,r,s,c){var i=e?e+t:t;if(!this._events[i])return!1;var u,f,a=this._events[i],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(t,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,o),!0;case 4:return a.fn.call(a.context,n,o,r),!0;case 5:return a.fn.call(a.context,n,o,r,s),!0;case 6:return a.fn.call(a.context,n,o,r,s,c),!0}for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];a.fn.apply(a.context,u)}else{var h,p=a.length;for(f=0;f<p;f++)switch(a[f].once&&this.removeListener(t,a[f].fn,void 0,!0),l){case 1:a[f].fn.call(a[f].context);break;case 2:a[f].fn.call(a[f].context,n);break;case 3:a[f].fn.call(a[f].context,n,o);break;case 4:a[f].fn.call(a[f].context,n,o,r);break;default:if(!u)for(h=1,u=new Array(l-1);h<l;h++)u[h-1]=arguments[h];a[f].fn.apply(a[f].context,u)}}return!0},i.prototype.on=function(t,n,e){return s(this,t,n,e,!1)},i.prototype.once=function(t,n,e){return s(this,t,n,e,!0)},i.prototype.removeListener=function(t,n,o,r){var s=e?e+t:t;if(!this._events[s])return this;if(!n)return c(this,s),this;var i=this._events[s];if(i.fn)i.fn!==n||r&&!i.once||o&&i.context!==o||c(this,s);else{for(var u=0,f=[],a=i.length;u<a;u++)(i[u].fn!==n||r&&!i[u].once||o&&i[u].context!==o)&&f.push(i[u]);f.length?this._events[s]=1===f.length?f[0]:f:c(this,s)}return this},i.prototype.removeAllListeners=function(t){var n;return t?(n=e?e+t:t,this._events[n]&&c(this,n)):(this._events=new o,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=e,i.EventEmitter=i,t.exports=i}(tt);const nt=[];function et(n,e=t){let o;const r=new Set;function c(t){if(s(n,t)&&(n=t,o)){const t=!nt.length;for(const e of r)e[1](),nt.push(e,n);if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,i=t){const u=[s,i];return r.add(u),1===r.size&&(o=e(c)||t),s(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}export{u as A,L as B,O as C,E as D,t as E,C as F,z as G,r as H,_ as I,Z as S,l as a,R as b,g as c,m as d,tt as e,$ as f,p as g,w as h,Y as i,v as j,d as k,b as l,k as m,J as n,K as o,y as p,f as q,U as r,s,Q as t,h as u,x as v,et as w,V as x,W as y,o as z};
