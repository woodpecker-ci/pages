"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["1978"],{69783:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>r});var t=JSON.parse('{"id":"administration/backends/local","title":"Local backend","description":"The local backend will execute the pipelines on the local system without any isolation of any kind.","source":"@site/versioned_docs/version-1.0/30-administration/22-backends/20-local.md","sourceDirName":"30-administration/22-backends","slug":"/administration/backends/local","permalink":"/docs/1.0/administration/backends/local","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/22-backends/20-local.md","tags":[],"version":"1.0","sidebarPosition":20,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Docker backend","permalink":"/docs/1.0/administration/backends/docker"},"next":{"title":"SSH backend","permalink":"/docs/1.0/administration/backends/ssh"}}'),o=i("52676"),s=i("23663");let a={},r="Local backend",l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"Running the agent",id:"running-the-agent",level:2},{value:"Further configuration",id:"further-configuration",level:2},{value:"Specify the shell to be used for a pipeline step",id:"specify-the-shell-to-be-used-for-a-pipeline-step",level:3},{value:"Using labels to filter tasks",id:"using-labels-to-filter-tasks",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"local-backend",children:"Local backend"})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"The local backend will execute the pipelines on the local system without any isolation of any kind."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This backend is still pretty new and cannot be treated as stable. Its\nimplementation and configuration can change at any time."})}),"\n",(0,o.jsxs)(n.p,{children:["Since the code runs directly in the same context as the agent (same user, same\nfilesystem), a malicious pipeline could be used to access the agent\nconfiguration especially the ",(0,o.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})," variable."]}),"\n",(0,o.jsx)(n.p,{children:"It is recommended to use this backend only for private setup where the code and\npipeline can be trusted. You shouldn't use it for a public facing CI where\nanyone can submit code or add new repositories. You shouldn't execute the agent\nas a privileged user (root)."}),"\n",(0,o.jsx)(n.p,{children:"The local backend will use a random directory in $TMPDIR to store the cloned\ncode and execute commands."}),"\n",(0,o.jsxs)(n.p,{children:["In order to use this backend, you need to download (or build) the\n",(0,o.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest",children:"binary"})," of the\nagent, configure it and run it on the host machine."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"server",children:"Server"}),"\n",(0,o.jsx)(n.p,{children:"Enable connection to the server from the outside of the docker environment by\nexposing the port 9000:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# docker-compose.yml for the server\nversion: '3'\n\nservices:\n  woodpecker-server:\n  [...]\n    ports:\n      - 9000:9000\n      [...]\n    environment:\n      - [...]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"agent",children:"Agent"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:".env"})," file to store environmental variables for configuration.\nAt the minimum you need the following information:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ini",children:"# .env for the agent\nWOODPECKER_AGENT_SECRET=replace_with_your_server_secret\nWOODPECKER_SERVER=replace_with_your_server_address:9000\n"})}),"\n",(0,o.jsx)(n.h2,{id:"running-the-agent",children:"Running the agent"}),"\n",(0,o.jsxs)(n.p,{children:["Start the agent from the directory with the ",(0,o.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"woodpecker-agent"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When using the ",(0,o.jsx)(n.code,{children:"local"})," backend, the\n",(0,o.jsx)(n.a,{href:"https://github.com/woodpecker-ci/plugin-git",children:"plugin-git"})," binary must be in\nyour ",(0,o.jsx)(n.code,{children:"$PATH"})," for the default clone step to work. If not, you can still write a\nmanual clone step."]})}),"\n",(0,o.jsx)(n.h2,{id:"further-configuration",children:"Further configuration"}),"\n",(0,o.jsx)(n.h3,{id:"specify-the-shell-to-be-used-for-a-pipeline-step",children:"Specify the shell to be used for a pipeline step"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"image"})," entry is used to specify the shell, such as Bash or Fish, that is\nused to run the commands."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# .woodpecker.yml\n\nsteps:\n  build:\n    image: bash\n    commands:\n      [...]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-labels-to-filter-tasks",children:"Using labels to filter tasks"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.a,{href:"/docs/1.0/administration/agent-config#woodpecker_filter_labels",children:"agent configuration options"}),"\nand the ",(0,o.jsx)(n.a,{href:"/docs/1.0/usage/pipeline-syntax#labels",children:"pipeline syntax"})," to only run certain\npipelines on certain agents. Example:"]}),"\n",(0,o.jsxs)(n.p,{children:["Define a ",(0,o.jsx)(n.code,{children:"label"})," ",(0,o.jsx)(n.code,{children:"type"})," with value ",(0,o.jsx)(n.code,{children:"exec"})," for a particular agent:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ini",children:"# .env for the agent\n\nWOODPECKER_FILTER_LABELS=type=exec\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, use this ",(0,o.jsx)(n.code,{children:"label"})," ",(0,o.jsx)(n.code,{children:"type"})," with value ",(0,o.jsx)(n.code,{children:"exec"})," in the pipeline definition, to\nonly run on this agent:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# .woodpecker.yml\n\nlabels:\n  type: exec\n\nsteps:\n  [...]\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},23663:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var t=i(75271);let o={},s=t.createContext(o);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);