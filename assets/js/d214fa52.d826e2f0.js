/*! For license information please see d214fa52.d826e2f0.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7232],{43716:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(2488),t=o(37052);const r={toc_max_heading_level:2},s="GitLab",c={id:"administration/forges/gitlab",title:"GitLab",description:"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-2.3/30-administration/11-forges/40-gitlab.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/gitlab",permalink:"/docs/administration/forges/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/30-administration/11-forges/40-gitlab.md",tags:[],version:"2.3",sidebarPosition:40,frontMatter:{toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Gitea / Forgejo",permalink:"/docs/administration/forges/gitea"},next:{title:"Bitbucket",permalink:"/docs/administration/forges/bitbucket"}},l={},d=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITLAB</code>",id:"woodpecker_gitlab",level:3},{value:"<code>WOODPECKER_GITLAB_URL</code>",id:"woodpecker_gitlab_url",level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT</code>",id:"woodpecker_gitlab_client",level:3},{value:"<code>WOODPECKER_GITLAB_CLIENT_FILE</code>",id:"woodpecker_gitlab_client_file",level:3},{value:"<code>WOODPECKER_GITLAB_SECRET</code>",id:"woodpecker_gitlab_secret",level:3},{value:"<code>WOODPECKER_GITLAB_SECRET_FILE</code>",id:"woodpecker_gitlab_secret_file",level:3},{value:"<code>WOODPECKER_GITLAB_SKIP_VERIFY</code>",id:"woodpecker_gitlab_skip_verify",level:3}];function a(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"gitlab",children:"GitLab"}),"\n",(0,n.jsx)(i.p,{children:"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ini",children:"WOODPECKER_GITLAB=true\nWOODPECKER_GITLAB_URL=http://gitlab.mycompany.com\nWOODPECKER_GITLAB_CLIENT=95c0282573633eb25e82\nWOODPECKER_GITLAB_SECRET=30f5064039e6b359e075\n"})}),"\n",(0,n.jsx)(i.h2,{id:"registration",children:"Registration"}),"\n",(0,n.jsx)(i.p,{children:"You must register your application with GitLab in order to generate a Client and Secret. Navigate to your account settings and choose Applications from the menu, and click New Application."}),"\n",(0,n.jsxs)(i.p,{children:["Please use ",(0,n.jsx)(i.code,{children:"http://woodpecker.mycompany.com/authorize"})," as the Authorization callback URL. Grant ",(0,n.jsx)(i.code,{children:"api"})," scope to the application."]}),"\n",(0,n.jsxs)(i.p,{children:["If you run the Woodpecker CI server on a private IP (RFC1918) or use a non standard TLD (e.g. ",(0,n.jsx)(i.code,{children:".local"}),", ",(0,n.jsx)(i.code,{children:".intern"}),") with your GitLab instance, you might also need to allow local connections in GitLab, otherwise API requests will fail. In GitLab, navigate to the Admin dashboard, then go to ",(0,n.jsx)(i.code,{children:"Settings > Network > Outbound requests"})," and enable ",(0,n.jsx)(i.code,{children:"Allow requests to the local network from web hooks and services"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(i.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Default: ",(0,n.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Enables the GitLab driver."}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab_url",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_URL"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Default: ",(0,n.jsx)(i.code,{children:"https://gitlab.com"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Configures the GitLab server address."}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab_client",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_CLIENT"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Configures the GitLab OAuth client id. This is used to authorize access."}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab_client_file",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_CLIENT_FILE"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Read the value for ",(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_CLIENT"})," from the specified filepath"]}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab_secret",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_SECRET"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Configures the GitLab OAuth client secret. This is used to authorize access."}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab_secret_file",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_SECRET_FILE"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Read the value for ",(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_SECRET"})," from the specified filepath"]}),"\n",(0,n.jsx)(i.h3,{id:"woodpecker_gitlab_skip_verify",children:(0,n.jsx)(i.code,{children:"WOODPECKER_GITLAB_SKIP_VERIFY"})}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Default: ",(0,n.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Configure if SSL verification should be skipped."})]})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},38088:(e,i,o)=>{var n=o(96651),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,o){var n,r={},d=null,a=null;for(n in void 0!==o&&(d=""+o),void 0!==i.key&&(d=""+i.key),void 0!==i.ref&&(a=i.ref),i)s.call(i,n)&&!l.hasOwnProperty(n)&&(r[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===r[n]&&(r[n]=i[n]);return{$$typeof:t,type:e,key:d,ref:a,props:r,_owner:c.current}}i.Fragment=r,i.jsx=d,i.jsxs=d},2488:(e,i,o)=>{e.exports=o(38088)},37052:(e,i,o)=>{o.d(i,{I:()=>c,M:()=>s});var n=o(96651);const t={},r=n.createContext(t);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);