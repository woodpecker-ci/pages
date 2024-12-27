"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["2755"],{37337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return r},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var i=n(68485),s=n(52676),o=n(23663);let a={title:"[Community] Debug pipeline steps",description:"Debug pipeline steps using sshx",slug:"debug-pipeline-steps",authors:[{name:"anbraten",url:"https://github.com/anbraten",image_url:"https://github.com/anbraten.png"}],hide_table_of_contents:!0,tags:["community","debug"]},u=void 0,r={authorsImageUrls:[void 0]},l=[];function p(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Sometimes you want to debug a pipeline.\nTherefore I recently discovered: ",(0,s.jsx)(t.a,{href:"https://github.com/ekzhang/sshx",children:"https://github.com/ekzhang/sshx"})]}),"\n",(0,s.jsx)(t.p,{children:"A simple step like should allow you to debug:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"steps:\n  - name: debug\n    image: alpine\n    commands:\n      - curl -sSf https://sshx.io/get | sh && sshx\n      #      ^\n      #      \u2514 This will open a remote terminal session and print the URL. It\n      #        should take under a second.\n"})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},23663:function(e,t,n){n.d(t,{Z:function(){return u},a:function(){return a}});var i=n(75271);let s={},o=i.createContext(s);function a(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}},68485:function(e){e.exports=JSON.parse('{"permalink":"/blog/debug-pipeline-steps","source":"@site/blog/2023-12-13-debug-pipeline-steps/index.md","title":"[Community] Debug pipeline steps","description":"Debug pipeline steps using sshx","date":"2023-12-13T00:00:00.000Z","tags":[{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"debug","permalink":"/blog/tags/debug"}],"readingTime":0.335,"hasTruncateMarker":true,"authors":[{"name":"anbraten","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"[Community] Debug pipeline steps","description":"Debug pipeline steps using sshx","slug":"debug-pipeline-steps","authors":[{"name":"anbraten","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png"}],"hide_table_of_contents":true,"tags":["community","debug"]},"unlisted":false,"prevItem":{"title":"[Community] Podman image build with sigstore","permalink":"/blog/podman-image-build-sigstore"},"nextItem":{"title":"[Community] Podman-in-Podman image builds","permalink":"/blog/podman-image-builds"}}')}}]);