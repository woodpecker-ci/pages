"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["5522"],{41274:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"usage/linter","title":"Linter","description":"Woodpecker automatically lints your workflow files for errors, deprecations and bad habits. Errors and warnings are shown in the UI for any pipelines.","source":"@site/docs/20-usage/72-linter.md","sourceDirName":"20-usage","slug":"/usage/linter","permalink":"/docs/next/usage/linter","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/72-linter.md","tags":[],"version":"current","sidebarPosition":72,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Volumes","permalink":"/docs/next/usage/volumes"},"next":{"title":"Project settings","permalink":"/docs/next/usage/project-settings"}}'),s=r("96773"),i=r("24027");let a={},l="Linter",o={},c=[{value:"Running the linter from CLI",id:"running-the-linter-from-cli",level:2},{value:"Bad habit warnings",id:"bad-habit-warnings",level:2},{value:"Event filter for all steps",id:"event-filter-for-all-steps",level:3}];function d(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"linter",children:"Linter"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker automatically lints your workflow files for errors, deprecations and bad habits. Errors and warnings are shown in the UI for any pipelines."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"errors and warnings in UI",src:r(39189).Z+"",width:"2256",height:"587"})}),"\n",(0,s.jsx)(n.h2,{id:"running-the-linter-from-cli",children:"Running the linter from CLI"}),"\n",(0,s.jsx)(n.p,{children:"You can run the linter also manually from the CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"woodpecker-cli lint <workflow files>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"bad-habit-warnings",children:"Bad habit warnings"}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker warns you if your configuration contains some bad habits."}),"\n",(0,s.jsx)(n.h3,{id:"event-filter-for-all-steps",children:"Event filter for all steps"}),"\n",(0,s.jsxs)(n.p,{children:["All your items in ",(0,s.jsx)(n.code,{children:"when"})," blocks should have an ",(0,s.jsx)(n.code,{children:"event"})," filter, so no step runs on all events. This is recommended because if new events are added, your steps probably shouldn't run on those as well."]}),"\n",(0,s.jsxs)(n.p,{children:["Examples of an ",(0,s.jsx)(n.strong,{children:"incorrect"})," config for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"when:\n  - branch: main\n  - event: tag\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will trigger the warning because the first item (",(0,s.jsx)(n.code,{children:"branch: main"}),") does not filter with an event."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: test\n    when:\n      branch: main\n\n  - name: deploy\n    when:\n      event: tag\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Examples of a ",(0,s.jsx)(n.strong,{children:"correct"})," config for this rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"when:\n  - branch: main\n    event: push\n  - event: tag\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: test\n    when:\n      event: [tag, push]\n\n  - name: deploy\n    when:\n      - event: tag\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},39189:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/linter-warnings-errors-d67e4737392ab8575a3f5b2e0a398a8b.png"},24027:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(41699);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);