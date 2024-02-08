/*! For license information please see 9575b163.d4d04824.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2428],{67644:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>t});var s=i(2488),r=i(37052);const d={},l="Migrations",o={id:"migrations",title:"Migrations",description:"Some versions need some changes to the server configuration or the pipeline configuration files.",source:"@site/versioned_docs/version-0.15/91-migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/0.15/migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/91-migrations.md",tags:[],version:"0.15",sidebarPosition:91,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Downloads",permalink:"/docs/0.15/downloads"},next:{title:"Awesome Woodpecker",permalink:"/docs/0.15/awesome"}},c={},t=[{value:"0.15.0",id:"0150",level:2},{value:"0.14.0",id:"0140",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"migrations",children:"Migrations"}),"\n",(0,s.jsx)(n.p,{children:"Some versions need some changes to the server configuration or the pipeline configuration files."}),"\n",(0,s.jsx)(n.h2,{id:"0150",children:"0.15.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Default value for custom pipeline path is now empty / un-set which results in following resolution:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".woodpecker/*.yml"})," -> ",(0,s.jsx)(n.code,{children:".woodpecker.yml"})," -> ",(0,s.jsx)(n.code,{children:".drone.yml"})]}),"\n",(0,s.jsxs)(n.p,{children:["Only projects created after updating will have an empty value by default. Existing projects will stick to the current pipeline path which is ",(0,s.jsx)(n.code,{children:".drone.yml"})," in most cases."]}),"\n",(0,s.jsxs)(n.p,{children:["Read more about it at the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/project-settings#pipeline-path",children:"Project Settings"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From version ",(0,s.jsx)(n.code,{children:"0.15.0"})," ongoing there will be three types of docker images: ",(0,s.jsx)(n.code,{children:"latest"}),", ",(0,s.jsx)(n.code,{children:"next"})," and ",(0,s.jsx)(n.code,{children:"x.x.x"})," with an alpine variant for each type like ",(0,s.jsx)(n.code,{children:"latest-alpine"}),".\nIf you used ",(0,s.jsx)(n.code,{children:"latest"})," before to try pre-release features you should switch to ",(0,s.jsx)(n.code,{children:"next"})," after this release."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dropped support for ",(0,s.jsx)(n.code,{children:"DRONE_*"})," environment variables. The according ",(0,s.jsx)(n.code,{children:"WOODPECKER_*"})," variables must be used instead.\nAdditionally some alternative namings have been removed to simplify maintenance:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})," replaces ",(0,s.jsx)(n.code,{children:"WOODPECKER_SECRET"}),", ",(0,s.jsx)(n.code,{children:"DRONE_SECRET"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_PASSWORD"}),", ",(0,s.jsx)(n.code,{children:"DRONE_PASSWORD"})," and ",(0,s.jsx)(n.code,{children:"DRONE_AGENT_SECRET"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WOODPECKER_HOST"})," replaces ",(0,s.jsx)(n.code,{children:"DRONE_HOST"})," and ",(0,s.jsx)(n.code,{children:"DRONE_SERVER_HOST"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WOODPECKER_DATABASE_DRIVER"})," replaces ",(0,s.jsx)(n.code,{children:"DRONE_DATABASE_DRIVER"})," and ",(0,s.jsx)(n.code,{children:"DATABASE_DRIVER"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WOODPECKER_DATABASE_DATASOURCE"})," replaces ",(0,s.jsx)(n.code,{children:"DRONE_DATABASE_DATASOURCE"})," and ",(0,s.jsx)(n.code,{children:"DATABASE_CONFIG"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dropped support for ",(0,s.jsx)(n.code,{children:"DRONE_*"})," environment variables in pipeline steps. Pipeline meta-data can be accessed with ",(0,s.jsx)(n.code,{children:"CI_*"})," variables."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CI_*"})," prefix replaces ",(0,s.jsx)(n.code,{children:"DRONE_*"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CI"})," value is now ",(0,s.jsx)(n.code,{children:"woodpecker"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DRONE=true"})," has been removed"]}),"\n",(0,s.jsxs)(n.li,{children:["Some variables got deprecated and will be removed in future versions. Please migrate to the new names. Same applies for ",(0,s.jsx)(n.code,{children:"DRONE_"})," of them.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CI_ARCH => use CI_SYSTEM_ARCH"}),"\n",(0,s.jsx)(n.li,{children:"CI_COMMIT => CI_COMMIT_SHA"}),"\n",(0,s.jsx)(n.li,{children:"CI_TAG => CI_COMMIT_TAG"}),"\n",(0,s.jsx)(n.li,{children:"CI_PULL_REQUEST => CI_COMMIT_PULL_REQUEST"}),"\n",(0,s.jsx)(n.li,{children:"CI_REMOTE_URL => use CI_REPO_REMOTE"}),"\n",(0,s.jsx)(n.li,{children:"CI_REPO_BRANCH => use CI_REPO_DEFAULT_BRANCH"}),"\n",(0,s.jsx)(n.li,{children:"CI_PARENT_BUILD_NUMBER => use CI_BUILD_PARENT"}),"\n",(0,s.jsx)(n.li,{children:"CI_BUILD_TARGET => use CI_BUILD_DEPLOY_TARGET"}),"\n",(0,s.jsx)(n.li,{children:"CI_DEPLOY_TO => use CI_BUILD_DEPLOY_TARGET"}),"\n",(0,s.jsx)(n.li,{children:"CI_COMMIT_AUTHOR_NAME => use CI_COMMIT_AUTHOR"}),"\n",(0,s.jsx)(n.li,{children:"CI_PREV_COMMIT_AUTHOR_NAME => use CI_PREV_COMMIT_AUTHOR"}),"\n",(0,s.jsx)(n.li,{children:"CI_SYSTEM => use CI_SYSTEM_NAME"}),"\n",(0,s.jsx)(n.li,{children:"CI_BRANCH => use CI_COMMIT_BRANCH"}),"\n",(0,s.jsx)(n.li,{children:"CI_SOURCE_BRANCH => use CI_COMMIT_SOURCE_BRANCH"}),"\n",(0,s.jsx)(n.li,{children:"CI_TARGET_BRANCH => use CI_COMMIT_TARGET_BRANCH"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For all available variables and their descriptions have a look at ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/environment#built-in-environment-variables",children:"built-in-environment-variables"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Prometheus metrics have been changed from ",(0,s.jsx)(n.code,{children:"drone_*"})," to ",(0,s.jsx)(n.code,{children:"woodpecker_*"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Base path has moved from ",(0,s.jsx)(n.code,{children:"/var/lib/drone"})," to ",(0,s.jsx)(n.code,{children:"/var/lib/woodpecker"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Default SQLite database location has changed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/var/lib/drone/drone.sqlite"})," -> ",(0,s.jsx)(n.code,{children:"/var/lib/woodpecker/woodpecker.sqlite"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"drone.sqlite"})," -> ",(0,s.jsx)(n.code,{children:"woodpecker.sqlite"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Plugin Settings moved into ",(0,s.jsx)(n.code,{children:"settings"})," section:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n something:\n   image: my/plugin\n-  setting1: foo\n-  setting2: bar\n+  settings:\n+    setting1: foo\n+    setting2: bar\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WOODPECKER_DEBUG"})," option for server and agent got removed in favor of ",(0,s.jsx)(n.code,{children:"WOODPECKER_LOG_LEVEL=debug"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remove unused server flags which can safely be removed from your server config: ",(0,s.jsx)(n.code,{children:"WOODPECKER_QUIC"}),",  ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITHUB_SCOPE"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITHUB_GIT_USERNAME"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITHUB_GIT_PASSWORD"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITHUB_PRIVATE_MODE"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITEA_GIT_USERNAME"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITEA_GIT_PASSWORD"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITEA_PRIVATE_MODE"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITLAB_GIT_USERNAME"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITLAB_GIT_PASSWORD"}),", ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITLAB_PRIVATE_MODE"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dropped support for manually setting the agents platform with ",(0,s.jsx)(n.code,{children:"WOODPECKER_PLATFORM"}),". The platform is now automatically detected."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"WOODPECKER_STATUS_CONTEXT"})," instead of the deprecated options ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITHUB_CONTEXT"})," and ",(0,s.jsx)(n.code,{children:"WOODPECKER_GITEA_CONTEXT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"0140",children:"0.14.0"}),"\n",(0,s.jsx)(n.p,{children:"No breaking changes"})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},38088:(e,n,i)=>{var s=i(96651),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,i){var s,d={},t=null,a=null;for(s in void 0!==i&&(t=""+i),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,s)&&!c.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:r,type:e,key:t,ref:a,props:d,_owner:o.current}}n.Fragment=d,n.jsx=t,n.jsxs=t},2488:(e,n,i)=>{e.exports=i(38088)},37052:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>l});var s=i(96651);const r={},d=s.createContext(r);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);