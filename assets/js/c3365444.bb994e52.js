"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["3421"],{30948:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"administration/backends/local","title":"Local backend","description":"The local backend executes pipelines on the local system without any isolation.","source":"@site/versioned_docs/version-2.8/30-administration/22-backends/20-local.md","sourceDirName":"30-administration/22-backends","slug":"/administration/backends/local","permalink":"/docs/administration/backends/local","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.8/30-administration/22-backends/20-local.md","tags":[],"version":"2.8","sidebarPosition":20,"frontMatter":{"toc_max_heading_level":3},"sidebar":"tutorialSidebar","previous":{"title":"Docker backend","permalink":"/docs/administration/backends/docker"},"next":{"title":"Kubernetes backend","permalink":"/docs/administration/backends/kubernetes"}}'),t=i("52676"),s=i("23663");let a={toc_max_heading_level:3},c="Local backend",d={},l=[{value:"Usage",id:"usage",level:2},{value:"Shell",id:"shell",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Options",id:"options",level:3},{value:"<code>WOODPECKER_BACKEND_LOCAL_TEMP_DIR</code>",id:"woodpecker_backend_local_temp_dir",level:4}];function r(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"local-backend",children:"Local backend"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"The local backend executes pipelines on the local system without any isolation."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Currently we do not support ",(0,t.jsx)(n.a,{href:"/docs/usage/services",children:"services"})," for this backend.\n",(0,t.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/3095",children:"Read more here"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Since the commands run directly in the same context as the agent (same user, same\nfilesystem), a malicious pipeline could be used to access the agent\nconfiguration especially the ",(0,t.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})," variable."]}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to use this backend only for private setup where the code and\npipeline can be trusted. It should not be used in a public instance where\nanyone can submit code or add new repositories. The agent should not run as a privileged user (root)."}),"\n",(0,t.jsxs)(n.p,{children:["The local backend will use a random directory in ",(0,t.jsx)(n.code,{children:"$TMPDIR"})," to store the cloned\ncode and execute commands."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to use this backend, you need to download (or build) the\n",(0,t.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest",children:"agent"}),", configure it and run it on the host machine."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"To enable the local backend, set the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_BACKEND=local\n"})}),"\n",(0,t.jsx)(n.h3,{id:"shell",children:"Shell"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"image"})," entrypoint is used to specify the shell, such as ",(0,t.jsx)(n.code,{children:"bash"})," or ",(0,t.jsx)(n.code,{children:"fish"}),", that is\nused to run the commands."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yaml"',children:"steps:\n  - name: build\n    image: bash\n    commands: [...]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: build\n    image: /usr/bin/tree\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If no commands are provided, plugins are treated in the usual manner.\nIn the context of the local backend, plugins are simply executable binaries, which can be located using their name if they are listed in ",(0,t.jsx)(n.code,{children:"$PATH"}),", or through an absolute path."]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h4,{id:"woodpecker_backend_local_temp_dir",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_LOCAL_TEMP_DIR"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Default: default temp directory"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Directory to create folders for workflows."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},23663:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var o=i(75271);let t={},s=o.createContext(t);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);