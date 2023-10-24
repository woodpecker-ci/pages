"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9333],{17942:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(50959);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(t),k=o,m=l["".concat(s,".").concat(k)]||l[k]||u[k]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=k;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},82285:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>x,frontMatter:()=>m,metadata:()=>h,toc:()=>w});var n=t(17942),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&d(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&d(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),k=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={},f="Proxy",h={unversionedId:"administration/proxy",id:"administration/proxy",title:"Proxy",description:"Apache",source:"@site/docs/30-administration/70-proxy.md",sourceDirName:"30-administration",slug:"/administration/proxy",permalink:"/docs/next/administration/proxy",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/70-proxy.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSL",permalink:"/docs/next/administration/ssl"},next:{title:"Autoscaler",permalink:"/docs/next/administration/autoscaler"}},g={},w=[{value:"Apache",id:"apache",level:2},{value:"Nginx",id:"nginx",level:2},{value:"Caddy",id:"caddy",level:2},{value:"Ngrok",id:"ngrok",level:2},{value:"Traefik",id:"traefik",level:2}],y={toc:w},v="wrapper";function x(e){var r=e,{components:t}=r,o=k(r,["components"]);return(0,n.kt)(v,u(l(l({},y),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"proxy"}),"Proxy"),(0,n.kt)("h2",l({},{id:"apache"}),"Apache"),(0,n.kt)("p",null,"This guide provides a brief overview for installing Woodpecker server behind the Apache2 web-server. This is an example configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-nohighlight"}),'ProxyPreserveHost On\n\nRequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n')),(0,n.kt)("p",null,"You must have the below Apache modules installed."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-nohighlight"}),"a2enmod proxy\na2enmod proxy_http\n")),(0,n.kt)("p",null,"You must configure Apache to set ",(0,n.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto")," when using https."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-diff"}),'ProxyPreserveHost On\n\n+RequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n')),(0,n.kt)("h2",l({},{id:"nginx"}),"Nginx"),(0,n.kt)("p",null,"This guide provides a basic overview for installing Woodpecker server behind the Nginx web-server. For more advanced configuration options please consult the official Nginx ",(0,n.kt)("a",l({parentName:"p"},{href:"https://www.nginx.com/resources/admin-guide/"}),"documentation"),"."),(0,n.kt)("p",null,"Example configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-nginx"}),"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header Host $http_host;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n")),(0,n.kt)("p",null,"You must configure the proxy to set ",(0,n.kt)("inlineCode",{parentName:"p"},"X-Forwarded")," proxy headers:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-diff"}),"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n+       proxy_set_header X-Forwarded-For $remote_addr;\n+       proxy_set_header X-Forwarded-Proto $scheme;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n")),(0,n.kt)("h2",l({},{id:"caddy"}),"Caddy"),(0,n.kt)("p",null,"This guide provides a brief overview for installing Woodpecker server behind the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://caddyserver.com/"}),"Caddy web-server"),". This is an example caddyfile proxy configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-caddy"}),"# expose WebUI and API\nwoodpecker.example.com {\n  reverse_proxy woodpecker-server:8000\n}\n\n# expose gRPC\nwoodpeckeragent.example.com {\n  reverse_proxy h2c://woodpecker-server:9000\n}\n")),(0,n.kt)("admonition",l({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Above configuration shows how to create reverse-proxies for web and agent communication. If your agent uses SSL do not forget to enable ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/administration/agent-config#woodpecker_grpc_secure"}),"WOODPECKER_GRPC_SECURE"),".")),(0,n.kt)("h2",l({},{id:"ngrok"}),"Ngrok"),(0,n.kt)("p",null,"After installing ",(0,n.kt)("a",l({parentName:"p"},{href:"https://ngrok.com/"}),"ngrok"),", open a new console and run:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"ngrok http 8000\n")),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST")," (for example in ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),") to the ngrok URL (usually xxx.ngrok.io) and start the server."),(0,n.kt)("h2",l({},{id:"traefik"}),"Traefik"),(0,n.kt)("p",null,"To install the Woodpecker server behind a ",(0,n.kt)("a",l({parentName:"p"},{href:"https://traefik.io/"}),"Traefik")," load balancer, you must expose both the ",(0,n.kt)("inlineCode",{parentName:"p"},"http")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"gRPC")," ports. Here is a comprehensive example, considering you are running Traefik with docker swarm and want to do TLS termination and automatic redirection from http to https."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-yml"}),"version: '3.8'\n\nservices:\n  server:\n    image: woodpeckerci/woodpecker-server:latest\n    environment:\n      - WOODPECKER_OPEN=true\n      - WOODPECKER_ADMIN=your_admin_user\n      # other settings ...\n\n    networks:\n      - dmz # externally defined network, so that traefik can connect to the server\n    volumes:\n      - woodpecker-server-data:/var/lib/woodpecker/\n\n    deploy:\n      labels:\n        - traefik.enable=true\n\n        # web server\n        - traefik.http.services.woodpecker-service.loadbalancer.server.port=8000\n\n        - traefik.http.routers.woodpecker-secure.rule=Host(`cd.yourdomain.com`)\n        - traefik.http.routers.woodpecker-secure.tls=true\n        - traefik.http.routers.woodpecker-secure.tls.certresolver=letsencrypt\n        - traefik.http.routers.woodpecker-secure.entrypoints=websecure\n        - traefik.http.routers.woodpecker-secure.service=woodpecker-service\n\n        - traefik.http.routers.woodpecker.rule=Host(`cd.yourdomain.com`)\n        - traefik.http.routers.woodpecker.entrypoints=web\n        - traefik.http.routers.woodpecker.service=woodpecker-service\n\n        - traefik.http.middlewares.woodpecker-redirect.redirectscheme.scheme=https\n        - traefik.http.middlewares.woodpecker-redirect.redirectscheme.permanent=true\n        - traefik.http.routers.woodpecker.middlewares=woodpecker-redirect@docker\n\n        #  gRPC service\n        - traefik.http.services.woodpecker-grpc.loadbalancer.server.port=9000\n        - traefik.http.services.woodpecker-grpc.loadbalancer.server.scheme=h2c\n\n        - traefik.http.routers.woodpecker-grpc-secure.rule=Host(`woodpecker-grpc.yourdomain.com`)\n        - traefik.http.routers.woodpecker-grpc-secure.tls=true\n        - traefik.http.routers.woodpecker-grpc-secure.tls.certresolver=letsencrypt\n        - traefik.http.routers.woodpecker-grpc-secure.entrypoints=websecure\n        - traefik.http.routers.woodpecker-grpc-secure.service=woodpecker-grpc\n\n        - traefik.http.routers.woodpecker-grpc.rule=Host(`woodpecker-grpc.yourdomain.com`)\n        - traefik.http.routers.woodpecker-grpc.entrypoints=web\n        - traefik.http.routers.woodpecker-grpc.service=woodpecker-grpc\n\n        - traefik.http.middlewares.woodpecker-grpc-redirect.redirectscheme.scheme=https\n        - traefik.http.middlewares.woodpecker-grpc-redirect.redirectscheme.permanent=true\n        - traefik.http.routers.woodpecker-grpc.middlewares=woodpecker-grpc-redirect@docker\n\n\nvolumes:\n  woodpecker-server-data:\n    driver: local\n\nnetworks:\n  dmz:\n    external: true\n")),(0,n.kt)("p",null,"You should pass ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GRPC_SECURE=true")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GRPC_VERIFY=true")," to your agent when using this configuration."))}x.isMDXComponent=!0}}]);