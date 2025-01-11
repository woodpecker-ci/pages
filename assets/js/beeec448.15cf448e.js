"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["790"],{56706:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"administration/advanced/ssl","title":"SSL","description":"Woodpecker supports two ways of enabling SSL communication. You can either use Let\'s Encrypt to get automated SSL support with","source":"@site/versioned_docs/version-2.7/30-administration/40-advanced/20-ssl.md","sourceDirName":"30-administration/40-advanced","slug":"/administration/advanced/ssl","permalink":"/docs/2.7/administration/advanced/ssl","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.7/30-administration/40-advanced/20-ssl.md","tags":[],"version":"2.7","sidebarPosition":20,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Proxy","permalink":"/docs/2.7/administration/advanced/proxy"},"next":{"title":"Autoscaler","permalink":"/docs/2.7/administration/advanced/autoscaler"}}'),i=t("96773"),c=t("46186");let o={},s="SSL",a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3},{value:"Running in containers",id:"running-in-containers",level:3}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"ssl",children:"SSL"})}),"\n",(0,i.jsx)(r.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,i.jsx)(r.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,i.jsx)(r.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,i.jsx)(r.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ini",children:"WOODPECKER_LETS_ENCRYPT=true\nWOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Note that Woodpecker uses the hostname from the ",(0,i.jsx)(r.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,i.jsx)(r.code,{children:"WOODPECKER_HOST=https://example.com"})," is set the certificate is requested for ",(0,i.jsx)(r.code,{children:"example.com"}),". To receive emails before certificates expire Let's Encrypt requires an email address. You can set it with ",(0,i.jsx)(r.code,{children:"WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["The SSL certificates are stored in ",(0,i.jsx)(r.code,{children:"$HOME/.local/share/certmagic"})," for binary versions of Woodpecker and in ",(0,i.jsx)(r.code,{children:"/var/lib/woodpecker"})," for the Container versions of it. You can set a custom path by setting ",(0,i.jsx)(r.code,{children:"XDG_DATA_HOME"})," if required."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Once enabled you can visit the Woodpecker UI with http and the HTTPS address. HTTP will be redirected to HTTPS."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,i.jsxs)(r.p,{children:["Woodpecker writes the certificates to ",(0,i.jsx)(r.code,{children:"/var/lib/woodpecker/certmagic/"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,i.jsx)(r.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,i.jsx)(r.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,i.jsx)(r.p,{children:"Woodpecker supports SSL configuration by mounting certificates into your container."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ini",children:"WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\nWOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,i.jsx)(r.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,i.jsx)(r.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,i.jsxs)(r.p,{children:["SSL support is provided using the ",(0,i.jsx)(r.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]}),"\n",(0,i.jsx)(r.h3,{id:"running-in-containers",children:"Running in containers"}),"\n",(0,i.jsx)(r.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     ports:\n+      - 80:80\n+      - 443:443\n       - 9000:9000\n"})}),"\n",(0,i.jsx)(r.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     volumes:\n+      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,i.jsx)(r.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n+      - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+      - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})})]})}function p(e={}){let{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},46186:function(e,r,t){t.d(r,{Z:function(){return s},a:function(){return o}});var n=t(41699);let i={},c=n.createContext(i);function o(e){let r=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);