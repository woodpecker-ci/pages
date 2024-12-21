"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["6052"],{3028:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>p,assets:()=>i,toc:()=>d,frontMatter:()=>c});var o=JSON.parse('{"id":"administration/deployment-methods/docker-compose","title":"docker-compose","description":"The below docker-compose configuration can be used to start a Woodpecker server with a single agent.","source":"@site/versioned_docs/version-2.8/30-administration/05-deployment-methods/10-docker-compose.md","sourceDirName":"30-administration/05-deployment-methods","slug":"/administration/deployment-methods/docker-compose","permalink":"/docs/administration/deployment-methods/docker-compose","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.8/30-administration/05-deployment-methods/10-docker-compose.md","tags":[],"version":"2.8","sidebarPosition":10,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Getting started","permalink":"/docs/administration/getting-started"},"next":{"title":"Kubernetes","permalink":"/docs/administration/deployment-methods/kubernetes"}}'),s=r("52676"),t=r("23663");let c={},a="docker-compose",i={},d=[{value:"Docker images",id:"docker-images",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"docker-compose",children:"docker-compose"})}),"\n",(0,s.jsxs)(n.p,{children:["The below ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," configuration can be used to start a Woodpecker server with a single agent."]}),"\n",(0,s.jsxs)(n.p,{children:["It relies on a number of environment variables that you must set before running ",(0,s.jsx)(n.code,{children:"docker-compose up"}),". The variables are described below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:"version: '3'\n\nservices:\n  woodpecker-server:\n    image: woodpeckerci/woodpecker-server:latest\n    ports:\n      - 8000:8000\n    volumes:\n      - woodpecker-server-data:/var/lib/woodpecker/\n    environment:\n      - WOODPECKER_OPEN=true\n      - WOODPECKER_HOST=${WOODPECKER_HOST}\n      - WOODPECKER_GITHUB=true\n      - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n      - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\n  woodpecker-agent:\n    image: woodpeckerci/woodpecker-agent:latest\n    command: agent\n    restart: always\n    depends_on:\n      - woodpecker-server\n    volumes:\n      - woodpecker-agent-config:/etc/woodpecker\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - WOODPECKER_SERVER=woodpecker-server:9000\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\nvolumes:\n  woodpecker-server-data:\n  woodpecker-agent-config:\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker needs to know its own address. You must therefore provide the public address of it in ",(0,s.jsx)(n.code,{children:"<scheme>://<hostname>"})," format. Please omit trailing slashes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n       - [...]\n+      - WOODPECKER_HOST=${WOODPECKER_HOST}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker can also have its port's configured. It uses a separate port for gRPC and for HTTP. The agent performs gRPC calls and connects to the gRPC port.\nThey can be configured with ",(0,s.jsx)(n.code,{children:"*_ADDR"})," variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n services:\n   woodpecker-server:\n     [...]\n     environment:\n       - [...]\n+      - WOODPECKER_GRPC_ADDR=${WOODPECKER_GRPC_ADDR}\n+      - WOODPECKER_SERVER_ADDR=${WOODPECKER_HTTP_ADDR}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Reverse proxying can also be ",(0,s.jsx)(n.a,{href:"/docs/administration/advanced/proxy#caddy",children:"configured for gRPC"}),". If the agents are connecting over the internet, it should also be SSL encrypted. The agent then needs to be configured to be secure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n services:\n   woodpecker-server:\n     [...]\n     environment:\n       - [...]\n+      - WOODPECKER_GRPC_SECURE=true # defaults to false\n+      - WOODPECKER_GRPC_VERIFY=true # default\n"})}),"\n",(0,s.jsx)(n.p,{children:"As agents run pipeline steps as docker containers they require access to the host machine's Docker daemon:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   [...]\n   woodpecker-agent:\n     [...]\n+    volumes:\n+      - /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,s.jsx)(n.p,{children:"Agents require the server address for agent-to-server communication. The agent connects to the server's gRPC port:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-agent:\n     [...]\n     environment:\n+      - WOODPECKER_SERVER=woodpecker-server:9000\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The server and agents use a shared secret to authenticate communication. This should be a random string of your choosing and should be kept private. You can generate such string with ",(0,s.jsx)(n.code,{children:"openssl rand -hex 32"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n       - [...]\n+      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n   woodpecker-agent:\n     [...]\n     environment:\n       - [...]\n+      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"docker-images",children:"Docker images"}),"\n",(0,s.jsx)(n.p,{children:"Image variants:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"latest"})," image is the latest stable release"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"vX.X.X"})," images are stable releases"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"vX.X"})," images are based on the current release branch (e.g. ",(0,s.jsx)(n.code,{children:"release/v1.0"}),") and can be used to get bugfixes asap"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"next"})," images are based on the current ",(0,s.jsx)(n.code,{children:"main"})," branch"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# server\ndocker pull woodpeckerci/woodpecker-server:latest\ndocker pull woodpeckerci/woodpecker-server:latest-alpine\n\n# agent\ndocker pull woodpeckerci/woodpecker-agent:latest\ndocker pull woodpeckerci/woodpecker-agent:latest-alpine\n\n# cli\ndocker pull woodpeckerci/woodpecker-cli:latest\ndocker pull woodpeckerci/woodpecker-cli:latest-alpine\n"})})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},23663:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return c}});var o=r(75271);let s={},t=o.createContext(s);function c(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);