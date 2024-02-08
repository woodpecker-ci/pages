/*! For license information please see 3008018a.1d78853b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[852],{77764:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(2488),o=t(37052);const i={},c="SSL",s={id:"administration/ssl",title:"SSL",description:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with",source:"@site/versioned_docs/version-2.1/30-administration/60-ssl.md",sourceDirName:"30-administration",slug:"/administration/ssl",permalink:"/docs/2.1/administration/ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/30-administration/60-ssl.md",tags:[],version:"2.1",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secrets encryption",permalink:"/docs/2.1/administration/encryption"},next:{title:"Proxy",permalink:"/docs/2.1/administration/proxy"}},a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"ssl",children:"SSL"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,n.jsx)(r.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,n.jsx)(r.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yml"',children:"version: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    environment:\n      - [...]\n+     - WOODPECKER_LETS_ENCRYPT=true\n+     - WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Note that Woodpecker uses the hostname from the ",(0,n.jsx)(r.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,n.jsx)(r.code,{children:"WOODPECKER_HOST=https://example.com"})," is set the certificate is requested for ",(0,n.jsx)(r.code,{children:"example.com"}),". To receive emails before certificates expire Let's Encrypt requires an email address. You can set it with ",(0,n.jsx)(r.code,{children:"WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The SSL certificates are stored in ",(0,n.jsx)(r.code,{children:"$HOME/.local/share/certmagic"})," for binary versions of Woodpecker and in ",(0,n.jsx)(r.code,{children:"/var/lib/woodpecker"})," for the Container versions of it. You can set a custom path by setting ",(0,n.jsx)(r.code,{children:"XDG_DATA_HOME"})," if required."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Once enabled you can visit the Woodpecker UI with http and the HTTPS address. HTTP will be redirected to HTTPS."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,n.jsxs)(r.p,{children:["Woodpecker writes the certificates to ",(0,n.jsx)(r.code,{children:"/var/lib/woodpecker/certmagic/"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,n.jsx)(r.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports SSL configuration by mounting certificates into your container."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yml"',children:"version: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n      - [...]\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yml"',children:"version: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yml"',children:"version: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"version: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,n.jsx)(r.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,n.jsxs)(r.p,{children:["SSL support is provided using the ",(0,n.jsx)(r.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]})]})}function p(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},38088:(e,r,t)=>{var n=t(96651),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:s.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},2488:(e,r,t)=>{e.exports=t(38088)},37052:(e,r,t)=>{t.d(r,{I:()=>s,M:()=>c});var n=t(96651);const o={},i=n.createContext(o);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);