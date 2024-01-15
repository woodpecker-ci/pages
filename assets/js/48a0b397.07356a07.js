/*! For license information please see 48a0b397.07356a07.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6171],{68583:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(11527),t=n(7463);const o={},a="Secrets",c={id:"usage/secrets",title:"Secrets",description:"Woodpecker provides the ability to store named parameters external to the Yaml configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.",source:"@site/versioned_docs/version-0.15/20-usage/40-secrets.md",sourceDirName:"20-usage",slug:"/usage/secrets",permalink:"/docs/0.15/usage/secrets",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/20-usage/40-secrets.md",tags:[],version:"0.15",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix builds",permalink:"/docs/0.15/usage/matrix-builds"},next:{title:"Registries",permalink:"/docs/0.15/usage/registries"}},i={},l=[{value:"Adding Secrets",id:"adding-secrets",level:2},{value:"Alternate Names",id:"alternate-names",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"secrets",children:"Secrets"}),"\n",(0,r.jsx)(s.p,{children:"Woodpecker provides the ability to store named parameters external to the Yaml configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."}),"\n",(0,r.jsx)(s.p,{children:"Secrets are exposed to your pipeline steps and plugins as uppercase environment variables and can therefore be referenced in the commands section of your pipeline."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"pipeline:\n  docker:\n    image: docker\n    commands:\n+     - echo $DOCKER_USERNAME\n+     - echo $DOCKER_PASSWORD\n+   secrets: [ docker_username, docker_password ]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Alternatively, you can get a ",(0,r.jsx)(s.code,{children:"setting"})," from secrets using the ",(0,r.jsx)(s.code,{children:"from_secret"})," syntax.\nIn this example, the secret named ",(0,r.jsx)(s.code,{children:"secret_token"})," would be passed to the pipeline as ",(0,r.jsx)(s.code,{children:"PLUGIN_TOKEN"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," the ",(0,r.jsx)(s.code,{children:"from_secret"})," syntax only works with the newer ",(0,r.jsx)(s.code,{children:"settings"})," block."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"pipeline:\n  docker:\n    image: my-plugin\n    settings:\n+     token:\n+       from_secret: secret_token\n"})}),"\n",(0,r.jsx)(s.p,{children:"Please note parameter expressions are subject to pre-processing. When using secrets in parameter expressions they should be escaped."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"pipeline:\n  docker:\n    image: docker\n    commands:\n-     - echo ${DOCKER_USERNAME}\n-     - echo ${DOCKER_PASSWORD}\n+     - echo $${DOCKER_USERNAME}\n+     - echo $${DOCKER_PASSWORD}\n    secrets: [ docker_username, docker_password ]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"adding-secrets",children:"Adding Secrets"}),"\n",(0,r.jsx)(s.p,{children:"Secrets are added to the Woodpecker secret store on the UI or with the CLI."}),"\n",(0,r.jsx)(s.h2,{id:"alternate-names",children:"Alternate Names"}),"\n",(0,r.jsx)(s.p,{children:"There may be scenarios where you are required to store secrets using alternate names. You can map the alternate secret name to the expected name using the below syntax:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"pipeline:\n  docker:\n    image: plugins/docker\n    repo: octocat/hello-world\n    tags: latest\n+   secrets:\n+     - source: docker_prod_password\n+       target: docker_password\n"})}),"\n",(0,r.jsx)(s.h2,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,r.jsxs)(s.p,{children:["Secrets are not exposed to pull requests by default. You can override this behavior by creating the secret and enabling the ",(0,r.jsx)(s.code,{children:"pull_request"})," event type."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/docker \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name docker_username \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Please be careful when exposing secrets to pull requests. If your repository is open source and accepts pull requests your secrets are not safe. A bad actor can submit a malicious pull request that exposes your secrets."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Create the secret using default settings. The secret will be available to all images in your pipeline, and will be available to all push, tag, and deployment events (not pull request events)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secret and limit to a single image:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secrets and limit to a set of images:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n+ -image peloton/woodpecker-ecs \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secret and enable for multiple hook events:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/s3 \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Loading secrets from file using curl ",(0,r.jsx)(s.code,{children:"@"})," syntax. This is the recommended approach for loading secrets from file to preserve newlines:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name ssh_key \\\n+ -value @/root/ssh/id_rsa\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,s,n)=>{var r=n(50959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,r)&&!i.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:t,type:e,key:l,ref:d,props:o,_owner:c.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},11527:(e,s,n)=>{e.exports=n(3354)},7463:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var r=n(50959);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);