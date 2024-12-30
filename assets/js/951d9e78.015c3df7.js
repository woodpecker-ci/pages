"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["1320"],{116:function(e,i,r){r.r(i),r.d(i,{default:()=>g,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"usage/registries","title":"Registries","description":"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline. Using registry credentials can also help you avoid rate limiting when pulling images from public registries.","source":"@site/versioned_docs/version-2.8/20-usage/41-registries.md","sourceDirName":"20-usage","slug":"/usage/registries","permalink":"/docs/usage/registries","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.8/20-usage/41-registries.md","tags":[],"version":"2.8","sidebarPosition":41,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Secrets","permalink":"/docs/usage/secrets"},"next":{"title":"Cron","permalink":"/docs/usage/cron"}}'),n=r("52676"),o=r("23663");let t={},a="Registries",c={},l=[{value:"Images from private registries",id:"images-from-private-registries",level:2},{value:"Global registry support",id:"global-registry-support",level:2},{value:"GCR registry support",id:"gcr-registry-support",level:2},{value:"Local Images",id:"local-images",level:2}];function d(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"registries",children:"Registries"})}),"\n",(0,n.jsx)(i.p,{children:"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline. Using registry credentials can also help you avoid rate limiting when pulling images from public registries."}),"\n",(0,n.jsx)(i.h2,{id:"images-from-private-registries",children:"Images from private registries"}),"\n",(0,n.jsx)(i.p,{children:"You must provide registry credentials in the UI in order to pull private container images defined in your YAML configuration file."}),"\n",(0,n.jsx)(i.p,{children:"These credentials are never exposed to your steps, which means they cannot be used to push, and are safe to use with pull requests, for example. Pushing to a registry still requires setting credentials for the appropriate plugin."}),"\n",(0,n.jsx)(i.p,{children:"Example configuration using a private image:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",children:" steps:\n   - name: build\n+    image: gcr.io/custom/golang\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,n.jsx)(i.p,{children:"Woodpecker matches the registry hostname to each image in your YAML. If the hostnames match, the registry credentials are used to authenticate to your registry and pull the image. Note that registry credentials are used by the Woodpecker agent and are never exposed to your build containers."}),"\n",(0,n.jsx)(i.p,{children:"Example registry hostnames:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Image ",(0,n.jsx)(i.code,{children:"gcr.io/foo/bar"})," has hostname ",(0,n.jsx)(i.code,{children:"gcr.io"})]}),"\n",(0,n.jsxs)(i.li,{children:["Image ",(0,n.jsx)(i.code,{children:"foo/bar"})," has hostname ",(0,n.jsx)(i.code,{children:"docker.io"})]}),"\n",(0,n.jsxs)(i.li,{children:["Image ",(0,n.jsx)(i.code,{children:"qux.com:8000/foo/bar"})," has hostname ",(0,n.jsx)(i.code,{children:"qux.com:8000"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Example registry hostname matching logic:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Hostname ",(0,n.jsx)(i.code,{children:"gcr.io"})," matches image ",(0,n.jsx)(i.code,{children:"gcr.io/foo/bar"})]}),"\n",(0,n.jsxs)(i.li,{children:["Hostname ",(0,n.jsx)(i.code,{children:"docker.io"})," matches ",(0,n.jsx)(i.code,{children:"golang"})]}),"\n",(0,n.jsxs)(i.li,{children:["Hostname ",(0,n.jsx)(i.code,{children:"docker.io"})," matches ",(0,n.jsx)(i.code,{children:"library/golang"})]}),"\n",(0,n.jsxs)(i.li,{children:["Hostname ",(0,n.jsx)(i.code,{children:"docker.io"})," matches ",(0,n.jsx)(i.code,{children:"bradyrydzewski/golang"})]}),"\n",(0,n.jsxs)(i.li,{children:["Hostname ",(0,n.jsx)(i.code,{children:"docker.io"})," matches ",(0,n.jsx)(i.code,{children:"bradyrydzewski/golang:latest"})]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["The flow above doesn't work in Kubernetes. There is ",(0,n.jsx)(i.a,{href:"/docs/administration/backends/kubernetes#images-from-private-registries",children:"workaround"}),"."]})}),"\n",(0,n.jsx)(i.h2,{id:"global-registry-support",children:"Global registry support"}),"\n",(0,n.jsxs)(i.p,{children:["To make a private registry globally available, check the ",(0,n.jsx)(i.a,{href:"/docs/administration/server-config#global-registry-setting",children:"server configuration docs"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"gcr-registry-support",children:"GCR registry support"}),"\n",(0,n.jsxs)(i.p,{children:["For specific details on configuring access to Google Container Registry, please view the docs ",(0,n.jsx)(i.a,{href:"https://cloud.google.com/container-registry/docs/advanced-authentication#using_a_json_key_file",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"local-images",children:"Local Images"}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"For this, privileged rights are needed only available to admins. In addition, this only works when using a single agent."})}),"\n",(0,n.jsx)(i.p,{children:"It's possible to build a local image by mounting the docker socket as a volume."}),"\n",(0,n.jsxs)(i.p,{children:["With a ",(0,n.jsx)(i.code,{children:"Dockerfile"})," at the root of the project:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"steps:\n  - name: build-image\n    image: docker\n    commands:\n      - docker build --rm -t local/project-image .\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n\n  - name: build-project\n    image: local/project-image\n    commands:\n      - ./build.sh\n"})})]})}function g(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},23663:function(e,i,r){r.d(i,{Z:function(){return a},a:function(){return t}});var s=r(75271);let n={},o=s.createContext(n);function t(e){let i=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);