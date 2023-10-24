"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[255],{2984:e=>{e.exports=JSON.parse('{"name":"Aptly","url":"https://gitea.zionetrix.net/bn8/aptly-publish","icon":"https://www.aptly.info/img/logo.svg","description":"plugin to publish Debian package on a Aptly repository","docs":"<p>Woodpecker CI plugin to publish one (or more) Debian package on a Aptly repository using its API.</p>\\n<h2>Features</h2>\\n<p>This plugin will try to :</p>\\n<ul>\\n<li>List all changes files in the specified directory and filter on the specified source package name (if specified)</li>\\n<li>Iter on detected changes files and foreach of then:</li>\\n<li>the changes file is parsed to detect the source package name, the distribution and included files</li>\\n<li>the repository name is computed (if not specified). <strong>Format:</strong> <code>{prefix}_{distribution}_{component}</code>. <strong>Note:</strong> if the default prefix is specified (<code>.</code>), it will not be used to compute the repository name.</li>\\n<li>the current published distribution is retreived using APTLY Publish API to:<ul>\\n<li>check it was already manally published a first time</li>\\n<li>check it used a snapshot kind of sources</li>\\n<li>retreive other components source snapshot</li>\\n</ul>\\n</li>\\n<li>Upload the changes file and all its included files using APTLY File Upload API in a directory named as the source package</li>\\n<li>Include the changes file using APTLY Local Repos API</li>\\n<li>Compute a snapshot name for the repository based on the current date and the repository name. <strong>Format:</strong> <code>YYYYMMDD-HHMMSS_{repository name}</code></li>\\n<li>Create a snapshot of the repository using APTLY Local Repos API</li>\\n<li>Update the published distribution with this new snapshot as source of the specified component and keeping other components source snapshot.</li>\\n</ul>\\n<p>In case of error, it will exit with a detailed error message (within the limits of what is provided by the Aptly API).</p>\\n<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>api_url</code></td>\\n<td><em>none</em></td>\\n<td>Your Aptly API URL (required)</td>\\n</tr>\\n<tr>\\n<td><code>api_username</code></td>\\n<td><em>none</em></td>\\n<td>Username to authenticate on your Aptly API (required)</td>\\n</tr>\\n<tr>\\n<td><code>api_password</code></td>\\n<td><em>none</em></td>\\n<td>Password to authenticate on your Aptly API (required)</td>\\n</tr>\\n<tr>\\n<td><code>prefix</code></td>\\n<td><code>.</code></td>\\n<td>The publishing prefix</td>\\n</tr>\\n<tr>\\n<td><code>repo_component</code></td>\\n<td><code>main</code></td>\\n<td>The component name to publish on</td>\\n</tr>\\n<tr>\\n<td><code>repo_name</code></td>\\n<td><code>{prefix}_{distribution}_{component}</code></td>\\n<td>The repository name to publish on. If not specified, it will be computed using the specified prefix and component and the detected package distribution. See above for details.</td>\\n</tr>\\n<tr>\\n<td><code>path</code></td>\\n<td><code>dist</code></td>\\n<td>Path to the directory where files to publish are stored</td>\\n</tr>\\n<tr>\\n<td><code>source_name</code></td>\\n<td><em>none</em></td>\\n<td>Name of the source package to publish (optional, default: all <code>changes</code> files are will be publish)</td>\\n</tr>\\n<tr>\\n<td><code>max_retries</code></td>\\n<td><em>none</em></td>\\n<td>The number of retry in case of error calling the Aptly API (optional, default: no retry)</td>\\n</tr>\\n</tbody></table>\\n<h2>Example</h2>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n  publish:\\n    image: brenard/aptly-publish\\n    settings:\\n      api_url: https://your.aptly.tld/api\\n      api_username: myproject\\n      api_password:\\n        from_secret: aptly_api_password\\n      prefix: debian\\n      repo_component: main\\n      repo_name: debian_stable_main\\n      path: dist\\n      source_name: myproject\\n      max_retries: 2\\n</code></pre>\\n","tags":["APT","aptly","publish"],"containerImage":"brenard/aptly-publish","containerImageUrl":"https://hub.docker.com/r/brenard/aptly-publish","verified":false}')}}]);