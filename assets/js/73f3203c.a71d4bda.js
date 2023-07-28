"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2325],{49613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,s=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return t?n.createElement(s,a(a({ref:r},p),{},{components:t})):n.createElement(s,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34919:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>v});var n=t(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&p(e,t,r[t]);return e};const u={},f="Migrate from Drone to Woodpecker",s={unversionedId:"administration/migrate-from-drone",id:"administration/migrate-from-drone",title:"Migrate from Drone to Woodpecker",description:"Migrate from Drone >= v1.0.0",source:"@site/docs/30-administration/20-migrate-from-drone.md",sourceDirName:"30-administration",slug:"/administration/migrate-from-drone",permalink:"/docs/next/administration/migrate-from-drone",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/20-migrate-from-drone.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"},next:{title:"Docker backend",permalink:"/docs/next/administration/backends/docker"}},g={},v=[{value:"Migrate from Drone &gt;= v1.0.0",id:"migrate-from-drone--v100",level:2},{value:"Migrate from Drone &lt;= v0.8",id:"migrate-from-drone--v08",level:2}],y={toc:v};function b(e){var r,t=e,{components:o}=t,p=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=m(m({},y),p),i(r,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"migrate-from-drone-to-woodpecker"}),"Migrate from Drone to Woodpecker"),(0,n.kt)("h2",m({},{id:"migrate-from-drone--v100"}),"Migrate from Drone >= v1.0.0"),(0,n.kt)("p",null,"We currently do not provide a way to do so.\nIf you are interested or have a custom script to do so, please get in contact with us."),(0,n.kt)("h2",m({},{id:"migrate-from-drone--v08"}),"Migrate from Drone <= v0.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure you are already running Drone v0.8"),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Woodpecker v0.14.4, migration will be done during startup"),(0,n.kt)("li",{parentName:"ul"},"If you are using Sqlite3, rename ",(0,n.kt)("inlineCode",{parentName:"li"},"drone.sqlite")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"woodpecker.sqlite")," and\nrename or adjust the mount/folder of the volume from ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/drone/"),"\nto ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/woodpecker/")),(0,n.kt)("li",{parentName:"ul"},"Upgrade to Woodpecker v1.0.0, the migration will be performed during\nstartup")))}b.isMDXComponent=!0}}]);