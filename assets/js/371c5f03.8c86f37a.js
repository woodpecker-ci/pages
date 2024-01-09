/*! For license information please see 371c5f03.8c86f37a.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3150],{55297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(11527),r=t(46224);const o={toc_max_heading_level:3},s="Local backend",a={id:"administration/backends/local",title:"Local backend",description:"The local backend will execute the pipelines on the local system without any isolation of any kind.",source:"@site/docs/30-administration/22-backends/20-local.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/local",permalink:"/docs/next/administration/backends/local",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/22-backends/20-local.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Docker backend",permalink:"/docs/next/administration/backends/docker"},next:{title:"Kubernetes backend",permalink:"/docs/next/administration/backends/kubernetes"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"Running the agent",id:"running-the-agent",level:2},{value:"Further configuration",id:"further-configuration",level:2},{value:"Specify the shell to be used for a pipeline step",id:"specify-the-shell-to-be-used-for-a-pipeline-step",level:3},{value:"Plugins as Executable Binaries",id:"plugins-as-executable-binaries",level:3},{value:"Using labels to filter tasks",id:"using-labels-to-filter-tasks",level:3},{value:"Change temp directory",id:"change-temp-directory",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"local-backend",children:"Local backend"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"The local backend will execute the pipelines on the local system without any isolation of any kind."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Currently we do not support services for this backend.\n",(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/3095",children:"Read more here"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Since the code runs directly in the same context as the agent (same user, same\nfilesystem), a malicious pipeline could be used to access the agent\nconfiguration especially the ",(0,i.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})," variable."]}),"\n",(0,i.jsx)(n.p,{children:"It is recommended to use this backend only for private setup where the code and\npipeline can be trusted. You shouldn't use it for a public facing CI where\nanyone can submit code or add new repositories. You shouldn't execute the agent\nas a privileged user (root)."}),"\n",(0,i.jsx)(n.p,{children:"The local backend will use a random directory in $TMPDIR to store the cloned\ncode and execute commands."}),"\n",(0,i.jsxs)(n.p,{children:["In order to use this backend, you need to download (or build) the\n",(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest",children:"binary"})," of the\nagent, configure it and run it on the host machine."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"server",children:"Server"}),"\n",(0,i.jsx)(n.p,{children:"Enable connection to the server from the outside of the docker environment by\nexposing the port 9000:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml" for the server',children:"version: '3'\n\nservices:\n  woodpecker-server:\n  [...]\n    ports:\n      - 9000:9000\n      [...]\n    environment:\n      - [...]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"agent",children:"Agent"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:".env"})," file to store environmental variables for configuration.\nAt the minimum you need the following information:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"# .env for the agent\nWOODPECKER_AGENT_SECRET=replace_with_your_server_secret\nWOODPECKER_SERVER=replace_with_your_server_address:9000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-the-agent",children:"Running the agent"}),"\n",(0,i.jsxs)(n.p,{children:["Start the agent from the directory with the ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"woodpecker-agent"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.code,{children:"local"})," backend, the\n",(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/plugin-git",children:"plugin-git"})," binary must be in\nyour ",(0,i.jsx)(n.code,{children:"$PATH"})," for the default clone step to work. If not, you can still write a\nmanual clone step."]})}),"\n",(0,i.jsx)(n.h2,{id:"further-configuration",children:"Further configuration"}),"\n",(0,i.jsx)(n.h3,{id:"specify-the-shell-to-be-used-for-a-pipeline-step",children:"Specify the shell to be used for a pipeline step"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"image"})," entry is used to specify the shell, such as Bash or Fish, that is\nused to run the commands."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yml"',children:"steps:\n  build:\n    image: bash\n    commands: [...]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"plugins-as-executable-binaries",children:"Plugins as Executable Binaries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"steps:\n  build:\n    image: /usr/bin/tree\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If no commands are provided, we treat them as plugins in the usual manner.\nIn the context of the local backend, plugins are simply executable binaries, which can be located using their name if they are listed in ",(0,i.jsx)(n.code,{children:"$PATH"}),", or through an absolute path."]}),"\n",(0,i.jsx)(n.h3,{id:"using-labels-to-filter-tasks",children:"Using labels to filter tasks"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"/docs/next/administration/agent-config#woodpecker_filter_labels",children:"agent configuration options"}),"\nand the ",(0,i.jsx)(n.a,{href:"/docs/next/usage/workflow-syntax#labels",children:"pipeline syntax"})," to only run certain\npipelines on certain agents. Example:"]}),"\n",(0,i.jsxs)(n.p,{children:["Define a ",(0,i.jsx)(n.code,{children:"label"})," ",(0,i.jsx)(n.code,{children:"type"})," with value ",(0,i.jsx)(n.code,{children:"exec"})," for a particular agent:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"# .env for the agent\n\nWOODPECKER_FILTER_LABELS=type=exec\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, use this ",(0,i.jsx)(n.code,{children:"label"})," ",(0,i.jsx)(n.code,{children:"type"})," with value ",(0,i.jsx)(n.code,{children:"exec"})," in the pipeline definition, to\nonly run on this agent:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yml"',children:"labels:\n  type: exec\n\nsteps: [...]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"change-temp-directory",children:"Change temp directory"}),"\n",(0,i.jsx)(n.p,{children:"We use the default temp directory to create folders for workflows.\nThis directory can be changed by:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"WOODPECKER_BACKEND_LOCAL_TEMP_DIR=/some/other/dir\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var i=t(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,o={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!l.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},46224:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(50959);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);