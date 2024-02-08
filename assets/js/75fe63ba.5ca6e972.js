/*! For license information please see 75fe63ba.5ca6e972.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6980],{62548:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(2488),n=t(37052);const r={},i="Volumes",c={id:"usage/volumes",title:"Volumes",description:"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers.",source:"@site/versioned_docs/version-2.3/20-usage/70-volumes.md",sourceDirName:"20-usage",slug:"/usage/volumes",permalink:"/docs/usage/volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/20-usage/70-volumes.md",tags:[],version:"2.3",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/usage/services"},next:{title:"Project settings",permalink:"/docs/usage/project-settings"}},a={},l=[];function u(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"volumes",children:"Volumes"}),"\n",(0,s.jsx)(o.p,{children:"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers."}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Volumes are only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,s.jsx)(o.a,{href:"/docs/usage/project-settings#trusted",children:"project settings"})," to enable trusted mode."]})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: docker\n     commands:\n       - docker build --rm -t octocat/hello-world .\n       - docker run --rm octocat/hello-world --test\n       - docker push octocat/hello-world\n       - docker rmi octocat/hello-world\n     volumes:\n+      - /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,s.jsx)(o.p,{children:"Please note that Woodpecker mounts volumes on the host machine. This means you must use absolute paths when you configure volumes. Attempting to use relative paths will result in an error."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-diff",children:"-volumes: [ ./certs:/etc/ssl/certs ]\n+volumes: [ /etc/ssl/certs:/etc/ssl/certs ]\n"})})]})}function d(e={}){const{wrapper:o}={...(0,n.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},38088:(e,o,t)=>{var s=t(96651),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,t){var s,r={},l=null,u=null;for(s in void 0!==t&&(l=""+t),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(u=o.ref),o)i.call(o,s)&&!a.hasOwnProperty(s)&&(r[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===r[s]&&(r[s]=o[s]);return{$$typeof:n,type:e,key:l,ref:u,props:r,_owner:c.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},2488:(e,o,t)=>{e.exports=t(38088)},37052:(e,o,t)=>{t.d(o,{I:()=>c,M:()=>i});var s=t(96651);const n={},r=s.createContext(n);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);