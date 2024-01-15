/*! For license information please see acbe8d2e.7e7af15d.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2318],{68087:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=o(11527),t=o(7463);const s={},c="Cron",i={id:"usage/cron",title:"Cron",description:"To configure cron jobs you need at least push access to the repository.",source:"@site/versioned_docs/version-2.1/20-usage/45-cron.md",sourceDirName:"20-usage",slug:"/usage/cron",permalink:"/docs/usage/cron",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/20-usage/45-cron.md",tags:[],version:"2.1",sidebarPosition:45,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Registries",permalink:"/docs/usage/registries"},next:{title:"Environment variables",permalink:"/docs/usage/environment"}},a={},d=[{value:"Add a new cron job",id:"add-a-new-cron-job",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cron",children:"Cron"}),"\n",(0,r.jsx)(n.p,{children:"To configure cron jobs you need at least push access to the repository."}),"\n",(0,r.jsx)(n.h2,{id:"add-a-new-cron-job",children:"Add a new cron job"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To create a new cron job adjust your pipeline config(s) and add the event filter to all steps you would like to run by the cron job:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:' steps:\n   sync_locales:\n     image: weblate_sync\n     settings:\n       url: example.com\n       token:\n         from_secret: weblate_token\n+    when:\n+      event: cron\n+      cron: "name of the cron job" # if you only want to execute this step by a specific cron job\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a new cron job in the repository settings:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cron settings",src:o(56082).Z+"",width:"1057",height:"567"})}),"\n",(0,r.jsxs)(n.p,{children:["The supported schedule syntax can be found at ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/robfig/cron?utm_source=godoc#hdr-CRON_Expression_Format",children:"https://pkg.go.dev/github.com/robfig/cron?utm_source=godoc#hdr-CRON_Expression_Format"}),". If you need general understanding of the cron syntax ",(0,r.jsx)(n.a,{href:"https://crontab.guru/",children:"https://crontab.guru/"})," is a good place to start and experiment."]}),"\n",(0,r.jsxs)(n.p,{children:["Examples: ",(0,r.jsx)(n.code,{children:"@every 5m"}),", ",(0,r.jsx)(n.code,{children:"@daily"}),", ",(0,r.jsx)(n.code,{children:"0 30 * * * *"})," ..."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Woodpeckers cron syntax starts with seconds instead of minutes as used by most linux cron schedulers."}),(0,r.jsxs)(n.p,{children:['Example: "At minute 30 every hour" would be ',(0,r.jsx)(n.code,{children:"0 30 * * * *"})," instead of ",(0,r.jsx)(n.code,{children:"30 * * * *"})]})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,n,o)=>{var r=o(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var r,s={},d=null,l=null;for(r in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},11527:(e,n,o)=>{e.exports=o(3354)},56082:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/cron-settings-ad2d191ee07c3f4c10fd98a81ad5fe76.png"},7463:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>c});var r=o(50959);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);