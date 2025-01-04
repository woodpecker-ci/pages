"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["3092"],{7219:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"usage/services","title":"Services","description":"Woodpecker provides a services section in the YAML file used for defining service containers.","source":"@site/versioned_docs/version-1.0/20-usage/60-services.md","sourceDirName":"20-usage","slug":"/usage/services","permalink":"/docs/1.0/usage/services","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/60-services.md","tags":[],"version":"1.0","sidebarPosition":60,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Example plugin","permalink":"/docs/1.0/usage/plugins/sample-plugin"},"next":{"title":"Volumes","permalink":"/docs/1.0/usage/volumes"}}'),t=i("52676"),a=i("23663");let o={},r="Services",c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Detachment",id:"detachment",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Complete Pipeline Example",id:"complete-pipeline-example",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"services",children:"Services"})}),"\n",(0,t.jsx)(n.p,{children:"Woodpecker provides a services section in the YAML file used for defining service containers.\nThe below configuration composes database and cache containers."}),"\n",(0,t.jsxs)(n.p,{children:["Services are accessed using custom hostnames.\nIn the example below, the MySQL service is assigned the hostname ",(0,t.jsx)(n.code,{children:"database"})," and is available at ",(0,t.jsx)(n.code,{children:"database:3306"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\nservices:\n  database:\n    image: mysql\n\n  cache:\n    image: redis\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Service containers generally expose environment variables to customize service startup such as default usernames, passwords and ports. Please see the official image documentation to learn more."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"services:\n  database:\n    image: mysql\n+   environment:\n+     - MYSQL_DATABASE=test\n+     - MYSQL_ALLOW_EMPTY_PASSWORD=yes\n\n  cache:\n    image: redis\n"})}),"\n",(0,t.jsx)(n.h2,{id:"detachment",children:"Detachment"}),"\n",(0,t.jsx)(n.p,{children:"Service and long running containers can also be included in the pipeline section of the configuration using the detach parameter without blocking other steps. This should be used when explicit control over startup order is required."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  database:\n    image: redis\n+   detach: true\n\n  test:\n    image: golang\n    commands:\n      - go test\n"})}),"\n",(0,t.jsx)(n.p,{children:"Containers from detached steps will terminate when the pipeline ends."}),"\n",(0,t.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"Service containers require time to initialize and begin to accept connections. If you are unable to connect to a service you may need to wait a few seconds or implement a backoff."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"steps:\n  test:\n    image: golang\n    commands:\n+     - sleep 15\n      - go get\n      - go test\n\nservices:\n  database:\n    image: mysql\n"})}),"\n",(0,t.jsx)(n.h2,{id:"complete-pipeline-example",children:"Complete Pipeline Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"services:\n  database:\n    image: mysql\n    environment:\n      - MYSQL_DATABASE=test\n      - MYSQL_ROOT_PASSWORD=example\nsteps:\n  get-version:\n    image: ubuntu\n    commands:\n      - ( apt update && apt dist-upgrade -y && apt install -y mysql-client 2>&1 )> /dev/null\n      - sleep 30s # need to wait for mysql-server init\n      - echo 'SHOW VARIABLES LIKE \"version\"' | mysql -uroot -hdatabase test -pexample\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},23663:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var s=i(75271);let t={},a=s.createContext(t);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);