"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["8248"],{7818:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"usage/terminology/index","title":"Terminology","description":"Glossary","source":"@site/versioned_docs/version-2.8/20-usage/15-terminology/index.md","sourceDirName":"20-usage/15-terminology","slug":"/usage/terminology/","permalink":"/docs/usage/terminology/","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.8/20-usage/15-terminology/index.md","tags":[],"version":"2.8","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Your first pipeline","permalink":"/docs/usage/intro"},"next":{"title":"Workflow syntax","permalink":"/docs/usage/workflow-syntax"}}'),o=r("52676"),i=r("23663");let t={},l="Terminology",d={},c=[{value:"Glossary",id:"glossary",level:2},{value:"Woodpecker architecture",id:"woodpecker-architecture",level:2},{value:"Pipeline, workflow &amp; step",id:"pipeline-workflow--step",level:2},{value:"Pipeline events",id:"pipeline-events",level:2},{value:"Conventions",id:"conventions",level:2}];function a(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"terminology",children:"Terminology"})}),"\n",(0,o.jsx)(s.h2,{id:"glossary",children:"Glossary"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Woodpecker CI"}),": The project name around Woodpecker."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Woodpecker"}),": An open-source tool that executes ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax",children:"pipelines"})," on your code."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Server"}),": The component of Woodpecker that handles webhooks from forges, orchestrates agents, and sends status back. It also serves the API and web UI for administration and configuration."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Agent"}),": A component of Woodpecker that executes ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax",children:"pipelines"})," (specifically one or more ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflows"}),") with a specific backend (e.g. ",(0,o.jsx)(s.a,{href:"/docs/administration/backends/docker",children:"Docker"}),", Kubernetes, ",(0,o.jsx)(s.a,{href:"/docs/administration/backends/local",children:"local"}),"). It connects to the server via GRPC."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"CLI"}),": The Woodpecker command-line interface (CLI) is a terminal tool used to administer the server, to execute pipelines locally for debugging / testing purposes, and to perform tasks like linting pipelines."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Pipeline"}),": A sequence of ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflows"})," that are executed on the code. ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax",children:"Pipelines"})," are triggered by events."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Workflow"}),": A sequence of steps and services that are executed as part of a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax",children:"pipeline"}),". Workflows are represented by YAML files. Each ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"})," has its own isolated ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax#workspace",children:"workspace"}),", and often additional resources like a shared network (docker)."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Steps"}),": Individual commands, actions or tasks within a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Code"}),": Refers to the files tracked by the version control system used by the ",(0,o.jsx)(s.a,{href:"/docs/administration/forges/overview",children:"forge"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Repos"}),": Short for repositories, these are storage locations where code is stored."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Forge"}),": The hosting platform or service where the repositories are hosted."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Workspace"}),": A folder shared between all steps of a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"})," containing the repository and all the generated data from previous steps."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Event"}),": Triggers the execution of a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax",children:"pipeline"}),", such as a ",(0,o.jsx)(s.a,{href:"/docs/administration/forges/overview",children:"forge"})," event like ",(0,o.jsx)(s.code,{children:"push"}),", or ",(0,o.jsx)(s.code,{children:"manual"})," triggered manually from the UI."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Commit"}),": A defined state of the code, usually associated with a version control system like Git."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Matrix"}),": A configuration option that allows the execution of ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflows"})," for each value in the ",(0,o.jsx)(s.a,{href:"/docs/usage/matrix-workflows",children:"matrix"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Service"}),": A service is a step that is executed from the start of a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"})," until its end. It can be accessed by name via the network from other steps within the same ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Plugins"}),": ",(0,o.jsx)(s.a,{href:"/docs/usage/plugins/overview",children:"Plugins"})," are extensions that provide pre-defined actions or commands for a step in a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"}),". They can be configured via settings."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Container"}),": A lightweight and isolated environment where commands are executed."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"YAML File"}),": A file format used to define and configure ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflows"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Dependency"}),": ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"Workflows"})," can depend on each other, and if possible, they are executed in parallel."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Status"}),": Status refers to the outcome of a step or ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"})," after it has been executed, determined by the internal command exit code. At the end of a ",(0,o.jsx)(s.a,{href:"/docs/usage/workflows",children:"workflow"}),", its status is sent to the ",(0,o.jsx)(s.a,{href:"/docs/administration/forges/overview",children:"forge"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Service extension"}),": Some parts of Woodpecker internal services like secrets storage or config fetcher can be replaced through service extensions."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"woodpecker-architecture",children:"Woodpecker architecture"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Woodpecker architecture",src:r(75466).Z+"",width:"1283",height:"780"})}),"\n",(0,o.jsx)(s.h2,{id:"pipeline-workflow--step",children:"Pipeline, workflow & step"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Relation between pipelines, workflows and steps",src:r(73965).Z+"",width:"1074",height:"520"})}),"\n",(0,o.jsx)(s.h2,{id:"pipeline-events",children:"Pipeline events"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"push"}),": A push event is triggered when a commit is pushed to a branch."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"pull_request"}),": A pull request event is triggered when a pull request is opened or a new commit is pushed to it."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"pull_request_closed"}),": A pull request closed event is triggered when a pull request is closed or merged."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"tag"}),": A tag event is triggered when a tag is pushed."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"release"}),": A release event is triggered when a release, pre-release or draft is created. (You can apply further filters using ",(0,o.jsx)(s.a,{href:"/docs/usage/workflow-syntax#evaluate",children:"evaluate"})," with ",(0,o.jsx)(s.a,{href:"/docs/usage/environment#built-in-environment-variables",children:"environment variables"}),".)"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"manual"}),": A manual event is triggered when a user manually triggers a pipeline."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"cron"}),": A cron event is triggered when a cron job is executed."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"conventions",children:"Conventions"}),"\n",(0,o.jsx)(s.p,{children:"Sometimes there are multiple terms that can be used to describe something. This section lists the preferred terms to use in Woodpecker:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Environment variables ",(0,o.jsx)(s.code,{children:"*_LINK"})," should be called ",(0,o.jsx)(s.code,{children:"*_URL"}),". In the code use ",(0,o.jsx)(s.code,{children:"URL()"})," instead of ",(0,o.jsx)(s.code,{children:"Link()"})]}),"\n",(0,o.jsxs)(s.li,{children:["Use the term ",(0,o.jsx)(s.strong,{children:"pipelines"})," instead of the previous ",(0,o.jsx)(s.strong,{children:"builds"})]}),"\n",(0,o.jsxs)(s.li,{children:["Use the term ",(0,o.jsx)(s.strong,{children:"steps"})," instead of the previous ",(0,o.jsx)(s.strong,{children:"jobs"})]}),"\n",(0,o.jsxs)(s.li,{children:["Use the prefix ",(0,o.jsx)(s.code,{children:"WOODPECKER_EXPERT_"})," for advanced environment variables that are normally not required to be set by users"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},75466:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/architecture-f5d5b825eacf303d3080d73a2c641bdd.svg"},73965:function(e,s,r){r.d(s,{Z:function(){return n}});let n=r.p+"assets/images/pipeline-workflow-step-3f557a68039086cd959e6106d7846abb.svg"},23663:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return t}});var n=r(75271);let o={},i=n.createContext(o);function t(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);