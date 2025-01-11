"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["648"],{81774:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>l});var s=JSON.parse('{"id":"migrations","title":"Migrations","description":"Some versions need some changes to the server configuration or the pipeline configuration files.","source":"@site/versioned_docs/version-1.0/91-migrations.md","sourceDirName":".","slug":"/migrations","permalink":"/docs/1.0/migrations","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/91-migrations.md","tags":[],"version":"1.0","sidebarPosition":91,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Downloads","permalink":"/docs/1.0/downloads"},"next":{"title":"Awesome Woodpecker","permalink":"/docs/1.0/awesome"}}'),r=i("96773"),d=i("46186");let o={},l="Migrations",c={},t=[{value:"next",id:"next",level:2},{value:"1.0.0",id:"100",level:2},{value:"0.15.0",id:"0150",level:2},{value:"0.14.0",id:"0140",level:2}];function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"migrations",children:"Migrations"})}),"\n",(0,r.jsx)(n.p,{children:"Some versions need some changes to the server configuration or the pipeline configuration files."}),"\n",(0,r.jsx)(n.h2,{id:"next",children:"next"}),"\n",(0,r.jsx)(n.p,{children:"No breaking changes"}),"\n",(0,r.jsx)(n.h2,{id:"100",children:"1.0.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The signature used to verify extensions calls (like those used for the ",(0,r.jsx)(n.a,{href:"/docs/1.0/administration/external-configuration-api",children:"config-extension"}),") done by the Woodpecker server switched from using a shared-secret HMac to an ed25519 key-pair. Read more about it at the ",(0,r.jsx)(n.a,{href:"/docs/1.0/administration/external-configuration-api",children:"config-extensions"})," documentation."]}),"\n",(0,r.jsxs)(n.li,{children:["Refactored support of old agent filter labels and expression. Learn how to use the new ",(0,r.jsx)(n.a,{href:"/docs/1.0/usage/pipeline-syntax#labels",children:"filter"})]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed step environment variable ",(0,r.jsx)(n.code,{children:"CI_SYSTEM_ARCH"})," to ",(0,r.jsx)(n.code,{children:"CI_SYSTEM_PLATFORM"}),". Same applies for the cli exec variable."]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed environment variables ",(0,r.jsx)(n.code,{children:"CI_BUILD_*"})," and ",(0,r.jsx)(n.code,{children:"CI_PREV_BUILD_*"})," to ",(0,r.jsx)(n.code,{children:"CI_PIPELINE_*"})," and ",(0,r.jsx)(n.code,{children:"CI_PREV_PIPELINE_*"}),", old ones are still available but deprecated"]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed environment variables ",(0,r.jsx)(n.code,{children:"CI_JOB_*"})," to ",(0,r.jsx)(n.code,{children:"CI_STEP_*"}),", old ones are still available but deprecated"]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed environment variable ",(0,r.jsx)(n.code,{children:"CI_REPO_REMOTE"})," to ",(0,r.jsx)(n.code,{children:"CI_REPO_CLONE_URL"}),", old is still available but deprecated"]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed environment variable ",(0,r.jsx)(n.code,{children:"*_LINK"})," to ",(0,r.jsx)(n.code,{children:"*_URL"}),", old ones are still available but deprecated"]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed API endpoints for pipelines (",(0,r.jsx)(n.code,{children:"<owner>/<repo>/builds/<buildId>"})," -> ",(0,r.jsx)(n.code,{children:"<owner>/<repo>/pipelines/<pipelineId>"}),"), old ones are still available but deprecated"]}),"\n",(0,r.jsxs)(n.li,{children:["Updated Prometheus gauge ",(0,r.jsx)(n.code,{children:"build_*"})," to ",(0,r.jsx)(n.code,{children:"pipeline_*"})]}),"\n",(0,r.jsxs)(n.li,{children:["Updated Prometheus gauge ",(0,r.jsx)(n.code,{children:"*_job_*"})," to ",(0,r.jsx)(n.code,{children:"*_step_*"})]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed config env ",(0,r.jsx)(n.code,{children:"WOODPECKER_MAX_PROCS"})," to ",(0,r.jsx)(n.code,{children:"WOODPECKER_MAX_WORKFLOWS"})," (still available as fallback)"]}),"\n",(0,r.jsxs)(n.li,{children:["The pipelines are now also read from ",(0,r.jsx)(n.code,{children:".yaml"})," files, the new default order is ",(0,r.jsx)(n.code,{children:".woodpecker/*.yml"})," and ",(0,r.jsx)(n.code,{children:".woodpecker/*.yaml"})," (without any prioritization) -> ",(0,r.jsx)(n.code,{children:".woodpecker.yml"})," -> ",(0,r.jsx)(n.code,{children:".woodpecker.yaml"})]}),"\n",(0,r.jsxs)(n.li,{children:["Dropped support for ",(0,r.jsx)(n.a,{href:"https://coding.net/",children:"Coding"}),", ",(0,r.jsx)(n.a,{href:"https://gogs.io",children:"Gogs"})," and Bitbucket Server (Stash)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/api/queue/resume"})," & ",(0,r.jsx)(n.code,{children:"/api/queue/pause"})," endpoint methods were changed from ",(0,r.jsx)(n.code,{children:"GET"})," to ",(0,r.jsx)(n.code,{children:"POST"})]}),"\n",(0,r.jsxs)(n.li,{children:["rename ",(0,r.jsx)(n.code,{children:"pipeline:"})," key in your workflow config to ",(0,r.jsx)(n.code,{children:"steps:"})]}),"\n",(0,r.jsxs)(n.li,{children:["If you want to migrate old logs to the new format, watch the error messages on start. If there are none we are good to go, else you have to plan a migration that can take hours. Set ",(0,r.jsx)(n.code,{children:"WOODPECKER_MIGRATIONS_ALLOW_LONG"})," to true and let it run."]}),"\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"repo-id"})," in favor of ",(0,r.jsx)(n.code,{children:"owner/repo"})," combination\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u26A0\uFE0F The api endpoints ",(0,r.jsx)(n.code,{children:"/api/repos/{owner}/{repo}/..."})," were replaced by new endpoints using the repos id ",(0,r.jsx)(n.code,{children:"/api/repos/{repo-id}"})]}),"\n",(0,r.jsxs)(n.li,{children:["To find the id of a repo use the ",(0,r.jsx)(n.code,{children:"/api/repos/lookup/{repo-full-name-with-slashes}"})," endpoint."]}),"\n",(0,r.jsxs)(n.li,{children:["The existing badge endpoint ",(0,r.jsx)(n.code,{children:"/api/badges/{owner}/{repo}"})," will still work, but whenever possible try to use the new endpoint using the ",(0,r.jsx)(n.code,{children:"repo-id"}),": ",(0,r.jsx)(n.code,{children:"/api/badges/{repo-id}"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The UI urls for a repository changed from ",(0,r.jsx)(n.code,{children:"/repos/{owner}/{repo}/..."})," to ",(0,r.jsx)(n.code,{children:"/repos/{repo-id}/..."}),". You will be redirected automatically when using the old url."]}),"\n",(0,r.jsxs)(n.li,{children:["The woodpecker-go api-client is now using the ",(0,r.jsx)(n.code,{children:"repo-id"})," instead of ",(0,r.jsx)(n.code,{children:"owner/repo"})," for all functions"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.code,{children:"org-id"})," in favour of ",(0,r.jsx)(n.code,{children:"owner"})," name\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u26A0\uFE0F The api endpoints ",(0,r.jsx)(n.code,{children:"/api/orgs/{owner}/..."})," were replaced by new endpoints using the orgs id ",(0,r.jsx)(n.code,{children:"/api/repos/{org-id}"})]}),"\n",(0,r.jsxs)(n.li,{children:["To find the id of orgs use the ",(0,r.jsx)(n.code,{children:"/api/orgs/lookup/{org_full_name}"})," endpoint."]}),"\n",(0,r.jsxs)(n.li,{children:["The UI urls for a organization changed from ",(0,r.jsx)(n.code,{children:"/org/{owner}/..."})," to ",(0,r.jsx)(n.code,{children:"/orgs/{org-id}/..."}),". You will be redirected automatically when using the old url."]}),"\n",(0,r.jsxs)(n.li,{children:["The woodpecker-go api-client is now using the ",(0,r.jsx)(n.code,{children:"org-id"})," instead of ",(0,r.jsx)(n.code,{children:"org name"})," for all functions"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"command:"})," field has been removed from steps. If you were using it, please check if the entrypoint of the image you used is a shell.\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If it is a shell, simply rename ",(0,r.jsx)(n.code,{children:"command:"})," to ",(0,r.jsx)(n.code,{children:"commands:"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If it's not, you need to prepend the entrypoint before and also rename it (e.g., ",(0,r.jsx)(n.code,{children:"commands: <entrypoint> <cmd>"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"0150",children:"0.15.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Default value for custom pipeline path is now empty / un-set which results in following resolution:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".woodpecker/*.yml"})," -> ",(0,r.jsx)(n.code,{children:".woodpecker.yml"})," -> ",(0,r.jsx)(n.code,{children:".drone.yml"})]}),"\n",(0,r.jsxs)(n.p,{children:["Only projects created after updating will have an empty value by default. Existing projects will stick to the current pipeline path which is ",(0,r.jsx)(n.code,{children:".drone.yml"})," in most cases."]}),"\n",(0,r.jsxs)(n.p,{children:["Read more about it at the ",(0,r.jsx)(n.a,{href:"/docs/1.0/usage/project-settings#pipeline-path",children:"Project Settings"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["From version ",(0,r.jsx)(n.code,{children:"0.15.0"})," ongoing there will be three types of docker images: ",(0,r.jsx)(n.code,{children:"latest"}),", ",(0,r.jsx)(n.code,{children:"next"})," and ",(0,r.jsx)(n.code,{children:"x.x.x"})," with an alpine variant for each type like ",(0,r.jsx)(n.code,{children:"latest-alpine"}),".\nIf you used ",(0,r.jsx)(n.code,{children:"latest"})," before to try pre-release features you should switch to ",(0,r.jsx)(n.code,{children:"next"})," after this release."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dropped support for ",(0,r.jsx)(n.code,{children:"DRONE_*"})," environment variables. The according ",(0,r.jsx)(n.code,{children:"WOODPECKER_*"})," variables must be used instead.\nAdditionally some alternative namings have been removed to simplify maintenance:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})," replaces ",(0,r.jsx)(n.code,{children:"WOODPECKER_SECRET"}),", ",(0,r.jsx)(n.code,{children:"DRONE_SECRET"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_PASSWORD"}),", ",(0,r.jsx)(n.code,{children:"DRONE_PASSWORD"})," and ",(0,r.jsx)(n.code,{children:"DRONE_AGENT_SECRET"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WOODPECKER_HOST"})," replaces ",(0,r.jsx)(n.code,{children:"DRONE_HOST"})," and ",(0,r.jsx)(n.code,{children:"DRONE_SERVER_HOST"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WOODPECKER_DATABASE_DRIVER"})," replaces ",(0,r.jsx)(n.code,{children:"DRONE_DATABASE_DRIVER"})," and ",(0,r.jsx)(n.code,{children:"DATABASE_DRIVER"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WOODPECKER_DATABASE_DATASOURCE"})," replaces ",(0,r.jsx)(n.code,{children:"DRONE_DATABASE_DATASOURCE"})," and ",(0,r.jsx)(n.code,{children:"DATABASE_CONFIG"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dropped support for ",(0,r.jsx)(n.code,{children:"DRONE_*"})," environment variables in pipeline steps. Pipeline meta-data can be accessed with ",(0,r.jsx)(n.code,{children:"CI_*"})," variables."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI_*"})," prefix replaces ",(0,r.jsx)(n.code,{children:"DRONE_*"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CI"})," value is now ",(0,r.jsx)(n.code,{children:"woodpecker"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DRONE=true"})," has been removed"]}),"\n",(0,r.jsxs)(n.li,{children:["Some variables got deprecated and will be removed in future versions. Please migrate to the new names. Same applies for ",(0,r.jsx)(n.code,{children:"DRONE_"})," of them.\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CI_ARCH => use CI_SYSTEM_ARCH"}),"\n",(0,r.jsx)(n.li,{children:"CI_COMMIT => CI_COMMIT_SHA"}),"\n",(0,r.jsx)(n.li,{children:"CI_TAG => CI_COMMIT_TAG"}),"\n",(0,r.jsx)(n.li,{children:"CI_PULL_REQUEST => CI_COMMIT_PULL_REQUEST"}),"\n",(0,r.jsx)(n.li,{children:"CI_REMOTE_URL => use CI_REPO_REMOTE"}),"\n",(0,r.jsx)(n.li,{children:"CI_REPO_BRANCH => use CI_REPO_DEFAULT_BRANCH"}),"\n",(0,r.jsx)(n.li,{children:"CI_PARENT_BUILD_NUMBER => use CI_BUILD_PARENT"}),"\n",(0,r.jsx)(n.li,{children:"CI_BUILD_TARGET => use CI_BUILD_DEPLOY_TARGET"}),"\n",(0,r.jsx)(n.li,{children:"CI_DEPLOY_TO => use CI_BUILD_DEPLOY_TARGET"}),"\n",(0,r.jsx)(n.li,{children:"CI_COMMIT_AUTHOR_NAME => use CI_COMMIT_AUTHOR"}),"\n",(0,r.jsx)(n.li,{children:"CI_PREV_COMMIT_AUTHOR_NAME => use CI_PREV_COMMIT_AUTHOR"}),"\n",(0,r.jsx)(n.li,{children:"CI_SYSTEM => use CI_SYSTEM_NAME"}),"\n",(0,r.jsx)(n.li,{children:"CI_BRANCH => use CI_COMMIT_BRANCH"}),"\n",(0,r.jsx)(n.li,{children:"CI_SOURCE_BRANCH => use CI_COMMIT_SOURCE_BRANCH"}),"\n",(0,r.jsx)(n.li,{children:"CI_TARGET_BRANCH => use CI_COMMIT_TARGET_BRANCH"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For all available variables and their descriptions have a look at ",(0,r.jsx)(n.a,{href:"/docs/1.0/usage/environment#built-in-environment-variables",children:"built-in-environment-variables"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Prometheus metrics have been changed from ",(0,r.jsx)(n.code,{children:"drone_*"})," to ",(0,r.jsx)(n.code,{children:"woodpecker_*"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Base path has moved from ",(0,r.jsx)(n.code,{children:"/var/lib/drone"})," to ",(0,r.jsx)(n.code,{children:"/var/lib/woodpecker"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Default workspace base path has moved from ",(0,r.jsx)(n.code,{children:"/drone"})," to ",(0,r.jsx)(n.code,{children:"/woodpecker"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Default SQLite database location has changed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/var/lib/drone/drone.sqlite"})," -> ",(0,r.jsx)(n.code,{children:"/var/lib/woodpecker/woodpecker.sqlite"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"drone.sqlite"})," -> ",(0,r.jsx)(n.code,{children:"woodpecker.sqlite"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Plugin Settings moved into ",(0,r.jsx)(n.code,{children:"settings"})," section:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n something:\n   image: my/plugin\n-  setting1: foo\n-  setting2: bar\n+  settings:\n+    setting1: foo\n+    setting2: bar\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WOODPECKER_DEBUG"})," option for server and agent got removed in favor of ",(0,r.jsx)(n.code,{children:"WOODPECKER_LOG_LEVEL=debug"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Remove unused server flags which can safely be removed from your server config: ",(0,r.jsx)(n.code,{children:"WOODPECKER_QUIC"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITHUB_SCOPE"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITHUB_GIT_USERNAME"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITHUB_GIT_PASSWORD"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITHUB_PRIVATE_MODE"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITEA_GIT_USERNAME"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITEA_GIT_PASSWORD"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITEA_PRIVATE_MODE"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITLAB_GIT_USERNAME"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITLAB_GIT_PASSWORD"}),", ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITLAB_PRIVATE_MODE"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dropped support for manually setting the agents platform with ",(0,r.jsx)(n.code,{children:"WOODPECKER_PLATFORM"}),". The platform is now automatically detected."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"WOODPECKER_STATUS_CONTEXT"})," instead of the deprecated options ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITHUB_CONTEXT"})," and ",(0,r.jsx)(n.code,{children:"WOODPECKER_GITEA_CONTEXT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"0140",children:"0.14.0"}),"\n",(0,r.jsx)(n.p,{children:"No breaking changes"})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},46186:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var s=i(41699);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);