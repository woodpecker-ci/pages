/*! For license information please see 7aecf4d4.3d95bd1b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6865],{95123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(13274),o=n(74169);const s={},r="Project settings",l={id:"usage/project-settings",title:"Project settings",description:"As the owner of a project in Woodpecker you can change project related settings via the web interface.",source:"@site/docs/20-usage/71-project-settings.md",sourceDirName:"20-usage",slug:"/usage/project-settings",permalink:"/docs/next/usage/project-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/71-project-settings.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/next/usage/volumes"},next:{title:"Status Badges",permalink:"/docs/next/usage/badges"}},c={},a=[{value:"Pipeline path",id:"pipeline-path",level:2},{value:"Repository hooks",id:"repository-hooks",level:2},{value:"Allow pull requests",id:"allow-pull-requests",level:2},{value:"Protected",id:"protected",level:2},{value:"Trusted",id:"trusted",level:2},{value:"Only inject netrc credentials into trusted containers",id:"only-inject-netrc-credentials-into-trusted-containers",level:2},{value:"Project visibility",id:"project-visibility",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Cancel previous pipelines",id:"cancel-previous-pipelines",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"project-settings",children:"Project settings"}),"\n",(0,i.jsx)(t.p,{children:"As the owner of a project in Woodpecker you can change project related settings via the web interface."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"project settings",src:n(8792).A+"",width:"1632",height:"1718"})}),"\n",(0,i.jsx)(t.h2,{id:"pipeline-path",children:"Pipeline path"}),"\n",(0,i.jsxs)(t.p,{children:["The path to the pipeline config file or folder. By default it is left empty which will use the following configuration resolution ",(0,i.jsx)(t.code,{children:".woodpecker/*.{yaml,yml}"})," -> ",(0,i.jsx)(t.code,{children:".woodpecker.yaml"})," -> ",(0,i.jsx)(t.code,{children:".woodpecker.yml"}),". If you set a custom path Woodpecker tries to load your configuration or fails if no configuration could be found at the specified location. To use a ",(0,i.jsx)(t.a,{href:"/docs/next/usage/workflows",children:"multiple workflows"})," with a custom path you have to change it to a folder path ending with a ",(0,i.jsx)(t.code,{children:"/"})," like ",(0,i.jsx)(t.code,{children:".woodpecker/"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"repository-hooks",children:"Repository hooks"}),"\n",(0,i.jsx)(t.p,{children:"Your Version-Control-System will notify Woodpecker about events via webhooks. If you want your pipeline to only run on specific webhooks, you can check them with this setting."}),"\n",(0,i.jsx)(t.h2,{id:"allow-pull-requests",children:"Allow pull requests"}),"\n",(0,i.jsx)(t.p,{children:"Enables handling webhook's pull request event. If disabled, then pipeline won't run for pull requests."}),"\n",(0,i.jsx)(t.h2,{id:"protected",children:"Protected"}),"\n",(0,i.jsx)(t.p,{children:"Every pipeline initiated by an webhook event needs to be approved by a project members with push permissions before being executed.\nThe protected option can be used as an additional review process before running potentially harmful pipelines. Especially if pipelines can be executed by third-parties through pull-requests."}),"\n",(0,i.jsx)(t.h2,{id:"trusted",children:"Trusted"}),"\n",(0,i.jsx)(t.p,{children:"If you set your project to trusted, a pipeline step and by this the underlying containers gets access to escalated capabilities like mounting volumes."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Only server admins can set this option. If you are not a server admin this option won't be shown in your project settings."})}),"\n",(0,i.jsx)(t.h2,{id:"only-inject-netrc-credentials-into-trusted-containers",children:"Only inject netrc credentials into trusted containers"}),"\n",(0,i.jsxs)(t.p,{children:["Cloning pipeline step may need git credentials. They are injected via netrc. By default, they're only injected if this option is enabled, the repo is trusted (",(0,i.jsx)(t.a,{href:"#trusted",children:"see above"}),") or the image is a trusted clone image. If you uncheck the option, git credentials will be injected into any container in clone step."]}),"\n",(0,i.jsx)(t.h2,{id:"project-visibility",children:"Project visibility"}),"\n",(0,i.jsx)(t.p,{children:"You can change the visibility of your project by this setting. If a user has access to a project they can see all builds and their logs and artifacts. Settings, Secrets and Registries can only be accessed by owners."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Public"})," Every user can see your project without being logged in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Internal"})," Only authenticated users of the Woodpecker instance can see this project."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Private"})," Only you and other owners of the repository can see this project."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,i.jsx)(t.p,{children:"After this timeout a pipeline has to finish or will be treated as timed out."}),"\n",(0,i.jsx)(t.h2,{id:"cancel-previous-pipelines",children:"Cancel previous pipelines"}),"\n",(0,i.jsx)(t.p,{children:"By enabling this option for a pipeline event previous pipelines of the same event and context will be canceled before starting the newly triggered one."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},78034:(e,t,n)=>{var i=n(79474),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var i,s={},a=null,d=null;for(i in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:a,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},13274:(e,t,n)=>{e.exports=n(78034)},8792:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/project-settings-688fc95b8efd14180831659798d43258.png"},74169:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(79474);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);