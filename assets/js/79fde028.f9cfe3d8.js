/*! For license information please see 79fde028.f9cfe3d8.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6504],{37195:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(11527),i=n(7463);const r={},s="Getting started",a={id:"usage/intro",title:"Getting started",description:"Repository Activation",source:"@site/versioned_docs/version-2.0/20-usage/10-intro.md",sourceDirName:"20-usage",slug:"/usage/intro",permalink:"/docs/2.0/usage/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/20-usage/10-intro.md",tags:[],version:"2.0",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Woodpecker",permalink:"/docs/2.0/intro"},next:{title:"Terminology",permalink:"/docs/2.0/usage/terminiology/"}},c={},l=[{value:"Repository Activation",id:"repository-activation",level:2},{value:"Required Permissions",id:"required-permissions",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Execution",id:"execution",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsx)(o.h2,{id:"repository-activation",children:"Repository Activation"}),"\n",(0,t.jsx)(o.p,{children:"To activate your project navigate to your account settings. You will see a list of repositories which can be activated with a simple toggle. When you activate your repository, Woodpecker automatically adds webhooks to your forge (e.g. GitHub, Gitea, ...)."}),"\n",(0,t.jsx)(o.p,{children:"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your forge will automatically send a webhook to Woodpecker which will in turn trigger the pipeline execution."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"repository list",src:n(23608).Z+"",width:"1128",height:"745"})}),"\n",(0,t.jsx)(o.h2,{id:"required-permissions",children:"Required Permissions"}),"\n",(0,t.jsxs)(o.p,{children:["The user who enables a repo in Woodpecker must have ",(0,t.jsx)(o.code,{children:"Admin"})," rights on that repo, so that Woodpecker can add the webhook."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"Note that manually creating webhooks yourself is not possible.\nThis is because webhooks are signed using a per-repository secret key which is not exposed to end users."})}),"\n",(0,t.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(o.p,{children:["To configure your pipeline you must create a ",(0,t.jsx)(o.code,{children:".woodpecker.yml"})," file in the root of your repository. The ",(0,t.jsx)(o.code,{children:".woodpecker.yml"})," file is used to define your pipeline steps."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["We support most of YAML 1.2, but preserve some behavior from 1.1 for backward compatibility.\nRead more at: ",(0,t.jsx)(o.a,{href:"https://github.com/go-yaml/yaml/tree/v3",children:"https://github.com/go-yaml/yaml"})]})}),"\n",(0,t.jsx)(o.p,{children:"Example pipeline configuration:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  postgres:\n    image: postgres:9.4.5\n    environment:\n      - POSTGRES_USER=myapp\n"})}),"\n",(0,t.jsx)(o.p,{children:"Example pipeline configuration with multiple, serial steps:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"steps:\n  backend:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\n  frontend:\n    image: node:6\n    commands:\n      - npm install\n      - npm test\n\n  notify:\n    image: plugins/slack\n    channel: developers\n    username: woodpecker\n"})}),"\n",(0,t.jsx)(o.h2,{id:"execution",children:"Execution"}),"\n",(0,t.jsx)(o.p,{children:"To trigger your first pipeline execution you can push code to your repository, open a pull request, or push a tag. Any of these events triggers a webhook from your forge and execute your pipeline."})]})}function p(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,o,n)=>{var t=n(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,n){var t,r={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(d=o.ref),o)s.call(o,t)&&!c.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===r[t]&&(r[t]=o[t]);return{$$typeof:i,type:e,key:l,ref:d,props:r,_owner:a.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},11527:(e,o,n)=>{e.exports=n(3354)},23608:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/repo-list-41c8340b0eb48a098ad2fbfcd820adc9.png"},7463:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>s});var t=n(50959);const i={},r=t.createContext(i);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);