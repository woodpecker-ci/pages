"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["4819"],{4736:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"usage/plugins/overview","title":"Plugins","description":"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.","source":"@site/versioned_docs/version-2.8/20-usage/51-plugins/51-overview.md","sourceDirName":"20-usage/51-plugins","slug":"/usage/plugins/overview","permalink":"/docs/usage/plugins/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.8/20-usage/51-plugins/51-overview.md","tags":[],"version":"2.8","sidebarPosition":51,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Environment variables","permalink":"/docs/usage/environment"},"next":{"title":"Creating plugins","permalink":"/docs/usage/plugins/creating-plugins"}}'),t=i("96773"),l=i("24027");let o={},r="Plugins",a={},d=[{value:"Plugin Isolation",id:"plugin-isolation",level:2},{value:"Finding Plugins",id:"finding-plugins",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"plugins",children:"Plugins"})}),"\n",(0,t.jsx)(n.p,{children:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."}),"\n",(0,t.jsx)(n.p,{children:"They are automatically pulled from the default container registry the agent's have configured."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:'FROM laszlocloud/kubectl\nCOPY deploy /usr/local/deploy\nENTRYPOINT ["/usr/local/deploy"]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="deploy"',children:"kubectl apply -f $PLUGIN_TEMPLATE\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yaml"',children:"steps:\n  - name: deploy-to-k8s\n    image: laszlocloud/my-k8s-plugin\n    settings:\n      template: config/k8s/service.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example pipeline using the Docker and Slack plugins:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: build\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  - name: publish\n    image: plugins/docker\n    settings:\n      repo: foo/bar\n      tags: latest\n\n  - name: notify\n    image: plugins/slack\n    settings:\n      channel: dev\n"})}),"\n",(0,t.jsx)(n.h2,{id:"plugin-isolation",children:"Plugin Isolation"}),"\n",(0,t.jsx)(n.p,{children:"Plugins are just pipeline steps. They share the build workspace, mounted as a volume, and therefore have access to your source tree.\nWhile normal steps are all about arbitrary code execution, plugins should only allow the functions intended by the plugin author."}),"\n",(0,t.jsxs)(n.p,{children:["That's why there are a few limitations. The workspace base is always mounted at ",(0,t.jsx)(n.code,{children:"/woodpecker"}),", but the working directory is dynamically\nadjusted accordingly, as user of a plugin you should not have to care about this. Also, you cannot use the plugin together with ",(0,t.jsx)(n.code,{children:"commands"}),"\nor ",(0,t.jsx)(n.code,{children:"entrypoint"})," which will fail. Using ",(0,t.jsx)(n.code,{children:"secrets"})," or ",(0,t.jsx)(n.code,{children:"environment"})," is possible, but in this case, the plugin is internally not treated as plugin\nanymore. The container then cannot access secrets with plugin filter anymore and the containers won't be privileged without explicit definition."]}),"\n",(0,t.jsx)(n.h2,{id:"finding-plugins",children:"Finding Plugins"}),"\n",(0,t.jsx)(n.p,{children:"For official plugins, you can use the Woodpecker plugin index:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://woodpecker-ci.org/plugins",children:"Official Woodpecker Plugins"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["There are also other plugin lists with additional plugins. Keep in mind that ",(0,t.jsx)(n.a,{href:"https://www.drone.io/",children:"Drone"})," plugins are generally supported, but could need some adjustments and tweaking."]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://plugins.drone.io",children:"Drone Plugins"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://woodpecker-plugins.geekdocs.de/",children:"Geeklab Woodpecker Plugins"})}),"\n"]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},24027:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var s=i(41699);let t={},l=s.createContext(t);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);