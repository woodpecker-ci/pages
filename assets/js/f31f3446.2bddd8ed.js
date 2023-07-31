"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2513],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var o=r(49613),n=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e};const m={},d="Volumes",f={unversionedId:"usage/volumes",id:"usage/volumes",title:"Volumes",description:"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers.",source:"@site/docs/20-usage/70-volumes.md",sourceDirName:"20-usage",slug:"/usage/volumes",permalink:"/docs/next/usage/volumes",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/70-volumes.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/next/usage/services"},next:{title:"Project settings",permalink:"/docs/next/usage/project-settings"}},v={},y=[],b={toc:y};function g(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=p(p({},b),u),a(t,s({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h1",p({},{id:"volumes"}),"Volumes"),(0,o.kt)("p",null,"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers."),(0,o.kt)("admonition",p({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"Volumes are only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/next/usage/project-settings#trusted"}),"project settings")," to enable trusted mode.")),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"steps:\n  build:\n    image: docker\n    commands:\n      - docker build --rm -t octocat/hello-world .\n      - docker run --rm octocat/hello-world --test\n      - docker push octocat/hello-world\n      - docker rmi octocat/hello-world\n    volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n")),(0,o.kt)("p",null,"Please note that Woodpecker mounts volumes on the host machine. This means you must use absolute paths when you configure volumes. Attempting to use relative paths will result in an error."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"- volumes: [ ./certs:/etc/ssl/certs ]\n+ volumes: [ /etc/ssl/certs:/etc/ssl/certs ]\n")))}g.isMDXComponent=!0}}]);