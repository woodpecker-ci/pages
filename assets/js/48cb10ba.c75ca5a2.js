"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[895],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,f=g["".concat(l,".").concat(d)]||g[d]||c[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4328:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],u={},l="Plugins",s={unversionedId:"usage/plugins/plugins",id:"usage/plugins/plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins are Docker containers that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.",source:"@site/docs/20-usage/51-plugins/10-plugins.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/plugins",permalink:"/docs/usage/plugins/plugins",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/51-plugins/10-plugins.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/usage/environment"},next:{title:"Example plugin",permalink:"/docs/usage/plugins/sample-plugin"}},p=[{value:"Plugin Isolation",id:"plugin-isolation",children:[]},{value:"Creating a plugin",id:"creating-a-plugin",children:[]}],c={toc:p};function g(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Plugins are Docker containers that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."),(0,o.kt)("p",null,"Example pipeline using the Docker and Slack plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  publish:\n    image: plugins/docker\n    repo: foo/bar\n    tags: latest\n\n  notify:\n    image: plugins/slack\n    channel: dev\n")),(0,o.kt)("h2",{id:"plugin-isolation"},"Plugin Isolation"),(0,o.kt)("p",null,"Plugins are executed in Docker containers and are isolated from the other steps in your build pipeline. Plugins do share the build workspace, mounted as a volume, and therefore have access to your source tree."),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/docs/usage/plugins/sample-plugin"},"detailed plugin example"),"."))}g.isMDXComponent=!0}}]);