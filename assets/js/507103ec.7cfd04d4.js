/*! For license information please see 507103ec.7cfd04d4.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2512],{90296:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var s=i(2488),t=i(37052);const r={},o="Plugins",l={id:"usage/plugins/plugins",title:"Plugins",description:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.",source:"@site/versioned_docs/version-0.15/20-usage/51-plugins/10-plugins.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/plugins",permalink:"/docs/0.15/usage/plugins/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/20-usage/51-plugins/10-plugins.md",tags:[],version:"0.15",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/0.15/usage/environment"},next:{title:"Example plugin",permalink:"/docs/0.15/usage/plugins/sample-plugin"}},a={},p=[{value:"Plugin Isolation",id:"plugin-isolation",level:2},{value:"Creating a plugin",id:"creating-a-plugin",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."}),"\n",(0,s.jsxs)(n.p,{children:["They are automatically pulled from ",(0,s.jsx)(n.a,{href:"http://plugins.drone.io",children:"plugins.drone.io"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example pipeline using the Docker and Slack plugins:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  publish:\n    image: plugins/docker\n    settings:\n      repo: foo/bar\n      tags: latest\n\n  notify:\n    image: plugins/slack\n    settings:\n      channel: dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin-isolation",children:"Plugin Isolation"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are just pipeline steps. They share the build workspace, mounted as a volume, and therefore have access to your source tree."}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,s.jsxs)(n.p,{children:["See a ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/plugins/sample-plugin",children:"detailed plugin example"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},38088:(e,n,i)=>{var s=i(96651),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,i){var s,r={},p=null,u=null;for(s in void 0!==i&&(p=""+i),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:p,ref:u,props:r,_owner:l.current}}n.Fragment=r,n.jsx=p,n.jsxs=p},2488:(e,n,i)=>{e.exports=i(38088)},37052:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>o});var s=i(96651);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);