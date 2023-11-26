/*! For license information please see 48cb10ba.14010e85.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8895],{25113:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var s=i(11527),t=i(17279);const l={},r="Plugins",o={id:"usage/plugins/plugins",title:"Plugins",description:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.",source:"@site/docs/20-usage/51-plugins/10-plugins.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/plugins",permalink:"/docs/next/usage/plugins/plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/51-plugins/10-plugins.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/next/usage/intro"},next:{title:"Example plugin",permalink:"/docs/next/usage/plugins/sample-plugin"}},a={},u=[{value:"Plugin Isolation",id:"plugin-isolation",level:2},{value:"Finding Plugins",id:"finding-plugins",level:2},{value:"Creating a plugin",id:"creating-a-plugin",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."}),"\n",(0,s.jsx)(n.p,{children:"They are automatically pulled from the default container registry the agent's have configured."}),"\n",(0,s.jsx)(n.p,{children:"Example pipeline using the Docker and Slack plugins:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  publish:\n    image: plugins/docker\n    settings:\n      repo: foo/bar\n      tags: latest\n\n  notify:\n    image: plugins/slack\n    settings:\n      channel: dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin-isolation",children:"Plugin Isolation"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are just pipeline steps. They share the build workspace, mounted as a volume, and therefore have access to your source tree."}),"\n",(0,s.jsx)(n.h2,{id:"finding-plugins",children:"Finding Plugins"}),"\n",(0,s.jsx)(n.p,{children:"For official plugins, you can use the Woodpecker plugin index:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://woodpecker-ci.org/plugins",children:"Official Woodpecker Plugins"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["There are also other plugin lists with additional plugins. Keep in mind that ",(0,s.jsx)(n.a,{href:"https://www.drone.io/",children:"Drone"})," plugins are generally supported, but could need some adjustments and tweaking."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://plugins.drone.io",children:"Drone Plugins"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://woodpecker-plugins.geekdocs.de/",children:"Geeklab Woodpecker Plugins"})}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,s.jsxs)(n.p,{children:["See a ",(0,s.jsx)(n.a,{href:"/docs/next/usage/plugins/sample-plugin",children:"detailed plugin example"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3354:(e,n,i)=>{var s=i(50959),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,i){var s,l={},u=null,p=null;for(s in void 0!==i&&(u=""+i),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(p=n.ref),n)r.call(n,s)&&!a.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:u,ref:p,props:l,_owner:o.current}}n.Fragment=l,n.jsx=u,n.jsxs=u},11527:(e,n,i)=>{e.exports=i(3354)},17279:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(50959);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);