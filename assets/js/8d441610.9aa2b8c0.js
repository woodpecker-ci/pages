/*! For license information please see 8d441610.9aa2b8c0.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1392],{7400:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(2488),o=r(37052);const i={},t="Terminology",l={id:"usage/terminiology/index",title:"Terminology",description:"Woodpecker architecture",source:"@site/versioned_docs/version-2.2/20-usage/15-terminiology/index.md",sourceDirName:"20-usage/15-terminiology",slug:"/usage/terminiology/",permalink:"/docs/2.2/usage/terminiology/",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/20-usage/15-terminiology/index.md",tags:[],version:"2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating plugins",permalink:"/docs/2.2/usage/plugins/creating-plugins"},next:{title:"Workflow syntax",permalink:"/docs/2.2/usage/workflow-syntax"}},c={},d=[{value:"Woodpecker architecture",id:"woodpecker-architecture",level:2},{value:"Pipeline, workflow &amp; step",id:"pipeline-workflow--step",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Pipeline events",id:"pipeline-events",level:2},{value:"Conventions",id:"conventions",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(s.h2,{id:"woodpecker-architecture",children:"Woodpecker architecture"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Woodpecker architecture",src:r(24260).c+"",width:"1283",height:"780"})}),"\n",(0,n.jsx)(s.h2,{id:"pipeline-workflow--step",children:"Pipeline, workflow & step"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Relation between pipelines, workflows and steps",src:r(33064).c+"",width:"1074",height:"520"})}),"\n",(0,n.jsx)(s.h2,{id:"glossary",children:"Glossary"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Woodpecker CI"}),": The project name around Woodpecker."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Woodpecker"}),": An open-source tool that executes ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflow-syntax",children:"pipelines"})," on your code."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Server"}),": The component of Woodpecker that handles webhooks from forges, orchestrates agents, and sends status back. It also serves the API and web UI for administration and configuration."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Agent"}),": A component of Woodpecker that executes ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflow-syntax",children:"pipelines"})," (specifically one or more ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflows"}),") with a specific backend (e.g. ",(0,n.jsx)(s.a,{href:"/docs/2.2/administration/backends/docker",children:"Docker"}),", Kubernetes, ",(0,n.jsx)(s.a,{href:"/docs/2.2/administration/backends/local",children:"local"}),"). It connects to the server via GRPC."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"CLI"}),": The Woodpecker command-line interface (CLI) is a terminal tool used to administer the server, to execute pipelines locally for debugging / testing purposes, and to perform tasks like linting pipelines."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Pipeline"}),": A sequence of ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflows"})," that are executed on the code. ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflow-syntax",children:"Pipelines"})," are triggered by events."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Workflow"}),": A sequence of steps and services that are executed as part of a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflow-syntax",children:"pipeline"}),". Workflows are represented by YAML files. Each ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"})," has its own isolated ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflow-syntax#workspace",children:"workspace"}),", and often additional resources like a shared network (docker)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Steps"}),": Individual commands, actions or tasks within a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Code"}),": Refers to the files tracked by the version control system used by the ",(0,n.jsx)(s.a,{href:"/docs/2.2/administration/forges/overview",children:"forge"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Repos"}),": Short for repositories, these are storage locations where code is stored."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Forge"}),": The hosting platform or service where the repositories are hosted."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Workspace"}),": A folder shared between all steps of a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"})," containing the repository and all the generated data from previous steps."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Event"}),": Triggers the execution of a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflow-syntax",children:"pipeline"}),", such as a ",(0,n.jsx)(s.a,{href:"/docs/2.2/administration/forges/overview",children:"forge"})," event like ",(0,n.jsx)(s.code,{children:"push"}),", or ",(0,n.jsx)(s.code,{children:"manual"})," triggered manually from the UI."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Commit"}),": A defined state of the code, usually associated with a version control system like Git."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Matrix"}),": A configuration option that allows the execution of ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflows"})," for each value in the ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/matrix-workflows",children:"matrix"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Service"}),": A service is a step that is executed from the start of a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"})," until its end. It can be accessed by name via the network from other steps within the same ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Plugins"}),": ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/plugins/overview",children:"Plugins"})," are extensions that provide pre-defined actions or commands for a step in a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"}),". They can be configured via settings."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Container"}),": A lightweight and isolated environment where commands are executed."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"YAML File"}),": A file format used to define and configure ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflows"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Dependency"}),": ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"Workflows"})," can depend on each other, and if possible, they are executed in parallel."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Status"}),": Status refers to the outcome of a step or ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"})," after it has been executed, determined by the internal command exit code. At the end of a ",(0,n.jsx)(s.a,{href:"/docs/2.2/usage/workflows",children:"workflow"}),", its status is sent to the ",(0,n.jsx)(s.a,{href:"/docs/2.2/administration/forges/overview",children:"forge"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"pipeline-events",children:"Pipeline events"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"push"}),": A push event is triggered when a commit is pushed to a branch."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"pull_request"}),": A pull request event is triggered when a pull request is opened or a new commit is pushed to it."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"pull_request_closed"}),": A pull request closed event is triggered when a pull request is closed or merged."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"tag"}),": A tag event is triggered when a tag is pushed."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"manual"}),": A manual event is triggered when a user manually triggers a pipeline."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"cron"}),": A cron event is triggered when a cron job is executed."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"conventions",children:"Conventions"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes there are multiple terms that can be used to describe something. This section lists the preferred terms to use in Woodpecker:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Environment variables ",(0,n.jsx)(s.code,{children:"*_LINK"})," should be called ",(0,n.jsx)(s.code,{children:"*_URL"}),". In the code use ",(0,n.jsx)(s.code,{children:"URL()"})," instead of ",(0,n.jsx)(s.code,{children:"Link()"})]}),"\n",(0,n.jsxs)(s.li,{children:["Use the term ",(0,n.jsx)(s.strong,{children:"pipelines"})," instead of the previous ",(0,n.jsx)(s.strong,{children:"builds"})]}),"\n",(0,n.jsxs)(s.li,{children:["Use the term ",(0,n.jsx)(s.strong,{children:"steps"})," instead of the previous ",(0,n.jsx)(s.strong,{children:"jobs"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},38088:(e,s,r)=>{var n=r(96651),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var n,i={},d=null,a=null;for(n in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(a=s.ref),s)t.call(s,n)&&!c.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:d,ref:a,props:i,_owner:l.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},2488:(e,s,r)=>{e.exports=r(38088)},24260:(e,s,r)=>{r.d(s,{c:()=>n});const n=r.p+"assets/images/architecture-f5d5b825eacf303d3080d73a2c641bdd.svg"},33064:(e,s,r)=>{r.d(s,{c:()=>n});const n=r.p+"assets/images/pipeline-workflow-step-3f557a68039086cd959e6106d7846abb.svg"},37052:(e,s,r)=>{r.d(s,{I:()=>l,M:()=>t});var n=r(96651);const o={},i=n.createContext(o);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);