"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["6033"],{45515:function(e,n,d){d.r(n),d.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>t});var s=JSON.parse('{"id":"usage/environment","title":"Environment variables","description":"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Note that these can\'t overwrite any existing, built-in variables. Example pipeline step with custom environment variables:","source":"@site/docs/20-usage/50-environment.md","sourceDirName":"20-usage","slug":"/usage/environment","permalink":"/docs/next/usage/environment","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/50-environment.md","tags":[],"version":"current","sidebarPosition":50,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Cron","permalink":"/docs/next/usage/cron"},"next":{"title":"Plugins","permalink":"/docs/next/usage/plugins/overview"}}'),r=d("52676"),i=d("23663");let c={},t="Environment variables",l={},h=[{value:"Built-in environment variables",id:"built-in-environment-variables",level:2},{value:"Global environment variables",id:"global-environment-variables",level:2},{value:"String Substitution",id:"string-substitution",level:2},{value:"String Operations",id:"string-operations",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"environment-variables",children:"Environment variables"})}),"\n",(0,r.jsx)(n.p,{children:"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Note that these can't overwrite any existing, built-in variables. Example pipeline step with custom environment variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n+    environment:\n+      CGO: 0\n+      GOOS: linux\n+      GOARCH: amd64\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,r.jsx)(n.p,{children:"Please note that the environment section is not able to expand environment variables. If you need to expand variables they should be exported in the commands section."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n-    environment:\n-      - PATH=$PATH:/go\n     commands:\n+      - export PATH=$PATH:/go\n       - go build\n       - go test\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"${variable}"})," expressions are subject to pre-processing. If you do not want the pre-processor to evaluate your expression it must be escaped:"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n     commands:\n-      - export PATH=${PATH}:/go\n+      - export PATH=$${PATH}:/go\n       - go build\n       - go test\n"})}),"\n",(0,r.jsx)(n.h2,{id:"built-in-environment-variables",children:"Built-in environment variables"}),"\n",(0,r.jsx)(n.p,{children:"This is the reference list of all environment variables available to your pipeline containers. These are injected into your pipeline step and plugins containers, at runtime."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"NAME"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI"})}),(0,r.jsx)(n.td,{children:"CI environment name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"woodpecker"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Repository"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO"})}),(0,r.jsxs)(n.td,{children:["repository full name ",(0,r.jsx)(n.code,{children:"<owner>/<name>"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"john-doe/my-repo"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_OWNER"})}),(0,r.jsx)(n.td,{children:"repository owner"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"john-doe"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_NAME"})}),(0,r.jsx)(n.td,{children:"repository name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"my-repo"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_REMOTE_ID"})}),(0,r.jsx)(n.td,{children:"repository remote ID, is the UID it has in the forge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"82"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_URL"})}),(0,r.jsx)(n.td,{children:"repository web URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/john-doe/my-repo"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_CLONE_URL"})}),(0,r.jsx)(n.td,{children:"repository clone URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/john-doe/my-repo.git"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_CLONE_SSH_URL"})}),(0,r.jsx)(n.td,{children:"repository SSH clone URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"git@git.example.com:john-doe/my-repo.git"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_DEFAULT_BRANCH"})}),(0,r.jsx)(n.td,{children:"repository default branch"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_PRIVATE"})}),(0,r.jsx)(n.td,{children:"repository is private"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_TRUSTED_NETWORK"})}),(0,r.jsx)(n.td,{children:"repository has trusted network access"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_TRUSTED_VOLUMES"})}),(0,r.jsx)(n.td,{children:"repository has trusted volumes access"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_REPO_TRUSTED_SECURITY"})}),(0,r.jsx)(n.td,{children:"repository has trusted security access"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Current Commit"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_SHA"})}),(0,r.jsx)(n.td,{children:"commit SHA"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"eba09b46064473a1d345da7abf28b477468e8dbd"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_REF"})}),(0,r.jsx)(n.td,{children:"commit ref"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"refs/heads/main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_REFSPEC"})}),(0,r.jsx)(n.td,{children:"commit ref spec"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"issue-branch:main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_BRANCH"})}),(0,r.jsx)(n.td,{children:"commit branch (equals target branch for pull requests)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_SOURCE_BRANCH"})}),(0,r.jsxs)(n.td,{children:["commit source branch (set only for ",(0,r.jsx)(n.code,{children:"pull_request"})," and ",(0,r.jsx)(n.code,{children:"pull_request_closed"})," events)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"issue-branch"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_TARGET_BRANCH"})}),(0,r.jsxs)(n.td,{children:["commit target branch (set only for ",(0,r.jsx)(n.code,{children:"pull_request"})," and ",(0,r.jsx)(n.code,{children:"pull_request_closed"})," events)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_TAG"})}),(0,r.jsxs)(n.td,{children:["commit tag name (empty if event is not ",(0,r.jsx)(n.code,{children:"tag"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v1.10.3"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_PULL_REQUEST"})}),(0,r.jsxs)(n.td,{children:["commit pull request number (set only for ",(0,r.jsx)(n.code,{children:"pull_request"})," and ",(0,r.jsx)(n.code,{children:"pull_request_closed"})," events)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_PULL_REQUEST_LABELS"})}),(0,r.jsxs)(n.td,{children:["labels assigned to pull request (set only for ",(0,r.jsx)(n.code,{children:"pull_request"})," and ",(0,r.jsx)(n.code,{children:"pull_request_closed"})," events)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"server"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_MESSAGE"})}),(0,r.jsx)(n.td,{children:"commit message"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Initial commit"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_AUTHOR"})}),(0,r.jsx)(n.td,{children:"commit author username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"john-doe"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_AUTHOR_EMAIL"})}),(0,r.jsx)(n.td,{children:"commit author email address"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"john-doe@example.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_AUTHOR_AVATAR"})}),(0,r.jsx)(n.td,{children:"commit author avatar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/avatars/5dcbcadbce6f87f8abef"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_COMMIT_PRERELEASE"})}),(0,r.jsxs)(n.td,{children:["release is a pre-release (empty if event is not ",(0,r.jsx)(n.code,{children:"release"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Current pipeline"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_NUMBER"})}),(0,r.jsx)(n.td,{children:"pipeline number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_PARENT"})}),(0,r.jsx)(n.td,{children:"number of parent pipeline"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_EVENT"})}),(0,r.jsxs)(n.td,{children:["pipeline event (see ",(0,r.jsx)(n.a,{href:"/docs/next/usage/workflow-syntax#event",children:(0,r.jsx)(n.code,{children:"event"})}),")"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"push"}),", ",(0,r.jsx)(n.code,{children:"pull_request"}),", ",(0,r.jsx)(n.code,{children:"pull_request_closed"}),", ",(0,r.jsx)(n.code,{children:"tag"}),", ",(0,r.jsx)(n.code,{children:"release"}),", ",(0,r.jsx)(n.code,{children:"manual"}),", ",(0,r.jsx)(n.code,{children:"cron"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_URL"})}),(0,r.jsx)(n.td,{children:"link to the web UI for the pipeline"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://ci.example.com/repos/7/pipeline/8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_FORGE_URL"})}),(0,r.jsx)(n.td,{children:"link to the forge's web UI for the commit(s) or tag that triggered the pipeline"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/john-doe/my-repo/commit/eba09b46064473a1d345da7abf28b477468e8dbd"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_DEPLOY_TARGET"})}),(0,r.jsxs)(n.td,{children:["pipeline deploy target for ",(0,r.jsx)(n.code,{children:"deployment"})," events"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"production"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_DEPLOY_TASK"})}),(0,r.jsxs)(n.td,{children:["pipeline deploy task for ",(0,r.jsx)(n.code,{children:"deployment"})," events"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"migration"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_CREATED"})}),(0,r.jsx)(n.td,{children:"pipeline created UNIX timestamp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1722617519"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_STARTED"})}),(0,r.jsx)(n.td,{children:"pipeline started UNIX timestamp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1722617519"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PIPELINE_FILES"})}),(0,r.jsxs)(n.td,{children:["changed files (empty if event is not ",(0,r.jsx)(n.code,{children:"push"})," or ",(0,r.jsx)(n.code,{children:"pull_request"}),"), it is undefined if more than 500 files are touched"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"[]"}),", ",(0,r.jsx)(n.code,{children:'[".woodpecker.yml","README.md"]'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Current workflow"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_WORKFLOW_NAME"})}),(0,r.jsx)(n.td,{children:"workflow name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"release"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Current step"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_STEP_NAME"})}),(0,r.jsx)(n.td,{children:"step name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"build package"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_STEP_NUMBER"})}),(0,r.jsx)(n.td,{children:"step number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_STEP_STARTED"})}),(0,r.jsx)(n.td,{children:"step started UNIX timestamp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1722617519"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_STEP_URL"})}),(0,r.jsx)(n.td,{children:"URL to step in UI"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://ci.example.com/repos/7/pipeline/8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Previous commit"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_SHA"})}),(0,r.jsx)(n.td,{children:"previous commit SHA"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"15784117e4e103f36cba75a9e29da48046eb82c4"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_REF"})}),(0,r.jsx)(n.td,{children:"previous commit ref"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"refs/heads/main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_REFSPEC"})}),(0,r.jsx)(n.td,{children:"previous commit ref spec"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"issue-branch:main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_BRANCH"})}),(0,r.jsx)(n.td,{children:"previous commit branch"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_SOURCE_BRANCH"})}),(0,r.jsxs)(n.td,{children:["previous commit source branch (set only for ",(0,r.jsx)(n.code,{children:"pull_request"})," and ",(0,r.jsx)(n.code,{children:"pull_request_closed"})," events)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"issue-branch"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_TARGET_BRANCH"})}),(0,r.jsxs)(n.td,{children:["previous commit target branch (set only for ",(0,r.jsx)(n.code,{children:"pull_request"})," and ",(0,r.jsx)(n.code,{children:"pull_request_closed"})," events)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"main"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_URL"})}),(0,r.jsx)(n.td,{children:"previous commit link in forge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/john-doe/my-repo/commit/15784117e4e103f36cba75a9e29da48046eb82c4"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_MESSAGE"})}),(0,r.jsx)(n.td,{children:"previous commit message"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"test"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_AUTHOR"})}),(0,r.jsx)(n.td,{children:"previous commit author username"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"john-doe"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_AUTHOR_EMAIL"})}),(0,r.jsx)(n.td,{children:"previous commit author email address"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"john-doe@example.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_COMMIT_AUTHOR_AVATAR"})}),(0,r.jsx)(n.td,{children:"previous commit author avatar"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/avatars/12"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Previous pipeline"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_NUMBER"})}),(0,r.jsx)(n.td,{children:"previous pipeline number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"7"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_PARENT"})}),(0,r.jsx)(n.td,{children:"previous pipeline number of parent pipeline"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_EVENT"})}),(0,r.jsxs)(n.td,{children:["previous pipeline event (see ",(0,r.jsx)(n.a,{href:"/docs/next/usage/workflow-syntax#event",children:(0,r.jsx)(n.code,{children:"event"})}),")"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"push"}),", ",(0,r.jsx)(n.code,{children:"pull_request"}),", ",(0,r.jsx)(n.code,{children:"pull_request_closed"}),", ",(0,r.jsx)(n.code,{children:"tag"}),", ",(0,r.jsx)(n.code,{children:"release"}),", ",(0,r.jsx)(n.code,{children:"manual"}),", ",(0,r.jsx)(n.code,{children:"cron"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_URL"})}),(0,r.jsx)(n.td,{children:"previous pipeline link in CI"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://ci.example.com/repos/7/pipeline/7"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_FORGE_URL"})}),(0,r.jsx)(n.td,{children:"previous pipeline link to event in forge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com/john-doe/my-repo/commit/15784117e4e103f36cba75a9e29da48046eb82c4"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_DEPLOY_TARGET"})}),(0,r.jsxs)(n.td,{children:["previous pipeline deploy target for ",(0,r.jsx)(n.code,{children:"deployment"})," events"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"production"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_DEPLOY_TASK"})}),(0,r.jsxs)(n.td,{children:["previous pipeline deploy task for ",(0,r.jsx)(n.code,{children:"deployment"})," events"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"migration"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_STATUS"})}),(0,r.jsx)(n.td,{children:"previous pipeline status"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"success"}),", ",(0,r.jsx)(n.code,{children:"failure"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_CREATED"})}),(0,r.jsx)(n.td,{children:"previous pipeline created UNIX timestamp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1722610173"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_STARTED"})}),(0,r.jsx)(n.td,{children:"previous pipeline started UNIX timestamp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1722610173"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_FINISHED"})}),(0,r.jsx)(n.td,{children:"previous pipeline finished UNIX timestamp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1722610383"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u2003"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_WORKSPACE"})}),(0,r.jsx)(n.td,{children:"Path of the workspace where source code gets cloned to"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/woodpecker/src/git.example.com/john-doe/my-repo"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"System"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_SYSTEM_NAME"})}),(0,r.jsx)(n.td,{children:"name of the CI system"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"woodpecker"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_SYSTEM_URL"})}),(0,r.jsx)(n.td,{children:"link to CI system"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://ci.example.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_SYSTEM_HOST"})}),(0,r.jsx)(n.td,{children:"hostname of CI server"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ci.example.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_SYSTEM_VERSION"})}),(0,r.jsx)(n.td,{children:"version of the server"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2.7.0"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Forge"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_FORGE_TYPE"})}),(0,r.jsx)(n.td,{children:"name of forge"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"bitbucket"})," , ",(0,r.jsx)(n.code,{children:"bitbucket_dc"})," , ",(0,r.jsx)(n.code,{children:"forgejo"})," , ",(0,r.jsx)(n.code,{children:"gitea"})," , ",(0,r.jsx)(n.code,{children:"github"})," , ",(0,r.jsx)(n.code,{children:"gitlab"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_FORGE_URL"})}),(0,r.jsx)(n.td,{children:"root URL of configured forge"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://git.example.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Internal"})," - Please don't use!"]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_SCRIPT"})}),(0,r.jsx)(n.td,{children:"Internal script path. Used to call pipeline step commands."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_NETRC_USERNAME"})}),(0,r.jsx)(n.td,{children:"Credentials for private repos to be able to clone data. (Only available for specific images)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_NETRC_PASSWORD"})}),(0,r.jsx)(n.td,{children:"Credentials for private repos to be able to clone data. (Only available for specific images)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CI_NETRC_MACHINE"})}),(0,r.jsx)(n.td,{children:"Credentials for private repos to be able to clone data. (Only available for specific images)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"global-environment-variables",children:"Global environment variables"}),"\n",(0,r.jsxs)(n.p,{children:["If you want specific environment variables to be available in all of your pipelines use the ",(0,r.jsx)(n.code,{children:"WOODPECKER_ENVIRONMENT"})," setting on the Woodpecker server. Note that these can't overwrite any existing, built-in variables."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_ENVIRONMENT=first_var:value1,second_var:value2\n"})}),"\n",(0,r.jsx)(n.p,{children:"These can be used, for example, to manage the image tag used by multiple projects."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_ENVIRONMENT=GOLANG_VERSION:1.18\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: build\n-    image: golang:1.18\n+    image: golang:${GOLANG_VERSION}\n     commands:\n       - [...]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"string-substitution",children:"String Substitution"}),"\n",(0,r.jsx)(n.p,{children:"Woodpecker provides the ability to substitute environment variables at runtime. This gives us the ability to use dynamic settings, commands and filters in our pipeline configuration."}),"\n",(0,r.jsx)(n.p,{children:"Example commit substitution:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: woodpeckerci/plugin-kaniko\n     settings:\n+      tags: ${CI_COMMIT_SHA}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example tag substitution:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: woodpeckerci/plugin-kaniko\n     settings:\n+      tags: ${CI_COMMIT_TAG}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"string-operations",children:"String Operations"}),"\n",(0,r.jsx)(n.p,{children:"Woodpecker also emulates bash string operations. This gives us the ability to manipulate the strings prior to substitution. Example use cases might include substring and stripping prefix or suffix values."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"OPERATION"}),(0,r.jsx)(n.th,{children:"DESCRIPTION"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param}"})}),(0,r.jsx)(n.td,{children:"parameter substitution"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param,}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with lowercase first char"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param,,}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with lowercase"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param^}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with uppercase first char"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param^^}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with uppercase"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param:pos}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with substring"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param:pos:len}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with substring and length"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param=default}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param##prefix}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with prefix removal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param%%suffix}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with suffix removal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${param/old/new}"})}),(0,r.jsx)(n.td,{children:"parameter substitution with find and replace"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example variable substitution with substring:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: woodpeckerci/plugin-kaniko\n     settings:\n+      tags: ${CI_COMMIT_SHA:0:8}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example variable substitution strips ",(0,r.jsx)(n.code,{children:"v"})," prefix from ",(0,r.jsx)(n.code,{children:"v.1.0.0"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: woodpeckerci/plugin-kaniko\n     settings:\n+      tags: ${CI_COMMIT_TAG##v}\n"})})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},23663:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return c}});var s=d(75271);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);