"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3608],{36544:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(50959),l=a(23207),n=a(6810),c=a(84053),o=a(67856),i=a(59217),m=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&u(e,a,t[a]);return e};function g({year:e,posts:t}){return r.createElement(r.Fragment,null,r.createElement(i.Z,{as:"h3",id:e},e),r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function E({years:e}){return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},e.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(g,h({},e))))))))}function v({archive:e}){const t=(0,n.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=function(e){const t=e.reduce(((e,t)=>{var a;const r=t.metadata.date.split("-")[0],l=null!=(a=e.get(r))?a:[];return e.set(r,[t,...l])}),new Map);return Array.from(t,(([e,t])=>({year:e,posts:t})))}(e.blogPosts);return r.createElement(r.Fragment,null,r.createElement(c.d,{title:t,description:a}),r.createElement(o.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement(i.Z,{as:"h1",className:"hero__title"},t),r.createElement("p",{className:"hero__subtitle"},a))),r.createElement("main",null,l.length>0&&r.createElement(E,{years:l}))))}}}]);