"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3671],{2006:function(e){e.exports=JSON.parse('[{"name":"Git Plugin","repoName":"plugin-git","url":"https://github.com/woodpecker-ci/plugin-git","icon":"https://woodpecker-ci.org/img/logo.svg","description":"This is the default plugin for the clone step.","docs":"<p>This plugin is automatically introduced into your pipeline as the first step.\\nIts purpose is to clone your Git repository.</p>\\n<h2 id=\\"features\\">Features</h2>\\n<ul>\\n<li>Git LFS support is enabled by default.</li>\\n<li>Fetch tags when needed.</li>\\n<li>Ajust submodules.</li>\\n</ul>\\n<h2 id=\\"overriding-settings\\">Overriding Settings</h2>\\n<p>You can manually define your <code>clone</code> step in order to change plugin or override some of the default settings.\\nConsult <a href=\\"https://woodpecker-ci.org/docs/usage/pipeline-syntax#clone\\">the <code>clone</code> section of the pipeline documentation</a> for more information;\\nthis documentation page only describes this plugin.</p>\\n<pre><code class=\\"language-yaml\\">clone:\\n  git:\\n    image: woodpeckerci/plugin-git\\n  settings:\\n    depth: 50\\n    lfs: false\\n</code></pre>\\n<h2 id=\\"settings\\">Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>depth</code></td>\\n<td><em>none</em></td>\\n<td>If specified, uses git&#39;s <code>--depth</code> option to create a shallow clone with a limited number of commits</td>\\n</tr>\\n<tr>\\n<td><code>lfs</code></td>\\n<td><code>true</code></td>\\n<td>Set this to <code>false</code> to disable retrieval of LFS files</td>\\n</tr>\\n<tr>\\n<td><code>recursive</code></td>\\n<td><code>false</code></td>\\n<td>Clones submodules recursively</td>\\n</tr>\\n<tr>\\n<td><code>skip_verify</code></td>\\n<td><code>false</code></td>\\n<td>Skips the SSL verification</td>\\n</tr>\\n<tr>\\n<td><code>tags</code></td>\\n<td><code>false</code></td>\\n<td>Fetches tags when set to true</td>\\n</tr>\\n<tr>\\n<td><code>submodule_overrides</code></td>\\n<td><em>none</em></td>\\n<td>Override submodule urls</td>\\n</tr>\\n<tr>\\n<td><code>submodule_update_remote</code></td>\\n<td><code>false</code></td>\\n<td>Pass the --remote flag to git submodule update</td>\\n</tr>\\n<tr>\\n<td><code>custom_ssl_path</code></td>\\n<td><em>none</em></td>\\n<td>Set path to custom cert</td>\\n</tr>\\n<tr>\\n<td><code>custom_ssl_url</code></td>\\n<td><em>none</em></td>\\n<td>Set url to custom cert</td>\\n</tr>\\n<tr>\\n<td><code>backoff</code></td>\\n<td><code>5sec</code></td>\\n<td>Change backoff duration</td>\\n</tr>\\n<tr>\\n<td><code>attempts</code></td>\\n<td><code>5</code></td>\\n<td>Change backoff attempts</td>\\n</tr>\\n</tbody></table>\\n"},{"name":"Surge preview plugin","repoName":"plugin-surge-preview","url":"https://github.com/woodpecker-ci/plugin-surge-preview","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to create static pages deployments as preview environments on pull-requests.","docs":"<p>The surge-preview plugin uploads a files of a directory to the CDN of <a href=\\"https://surge.sh/\\">surge.sh</a> it automatically generates an url and posts the status of the deployment with an url as a comment to the pull-request. After closing a pull-request it automatically destroys the preview environment again.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<p>To use the plugin add a step similar to the following one to your Woodpecker pipeline config:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  preview:\\n    image: woodpeckerci/plugin-surge-preview\\n    settings:\\n      path: dist/ # path to directory to publish files from\\n      surge_token: xxx # install surge cli and run `surge token`: https://surge.sh/help/getting-started-with-surge\\n      forge_type: github # or gitea, gitlab, ...\\n      forge_url: https://github.com # or https://codeberg.org, https://gitlab.com, ...\\n      forge_repo_token: xxx # access token for your forge\\n    when:\\n      event: pull_request\\n</code></pre>\\n"},{"name":"S3 Plugin","repoName":"plugin-s3","url":"https://github.com/woodpecker-ci/plugin-s3","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to publish files and artifacts to Amazon S3 or Minio.","docs":"<p>The S3 plugin uploads files and build artifacts to your S3 bucket, or S3-compatible bucket such as Minio.\\nThe below pipeline configuration demonstrates simple usage:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      access_key: a50d28f4dd477bc184fbd10b376de753\\n      secret_key: bc5785d3ece6a9cdefa42eb99b58986f9095ff1c\\n      source: public/**/*\\n      target: /target/location\\n</code></pre>\\n<p>Source the aws credentials from secrets:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      secrets: [aws_access_key_id, aws_secret_access_key]\\n      bucket: my-bucket-name\\n      access_key: $aws_access_key_id\\n      secret_key: $aws_secret_access_key\\n      source: public/**/*\\n      target: /target/location\\n</code></pre>\\n<p>Use the build number in the S3 target prefix:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location/${CI_BUILD_NUMBER}\\n</code></pre>\\n<p>Override the default acl and region:</p>\\n<pre><code class=\\"language-yml\\">steps:\\n- name: upload\\n  image: woodpeckerci/plugin-s3\\n  settings:\\n    bucket: my-bucket-name\\n    acl: public-read\\n    region: us-east-1\\n    source: public/**/*\\n    target: /target/location\\n</code></pre>\\n<p>Configure the plugin to strip path prefixes when uploading:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      strip_prefix: public/\\n</code></pre>\\n<p>Configure the plugin to exclude files from upload:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      exclude:\\n        - **/*.xml\\n</code></pre>\\n<p>Configure the plugin to connect to a Minio server:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      path_style: true\\n      endpoint: https://play.minio.io:9000\\n</code></pre>\\n<h1 id=\\"parameter-reference\\">Parameter Reference</h1>\\n<p>endpoint\\n: custom endpoint URL (optional, to use a S3 compatible non-Amazon service)</p>\\n<p>access_key\\n: amazon key (optional)</p>\\n<p>secret_key\\n: amazon secret key (optional)</p>\\n<p>bucket\\n: bucket name</p>\\n<p>region\\n: bucket region (<code>us-east-1</code>, <code>eu-west-1</code>, etc)</p>\\n<p>acl\\n: access to files that are uploaded (<code>private</code>, <code>public-read</code>, etc)</p>\\n<p>source\\n: source location of the files, using a glob matching pattern. Location must be within the woodpecker workspace.</p>\\n<p>target\\n: target location of files in the bucket</p>\\n<p>encryption\\n: if provided, use server-side encryption</p>\\n<p>strip_prefix\\n: strip the prefix from source path</p>\\n<p>exclude\\n: glob exclusion patterns</p>\\n<p>path_style\\n: whether path style URLs should be used (true for minio)</p>\\n"},{"name":"Demo Plugin","repoName":"plugin-demo","url":"https://github.com/woodpecker-ci/plugin-demo","icon":"https://woodpecker-ci.org/img/logo.svg","description":"This is a sample plugin for Woodpecker-CI.","docs":"<p>You can write content using <a href=\\"https://github.github.com/gfm/\\">GitHub-flavored Markdown syntax</a>.</p>\\n<h2 id=\\"markdown-syntax\\">Markdown Syntax</h2>\\n<p>To serve as an example page when styling markdown based Docusaurus sites.</p>\\n<h2 id=\\"headers\\">Headers</h2>\\n<h1 id=\\"h1---create-the-best-documentation\\">H1 - Create the best documentation</h1>\\n<h2 id=\\"h2---create-the-best-documentation\\">H2 - Create the best documentation</h2>\\n<h3 id=\\"h3---create-the-best-documentation\\">H3 - Create the best documentation</h3>\\n<h4 id=\\"h4---create-the-best-documentation\\">H4 - Create the best documentation</h4>\\n<h5 id=\\"h5---create-the-best-documentation\\">H5 - Create the best documentation</h5>\\n<h6 id=\\"h6---create-the-best-documentation\\">H6 - Create the best documentation</h6>\\n<hr>\\n<h2 id=\\"emphasis\\">Emphasis</h2>\\n<p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>\\n<p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>\\n<p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>\\n<p>Strikethrough uses two tildes. <del>Scratch this.</del></p>\\n<hr>\\n<h2 id=\\"lists\\">Lists</h2>\\n<ol>\\n<li>First ordered list item</li>\\n<li>Another item<ul>\\n<li>Unordered sub-list.</li>\\n</ul>\\n</li>\\n<li>Actual numbers don&#39;t matter, just that it&#39;s a number<ol>\\n<li>Ordered sub-list</li>\\n</ol>\\n</li>\\n<li>And another item.</li>\\n</ol>\\n<ul>\\n<li>Unordered list can use asterisks</li>\\n</ul>\\n<ul>\\n<li>Or minuses</li>\\n</ul>\\n<ul>\\n<li>Or pluses</li>\\n</ul>\\n<hr>\\n<h2 id=\\"links\\">Links</h2>\\n<p><a href=\\"https://www.google.com/\\">I&#39;m an inline-style link</a></p>\\n<p><a href=\\"https://www.google.com/\\" title=\\"Google&#39;s Homepage\\">I&#39;m an inline-style link with title</a></p>\\n<p><a href=\\"https://www.mozilla.org/\\">I&#39;m a reference-style link</a></p>\\n<p><a href=\\"http://slashdot.org/\\">You can use numbers for reference-style link definitions</a></p>\\n<p>Or leave it empty and use the <a href=\\"http://www.reddit.com/\\">link text itself</a>.</p>\\n<p>URLs and URLs in angle brackets will automatically get turned into links. <a href=\\"http://www.example.com/\\">http://www.example.com/</a> or <a href=\\"http://www.example.com/\\">http://www.example.com/</a> and sometimes example.com (but not on GitHub, for example).</p>\\n<p>Some text to show that the reference links can follow later.</p>\\n<hr>\\n<h2 id=\\"images\\">Images</h2>\\n<p>Here&#39;s our logo (hover to see the title text):</p>\\n<p>Inline-style: <img src=\\"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png\\" alt=\\"alt text\\" title=\\"Logo Title Text 1\\"></p>\\n<p>Reference-style: <img src=\\"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png\\" alt=\\"alt text\\" title=\\"Logo Title Text 2\\"></p>\\n<p>Images from any folder can be used by providing path to file. Path should be relative to markdown file.</p>\\n<p><img src=\\"../static/img/logo.svg\\" alt=\\"img\\"></p>\\n<hr>\\n<h2 id=\\"code\\">Code</h2>\\n<pre><code class=\\"language-javascript\\">var s = &#39;JavaScript syntax highlighting&#39;;\\nalert(s);\\n</code></pre>\\n<pre><code class=\\"language-python\\">s = &quot;Python syntax highlighting&quot;\\nprint(s)\\n</code></pre>\\n<pre><code>No language indicated, so no syntax highlighting.\\nBut let&#39;s throw in a &lt;b&gt;tag&lt;/b&gt;.\\n</code></pre>\\n<pre><code class=\\"language-js\\">function highlightMe() {\\n  console.log(&#39;This line can be highlighted!&#39;);\\n}\\n</code></pre>\\n<hr>\\n<h2 id=\\"tables\\">Tables</h2>\\n<p>Colons can be used to align columns.</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Tables</th>\\n<th align=\\"center\\">Are</th>\\n<th align=\\"right\\">Cool</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td>col 3 is</td>\\n<td align=\\"center\\">right-aligned</td>\\n<td align=\\"right\\">$1600</td>\\n</tr>\\n<tr>\\n<td>col 2 is</td>\\n<td align=\\"center\\">centered</td>\\n<td align=\\"right\\">$12</td>\\n</tr>\\n<tr>\\n<td>zebra stripes</td>\\n<td align=\\"center\\">are neat</td>\\n<td align=\\"right\\">$1</td>\\n</tr>\\n</tbody></table>\\n<p>There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don&#39;t need to make the raw Markdown line up prettily. You can also use inline Markdown.</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Markdown</th>\\n<th>Less</th>\\n<th>Pretty</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><em>Still</em></td>\\n<td><code>renders</code></td>\\n<td><strong>nicely</strong></td>\\n</tr>\\n<tr>\\n<td>1</td>\\n<td>2</td>\\n<td>3</td>\\n</tr>\\n</tbody></table>\\n<hr>\\n<h2 id=\\"blockquotes\\">Blockquotes</h2>\\n<blockquote>\\n<p>Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.</p>\\n</blockquote>\\n<p>Quote break.</p>\\n<blockquote>\\n<p>This is a very long line that will still be quoted properly when it wraps. Oh boy let&#39;s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em> <strong>Markdown</strong> into a blockquote.</p>\\n</blockquote>\\n<hr>\\n<h2 id=\\"inline-html\\">Inline HTML</h2>\\n<dl>\\n  <dt>Definition list</dt>\\n  <dd>Is something people use sometimes.</dd>\\n\\n  <dt>Markdown in HTML</dt>\\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\\n</dl>\\n\\n<hr>\\n<h2 id=\\"line-breaks\\">Line Breaks</h2>\\n<p>Here&#39;s a line for us to start with.</p>\\n<p>This line is separated from the one above by two newlines, so it will be a <em>separate paragraph</em>.</p>\\n<p>This line is also a separate paragraph, but... This line is only separated by a single newline, so it&#39;s a separate line in the <em>same paragraph</em>.</p>\\n"},{"name":"Codecov plugin","repoName":"plugin-codecov","url":"https://github.com/woodpecker-ci/plugin-codecov","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to upload coverage reports to Codecov.io.","docs":"<p>The Codecov plugin uploads coverage reports in one of the <a href=\\"https://docs.codecov.com/docs/supported-report-formats\\">supported formats</a> to <a href=\\"https://about.codecov.io/\\">Codecov.io</a>.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<p>To use the plugin add a step similar to the following one to your Woodpecker pipeline config:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  codecov:\\n    image: woodpeckerci/plugin-codecov\\n    settings:\\n      files:\\n        - my-coverage-report-output.out\\n        - another-coverage-report.json\\n      token:\\n        from_secret: codecov_token\\n</code></pre>\\n"}]')}}]);