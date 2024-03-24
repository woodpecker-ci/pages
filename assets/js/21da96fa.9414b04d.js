"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1179],{42763:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(13274),t=i(71377);const r={},o="Example plugin",l={id:"usage/plugins/sample-plugin",title:"Example plugin",description:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.",source:"@site/versioned_docs/version-2.0/20-usage/51-plugins/20-sample-plugin.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/sample-plugin",permalink:"/docs/2.0/usage/plugins/sample-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/20-usage/51-plugins/20-sample-plugin.md",tags:[],version:"2.0",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/2.0/usage/plugins/plugins"},next:{title:"Services",permalink:"/docs/2.0/usage/services"}},a={},c=[{value:"What end users will see",id:"what-end-users-will-see",level:2},{value:"Write the logic",id:"write-the-logic",level:2},{value:"Package it",id:"package-it",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"example-plugin",children:"Example plugin"}),"\n",(0,s.jsx)(n.p,{children:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline."}),"\n",(0,s.jsx)(n.h2,{id:"what-end-users-will-see",children:"What end users will see"}),"\n",(0,s.jsx)(n.p,{children:"The below example demonstrates how we might configure a webhook plugin in the YAML file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  webhook:\n    image: foo/webhook\n    settings:\n      url: http://example.com\n      method: post\n      body: |\n        hello world\n"})}),"\n",(0,s.jsx)(n.h2,{id:"write-the-logic",children:"Write the logic"}),"\n",(0,s.jsxs)(n.p,{children:["Create a simple shell script that invokes curl using the YAML configuration parameters, which are passed to the script as environment variables in uppercase and prefixed with ",(0,s.jsx)(n.code,{children:"PLUGIN_"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n\ncurl \\\n  -X ${PLUGIN_METHOD} \\\n  -d ${PLUGIN_BODY} \\\n  ${PLUGIN_URL}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"package-it",children:"Package it"}),"\n",(0,s.jsx)(n.p,{children:"Create a Dockerfile that adds your shell script to the image, and configures the image to execute your shell script as the main entrypoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",children:"FROM alpine\nADD script.sh /bin/\nRUN chmod +x /bin/script.sh\nRUN apk -Uuv add curl ca-certificates\nENTRYPOINT /bin/script.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Build and publish your plugin to the Docker registry. Once published your plugin can be shared with the broader Woodpecker community."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nohighlight",children:"docker build -t foo/webhook .\ndocker push foo/webhook\n"})}),"\n",(0,s.jsx)(n.p,{children:"Execute your plugin locally from the command line to verify it is working:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nohighlight",children:'docker run --rm \\\n  -e PLUGIN_METHOD=post \\\n  -e PLUGIN_URL=http://example.com \\\n  -e PLUGIN_BODY="hello world" \\\n  foo/webhook\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},71377:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(79474);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);