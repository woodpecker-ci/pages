/*! For license information please see 3368956c.412cced2.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1971],{38796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(11527),o=n(76225);const r={},s="Bitbucket",c={id:"administration/forges/bitbucket",title:"Bitbucket",description:"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:",source:"@site/docs/30-administration/11-forges/50-bitbucket.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/bitbucket",permalink:"/docs/next/administration/forges/bitbucket",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/11-forges/50-bitbucket.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/docs/next/administration/forges/gitlab"},next:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"}},d={},a=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BITBUCKET</code>",id:"woodpecker_bitbucket",level:3},{value:"<code>WOODPECKER_BITBUCKET_CLIENT</code>",id:"woodpecker_bitbucket_client",level:3},{value:"<code>WOODPECKER_BITBUCKET_CLIENT_FILE</code>",id:"woodpecker_bitbucket_client_file",level:3},{value:"<code>WOODPECKER_BITBUCKET_SECRET</code>",id:"woodpecker_bitbucket_secret",level:3},{value:"<code>WOODPECKER_BITBUCKET_SECRET_FILE</code>",id:"woodpecker_bitbucket_secret_file",level:3},{value:"Missing Features",id:"missing-features",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bitbucket",children:"Bitbucket"}),"\n",(0,i.jsx)(t.p,{children:"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_BITBUCKET=true\n+     - WOODPECKER_BITBUCKET_CLIENT=... # called \"Key\" in Bitbucket\n+     - WOODPECKER_BITBUCKET_SECRET=...\n\n  woodpecker-agent:\n    [...]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"registration",children:"Registration"}),"\n",(0,i.jsxs)(t.p,{children:["You must register an OAuth application at Bitbucket in order to get a key and secret combination for woodpecker. Navigate to your workspace settings and choose ",(0,i.jsx)(t.code,{children:"OAuth consumers"})," from the menu, and finally click ",(0,i.jsx)(t.code,{children:"Add Consumer"})," (the url should be like: ",(0,i.jsx)(t.code,{children:"https://bitbucket.org/[your-project-name]/workspace/settings/api"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Please set a name and set the ",(0,i.jsx)(t.code,{children:"Callback URL"})," like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-nohighlight",children:"https://<your-woodpecker-address>/authorize\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"bitbucket oauth setup",src:n(92325).Z+"",width:"826",height:"905"})}),"\n",(0,i.jsx)(t.p,{children:"Please also be sure to check the following permissions:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-nohighlight",children:"Account: Email, Read\nWorkspace membership: Read\nProjects: Read\nRepositories: Read\nPull requests: Read\nWebhooks: Read and Write\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"bitbucket permissions",src:n(33221).Z+"",width:"851",height:"529"})}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(t.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,i.jsx)(t.h3,{id:"woodpecker_bitbucket",children:(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Enables the Bitbucket driver."}),"\n",(0,i.jsx)(t.h3,{id:"woodpecker_bitbucket_client",children:(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_CLIENT"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Configures the Bitbucket OAuth client key. This is used to authorize access."}),"\n",(0,i.jsx)(t.h3,{id:"woodpecker_bitbucket_client_file",children:(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_CLIENT_FILE"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Read the value for ",(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_CLIENT"})," from the specified filepath"]}),"\n",(0,i.jsx)(t.h3,{id:"woodpecker_bitbucket_secret",children:(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_SECRET"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Configures the Bitbucket OAuth client secret. This is used to authorize access."}),"\n",(0,i.jsx)(t.h3,{id:"woodpecker_bitbucket_secret_file",children:(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_SECRET_FILE"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Read the value for ",(0,i.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_SECRET"})," from the specified filepath"]}),"\n",(0,i.jsx)(t.h2,{id:"missing-features",children:"Missing Features"}),"\n",(0,i.jsxs)(t.p,{children:["Merge requests are not currently supported. We are interested in patches to include this functionality.\nIf you are interested in contributing to Woodpecker and submitting a patch please ",(0,i.jsx)(t.strong,{children:"contact us"})," via ",(0,i.jsx)(t.a,{href:"https://discord.gg/fcMQqSMXJy",children:"Discord"})," or ",(0,i.jsx)(t.a,{href:"https://matrix.to/#/#WoodpeckerCI-Develop:obermui.de",children:"Matrix"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3354:(e,t,n)=>{var i=n(50959),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var i,r={},a=null,l=null;for(i in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:a,ref:l,props:r,_owner:c.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},11527:(e,t,n)=>{e.exports=n(3354)},92325:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bitbucket_oauth-fa2bb88f9a455135d26209d7609ef98d.png"},33221:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bitbucket_permissions-2d732e3a898624c63badc4a15549adcc.png"},76225:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(50959);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);