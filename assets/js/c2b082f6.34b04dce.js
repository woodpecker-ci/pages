/*! For license information please see c2b082f6.34b04dce.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6950],{14629:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=o(11527),t=o(76225);const s={},i="CLI",l={id:"cli",title:"CLI",description:"NAME:",source:"@site/versioned_docs/version-0.15/40-cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/0.15/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/40-cli.md",tags:[],version:"0.15",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/docs/0.15/administration/prometheus"},next:{title:"Downloads",permalink:"/docs/0.15/downloads"}},a={},c=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cli",children:"CLI"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"docker run --rm woodpeckerci/woodpecker-cli:v0.15"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"NAME:\n   woodpecker-cli - command line utility\n\nUSAGE:\n   woodpecker-cli [global options] command [command options] [arguments...]\n\nVERSION:\n   v0.15.x\n\nCOMMANDS:\n   build      manage pipelines\n   log        manage logs\n   deploy     deploy code\n   exec       execute a pipeline locally\n   info       show information about the current user\n   registry   manage registries\n   secret     manage secrets\n   repo       manage repositories\n   user       manage users\n   lint       lint a pipeline configuration file\n   log-level  get the logging level of the server, or set it with [level]\n   help, h    Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --token value, -t value   server auth token [$WOODPECKER_TOKEN]\n   --server value, -s value  server address [$WOODPECKER_SERVER]\n   --log-level value         set logging level [$WOODPECKER_LOG_LEVEL]\n   --help, -h                show help (default: false)\n   --version, -v             print the version (default: false)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,o)=>{var r=o(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var r,s={},c=null,d=null;for(r in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,o)=>{e.exports=o(3354)},76225:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var r=o(50959);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);