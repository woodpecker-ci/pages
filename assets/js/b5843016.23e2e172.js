"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3106],{49613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(n),u=i,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||r;return n?a.createElement(N,l(l({ref:t},d),{},{components:n})):a.createElement(N,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},47356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>u,default:()=>E,frontMatter:()=>k,metadata:()=>N,toc:()=>c});var a=n(49613),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&d(e,n,t[n]);return e};const k={},u="Migrations",N={unversionedId:"migrations",id:"migrations",title:"Migrations",description:"Some versions need some changes to the server configuration or the pipeline configuration files.",source:"@site/docs/91-migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/next/migrations",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/91-migrations.md",tags:[],version:"current",sidebarPosition:91,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Downloads",permalink:"/docs/next/downloads"},next:{title:"Awesome Woodpecker",permalink:"/docs/next/awesome"}},C={},c=[{value:"next (1.1.0)",id:"next-110",level:2},{value:"1.0.0",id:"100",level:2},{value:"0.15.0",id:"0150",level:2},{value:"0.14.0",id:"0140",level:2}],_={toc:c};function E(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},_),d),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"migrations"}),"Migrations"),(0,a.kt)("p",null,"Some versions need some changes to the server configuration or the pipeline configuration files."),(0,a.kt)("h2",s({},{id:"next-110"}),"next (1.1.0)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drop deprecated ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_BUILD_*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_PREV_BUILD_*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_JOB_*"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"*_LINK"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_SYSTEM_ARCH"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_REPO_REMOTE")," built-in environment variables")),(0,a.kt)("h2",s({},{id:"100"}),"1.0.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The signature used to verify extensions calls (like those used for the ",(0,a.kt)("a",s({parentName:"li"},{href:"/docs/next/administration/external-configuration-api"}),"config-extension"),") done by the Woodpecker server switched from using a shared-secret HMac to an ed25519 key-pair. Read more about it at the ",(0,a.kt)("a",s({parentName:"li"},{href:"/docs/next/administration/external-configuration-api"}),"config-extensions")," documentation."),(0,a.kt)("li",{parentName:"ul"},"Refactored support of old agent filter labels and expression. Learn how to use the new ",(0,a.kt)("a",s({parentName:"li"},{href:"/docs/next/usage/pipeline-syntax#labels"}),"filter")),(0,a.kt)("li",{parentName:"ul"},"Renamed step environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_SYSTEM_ARCH")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_SYSTEM_PLATFORM"),". Same applies for the cli exec variable."),(0,a.kt)("li",{parentName:"ul"},"Renamed environment variables ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_BUILD_*")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_PREV_BUILD_*")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_PIPELINE_*")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_PREV_PIPELINE_*"),", old ones are still available but deprecated"),(0,a.kt)("li",{parentName:"ul"},"Renamed environment variables ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_JOB_*")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_STEP_*"),", old ones are still available but deprecated"),(0,a.kt)("li",{parentName:"ul"},"Renamed environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_REPO_REMOTE")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"CI_REPO_CLONE_URL"),", old is still available but deprecated"),(0,a.kt)("li",{parentName:"ul"},"Renamed environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"*_LINK")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"*_URL"),", old ones are still available but deprecated"),(0,a.kt)("li",{parentName:"ul"},"Renamed API endpoints for pipelines (",(0,a.kt)("inlineCode",{parentName:"li"},"<owner>/<repo>/builds/<buildId>")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"<owner>/<repo>/pipelines/<pipelineId>"),"), old ones are still available but deprecated"),(0,a.kt)("li",{parentName:"ul"},"Updated Prometheus gauge ",(0,a.kt)("inlineCode",{parentName:"li"},"build_*")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeline_*")),(0,a.kt)("li",{parentName:"ul"},"Updated Prometheus gauge ",(0,a.kt)("inlineCode",{parentName:"li"},"*_job_*")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"*_step_*")),(0,a.kt)("li",{parentName:"ul"},"Renamed config env ",(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_MAX_PROCS")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_MAX_WORKFLOWS")," (still available as fallback)"),(0,a.kt)("li",{parentName:"ul"},"The pipelines are now also read from ",(0,a.kt)("inlineCode",{parentName:"li"},".yaml")," files, the new default order is ",(0,a.kt)("inlineCode",{parentName:"li"},".woodpecker/*.yml")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".woodpecker/*.yaml")," (without any prioritization) -> ",(0,a.kt)("inlineCode",{parentName:"li"},".woodpecker.yml")," ->  ",(0,a.kt)("inlineCode",{parentName:"li"},".woodpecker.yaml")),(0,a.kt)("li",{parentName:"ul"},"Dropped support for ",(0,a.kt)("a",s({parentName:"li"},{href:"https://coding.net/"}),"Coding"),", ",(0,a.kt)("a",s({parentName:"li"},{href:"https://gogs.io"}),"Gogs")," and Bitbucket Server (Stash)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/queue/resume")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/queue/pause")," endpoint methods were changed from ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},"rename ",(0,a.kt)("inlineCode",{parentName:"li"},"pipeline:")," key in your workflow config to ",(0,a.kt)("inlineCode",{parentName:"li"},"steps:")),(0,a.kt)("li",{parentName:"ul"},"If you want to migrate old logs to the new format, watch the error messages on start. If there are none we are good to go, else you have to plan a migration that can take hours. Set ",(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_MIGRATIONS_ALLOW_LONG")," to true and let it run."),(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"repo-id")," in favor of ",(0,a.kt)("inlineCode",{parentName:"li"},"owner/repo")," combination",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f The api endpoints ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/repos/{owner}/{repo}/...")," were replaced by new endpoints using the repos id ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/repos/{repo-id}")),(0,a.kt)("li",{parentName:"ul"},"To find the id of a repo use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/repos/lookup/{repo-full-name-with-slashes}")," endpoint."),(0,a.kt)("li",{parentName:"ul"},"The existing badge endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/badges/{owner}/{repo}")," will still work, but whenever possible try to use the new endpoint using the ",(0,a.kt)("inlineCode",{parentName:"li"},"repo-id"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/badges/{repo-id}"),"."),(0,a.kt)("li",{parentName:"ul"},"The UI urls for a repository changed from ",(0,a.kt)("inlineCode",{parentName:"li"},"/repos/{owner}/{repo}/...")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"/repos/{repo-id}/..."),". You will be redirected automatically when using the old url."),(0,a.kt)("li",{parentName:"ul"},"The woodpecker-go api-client is now using the ",(0,a.kt)("inlineCode",{parentName:"li"},"repo-id")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"owner/repo")," for all functions"))),(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"org-id")," in favour of ",(0,a.kt)("inlineCode",{parentName:"li"},"owner")," name",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f The api endpoints ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/orgs/{owner}/...")," were replaced by new endpoints using the orgs id ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/repos/{org-id}")),(0,a.kt)("li",{parentName:"ul"},"To find the id of orgs use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/orgs/lookup/{org_full_name}")," endpoint."),(0,a.kt)("li",{parentName:"ul"},"The UI urls for a organization changed from ",(0,a.kt)("inlineCode",{parentName:"li"},"/org/{owner}/...")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"/orgs/{org-id}/..."),". You will be redirected automatically when using the old url."),(0,a.kt)("li",{parentName:"ul"},"The woodpecker-go api-client is now using the ",(0,a.kt)("inlineCode",{parentName:"li"},"org-id")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"org name")," for all functions")))),(0,a.kt)("h2",s({},{id:"0150"}),"0.15.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default value for custom pipeline path is now empty / un-set which results in following resolution:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".woodpecker/*.yml")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},".drone.yml")),(0,a.kt)("p",{parentName:"li"},"Only projects created after updating will have an empty value by default. Existing projects will stick to the current pipeline path which is ",(0,a.kt)("inlineCode",{parentName:"p"},".drone.yml")," in most cases."),(0,a.kt)("p",{parentName:"li"},"Read more about it at the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/next/usage/project-settings#pipeline-path"}),"Project Settings"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"From version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.15.0")," ongoing there will be three types of docker images: ",(0,a.kt)("inlineCode",{parentName:"p"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," with an alpine variant for each type like ",(0,a.kt)("inlineCode",{parentName:"p"},"latest-alpine"),".\nIf you used ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," before to try pre-release features you should switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," after this release.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dropped support for ",(0,a.kt)("inlineCode",{parentName:"p"},"DRONE_*")," environment variables. The according ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_*")," variables must be used instead.\nAdditionally some alternative namings have been removed to simplify maintenance:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_AGENT_SECRET")," replaces ",(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_SECRET"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_SECRET"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_PASSWORD"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_PASSWORD")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_AGENT_SECRET"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_HOST")," replaces ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_HOST")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_SERVER_HOST"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_DATABASE_DRIVER")," replaces ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_DATABASE_DRIVER")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_DRIVER"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WOODPECKER_DATABASE_DATASOURCE")," replaces ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_DATABASE_DATASOURCE")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_CONFIG"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dropped support for ",(0,a.kt)("inlineCode",{parentName:"p"},"DRONE_*")," environment variables in pipeline steps. Pipeline meta-data can be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"CI_*")," variables."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CI_*")," prefix replaces ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CI")," value is now ",(0,a.kt)("inlineCode",{parentName:"li"},"woodpecker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DRONE=true")," has been removed"),(0,a.kt)("li",{parentName:"ul"},"Some variables got deprecated and will be removed in future versions. Please migrate to the new names. Same applies for ",(0,a.kt)("inlineCode",{parentName:"li"},"DRONE_")," of them.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CI_ARCH => use CI_SYSTEM_ARCH"),(0,a.kt)("li",{parentName:"ul"},"CI_COMMIT => CI_COMMIT_SHA"),(0,a.kt)("li",{parentName:"ul"},"CI_TAG => CI_COMMIT_TAG"),(0,a.kt)("li",{parentName:"ul"},"CI_PULL_REQUEST => CI_COMMIT_PULL_REQUEST"),(0,a.kt)("li",{parentName:"ul"},"CI_REMOTE_URL => use CI_REPO_REMOTE"),(0,a.kt)("li",{parentName:"ul"},"CI_REPO_BRANCH => use CI_REPO_DEFAULT_BRANCH"),(0,a.kt)("li",{parentName:"ul"},"CI_PARENT_BUILD_NUMBER => use CI_BUILD_PARENT"),(0,a.kt)("li",{parentName:"ul"},"CI_BUILD_TARGET => use CI_BUILD_DEPLOY_TARGET"),(0,a.kt)("li",{parentName:"ul"},"CI_DEPLOY_TO => use CI_BUILD_DEPLOY_TARGET"),(0,a.kt)("li",{parentName:"ul"},"CI_COMMIT_AUTHOR_NAME => use CI_COMMIT_AUTHOR"),(0,a.kt)("li",{parentName:"ul"},"CI_PREV_COMMIT_AUTHOR_NAME => use CI_PREV_COMMIT_AUTHOR"),(0,a.kt)("li",{parentName:"ul"},"CI_SYSTEM => use CI_SYSTEM_NAME"),(0,a.kt)("li",{parentName:"ul"},"CI_BRANCH => use CI_COMMIT_BRANCH"),(0,a.kt)("li",{parentName:"ul"},"CI_SOURCE_BRANCH => use CI_COMMIT_SOURCE_BRANCH"),(0,a.kt)("li",{parentName:"ul"},"CI_TARGET_BRANCH => use CI_COMMIT_TARGET_BRANCH")))),(0,a.kt)("p",{parentName:"li"},"For all available variables and their descriptions have a look at ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/next/usage/environment#built-in-environment-variables"}),"built-in-environment-variables"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Prometheus metrics have been changed from ",(0,a.kt)("inlineCode",{parentName:"p"},"drone_*")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"woodpecker_*"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Base path has moved from ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/drone")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/woodpecker"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default workspace base path has moved from ",(0,a.kt)("inlineCode",{parentName:"p"},"/drone")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/woodpecker"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default SQLite database location has changed:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/drone/drone.sqlite")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/woodpecker/woodpecker.sqlite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drone.sqlite")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"woodpecker.sqlite")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Plugin Settings moved into ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," section:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"})," steps:\n something:\n   image: my/plugin\n-  setting1: foo\n-  setting2: bar\n+  settings:\n+    setting1: foo\n+    setting2: bar\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DEBUG")," option for server and agent got removed in favor of ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_LOG_LEVEL=debug"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remove unused server flags which can safely be removed from your server config: ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_QUIC"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_SCOPE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_GIT_USERNAME"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_GIT_PASSWORD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_PRIVATE_MODE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITEA_GIT_USERNAME"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITEA_GIT_PASSWORD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITEA_PRIVATE_MODE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_GIT_USERNAME"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_GIT_PASSWORD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITLAB_PRIVATE_MODE"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dropped support for manually setting the agents platform with ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_PLATFORM"),". The platform is now automatically detected.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_STATUS_CONTEXT")," instead of the deprecated options ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITHUB_CONTEXT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GITEA_CONTEXT"),"."))),(0,a.kt)("h2",s({},{id:"0140"}),"0.14.0"),(0,a.kt)("p",null,"No breaking changes"))}E.isMDXComponent=!0}}]);