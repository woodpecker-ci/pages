"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["4402"],{2954:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"administration/ssl","title":"SSL","description":"Woodpecker supports two ways of enabling SSL communication. You can either use Let\'s Encrypt to get automated SSL support with","source":"@site/versioned_docs/version-2.6/30-administration/60-ssl.md","sourceDirName":"30-administration","slug":"/administration/ssl","permalink":"/docs/2.6/administration/ssl","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.6/30-administration/60-ssl.md","tags":[],"version":"2.6","sidebarPosition":60,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Databases","permalink":"/docs/2.6/administration/database"},"next":{"title":"Proxy","permalink":"/docs/2.6/administration/proxy"}}'),n=r("96773"),o=r("24027");let c={},s="SSL",a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3},{value:"Running in containers",id:"running-in-containers",level:3}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"ssl",children:"SSL"})}),"\n",(0,n.jsx)(t.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,n.jsx)(t.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,n.jsx)(t.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,n.jsx)(t.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ini",children:"WOODPECKER_LETS_ENCRYPT=true\nWOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that Woodpecker uses the hostname from the ",(0,n.jsx)(t.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,n.jsx)(t.code,{children:"WOODPECKER_HOST=https://example.com"})," is set the certificate is requested for ",(0,n.jsx)(t.code,{children:"example.com"}),". To receive emails before certificates expire Let's Encrypt requires an email address. You can set it with ",(0,n.jsx)(t.code,{children:"WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The SSL certificates are stored in ",(0,n.jsx)(t.code,{children:"$HOME/.local/share/certmagic"})," for binary versions of Woodpecker and in ",(0,n.jsx)(t.code,{children:"/var/lib/woodpecker"})," for the Container versions of it. You can set a custom path by setting ",(0,n.jsx)(t.code,{children:"XDG_DATA_HOME"})," if required."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Once enabled you can visit the Woodpecker UI with http and the HTTPS address. HTTP will be redirected to HTTPS."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,n.jsxs)(t.p,{children:["Woodpecker writes the certificates to ",(0,n.jsx)(t.code,{children:"/var/lib/woodpecker/certmagic/"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,n.jsx)(t.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,n.jsx)(t.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,n.jsx)(t.p,{children:"Woodpecker supports SSL configuration by mounting certificates into your container."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ini",children:"WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\nWOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(t.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,n.jsx)(t.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,n.jsxs)(t.p,{children:["SSL support is provided using the ",(0,n.jsx)(t.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]}),"\n",(0,n.jsx)(t.h3,{id:"running-in-containers",children:"Running in containers"}),"\n",(0,n.jsx)(t.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     ports:\n+      - 80:80\n+      - 443:443\n       - 9000:9000\n"})}),"\n",(0,n.jsx)(t.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     volumes:\n+      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(t.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n+      - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+      - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},24027:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return c}});var i=r(41699);let n={},o=i.createContext(n);function c(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);