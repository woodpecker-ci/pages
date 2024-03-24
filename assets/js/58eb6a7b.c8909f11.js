"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1185],{51313:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=a(13274),i=a(71377);const r={},t="Advanced usage",l={id:"usage/advanced-usage",title:"Advanced usage",description:"Advanced YAML syntax",source:"@site/versioned_docs/version-2.3/20-usage/90-advanced-usage.md",sourceDirName:"20-usage",slug:"/usage/advanced-usage",permalink:"/docs/2.3/usage/advanced-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/20-usage/90-advanced-usage.md",tags:[],version:"2.3",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status Badges",permalink:"/docs/2.3/usage/badges"},next:{title:"Deployment",permalink:"/docs/2.3/administration/deployment/overview"}},c={},o=[{value:"Advanced YAML syntax",id:"advanced-yaml-syntax",level:2},{value:"Anchors &amp; aliases",id:"anchors--aliases",level:3},{value:"Map merges and overwrites",id:"map-merges-and-overwrites",level:3},{value:"Sequence merges",id:"sequence-merges",level:3},{value:"References",id:"references",level:3},{value:"Persisting environment data between steps",id:"persisting-environment-data-between-steps",level:2},{value:"Declaring global variables",id:"declaring-global-variables",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,s.jsx)(n.h2,{id:"advanced-yaml-syntax",children:"Advanced YAML syntax"}),"\n",(0,s.jsx)(n.p,{children:"YAML has some advanced syntax features that can be used like variables to reduce duplication in your pipeline config:"}),"\n",(0,s.jsx)(n.h3,{id:"anchors--aliases",children:"Anchors & aliases"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"https://yaml.org/spec/1.2.2/#3222-anchors-and-aliases",children:"YAML anchors & aliases"})," as variables in your pipeline config."]}),"\n",(0,s.jsx)(n.p,{children:"To convert this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: test\n    image: golang:1.18\n    commands: go test ./...\n  - name: build\n    image: golang:1.18\n    commands: build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Just add a new section called ",(0,s.jsx)(n.strong,{children:"variables"})," like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"+variables:\n+  - &golang_image 'golang:1.18'\n\n steps:\n   - name: test\n-    image: golang:1.18\n+    image: *golang_image\n     commands: go test ./...\n   - name: build\n-    image: golang:1.18\n+    image: *golang_image\n     commands: build\n"})}),"\n",(0,s.jsx)(n.h3,{id:"map-merges-and-overwrites",children:"Map merges and overwrites"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"variables:\n  - &base-plugin-settings\n    target: dist\n    recursive: false\n    try: true\n  - &special-setting\n    special: true\n  - &some-plugin codeberg.org/6543/docker-images/print_env\n\nsteps:\n  - name: develop\n    image: *some-plugin\n    settings:\n      <<: [*base-plugin-settings, *special-setting] # merge two maps into an empty map\n    when:\n      branch: develop\n\n  - name: main\n    image: *some-plugin\n    settings:\n      <<: *base-plugin-settings # merge one map and ...\n      try: false # ... overwrite original value\n      ongoing: false # ... adding a new value\n    when:\n      branch: main\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sequence-merges",children:"Sequence merges"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"variables:\n  pre_cmds: &pre_cmds\n    - echo start\n    - whoami\n  post_cmds: &post_cmds\n    - echo stop\n  hello_cmd: &hello_cmd\n    - echo hello\n\nsteps:\n  - name: step1\n    image: debian\n    commands:\n      - <<: *pre_cmds # prepend a sequence\n      - echo exec step now do dedicated things\n      - <<: *post_cmds # append a sequence\n  - name: step2\n    image: debian\n    commands:\n      - <<: [*pre_cmds, *hello_cmd] # prepend two sequences\n      - echo echo from second step\n      - <<: *post_cmds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://yaml.org/spec/1.2.2/#3222-anchors-and-aliases",children:"Official YAML specification"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learnxinyminutes.com/docs/yaml",children:"YAML Cheatsheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"persisting-environment-data-between-steps",children:"Persisting environment data between steps"}),"\n",(0,s.jsx)(n.p,{children:"One can create a file containing environment variables, and then source it in each step that needs them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'steps:\n  - name: init\n    image: bash\n    commands:\n      - echo "FOO=hello" >> envvars\n      - echo "BAR=world" >> envvars\n\n  - name: debug\n    image: bash\n    commands:\n      - source envvars\n      - echo $FOO\n'})}),"\n",(0,s.jsx)(n.h2,{id:"declaring-global-variables",children:"Declaring global variables"}),"\n",(0,s.jsxs)(n.p,{children:["As described in ",(0,s.jsx)(n.a,{href:"/docs/2.3/usage/environment#global-environment-variables",children:"Global environment variables"}),", you can define global variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_ENVIRONMENT=first_var:value1,second_var:value2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that this tightly couples the server and app configurations (where the app is a completely separate application). But this is a good option for truly global variables which should apply to all steps in all pipelines for all apps."})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71377:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>l});var s=a(79474);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);