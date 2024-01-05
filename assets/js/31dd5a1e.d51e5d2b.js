/*! For license information please see 31dd5a1e.d51e5d2b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2816],{73346:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(11527),o=s(46224);const i={},r="Kubernetes backend",c={id:"administration/backends/kubernetes",title:"Kubernetes backend",description:"The kubernetes backend executes steps inside standalone pods. A temporary PVC is created for the lifetime of the pipeline to transfer files between steps.",source:"@site/versioned_docs/version-2.1/30-administration/22-backends/40-kubernetes.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/kubernetes",permalink:"/docs/administration/backends/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/30-administration/22-backends/40-kubernetes.md",tags:[],version:"2.1",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local backend",permalink:"/docs/administration/backends/local"},next:{title:"Databases",permalink:"/docs/administration/database"}},l={},d=[{value:"General Configuration",id:"general-configuration",level:2},{value:"Job specific configuration",id:"job-specific-configuration",level:2},{value:"Resources",id:"resources",level:3},{value:"serviceAccountName",id:"serviceaccountname",level:3},{value:"nodeSelector",id:"nodeselector",level:3},{value:"tolerations",id:"tolerations",level:3},{value:"Volumes",id:"volumes",level:3},{value:"<code>securityContext</code>",id:"securitycontext",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"CRI-O",id:"cri-o",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubernetes-backend",children:"Kubernetes backend"}),"\n",(0,t.jsx)(n.p,{children:"The kubernetes backend executes steps inside standalone pods. A temporary PVC is created for the lifetime of the pipeline to transfer files between steps."}),"\n",(0,t.jsx)(n.h2,{id:"general-configuration",children:"General Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["These env vars can be set in the ",(0,t.jsx)(n.code,{children:"env:"})," sections of both ",(0,t.jsx)(n.code,{children:"server"})," and ",(0,t.jsx)(n.code,{children:"agent"}),".\nThey do not need to be set for both but only for the part to which it is relevant to."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'server:\n  env:\n    WOODPECKER_SESSION_EXPIRES: "300h"\n    [...]\n\nagent:\n  env:\n    [...]\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_NAMESPACE"})," (default: ",(0,t.jsx)(n.code,{children:"woodpecker"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The namespace to create worker pods in."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_VOLUME_SIZE"})," (default: ",(0,t.jsx)(n.code,{children:"10G"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The volume size of the pipeline volume."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_STORAGE_CLASS"})," (default: empty)"]}),"\n",(0,t.jsx)(n.p,{children:"The storage class to use for the pipeline volume."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_STORAGE_RWX"})," (default: ",(0,t.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Determines if ",(0,t.jsx)(n.code,{children:"RWX"})," should be used for the pipeline volume's ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",children:"access mode"}),". If false, ",(0,t.jsx)(n.code,{children:"RWO"})," is used instead."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_LABELS"})," (default: empty)"]}),"\n",(0,t.jsxs)(n.p,{children:["Additional labels to apply to worker pods. Must be a YAML object, e.g. ",(0,t.jsx)(n.code,{children:'{"example.com/test-label":"test-value"}'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS"})," (default: empty)"]}),"\n",(0,t.jsxs)(n.p,{children:["Additional annotations to apply to worker pods. Must be a YAML object, e.g. ",(0,t.jsx)(n.code,{children:'{"example.com/test-annotation":"test-value"}'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_SECCTX_NONROOT"})," (default: ",(0,t.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Determines if containers must be required to run as non-root users."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_PULL_SECRET_NAMES"})," (default: empty)"]}),"\n",(0,t.jsx)(n.p,{children:"Secret names to pull images from private repositories."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"job-specific-configuration",children:"Job specific configuration"}),"\n",(0,t.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.p,{children:["The kubernetes backend also allows for specifying requests and limits on a per-step basic, most commonly for CPU and memory.\nWe recommend to add a ",(0,t.jsx)(n.code,{children:"resources"})," definition to all steps to ensure efficient scheduling."]}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example definition with an arbitrary ",(0,t.jsx)(n.code,{children:"resources"})," definition below the ",(0,t.jsx)(n.code,{children:"backend_options"})," section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  'My kubernetes step':\n    image: alpine\n    commands:\n      - echo \"Hello world\"\n    backend_options:\n      kubernetes:\n        resources:\n          requests:\n            memory: 200Mi\n            cpu: 100m\n          limits:\n            memory: 400Mi\n            cpu: 1000m\n"})}),"\n",(0,t.jsx)(n.h3,{id:"serviceaccountname",children:"serviceAccountName"}),"\n",(0,t.jsxs)(n.p,{children:["Specify the name of the ServiceAccount which the build pod will mount. This serviceAccount must be created externally.\nSee the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/service-accounts/",children:"kubernetes documentation"})," for more information on using serviceAccounts."]}),"\n",(0,t.jsx)(n.h3,{id:"nodeselector",children:"nodeSelector"}),"\n",(0,t.jsx)(n.p,{children:"Specifies the label which is used to select the node on which the job will be executed."}),"\n",(0,t.jsxs)(n.p,{children:["Labels defined here will be appended to a list which already contains ",(0,t.jsx)(n.code,{children:'"kubernetes.io/arch"'}),".\nBy default ",(0,t.jsx)(n.code,{children:'"kubernetes.io/arch"'})," is inferred from the agents' platform. One can override it by setting that label in the ",(0,t.jsx)(n.code,{children:"nodeSelector"})," section of the ",(0,t.jsx)(n.code,{children:"backend_options"}),".\nWithout a manual overwrite, builds will be randomly assigned to the runners and inherit their respective architectures."]}),"\n",(0,t.jsxs)(n.p,{children:["To overwrite this, one needs to set the label in the ",(0,t.jsx)(n.code,{children:"nodeSelector"})," section of the ",(0,t.jsx)(n.code,{children:"backend_options"}),".\nA practical example for this is when running a matrix-build and delegating specific elements of the matrix to run on a specific architecture.\nIn this case, one must define an arbitrary key in the matrix section of the respective matrix element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  include:\n    - NAME: runner1\n      ARCH: arm64\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And then overwrite the ",(0,t.jsx)(n.code,{children:"nodeSelector"})," in the ",(0,t.jsx)(n.code,{children:"backend_options"})," section of the step(s) using the name of the respective env var:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'[...]\n    backend_options:\n      kubernetes:\n        nodeSelector:\n          kubernetes.io/arch: "${ARCH}"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"tolerations",children:"tolerations"}),"\n",(0,t.jsxs)(n.p,{children:["When you use nodeSelector and the node pool is configured with Taints, you need to specify the Tolerations. Tolerations allow the scheduler to schedule pods with matching taints.\nSee the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",children:"kubernetes documentation"})," for more information on using tolerations."]}),"\n",(0,t.jsx)(n.p,{children:"Example pipeline configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n    backend_options:\n      kubernetes:\n        serviceAccountName: 'my-service-account'\n        resources:\n          requests:\n            memory: 128Mi\n            cpu: 1000m\n          limits:\n            memory: 256Mi\n        nodeSelector:\n          beta.kubernetes.io/instance-type: p3.8xlarge\n        tolerations:\n          - key: 'key1'\n            operator: 'Equal'\n            value: 'value1'\n            effect: 'NoSchedule'\n            tolerationSeconds: 3600\n"})}),"\n",(0,t.jsx)(n.h3,{id:"volumes",children:"Volumes"}),"\n",(0,t.jsxs)(n.p,{children:["To mount volumes a persistent volume (PV) and persistent volume claim (PVC) are needed on the cluster which can be referenced in steps via the ",(0,t.jsx)(n.code,{children:"volume:"}),' option.\nAssuming a PVC named "woodpecker-cache" exists, it can be referenced as follows in a step:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'steps:\n  "Restore Cache":\n    image: meltwater/drone-cache\n    volumes:\n      - woodpecker-cache:/woodpecker/src/cache\n    settings:\n      mount:\n        - "woodpecker-cache"\n    [...]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"securitycontext",children:(0,t.jsx)(n.code,{children:"securityContext"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the following configuration to set the ",(0,t.jsx)(n.code,{children:"securityContext"})," for the pod/container running a given pipeline step:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  test:\n    image: alpine\n    commands:\n      - echo Hello world\n    backend_options:\n      kubernetes:\n        securityContext:\n          runAsUser: 999\n          runAsGroup: 999\n          privileged: true\n    [...]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"backend_options.kubernetes.securityContext"})," object allows you to set both pod and container level security context options in one object.\nBy default, the properties will be set at the pod level. Properties that are only supported on the container level will be set there instead. So, the\nconfiguration shown above will result in something like the following pod spec:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: Pod\nspec:\n  securityContext:\n    runAsUser: 999\n    runAsGroup: 999\n  containers:\n    - name: wp-01hcd83q7be5ymh89k5accn3k6-0-step-0\n      image: alpine\n      securityContext:\n        privileged: true\n  [...]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",children:"kubernetes documentation"})," for more information on using ",(0,t.jsx)(n.code,{children:"securityContext"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,t.jsx)(n.h3,{id:"cri-o",children:"CRI-O"}),"\n",(0,t.jsx)(n.p,{children:"CRI-O users currently need to configure the workspace for all workflows in order for them to run correctly. Add the following at the beginning of your configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"workspace:\n  base: '/woodpecker'\n  path: '/'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/2510",children:"this issue"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var t=s(50959),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,i={},d=null,a=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)r.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},46224:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(50959);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);