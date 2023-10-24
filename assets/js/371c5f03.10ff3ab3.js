"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3150],{17942:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(50959);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>h,metadata:()=>k,toc:()=>g});var a=t(17942),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>i(e,o(n)),m=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const h={},f="Local backend",k={unversionedId:"administration/backends/local",id:"administration/backends/local",title:"Local backend",description:"The local backend will execute the pipelines on the local system without any isolation of any kind.",source:"@site/docs/30-administration/22-backends/20-local.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/local",permalink:"/docs/next/administration/backends/local",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/22-backends/20-local.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker backend",permalink:"/docs/next/administration/backends/docker"},next:{title:"Kubernetes backend",permalink:"/docs/next/administration/backends/kubernetes"}},b={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"Running the agent",id:"running-the-agent",level:2},{value:"Further configuration",id:"further-configuration",level:2},{value:"Specify the shell to be used for a pipeline step",id:"specify-the-shell-to-be-used-for-a-pipeline-step",level:3},{value:"Plugins as Executable Binaries",id:"plugins-as-executable-binaries",level:3},{value:"Using labels to filter tasks",id:"using-labels-to-filter-tasks",level:3}],y={toc:g},v="wrapper";function w(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(v,d(u(u({},y),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"local-backend"}),"Local backend"),(0,a.kt)("admonition",u({},{type:"danger"}),(0,a.kt)("p",{parentName:"admonition"},"The local backend will execute the pipelines on the local system without any isolation of any kind.")),(0,a.kt)("admonition",u({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"This backend is still pretty new and can not be treated as stable. Its\nimplementation and configuration can change at any time.")),(0,a.kt)("p",null,"Since the code runs directly in the same context as the agent (same user, same\nfilesystem), a malicious pipeline could be used to access the agent\nconfiguration especially the ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," variable."),(0,a.kt)("p",null,"It is recommended to use this backend only for private setup where the code and\npipeline can be trusted. You shouldn't use it for a public facing CI where\nanyone can submit code or add new repositories. You shouldn't execute the agent\nas a privileged user (root)."),(0,a.kt)("p",null,"The local backend will use a random directory in $TMPDIR to store the cloned\ncode and execute commands."),(0,a.kt)("p",null,"In order to use this backend, you need to download (or build) the\n",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest"}),"binary")," of the\nagent, configure it and run it on the host machine."),(0,a.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,a.kt)("h3",u({},{id:"server"}),"Server"),(0,a.kt)("p",null,"Enable connection to the server from the outside of the docker environment by\nexposing the port 9000:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# docker-compose.yml for the server\nversion: '3'\n\nservices:\n  woodpecker-server:\n  [...]\n    ports:\n      - 9000:9000\n      [...]\n    environment:\n      - [...]\n")),(0,a.kt)("h3",u({},{id:"agent"}),"Agent"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file to store environmental variables for configuration.\nAt the minimum you need the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# .env for the agent\nWOODPECKER_AGENT_SECRET=replace_with_your_server_secret\nWOODPECKER_SERVER=replace_with_your_server_address:9000\n")),(0,a.kt)("h2",u({},{id:"running-the-agent"}),"Running the agent"),(0,a.kt)("p",null,"Start the agent from the directory with the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"woodpecker-agent")),(0,a.kt)("admonition",u({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," backend, the\n",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/woodpecker-ci/plugin-git"}),"plugin-git")," binary must be in\nyour ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," for the default clone step to work. If not, you can still write a\nmanual clone step.")),(0,a.kt)("h2",u({},{id:"further-configuration"}),"Further configuration"),(0,a.kt)("h3",u({},{id:"specify-the-shell-to-be-used-for-a-pipeline-step"}),"Specify the shell to be used for a pipeline step"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," entry is used to specify the shell, such as Bash or Fish, that is\nused to run the commands."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# .woodpecker.yml\n\nsteps:\n  build:\n    image: bash\n    commands:\n      [...]\n")),(0,a.kt)("h3",u({},{id:"plugins-as-executable-binaries"}),"Plugins as Executable Binaries"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"steps:\n  build:\n    image: /usr/bin/tree\n")),(0,a.kt)("p",null,"If no commands are provided, we treat them as plugins in the usual manner.\nIn the context of the local backend, plugins are simply executable binaries, which can be located using their name if they are listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),", or through an absolute path."),(0,a.kt)("h3",u({},{id:"using-labels-to-filter-tasks"}),"Using labels to filter tasks"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/administration/agent-config#woodpecker_filter_labels"}),"agent configuration\noptions")," and the\n",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/usage/workflow-syntax#labels"}),"pipeline syntax")," to only run certain\npipelines on certain agents. Example:"),(0,a.kt)("p",null,"Define a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," with value ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," for a particular agent:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# .env for the agent\n\nWOODPECKER_FILTER_LABELS=type=exec\n")),(0,a.kt)("p",null,"Then, use this ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," with value ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," in the pipeline definition, to\nonly run on this agent:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# .woodpecker.yml\n\nlabels:\n  type: exec\n\nsteps:\n  [...]\n")))}w.isMDXComponent=!0}}]);