"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["5746"],{55615:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>s,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"administration/advanced/advanced","title":"Advanced options","description":"Why should we be happy with a default setup? We should not! Woodpecker offers a lot of advanced options to configure it to your needs.","source":"@site/docs/30-administration/40-advanced/40-advanced.md","sourceDirName":"30-administration/40-advanced","slug":"/administration/advanced/","permalink":"/docs/next/administration/advanced/","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/40-advanced/40-advanced.md","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Custom backends","permalink":"/docs/next/administration/backends/custom-backends"},"next":{"title":"Proxy","permalink":"/docs/next/administration/advanced/proxy"}}'),i=o("96773"),a=o("46186");let r={},d="Advanced options",s={},c=[{value:"Behind a proxy",id:"behind-a-proxy",level:2},{value:"SSL",id:"ssl",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Autoscaling",id:"autoscaling",level:2},{value:"Configuration service",id:"configuration-service",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"advanced-options",children:"Advanced options"})}),"\n",(0,i.jsx)(n.p,{children:"Why should we be happy with a default setup? We should not! Woodpecker offers a lot of advanced options to configure it to your needs."}),"\n",(0,i.jsx)(n.h2,{id:"behind-a-proxy",children:"Behind a proxy"}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/next/administration/advanced/proxy",children:"proxy guide"})," if you want to see a setup behind Apache, Nginx, Caddy or ngrok."]}),"\n",(0,i.jsxs)(n.p,{children:["In the case you need to use Woodpecker with a URL path prefix (like: ",(0,i.jsx)(n.a,{href:"https://example.org/woodpecker/",children:"https://example.org/woodpecker/"}),"), add the root path to ",(0,i.jsx)(n.a,{href:"/docs/next/administration/server-config#woodpecker_host",children:(0,i.jsx)(n.code,{children:"WOODPECKER_HOST"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ssl",children:"SSL"}),"\n",(0,i.jsxs)(n.p,{children:["Woodpecker supports SSL configuration by using Let's encrypt or by using own certificates. See the ",(0,i.jsx)(n.a,{href:"/docs/next/administration/advanced/ssl",children:"SSL guide"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/next/administration/advanced/prometheus",children:"Prometheus endpoint"})," is exposed by Woodpecker to collect metrics."]}),"\n",(0,i.jsx)(n.h2,{id:"autoscaling",children:"Autoscaling"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/next/administration/advanced/autoscaler",children:"autoscaler"})," can be used to deploy new agents to a cloud provider based on the current workload your server is experiencing."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-service",children:"Configuration service"}),"\n",(0,i.jsxs)(n.p,{children:["Sometime the normal yaml configuration compiler isn't enough. You can use the ",(0,i.jsx)(n.a,{href:"/docs/next/administration/advanced/external-configuration-api",children:"configuration service"})," to process your configuration files by your own."]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},46186:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return r}});var t=o(41699);let i={},a=t.createContext(i);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);