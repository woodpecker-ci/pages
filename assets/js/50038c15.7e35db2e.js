"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6456],{92488:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.15","label":"0.15.x","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.15","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome to Woodpecker","href":"/docs/0.15/intro","docId":"intro"},{"type":"category","label":"Usage","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Getting started","href":"/docs/0.15/usage/intro","docId":"usage/intro"},{"type":"link","label":"Pipeline syntax","href":"/docs/0.15/usage/pipeline-syntax","docId":"usage/pipeline-syntax"},{"type":"link","label":"Conditional Step Execution","href":"/docs/0.15/usage/conditional-execution","docId":"usage/conditional-execution"},{"type":"link","label":"Multi pipelines","href":"/docs/0.15/usage/multi-pipeline","docId":"usage/multi-pipeline"},{"type":"link","label":"Matrix builds","href":"/docs/0.15/usage/matrix-builds","docId":"usage/matrix-builds"},{"type":"link","label":"Secrets","href":"/docs/0.15/usage/secrets","docId":"usage/secrets"},{"type":"link","label":"Registries","href":"/docs/0.15/usage/registries","docId":"usage/registries"},{"type":"link","label":"Environment variables","href":"/docs/0.15/usage/environment","docId":"usage/environment"},{"type":"category","label":"Plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Plugins","href":"/docs/0.15/usage/plugins/plugins","docId":"usage/plugins/plugins"},{"type":"link","label":"Example plugin","href":"/docs/0.15/usage/plugins/sample-plugin","docId":"usage/plugins/sample-plugin"}]},{"type":"link","label":"Services","href":"/docs/0.15/usage/services","docId":"usage/services"},{"type":"link","label":"Volumes","href":"/docs/0.15/usage/volumes","docId":"usage/volumes"},{"type":"link","label":"Project settings","href":"/docs/0.15/usage/project-settings","docId":"usage/project-settings"},{"type":"link","label":"Status Badges","href":"/docs/0.15/usage/badges","docId":"usage/badges"}]},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup","href":"/docs/0.15/administration/setup","docId":"administration/setup"},{"type":"link","label":"Server configuration","href":"/docs/0.15/administration/server-config","docId":"administration/server-config"},{"type":"category","label":"Version control systems","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/0.15/administration/vcs/overview","docId":"administration/vcs/overview"},{"type":"link","label":"GitHub","href":"/docs/0.15/administration/vcs/github","docId":"administration/vcs/github"},{"type":"link","label":"Gitea","href":"/docs/0.15/administration/vcs/gitea","docId":"administration/vcs/gitea"},{"type":"link","label":"GitLab","href":"/docs/0.15/administration/vcs/gitlab","docId":"administration/vcs/gitlab"},{"type":"link","label":"Bitbucket","href":"/docs/0.15/administration/vcs/bitbucket","docId":"administration/vcs/bitbucket"},{"type":"link","label":"Bitbucket Server","href":"/docs/0.15/administration/vcs/bitbucket_server","docId":"administration/vcs/bitbucket_server"},{"type":"link","label":"Gogs","href":"/docs/0.15/administration/vcs/gogs","docId":"administration/vcs/gogs"},{"type":"link","label":"Coding","href":"/docs/0.15/administration/vcs/coding","docId":"administration/vcs/coding"}]},{"type":"link","label":"Agent configuration","href":"/docs/0.15/administration/agent-config","docId":"administration/agent-config"},{"type":"link","label":"Databases","href":"/docs/0.15/administration/database","docId":"administration/database"},{"type":"link","label":"SSL","href":"/docs/0.15/administration/ssl","docId":"administration/ssl"},{"type":"link","label":"Proxy","href":"/docs/0.15/administration/proxy","docId":"administration/proxy"},{"type":"link","label":"Kubernetes","href":"/docs/0.15/administration/kubernetes","docId":"administration/kubernetes"},{"type":"link","label":"Prometheus","href":"/docs/0.15/administration/prometheus","docId":"administration/prometheus"}]},{"type":"link","label":"CLI","href":"/docs/0.15/cli","docId":"cli"},{"type":"link","label":"Downloads","href":"/docs/0.15/downloads","docId":"downloads"},{"type":"link","label":"Migrations","href":"/docs/0.15/migrations","docId":"migrations"},{"type":"link","label":"Awesome Woodpecker","href":"/docs/0.15/awesome","docId":"awesome"},{"type":"category","label":"Development","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting started","href":"/docs/0.15/development/getting-started","docId":"development/getting-started"},{"type":"link","label":"UI Development","href":"/docs/0.15/development/ui","docId":"development/ui"},{"type":"link","label":"Documentation","href":"/docs/0.15/development/docs","docId":"development/docs"},{"type":"link","label":"Architecture","href":"/docs/0.15/development/architecture","docId":"development/architecture"},{"type":"link","label":"Guides","href":"/docs/0.15/development/guides","docId":"development/guides"}]}]},"docs":{"administration/agent-config":{"id":"administration/agent-config","title":"Agent configuration","description":"Agents are configured by the command line or environment variables. At the minimum you need the following information:","sidebar":"tutorialSidebar"},"administration/database":{"id":"administration/database","title":"Databases","description":"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL or Postgres database.","sidebar":"tutorialSidebar"},"administration/kubernetes":{"id":"administration/kubernetes","title":"Kubernetes","description":"Woodpecker does not support Kubernetes natively, but being a container first CI engine, it can be deployed to Kubernetes.","sidebar":"tutorialSidebar"},"administration/prometheus":{"id":"administration/prometheus","title":"Prometheus","description":"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges.","sidebar":"tutorialSidebar"},"administration/proxy":{"id":"administration/proxy","title":"Proxy","description":"Apache","sidebar":"tutorialSidebar"},"administration/server-config":{"id":"administration/server-config","title":"Server configuration","description":"User registration","sidebar":"tutorialSidebar"},"administration/setup":{"id":"administration/setup","title":"Setup","description":"A Woodpecker deployment consists of two parts:","sidebar":"tutorialSidebar"},"administration/ssl":{"id":"administration/ssl","title":"SSL","description":"Woodpecker supports two ways of enabling SSL communication. You can either use Let\'s Encrypt to get automated SSL support with","sidebar":"tutorialSidebar"},"administration/vcs/bitbucket":{"id":"administration/vcs/bitbucket","title":"Bitbucket","description":"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/vcs/bitbucket_server":{"id":"administration/vcs/bitbucket_server","title":"Bitbucket Server","description":"Woodpecker comes with experimental support for Bitbucket Server, formerly known as Atlassian Stash. To enable Bitbucket Server you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/vcs/coding":{"id":"administration/vcs/coding","title":"Coding","description":"Configuration","sidebar":"tutorialSidebar"},"administration/vcs/gitea":{"id":"administration/vcs/gitea","title":"Gitea","description":"Woodpecker comes with built-in support for Gitea. To enable Gitea you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/vcs/github":{"id":"administration/vcs/github","title":"GitHub","description":"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:","sidebar":"tutorialSidebar"},"administration/vcs/gitlab":{"id":"administration/vcs/gitlab","title":"GitLab","description":"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/vcs/gogs":{"id":"administration/vcs/gogs","title":"Gogs","description":"Configuration","sidebar":"tutorialSidebar"},"administration/vcs/overview":{"id":"administration/vcs/overview","title":"Overview","description":"Supported features","sidebar":"tutorialSidebar"},"awesome":{"id":"awesome","title":"Awesome Woodpecker","description":"A curated list of awesome things related to Woodpecker-CI.","sidebar":"tutorialSidebar"},"cli":{"id":"cli","title":"CLI","description":"NAME:","sidebar":"tutorialSidebar"},"development/architecture":{"id":"development/architecture","title":"Architecture","description":"Package architecture","sidebar":"tutorialSidebar"},"development/docs":{"id":"development/docs","title":"Documentation","description":"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.","sidebar":"tutorialSidebar"},"development/getting-started":{"id":"development/getting-started","title":"Getting started","description":"Preparation","sidebar":"tutorialSidebar"},"development/guides":{"id":"development/guides","title":"Guides","description":"ORM","sidebar":"tutorialSidebar"},"development/ui":{"id":"development/ui","title":"UI Development","description":"To develop the UI you need to install Node.js and Yarn. In addition it is recommended to use VS-Code with the recommended plugin selection to get features like auto-formatting, linting and typechecking. The UI is written with Vue 3 as Single-Page-Application accessing the Woodpecker REST api.","sidebar":"tutorialSidebar"},"downloads":{"id":"downloads","title":"Downloads","description":"Which version of Woodpecker should I use?","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome to Woodpecker","description":"Woodpecker is a simple CI engine with great extensibility. It runs your pipelines inside Docker containers, so if you are already using them in your daily workflow, you\'ll love Woodpecker for sure.","sidebar":"tutorialSidebar"},"migrations":{"id":"migrations","title":"Migrations","description":"Some versions need some changes to the server configuration or the pipeline configuration files.","sidebar":"tutorialSidebar"},"usage/badges":{"id":"usage/badges","title":"Status Badges","description":"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code.","sidebar":"tutorialSidebar"},"usage/conditional-execution":{"id":"usage/conditional-execution","title":"Conditional Step Execution","description":"Woodpecker supports defining conditions for pipeline step by a when block. If all conditions in the when block evaluate to true the step is executed, otherwise it is skipped.","sidebar":"tutorialSidebar"},"usage/environment":{"id":"usage/environment","title":"Environment variables","description":"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Example pipeline step with custom environment variables:","sidebar":"tutorialSidebar"},"usage/intro":{"id":"usage/intro","title":"Getting started","description":"Repository Activation","sidebar":"tutorialSidebar"},"usage/matrix-builds":{"id":"usage/matrix-builds","title":"Matrix builds","description":"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations.","sidebar":"tutorialSidebar"},"usage/multi-pipeline":{"id":"usage/multi-pipeline","title":"Multi pipelines","description":"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow this issue to support further development.","sidebar":"tutorialSidebar"},"usage/pipeline-syntax":{"id":"usage/pipeline-syntax","title":"Pipeline syntax","description":"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status.","sidebar":"tutorialSidebar"},"usage/plugins/plugins":{"id":"usage/plugins/plugins","title":"Plugins","description":"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.","sidebar":"tutorialSidebar"},"usage/plugins/sample-plugin":{"id":"usage/plugins/sample-plugin","title":"Example plugin","description":"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.","sidebar":"tutorialSidebar"},"usage/project-settings":{"id":"usage/project-settings","title":"Project settings","description":"As the owner of a project in Woodpecker you can change project related settings via the web interface.","sidebar":"tutorialSidebar"},"usage/registries":{"id":"usage/registries","title":"Registries","description":"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline.","sidebar":"tutorialSidebar"},"usage/secrets":{"id":"usage/secrets","title":"Secrets","description":"Woodpecker provides the ability to store named parameters external to the Yaml configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.","sidebar":"tutorialSidebar"},"usage/services":{"id":"usage/services","title":"Services","description":"Woodpecker provides a services section in the Yaml file used for defining service containers. The below configuration composes database and cache containers.","sidebar":"tutorialSidebar"},"usage/volumes":{"id":"usage/volumes","title":"Volumes","description":"Woodpecker gives the ability to define Docker volumes in the Yaml. You can use this parameter to mount files or folders on the host machine into your containers.","sidebar":"tutorialSidebar"}}}')}}]);