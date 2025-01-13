"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["5744"],{893:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>d,toc:()=>a,contentTitle:()=>c});var o=JSON.parse('{"id":"administration/backends/kubernetes","title":"Kubernetes backend","description":"The Kubernetes backend executes steps inside standalone Pods. A temporary PVC is created for the lifetime of the pipeline to transfer files between steps.","source":"@site/versioned_docs/version-2.7/30-administration/22-backends/40-kubernetes.md","sourceDirName":"30-administration/22-backends","slug":"/administration/backends/kubernetes","permalink":"/docs/2.7/administration/backends/kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.7/30-administration/22-backends/40-kubernetes.md","tags":[],"version":"2.7","sidebarPosition":40,"frontMatter":{"toc_max_heading_level":2},"sidebar":"tutorialSidebar","previous":{"title":"Local backend","permalink":"/docs/2.7/administration/backends/local"},"next":{"title":"Custom backends","permalink":"/docs/2.7/administration/backends/custom-backends"}}'),t=s("96773"),i=s("24027");let r={toc_max_heading_level:2},c="Kubernetes backend",d={},a=[{value:"Images from private registries",id:"images-from-private-registries",level:2},{value:"Job specific configuration",id:"job-specific-configuration",level:2},{value:"Resources",id:"resources",level:3},{value:"Runtime class",id:"runtime-class",level:3},{value:"Service account",id:"service-account",level:3},{value:"Node selector",id:"node-selector",level:3},{value:"Tolerations",id:"tolerations",level:3},{value:"Volumes",id:"volumes",level:3},{value:"Security context",id:"security-context",level:3},{value:"Annotations and labels",id:"annotations-and-labels",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"CRI-O",id:"cri-o",level:3},{value:"<code>KUBERNETES_SERVICE_HOST</code> environment variable",id:"kubernetes_service_host-environment-variable",level:3},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_K8S_NAMESPACE</code>",id:"woodpecker_backend_k8s_namespace",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_VOLUME_SIZE</code>",id:"woodpecker_backend_k8s_volume_size",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_STORAGE_CLASS</code>",id:"woodpecker_backend_k8s_storage_class",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_STORAGE_RWX</code>",id:"woodpecker_backend_k8s_storage_rwx",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_LABELS</code>",id:"woodpecker_backend_k8s_pod_labels",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_LABELS_ALLOW_FROM_STEP</code>",id:"woodpecker_backend_k8s_pod_labels_allow_from_step",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS</code>",id:"woodpecker_backend_k8s_pod_annotations",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS_ALLOW_FROM_STEP</code>",id:"woodpecker_backend_k8s_pod_annotations_allow_from_step",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_POD_NODE_SELECTOR</code>",id:"woodpecker_backend_k8s_pod_node_selector",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_SECCTX_NONROOT</code>",id:"woodpecker_backend_k8s_secctx_nonroot",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_PULL_SECRET_NAMES</code>",id:"woodpecker_backend_k8s_pull_secret_names",level:3}];function l(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"kubernetes-backend",children:"Kubernetes backend"})}),"\n",(0,t.jsx)(n.p,{children:"The Kubernetes backend executes steps inside standalone Pods. A temporary PVC is created for the lifetime of the pipeline to transfer files between steps."}),"\n",(0,t.jsx)(n.h2,{id:"images-from-private-registries",children:"Images from private registries"}),"\n",(0,t.jsxs)(n.p,{children:["In order to pull private container images defined in your pipeline YAML you must provide ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",children:"registry credentials in Kubernetes Secret"}),".\nAs the Secret is Agent-wide, it has to be placed in namespace defined by ",(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_NAMESPACE"}),".\nBesides, you need to provide the Secret name to Agent via ",(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_PULL_SECRET_NAMES"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"job-specific-configuration",children:"Job specific configuration"}),"\n",(0,t.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.p,{children:["The Kubernetes backend also allows for specifying requests and limits on a per-step basic, most commonly for CPU and memory.\nWe recommend to add a ",(0,t.jsx)(n.code,{children:"resources"})," definition to all steps to ensure efficient scheduling."]}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example definition with an arbitrary ",(0,t.jsx)(n.code,{children:"resources"})," definition below the ",(0,t.jsx)(n.code,{children:"backend_options"})," section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: 'My kubernetes step'\n    image: alpine\n    commands:\n      - echo \"Hello world\"\n    backend_options:\n      kubernetes:\n        resources:\n          requests:\n            memory: 200Mi\n            cpu: 100m\n          limits:\n            memory: 400Mi\n            cpu: 1000m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/policy/limit-range/",children:"Limit Ranges"})," if you want to set the limits by per-namespace basis."]}),"\n",(0,t.jsx)(n.h3,{id:"runtime-class",children:"Runtime class"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"runtimeClassName"})," specifies the name of the RuntimeClass which will be used to run this Pod. If no ",(0,t.jsx)(n.code,{children:"runtimeClassName"})," is specified, the default RuntimeHandler will be used.\nSee the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/containers/runtime-class/",children:"Kubernetes documentation"})," for more information on specifying runtime classes."]}),"\n",(0,t.jsx)(n.h3,{id:"service-account",children:"Service account"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"serviceAccountName"})," specifies the name of the ServiceAccount which the Pod will mount. This service account must be created externally.\nSee the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/service-accounts/",children:"Kubernetes documentation"})," for more information on using service accounts."]}),"\n",(0,t.jsx)(n.h3,{id:"node-selector",children:"Node selector"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"nodeSelector"})," specifies the labels which are used to select the node on which the job will be executed."]}),"\n",(0,t.jsxs)(n.p,{children:["Labels defined here will be appended to a list which already contains ",(0,t.jsx)(n.code,{children:'"kubernetes.io/arch"'}),".\nBy default ",(0,t.jsx)(n.code,{children:'"kubernetes.io/arch"'})," is inferred from the agents' platform. One can override it by setting that label in the ",(0,t.jsx)(n.code,{children:"nodeSelector"})," section of the ",(0,t.jsx)(n.code,{children:"backend_options"}),".\nWithout a manual overwrite, builds will be randomly assigned to the runners and inherit their respective architectures."]}),"\n",(0,t.jsxs)(n.p,{children:["To overwrite this, one needs to set the label in the ",(0,t.jsx)(n.code,{children:"nodeSelector"})," section of the ",(0,t.jsx)(n.code,{children:"backend_options"}),".\nA practical example for this is when running a matrix-build and delegating specific elements of the matrix to run on a specific architecture.\nIn this case, one must define an arbitrary key in the matrix section of the respective matrix element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"matrix:\n  include:\n    - NAME: runner1\n      ARCH: arm64\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And then overwrite the ",(0,t.jsx)(n.code,{children:"nodeSelector"})," in the ",(0,t.jsx)(n.code,{children:"backend_options"})," section of the step(s) using the name of the respective env var:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'[...]\n    backend_options:\n      kubernetes:\n        nodeSelector:\n          kubernetes.io/arch: "${ARCH}"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.a,{href:"#woodpecker_backend_k8s_pod_node_selector",children:"WOODPECKER_BACKEND_K8S_POD_NODE_SELECTOR"})," if you want to set the node selector per Agent\nor ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#podnodeselector",children:"PodNodeSelector"})," admission controller if you want to set the node selector by per-namespace basis."]}),"\n",(0,t.jsx)(n.h3,{id:"tolerations",children:"Tolerations"}),"\n",(0,t.jsxs)(n.p,{children:["When you use ",(0,t.jsx)(n.code,{children:"nodeSelector"})," and the node pool is configured with Taints, you need to specify the Tolerations. Tolerations allow the scheduler to schedule Pods with matching taints.\nSee the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",children:"Kubernetes documentation"})," for more information on using tolerations."]}),"\n",(0,t.jsx)(n.p,{children:"Example pipeline configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: build\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n    backend_options:\n      kubernetes:\n        serviceAccountName: 'my-service-account'\n        resources:\n          requests:\n            memory: 128Mi\n            cpu: 1000m\n          limits:\n            memory: 256Mi\n        nodeSelector:\n          beta.kubernetes.io/instance-type: p3.8xlarge\n        tolerations:\n          - key: 'key1'\n            operator: 'Equal'\n            value: 'value1'\n            effect: 'NoSchedule'\n            tolerationSeconds: 3600\n"})}),"\n",(0,t.jsx)(n.h3,{id:"volumes",children:"Volumes"}),"\n",(0,t.jsxs)(n.p,{children:["To mount volumes a PersistentVolume (PV) and PersistentVolumeClaim (PVC) are needed on the cluster which can be referenced in steps via the ",(0,t.jsx)(n.code,{children:"volumes"})," option.\nAssuming a PVC named ",(0,t.jsx)(n.code,{children:"woodpecker-cache"})," exists, it can be referenced as follows in a step:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'steps:\n  - name: "Restore Cache"\n    image: meltwater/drone-cache\n    volumes:\n      - woodpecker-cache:/woodpecker/src/cache\n    settings:\n      mount:\n        - "woodpecker-cache"\n    [...]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"security-context",children:"Security context"}),"\n",(0,t.jsxs)(n.p,{children:["Use the following configuration to set the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",children:"Security Context"})," for the Pod/container running a given pipeline step:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: test\n    image: alpine\n    commands:\n      - echo Hello world\n    backend_options:\n      kubernetes:\n        securityContext:\n          runAsUser: 999\n          runAsGroup: 999\n          privileged: true\n    [...]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"backend_options.kubernetes.securityContext"})," object allows you to set both Pod and container level security context options in one object.\nBy default, the properties will be set at the Pod level. Properties that are only supported on the container level will be set there instead. So, the\nconfiguration shown above will result in something like the following Pod spec:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: Pod\nspec:\n  securityContext:\n    runAsUser: 999\n    runAsGroup: 999\n  containers:\n    - name: wp-01hcd83q7be5ymh89k5accn3k6-0-step-0\n      image: alpine\n      securityContext:\n        privileged: true\n  [...]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also restrict a container's syscalls with ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tutorials/security/seccomp/",children:"seccomp"})," profile"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"backend_options:\n  kubernetes:\n    securityContext:\n      seccompProfile:\n        type: Localhost\n        localhostProfile: profiles/audit.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["or restrict a container's access to resources by specifying ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tutorials/security/apparmor/",children:"AppArmor"})," profile"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"backend_options:\n  kubernetes:\n    securityContext:\n      apparmorProfile:\n        type: Localhost\n        localhostProfile: k8s-apparmor-example-deny-write\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["AppArmor syntax follows ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/enhancements/blob/fddcbb9cbf3df39ded03bad71228265ac6e5215f/keps/sig-node/24-apparmor/README.md",children:"KEP-24"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"annotations-and-labels",children:"Annotations and labels"}),"\n",(0,t.jsxs)(n.p,{children:["You can specify arbitrary ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",children:"annotations"})," and ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"labels"})," to be set on the Pod definition for a given workflow step using the following configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"backend_options:\n  kubernetes:\n    annotations:\n      workflow-group: alpha\n      io.kubernetes.cri-o.Devices: /dev/fuse\n    labels:\n      environment: ci\n      app.kubernetes.io/name: builder\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to enable this configuration you need to set the appropriate environment variables to ",(0,t.jsx)(n.code,{children:"true"})," on the woodpecker agent:\n",(0,t.jsx)(n.a,{href:"#woodpecker_backend_k8s_pod_annotations_allow_from_step",children:"WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS_ALLOW_FROM_STEP"})," and/or ",(0,t.jsx)(n.a,{href:"#woodpecker_backend_k8s_pod_labels_allow_from_step",children:"WOODPECKER_BACKEND_K8S_POD_LABELS_ALLOW_FROM_STEP"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,t.jsx)(n.h3,{id:"cri-o",children:"CRI-O"}),"\n",(0,t.jsx)(n.p,{children:"CRI-O users currently need to configure the workspace for all workflows in order for them to run correctly. Add the following at the beginning of your configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"workspace:\n  base: '/woodpecker'\n  path: '/'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/2510",children:"this issue"})," for more details."]}),"\n",(0,t.jsxs)(n.h3,{id:"kubernetes_service_host-environment-variable",children:[(0,t.jsx)(n.code,{children:"KUBERNETES_SERVICE_HOST"})," environment variable"]}),"\n",(0,t.jsx)(n.p,{children:"Like the below env vars used for configuration, this can be set in the environment for configuration of the agent.\nIt configures the address of the Kubernetes API server to connect to."}),"\n",(0,t.jsx)(n.p,{children:"If running the agent within Kubernetes, this will already be set and you don't have to add it manually."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["These env vars can be set in the ",(0,t.jsx)(n.code,{children:"env:"})," sections of the agent."]}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_namespace",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_NAMESPACE"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"woodpecker"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The namespace to create worker Pods in."}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_volume_size",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_VOLUME_SIZE"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"10G"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The volume size of the pipeline volume."}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_storage_class",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_STORAGE_CLASS"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The storage class to use for the pipeline volume."}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_storage_rwx",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_STORAGE_RWX"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Determines if ",(0,t.jsx)(n.code,{children:"RWX"})," should be used for the pipeline volume's ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",children:"access mode"}),". If false, ",(0,t.jsx)(n.code,{children:"RWO"})," is used instead."]}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_labels",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_LABELS"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Additional labels to apply to worker Pods. Must be a YAML object, e.g. ",(0,t.jsx)(n.code,{children:'{"example.com/test-label":"test-value"}'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_labels_allow_from_step",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_LABELS_ALLOW_FROM_STEP"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Determines if additional Pod labels can be defined from a step's backend options."}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_annotations",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Additional annotations to apply to worker Pods. Must be a YAML object, e.g. ",(0,t.jsx)(n.code,{children:'{"example.com/test-annotation":"test-value"}'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_annotations_allow_from_step",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS_ALLOW_FROM_STEP"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Determines if Pod annotations can be defined from a step's backend options."}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_pod_node_selector",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_POD_NODE_SELECTOR"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Additional node selector to apply to worker pods. Must be a YAML object, e.g. ",(0,t.jsx)(n.code,{children:'{"topology.kubernetes.io/region":"eu-central-1"}'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_secctx_nonroot",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_SECCTX_NONROOT"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Determines if containers must be required to run as non-root users."}),"\n",(0,t.jsx)(n.h3,{id:"woodpecker_backend_k8s_pull_secret_names",children:(0,t.jsx)(n.code,{children:"WOODPECKER_BACKEND_K8S_PULL_SECRET_NAMES"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Secret names to pull images from private repositories. See, how to ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",children:"Pull an Image from a Private Registry"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},24027:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var o=s(41699);let t={},i=o.createContext(t);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);