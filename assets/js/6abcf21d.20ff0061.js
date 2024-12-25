"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["4432"],{32599:function(L){L.exports=JSON.parse('{"name":"Gitea Generic Package","url":"https://codeberg.org/woodpecker-plugins/docker-buildx","icon":"https://raw.githubusercontent.com/go-gitea/gitea/main/assets/logo.svg","description":"Plugin to Publish Artifacts to Gitea Generic Package Registry.","docs":"<h1>Overview</h1>\\n<p>Woodpecker CI plugin to upload any file to the <em>Gitea Generic Package Registry</em>.</p>\\n<p>For details about the features and limits of the <em>Generic Package Registry</em> their <a href=\\"https://docs.gitea.com/usage/packages/generic\\">docs</a>.</p>\\n<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>user</code></td>\\n<td><em>none</em></td>\\n<td>Gitea user for basic auth</td>\\n</tr>\\n<tr>\\n<td><code>password</code></td>\\n<td><em>none</em></td>\\n<td>Password for basic auth</td>\\n</tr>\\n<tr>\\n<td><code>debug</code></td>\\n<td><em>none</em></td>\\n<td>Enables debug output if it\'s set to <code>true</code>.</td>\\n</tr>\\n<tr>\\n<td><code>owner</code></td>\\n<td><em>none</em></td>\\n<td>Package owner</td>\\n</tr>\\n<tr>\\n<td><code>package_name</code></td>\\n<td><em>none</em></td>\\n<td>The package name</td>\\n</tr>\\n<tr>\\n<td><code>package_version</code></td>\\n<td><em>none</em></td>\\n<td>Package version</td>\\n</tr>\\n<tr>\\n<td><code>file_source</code></td>\\n<td><em>none</em></td>\\n<td>File source path for upload.</td>\\n</tr>\\n<tr>\\n<td><code>file_name</code></td>\\n<td><em>none</em></td>\\n<td>Package file name</td>\\n</tr>\\n<tr>\\n<td><code>update</code></td>\\n<td><code>false</code></td>\\n<td>Allow update existing package files</td>\\n</tr>\\n</tbody></table>\\n<h2>Examples</h2>\\n<pre><code class=\\"language-yaml\\">when:\\n  - event: [pull_request, tag, cron]\\n  - event: push\\n    branch:\\n      - ${CI_REPO_DEFAULT_BRANCH}\\n\\ndepends_on:\\n  - \\"ci\\"\\n\\nsteps:\\n  next:\\n    image: ocram85/plugin-gitea-package:latest\\n    pull: true\\n    secrets: [ gitea_user, gitea_passwd]\\n    settings:\\n      user:\\n        from_secret: gitea_user\\n      password:\\n        from_secret: gitea_passwd\\n      debug: \\"true\\"\\n      owner: \\"plugins\\"\\n      package_name: \\"dummy_package\\"\\n      package_version: \\"0.1.0\\"\\n      file_source: \\"./README.md\\"\\n      file_name: \\"readme.md\\"\\n      update: \\"true\\"\\n    when:\\n      event: pull_request\\n      branch: ${CI_REPO_DEFAULT_BRANCH}\\n</code></pre>\\n","tags":["Gitea","publish-package","container","build"],"author":"OCram85","containerImage":"ocram85/plugin-gitea-package","containerImageUrl":"https://hub.docker.com/r/ocram85/plugin-gitea-package","verified":false,"iconDataUrl":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJtYWluX291dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIKCSB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NDAgNjQwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NDAgNjQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggaWQ9InRlYWJhZyIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZD0iTTM5NS45LDQ4NC4ybC0xMjYuOS02MWMtMTIuNS02LTE3LjktMjEuMi0xMS44LTMzLjhsNjEtMTI2LjljNi0xMi41LDIxLjItMTcuOSwzMy44LTExLjgKCQljMTcuMiw4LjMsMjcuMSwxMywyNy4xLDEzbC0wLjEtMTA5LjJsMTYuNy0wLjFsMC4xLDExNy4xYzAsMCw1Ny40LDI0LjIsODMuMSw0MC4xYzMuNywyLjMsMTAuMiw2LjgsMTIuOSwxNC40CgkJYzIuMSw2LjEsMiwxMy4xLTEsMTkuM2wtNjEsMTI2LjlDNDIzLjYsNDg0LjksNDA4LjQsNDkwLjMsMzk1LjksNDg0LjJ6Ii8+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzYwOTkyNiIgZD0iTTYyMi43LDE0OS44Yy00LjEtNC4xLTkuNi00LTkuNi00cy0xMTcuMiw2LjYtMTc3LjksOGMtMTMuMywwLjMtMjYuNSwwLjYtMzkuNiwwLjdjMCwzOS4xLDAsNzguMiwwLDExNy4yCgkJCQljLTUuNS0yLjYtMTEuMS01LjMtMTYuNi03LjljMC0zNi40LTAuMS0xMDkuMi0wLjEtMTA5LjJjLTI5LDAuNC04OS4yLTIuMi04OS4yLTIuMnMtMTQxLjQtNy4xLTE1Ni44LTguNQoJCQkJYy05LjgtMC42LTIyLjUtMi4xLTM5LDEuNWMtOC43LDEuOC0zMy41LDcuNC01My44LDI2LjlDLTQuOSwyMTIuNCw2LjYsMjc2LjIsOCwyODUuOGMxLjcsMTEuNyw2LjksNDQuMiwzMS43LDcyLjUKCQkJCWM0NS44LDU2LjEsMTQ0LjQsNTQuOCwxNDQuNCw1NC44czEyLjEsMjguOSwzMC42LDU1LjVjMjUsMzMuMSw1MC43LDU4LjksNzUuNyw2MmM2MywwLDE4OC45LTAuMSwxODguOS0wLjFzMTIsMC4xLDI4LjMtMTAuMwoJCQkJYzE0LTguNSwyNi41LTIzLjQsMjYuNS0yMy40czEyLjktMTMuOCwzMC45LTQ1LjNjNS41LTkuNywxMC4xLTE5LjEsMTQuMS0yOGMwLDAsNTUuMi0xMTcuMSw1NS4yLTIzMS4xCgkJCQlDNjMzLjIsMTU3LjksNjI0LjcsMTUxLjgsNjIyLjcsMTQ5Ljh6IE0xMjUuNiwzNTMuOWMtMjUuOS04LjUtMzYuOS0xOC43LTM2LjktMTguN1M2OS42LDMyMS44LDYwLDI5NS40CgkJCQljLTE2LjUtNDQuMi0xLjQtNzEuMi0xLjQtNzEuMnM4LjQtMjIuNSwzOC41LTMwYzEzLjgtMy43LDMxLTMuMSwzMS0zLjFzNy4xLDU5LjQsMTUuNyw5NC4yYzcuMiwyOS4yLDI0LjgsNzcuNywyNC44LDc3LjcKCQkJCVMxNDIuNSwzNTkuOSwxMjUuNiwzNTMuOXogTTQyNS45LDQ2MS41YzAsMC02LjEsMTQuNS0xOS42LDE1LjRjLTUuOCwwLjQtMTAuMy0xLjItMTAuMy0xLjJzLTAuMy0wLjEtNS4zLTIuMWwtMTEyLjktNTUKCQkJCWMwLDAtMTAuOS01LjctMTIuOC0xNS42Yy0yLjItOC4xLDIuNy0xOC4xLDIuNy0xOC4xTDMyMiwyNzNjMCwwLDQuOC05LjcsMTIuMi0xM2MwLjYtMC4zLDIuMy0xLDQuNS0xLjVjOC4xLTIuMSwxOCwyLjgsMTgsMi44CgkJCQlsMTEwLjcsNTMuN2MwLDAsMTIuNiw1LjcsMTUuMywxNi4yYzEuOSw3LjQtMC41LDE0LTEuOCwxNy4yQzQ3NC42LDM2My44LDQyNS45LDQ2MS41LDQyNS45LDQ2MS41eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNjA5OTI2IiBkPSJNMzI2LjgsMzgwLjFjLTguMiwwLjEtMTUuNCw1LjgtMTcuMywxMy44Yy0xLjksOCwyLDE2LjMsOS4xLDIwYzcuNyw0LDE3LjUsMS44LDIyLjctNS40CgkJCQljNS4xLTcuMSw0LjMtMTYuOS0xLjgtMjMuMWwyNC00OS4xYzEuNSwwLjEsMy43LDAuMiw2LjItMC41YzQuMS0wLjksNy4xLTMuNiw3LjEtMy42YzQuMiwxLjgsOC42LDMuOCwxMy4yLDYuMQoJCQkJYzQuOCwyLjQsOS4zLDQuOSwxMy40LDcuM2MwLjksMC41LDEuOCwxLjEsMi44LDEuOWMxLjYsMS4zLDMuNCwzLjEsNC43LDUuNWMxLjksNS41LTEuOSwxNC45LTEuOSwxNC45CgkJCQljLTIuMyw3LjYtMTguNCw0MC42LTE4LjQsNDAuNmMtOC4xLTAuMi0xNS4zLDUtMTcuNywxMi41Yy0yLjYsOC4xLDEuMSwxNy4zLDguOSwyMS4zYzcuOCw0LDE3LjQsMS43LDIyLjUtNS4zCgkJCQljNS02LjgsNC42LTE2LjMtMS4xLTIyLjZjMS45LTMuNywzLjctNy40LDUuNi0xMS4zYzUtMTAuNCwxMy41LTMwLjQsMTMuNS0zMC40YzAuOS0xLjcsNS43LTEwLjMsMi43LTIxLjMKCQkJCWMtMi41LTExLjQtMTIuNi0xNi43LTEyLjYtMTYuN2MtMTIuMi03LjktMjkuMi0xNS4yLTI5LjItMTUuMnMwLTQuMS0xLjEtNy4xYy0xLjEtMy4xLTIuOC01LjEtMy45LTYuM2M0LjctOS43LDkuNC0xOS4zLDE0LjEtMjkKCQkJCWMtNC4xLTItOC4xLTQtMTIuMi02LjFjLTQuOCw5LjgtOS43LDE5LjctMTQuNSwyOS41Yy02LjctMC4xLTEyLjksMy41LTE2LjEsOS40Yy0zLjQsNi4zLTIuNywxNC4xLDEuOSwxOS44CgkJCQlDMzQzLjIsMzQ2LjUsMzM1LDM2My4zLDMyNi44LDM4MC4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}')}}]);