/*! For license information please see 57f86954.07a7a3ce.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3448],{35340:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(2488),t=i(37052);const s={},o="Example plugin",l={id:"usage/plugins/sample-plugin",title:"Example plugin",description:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.",source:"@site/versioned_docs/version-2.1/20-usage/51-plugins/20-sample-plugin.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/sample-plugin",permalink:"/docs/2.1/usage/plugins/sample-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/20-usage/51-plugins/20-sample-plugin.md",tags:[],version:"2.1",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/2.1/usage/plugins/plugins"},next:{title:"Terminology",permalink:"/docs/2.1/usage/terminiology/"}},a={},c=[{value:"What end users will see",id:"what-end-users-will-see",level:2},{value:"Write the logic",id:"write-the-logic",level:2},{value:"Package it",id:"package-it",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"example-plugin",children:"Example plugin"}),"\n",(0,r.jsx)(n.p,{children:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline."}),"\n",(0,r.jsx)(n.h2,{id:"what-end-users-will-see",children:"What end users will see"}),"\n",(0,r.jsx)(n.p,{children:"The below example demonstrates how we might configure a webhook plugin in the YAML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"steps:\n  webhook:\n    image: foo/webhook\n    settings:\n      url: http://example.com\n      method: post\n      body: |\n        hello world\n"})}),"\n",(0,r.jsx)(n.h2,{id:"write-the-logic",children:"Write the logic"}),"\n",(0,r.jsxs)(n.p,{children:["Create a simple shell script that invokes curl using the YAML configuration parameters, which are passed to the script as environment variables in uppercase and prefixed with ",(0,r.jsx)(n.code,{children:"PLUGIN_"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n\ncurl \\\n  -X ${PLUGIN_METHOD} \\\n  -d ${PLUGIN_BODY} \\\n  ${PLUGIN_URL}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"package-it",children:"Package it"}),"\n",(0,r.jsx)(n.p,{children:"Create a Dockerfile that adds your shell script to the image, and configures the image to execute your shell script as the main entrypoint."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:"FROM alpine\nADD script.sh /bin/\nRUN chmod +x /bin/script.sh\nRUN apk -Uuv add curl ca-certificates\nENTRYPOINT /bin/script.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build and publish your plugin to the Docker registry. Once published your plugin can be shared with the broader Woodpecker community."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nohighlight",children:"docker build -t foo/webhook .\ndocker push foo/webhook\n"})}),"\n",(0,r.jsx)(n.p,{children:"Execute your plugin locally from the command line to verify it is working:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-nohighlight",children:'docker run --rm \\\n  -e PLUGIN_METHOD=post \\\n  -e PLUGIN_URL=http://example.com \\\n  -e PLUGIN_BODY="hello world" \\\n  foo/webhook\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38088:(e,n,i)=>{var r=i(96651),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var r,s={},c=null,p=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:p,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},2488:(e,n,i)=>{e.exports=i(38088)},37052:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>o});var r=i(96651);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);