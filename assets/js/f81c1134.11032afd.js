"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["8589"],{5865:function(e){e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"release-v250","metadata":{"permalink":"/blog/release-v250","source":"@site/blog/2024-05-27-release-v2.5.0/index.md","title":"Here is Woodpecker 2.5.0","description":"Introducing Woodpecker 2.5.0","date":"2024-05-27T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"minor","permalink":"/blog/tags/minor"}],"readingTime":2.42,"hasTruncateMarker":true,"authors":[{"name":"Anbraten","title":"Maintainer of Woodpecker","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Here is Woodpecker 2.5.0","description":"Introducing Woodpecker 2.5.0","slug":"release-v250","authors":[{"name":"Anbraten","title":"Maintainer of Woodpecker","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png"}],"tags":["release","minor"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"[Community] Continuous Deployment","permalink":"/blog/continuous-deployment"}},"content":"Here is the next minor release 2.5.0 of Woodpecker \uD83E\uDEB6 \u2600\uFE0F.\\n\\n\x3c!--truncate--\x3e\\n\\nAs always thanks to all contributors who helped to make this release possible. It includes quite a few enhancements\\nmost users will benefit from while they are probably not that visible at first sight for most. The release also includes some preparations for new features to come in the next versions. Anyway, let\'s dive into some of the highlights of this release:\\n\\n## Improve the way entrypoints work\\n\\nThe implementation wasn\'t perfect yet so we improved the way entrypoints work:\\n\\nIf you define [`commands`](/docs/usage/workflow-syntax#commands), the default entrypoint will be `[\\"/bin/sh\\", \\"-c\\", \\"echo $CI_SCRIPT | base64 -d | /bin/sh -e\\"]`.\\n\\nIf you define your own entrypoint, you can completely overwrite the default entrypoint. If you define `entrypoint: [\\"/bin/my-script\\", \\"\\"]` for example you can run your own binary / script. In this case the commands section will ignored, however you can still access it in your own script by using the base64 encoded string of the `CI_SCRIPT` environment variable.\\n\\n[#3269](https://github.com/woodpecker-ci/woodpecker/pull/3269)\\n\\n## Cli output formats\\n\\nThe cli output has been improved. The first command (mainly pipeline info, ls, create) support a `--output` flag now which allows you to change the output format. There is a new `table` format (the new default) which will look like the following and can be further customized:\\n\\n```bash\\n# use default table output\\n\u276F woodpecker-cli pipeline ls --limit 2 2\\nNUMBER  STATUS   EVENT   BRANCH  COMMIT                                    AUTHOR\\n43      error    manual  main    473761d8b26b20f7c206408563d54cf998410329  woodpecker\\n42      success  push    main    473761d8b26b20f7c206408563d54cf998410329  woodpecker\\n\\n# customize table output and disable header\\n\u276F woodpecker-cli pipeline ls --limit 2 --output table=number,status,event --no-header 2\\n43  error    manual\\n42  success  push\\n```\\n\\nIn addition especially useful for programmatic usage there is a `go-template` output format which will output the data using the provided go template like this:\\n\\n```bash\\n########\\n# go crazy and use a template layout\\n\u276F woodpecker-cli pipeline ls --limit 2 --output go-template=\'{{range .}}{{printf \\"\\\\x1b[33mPipeline #%d\\\\x1b[0m\\\\nStatus: %s\\\\nEvent:%s\\\\nCommit:%s\\\\n\\\\n\\" .Number .Status .Event .Commit}}{{end}}\' 2\\nPipeline #43\\nStatus: error\\nEvent:manual\\nCommit:473761d8b26b20f7c206408563d54cf998410329\\n\\nPipeline #42\\nStatus: success\\nEvent:push\\nCommit:473761d8b26b20f7c206408563d54cf998410329\\n```\\n\\n[#3660](https://github.com/woodpecker-ci/woodpecker/pull/3660)\\n\\n## Deleting logs or complete pipelines\\n\\nIf you accidentally exposed some secret to the public in your logs or you simply want to cleanup some logs you can now delete logs or complete pipelines using the api and the cli.\\n\\n[#3451](https://github.com/woodpecker-ci/woodpecker/pull/3451)\\n[#3506](https://github.com/woodpecker-ci/woodpecker/pull/3506)\\n[#3458](https://github.com/woodpecker-ci/woodpecker/pull/3458)\\n\\n## Support for Github deploy tasks\\n\\nWoodpecker now supports Github deploy tasks. This allows you to pass the deploy task set in Github to your Woodpecker pipeline.\\n\\n[#3512](https://github.com/woodpecker-ci/woodpecker/pull/3512)\\n\\n## Deprecations\\n\\nTo keep things clean and simple we deprecated some pipeline options, server settings and features which will\\nbe removed in the next major release:\\n\\n- Deprecated `environment` filter, use `when.evaluate`\\n- Use `WOODPECKER_EXPERT_FORGE_OAUTH_HOST` instead of `WOODPECKER_DEV_GITEA_OAUTH_URL` or `WOODPECKER_DEV_OAUTH_HOST`\\n- Deprecated `WOODPECKER_WEBHOOK_HOST` in favor of `WOODPECKER_EXPERT_WEBHOOK_HOST`\\n\\nFor a full list of deprecations that will be dropped in the `next` major release `3.0.0` (no eta yet), please check the [migrations](/migrations#next) section."},{"id":"continuous-deployment","metadata":{"permalink":"/blog/continuous-deployment","source":"@site/blog/2024-01-01-continuous-deployment/index.md","title":"[Community] Continuous Deployment","description":"Deploy your artifacts to an app server","date":"2024-01-01T00:00:00.000Z","tags":[{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"cd","permalink":"/blog/tags/cd"},{"inline":true,"label":"deployment","permalink":"/blog/tags/deployment"}],"readingTime":1.87,"hasTruncateMarker":true,"authors":[{"name":"lonix1","url":"https://github.com/lonix1","image_url":"https://github.com/lonix1.png","imageURL":"https://github.com/lonix1.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"[Community] Continuous Deployment","description":"Deploy your artifacts to an app server","slug":"continuous-deployment","authors":[{"name":"lonix1","url":"https://github.com/lonix1","image_url":"https://github.com/lonix1.png","imageURL":"https://github.com/lonix1.png"}],"hide_table_of_contents":false,"tags":["community","cd","deployment"]},"unlisted":false,"prevItem":{"title":"Here is Woodpecker 2.5.0","permalink":"/blog/release-v250"},"nextItem":{"title":"[Community] Podman image build with sigstore","permalink":"/blog/podman-image-build-sigstore"}},"content":"A typical CI pipeline contains steps such as: _clone_, _build_, _test_, _package_ and _push_. The final build product may be artifacts pushed to a git repository or a docker container pushed to a container registry.\\n\\nWhen these should be deployed on an app server, the pipeline should include a _deploy_ step, which represents the \\"CD\\" in CI/CD - the automatic deployment of a pipeline\'s final product.\\n\\nThere are various ways to accomplish CD with Woodpecker, depending on your project\'s specific needs.\\n\\n\x3c!--truncate--\x3e\\n\\n## Invoking deploy script via SSH\\n\\nThe final step in your pipeline could SSH into the app server and run a deployment script.\\n\\nOne of the benefits would be that the deployment script\'s output could be included in the pipeline\'s log. However in general, this is a complicated option as it tightly couples the CI and app servers.\\n\\nAn SSH step could be written by using a plugin, like [ssh](https://plugins.drone.io/plugins/ssh) or [git push](https://woodpecker-ci.org/plugins/Git%20Push).\\n\\n## Polling for asset changes\\n\\nThis option completely decouples the CI and app servers, and there is no explicit deploy step in the pipeline.\\n\\nOn the app server, one should create a script or cron job that polls for asset changes (every minute, say). When a new version is detected, the script redeploys the app.\\n\\nThis option is easy to maintain, but the downside is a short delay (one minute) before new assets are detected.\\n\\n## Using a configuration management tool\\n\\nIf you are using a configuration management tool (e.g. Ansible, Chef, Puppet), then you could setup the last pipeline step to call that tool to perform the redeployment.\\n\\nA plugin for [Ansible](https://woodpecker-ci.org/plugins/Ansible) exists and could be adapted accordingly.\\n\\nThis option is complex and only suitable in an environment in which you\'re already using configuration management.\\n\\n## Using webhooks (recommended)\\n\\nIf your forge (GitHub, GitLab, Gitea, etc.) supports webhooks, then you could create a separate listening app that receives a webhook when new assets are available and redeploys your app.\\n\\nThe listening \\"app\\" can be something as simple as a PHP script.\\n\\nAlternatively, there are a number of popular webhook servers that simplify this process, so you only need to write your actual deployment script. For example, [webhook](https://github.com/adnanh/webhook) and [webhookd](https://github.com/ncarlier/webhookd).\\n\\nThis is arguably the simplest and most maintainable solution."},{"id":"podman-image-build-sigstore","metadata":{"permalink":"/blog/podman-image-build-sigstore","source":"@site/blog/2023-12-15-podman-sigstore/index.md","title":"[Community] Podman image build with sigstore","description":"Build images in Podman with sigstore signature checking and signing","date":"2023-12-15T00:00:00.000Z","tags":[{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"image","permalink":"/blog/tags/image"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"},{"inline":true,"label":"sigstore","permalink":"/blog/tags/sigstore"},{"inline":true,"label":"signature","permalink":"/blog/tags/signature"}],"readingTime":2.29,"hasTruncateMarker":true,"authors":[{"name":"handlebargh","url":"https://github.com/handlebargh","image_url":"https://github.com/handlebargh.png","imageURL":"https://github.com/handlebargh.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"[Community] Podman image build with sigstore","description":"Build images in Podman with sigstore signature checking and signing","slug":"podman-image-build-sigstore","authors":[{"name":"handlebargh","url":"https://github.com/handlebargh","image_url":"https://github.com/handlebargh.png","imageURL":"https://github.com/handlebargh.png"}],"hide_table_of_contents":false,"tags":["community","image","podman","sigstore","signature"]},"unlisted":false,"prevItem":{"title":"[Community] Continuous Deployment","permalink":"/blog/continuous-deployment"},"nextItem":{"title":"[Community] Debug pipeline steps","permalink":"/blog/debug-pipeline-steps"}},"content":"\x3c!-- cspell:ignore BQVUJ Containerfile cosing distroless fulcio keypair nonroot QVRFLS rekor skopeo --\x3e\\n\\nThis example shows how to build a container image with podman while verifying the base image and signing the resulting image.\\n\\n\x3c!-- truncate --\x3e\\n\\nThe image being pulled uses a keyless signature, while the image being built will be signed by a pre-generated private key.\\n\\n## Prerequisites\\n\\n### Generate signing keypair\\n\\nYou can use cosing or skopeo to generate the keypair.\\n\\nUsing skopeo:\\n\\n```bash\\nskopeo generate-sigstore-key --output-prefix myKey\\n```\\n\\nThis command will generate a `myKey.private` and a `myKey.pub` keyfile.\\n\\nStore the `myKey.private` as secret in Woodpecker. In the example below, the secret is called `sigstore_private_key`\\n\\n### Configure hosts pulling the resulting image\\n\\nSee [here](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/building_running_and_managing_containers/assembly_signing-container-images_building-running-and-managing-containers#proc_verifying-sigstore-image-signatures-using-a-public-key_assembly_signing-container-images) on how to configure the hosts pulling the built and signed image.\\n\\n## Repository structure\\n\\nConsider the `Makefile` having a `build` target that will be used in the following workflow.\\nThis target yields a Go binary with the filename `app` that will be placed in the root directory.\\n\\n```bash\\n.\\n\u251C\u2500\u2500 Containerfile\\n\u251C\u2500\u2500 main.go\\n\u251C\u2500\u2500 go.mod\\n\u251C\u2500\u2500 go.sum\\n\u251C\u2500\u2500 .woodpecker.yml\\n\u2514\u2500\u2500 Makefile\\n```\\n\\n### Containerfile\\n\\nThe Containerfile refers to the base image that will be verified when pulled.\\n\\n```dockerfile\\nFROM gcr.io/distroless/static-debian12:nonroot\\nCOPY app /app\\nCMD [\\"/app\\"]\\n```\\n\\n### Woodpecker workflow\\n\\n```yaml\\nsteps:\\n  build:\\n    image: docker.io/library/golang:1.21\\n    pull: true\\n    commands:\\n      - make build\\n\\n  publish:\\n    image: quay.io/podman/stable:latest\\n    # Caution: This image is built daily. It might fill up your image store quickly.\\n    pull: true\\n    # Fill in the trusted checkbox in Woodpecker\'s settings as well\\n    privileged: true\\n    commands:\\n      # Configure podman to use sigstore attachments for both, the registry you pull from and the registry you push to.\\n      - |\\n        printf \\"docker:\\n          registry.gitlab.com:\\n            use-sigstore-attachments: true\\n          gcr.io:\\n            use-sigstore-attachments: true\\" >> /etc/containers/registries.d/default.yaml\\n\\n      # At pull, check the keyless sigstore signature of the distroless image.\\n      # This is a very strict container policy. It allows pulling from gcr.io/distroless only. Every other registry will be rejected.\\n      # See https://github.com/containers/image/blob/main/docs/containers-policy.json.5.md for more information.\\n\\n      # fulcio CA crt obtained from https://github.com/sigstore/sigstore/blob/main/pkg/tuf/repository/targets/fulcio_v1.crt.pem\\n      # rekor public key obtained from https://github.com/sigstore/sigstore/blob/main/pkg/tuf/repository/targets/rekor.pub\\n      # crt/key data is base64 encoded. --\x3e echo \\"$CERT\\" | base64\\n      - |\\n        printf \'{\\n            \\"default\\": [\\n              {\\n                \\"type\\": \\"reject\\"\\n              }\\n            ],\\n            \\"transports\\": {\\n              \\"docker\\": {\\n                \\"gcr.io/distroless\\": [\\n                  {\\n                    \\"type\\": \\"sigstoreSigned\\",\\n                    \\"fulcio\\": {\\n                      \\"caData\\": \\"LS0tLS1CRUdJTiBDR...QVRFLS0tLS0K\\",\\n                      \\"oidcIssuer\\": \\"https://accounts.google.com\\",\\n                      \\"subjectEmail\\": \\"keyless@distroless.iam.gserviceaccount.com\\"\\n                    },\\n                    \\"rekorPublicKeyData\\": \\"LS0tLS1CRUdJTiBQVUJ...lDIEtFWS0tLS0tCg==\\",\\n                    \\"signedIdentity\\": { \\"type\\": \\"matchRepository\\" }\\n                  }\\n                ]\\n              },\\n              \\"docker-daemon\\": {\\n                \\"\\": [\\n                  {\\n                    \\"type\\": \\"reject\\"\\n                  }\\n                ]\\n              }\\n            }\\n          }\' > /etc/containers/policy.json\\n\\n      # Use this key to sign the built image at push.\\n      - echo \\"$SIGSTORE_PRIVATE_KEY\\" > key.private\\n      # Login at the registry\\n      - echo $REGISTRY_LOGIN_TOKEN | podman login -u <username> --password-stdin registry.gitlab.com\\n      # Build the container image\\n      - podman build --tag registry.gitlab.com/<namespace>/<repository_name>/<image_name>:latest .\\n      # Sign and push the image\\n      - podman push --sign-by-sigstore-private-key ./key.private registry.gitlab.com/<namespace>/<repository_name>/<image_name>:latest\\n\\n    secrets: [sigstore_private_key, registry_login_token]\\n```"},{"id":"debug-pipeline-steps","metadata":{"permalink":"/blog/debug-pipeline-steps","source":"@site/blog/2023-12-13-debug-pipeline-steps/index.md","title":"[Community] Debug pipeline steps","description":"Debug pipeline steps using sshx","date":"2023-12-13T00:00:00.000Z","tags":[{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"debug","permalink":"/blog/tags/debug"}],"readingTime":0.335,"hasTruncateMarker":true,"authors":[{"name":"anbraten","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"[Community] Debug pipeline steps","description":"Debug pipeline steps using sshx","slug":"debug-pipeline-steps","authors":[{"name":"anbraten","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png"}],"hide_table_of_contents":true,"tags":["community","debug"]},"unlisted":false,"prevItem":{"title":"[Community] Podman image build with sigstore","permalink":"/blog/podman-image-build-sigstore"},"nextItem":{"title":"[Community] Podman-in-Podman image builds","permalink":"/blog/podman-image-builds"}},"content":"\x3c!-- cspell:ignore sshx --\x3e\\n\\nSometimes you want to debug a pipeline.\\nTherefore I recently discovered: <https://github.com/ekzhang/sshx>\\n\\n\x3c!-- truncate --\x3e\\n\\nA simple step like should allow you to debug:\\n\\n```yaml\\nsteps:\\n  - name: debug\\n    image: alpine\\n    commands:\\n      - curl -sSf https://sshx.io/get | sh && sshx\\n      #      ^\\n      #      \u2514 This will open a remote terminal session and print the URL. It\\n      #        should take under a second.\\n```"},{"id":"podman-image-builds","metadata":{"permalink":"/blog/podman-image-builds","source":"@site/blog/2023-12-12-podman-image-builds/index.md","title":"[Community] Podman-in-Podman image builds","description":"Build images in Podman with buildah","date":"2023-12-12T00:00:00.000Z","tags":[{"inline":true,"label":"community","permalink":"/blog/tags/community"},{"inline":true,"label":"image","permalink":"/blog/tags/image"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"}],"readingTime":1.14,"hasTruncateMarker":true,"authors":[{"name":"handlebargh","url":"https://github.com/handlebargh","image_url":"https://github.com/handlebargh.png","imageURL":"https://github.com/handlebargh.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"[Community] Podman-in-Podman image builds","description":"Build images in Podman with buildah","slug":"podman-image-builds","authors":[{"name":"handlebargh","url":"https://github.com/handlebargh","image_url":"https://github.com/handlebargh.png","imageURL":"https://github.com/handlebargh.png"}],"hide_table_of_contents":true,"tags":["community","image","podman"]},"unlisted":false,"prevItem":{"title":"[Community] Debug pipeline steps","permalink":"/blog/debug-pipeline-steps"},"nextItem":{"title":"It\'s time for some changes - Woodpecker 2.0.0","permalink":"/blog/release-v200"}},"content":"\x3c!-- cspell:ignore buildah Containerfile roundcube --\x3e\\n\\nI run Woodpecker CI with podman backend instead of docker and just figured out how to build images with buildah. Since I couldn\'t find this anywhere documented, I thought I might as well just share it here.\\n\\n\x3c!-- truncate --\x3e\\n\\nIt\'s actually pretty straight forward. Here\'s what my repository structure looks like:\\n\\n```bash\\n.\\n\u251C\u2500\u2500 roundcube\\n\u2502\xa0\xa0 \u251C\u2500\u2500 Containerfile\\n\u2502\xa0\xa0 \u251C\u2500\u2500 docker-entrypoint.sh\\n\u2502\xa0\xa0 \u2514\u2500\u2500 php.ini\\n\u2514\u2500\u2500 .woodpecker\\n    \u2514\u2500\u2500 .build_roundcube.yml\\n```\\n\\nAs you can see I\'m building a roundcube mail image.\\n\\nThis is the `.woodpecker/.build_roundcube.yaml`\\n\\n```yaml\\nwhen:\\n  event: [cron, manual]\\n  cron: build_roundcube\\n\\nsteps:\\n  build-image:\\n    image: quay.io/buildah/stable:latest\\n    pull: true\\n    privileged: true\\n    commands:\\n      - echo $REGISTRY_LOGIN_TOKEN | buildah login -u <username> --password-stdin registry.gitlab.com\\n      - cd roundcube\\n      - buildah build --tag registry.gitlab.com/<namespace>/<repository_name>/roundcube:latest .\\n      - buildah push registry.gitlab.com/<namespace>/<repository_name>/roundcube:latest\\n\\n    secrets: [registry_login_token]\\n```\\n\\nAs you can see, I\'m using this workflow over at gitlab.com. It should work with GitHub as well, with adjusting the registry login.\\n\\nYou may have to adjust the `when:` to your needs. Furthermore, you must check the `trusted` checkbox in project settings. Therefore, be sure to run trusted code only in this setup.\\n\\nThis seems to work fine so far. I wonder if anybody else made this work a different way.\\n\\nEDIT: Removed the additional step that would run buildah in a podman container. I didn\'t know it could be that easy to be honest."},{"id":"release-v200","metadata":{"permalink":"/blog/release-v200","source":"@site/blog/2023-11-09-release-v2.0.0/index.md","title":"It\'s time for some changes - Woodpecker 2.0.0","description":"Introducing Woodpecker 2.0.0 with more than 350 changes","date":"2023-11-09T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"major","permalink":"/blog/tags/major"}],"readingTime":3.53,"hasTruncateMarker":true,"authors":[{"name":"Anbraten","title":"Maintainer of Woodpecker","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png","socials":{},"key":null,"page":null},{"name":"qwerty287","title":"Maintainer of Woodpecker","url":"https://github.com/qwerty287","image_url":"https://github.com/qwerty287.png","imageURL":"https://github.com/qwerty287.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"It\'s time for some changes - Woodpecker 2.0.0","description":"Introducing Woodpecker 2.0.0 with more than 350 changes","slug":"release-v200","authors":[{"name":"Anbraten","title":"Maintainer of Woodpecker","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png"},{"name":"qwerty287","title":"Maintainer of Woodpecker","url":"https://github.com/qwerty287","image_url":"https://github.com/qwerty287.png","imageURL":"https://github.com/qwerty287.png"}],"tags":["release","major"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"[Community] Podman-in-Podman image builds","permalink":"/blog/podman-image-builds"},"nextItem":{"title":"Presenting Woodpecker 1.0.0","permalink":"/blog/release-v100"}},"content":"We are proud to present you Woodpecker v2.0.0 with more than 350 changes from our fabulous community. This release includes a lot of new features, improvements and some breaking changes which most of you probably already tested using the `next` tag or the RC version.\\n\\n\x3c!--truncate--\x3e\\n\\n## How we plan to handle releases in the future\\n\\nIn the future, there won\'t be backports anymore as they require quite an amount of maintenance. Instead, we\'ll release our current state of the `main` branch with the correct version (according to semver) every few weeks. Of course, critical bug and security fixes are released as soon as possible. To not release new major version too often, we\'ll try to hold back breaking changes pull-request for a longer time and release them all together in a new major version.\\n\\n## Breaking changes\\n\\n### Renamed some api routes\\n\\nWe renamed some API routes to be more consistent. So we suggest admins to update all repository webhooks by clicking on the newly added `Repair all repositories` button in the admin settings.\\n\\n### Dropped deprecated environment variables and CLI commands\\n\\nFor v1.0.0, we deprecated a bunch of old environment variables like `CI_BUILD_*`. These variables were removed in this version, you therefore have to use the new ones.\\nAlso, the deprecated `build` command of the CLI was removed. Use `pipeline` instead.\\n\\n### Removed SSH backend\\n\\nDue to various issues with the SSH backend we decided to remove it.\\nAs an alternative, you can install an agent running the local backend directly on the remote machine or you can simply execute `ssh` commands connecting to the remote server in your pipeline.\\n\\n### Deprecated `platform` filter\\n\\nThe `platform` filter has been removed. Use the more advanced labels instead ([read more](../docs/usage/workflow-syntax#filter-by-platform)).\\n\\n### Update Docker to v24\\n\\nWe updated Docker to v24 as of some security patches. If you use an older version of Docker, you might need to upgrade it.\\n\\n### Removed plugin-only option from secrets\\n\\nSecurity is pretty important to us and we want to make sure that no one can steal your secrets. Therefore, we decided to remove the plugin-only option from secrets and instead, if you define an image filter, it will be automatically only available to plugins using the defined image names.\\n\\n## Migration notes\\n\\nThere have been a few more breaking changes. [Read more about what you need to do when upgrading!](/migrations#200)\\n\\n## New features\\n\\nBut that\'s enough about breaking changes. Let\'s talk about the new features!\\n\\n### Config warnings and errors in the UI\\n\\nYou ever wondered why a secret was not working and after hours of debugging you found out that you misspelled the secret name? Or you used a wrong key in your YAML config? Woodpecker now shows errors and linter warnings directly in it\'s UI, notifying you about missing secrets, incorrect configuration or deprecated settings!\\n\\n![Image of warnings and errors in the UI](./linter_warnings_errors.png)\\n\\n### Repository and organization overview for admins\\n\\nAdmins now get an overview over all repositories and organizations registered on the server, allowing them to perform common actions like deleting directly from the admin dashboard.\\n\\n![Image of repos overview](./admin_repos.png)\\n\\n### Support for user secrets\\n\\nIt is now possible to add secrets for all repos owned by yourself, similar to organization and global secrets.\\n\\n### Bitbucket cloud support for multi-workflows\\n\\nWe enhanced support for Bitbucket, allowing you to use multiple workflows just as you probably know from all other forges already.\\n\\n### Full support for Kubernetes backend\\n\\nMany of you already used it extensively in the past, but now we can finally call the Kubernetes backend ready for production use. Supporting all major features and even quite some Kubernetes specific options.\\n\\n### Auto theme\\n\\nThe UI now supports automatically adapting the theme to your browser config, so no more light mode in the middle of the night!\\n\\n### Update notification\\n\\nUpdates are awesome as they bring new features and bug fixes most of the time, but sometimes there are also important security fixes which should be installed as soon as possible. To not miss any of them, we added a notification to the UI for admins if there\'s a new update available.\\n\\n## Changelog\\n\\nThe full changelog can be viewed in our project source folder at [CHANGELOG.md](https://github.com/woodpecker-ci/woodpecker/blob/v2.0.0/CHANGELOG.md)"},{"id":"release-v100","metadata":{"permalink":"/blog/release-v100","source":"@site/blog/2023-07-28-release-v1.0.0/index.md","title":"Presenting Woodpecker 1.0.0","description":"Introducing Woodpecker 1.0.0 and its new features.","date":"2023-07-28T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"major","permalink":"/blog/tags/major"}],"readingTime":1.62,"hasTruncateMarker":true,"authors":[{"name":"6543","title":"Maintainer of Woodpecker","url":"https://github.com/6543","image_url":"https://github.com/6543.png","imageURL":"https://github.com/6543.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Presenting Woodpecker 1.0.0","description":"Introducing Woodpecker 1.0.0 and its new features.","slug":"release-v100","authors":[{"name":"6543","title":"Maintainer of Woodpecker","url":"https://github.com/6543","image_url":"https://github.com/6543.png","imageURL":"https://github.com/6543.png"}],"tags":["release","major"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"It\'s time for some changes - Woodpecker 2.0.0","permalink":"/blog/release-v200"},"nextItem":{"title":"Welcome Woodpecker\'s blog","permalink":"/blog/hello-blog"}},"content":"We are proud to present you Woodpecker v1.0.0.\\nIt took us quite some time, but now we are sure it\'s ready, and you should really have a look at it.\\n\\n\x3c!--truncate--\x3e\\n\\nWe\'ve refactored a lot of code, so contributing to the codebase should be much easier.\\nFurthermore, a ton of bugs where addressed and various enhancements introduced, along with some highly anticipated features.\\nWith Woodpecker v1.0.0, you can now substantially improve and streamline your code pipelines,\\nempowering you to automate and optimize workflows like never before.\\n\\n## Some picked highlights\\n\\n### Add Support for Cron Jobs\\n\\nAutomate recurring tasks with ease using Woodpecker\'s new cron jobs feature.\\nSchedule pipelines to run at specified intervals or times, optimizing repetitive workflows.\\n[Read more](/docs/1.0/usage/cron)\\n\\n### YAML Map Merge, Overrides, and Sequence Merge Support\\n\\nWith enhanced YAML support, managing complex configurations becomes a breeze.\\nMerge maps, apply overrides, and sequence merging\u2014all within your YAML files.\\nThis is providing more flexibility and control over your pipelines.\\n[Read more](/docs/1.0/usage/advanced-yaml-syntax)\\n\\n### Web-UI for Admins\\n\\nSimplify administration tasks with Woodpecker\'s new Admin UI.\\nEffortlessly manage user accounts, agents, and tasks, including adding new agents or pausing the task queue for maintenance.\\n\\n![Image of admin queue view](./admin_queue_ui.png)\\n\\n### Localize Web-UI\\n\\nEmbrace internationalization by changing your locale in the user settings.\\nInteract with Woodpecker in the language of your choice, tailored to your preferences.\\nIf your language is not available or only partially translated, consider contributing to our [Weblate](https://translate.woodpecker-ci.org/engage/woodpecker-ci/).\\n\\n### Add `evaluate` to `when` Filter\\n\\nEnhance pipeline flexibility with the new \\"when evaluate\\" filter, enabling or disabling steps based on custom conditions.\\nCustomize your workflows to dynamically respond to specific triggers and events.\\n[Read more](/docs/1.0/usage/pipeline-syntax#evaluate)\\n\\n### Global- and Organization-Secrets\\n\\nSave time and effort by declaring secrets for your entire instance or organization.\\nSimplify your workflow and securely manage sensitive information across projects.\\n\\n![Image of settings view of org secrets](./org_secrets.png)\\n\\n## Changelog\\n\\nThe full changelog can be viewed in our project source folder at [CHANGELOG.md](https://github.com/woodpecker-ci/woodpecker/blob/v1.0.0/CHANGELOG.md)"},{"id":"hello-blog","metadata":{"permalink":"/blog/hello-blog","source":"@site/blog/2023-06-11-hello-blog/index.md","title":"Welcome Woodpecker\'s blog","description":"This our first post on Woodpecker","date":"2023-06-11T00:00:00.000Z","tags":[{"inline":true,"label":"hello","permalink":"/blog/tags/hello"},{"inline":true,"label":"woodpecker","permalink":"/blog/tags/woodpecker"}],"readingTime":0.395,"hasTruncateMarker":true,"authors":[{"name":"Anbraten","title":"Maintainer of Woodpecker","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Welcome Woodpecker\'s blog","description":"This our first post on Woodpecker","slug":"hello-blog","authors":[{"name":"Anbraten","title":"Maintainer of Woodpecker","url":"https://github.com/anbraten","image_url":"https://github.com/anbraten.png","imageURL":"https://github.com/anbraten.png"}],"tags":["hello","woodpecker"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Presenting Woodpecker 1.0.0","permalink":"/blog/release-v100"}},"content":"Welcome to this blog. This is our first post on this blog ...\\n\\n\x3c!--truncate--\x3e\\n\\nIn the future we will post about our releases and other things like tutorials.\\n\\nWe are currently working on the `1.0.0` release of Woodpecker. This release will include a lot of new features and improvements which most of you probably already tested using the `next` tag.\\n\\nIf you have any suggestions or ideas for posts, feel free to open an issue in the [GitHub repository](https://github.com/woodpecker-ci/woodpecker)."}]}}')}}]);