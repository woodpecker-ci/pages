"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["9238"],{18567:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"usage/troubleshooting","title":"Troubleshooting","description":"How to debug clone issues","source":"@site/versioned_docs/version-2.6/20-usage/100-troubleshooting.md","sourceDirName":"20-usage","slug":"/usage/troubleshooting","permalink":"/docs/2.6/usage/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.6/20-usage/100-troubleshooting.md","tags":[],"version":"2.6","sidebarPosition":100,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Advanced usage","permalink":"/docs/2.6/usage/advanced-usage"},"next":{"title":"Deployment","permalink":"/docs/2.6/administration/deployment/overview"}}'),s=t("52676"),r=t("23663");let i={},a="Troubleshooting",c={},d=[{value:"How to debug clone issues",id:"how-to-debug-clone-issues",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-debug-clone-issues",children:"How to debug clone issues"}),"\n",(0,s.jsxs)(n.p,{children:["(And what to do with an error message like ",(0,s.jsx)(n.code,{children:"fatal: could not read Username for 'https://<url>': No such device or address"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["This error can have multiple causes. If you use internal repositories you might have to enable ",(0,s.jsx)(n.code,{children:"WOODPECKER_AUTHENTICATE_PUBLIC_REPOS"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_AUTHENTICATE_PUBLIC_REPOS=true\n"})}),"\n",(0,s.jsx)(n.p,{children:'If that does not work, try to make sure the container can reach your git server. In order to do that disable git checkout and make the container "hang":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"skip_clone: true\n\nsteps:\n  build:\n    image: debian:stable-backports\n    commands:\n      - apt update\n      - apt install -y inetutils-ping wget\n      - ping -c 4 git.example.com\n      - wget git.example.com\n      - sleep 9999999\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Get the container id using ",(0,s.jsx)(n.code,{children:"docker ps"})," and copy the id from the first column. Enter the container with: ",(0,s.jsx)(n.code,{children:"docker exec -it 1234asdf  bash"})," (replace ",(0,s.jsx)(n.code,{children:"1234asdf"})," with the docker id). Then try to clone the git repository with the commands from the failing pipeline:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git init\ngit remote add origin https://git.example.com/username/repo.git\ngit fetch --no-tags origin +refs/heads/branch:\n"})}),"\n",(0,s.jsx)(n.p,{children:"(replace the url AND the branch with the correct values, use your username and password as log in values)"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},23663:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var o=t(75271);let s={},r=o.createContext(s);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);