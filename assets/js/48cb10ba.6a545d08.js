"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8895],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=i,f=g["".concat(u,".").concat(d)]||g[d]||c[d]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4328:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],l={},u="Plugins",p={unversionedId:"usage/plugins/plugins",id:"usage/plugins/plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.",source:"@site/docs/20-usage/51-plugins/10-plugins.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/plugins",permalink:"/docs/usage/plugins/plugins",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/51-plugins/10-plugins.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/usage/environment"},next:{title:"Example plugin",permalink:"/docs/usage/plugins/sample-plugin"}},s=[{value:"Plugin Isolation",id:"plugin-isolation",children:[],level:2},{value:"Creating a plugin",id:"creating-a-plugin",children:[],level:2}],c={toc:s};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."),(0,a.kt)("p",null,"They are automatically pulled from ",(0,a.kt)("a",{parentName:"p",href:"http://plugins.drone.io"},"plugins.drone.io"),"."),(0,a.kt)("p",null,"Example pipeline using the Docker and Slack plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  publish:\n    image: plugins/docker\n    repo: foo/bar\n    tags: latest\n\n  notify:\n    image: plugins/slack\n    channel: dev\n")),(0,a.kt)("h2",{id:"plugin-isolation"},"Plugin Isolation"),(0,a.kt)("p",null,"Plugins are just pipeline steps. They share the build workspace, mounted as a volume, and therefore have access to your source tree."),(0,a.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"/docs/usage/plugins/sample-plugin"},"detailed plugin example"),"."))}g.isMDXComponent=!0}}]);