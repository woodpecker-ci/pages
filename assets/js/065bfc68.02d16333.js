"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[158],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,a(a({ref:r},p),{},{components:n})):t.createElement(f,a({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5599:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c="Server configuration",l={unversionedId:"administration/server-config",id:"administration/server-config",isDocsHomePage:!1,title:"Server configuration",description:"User registration",source:"@site/docs/30-administration/10-server-config.md",sourceDirName:"30-administration",slug:"/administration/server-config",permalink:"/docs/administration/server-config",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/10-server-config.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/administration/setup"},next:{title:"Agent configuration",permalink:"/docs/administration/agent-config"}},p=[{value:"User registration",id:"user-registration",children:[]},{value:"Administrators",id:"administrators",children:[]},{value:"Filtering repositories",id:"filtering-repositories",children:[]},{value:"Global registry setting",id:"global-registry-setting",children:[]}],u={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-configuration"},"Server configuration"),(0,i.kt)("h2",{id:"user-registration"},"User registration"),(0,i.kt)("p",null,"Registration is closed by default. While disabled an administrator needs to add new users manually (exp. ",(0,i.kt)("inlineCode",{parentName:"p"},"woodpecker-cli user add"),")."),(0,i.kt)("p",null,"If registration is open every user with an account at the configured ",(0,i.kt)("a",{parentName:"p",href:"docs/administration/vcs/overview"},"SCM")," can login to Woodpecker.\nThis example enables open registration for users that are members of approved organizations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_OPEN=true\n+     - WOODPECKER_ORGS=dolores,dogpatch\n\n")),(0,i.kt)("h2",{id:"administrators"},"Administrators"),(0,i.kt)("p",null,"Administrators should also be enumerated in your configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_ADMIN=johnsmith,janedoe\n")),(0,i.kt)("h2",{id:"filtering-repositories"},"Filtering repositories"),(0,i.kt)("p",null,"Woodpecker operates with the user's OAuth permission. Due to the coarse permission handling of GitHub, you may end up syncing more repos into Woodpecker than preferred."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"WOODPECKER_REPO_OWNERS")," variable to filter which GitHub user's repos should be synced only. You typically want to put here your company's GitHub name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_REPO_OWNERS=mycompany,mycompanyossgithubuser\n")),(0,i.kt)("h2",{id:"global-registry-setting"},"Global registry setting"),(0,i.kt)("p",null,"If you want to make available a specific private registry to all pipelines, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"WOODPECKER_DOCKER_CONFIG")," server configuration.\nPoint it to your server's docker config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_DOCKER_CONFIG=/home/user/.docker/config.json\n")))}d.isMDXComponent=!0}}]);