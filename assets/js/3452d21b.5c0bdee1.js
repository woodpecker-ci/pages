/*! For license information please see 3452d21b.5c0bdee1.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5086],{71938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=s(11527),r=s(76225);const t={},o="Advanced YAML syntax",i={id:"usage/advanced-yaml-syntax",title:"Advanced YAML syntax",description:"Anchors & aliases",source:"@site/versioned_docs/version-1.0/20-usage/35-advanced-yaml-syntax.md",sourceDirName:"20-usage",slug:"/usage/advanced-yaml-syntax",permalink:"/docs/usage/advanced-yaml-syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/35-advanced-yaml-syntax.md",tags:[],version:"1.0",sidebarPosition:35,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix workflows",permalink:"/docs/usage/matrix-workflows"},next:{title:"Secrets",permalink:"/docs/usage/secrets"}},c={},d=[{value:"Anchors &amp; aliases",id:"anchors--aliases",level:2},{value:"Map merges and overwrites",id:"map-merges-and-overwrites",level:2},{value:"Sequence merges",id:"sequence-merges",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"advanced-yaml-syntax",children:"Advanced YAML syntax"}),"\n",(0,a.jsx)(n.h2,{id:"anchors--aliases",children:"Anchors & aliases"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"https://yaml.org/spec/1.2.2/#3222-anchors-and-aliases",children:"YAML anchors & aliases"})," as variables in your pipeline config."]}),"\n",(0,a.jsx)(n.p,{children:"To convert this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"steps:\n  test:\n    image: golang:1.18\n    commands: go test ./...\n  build:\n    image: golang:1.18\n    commands: build\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Just add a new section called ",(0,a.jsx)(n.strong,{children:"variables"})," like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"+variables:\n+  - &golang_image 'golang:1.18'\n\n steps:\n   test:\n-    image: golang:1.18\n+    image: *golang_image\n     commands: go test ./...\n   build:\n-    image: golang:1.18\n+    image: *golang_image\n     commands: build\n"})}),"\n",(0,a.jsx)(n.h2,{id:"map-merges-and-overwrites",children:"Map merges and overwrites"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"variables:\n  - &base-plugin-settings\n    target: dist\n    recursive: false\n    try: true\n  - &special-setting\n    special: true\n  - &some-plugin codeberg.org/6543/docker-images/print_env\n\nsteps:\n  develop:\n    image: *some-plugin\n    settings:\n      <<: [*base-plugin-settings, *special-setting] # merge two maps into an empty map\n    when:\n      branch: develop\n\n  main:\n    image: *some-plugin\n    settings:\n      <<: *base-plugin-settings # merge one map and ...\n      try: false # ... overwrite original value\n      ongoing: false # ... adding a new value\n    when:\n      branch: main\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sequence-merges",children:"Sequence merges"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"variables:\n  pre_cmds: &pre_cmds\n   - echo start\n   - whoami\n  post_cmds: &post_cmds\n   - echo stop\n  hello_cmd: &hello_cmd\n   - echo hello\n\nsteps:\n  step1:\n    image: debian\n    commands:\n     - <<: *pre_cmds # prepend a sequence\n     - echo exec step now do dedicated things\n     - <<: *post_cmds # append a sequence\n  step2:\n    image: debian\n    commands:\n     - <<: [*pre_cmds, *hello_cmd] # prepend two sequences\n     - echo echo from second step\n     - <<: *post_cmds\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},3354:(e,n,s)=>{var a=s(50959),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var a,t={},d=null,l=null;for(a in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,a)&&!c.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:r,type:e,key:d,ref:l,props:t,_owner:i.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},76225:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var a=s(50959);const r={},t=a.createContext(r);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);