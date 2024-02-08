/*! For license information please see 556b17cf.31284edb.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8696],{36660:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var r=o(2488),i=o(37052);const d={},s="Creating addons",t={id:"administration/addons/creating-addons",title:"Creating addons",description:"Addons are written in Go.",source:"@site/versioned_docs/version-2.2/30-administration/75-addons/20-creating-addons.md",sourceDirName:"30-administration/75-addons",slug:"/administration/addons/creating-addons",permalink:"/docs/2.2/administration/addons/creating-addons",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/30-administration/75-addons/20-creating-addons.md",tags:[],version:"2.2",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addons",permalink:"/docs/2.2/administration/addons/overview"},next:{title:"Server configuration",permalink:"/docs/2.2/administration/server-config"}},c={},l=[{value:"Writing your code",id:"writing-your-code",level:2},{value:"Return types",id:"return-types",level:3},{value:"Using configurations",id:"using-configurations",level:3},{value:"Compiling",id:"compiling",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Compile for different versions",id:"compile-for-different-versions",level:3},{value:"Logging",id:"logging",level:2},{value:"Example structure",id:"example-structure",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"creating-addons",children:"Creating addons"}),"\n",(0,r.jsx)(n.p,{children:"Addons are written in Go."}),"\n",(0,r.jsx)(n.h2,{id:"writing-your-code",children:"Writing your code"}),"\n",(0,r.jsx)(n.p,{children:"An addon consists of two variables/functions in Go."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Type"})," variable. Specifies the type of the addon and must be directly accessed from ",(0,r.jsx)(n.code,{children:"shared/addons/types/types.go"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Addon"})," function which is the main point of your addon.\nThis function takes the ",(0,r.jsx)(n.code,{children:"zerolog"})," logger you should use to log errors, warnings, etc. as argument."]}),"\n",(0,r.jsx)(n.p,{children:"It returns two values:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The actual addon. For type reference see ",(0,r.jsx)(n.a,{href:"#return-types",children:"table below"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["An error. If this error is not ",(0,r.jsx)(n.code,{children:"nil"}),", Woodpecker exits."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Directly import Woodpecker's Go package (",(0,r.jsx)(n.code,{children:"go.woodpecker-ci.org/woodpecker/woodpecker/v2"}),") and use the interfaces and types defined there."]}),"\n",(0,r.jsx)(n.h3,{id:"return-types",children:"Return types"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Addon type"}),(0,r.jsx)(n.th,{children:"Return type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Forge"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/woodpecker/v2/server/forge".Forge'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Backend"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/woodpecker/v2/pipeline/backend/types".Backend'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ConfigService"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/plugins/config".Extension'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SecretService"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/model".SecretService'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"EnvironmentService"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/model".EnvironmentService'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"RegistryService"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/model".RegistryService'})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"using-configurations",children:"Using configurations"}),"\n",(0,r.jsxs)(n.p,{children:["If you write a plugin for the server (",(0,r.jsx)(n.code,{children:"Forge"})," and the services), you can access the server config."]}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, use the ",(0,r.jsx)(n.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server".Config'})," variable."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The config is not available when your addon is initialized, i.e., the ",(0,r.jsx)(n.code,{children:"Addon"})," function is called.\nOnly use the config in the interface methods."]})}),"\n",(0,r.jsx)(n.h2,{id:"compiling",children:"Compiling"}),"\n",(0,r.jsx)(n.p,{children:"After you write your addon code, compile your addon:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"go build -buildmode plugin\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output file is your addon that is now ready to be used."}),"\n",(0,r.jsx)(n.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,r.jsxs)(n.p,{children:["Addons must directly depend on Woodpecker's core (",(0,r.jsx)(n.code,{children:"go.woodpecker-ci.org/woodpecker/woodpecker/v2"}),").\nThe addon must have been built with ",(0,r.jsx)(n.strong,{children:"exactly the same code"})," as the Woodpecker instance you'd like to use it on. This means: If you build your addon with a specific commit from Woodpecker ",(0,r.jsx)(n.code,{children:"next"}),", you can likely only use it with the Woodpecker version compiled from this commit.\nAlso, if you change something inside Woodpecker without committing, it might fail because you need to recompile your addon with this code first."]}),"\n",(0,r.jsx)(n.p,{children:"In addition to this, addons are only supported on Linux, FreeBSD, and macOS."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"It is recommended to at least support the latest version of Woodpecker."})}),"\n",(0,r.jsx)(n.h3,{id:"compile-for-different-versions",children:"Compile for different versions"}),"\n",(0,r.jsxs)(n.p,{children:["As long as there are no changes to Woodpecker's interfaces,\nor they are backwards-compatible, you can compile the addon for multiple versions\nby changing the version of ",(0,r.jsx)(n.code,{children:"go.woodpecker-ci.org/woodpecker/woodpecker/v2"})," using ",(0,r.jsx)(n.code,{children:"go get"})," before compiling."]}),"\n",(0,r.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(n.p,{children:["The entrypoint receives a ",(0,r.jsx)(n.code,{children:"zerolog.Logger"})," as input. ",(0,r.jsx)(n.strong,{children:"Do not use any other logging solution."})," This logger follows the configuration of the Woodpecker instance and adds a special field ",(0,r.jsx)(n.code,{children:"addon"})," to the log entries which allows users to find out which component is writing the log messages."]}),"\n",(0,r.jsx)(n.h2,{id:"example-structure",children:"Example structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n  "context"\n  "net/http"\n\n  "github.com/rs/zerolog"\n  "go.woodpecker-ci.org/woodpecker/v2/server/forge"\n  forge_types "go.woodpecker-ci.org/woodpecker/v2/server/forge/types"\n  "go.woodpecker-ci.org/woodpecker/v2/server/model"\n  addon_types "go.woodpecker-ci.org/woodpecker/v2/shared/addon/types"\n)\n\nvar Type = addon_types.TypeForge\n\nfunc Addon(logger zerolog.Logger) (forge.Forge, error) {\n  logger.Info().Msg("hello world from addon")\n  return &config{l: logger}, nil\n}\n\ntype config struct {\n  l zerolog.Logger\n}\n\n// In this case, `config` must implement `forge.Forge`. You must directly use Woodpecker\'s packages - see imports above.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,o)=>{var r=o(96651),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var r,d={},l=null,a=null;for(r in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:a,props:d,_owner:t.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},2488:(e,n,o)=>{e.exports=o(38088)},37052:(e,n,o)=>{o.d(n,{I:()=>t,M:()=>s});var r=o(96651);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);