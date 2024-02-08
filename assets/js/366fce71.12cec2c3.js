"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1e3],{96858:t=>{t.exports=JSON.parse('{"name":"Gitea Comment","url":"https://github.com/markopolo123/gitea-comment-plugin","description":"Plugin to add comments to a Gitea Pull Request","docs":"<p>A Woodpecker plugin to post comments onto a Gitea Pull Request.</p>\\n<h2>Usage</h2>\\n<p>Example pipeline:</p>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n  comment:\\n    image: mcs94/gitea-comment\\n    settings:\\n      gitea_address: https://gitea.url.goes.here\\n      gitea_token:\\n        from_secret: gitea_token\\n      comment: &gt;\\n        \u2705 Build ${CI_BUILD_EVENT} of `${CI_REPO_NAME}` has status `${CI_BUILD_STATUS}`.\\n\\n        \ud83d\udcdd Commit by ${CI_COMMIT_AUTHOR} on `${CI_COMMIT_BRANCH}`:\\n\\n        `${CI_COMMIT_MESSAGE}`\\n\\n        \ud83c\udf10 ${CI_BUILD_LINK}\\n    when:\\n      event: [pull_request]\\n</code></pre>\\n<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Name</th>\\n<th>Description</th>\\n<th>Default</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>gitea_address</code></td>\\n<td>URL for your gitea instance</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>gitea_token</code></td>\\n<td>Gitea API token</td>\\n<td>none</td>\\n</tr>\\n<tr>\\n<td><code>comment</code></td>\\n<td>comment to add to Pull Request</td>\\n<td>none</td>\\n</tr>\\n</tbody></table>\\n","tags":["Gitea","comment"],"author":"markopolo123","containerImage":"mcs94/gitea-comment","containerImageUrl":"https://hub.docker.com/r/mcs94/gitea-comment","verified":false}')}}]);