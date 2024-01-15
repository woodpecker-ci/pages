/*! For license information please see 6ca3654b.4d20b1c8.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9333],{98194:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(11527),t=n(7463);const s={},i="Proxy",c={id:"administration/proxy",title:"Proxy",description:"Apache",source:"@site/docs/30-administration/70-proxy.md",sourceDirName:"30-administration",slug:"/administration/proxy",permalink:"/docs/next/administration/proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/70-proxy.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSL",permalink:"/docs/next/administration/ssl"},next:{title:"Autoscaler",permalink:"/docs/next/administration/autoscaler"}},d={},a=[{value:"Apache",id:"apache",level:2},{value:"Nginx",id:"nginx",level:2},{value:"Caddy",id:"caddy",level:2},{value:"Tunnelmole",id:"tunnelmole",level:2},{value:"Ngrok",id:"ngrok",level:2},{value:"Traefik",id:"traefik",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"proxy",children:"Proxy"}),"\n",(0,o.jsx)(r.h2,{id:"apache",children:"Apache"}),"\n",(0,o.jsx)(r.p,{children:"This guide provides a brief overview for installing Woodpecker server behind the Apache2 web-server. This is an example configuration:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-apacheconf",children:'ProxyPreserveHost On\n\nRequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n'})}),"\n",(0,o.jsx)(r.p,{children:"You must have these Apache modules installed:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"proxy"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"proxy_http"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["You must configure Apache to set ",(0,o.jsx)(r.code,{children:"X-Forwarded-Proto"})," when using https."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:' ProxyPreserveHost On\n\n+RequestHeader set X-Forwarded-Proto "https"\n\n ProxyPass / http://127.0.0.1:8000/\n ProxyPassReverse / http://127.0.0.1:8000/\n'})}),"\n",(0,o.jsx)(r.h2,{id:"nginx",children:"Nginx"}),"\n",(0,o.jsxs)(r.p,{children:["This guide provides a basic overview for installing Woodpecker server behind the Nginx web-server. For more advanced configuration options please consult the official Nginx ",(0,o.jsx)(r.a,{href:"https://www.nginx.com/resources/admin-guide/",children:"documentation"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Example configuration:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header Host $http_host;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["You must configure the proxy to set ",(0,o.jsx)(r.code,{children:"X-Forwarded"})," proxy headers:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:" server {\n     listen 80;\n     server_name woodpecker.example.com;\n\n     location / {\n+        proxy_set_header X-Forwarded-For $remote_addr;\n+        proxy_set_header X-Forwarded-Proto $scheme;\n\n         proxy_pass http://127.0.0.1:8000;\n         proxy_redirect off;\n         proxy_http_version 1.1;\n         proxy_buffering off;\n\n         chunked_transfer_encoding off;\n     }\n }\n"})}),"\n",(0,o.jsx)(r.h2,{id:"caddy",children:"Caddy"}),"\n",(0,o.jsxs)(r.p,{children:["This guide provides a brief overview for installing Woodpecker server behind the ",(0,o.jsx)(r.a,{href:"https://caddyserver.com/",children:"Caddy web-server"}),". This is an example caddyfile proxy configuration:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-caddy",children:"# expose WebUI and API\nwoodpecker.example.com {\n  reverse_proxy woodpecker-server:8000\n}\n\n# expose gRPC\nwoodpeckeragent.example.com {\n  reverse_proxy h2c://woodpecker-server:9000\n}\n"})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["Above configuration shows how to create reverse-proxies for web and agent communication. If your agent uses SSL do not forget to enable ",(0,o.jsx)(r.a,{href:"/docs/next/administration/agent-config#woodpecker_grpc_secure",children:(0,o.jsx)(r.code,{children:"WOODPECKER_GRPC_SECURE"})}),"."]})}),"\n",(0,o.jsx)(r.h2,{id:"tunnelmole",children:"Tunnelmole"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/robbie-cahill/tunnelmole-client",children:"Tunnelmole"})," is an open source tunneling tool."]}),"\n",(0,o.jsxs)(r.p,{children:["Start by ",(0,o.jsx)(r.a,{href:"https://github.com/robbie-cahill/tunnelmole-client#installation",children:"installing tunnelmole"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"After the installation, run the following command to start tunnelmole:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"tmole 8000\n"})}),"\n",(0,o.jsx)(r.p,{children:"It will start a tunnel and will give a response like this:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"\u279c  ~ tmole 8000\nhttp://bvdo5f-ip-49-183-170-144.tunnelmole.net is forwarding to localhost:8000\nhttps://bvdo5f-ip-49-183-170-144.tunnelmole.net is forwarding to localhost:8000\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"WOODPECKER_HOST"})," to the Tunnelmole URL (",(0,o.jsx)(r.code,{children:"xxx.tunnelmole.net"}),") and start the server."]}),"\n",(0,o.jsx)(r.h2,{id:"ngrok",children:"Ngrok"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://ngrok.com/",children:"Ngrok"})," is a popular closed source tunnelling tool. After installing ngrok, open a new console and run the following command:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"ngrok http 8000\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Set ",(0,o.jsx)(r.code,{children:"WOODPECKER_HOST"})," to the ngrok URL (usually xxx.ngrok.io) and start the server."]}),"\n",(0,o.jsx)(r.h2,{id:"traefik",children:"Traefik"}),"\n",(0,o.jsxs)(r.p,{children:["To install the Woodpecker server behind a ",(0,o.jsx)(r.a,{href:"https://traefik.io/",children:"Traefik"})," load balancer, you must expose both the ",(0,o.jsx)(r.code,{children:"http"})," and the ",(0,o.jsx)(r.code,{children:"gRPC"})," ports. Here is a comprehensive example, considering you are running Traefik with docker swarm and want to do TLS termination and automatic redirection from http to https."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"version: '3.8'\n\nservices:\n  server:\n    image: woodpeckerci/woodpecker-server:latest\n    environment:\n      - WOODPECKER_OPEN=true\n      - WOODPECKER_ADMIN=your_admin_user\n      # other settings ...\n\n    networks:\n      - dmz # externally defined network, so that traefik can connect to the server\n    volumes:\n      - woodpecker-server-data:/var/lib/woodpecker/\n\n    deploy:\n      labels:\n        - traefik.enable=true\n\n        # web server\n        - traefik.http.services.woodpecker-service.loadbalancer.server.port=8000\n\n        - traefik.http.routers.woodpecker-secure.rule=Host(`cd.yourdomain.com`)\n        - traefik.http.routers.woodpecker-secure.tls=true\n        - traefik.http.routers.woodpecker-secure.tls.certresolver=letsencrypt\n        - traefik.http.routers.woodpecker-secure.entrypoints=websecure\n        - traefik.http.routers.woodpecker-secure.service=woodpecker-service\n\n        - traefik.http.routers.woodpecker.rule=Host(`cd.yourdomain.com`)\n        - traefik.http.routers.woodpecker.entrypoints=web\n        - traefik.http.routers.woodpecker.service=woodpecker-service\n\n        - traefik.http.middlewares.woodpecker-redirect.redirectscheme.scheme=https\n        - traefik.http.middlewares.woodpecker-redirect.redirectscheme.permanent=true\n        - traefik.http.routers.woodpecker.middlewares=woodpecker-redirect@docker\n\n        #  gRPC service\n        - traefik.http.services.woodpecker-grpc.loadbalancer.server.port=9000\n        - traefik.http.services.woodpecker-grpc.loadbalancer.server.scheme=h2c\n\n        - traefik.http.routers.woodpecker-grpc-secure.rule=Host(`woodpecker-grpc.yourdomain.com`)\n        - traefik.http.routers.woodpecker-grpc-secure.tls=true\n        - traefik.http.routers.woodpecker-grpc-secure.tls.certresolver=letsencrypt\n        - traefik.http.routers.woodpecker-grpc-secure.entrypoints=websecure\n        - traefik.http.routers.woodpecker-grpc-secure.service=woodpecker-grpc\n\n        - traefik.http.routers.woodpecker-grpc.rule=Host(`woodpecker-grpc.yourdomain.com`)\n        - traefik.http.routers.woodpecker-grpc.entrypoints=web\n        - traefik.http.routers.woodpecker-grpc.service=woodpecker-grpc\n\n        - traefik.http.middlewares.woodpecker-grpc-redirect.redirectscheme.scheme=https\n        - traefik.http.middlewares.woodpecker-grpc-redirect.redirectscheme.permanent=true\n        - traefik.http.routers.woodpecker-grpc.middlewares=woodpecker-grpc-redirect@docker\n\nvolumes:\n  woodpecker-server-data:\n    driver: local\n\nnetworks:\n  dmz:\n    external: true\n"})}),"\n",(0,o.jsxs)(r.p,{children:["You should pass ",(0,o.jsx)(r.code,{children:"WOODPECKER_GRPC_SECURE=true"})," and ",(0,o.jsx)(r.code,{children:"WOODPECKER_GRPC_VERIFY=true"})," to your agent when using this configuration."]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3354:(e,r,n)=>{var o=n(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var o,s={},a=null,l=null;for(o in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,o)&&!d.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:t,type:e,key:a,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},11527:(e,r,n)=>{e.exports=n(3354)},7463:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var o=n(50959);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);