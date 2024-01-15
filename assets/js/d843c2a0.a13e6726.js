/*! For license information please see d843c2a0.a13e6726.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1213],{61540:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=a(11527),i=a(7463);const t={},r="Advanced pipeline management",o={id:"usage/pipeline-management",title:"Advanced pipeline management",description:"Using variables",source:"@site/versioned_docs/version-1.0/20-usage/90-pipeline-management.md",sourceDirName:"20-usage",slug:"/usage/pipeline-management",permalink:"/docs/1.0/usage/pipeline-management",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/90-pipeline-management.md",tags:[],version:"1.0",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status Badges",permalink:"/docs/1.0/usage/badges"},next:{title:"Setup",permalink:"/docs/1.0/administration/setup"}},l={},c=[{value:"Using variables",id:"using-variables",level:2},{value:"YAML extensions",id:"yaml-extensions",level:3},{value:"YAML extensions (alternate form)",id:"yaml-extensions-alternate-form",level:3},{value:"Persisting environment data between steps",id:"persisting-environment-data-between-steps",level:3},{value:"Declaring global variables in <code>docker-compose.yml</code>",id:"declaring-global-variables-in-docker-composeyml",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"advanced-pipeline-management",children:"Advanced pipeline management"}),"\n",(0,s.jsx)(n.h2,{id:"using-variables",children:"Using variables"}),"\n",(0,s.jsx)(n.p,{children:'Once your pipeline starts to grow in size, it will become important to keep it DRY ("Don\'t Repeat Yourself") by using variables and environment variables. Depending on your specific need, there are a number of options.'}),"\n",(0,s.jsx)(n.h3,{id:"yaml-extensions",children:"YAML extensions"}),"\n",(0,s.jsxs)(n.p,{children:["As described in ",(0,s.jsx)(n.a,{href:"/docs/1.0/usage/advanced-yaml-syntax",children:"Advanced YAML syntax"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"variables:\n  - &golang_image 'golang:1.18'\n\n steps:\n   build:\n     image: *golang_image\n     commands: build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"golang_image"})," alias cannot be used with string interpolation. But this is otherwise a good option for most cases."]}),"\n",(0,s.jsx)(n.h3,{id:"yaml-extensions-alternate-form",children:"YAML extensions (alternate form)"}),"\n",(0,s.jsx)(n.p,{children:"Another approach using YAML extensions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'variables:\n  - global_env: &global_env\n    - BASH_VERSION=1.2.3\n    - PATH_SRC=src/\n    - PATH_TEST=test/\n    - FOO=something\n\nsteps:\n  build:\n    image: bash:${BASH_VERSION}\n    directory: ${PATH_SRC}\n    commands:\n      - make ${FOO} -o ${PATH_TEST}\n    environment: *global_env\n\n  test:\n    image: bash:${BASH_VERSION}\n    commands:\n      - test ${PATH_TEST}\n    environment:\n      - <<:*global_env\n      - ADDITIONAL_LOCAL="var value"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"persisting-environment-data-between-steps",children:"Persisting environment data between steps"}),"\n",(0,s.jsx)(n.p,{children:"One can create a file containing environment variables, and then source it in each step that needs them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'steps:\n  init:\n    image: bash\n    commands:\n      echo "FOO=hello" >> envvars\n      echo "BAR=world" >> envvars\n\n  debug:\n    image: bash\n    commands:\n      - source envvars\n      - echo $FOO\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"declaring-global-variables-in-docker-composeyml",children:["Declaring global variables in ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n",(0,s.jsxs)(n.p,{children:["As described in ",(0,s.jsx)(n.a,{href:"/docs/1.0/usage/environment#global-environment-variables",children:"Global environment variables"}),", one can define global variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"services:\n  woodpecker-server:\n    # ...\n    environment:\n      - WOODPECKER_ENVIRONMENT=first_var:value1,second_var:value2\n      # ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that this tightly couples the server and app configurations (where the app is a completely separate application). But this is a good option for truly global variables which should apply to all steps in all pipelines for all apps."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,n,a)=>{var s=a(50959),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var s,t={},c=null,d=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,s)&&!l.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},11527:(e,n,a)=>{e.exports=a(3354)},7463:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var s=a(50959);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);