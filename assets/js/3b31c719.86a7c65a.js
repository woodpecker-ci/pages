"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2048],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),k=o,f=u["".concat(l,".").concat(k)]||u[k]||p[k]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&s(e,n,t[n]);return e};const u={},k="Docker backend",f={unversionedId:"administration/backends/docker",id:"administration/backends/docker",title:"Docker backend",description:"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent.",source:"@site/docs/30-administration/22-backends/10-docker.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/docker",permalink:"/docs/next/administration/backends/docker",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/22-backends/10-docker.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"},next:{title:"Local backend",permalink:"/docs/next/administration/backends/local"}},m={},b=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_DOCKER_NETWORK</code>",id:"woodpecker_backend_docker_network",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_ENABLE_IPV6</code>",id:"woodpecker_backend_docker_enable_ipv6",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_VOLUMES</code>",id:"woodpecker_backend_docker_volumes",level:3},{value:"Docker credentials",id:"docker-credentials",level:2},{value:"Podman support",id:"podman-support",level:2}],O={toc:b};function h(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},O),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"docker-backend"}),"Docker backend"),(0,r.kt)("p",null,"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent."),(0,r.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,r.kt)("h3",p({},{id:"woodpecker_backend_docker_network"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_NETWORK")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Set to the name of an existing network which will be attached to all your pipeline containers (steps). Please be careful as this allows the containers of different pipelines to access each other!"),(0,r.kt)("h3",p({},{id:"woodpecker_backend_docker_enable_ipv6"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_ENABLE_IPV6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enable IPv6 for the networks used by pipeline containers (steps). Make sure you configured your docker daemon to support IPv6."),(0,r.kt)("h3",p({},{id:"woodpecker_backend_docker_volumes"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_VOLUMES")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"List of default volumes separated by comma to be mounted to all pipeline containers (steps). For example to use custom CA\ncertificates installed on host and host timezone use ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/ssl/certs:/etc/ssl/certs:ro,/etc/timezone:/etc/timezone"),"."),(0,r.kt)("h2",p({},{id:"docker-credentials"}),"Docker credentials"),(0,r.kt)("p",null,"Woodpecker supports ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/docker/docker-credential-helpers"}),"Docker credentials")," to securely store registry credentials. Install your corresponding credential helper and configure it in your Docker config file passed via ",(0,r.kt)("a",p({parentName:"p"},{href:"/docs/next/administration/server-config#woodpecker_docker_config"}),(0,r.kt)("inlineCode",{parentName:"a"},"WOODPECKER_DOCKER_CONFIG")),"."),(0,r.kt)("p",null,"To add your credential helper to the Woodpecker server container you could use the following code to build a custom image:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-dockerfile"}),"FROM woodpeckerci/woodpecker-server:latest-alpine\n\nRUN apk add -U --no-cache docker-credential-ecr-login\n")),(0,r.kt)("h2",p({},{id:"podman-support"}),"Podman support"),(0,r.kt)("p",null,"While the agent was developed with Docker/Moby, Podman can also be used by setting the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_SOCK")," to point to the podman socket. In order to work without workarounds, Podman 4.0 (or above) is required."))}h.isMDXComponent=!0}}]);