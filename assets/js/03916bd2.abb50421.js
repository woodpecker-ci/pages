/*! For license information please see 03916bd2.abb50421.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2360],{33744:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=o(2488),t=o(37052);const i={toc_max_heading_level:2},c="Kubernetes backend",r={id:"administration/backends/kubernetes",title:"Kubernetes backend",description:"The kubernetes backend executes steps inside standalone pods. A temporary PVC is created for the lifetime of the pipeline to transfer files between steps.",source:"@site/versioned_docs/version-2.2/30-administration/22-backends/40-kubernetes.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/kubernetes",permalink:"/docs/2.2/administration/backends/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/30-administration/22-backends/40-kubernetes.md",tags:[],version:"2.2",sidebarPosition:40,frontMatter:{toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Local backend",permalink:"/docs/2.2/administration/backends/local"},next:{title:"Databases",permalink:"/docs/2.2/administration/database"}},d={},l=[{value:"Job specific configuration",id:"job-specific-configuration",level:2},{value:"Resources",id:"resources",level:3},{value:"<code>serviceAccountName</code>",id:"serviceaccountname",level:3},{value:"<code>nodeSelector</code>",id:"nodeselector",level:3},{value:"<code>tolerations</code>",id:"tolerations",level:3},{value:"Volumes",id:"volumes",level:3},{value:"<code>securityContext</code>",id:"securitycontext",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"CRI-O",id:"cri-o",level:3},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_K8S_NAMESPACE</code>",id:"woodpecker_backend_k8s_namespace",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_VOLUME_SIZE</code>",id:"woodpecker_backend_k8s_volume_size",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_STORAGE_CLASS</code>",id:"woodpecker_backend_k8s_storage_class",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_STORAGE_RWX</code>",id:"woodpecker_backend_k8s_storage_rwx",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_LABELS</code>",id:"woodpecker_backend_k8s_pod_labels",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS</code>",id:"woodpecker_backend_k8s_pod_annotations",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_SECCTX_NONROOT</code>",id:"woodpecker_backend_k8s_secctx_nonroot",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kubernetes-backend",children:"Kubernetes backend"}),"\n",(0,s.jsx)(n.p,{children:"The kubernetes backend executes steps inside standalone pods. A temporary PVC is created for the lifetime of the pipeline to transfer files between steps."}),"\n",(0,s.jsx)(n.h2,{id:"job-specific-configuration",children:"Job specific configuration"}),"\n",(0,s.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.p,{children:["The kubernetes backend also allows for specifying requests and limits on a per-step basic, most commonly for CPU and memory.\nWe recommend to add a ",(0,s.jsx)(n.code,{children:"resources"})," definition to all steps to ensure efficient scheduling."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example definition with an arbitrary ",(0,s.jsx)(n.code,{children:"resources"})," definition below the ",(0,s.jsx)(n.code,{children:"backend_options"})," section:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  'My kubernetes step':\n    image: alpine\n    commands:\n      - echo \"Hello world\"\n    backend_options:\n      kubernetes:\n        resources:\n          requests:\n            memory: 200Mi\n            cpu: 100m\n          limits:\n            memory: 400Mi\n            cpu: 1000m\n"})}),"\n",(0,s.jsx)(n.h3,{id:"serviceaccountname",children:(0,s.jsx)(n.code,{children:"serviceAccountName"})}),"\n",(0,s.jsxs)(n.p,{children:["Specify the name of the ServiceAccount which the build pod will mount. This serviceAccount must be created externally.\nSee the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/service-accounts/",children:"kubernetes documentation"})," for more information on using serviceAccounts."]}),"\n",(0,s.jsx)(n.h3,{id:"nodeselector",children:(0,s.jsx)(n.code,{children:"nodeSelector"})}),"\n",(0,s.jsx)(n.p,{children:"Specifies the label which is used to select the node on which the job will be executed."}),"\n",(0,s.jsxs)(n.p,{children:["Labels defined here will be appended to a list which already contains ",(0,s.jsx)(n.code,{children:'"kubernetes.io/arch"'}),".\nBy default ",(0,s.jsx)(n.code,{children:'"kubernetes.io/arch"'})," is inferred from the agents' platform. One can override it by setting that label in the ",(0,s.jsx)(n.code,{children:"nodeSelector"})," section of the ",(0,s.jsx)(n.code,{children:"backend_options"}),".\nWithout a manual overwrite, builds will be randomly assigned to the runners and inherit their respective architectures."]}),"\n",(0,s.jsxs)(n.p,{children:["To overwrite this, one needs to set the label in the ",(0,s.jsx)(n.code,{children:"nodeSelector"})," section of the ",(0,s.jsx)(n.code,{children:"backend_options"}),".\nA practical example for this is when running a matrix-build and delegating specific elements of the matrix to run on a specific architecture.\nIn this case, one must define an arbitrary key in the matrix section of the respective matrix element:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  include:\n    - NAME: runner1\n      ARCH: arm64\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And then overwrite the ",(0,s.jsx)(n.code,{children:"nodeSelector"})," in the ",(0,s.jsx)(n.code,{children:"backend_options"})," section of the step(s) using the name of the respective env var:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'[...]\n    backend_options:\n      kubernetes:\n        nodeSelector:\n          kubernetes.io/arch: "${ARCH}"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"tolerations",children:(0,s.jsx)(n.code,{children:"tolerations"})}),"\n",(0,s.jsxs)(n.p,{children:["When you use nodeSelector and the node pool is configured with Taints, you need to specify the Tolerations. Tolerations allow the scheduler to schedule pods with matching taints.\nSee the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",children:"kubernetes documentation"})," for more information on using tolerations."]}),"\n",(0,s.jsx)(n.p,{children:"Example pipeline configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n    backend_options:\n      kubernetes:\n        serviceAccountName: 'my-service-account'\n        resources:\n          requests:\n            memory: 128Mi\n            cpu: 1000m\n          limits:\n            memory: 256Mi\n        nodeSelector:\n          beta.kubernetes.io/instance-type: p3.8xlarge\n        tolerations:\n          - key: 'key1'\n            operator: 'Equal'\n            value: 'value1'\n            effect: 'NoSchedule'\n            tolerationSeconds: 3600\n"})}),"\n",(0,s.jsx)(n.h3,{id:"volumes",children:"Volumes"}),"\n",(0,s.jsxs)(n.p,{children:["To mount volumes a persistent volume (PV) and persistent volume claim (PVC) are needed on the cluster which can be referenced in steps via the ",(0,s.jsx)(n.code,{children:"volume:"}),' option.\nAssuming a PVC named "woodpecker-cache" exists, it can be referenced as follows in a step:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'steps:\n  "Restore Cache":\n    image: meltwater/drone-cache\n    volumes:\n      - woodpecker-cache:/woodpecker/src/cache\n    settings:\n      mount:\n        - "woodpecker-cache"\n    [...]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"securitycontext",children:(0,s.jsx)(n.code,{children:"securityContext"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the following configuration to set the ",(0,s.jsx)(n.code,{children:"securityContext"})," for the pod/container running a given pipeline step:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  test:\n    image: alpine\n    commands:\n      - echo Hello world\n    backend_options:\n      kubernetes:\n        securityContext:\n          runAsUser: 999\n          runAsGroup: 999\n          privileged: true\n    [...]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"backend_options.kubernetes.securityContext"})," object allows you to set both pod and container level security context options in one object.\nBy default, the properties will be set at the pod level. Properties that are only supported on the container level will be set there instead. So, the\nconfiguration shown above will result in something like the following pod spec:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kind: Pod\nspec:\n  securityContext:\n    runAsUser: 999\n    runAsGroup: 999\n  containers:\n    - name: wp-01hcd83q7be5ymh89k5accn3k6-0-step-0\n      image: alpine\n      securityContext:\n        privileged: true\n  [...]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",children:"kubernetes documentation"})," for more information on using ",(0,s.jsx)(n.code,{children:"securityContext"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,s.jsx)(n.h3,{id:"cri-o",children:"CRI-O"}),"\n",(0,s.jsx)(n.p,{children:"CRI-O users currently need to configure the workspace for all workflows in order for them to run correctly. Add the following at the beginning of your configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"workspace:\n  base: '/woodpecker'\n  path: '/'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/2510",children:"this issue"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["These env vars can be set in the ",(0,s.jsx)(n.code,{children:"env:"})," sections of the agent."]}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_namespace",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_NAMESPACE"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"woodpecker"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The namespace to create worker pods in."}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_volume_size",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_VOLUME_SIZE"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"10G"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The volume size of the pipeline volume."}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_storage_class",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_STORAGE_CLASS"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The storage class to use for the pipeline volume."}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_storage_rwx",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_STORAGE_RWX"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines if ",(0,s.jsx)(n.code,{children:"RWX"})," should be used for the pipeline volume's ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",children:"access mode"}),". If false, ",(0,s.jsx)(n.code,{children:"RWO"})," is used instead."]}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_labels",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_LABELS"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Additional labels to apply to worker pods. Must be a YAML object, e.g. ",(0,s.jsx)(n.code,{children:'{"example.com/test-label":"test-value"}'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_annotations",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Additional annotations to apply to worker pods. Must be a YAML object, e.g. ",(0,s.jsx)(n.code,{children:'{"example.com/test-annotation":"test-value"}'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"woodpecker_backend_k8s_secctx_nonroot",children:(0,s.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_SECCTX_NONROOT"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Determines if containers must be required to run as non-root users."})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},38088:(e,n,o)=>{var s=o(96651),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var s,i={},l=null,a=null;for(s in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:a,props:i,_owner:r.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},2488:(e,n,o)=>{e.exports=o(38088)},37052:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>c});var s=o(96651);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);