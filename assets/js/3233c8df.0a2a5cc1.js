/*! For license information please see 3233c8df.0a2a5cc1.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4934],{46657:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=a(11527),t=a(76225);const o={},r="Matrix workflows",l={id:"usage/matrix-workflows",title:"Matrix workflows",description:"Woodpecker has integrated support for matrix workflows. Woodpecker executes a separate workflow for each combination in the matrix, allowing you to build and test against multiple configurations.",source:"@site/docs/20-usage/30-matrix-workflows.md",sourceDirName:"20-usage",slug:"/usage/matrix-workflows",permalink:"/docs/next/usage/matrix-workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/30-matrix-workflows.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/docs/next/usage/workflows"},next:{title:"Secrets",permalink:"/docs/next/usage/secrets"}},s={},m=[{value:"Interpolation",id:"interpolation",level:2},{value:"Examples",id:"examples",level:2},{value:"Example matrix pipeline based on Docker image tag",id:"example-matrix-pipeline-based-on-docker-image-tag",level:3},{value:"Example matrix pipeline based on container image",id:"example-matrix-pipeline-based-on-container-image",level:3},{value:"Example matrix pipeline using multiple platforms",id:"example-matrix-pipeline-using-multiple-platforms",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"matrix-workflows",children:"Matrix workflows"}),"\n",(0,i.jsx)(n.p,{children:"Woodpecker has integrated support for matrix workflows. Woodpecker executes a separate workflow for each combination in the matrix, allowing you to build and test against multiple configurations."}),"\n",(0,i.jsx)(n.p,{children:"Example matrix definition:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  REDIS_VERSION:\n    - 2.6\n    - 2.8\n    - 3.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example matrix definition containing only specific combinations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  include:\n    - GO_VERSION: 1.4\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.5\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.6\n      REDIS_VERSION: 3.0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interpolation",children:"Interpolation"}),"\n",(0,i.jsxs)(n.p,{children:["Matrix variables are interpolated in the YAML using the ",(0,i.jsx)(n.code,{children:"${VARIABLE}"})," syntax, before the YAML is parsed. This is an example YAML file before interpolating matrix parameters:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  DATABASE:\n    - mysql:8\n    - mysql:5\n    - mariadb:10.1\n\nsteps:\n  build:\n    image: golang:${GO_VERSION}\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  database:\n    image: ${DATABASE}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example YAML file after injecting the matrix parameters:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"steps:\n  build:\n-   image: golang:${GO_VERSION}\n+   image: golang:1.4\n    commands:\n      - go get\n      - go build\n      - go test\n+   environment:\n+     - GO_VERSION=1.4\n+     - DATABASE=mysql:8\n\nservices:\n  database:\n-   image: ${DATABASE}\n+   image: mysql:8\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"example-matrix-pipeline-based-on-docker-image-tag",children:"Example matrix pipeline based on Docker image tag"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  TAG:\n    - 1.7\n    - 1.8\n    - latest\n\nsteps:\n  build:\n    image: golang:${TAG}\n    commands:\n      - go build\n      - go test\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-matrix-pipeline-based-on-container-image",children:"Example matrix pipeline based on container image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  IMAGE:\n    - golang:1.7\n    - golang:1.8\n    - golang:latest\n\nsteps:\n  build:\n    image: ${IMAGE}\n    commands:\n      - go build\n      - go test\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example-matrix-pipeline-using-multiple-platforms",children:"Example matrix pipeline using multiple platforms"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'matrix:\n  platform:\n    - linux/amd64\n    - linux/arm64\n\nlabels:\n  platform: ${platform}\n\nsteps:\n  test:\n    image: alpine\n    commands:\n      - echo "I am running on ${platform}"\n\n  test-arm-only:\n    image: alpine\n    commands:\n      - echo "I am running on ${platform}"\n      - echo "Arm is cool!"\n    when:\n      platform: linux/arm*\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you want to control the architecture of a pipeline on a Kubernetes runner, see ",(0,i.jsx)(n.a,{href:"/docs/next/administration/backends/kubernetes#nodeSelector",children:"the nodeSelector documentation of the Kubernetes backend"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3354:(e,n,a)=>{var i=a(50959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function m(e,n,a){var i,o={},m=null,c=null;for(i in void 0!==a&&(m=""+a),void 0!==n.key&&(m=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,i)&&!s.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:t,type:e,key:m,ref:c,props:o,_owner:l.current}}n.Fragment=o,n.jsx=m,n.jsxs=m},11527:(e,n,a)=>{e.exports=a(3354)},76225:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var i=a(50959);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);