"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["3120"],{4052:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"usage/secrets","title":"Secrets","description":"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.","source":"@site/versioned_docs/version-1.0/20-usage/40-secrets.md","sourceDirName":"20-usage","slug":"/usage/secrets","permalink":"/docs/1.0/usage/secrets","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/40-secrets.md","tags":[],"version":"1.0","sidebarPosition":40,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Advanced YAML syntax","permalink":"/docs/1.0/usage/advanced-yaml-syntax"},"next":{"title":"Registries","permalink":"/docs/1.0/usage/registries"}}'),r=n("52676"),a=n("23663");let o={},i="Secrets",c={},l=[{value:"Adding Secrets",id:"adding-secrets",level:2},{value:"Alternate Names",id:"alternate-names",level:2},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Image filter",id:"image-filter",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"secrets",children:"Secrets"})}),"\n",(0,r.jsx)(s.p,{children:"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."}),"\n",(0,r.jsx)(s.p,{children:"Secrets are exposed to your pipeline steps and plugins as uppercase environment variables and can therefore be referenced in the commands section of your pipeline."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"steps:\n  docker:\n    image: docker\n    commands:\n+     - echo $DOCKER_USERNAME\n+     - echo $DOCKER_PASSWORD\n+   secrets: [ docker_username, docker_password ]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Alternatively, you can get a ",(0,r.jsx)(s.code,{children:"setting"})," from secrets using the ",(0,r.jsx)(s.code,{children:"from_secret"})," syntax.\nIn this example, the secret named ",(0,r.jsx)(s.code,{children:"secret_token"})," would be passed to the pipeline as ",(0,r.jsx)(s.code,{children:"PLUGIN_TOKEN"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," the ",(0,r.jsx)(s.code,{children:"from_secret"})," syntax only works with the newer ",(0,r.jsx)(s.code,{children:"settings"})," block."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"steps:\n  docker:\n    image: my-plugin\n    settings:\n+     token:\n+       from_secret: secret_token\n"})}),"\n",(0,r.jsx)(s.p,{children:"Please note parameter expressions are subject to pre-processing. When using secrets in parameter expressions they should be escaped."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"steps:\n  docker:\n    image: docker\n    commands:\n-     - echo ${DOCKER_USERNAME}\n-     - echo ${DOCKER_PASSWORD}\n+     - echo $${DOCKER_USERNAME}\n+     - echo $${DOCKER_PASSWORD}\n    secrets: [ docker_username, docker_password ]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"adding-secrets",children:"Adding Secrets"}),"\n",(0,r.jsx)(s.p,{children:"Secrets are added to the Woodpecker secret store on the UI or with the CLI."}),"\n",(0,r.jsx)(s.h2,{id:"alternate-names",children:"Alternate Names"}),"\n",(0,r.jsx)(s.p,{children:"There may be scenarios where you are required to store secrets using alternate names. You can map the alternate secret name to the expected name using the below syntax:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"steps:\n  docker:\n    image: plugins/docker\n    repo: octocat/hello-world\n    tags: latest\n+   secrets:\n+     - source: docker_prod_password\n+       target: docker_password\n"})}),"\n",(0,r.jsx)(s.h2,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,r.jsxs)(s.p,{children:["Secrets are not exposed to pull requests by default. You can override this behavior by creating the secret and enabling the ",(0,r.jsx)(s.code,{children:"pull_request"})," event type."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/docker \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name docker_username \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Please be careful when exposing secrets to pull requests. If your repository is open source and accepts pull requests your secrets are not safe. A bad actor can submit a malicious pull request that exposes your secrets."}),"\n",(0,r.jsx)(s.h2,{id:"image-filter",children:"Image filter"}),"\n",(0,r.jsx)(s.p,{children:"To prevent abusing your secrets with malicious pull requests, you can limit a secret to a list of images. They are not available to any other container. In addition, you can make the secret available only for plugins (steps without user-defined commands)."}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:['If you enable the option "Only available for plugins", always set an image filter too. Otherwise, the secret can be accessed by a very simple self-developed plugin and is thus ',(0,r.jsx)(s.em,{children:"not"})," safe.\nIf you only set an image filter, you could still access the secret using the same image and by specifying a command that prints it."]})}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Create the secret using default settings. The secret will be available to all images in your pipeline, and will be available to all push, tag, and deployment events (not pull request events)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secret and limit to a single image:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secrets and limit to a set of images:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n+ -image plugins/s3 \\\n+ -image peloton/woodpecker-ecs \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secret and enable for multiple hook events:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -image plugins/s3 \\\n+ -event pull_request \\\n+ -event push \\\n+ -event tag \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Loading secrets from file using curl ",(0,r.jsx)(s.code,{children:"@"})," syntax. This is the recommended approach for loading secrets from file to preserve newlines:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name ssh_key \\\n+ -value @/root/ssh/id_rsa\n"})})]})}function p(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},23663:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var t=n(75271);let r={},a=t.createContext(r);function o(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);