/*! For license information please see 35cb7bc9.4fe47884.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7461],{64926:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>t});var r=o(11527),i=o(76225);const c={},d="Agent configuration",s={id:"administration/agent-config",title:"Agent configuration",description:"Agents are configured by the command line or environment variables. At the minimum you need the following information:",source:"@site/versioned_docs/version-0.15/30-administration/15-agent-config.md",sourceDirName:"30-administration",slug:"/administration/agent-config",permalink:"/docs/0.15/administration/agent-config",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/30-administration/15-agent-config.md",tags:[],version:"0.15",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coding",permalink:"/docs/0.15/administration/vcs/coding"},next:{title:"Databases",permalink:"/docs/0.15/administration/database"}},l={},t=[{value:"Processes per agent",id:"processes-per-agent",level:2},{value:"Filtering agents",id:"filtering-agents",level:2},{value:"Filter on Platform",id:"filter-on-platform",level:3},{value:"All agent configuration options",id:"all-agent-configuration-options",level:2},{value:"<code>DOCKER_HOST</code>",id:"docker_host",level:4},{value:"<code>WOODPECKER_SERVER</code>",id:"woodpecker_server",level:3},{value:"<code>WOODPECKER_USERNAME</code>",id:"woodpecker_username",level:3},{value:"<code>WOODPECKER_AGENT_SECRET</code>",id:"woodpecker_agent_secret",level:3},{value:"<code>WOODPECKER_LOG_LEVEL</code>",id:"woodpecker_log_level",level:3},{value:"<code>WOODPECKER_DEBUG_PRETTY</code>",id:"woodpecker_debug_pretty",level:3},{value:"<code>WOODPECKER_DEBUG_NOCOLOR</code>",id:"woodpecker_debug_nocolor",level:3},{value:"<code>WOODPECKER_HOSTNAME</code>",id:"woodpecker_hostname",level:3},{value:"<code>WOODPECKER_MAX_PROCS</code>",id:"woodpecker_max_procs",level:3},{value:"<code>WOODPECKER_HEALTHCHECK</code>",id:"woodpecker_healthcheck",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIME</code>",id:"woodpecker_keepalive_time",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIMEOUT</code>",id:"woodpecker_keepalive_timeout",level:3},{value:"<code>WOODPECKER_GRPC_SECURE</code>",id:"woodpecker_grpc_secure",level:3},{value:"<code>WOODPECKER_GRPC_VERIFY</code>",id:"woodpecker_grpc_verify",level:3},{value:"<code>WOODPECKER_BACKEND</code>",id:"woodpecker_backend",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"agent-configuration",children:"Agent configuration"}),"\n",(0,r.jsx)(n.p,{children:"Agents are configured by the command line or environment variables. At the minimum you need the following information:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n+   - WOODPECKER_SERVER=localhost:9000\n+   - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following are automatically set and can be overridden:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"WOODPECKER_HOSTNAME if not set, becomes the OS' hostname"}),"\n",(0,r.jsx)(n.li,{children:"WOODPECKER_MAX_PROCS if not set, defaults to 1"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"processes-per-agent",children:"Processes per agent"}),"\n",(0,r.jsxs)(n.p,{children:["By default the maximum processes that are run per agent is 1. If required you can add ",(0,r.jsx)(n.code,{children:"WOODPECKER_MAX_PROCS"})," to increase your parallel processing on a per-agent basis."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n    - WOODPECKER_SERVER=localhost:9000\n    - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n+    - WOODPECKER_MAX_PROCS=4\n"})}),"\n",(0,r.jsx)(n.h2,{id:"filtering-agents",children:"Filtering agents"}),"\n",(0,r.jsx)(n.p,{children:"When building your pipelines as long as you have set the platform or filter, builds can be made to only run code on certain agents."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"- WOODPECKER_HOSTNAME=mycompany-ci-01.example.com\n- WOODPECKER_FILTER=\n"})}),"\n",(0,r.jsx)(n.h3,{id:"filter-on-platform",children:"Filter on Platform"}),"\n",(0,r.jsx)(n.p,{children:"Only want certain pipelines or steps to run on certain agents with specific platforms? Such as arm vs amd64?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# .woodpecker.yml\npipeline:\n  build:\n   image: golang\n   commands:\n     - go build\n     - go test\n  when:\n    platform: linux/amd64\n\n\n  testing:\n   image: golang\n   commands:\n     - go build\n     - go test\n  when:\n    platform: linux/arm*\n\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/0.15/usage/pipeline-syntax#step-when---conditional-execution",children:"Conditionals Pipeline"})," syntax for more"]}),"\n",(0,r.jsx)(n.h2,{id:"all-agent-configuration-options",children:"All agent configuration options"}),"\n",(0,r.jsx)(n.p,{children:"Here is the full list of configuration options and their default variables."}),"\n",(0,r.jsx)(n.h4,{id:"docker_host",children:(0,r.jsx)(n.code,{children:"DOCKER_HOST"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Point to an alternate socket file or host. For example, "unix:////run/podman/podman.sock"'}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_server",children:(0,r.jsx)(n.code,{children:"WOODPECKER_SERVER"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"localhost:9000"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configures gRPC address of the server."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_username",children:(0,r.jsx)(n.code,{children:"WOODPECKER_USERNAME"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"x-oauth-basic"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The gRPC username."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_agent_secret",children:(0,r.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A shared secret used by server and agents to authenticate communication. A secret can be generated by ",(0,r.jsx)(n.code,{children:"openssl rand -hex 32"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_log_level",children:(0,r.jsx)(n.code,{children:"WOODPECKER_LOG_LEVEL"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configures the logging level. Possible values are ",(0,r.jsx)(n.code,{children:"trace"}),", ",(0,r.jsx)(n.code,{children:"debug"}),", ",(0,r.jsx)(n.code,{children:"info"}),", ",(0,r.jsx)(n.code,{children:"warn"}),", ",(0,r.jsx)(n.code,{children:"error"}),", ",(0,r.jsx)(n.code,{children:"fatal"}),", ",(0,r.jsx)(n.code,{children:"panic"}),", ",(0,r.jsx)(n.code,{children:"disabled"})," and empty."]}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_debug_pretty",children:(0,r.jsx)(n.code,{children:"WOODPECKER_DEBUG_PRETTY"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Enable pretty-printed debug output."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_debug_nocolor",children:(0,r.jsx)(n.code,{children:"WOODPECKER_DEBUG_NOCOLOR"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Disable colored debug output."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_hostname",children:(0,r.jsx)(n.code,{children:"WOODPECKER_HOSTNAME"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configures the agent hostname."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_max_procs",children:(0,r.jsx)(n.code,{children:"WOODPECKER_MAX_PROCS"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configures the number of parallel builds."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_healthcheck",children:(0,r.jsx)(n.code,{children:"WOODPECKER_HEALTHCHECK"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Enable healthcheck endpoint."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_keepalive_time",children:(0,r.jsx)(n.code,{children:"WOODPECKER_KEEPALIVE_TIME"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After a duration of this time of no activity, the agent pings the server to check if the transport is still alive."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_keepalive_timeout",children:(0,r.jsx)(n.code,{children:"WOODPECKER_KEEPALIVE_TIMEOUT"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"20s"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After pinging for a keepalive check, the agent waits for a duration of this time before closing the connection if no activity."}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_grpc_secure",children:(0,r.jsx)(n.code,{children:"WOODPECKER_GRPC_SECURE"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configures if the connection to ",(0,r.jsx)(n.code,{children:"WOODPECKER_SERVER"})," should be made using a secure transport."]}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_grpc_verify",children:(0,r.jsx)(n.code,{children:"WOODPECKER_GRPC_VERIFY"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configures if the gRPC server certificate should be verified, only valid when ",(0,r.jsx)(n.code,{children:"WOODPECKER_GRPC_SECURE"})," is ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"woodpecker_backend",children:(0,r.jsx)(n.code,{children:"WOODPECKER_BACKEND"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Default: ",(0,r.jsx)(n.code,{children:"auto-detect"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Configures the backend engine to run pipelines on. Possible values are ",(0,r.jsx)(n.code,{children:"auto-detect"})," or ",(0,r.jsx)(n.code,{children:"docker"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,o)=>{var r=o(50959),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,o){var r,c={},t=null,a=null;for(r in void 0!==o&&(t=""+o),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!l.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:i,type:e,key:t,ref:a,props:c,_owner:s.current}}n.Fragment=c,n.jsx=t,n.jsxs=t},11527:(e,n,o)=>{e.exports=o(3354)},76225:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>d});var r=o(50959);const i={},c=r.createContext(i);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);