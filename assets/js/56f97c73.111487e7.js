/*! For license information please see 56f97c73.111487e7.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9652],{79203:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=t(11527),o=t(76225);const c={},i="SSL",s={id:"administration/ssl",title:"SSL",description:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with",source:"@site/versioned_docs/version-0.15/30-administration/60-ssl.md",sourceDirName:"30-administration",slug:"/administration/ssl",permalink:"/docs/0.15/administration/ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/30-administration/60-ssl.md",tags:[],version:"0.15",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/docs/0.15/administration/database"},next:{title:"Proxy",permalink:"/docs/0.15/administration/proxy"}},a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"ssl",children:"SSL"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,n.jsx)(r.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,n.jsx)(r.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    environment:\n      - [...]\n+     - WOODPECKER_LETS_ENCRYPT=true\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Note that Woodpecker uses the hostname from the ",(0,n.jsx)(r.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,n.jsx)(r.code,{children:"WOODPECKER_HOST=https://example.com"})," the certificate is requested for ",(0,n.jsx)(r.code,{children:"example.com"}),"."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Once enabled you can visit your website at both the http and the https address"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker writes the certificates to the below directory:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"/var/lib/woodpecker/golang-autocert\n"})}),"\n",(0,n.jsx)(r.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,n.jsx)(r.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports ssl configuration by mounting certificates into your container."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n      - [...]\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,n.jsx)(r.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,n.jsxs)(r.p,{children:["SSL support is provided using the ",(0,n.jsx)(r.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3354:(e,r,t)=>{var n=t(50959),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,c={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:l,props:c,_owner:s.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},11527:(e,r,t)=>{e.exports=t(3354)},76225:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var n=t(50959);const o={},c=n.createContext(o);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);