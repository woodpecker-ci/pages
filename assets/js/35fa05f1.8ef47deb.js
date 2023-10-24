"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3639],{17942:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(50959);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,f=s["".concat(l,".").concat(d)]||s[d]||y[d]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8783:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>O});var n=t(17942),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e},y=(e,r)=>i(e,a(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const f={},m="Security",v={unversionedId:"development/security",id:"version-1.0/development/security",title:"Security",description:"We take security seriously.",source:"@site/versioned_docs/version-1.0/92-development/09-security.md",sourceDirName:"92-development",slug:"/development/security",permalink:"/docs/development/security",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/92-development/09-security.md",tags:[],version:"1.0",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swagger, API Spec and Code Generation",permalink:"/docs/development/swagger"}},b={},O=[{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:3}],g={toc:O},w="wrapper";function k(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(w,y(s(s({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"security"}),"Security"),(0,n.kt)("p",null,"We take security seriously.",(0,n.kt)("br",{parentName:"p"}),"\n","If you discover a security issue, please bring it to their attention right away!"),(0,n.kt)("h3",s({},{id:"reporting-a-vulnerability"}),"Reporting a Vulnerability"),(0,n.kt)("p",null,"Please ",(0,n.kt)("strong",{parentName:"p"},"DO NOT")," file a public issue, instead send your report privately to ",(0,n.kt)("a",s({parentName:"p"},{href:"mailto:security@woodpecker-ci.org"}),(0,n.kt)("inlineCode",{parentName:"a"},"security @ woodpecker-ci.org")),"."),(0,n.kt)("p",null,"Security reports are greatly appreciated, and we will publicly thank you for it. If you choose to remain anonymous, we will respect your request and keep your name confidential."))}k.isMDXComponent=!0}}]);