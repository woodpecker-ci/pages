"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3085],{89822:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(50959),a=t(45924),l=t(8244),o=t(83956),c=t(21756),i=t(16762),s=t(50912);const m={mdxPageWrapper:"mdxPageWrapper_H48G"};function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:d}}=n,{wrapperClassName:f,hide_table_of_contents:v}=d;return r.createElement(l.FG,{className:(0,a.Z)(null!=f?f:o.k.wrapper.mdxPages,o.k.page.mdxPage)},r.createElement(l.d,{title:t,description:u}),r.createElement(c.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",m.mdxPageWrapper)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement("article",null,r.createElement(i.Z,null,r.createElement(n,null)))),!v&&n.toc.length>0&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:n.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},50912:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(50959),a=t(45924),l=t(31254);const o={tableOfContents:"tableOfContents_BaLi",docItemContainer:"docItemContainer_PZRe"};var c=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&f(e,t,n[t]);if(m)for(var t of m(n))d.call(n,t)&&f(e,t,n[t]);return e},p=(e,n)=>i(e,s(n)),g=(e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const b="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function O(e){var n=e,{className:t}=n,c=g(n,["className"]);return r.createElement("div",{className:(0,a.Z)(o.tableOfContents,"thin-scrollbar",t)},r.createElement(l.Z,p(v({},c),{linkClassName:b,linkActiveClassName:h})))}},31254:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(50959),a=t(5294),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))m.call(n,t)&&u(e,t,n[t]);return e},f=(e,n)=>o(e,c(n)),v=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t};function p(e){const n=e.map((e=>f(d({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const t=e,{parentIndex:a}=t,l=v(t,["parentIndex"]);a>=0?n[a].children.push(l):r.push(l)})),r}function g({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const r=g({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[f(d({},e),{children:r})]:r}))}function b(e){const n=e.getBoundingClientRect();return n.top===n.bottom?b(e.parentNode):n}function h(e,{anchorTopOffset:n}){var t,r;const a=e.find((e=>b(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(a))?a:null!=(t=e[e.indexOf(a)-1])?t:null}return null!=(r=e[e.length-1])?r:null}function O(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function L(e){const n=(0,r.useRef)(void 0),t=O();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let r=e;r<=n;r+=1)t.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=h(c,{anchorTopOffset:t.current}),s=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}const x=r.memo((function e({toc:n,className:t,linkClassName:a,isChild:l}){return n.length?r.createElement("ul",{className:l?void 0:t},n.map((n=>r.createElement("li",{key:n.id},r.createElement("a",{href:`#${n.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:n.value}}),r.createElement(e,{isChild:!0,toc:n.children,className:t,linkClassName:a}))))):null}));var y=Object.defineProperty,E=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,C=(e,n,t)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))N.call(n,t)&&C(e,t,n[t]);if(E)for(var t of E(n))H.call(n,t)&&C(e,t,n[t]);return e},_=(e,n)=>{var t={};for(var r in e)N.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&E)for(var r of E(e))n.indexOf(r)<0&&H.call(e,r)&&(t[r]=e[r]);return t};function w(e){var n=e,{toc:t,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:i,maxHeadingLevel:s}=n,m=_(n,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const u=(0,a.L)(),d=null!=i?i:u.tableOfContents.minHeadingLevel,f=null!=s?s:u.tableOfContents.maxHeadingLevel,v=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,r.useMemo)((()=>g({toc:p(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:t,minHeadingLevel:d,maxHeadingLevel:f});return L((0,r.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:f}}),[o,c,d,f])),r.createElement(x,k({toc:v,className:l,linkClassName:o},m))}}}]);