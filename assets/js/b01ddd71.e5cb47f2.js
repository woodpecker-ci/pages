"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[848],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||c;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8142:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=r(7462),n=r(3366),c=(r(7294),r(3905)),i=["components"],a={},s="SSL",p={unversionedId:"administration/ssl",id:"administration/ssl",isDocsHomePage:!1,title:"SSL",description:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with",source:"@site/docs/30-administration/60-ssl.md",sourceDirName:"30-administration",slug:"/administration/ssl",permalink:"/docs/administration/ssl",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/60-ssl.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/docs/administration/database"},next:{title:"Proxy",permalink:"/docs/administration/proxy"}},l=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",children:[{value:"Certificate Cache",id:"certificate-cache",children:[]},{value:"Certificate Updates",id:"certificate-updates",children:[]}]},{value:"SSL with own certificates",id:"ssl-with-own-certificates",children:[{value:"Certificate Chain",id:"certificate-chain",children:[]},{value:"Certificate Errors",id:"certificate-errors",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"ssl"},"SSL"),(0,c.kt)("p",null,"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."),(0,c.kt)("h2",{id:"lets-encrypt"},"Let's Encrypt"),(0,c.kt)("p",null,"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."),(0,c.kt)("p",null,"You can enable Let's Encrypt by making the following modifications to your server configuration:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    environment:\n      - [...]\n+     - WOODPECKER_LETS_ENCRYPT=true\n")),(0,c.kt)("p",null,"Note that Woodpecker uses the hostname from the ",(0,c.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST")," environment variable when requesting certificates. For example, if ",(0,c.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST=https://foo.com")," the certificate is requested for ",(0,c.kt)("inlineCode",{parentName:"p"},"foo.com"),"."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Once enabled you can visit your website at both the http and the https address")),(0,c.kt)("h3",{id:"certificate-cache"},"Certificate Cache"),(0,c.kt)("p",null,"Woodpecker writes the certificates to the below directory:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"/var/lib/drone/golang-autocert\n")),(0,c.kt)("h3",{id:"certificate-updates"},"Certificate Updates"),(0,c.kt)("p",null,"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."),(0,c.kt)("h2",{id:"ssl-with-own-certificates"},"SSL with own certificates"),(0,c.kt)("p",null,"Woodpecker supports ssl configuration by mounting certificates into your container."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.foo.com/server.crt:/etc/certs/woodpecker.foo.com/server.crt\n+     - /etc/certs/woodpecker.foo.com/server.key:/etc/certs/woodpecker.foo.com/server.key\n    environment:\n      - [...]\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.foo.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.foo.com/server.key\n")),(0,c.kt)("p",null,"Update your configuration to expose the following ports:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n")),(0,c.kt)("p",null,"Update your configuration to mount your certificate and key:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.foo.com/server.crt:/etc/certs/woodpecker.foo.com/server.crt\n+     - /etc/certs/woodpecker.foo.com/server.key:/etc/certs/woodpecker.foo.com/server.key\n")),(0,c.kt)("p",null,"Update your configuration to provide the paths of your certificate and key:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-diff"},"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n      - /etc/certs/woodpecker.foo.com/server.crt:/etc/certs/woodpecker.foo.com/server.crt\n      - /etc/certs/woodpecker.foo.com/server.key:/etc/certs/woodpecker.foo.com/server.key\n    environment:\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.foo.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.foo.com/server.key\n")),(0,c.kt)("h3",{id:"certificate-chain"},"Certificate Chain"),(0,c.kt)("p",null,"The most common problem encountered is providing a certificate file without the intermediate chain."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain.")),(0,c.kt)("h3",{id:"certificate-errors"},"Certificate Errors"),(0,c.kt)("p",null,"SSL support is provided using the ",(0,c.kt)("a",{parentName:"p",href:"https://golang.org/pkg/net/http/#ListenAndServeTLS"},"ListenAndServeTLS")," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."))}d.isMDXComponent=!0}}]);