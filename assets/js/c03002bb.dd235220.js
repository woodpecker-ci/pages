/*! For license information please see c03002bb.dd235220.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3499],{13273:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var r=n(11527),i=n(46224);const d={},s="Creating addons",t={id:"administration/addons/creating-addons",title:"Creating addons",description:"Addons are written in Go.",source:"@site/docs/30-administration/75-addons/20-creating-addons.md",sourceDirName:"30-administration/75-addons",slug:"/administration/addons/creating-addons",permalink:"/docs/next/administration/addons/creating-addons",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/75-addons/20-creating-addons.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addons",permalink:"/docs/next/administration/addons/overview"},next:{title:"Server configuration",permalink:"/docs/next/administration/server-config"}},c={},l=[{value:"Writing your code",id:"writing-your-code",level:2},{value:"Return types",id:"return-types",level:3},{value:"Compiling",id:"compiling",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Compile for different versions",id:"compile-for-different-versions",level:3},{value:"Logging",id:"logging",level:2},{value:"Example structure",id:"example-structure",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"creating-addons",children:"Creating addons"}),"\n",(0,r.jsx)(o.p,{children:"Addons are written in Go."}),"\n",(0,r.jsx)(o.h2,{id:"writing-your-code",children:"Writing your code"}),"\n",(0,r.jsx)(o.p,{children:"An addon consists of two variables/functions in Go."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"Type"})," variable. Specifies the type of the addon and must be directly accessed from ",(0,r.jsx)(o.code,{children:"shared/addons/types/types.go"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"Addon"})," function which is the main point of your addon.\nThis function takes two arguments:"]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"The zerolog logger you should use to log errors, warnings etc."}),"\n",(0,r.jsx)(o.li,{children:"A slice of strings with the environment variables used as configuration."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"It returns two values:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["The actual addon. For type reference see ",(0,r.jsx)(o.a,{href:"#return-types",children:"table below"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["An error. If this error is not ",(0,r.jsx)(o.code,{children:"nil"}),", Woodpecker exits."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Directly import Woodpecker's Go package (",(0,r.jsx)(o.code,{children:"go.woodpecker-ci.org/woodpecker/woodpecker/v2"}),") and use the interfaces and types defined there."]}),"\n",(0,r.jsx)(o.h3,{id:"return-types",children:"Return types"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Addon type"}),(0,r.jsx)(o.th,{children:"Return type"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"Forge"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'"go.woodpecker-ci.org/woodpecker/woodpecker/v2/server/forge".Forge'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"Backend"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'"go.woodpecker-ci.org/woodpecker/woodpecker/v2/pipeline/backend/types".Backend'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"ConfigService"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/plugins/config".ConfigService'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"SecretService"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/model".SecretService'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"EnvironmentService"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/model".EnvironmentService'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"RegistryService"})}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'"go.woodpecker-ci.org/woodpecker/v2/server/model".RegistryService'})})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"compiling",children:"Compiling"}),"\n",(0,r.jsx)(o.p,{children:"After you write your addon code, compile your addon:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"go build -buildmode plugin\n"})}),"\n",(0,r.jsx)(o.p,{children:"The output file is your addon which is now ready to be used."}),"\n",(0,r.jsx)(o.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,r.jsxs)(o.p,{children:["Addons must directly depend on Woodpecker's core (",(0,r.jsx)(o.code,{children:"go.woodpecker-ci.org/woodpecker/woodpecker/v2"}),").\nThe addon must have been built with ",(0,r.jsx)(o.strong,{children:"excatly the same code"})," as the Woodpecker instance you'd like to use it on. This means: If you build your addon with a specific commit from Woodpecker ",(0,r.jsx)(o.code,{children:"next"}),", you can likely only use it with the Woodpecker version compiled from this commit.\nAlso, if you change something inside of Woodpecker without committing, it might fail because you need to recompile your addon with this code first."]}),"\n",(0,r.jsx)(o.p,{children:"In addition to this, addons are only supported on Linux, FreeBSD and macOS."}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"It is recommended to at least support the latest released version of Woodpecker."})}),"\n",(0,r.jsx)(o.h3,{id:"compile-for-different-versions",children:"Compile for different versions"}),"\n",(0,r.jsxs)(o.p,{children:["As long as there are no changes to Woodpecker's interfaces or they are backwards-compatible, you can easily compile the addon for multiple version by changing the version of ",(0,r.jsx)(o.code,{children:"go.woodpecker-ci.org/woodpecker/woodpecker/v2"})," using ",(0,r.jsx)(o.code,{children:"go get"})," before compiling."]}),"\n",(0,r.jsx)(o.h2,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(o.p,{children:["The entrypoint receives a ",(0,r.jsx)(o.code,{children:"zerolog.Logger"})," as input. ",(0,r.jsx)(o.strong,{children:"Do not use any other logging solution."})," This logger follows the configuration of the Woodpecker instance and adds a special field ",(0,r.jsx)(o.code,{children:"addon"})," to the log entries which allows users to find out which component is writing the log messages."]}),"\n",(0,r.jsx)(o.h2,{id:"example-structure",children:"Example structure"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n  "context"\n  "net/http"\n\n  "github.com/rs/zerolog"\n  "go.woodpecker-ci.org/woodpecker/woodpecker/v2/server/forge"\n  forge_types "go.woodpecker-ci.org/woodpecker/woodpecker/v2/server/forge/types"\n  "go.woodpecker-ci.org/woodpecker/woodpecker/v2/server/model"\n  addon_types "go.woodpecker-ci.org/woodpecker/woodpecker/v2/shared/addon/types"\n)\n\nvar Type = addon_types.TypeForge\n\nfunc Addon(logger zerolog.Logger, env []string) (forge.Forge, error) {\n  logger.Info().Msg("hello world from addon")\n  return &config{l: logger}, nil\n}\n\ntype config struct {\n  l zerolog.Logger\n}\n\n// ... in this case, `config` must implement `forge.Forge`. You must directly use Woodpecker\'s packages - see imports above.\n'})})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,o,n)=>{var r=n(50959),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,n){var r,d={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(a=o.ref),o)s.call(o,r)&&!c.hasOwnProperty(r)&&(d[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===d[r]&&(d[r]=o[r]);return{$$typeof:i,type:e,key:l,ref:a,props:d,_owner:t.current}}o.Fragment=d,o.jsx=l,o.jsxs=l},11527:(e,o,n)=>{e.exports=n(3354)},46224:(e,o,n)=>{n.d(o,{Z:()=>t,a:()=>s});var r=n(50959);const i={},d=r.createContext(i);function s(e){const o=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);