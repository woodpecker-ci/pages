"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome to Woodpecker","href":"/docs/next/intro","docId":"intro"},{"type":"category","label":"Usage","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Getting started","href":"/docs/next/usage/intro","docId":"usage/intro"},{"type":"link","label":"Terminology","href":"/docs/next/usage/terminology","docId":"usage/terminology"},{"type":"link","label":"Pipeline syntax","href":"/docs/next/usage/pipeline-syntax","docId":"usage/pipeline-syntax"},{"type":"link","label":"Workflows","href":"/docs/next/usage/workflows","docId":"usage/workflows"},{"type":"link","label":"Matrix workflows","href":"/docs/next/usage/matrix-workflows","docId":"usage/matrix-workflows"},{"type":"link","label":"Advanced YAML syntax","href":"/docs/next/usage/advanced-yaml-syntax","docId":"usage/advanced-yaml-syntax"},{"type":"link","label":"Secrets","href":"/docs/next/usage/secrets","docId":"usage/secrets"},{"type":"link","label":"Registries","href":"/docs/next/usage/registries","docId":"usage/registries"},{"type":"link","label":"Cron","href":"/docs/next/usage/cron","docId":"usage/cron"},{"type":"link","label":"Environment variables","href":"/docs/next/usage/environment","docId":"usage/environment"},{"type":"category","label":"Plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Plugins","href":"/docs/next/usage/plugins/plugins","docId":"usage/plugins/plugins"},{"type":"link","label":"Example plugin","href":"/docs/next/usage/plugins/sample-plugin","docId":"usage/plugins/sample-plugin"}]},{"type":"link","label":"Services","href":"/docs/next/usage/services","docId":"usage/services"},{"type":"link","label":"Volumes","href":"/docs/next/usage/volumes","docId":"usage/volumes"},{"type":"link","label":"Project settings","href":"/docs/next/usage/project-settings","docId":"usage/project-settings"},{"type":"link","label":"Status Badges","href":"/docs/next/usage/badges","docId":"usage/badges"},{"type":"link","label":"Advanced pipeline management","href":"/docs/next/usage/pipeline-management","docId":"usage/pipeline-management"}]},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup","href":"/docs/next/administration/setup","docId":"administration/setup"},{"type":"link","label":"Server configuration","href":"/docs/next/administration/server-config","docId":"administration/server-config"},{"type":"category","label":"Forges","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/next/administration/forges/overview","docId":"administration/forges/overview"},{"type":"link","label":"GitHub","href":"/docs/next/administration/forges/github","docId":"administration/forges/github"},{"type":"link","label":"Gitea / Forgejo","href":"/docs/next/administration/forges/gitea","docId":"administration/forges/gitea"},{"type":"link","label":"GitLab","href":"/docs/next/administration/forges/gitlab","docId":"administration/forges/gitlab"},{"type":"link","label":"Bitbucket","href":"/docs/next/administration/forges/bitbucket","docId":"administration/forges/bitbucket"}]},{"type":"link","label":"Agent configuration","href":"/docs/next/administration/agent-config","docId":"administration/agent-config"},{"type":"link","label":"Migrate from Drone to Woodpecker","href":"/docs/next/administration/migrate-from-drone","docId":"administration/migrate-from-drone"},{"type":"category","label":"Backends","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Docker backend","href":"/docs/next/administration/backends/docker","docId":"administration/backends/docker"},{"type":"link","label":"Local backend","href":"/docs/next/administration/backends/local","docId":"administration/backends/local"},{"type":"link","label":"SSH backend","href":"/docs/next/administration/backends/ssh","docId":"administration/backends/ssh"},{"type":"link","label":"Kubernetes backend","href":"/docs/next/administration/backends/kubernetes","docId":"administration/backends/kubernetes"}]},{"type":"link","label":"Databases","href":"/docs/next/administration/database","docId":"administration/database"},{"type":"link","label":"Secrets encryption","href":"/docs/next/administration/encryption","docId":"administration/encryption"},{"type":"link","label":"SSL","href":"/docs/next/administration/ssl","docId":"administration/ssl"},{"type":"link","label":"Proxy","href":"/docs/next/administration/proxy","docId":"administration/proxy"},{"type":"link","label":"Kubernetes","href":"/docs/next/administration/kubernetes","docId":"administration/kubernetes"},{"type":"link","label":"Prometheus","href":"/docs/next/administration/prometheus","docId":"administration/prometheus"},{"type":"link","label":"External Configuration API","href":"/docs/next/administration/external-configuration-api","docId":"administration/external-configuration-api"}]},{"type":"link","label":"CLI","href":"/docs/next/cli","docId":"cli"},{"type":"link","label":"Downloads","href":"/docs/next/downloads","docId":"downloads"},{"type":"link","label":"Migrations","href":"/docs/next/migrations","docId":"migrations"},{"type":"link","label":"Awesome Woodpecker","href":"/docs/next/awesome","docId":"awesome"},{"type":"category","label":"Development","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting started","href":"/docs/next/development/getting-started","docId":"development/getting-started"},{"type":"link","label":"UI Development","href":"/docs/next/development/ui","docId":"development/ui"},{"type":"link","label":"Documentation","href":"/docs/next/development/docs","docId":"development/docs"},{"type":"link","label":"Architecture","href":"/docs/next/development/architecture","docId":"development/architecture"},{"type":"link","label":"Guides","href":"/docs/next/development/guides","docId":"development/guides"},{"type":"link","label":"Translations","href":"/docs/next/development/translations","docId":"development/translations"},{"type":"link","label":"Swagger, API Spec and Code Generation","href":"/docs/next/development/swagger","docId":"development/swagger"},{"type":"link","label":"Security","href":"/docs/next/development/security","docId":"development/security"}]}]},"docs":{"administration/agent-config":{"id":"administration/agent-config","title":"Agent configuration","description":"Agents are configured by the command line or environment variables. At the minimum you need the following information:","sidebar":"tutorialSidebar"},"administration/backends/docker":{"id":"administration/backends/docker","title":"Docker backend","description":"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent.","sidebar":"tutorialSidebar"},"administration/backends/kubernetes":{"id":"administration/backends/kubernetes","title":"Kubernetes backend","description":"Kubernetes support is still experimental and not all pipeline features are fully supported yet.","sidebar":"tutorialSidebar"},"administration/backends/local":{"id":"administration/backends/local","title":"Local backend","description":"The local backend will execute the pipelines on the local system without any isolation of any kind.","sidebar":"tutorialSidebar"},"administration/backends/ssh":{"id":"administration/backends/ssh","title":"SSH backend","description":"The SSH backend will execute the pipelines using SSH on a remote system without any isolation of any kind.","sidebar":"tutorialSidebar"},"administration/database":{"id":"administration/database","title":"Databases","description":"The default database engine of Woodpecker is an embedded SQLite database which requires zero installation or configuration. But you can replace it with a MySQL/MariaDB or Postgres database.","sidebar":"tutorialSidebar"},"administration/encryption":{"id":"administration/encryption","title":"Secrets encryption","description":"By default, Woodpecker does not encrypt secrets in its database. You can enable encryption","sidebar":"tutorialSidebar"},"administration/external-configuration-api":{"id":"administration/external-configuration-api","title":"External Configuration API","description":"To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP API which can be enabled to call an external config service.","sidebar":"tutorialSidebar"},"administration/forges/bitbucket":{"id":"administration/forges/bitbucket","title":"Bitbucket","description":"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/forges/gitea":{"id":"administration/forges/gitea","title":"Gitea / Forgejo","description":"Woodpecker comes with built-in support for Gitea and the \\"soft\\" fork Forgejo. To enable Gitea you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/forges/github":{"id":"administration/forges/github","title":"GitHub","description":"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:","sidebar":"tutorialSidebar"},"administration/forges/gitlab":{"id":"administration/forges/gitlab","title":"GitLab","description":"Woodpecker comes with built-in support for the GitLab version 8.2 and higher. To enable GitLab you should configure the Woodpecker container using the following environment variables:","sidebar":"tutorialSidebar"},"administration/forges/overview":{"id":"administration/forges/overview","title":"Overview","description":"Supported features","sidebar":"tutorialSidebar"},"administration/kubernetes":{"id":"administration/kubernetes","title":"Kubernetes","description":"Woodpecker does support Kubernetes as a backend. See the Kubernetes backend configuration for backend-specific options.","sidebar":"tutorialSidebar"},"administration/migrate-from-drone":{"id":"administration/migrate-from-drone","title":"Migrate from Drone to Woodpecker","description":"Migrate from Drone >= v1.0.0","sidebar":"tutorialSidebar"},"administration/prometheus":{"id":"administration/prometheus","title":"Prometheus","description":"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges.","sidebar":"tutorialSidebar"},"administration/proxy":{"id":"administration/proxy","title":"Proxy","description":"Apache","sidebar":"tutorialSidebar"},"administration/server-config":{"id":"administration/server-config","title":"Server configuration","description":"User registration","sidebar":"tutorialSidebar"},"administration/setup":{"id":"administration/setup","title":"Setup","description":"A Woodpecker deployment consists of two parts:","sidebar":"tutorialSidebar"},"administration/ssl":{"id":"administration/ssl","title":"SSL","description":"Woodpecker supports two ways of enabling SSL communication. You can either use Let\'s Encrypt to get automated SSL support with","sidebar":"tutorialSidebar"},"awesome":{"id":"awesome","title":"Awesome Woodpecker","description":"A curated list of awesome things related to Woodpecker-CI.","sidebar":"tutorialSidebar"},"cli":{"id":"cli","title":"CLI","description":"woodpecker-cli - command line utility","sidebar":"tutorialSidebar"},"development/architecture":{"id":"development/architecture","title":"Architecture","description":"Package architecture","sidebar":"tutorialSidebar"},"development/docs":{"id":"development/docs","title":"Documentation","description":"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.","sidebar":"tutorialSidebar"},"development/getting-started":{"id":"development/getting-started","title":"Getting started","description":"You can develop on your local computer by following the steps below or you can start with a fully prepared online setup using Gitpod and Gitea.","sidebar":"tutorialSidebar"},"development/guides":{"id":"development/guides","title":"Guides","description":"ORM","sidebar":"tutorialSidebar"},"development/security":{"id":"development/security","title":"Security","description":"We take security seriously.","sidebar":"tutorialSidebar"},"development/swagger":{"id":"development/swagger","title":"Swagger, API Spec and Code Generation","description":"Woodpecker uses gin-swagger middleware to automatically","sidebar":"tutorialSidebar"},"development/translations":{"id":"development/translations","title":"Translations","description":"Woodpecker uses Vue I18n as translation library, thus you can easily translate the web UI into your language. Therefore, copy the file web/src/assets/locales/en.json to the same path with your language\'s code and .json as name.","sidebar":"tutorialSidebar"},"development/ui":{"id":"development/ui","title":"UI Development","description":"To develop the UI you need to install Node.js and pnpm. In addition it is recommended to use VS-Code with the recommended plugin selection to get features like auto-formatting, linting and typechecking. The UI is written with Vue 3 as Single-Page-Application accessing the Woodpecker REST api.","sidebar":"tutorialSidebar"},"downloads":{"id":"downloads","title":"Downloads","description":"Which version of Woodpecker should I use?","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome to Woodpecker","description":"Woodpecker is a simple CI engine with great extensibility. It focuses on executing pipelines inside containers.","sidebar":"tutorialSidebar"},"migrations":{"id":"migrations","title":"Migrations","description":"Some versions need some changes to the server configuration or the pipeline configuration files.","sidebar":"tutorialSidebar"},"usage/advanced-yaml-syntax":{"id":"usage/advanced-yaml-syntax","title":"Advanced YAML syntax","description":"Anchors & aliases","sidebar":"tutorialSidebar"},"usage/badges":{"id":"usage/badges","title":"Status Badges","description":"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code.","sidebar":"tutorialSidebar"},"usage/cron":{"id":"usage/cron","title":"Cron","description":"To configure cron jobs you need at least push access to the repository.","sidebar":"tutorialSidebar"},"usage/environment":{"id":"usage/environment","title":"Environment variables","description":"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Note that these can\'t overwrite any existing, built-in variables. Example pipeline step with custom environment variables:","sidebar":"tutorialSidebar"},"usage/intro":{"id":"usage/intro","title":"Getting started","description":"Repository Activation","sidebar":"tutorialSidebar"},"usage/matrix-workflows":{"id":"usage/matrix-workflows","title":"Matrix workflows","description":"Woodpecker has integrated support for matrix workflows. Woodpecker executes a separate workflow for each combination in the matrix, allowing you to build and test a single commit against multiple configurations.","sidebar":"tutorialSidebar"},"usage/pipeline-management":{"id":"usage/pipeline-management","title":"Advanced pipeline management","description":"Using variables","sidebar":"tutorialSidebar"},"usage/pipeline-syntax":{"id":"usage/pipeline-syntax","title":"Pipeline syntax","description":"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status.","sidebar":"tutorialSidebar"},"usage/plugins/plugins":{"id":"usage/plugins/plugins","title":"Plugins","description":"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.","sidebar":"tutorialSidebar"},"usage/plugins/sample-plugin":{"id":"usage/plugins/sample-plugin","title":"Example plugin","description":"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.","sidebar":"tutorialSidebar"},"usage/project-settings":{"id":"usage/project-settings","title":"Project settings","description":"As the owner of a project in Woodpecker you can change project related settings via the web interface.","sidebar":"tutorialSidebar"},"usage/registries":{"id":"usage/registries","title":"Registries","description":"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline.","sidebar":"tutorialSidebar"},"usage/secrets":{"id":"usage/secrets","title":"Secrets","description":"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.","sidebar":"tutorialSidebar"},"usage/services":{"id":"usage/services","title":"Services","description":"Woodpecker provides a services section in the YAML file used for defining service containers.","sidebar":"tutorialSidebar"},"usage/terminology":{"id":"usage/terminology","title":"Terminology","description":"Glossary","sidebar":"tutorialSidebar"},"usage/volumes":{"id":"usage/volumes","title":"Volumes","description":"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers.","sidebar":"tutorialSidebar"},"usage/workflows":{"id":"usage/workflows","title":"Workflows","description":"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow this issue to support further development.","sidebar":"tutorialSidebar"}}}')}}]);