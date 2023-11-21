/*! For license information please see e4b946d0.8d959551.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9891],{527:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=o(11527),i=o(63883);const s={},r="Getting started",a={id:"development/getting-started",title:"Getting started",description:"You can develop on your local computer by following the steps below or you can start with a fully prepared online setup using Gitpod and Gitea.",source:"@site/versioned_docs/version-1.0/92-development/01-getting-started.md",sourceDirName:"92-development",slug:"/development/getting-started",permalink:"/docs/development/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/92-development/01-getting-started.md",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Awesome Woodpecker",permalink:"/docs/awesome"},next:{title:"UI Development",permalink:"/docs/development/ui"}},d={},l=[{value:"Gitpod",id:"gitpod",level:2},{value:"Preparation for local development",id:"preparation-for-local-development",level:2},{value:"Install Go",id:"install-go",level:3},{value:"Install make",id:"install-make",level:3},{value:"Install Node.js &amp; pnpm",id:"install-nodejs--pnpm",level:3},{value:"Create a <code>.env</code> file with your development configuration",id:"create-a-env-file-with-your-development-configuration",level:3},{value:"Setup O-Auth",id:"setup-o-auth",level:3},{value:"Developing with VS-Code",id:"developing-with-vs-code",level:2},{value:"Debugging Woodpecker",id:"debugging-woodpecker",level:3},{value:"Testing &amp; linting code",id:"testing--linting-code",level:2},{value:"Run applications from terminal",id:"run-applications-from-terminal",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsxs)(n.p,{children:["You can develop on your local computer by following the ",(0,t.jsx)(n.a,{href:"#preparation-for-local-development",children:"steps below"})," or you can start with a fully prepared online setup using ",(0,t.jsx)(n.a,{href:"https://github.com/gitpod-io/gitpod",children:"Gitpod"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/go-gitea/gitea",children:"Gitea"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"gitpod",children:"Gitpod"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to start development or updating docs as easy as possible you can use our preconfigured setup for Woodpecker using ",(0,t.jsx)(n.a,{href:"https://github.com/gitpod-io/gitpod",children:"Gitpod"}),". Gitpod starts a complete development setup in the cloud containing:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An IDE in the browser or bridged to your local VS-Code or Jetbrains"}),"\n",(0,t.jsxs)(n.li,{children:["A preconfigured ",(0,t.jsx)(n.a,{href:"https://github.com/go-gitea/gitea",children:"Gitea"})," instance as forge"]}),"\n",(0,t.jsx)(n.li,{children:"A preconfigured Woodpecker server"}),"\n",(0,t.jsx)(n.li,{children:"A single preconfigured Woodpecker agent node"}),"\n",(0,t.jsx)(n.li,{children:"Our docs preview server"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Simply start Woodpecker in Gitpod by clicking on the following badge. You can login with ",(0,t.jsx)(n.code,{children:"woodpecker"})," and ",(0,t.jsx)(n.code,{children:"password"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://gitpod.io/#https://github.com/woodpecker-ci/woodpecker",children:(0,t.jsx)(n.img,{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),"\n",(0,t.jsx)(n.h2,{id:"preparation-for-local-development",children:"Preparation for local development"}),"\n",(0,t.jsx)(n.h3,{id:"install-go",children:"Install Go"}),"\n",(0,t.jsxs)(n.p,{children:["Install Golang (>=1.20) as described by ",(0,t.jsx)(n.a,{href:"https://go.dev/doc/install",children:"this guide"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"install-make",children:"Install make"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. (",(0,t.jsx)(n.a,{href:"https://www.gnu.org/software/make/",children:"https://www.gnu.org/software/make/"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Install make on:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ubuntu: ",(0,t.jsx)(n.code,{children:"apt install make"})," - ",(0,t.jsx)(n.a,{href:"https://wiki.ubuntuusers.de/Makefile/",children:"Docs"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/32127632/8461267",children:"Windows"})}),"\n",(0,t.jsxs)(n.li,{children:["Mac OS: ",(0,t.jsx)(n.code,{children:"brew install make"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-nodejs--pnpm",children:"Install Node.js & pnpm"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js (>=14)"})," if you want to build Woodpeckers UI or documentation."]}),"\n",(0,t.jsxs)(n.p,{children:["For dependencies installation (node_modules) for the UI and documentation of Woodpecker the package-manager pnpm is used. The installation of pnpm is described by ",(0,t.jsx)(n.a,{href:"https://pnpm.io/installation",children:"this guide"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"create-a-env-file-with-your-development-configuration",children:["Create a ",(0,t.jsx)(n.code,{children:".env"})," file with your development configuration"]}),"\n",(0,t.jsxs)(n.p,{children:["Similar to the environment variables you can set for your production setup of Woodpecker, you can create a ",(0,t.jsx)(n.code,{children:".env"})," in the root of the Woodpecker project and add any need config to it."]}),"\n",(0,t.jsx)(n.p,{children:"A common config for debugging would look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_OPEN=true\nWOODPECKER_ADMIN=your-username\n\n# if you want to test webhooks with an online forge like GitHub this address needs to be accessible from public server\nWOODPECKER_HOST=http://your-dev-address.com\n\n# github (sample for a forge config - see /docs/administration/forge/overview for other forges)\nWOODPECKER_GITHUB=true\nWOODPECKER_GITHUB_CLIENT=<redacted>\nWOODPECKER_GITHUB_SECRET=<redacted>\n\n# agent\nWOODPECKER_SERVER=localhost:9000\nWOODPECKER_SECRET=a-long-and-secure-password-used-for-the-local-development-system\nWOODPECKER_MAX_WORKFLOWS=1\n\n# enable if you want to develop the UI\n# WOODPECKER_DEV_WWW_PROXY=http://localhost:8010\n\n# used so you can login without using a public address\nWOODPECKER_DEV_OAUTH_HOST=http://localhost:8000\n\n# disable health-checks while debugging (normally not needed while developing)\nWOODPECKER_HEALTHCHECK=false\n\n# WOODPECKER_LOG_LEVEL=debug\n# WOODPECKER_LOG_LEVEL=trace\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setup-o-auth",children:"Setup O-Auth"}),"\n",(0,t.jsxs)(n.p,{children:["Create an O-Auth app for your forge as describe in the ",(0,t.jsx)(n.a,{href:"/docs/administration/forges/overview",children:"forges documentation"}),". If you set ",(0,t.jsx)(n.code,{children:"WOODPECKER_DEV_OAUTH_HOST=http://localhost:8000"})," you can use that address with the path as explained for the specific forge to login without the need for a public address. For example for GitHub you would use ",(0,t.jsx)(n.code,{children:"http://localhost:8000/authorize"})," as authorization callback URL."]}),"\n",(0,t.jsx)(n.h2,{id:"developing-with-vs-code",children:"Developing with VS-Code"}),"\n",(0,t.jsxs)(n.p,{children:["You can use different methods for debugging the Woodpecker applications. One of the currently recommended ways to debug and test the Woodpecker application is using ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS-Code"})," or ",(0,t.jsx)(n.a,{href:"https://vscodium.com/",children:"VS-Codium"})," (Open-Source binaries of VS-Code) as most maintainers are using it and Woodpecker already includes the needed debug configurations for it."]}),"\n",(0,t.jsxs)(n.p,{children:['To launch all needed services for local development you can use "Woodpecker CI" debugging configuration that will launch UI, server and agent in debugging mode. Then open ',(0,t.jsx)(n.code,{children:"http://localhost:8000"})," to access it."]}),"\n",(0,t.jsxs)(n.p,{children:["As a starting guide for programming Go with VS-Code you can use this video guide:\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=1MXIGYrMk80",children:(0,t.jsx)(n.img,{src:"https://img.youtube.com/vi/1MXIGYrMk80/0.jpg",alt:"Getting started with Go in VS-Code"})})]}),"\n",(0,t.jsx)(n.h3,{id:"debugging-woodpecker",children:"Debugging Woodpecker"}),"\n",(0,t.jsx)(n.p,{children:"The Woodpecker source code already includes launch configurations for the Woodpecker server and agent. To start debugging you can click on the debug icon in the navigation bar of VS-Code (ctrl-shift-d). On that page you will see the existing launch jobs at the top. Simply select the agent or server and click on the play button. You can set breakpoints in the source files to stop at specific points."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Woodpecker debugging with VS-Code",src:o(51615).Z+"",width:"471",height:"465"})}),"\n",(0,t.jsx)(n.h2,{id:"testing--linting-code",children:"Testing & linting code"}),"\n",(0,t.jsx)(n.p,{children:"To test or lint parts of Woodpecker you can run one of the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# test server code\nmake test-server\n\n# test agent code\nmake test-agent\n\n# test cli code\nmake test-cli\n\n# test datastore / database related code like migrations of the server\nmake test-server-datastore\n\n# lint go code\nmake lint\n\n# lint UI code\nmake lint-frontend\n\n# test UI code\nmake test-frontend\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want to test a specific go file you can also use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go test -race -timeout 30s github.com/woodpecker-ci/woodpecker/<path-to-the-package-or-file-to-test>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or you can open the test-file inside ",(0,t.jsx)(n.a,{href:"#developing-with-vs-code",children:"VS-Code"})," and run or debug the test by clicking on the inline commands:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Run test via VS-Code",src:o(84668).Z+"",width:"606",height:"300"})}),"\n",(0,t.jsx)(n.h2,{id:"run-applications-from-terminal",children:"Run applications from terminal"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to run a Woodpecker applications from your terminal you can use one of the following commands from the base of the Woodpecker project. They will execute Woodpecker in a similar way as described in ",(0,t.jsx)(n.a,{href:"#debugging-woodpecker",children:"debugging Woodpecker"})," without the ability to really debug it in your editor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="start server"',children:"go run ./cmd/server\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="start agent"',children:"go run ./cmd/agent\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="execute cli command"',children:"go run ./cmd/cli [command]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3354:(e,n,o)=>{var t=o(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var t,s={},l=null,c=null;for(t in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},11527:(e,n,o)=>{e.exports=o(3354)},51615:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/vscode-debug-3c793753073a5c21fea0495f17941337.png"},84668:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/vscode-run-test-88492a530ddeb515dea1b334e1103aca.png"},63883:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(50959);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);