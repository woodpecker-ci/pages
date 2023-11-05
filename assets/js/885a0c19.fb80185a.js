/*! For license information please see 885a0c19.fb80185a.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8201],{48835:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var o=r(11527),n=r(76225);const t={},i="Terminology",l={id:"usage/terminiology/index",title:"Terminology",description:"Woodpecker architecture",source:"@site/docs/20-usage/15-terminiology/index.md",sourceDirName:"20-usage/15-terminiology",slug:"/usage/terminiology/",permalink:"/docs/next/usage/terminiology/",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/15-terminiology/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/next/usage/intro"},next:{title:"Workflow syntax",permalink:"/docs/next/usage/workflow-syntax"}},c={},a=[{value:"Woodpecker architecture",id:"woodpecker-architecture",level:2},{value:"Pipeline, workflow &amp; step",id:"pipeline-workflow--step",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Conventions",id:"conventions",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"terminology",children:"Terminology"}),"\n",(0,o.jsx)(s.h2,{id:"woodpecker-architecture",children:"Woodpecker architecture"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Woodpecker architecture",src:r(84940).Z+"",width:"1283",height:"780"})}),"\n",(0,o.jsx)(s.h2,{id:"pipeline-workflow--step",children:"Pipeline, workflow & step"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Relation between pipelines, workflows and steps",src:r(45412).Z+"",width:"1074",height:"520"})}),"\n",(0,o.jsx)(s.h2,{id:"glossary",children:"Glossary"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Woodpecker CI"}),": The project name around Woodpecker."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Woodpecker"}),": An open-source tool that executes ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflow-syntax",children:"pipelines"})," on your code."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Server"}),": The component of Woodpecker that handles webhooks from forges, orchestrates agents, and sends status back. It also serves the API and web UI for administration and configuration."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Agent"}),": A component of Woodpecker that executes ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflow-syntax",children:"pipelines"})," (specifically one or more ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflows"}),") with a specific backend (e.g. ",(0,o.jsx)(s.a,{href:"/docs/next/administration/backends/docker",children:"Docker"}),", Kubernetes, ",(0,o.jsx)(s.a,{href:"/docs/next/administration/backends/local",children:"local"}),"). It connects to the server via GRPC."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"CLI"}),": The Woodpecker command-line interface (CLI) is a terminal tool used to administer the server, to execute pipelines locally for debugging / testing purposes, and to perform tasks like linting pipelines."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Pipeline"}),": A sequence of ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflows"})," that are executed on the code. ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflow-syntax",children:"Pipelines"})," are triggered by events."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Workflow"}),": A sequence of steps and services that are executed as part of a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflow-syntax",children:"pipeline"}),". Workflows are represented by YAML files. Each ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"})," has its own isolated ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflow-syntax#workspace",children:"workspace"}),", and often additional resources like a shared network (docker)."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Steps"}),": Individual commands, actions or tasks within a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Code"}),": Refers to the files tracked by the version control system used by the ",(0,o.jsx)(s.a,{href:"/docs/next/administration/forges/overview",children:"forge"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Repos"}),": Short for repositories, these are storage locations where code is stored."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Forge"}),": The hosting platform or service where the repositories are hosted."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Workspace"}),": A folder shared between all steps of a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"})," containing the repository and all the generated data from previous steps."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Event"}),": Triggers the execution of a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflow-syntax",children:"pipeline"}),", such as a ",(0,o.jsx)(s.a,{href:"/docs/next/administration/forges/overview",children:"forge"})," event like ",(0,o.jsx)(s.code,{children:"push"}),", or ",(0,o.jsx)(s.code,{children:"manual"})," triggered manually from the UI."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Commit"}),": A defined state of the code, usually associated with a version control system like Git."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Matrix"}),": A configuration option that allows the execution of ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflows"})," for each value in the ",(0,o.jsx)(s.a,{href:"/docs/next/usage/matrix-workflows",children:"matrix"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Service"}),": A service is a step that is executed from the start of a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"})," until its end. It can be accessed by name via the network from other steps within the same ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Plugins"}),": ",(0,o.jsx)(s.a,{href:"/docs/next/usage/plugins/plugins",children:"Plugins"})," are extensions that provide pre-defined actions or commands for a step in a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"}),". They can be configured via settings."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Container"}),": A lightweight and isolated environment where commands are executed."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"YAML File"}),": A file format used to define and configure ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflows"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Dependency"}),": ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"Workflows"})," can depend on each other, and if possible, they are executed in parallel."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Status"}),": Status refers to the outcome of a step or ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"})," after it has been executed, determined by the internal command exit code. At the end of a ",(0,o.jsx)(s.a,{href:"/docs/next/usage/workflows",children:"workflow"}),", its status is sent to the ",(0,o.jsx)(s.a,{href:"/docs/next/administration/forges/overview",children:"forge"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"conventions",children:"Conventions"}),"\n",(0,o.jsx)(s.p,{children:"Sometimes there are multiple terms that can be used to describe something. This section lists the preferred terms to use in Woodpecker:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Environment variables ",(0,o.jsx)(s.code,{children:"*_LINK"})," should be called ",(0,o.jsx)(s.code,{children:"*_URL"}),". In the code use ",(0,o.jsx)(s.code,{children:"URL()"})," instead of ",(0,o.jsx)(s.code,{children:"Link()"})]}),"\n",(0,o.jsxs)(s.li,{children:["Use the term ",(0,o.jsx)(s.strong,{children:"pipelines"})," instead of the previous ",(0,o.jsx)(s.strong,{children:"builds"})]}),"\n",(0,o.jsxs)(s.li,{children:["Use the term ",(0,o.jsx)(s.strong,{children:"steps"})," instead of the previous ",(0,o.jsx)(s.strong,{children:"jobs"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3354:(e,s,r)=>{var o=r(50959),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,r){var o,t={},a=null,d=null;for(o in void 0!==r&&(a=""+r),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,o)&&!c.hasOwnProperty(o)&&(t[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===t[o]&&(t[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:d,props:t,_owner:l.current}}s.Fragment=t,s.jsx=a,s.jsxs=a},11527:(e,s,r)=>{e.exports=r(3354)},84940:(e,s,r)=>{r.d(s,{Z:()=>o});const o=r.p+"assets/images/architecture-f5d5b825eacf303d3080d73a2c641bdd.svg"},45412:(e,s,r)=>{r.d(s,{Z:()=>o});const o=r.p+"assets/images/pipeline-workflow-step-3f557a68039086cd959e6106d7846abb.svg"},76225:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>i});var o=r(50959);const n={},t=o.createContext(n);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);