"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["1192"],{87991:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"usage/cron","title":"Cron","description":"To configure cron jobs you need at least push access to the repository.","source":"@site/versioned_docs/version-1.0/20-usage/45-cron.md","sourceDirName":"20-usage","slug":"/usage/cron","permalink":"/docs/1.0/usage/cron","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/45-cron.md","tags":[],"version":"1.0","sidebarPosition":45,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Registries","permalink":"/docs/1.0/usage/registries"},"next":{"title":"Environment variables","permalink":"/docs/1.0/usage/environment"}}'),r=o("96773"),s=o("46186");let i={},c="Cron",d={},a=[{value:"Add a new cron job",id:"add-a-new-cron-job",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cron",children:"Cron"})}),"\n",(0,r.jsx)(n.p,{children:"To configure cron jobs you need at least push access to the repository."}),"\n",(0,r.jsx)(n.h2,{id:"add-a-new-cron-job",children:"Add a new cron job"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To create a new cron job adjust your pipeline config(s) and add the event filter to all steps you would like to run by the cron job:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:' steps:\n   sync_locales:\n     image: weblate_sync\n     settings:\n       url: example.com\n       token:\n         from_secret: weblate_token\n+    when:\n+      event: cron\n+      cron: "name of the cron job" # if you only want to execute this step by a specific cron job\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a new cron job in the repository settings:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cron settings",src:o(51600).Z+"",width:"1057",height:"567"})}),"\n",(0,r.jsxs)(n.p,{children:["The supported schedule syntax can be found at ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/robfig/cron?utm_source=godoc#hdr-CRON_Expression_Format",children:"https://pkg.go.dev/github.com/robfig/cron?utm_source=godoc#hdr-CRON_Expression_Format"}),". If you need general understanding of the cron syntax ",(0,r.jsx)(n.a,{href:"https://crontab.guru/",children:"https://crontab.guru/"})," is a good place to start and experiment."]}),"\n",(0,r.jsxs)(n.p,{children:["Examples: ",(0,r.jsx)(n.code,{children:"@every 5m"}),", ",(0,r.jsx)(n.code,{children:"@daily"}),", ",(0,r.jsx)(n.code,{children:"0 30 * * * *"})," ..."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Woodpeckers cron syntax starts with seconds instead of minutes as used by most linux cron schedulers."}),(0,r.jsxs)(n.p,{children:['Example: "At minute 30 every hour" would be ',(0,r.jsx)(n.code,{children:"0 30 * * * *"})," instead of ",(0,r.jsx)(n.code,{children:"30 * * * *"})]})]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},51600:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/cron-settings-ad2d191ee07c3f4c10fd98a81ad5fe76.png"},46186:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return i}});var t=o(41699);let r={},s=t.createContext(r);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);