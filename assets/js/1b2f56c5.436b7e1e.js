/*! For license information please see 1b2f56c5.436b7e1e.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2401],{69263:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(11527),r=t(76225);const s={},a="Documentation",i={id:"development/docs",title:"Documentation",description:"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.",source:"@site/versioned_docs/version-1.0/92-development/04-docs.md",sourceDirName:"92-development",slug:"/development/docs",permalink:"/docs/development/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/92-development/04-docs.md",tags:[],version:"1.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI Development",permalink:"/docs/development/ui"},next:{title:"Architecture",permalink:"/docs/development/architecture"}},c={},d=[];function u(e){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(o.p,{children:["The documentation is using docusaurus as framework. You can learn more about it from its ",(0,n.jsx)(o.a,{href:"https://docusaurus.io/docs/",children:"official documentation"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["If you only want to change some text it probably is enough if you just search for the corresponding ",(0,n.jsx)(o.a,{href:"https://www.markdownguide.org/basic-syntax/",children:"Markdown"})," file inside the ",(0,n.jsx)(o.code,{children:"docs/docs/"})," folder and adjust it. If you want to change larger parts and test the rendered documentation you can run docusaurus locally. Similarly to the UI you need to install ",(0,n.jsx)(o.a,{href:"/docs/development/getting-started#install-nodejs--pnpm",children:"Node.js and pnpm"}),". After that you can run and build docusaurus locally by using the following commands:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"cd docs/\n\npnpm install\n\n# build plugins used by the docs\npnpm build:woodpecker-plugins\n\n# start docs with hot-reloading, so you can change the docs and directly see the changes in the browser without reloading it manually\npnpm start\n\n# or build the docs to deploy it to some static page hosting\npnpm build\n"})})]})}function l(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3354:(e,o,t)=>{var n=t(50959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,t){var n,s={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(u=o.ref),o)a.call(o,n)&&!c.hasOwnProperty(n)&&(s[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:r,type:e,key:d,ref:u,props:s,_owner:i.current}}o.Fragment=s,o.jsx=d,o.jsxs=d},11527:(e,o,t)=>{e.exports=t(3354)},76225:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>a});var n=t(50959);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);