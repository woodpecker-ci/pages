"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5268],{8352:e=>{e.exports=JSON.parse('{"name":"MkDocs","url":"https://codeberg.org/woodpecker-plugins/mkdocs","icon":"https://codeberg.org/woodpecker-plugins/mkdocs/raw/branch/main/mkdocs-icon.png","description":"Plugin to build mkdocs sites","docs":"<h2>Setup</h2>\\n<p>Add the following to your woodpecker file\'s <code>steps</code> section to build docs using the default installation (See <code>Bundled libraries</code> below) and settings of this plugin.<br>Make sure to replace <code>{version}</code> with the latest release available or with <code>latest</code> for the latest commit made.</p>\\n<pre><code class=\\"language-yaml\\">buildDocs:\\n  image: woodpeckerci/plugin-mkdocs:{version}\\n</code></pre>\\n<p>A minimal version without any bundled libraries is offered too. Use the following to use the minimal version:</p>\\n<pre><code class=\\"language-yaml\\">buildDocs:\\n  image: woodpeckerci/plugin-mkdocs:minimal\\n</code></pre>\\n<p>Settings can be defined using the <code>settings</code> option for woodpecker plugins. All available settings and their defaults are listed below.</p>\\n<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>clean</code></td>\\n<td><code>true</code></td>\\n<td>remove old files from the <code>site_dir</code> before building</td>\\n</tr>\\n<tr>\\n<td><code>site_dir</code></td>\\n<td><code>site_dir</code> config option or <code>site</code></td>\\n<td>directory to output the result of the documentation build, if also not set in config <code>site</code> is used</td>\\n</tr>\\n<tr>\\n<td><code>directory_urls</code></td>\\n<td><code>true</code></td>\\n<td>use directory URLs when building pages</td>\\n</tr>\\n<tr>\\n<td><code>config</code></td>\\n<td><code>mkdocs.yml</code></td>\\n<td>provide a specific MkDocs config</td>\\n</tr>\\n<tr>\\n<td><code>strict</code></td>\\n<td><code>false</code></td>\\n<td>will cause MkDocs to abort the build on any warnings</td>\\n</tr>\\n<tr>\\n<td><code>theme</code></td>\\n<td><code>mkdocs</code></td>\\n<td>theme to use when building your documentation (<code>mkdocs</code> or <code>readthedocs</code>). Other themes need to be installed manually using <code>pip_install</code></td>\\n</tr>\\n<tr>\\n<td><code>verbose</code></td>\\n<td><code>false</code></td>\\n<td>enable verbose mode</td>\\n</tr>\\n<tr>\\n<td><code>pip_install_file</code></td>\\n<td><em>none</em></td>\\n<td>Add a file to install dependencies from using <code>pip install -r &lt;file&gt;</code> before mkdocs is exec</td>\\n</tr>\\n<tr>\\n<td><code>pip_install</code></td>\\n<td><em>none</em></td>\\n<td>Add comma separated packages to be installed by pip before mkdocs is exec</td>\\n</tr>\\n</tbody></table>\\n<h2>Bundled libraries</h2>\\n<p>The plugin base is <a href=\\"https://hub.docker.com/r/squidfunk/mkdocs-material\\"><code>squidfunk/mkdocs-material</code></a>. For all the non-minimal images, the following additional dependencies are bundled:</p>\\n<ul>\\n<li><code>mkdocs-enumerate-headings-plugin</code></li>\\n<li><code>mkdocs-git-authors-plugin</code></li>\\n<li><code>mkdocs-git-revision-date-localized</code></li>\\n<li><code>mkdocs-glightbox</code></li>\\n<li><code>mkdocs-print-site-plugin</code></li>\\n</ul>\\n","tags":["mkdocs","docs"],"author":"Woodpecker Authors","containerImage":"woodpeckerci/plugin-mkdocs","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-mkdocs","verified":true}')}}]);