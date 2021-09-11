"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[87],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},p="Example plugin",u={unversionedId:"usage/plugins/sample-plugin",id:"usage/plugins/sample-plugin",isDocsHomePage:!1,title:"Example plugin",description:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.",source:"@site/docs/20-usage/51-plugins/20-sample-plugin.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/sample-plugin",permalink:"/docs/usage/plugins/sample-plugin",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/51-plugins/20-sample-plugin.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/usage/plugins/plugins"},next:{title:"Services",permalink:"/docs/usage/services"}},s=[{value:"What end users will see",id:"what-end-users-will-see",children:[]},{value:"Write the logic",id:"write-the-logic",children:[]},{value:"Package it",id:"package-it",children:[]}],c={toc:s};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-plugin"},"Example plugin"),(0,o.kt)("p",null,"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline."),(0,o.kt)("h2",{id:"what-end-users-will-see"},"What end users will see"),(0,o.kt)("p",null,"The below example demonstrates how we might configure a webhook plugin in the Yaml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  webhook:\n    image: foo/webhook\n    url: http://foo.com\n    method: post\n    body: |\n      hello world\n")),(0,o.kt)("h2",{id:"write-the-logic"},"Write the logic"),(0,o.kt)("p",null,"Create a simple shell script that invokes curl using the Yaml configuration parameters, which are passed to the script as environment variables in uppercase and prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"PLUGIN_"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n\ncurl \\\n  -X ${PLUGIN_METHOD} \\\n  -d ${PLUGIN_BODY} \\\n  ${PLUGIN_URL}\n")),(0,o.kt)("h2",{id:"package-it"},"Package it"),(0,o.kt)("p",null,"Create a Dockerfile that adds your shell script to the image, and configures the image to execute your shell script as the main entrypoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM alpine\nADD script.sh /bin/\nRUN chmod +x /bin/script.sh\nRUN apk -Uuv add curl ca-certificates\nENTRYPOINT /bin/script.sh\n")),(0,o.kt)("p",null,"Build and publish your plugin to the Docker registry. Once published your plugin can be shared with the broader Woodpecker community."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nohighlight"},"docker build -t foo/webhook .\ndocker push foo/webhook\n")),(0,o.kt)("p",null,"Execute your plugin locally from the command line to verify it is working:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nohighlight"},'docker run --rm \\\n  -e PLUGIN_METHOD=post \\\n  -e PLUGIN_URL=http://foo.com \\\n  -e PLUGIN_BODY="hello world" \\\n  foo/webhook\n')))}g.isMDXComponent=!0}}]);