"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4142],{31037:e=>{e.exports=JSON.parse('{"name":"Reviewdog ESLint","url":"https://codeberg.org/woodpecker-plugins/reviewdog-eslint","icon":"https://woodpecker-ci.org/img/logo.svg","description":"plugin to do code review using ESLint using Woodpecker CI pull request builds","docs":"<p>Woodpecker CI plugin check code with ESLint and report results\\nas Pull Request code review using Reviewdog.</p>\\n<h2>Features</h2>\\n<ul>\\n<li>Automatically detect Forge platform and URL</li>\\n<li>Support multiple forges - Gitea, Github, Gitlab</li>\\n</ul>\\n<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>token</code></td>\\n<td><em>none</em></td>\\n<td>sets Forge API token for</td>\\n</tr>\\n<tr>\\n<td><code>path</code></td>\\n<td><em>workspace</em></td>\\n<td>sets the working direcotry to run eslint in</td>\\n</tr>\\n<tr>\\n<td><code>patterns</code></td>\\n<td><code>.</code></td>\\n<td>list of file patterns to run eslint on</td>\\n</tr>\\n<tr>\\n<td><code>extensions</code></td>\\n<td><em>none</em></td>\\n<td>list of file extensions to lint</td>\\n</tr>\\n<tr>\\n<td><code>config</code></td>\\n<td><em>none</em></td>\\n<td>sets the custom configuration file path to use</td>\\n</tr>\\n<tr>\\n<td><code>no-config</code></td>\\n<td><code>false</code></td>\\n<td>sets to not use configuation file</td>\\n</tr>\\n<tr>\\n<td><code>ignore-path</code></td>\\n<td><code>.eslintignore</code> or <code>.gitignore</code></td>\\n<td>path to pattern ignore file</td>\\n</tr>\\n<tr>\\n<td><code>ignore-patterns</code></td>\\n<td><em>none</em></td>\\n<td>list of file patterns to exclude from linting</td>\\n</tr>\\n</tbody></table>\\n<h2>Advanced settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>debug</code></td>\\n<td><code>false</code></td>\\n<td>Enable debug mode</td>\\n</tr>\\n</tbody></table>\\n<h2>Examples</h2>\\n<pre><code class=\\"language-yaml\\">  review:\\n    image: woodpeckerci/plugin-reviewdog-eslint\\n    settings:\\n      token:\\n        from_secret: botuser_token\\n    when:\\n      event: pull_request\\n</code></pre>\\n","tags":["woodpecker","reviewdog","eslint","pipeline"],"containerImage":"woodpeckerci/plugin-reviewdog-eslint","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-reviewdog-eslint","verified":true}')}}]);