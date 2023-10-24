"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6230],{17942:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(50959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>g,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var n=r(17942),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const h={},k="Overview",f={unversionedId:"administration/deployment/overview",id:"administration/deployment/overview",title:"Overview",description:"A Woodpecker deployment consists of two parts:",source:"@site/docs/30-administration/00-deployment/00-overview.md",sourceDirName:"30-administration/00-deployment",slug:"/administration/deployment/overview",permalink:"/docs/next/administration/deployment/overview",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/00-deployment/00-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/docs/next/usage/advanced-usage"},next:{title:"docker-compose",permalink:"/docs/next/administration/deployment/docker-compose"}},y={},v=[{value:"Which version of Woodpecker should I use?",id:"which-version-of-woodpecker-should-i-use",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Database",id:"database",level:2},{value:"SSL",id:"ssl",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Behind a proxy",id:"behind-a-proxy",level:2},{value:"Third-party installation methods",id:"third-party-installation-methods",level:2}],b={toc:v},w="wrapper";function g(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,u(c(c({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"A Woodpecker deployment consists of two parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A server which is the heart of Woodpecker and ships the web interface."),(0,n.kt)("li",{parentName:"ul"},"Next to one server you can deploy any number of agents which will run the pipelines.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Each agent is able to process one pipeline step by default."),(0,n.kt)("p",{parentName:"blockquote"},"If you have 4 agents installed and connected to the Woodpecker server, your system will process 4 workflows in parallel."),(0,n.kt)("p",{parentName:"blockquote"},"You can add more agents to increase the number of parallel workflows or set the agent's ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_MAX_WORKFLOWS=1")," environment variable to increase the number of parallel workflows for that agent.")),(0,n.kt)("h2",c({},{id:"which-version-of-woodpecker-should-i-use"}),"Which version of Woodpecker should I use?"),(0,n.kt)("p",null,"Woodpecker is having two different kinds of releases: ",(0,n.kt)("strong",{parentName:"p"},"stable")," and ",(0,n.kt)("strong",{parentName:"p"},"next"),"."),(0,n.kt)("p",null,"To find out more about the differences between the two releases, please read the ",(0,n.kt)("a",c({parentName:"p"},{href:"/faq#which-version-of-woodpecker-should-i-use"}),"FAQ"),"."),(0,n.kt)("h2",c({},{id:"hardware-requirements"}),"Hardware Requirements"),(0,n.kt)("p",null,"Below are minimal resources requirements for Woodpecker components itself:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Component"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Memory"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"CPU"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Server"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"200 MB"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Agent"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"32 MB"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"1")))),(0,n.kt)("p",null,"Note, that those values do not include the operating system or workload (pipelines execution) resources consumption."),(0,n.kt)("p",null,"In addition you need at least some kind of database which requires additional resources depending on the selected database system."),(0,n.kt)("h2",c({},{id:"installation"}),"Installation"),(0,n.kt)("p",null,"You can install Woodpecker on multiple ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/administration/deployment/docker-compose"}),"docker-compose")," with the official ",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/administration/deployment/docker-compose#docker-images"}),"container images")),(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/administration/deployment/kubernetes"}),"Kubernetes")," via the Woodpecker Helm chart"),(0,n.kt)("li",{parentName:"ul"},"Using binaries, DEBs or RPMs you can download from ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest"}),"latest release"))),(0,n.kt)("h2",c({},{id:"authentication"}),"Authentication"),(0,n.kt)("p",null,"Authentication is done using OAuth and is delegated to your forge which is configured using environment variables."),(0,n.kt)("p",null,"See the complete reference for all supported forges ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/administration/forges/overview"}),"here"),"."),(0,n.kt)("h2",c({},{id:"database"}),"Database"),(0,n.kt)("p",null,"By default Woodpecker uses a SQLite database which requires zero installation or configuration. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/administration/database"}),"database settings")," page to further configure it or use MySQL or Postgres."),(0,n.kt)("h2",c({},{id:"ssl"}),"SSL"),(0,n.kt)("p",null,"Woodpecker supports SSL configuration by using Let's encrypt or by using own certificates. See the ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/administration/ssl"}),"SSL guide"),". You can also put it behind a ",(0,n.kt)("a",c({parentName:"p"},{href:"#behind-a-proxy"}),"reverse proxy")),(0,n.kt)("h2",c({},{id:"metrics"}),"Metrics"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/administration/prometheus"}),"Prometheus endpoint")," is exposed."),(0,n.kt)("h2",c({},{id:"behind-a-proxy"}),"Behind a proxy"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/administration/proxy"}),"proxy guide")," if you want to see a setup behind Apache, Nginx, Caddy or ngrok."),(0,n.kt)("p",null,"In the case you need to use Woodpecker with a URL path prefix (like: ",(0,n.kt)("a",c({parentName:"p"},{href:"https://example.org/woodpecker/"}),"https://example.org/woodpecker/"),"), you can use the option ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/next/administration/server-config#woodpecker_root_path"}),(0,n.kt)("inlineCode",{parentName:"a"},"WOODPECKER_ROOT_PATH")),"."),(0,n.kt)("h2",c({},{id:"third-party-installation-methods"}),"Third-party installation methods"),(0,n.kt)("admonition",c({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"These installation methods are not officially supported. If you experience issues with them, please open issues in the specific repositories.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",c({parentName:"li"},{href:"/docs/next/administration/deployment/nixos"}),"NixOS")," via the ",(0,n.kt)("a",c({parentName:"li"},{href:"https://search.nixos.org/options?channel=unstable&size=200&sort=relevance&query=woodpecker"}),"NixOS module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://apps.yunohost.org/app/woodpecker"}),"Using YunoHost")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.cloudron.io/store/org.woodpecker_ci.cloudronapp.html"}),"On Cloudron"))))}g.isMDXComponent=!0}}]);