/*! For license information please see be082d73.8c6d2f9b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8672],{8296:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=r(2488),t=r(37052);const s={},a="Kubernetes",c={id:"administration/kubernetes",title:"Kubernetes",description:"Woodpecker does support Kubernetes as a backend. See the Kubernetes backend configuration for backend-specific options.",source:"@site/versioned_docs/version-1.0/30-administration/80-kubernetes.md",sourceDirName:"30-administration",slug:"/administration/kubernetes",permalink:"/docs/1.0/administration/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/80-kubernetes.md",tags:[],version:"1.0",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/docs/1.0/administration/proxy"},next:{title:"Prometheus",permalink:"/docs/1.0/administration/prometheus"}},i={},d=[{value:"Deploy with HELM",id:"deploy-with-helm",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Woodpecker server",id:"woodpecker-server",level:3},{value:"Woodpecker agent",id:"woodpecker-agent",level:3},{value:"Volumes",id:"volumes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,o.jsxs)(n.p,{children:["Woodpecker does support Kubernetes as a backend. See the ",(0,o.jsx)(n.a,{href:"/docs/1.0/administration/backends/kubernetes#configuration",children:"Kubernetes backend configuration"})," for backend-specific options."]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsx)(n.p,{children:"Kubernetes support is still experimental and not all pipeline features are fully supported yet."}),(0,o.jsxs)(n.p,{children:["Check the ",(0,o.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/9#issuecomment-483979755",children:"current state"})]})]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-with-helm",children:"Deploy with HELM"}),"\n",(0,o.jsxs)(n.p,{children:["Deploying Woodpecker with ",(0,o.jsx)(n.a,{href:"https://helm.sh/docs/",children:"HELM"})," is the recommended way.\nHave a look at the ",(0,o.jsx)(n.code,{children:"values.yaml"})," config files for all available settings."]}),"\n",(0,o.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# create agent secret\nkubectl create secret generic woodpecker-secret \\\n  --namespace <namespace> \\\n  --from-literal=WOODPECKER_AGENT_SECRET=$(openssl rand -hex 32)\n\n# add credentials for your forge\nkubectl create secret generic woodpecker-github-client \\\n  --namespace <namespace> \\\n  --from-literal=WOODPECKER_GITHUB_CLIENT=xxxxxxxx\n\nkubectl create secret generic woodpecker-github-secret \\\n  --namespace <namespace> \\\n  --from-literal=WOODPECKER_GITHUB_SECRET=xxxxxxxx\n\n# add helm repo\nhelm repo add woodpecker https://woodpecker-ci.org/\n"})}),"\n",(0,o.jsx)(n.h3,{id:"woodpecker-server",children:"Woodpecker server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Install\nhelm upgrade --install woodpecker-server --namespace <namespace> woodpecker/woodpecker-server\n\n# Uninstall\nhelm delete woodpecker-server\n"})}),"\n",(0,o.jsx)(n.h3,{id:"woodpecker-agent",children:"Woodpecker agent"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Install\nhelm upgrade --install woodpecker-agent --namespace <namespace> woodpecker/woodpecker-agent\n\n# Uninstall\nhelm delete woodpecker-agent\n"})}),"\n",(0,o.jsx)(n.h2,{id:"volumes",children:"Volumes"}),"\n",(0,o.jsxs)(n.p,{children:["To mount volumes a persistent volume (PV) and persistent volume claim (PVC) are needed on the cluster which can be referenced in steps via the ",(0,o.jsx)(n.code,{children:"volume:"}),' option.\nAssuming a PVC named "woodpecker-cache" exists, it can be referenced as follows in a step:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'steps:\n  "Restore Cache":\n    image: meltwater/drone-cache\n    volumes:\n      - woodpecker-cache:/woodpecker/src/cache\n    settings:\n      mount:\n        - "woodpecker-cache"\n    [...]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},38088:(e,n,r)=>{var o=r(96651),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var o,s={},d=null,l=null;for(o in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!i.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:d,ref:l,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},2488:(e,n,r)=>{e.exports=r(38088)},37052:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>a});var o=r(96651);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);