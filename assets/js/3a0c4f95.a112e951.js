/*! For license information please see 3a0c4f95.a112e951.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[803],{81365:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=o(11527),r=o(7463);const i={},s="Prometheus",c={id:"administration/prometheus",title:"Prometheus",description:"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint if the environment variable WOODPECKERPROMETHEUSAUTH_TOKEN is set. Please note that access to the metrics endpoint is restricted and requires the authorization token from the environment variable mentioned above.",source:"@site/versioned_docs/version-2.1/30-administration/90-prometheus.md",sourceDirName:"30-administration",slug:"/administration/prometheus",permalink:"/docs/administration/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/30-administration/90-prometheus.md",tags:[],version:"2.1",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Autoscaler",permalink:"/docs/administration/autoscaler"},next:{title:"External Configuration API",permalink:"/docs/administration/external-configuration-api"}},a={},p=[{value:"Authorization",id:"authorization",level:2},{value:"Unauthenticated Access",id:"unauthenticated-access",level:2},{value:"Metric Reference",id:"metric-reference",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"prometheus",children:"Prometheus"}),"\n",(0,t.jsxs)(n.p,{children:["Woodpecker is compatible with Prometheus and exposes a ",(0,t.jsx)(n.code,{children:"/metrics"})," endpoint if the environment variable ",(0,t.jsx)(n.code,{children:"WOODPECKER_PROMETHEUS_AUTH_TOKEN"})," is set. Please note that access to the metrics endpoint is restricted and requires the authorization token from the environment variable mentioned above."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n    bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n      - targets: ['woodpecker.domain.com']\n"})}),"\n",(0,t.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,t.jsx)(n.p,{children:"An administrator will need to generate a user API token and configure in the Prometheus configuration file as a bearer token. Please see the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n+   bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n"})}),"\n",(0,t.jsx)(n.p,{children:"As an alternative, the token can also be read from a file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n+   bearer_token_file: /etc/secrets/woodpecker-monitoring-token\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n"})}),"\n",(0,t.jsx)(n.h2,{id:"unauthenticated-access",children:"Unauthenticated Access"}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, the unprotected ",(0,t.jsx)(n.code,{children:"/metrics"})," endpoint might be exposed on the internal port (Port is configurable via the ",(0,t.jsx)(n.code,{children:"WOODPECKER_METRICS_SERVER_ADDR"})," environment variable, e.g. ",(0,t.jsx)(n.code,{children:":9001"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"metric-reference",children:"Metric Reference"}),"\n",(0,t.jsx)(n.p,{children:"List of Prometheus metrics specific to Woodpecker:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# HELP woodpecker_pipeline_count Pipeline count.\n# TYPE woodpecker_pipeline_count counter\nwoodpecker_pipeline_count{branch="main",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\nwoodpecker_pipeline_count{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\n# HELP woodpecker_pipeline_time Build time.\n# TYPE woodpecker_pipeline_time gauge\nwoodpecker_pipeline_time{branch="main",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 116\nwoodpecker_pipeline_time{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 155\n# HELP woodpecker_pipeline_total_count Total number of builds.\n# TYPE woodpecker_pipeline_total_count gauge\nwoodpecker_pipeline_total_count 1025\n# HELP woodpecker_pending_steps Total number of pending pipeline steps.\n# TYPE woodpecker_pending_steps gauge\nwoodpecker_pending_steps 0\n# HELP woodpecker_repo_count Total number of repos.\n# TYPE woodpecker_repo_count gauge\nwoodpecker_repo_count 9\n# HELP woodpecker_running_steps Total number of running pipeline steps.\n# TYPE woodpecker_running_steps gauge\nwoodpecker_running_steps 0\n# HELP woodpecker_user_count Total number of users.\n# TYPE woodpecker_user_count gauge\nwoodpecker_user_count 1\n# HELP woodpecker_waiting_steps Total number of pipeline waiting on deps.\n# TYPE woodpecker_waiting_steps gauge\nwoodpecker_waiting_steps 0\n# HELP woodpecker_worker_count Total number of workers.\n# TYPE woodpecker_worker_count gauge\nwoodpecker_worker_count 4\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,n,o)=>{var t=o(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,o){var t,i={},p=null,d=null;for(t in void 0!==o&&(p=""+o),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:p,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},11527:(e,n,o)=>{e.exports=o(3354)},7463:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(50959);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);