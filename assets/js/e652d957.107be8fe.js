"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["6097"],{13816:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"administration/ssl","title":"SSL","description":"Woodpecker supports two ways of enabling SSL communication. You can either use Let\'s Encrypt to get automated SSL support with","source":"@site/versioned_docs/version-1.0/30-administration/60-ssl.md","sourceDirName":"30-administration","slug":"/administration/ssl","permalink":"/docs/1.0/administration/ssl","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/60-ssl.md","tags":[],"version":"1.0","sidebarPosition":60,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Secrets encryption","permalink":"/docs/1.0/administration/encryption"},"next":{"title":"Proxy","permalink":"/docs/1.0/administration/proxy"}}'),o=n("52676"),c=n("23663");let i={},s="SSL",a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"ssl",children:"SSL"})}),"\n",(0,o.jsx)(r.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,o.jsx)(r.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,o.jsx)(r.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,o.jsx)(r.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    environment:\n      - [...]\n+     - WOODPECKER_LETS_ENCRYPT=true\n+     - WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Note that Woodpecker uses the hostname from the ",(0,o.jsx)(r.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,o.jsx)(r.code,{children:"WOODPECKER_HOST=https://example.com"})," is set the certificate is requested for ",(0,o.jsx)(r.code,{children:"example.com"}),". To receive emails before certificates expire Let's Encrypt requires an email address. You can set it with ",(0,o.jsx)(r.code,{children:"WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["The SSL certificates are stored in ",(0,o.jsx)(r.code,{children:"$HOME/.local/share/certmagic"})," for binary versions of Woodpecker and in ",(0,o.jsx)(r.code,{children:"/var/lib/woodpecker"})," for the Container versions of it. You can set a custom path by setting ",(0,o.jsx)(r.code,{children:"XDG_DATA_HOME"})," if required."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"Once enabled you can visit the Woodpecker UI with http and the HTTPS address. HTTP will be redirected to HTTPS."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,o.jsxs)(r.p,{children:["Woodpecker writes the certificates to ",(0,o.jsx)(r.code,{children:"/var/lib/woodpecker/certmagic/"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,o.jsx)(r.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,o.jsx)(r.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,o.jsx)(r.p,{children:"Woodpecker supports SSL configuration by mounting certificates into your container."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n      - [...]\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,o.jsx)(r.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n"})}),"\n",(0,o.jsx)(r.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,o.jsx)(r.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,o.jsx)(r.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,o.jsx)(r.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,o.jsxs)(r.p,{children:["SSL support is provided using the ",(0,o.jsx)(r.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]})]})}function p(e={}){let{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},23663:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var t=n(75271);let o={},c=t.createContext(o);function i(e){let r=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);