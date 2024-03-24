"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3691],{7051:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var o=s(13274),i=s(71377);const l={},t="Workflows",r={id:"usage/workflows",title:"Workflows",description:"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow this issue to support further development.",source:"@site/versioned_docs/version-1.0/20-usage/25-workflows.md",sourceDirName:"20-usage",slug:"/usage/workflows",permalink:"/docs/1.0/usage/workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/25-workflows.md",tags:[],version:"1.0",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline syntax",permalink:"/docs/1.0/usage/pipeline-syntax"},next:{title:"Matrix workflows",permalink:"/docs/1.0/usage/matrix-workflows"}},d={},a=[{value:"Benefits of using workflows",id:"benefits-of-using-workflows",level:2},{value:"Example workflow definition",id:"example-workflow-definition",level:2},{value:"Status lines",id:"status-lines",level:2},{value:"Flow control",id:"flow-control",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"workflows",children:"Workflows"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This Feature is only available for GitHub, Gitea & GitLab repositories. Follow ",(0,o.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/1138",children:"this"})," issue to support further development."]})}),"\n",(0,o.jsx)(n.p,{children:"A pipeline has at least one workflow. A workflow is a set of steps that are executed in sequence using the same workspace which is a shared folder containing the repository and all the generated data from previous steps."}),"\n",(0,o.jsxs)(n.p,{children:["Incase there is a single configuration in ",(0,o.jsx)(n.code,{children:".woodpecker.yml"})," Woodpecker will create a pipeline with a single workflow."]}),"\n",(0,o.jsxs)(n.p,{children:["By placing the configurations in a folder which is by default named ",(0,o.jsx)(n.code,{children:".woodpecker/"})," Woodpecker will create a pipeline with multiple workflows each named by the file they are defined in. Only ",(0,o.jsx)(n.code,{children:".yml"})," and ",(0,o.jsx)(n.code,{children:".yaml"})," files will be used and files in any subfolders like ",(0,o.jsx)(n.code,{children:".woodpecker/sub-folder/test.yml"})," will be ignored."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also set some custom path like ",(0,o.jsx)(n.code,{children:".my-ci/pipelines/"})," instead of ",(0,o.jsx)(n.code,{children:".woodpecker/"})," in the ",(0,o.jsx)(n.a,{href:"/docs/1.0/usage/project-settings",children:"project settings"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"benefits-of-using-workflows",children:"Benefits of using workflows"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"faster lint/test feedback, the workflow doesn't have to run fully to have a lint status pushed to the remote"}),"\n",(0,o.jsx)(n.li,{children:"better organization of a pipeline along various concerns using one workflow for: testing, linting, building and deploying"}),"\n",(0,o.jsx)(n.li,{children:"utilizing more agents to speed up the execution of the whole pipeline"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-workflow-definition",children:"Example workflow definition"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Please note that files are only shared between steps of the same workflow (see ",(0,o.jsx)(n.a,{href:"/docs/1.0/usage/pipeline-syntax#file-changes-are-incremental",children:"File changes are incremental"}),"). That means you cannot access artifacts e.g. from the ",(0,o.jsx)(n.code,{children:"build"})," workflow in the ",(0,o.jsx)(n.code,{children:"deploy"})," workflow.\nIf you still need to pass artifacts between the workflows you need use some storage ",(0,o.jsx)(n.a,{href:"/docs/1.0/usage/plugins/plugins",children:"plugin"})," (e.g. one which stores files in an Amazon S3 bucket)."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:".woodpecker/\n\u251c\u2500\u2500 .build.yml\n\u251c\u2500\u2500 .deploy.yml\n\u251c\u2500\u2500 .lint.yml\n\u2514\u2500\u2500 .test.yml\n"})}),"\n",(0,o.jsx)(n.p,{children:".woodpecker/.build.yml"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"steps:\n  build:\n    image: debian:stable-slim\n    commands:\n      - echo building\n      - sleep 5\n"})}),"\n",(0,o.jsx)(n.p,{children:".woodpecker/.deploy.yml"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"steps:\n  deploy:\n    image: debian:stable-slim\n    commands:\n      - echo deploying\n\ndepends_on:\n  - lint\n  - build\n  - test\n"})}),"\n",(0,o.jsx)(n.p,{children:".woodpecker/.test.yml"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"steps:\n  test:\n    image: debian:stable-slim\n    commands:\n      - echo testing\n      - sleep 5\n\ndepends_on:\n  - build\n"})}),"\n",(0,o.jsx)(n.p,{children:".woodpecker/.lint.yml"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"steps:\n  lint:\n    image: debian:stable-slim\n    commands:\n      - echo linting\n      - sleep 5\n"})}),"\n",(0,o.jsx)(n.h2,{id:"status-lines",children:"Status lines"}),"\n",(0,o.jsx)(n.p,{children:"Each workflow will report its own status back to your forge."}),"\n",(0,o.jsx)(n.h2,{id:"flow-control",children:"Flow control"}),"\n",(0,o.jsx)(n.p,{children:"The workflows run in parallel on separate agents and share nothing."}),"\n",(0,o.jsxs)(n.p,{children:["Dependencies between workflows can be set with the ",(0,o.jsx)(n.code,{children:"depends_on"})," element. A workflow doesn't execute until all of its dependencies finished successfully."]}),"\n",(0,o.jsxs)(n.p,{children:["The name for a ",(0,o.jsx)(n.code,{children:"depends_on"})," entry is the filename without the path, leading dots and without the file extension ",(0,o.jsx)(n.code,{children:".yml"})," or ",(0,o.jsx)(n.code,{children:".yaml"}),". If the project config for example uses ",(0,o.jsx)(n.code,{children:".woodpecker/"})," as path for CI files with a file named ",(0,o.jsx)(n.code,{children:".woodpecker/.lint.yml"})," the corresponding ",(0,o.jsx)(n.code,{children:"depends_on"})," entry would be ",(0,o.jsx)(n.code,{children:"lint"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"steps:\n  deploy:\n    image: debian:stable-slim\n    commands:\n      - echo deploying\n\n+depends_on:\n+  - lint\n+  - build\n+  - test\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Workflows that need to run even on failures should set the ",(0,o.jsx)(n.code,{children:"runs_on"})," tag."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"steps:\n  notify:\n    image: debian:stable-slim\n    commands:\n      - echo notifying\n\ndepends_on:\n  - deploy\n\n+runs_on: [ success, failure ]\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Some workflows don't need the source code, like creating a notification on failure.\nRead more about ",(0,o.jsx)(n.code,{children:"skip_clone"})," at ",(0,o.jsx)(n.a,{href:"/docs/1.0/usage/pipeline-syntax#skip_clone",children:"pipeline syntax"})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},71377:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var o=s(79474);const i={},l=o.createContext(i);function t(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);