"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[669],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={},c="SSH backend",d={unversionedId:"administration/backends/ssh",id:"administration/backends/ssh",title:"SSH backend",description:"The SSH backend will execute the pipelines using SSH on a remote system without any isolation of any kind.",source:"@site/docs/30-administration/22-backends/30-ssh.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/ssh",permalink:"/docs/next/administration/backends/ssh",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/22-backends/30-ssh.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local backend",permalink:"/docs/next/administration/backends/local"},next:{title:"Databases",permalink:"/docs/next/administration/database"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_SSH_ADDRESS</code>",id:"woodpecker_backend_ssh_address",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_USER</code>",id:"woodpecker_backend_ssh_user",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_KEY</code>",id:"woodpecker_backend_ssh_key",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_KEY_PASSWORD</code>",id:"woodpecker_backend_ssh_key_password",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_PASSWORD</code>",id:"woodpecker_backend_ssh_password",level:3}],u={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-backend"},"SSH backend"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The SSH backend will execute the pipelines using SSH on a remote system without any isolation of any kind.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This backend is still pretty new and can not be treated as stable. Its implementation and configuration can change at any time.")),(0,a.kt)("p",null,"Since the code run directly on the SSH machine, a malicious pipeline could access and edit files the SSH user has access to and execute every command the remote user is allowed to use. Always restrict the user as far as possible!"),(0,a.kt)("p",null,"It is recommended to use this backend only for private setups where the code and pipelines can be trusted. You shouldn't use it for a public facing CI where anyone can submit code or add new repositories."),(0,a.kt)("p",null,"The backend will use a random directory in $TMPDIR to store the clone code and execute commands."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"woodpecker_backend_ssh_address"},(0,a.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_ADDRESS")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,a.kt)("p",null,"The SSH host to run steps with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,a.kt)("h3",{id:"woodpecker_backend_ssh_user"},(0,a.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_USER")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,a.kt)("p",null,"The SSH user to run steps with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,a.kt)("h3",{id:"woodpecker_backend_ssh_key"},(0,a.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_KEY")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,a.kt)("p",null,"Path to the private SSH key to run steps with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,a.kt)("h3",{id:"woodpecker_backend_ssh_key_password"},(0,a.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_KEY_PASSWORD")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,a.kt)("p",null,"The password for the private key to run steps with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," backend."),(0,a.kt)("h3",{id:"woodpecker_backend_ssh_password"},(0,a.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_PASSWORD")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default empty")),(0,a.kt)("p",null,"The SSH password to run steps with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," backend."))}k.isMDXComponent=!0}}]);