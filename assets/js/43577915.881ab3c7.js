"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["3895"],{70728:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=t(73701),a=t(52676),o=t(23663);let r={title:"[Community] Podman-in-Podman image builds",description:"Build images in Podman with buildah",slug:"podman-image-builds",authors:[{name:"handlebargh",url:"https://github.com/handlebargh",image_url:"https://github.com/handlebargh.png"}],hide_table_of_contents:!0,tags:["community","image","podman"]},s=void 0,u={authorsImageUrls:[void 0]},l=[];function d(e){let n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"I run Woodpecker CI with podman backend instead of docker and just figured out how to build images with buildah. Since I couldn't find this anywhere documented, I thought I might as well just share it here."}),"\n",(0,a.jsx)(n.p,{children:"It's actually pretty straight forward. Here's what my repository structure looks like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 roundcube\n\u2502\xa0\xa0 \u251C\u2500\u2500 Containerfile\n\u2502\xa0\xa0 \u251C\u2500\u2500 docker-entrypoint.sh\n\u2502\xa0\xa0 \u2514\u2500\u2500 php.ini\n\u2514\u2500\u2500 .woodpecker\n    \u2514\u2500\u2500 .build_roundcube.yml\n"})}),"\n",(0,a.jsx)(n.p,{children:"As you can see I'm building a roundcube mail image."}),"\n",(0,a.jsxs)(n.p,{children:["This is the ",(0,a.jsx)(n.code,{children:".woodpecker/.build_roundcube.yaml"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"when:\n  event: [cron, manual]\n  cron: build_roundcube\n\nsteps:\n  build-image:\n    image: quay.io/buildah/stable:latest\n    pull: true\n    privileged: true\n    commands:\n      - echo $REGISTRY_LOGIN_TOKEN | buildah login -u <username> --password-stdin registry.gitlab.com\n      - cd roundcube\n      - buildah build --tag registry.gitlab.com/<namespace>/<repository_name>/roundcube:latest .\n      - buildah push registry.gitlab.com/<namespace>/<repository_name>/roundcube:latest\n\n    secrets: [registry_login_token]\n"})}),"\n",(0,a.jsx)(n.p,{children:"As you can see, I'm using this workflow over at gitlab.com. It should work with GitHub as well, with adjusting the registry login."}),"\n",(0,a.jsxs)(n.p,{children:["You may have to adjust the ",(0,a.jsx)(n.code,{children:"when:"})," to your needs. Furthermore, you must check the ",(0,a.jsx)(n.code,{children:"trusted"})," checkbox in project settings. Therefore, be sure to run trusted code only in this setup."]}),"\n",(0,a.jsx)(n.p,{children:"This seems to work fine so far. I wonder if anybody else made this work a different way."}),"\n",(0,a.jsx)(n.p,{children:"EDIT: Removed the additional step that would run buildah in a podman container. I didn't know it could be that easy to be honest."})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},23663:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(75271);let a={},o=i.createContext(a);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},73701:function(e){e.exports=JSON.parse('{"permalink":"/blog/podman-image-builds","source":"@site/blog/2023-12-12-podman-image-builds/index.md","title":"[Community] Podman-in-Podman image builds","description":"Build images in Podman with buildah","date":"2023-12-12T00:00:00.000Z","tags":[{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"image","permalink":"/blog/tags/image"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"}],"readingTime":1.14,"hasTruncateMarker":true,"authors":[{"name":"handlebargh","url":"https://github.com/handlebargh","image_url":"https://github.com/handlebargh.png","imageURL":"https://github.com/handlebargh.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"[Community] Podman-in-Podman image builds","description":"Build images in Podman with buildah","slug":"podman-image-builds","authors":[{"name":"handlebargh","url":"https://github.com/handlebargh","image_url":"https://github.com/handlebargh.png","imageURL":"https://github.com/handlebargh.png"}],"hide_table_of_contents":true,"tags":["community","image","podman"]},"unlisted":false,"prevItem":{"title":"[Community] Debug pipeline steps","permalink":"/blog/debug-pipeline-steps"},"nextItem":{"title":"It\'s time for some changes - Woodpecker 2.0.0","permalink":"/blog/release-v200"}}')}}]);