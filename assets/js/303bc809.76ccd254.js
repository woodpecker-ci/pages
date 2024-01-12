"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[141],{44639:t=>{t.exports=JSON.parse('{"name":"Woodpecker Feishu Bot","url":"https://github.com/wenerme/wode/tree/main/apps/woodpecker-feishu-bot","description":"Send notify to feishu/\u98de\u4e66 in text or markdown format","docs":"<h2>Example</h2>\\n<pre><code class=\\"language-yaml\\">variables:\\n  - &amp;notify_image \'wener/woodpecker-feishu-bot\'\\n\\npipeline:\\n  Notify Start:\\n    image: *notify_image\\n    settings:\\n      feishu_bot_url:\\n        from_secret: feishu_bot_url\\n      feishu_bot_secret:\\n        from_secret: feishu_bot_secret\\n      markdown: |\\n        \ud83c\udfd7\ufe0f Start building &lt;%= env.CI_REPO_NAME %&gt; #&lt;%= env.CI_BUILD_NUMBER %&gt;\\n\\n        - &lt;%= $.link(env.CI_COMMIT,env.CI_COMMIT_LINK) %&gt; &lt;%=env.CI_COMMIT_MESSAGE.replaceAll(/\\\\n/g,\';\')%&gt;\\n\\n        \ud83d\udce6\ufe0f &lt;%=$.link(env.CI_REPO_NAME,env.CI_BUILD_LINK)%&gt;\\n\\n  # Do the real work\\n\\n  Notify Done:\\n    image: *notify_image\\n    settings:\\n      feishu_bot_url:\\n        from_secret: feishu_bot_url\\n      feishu_bot_secret:\\n        from_secret: feishu_bot_secret\\n      markdown: |\\n        &lt;%= env.CI_PIPELINE_STATUS === \'success\' ? \'\u2705\' : \'\u274c\' %&gt; Building complete &lt;%= env.CI_REPO_NAME %&gt; #&lt;%= env.CI_BUILD_NUMBER %&gt;\\n\\n        - &lt;%= env.CI_COMMIT_MESSAGE %&gt;\\n\\n        \ud83d\udce6\ufe0f &lt;%= $.link(env.CI_REPO_NAME, env.CI_BUILD_LINK) %&gt; \xb7 \u23f3&lt;%= env.CI_PIPELINE_FINISHED - env.CI_PIPELINE_STARTED %&gt;\\n    when:\\n      status: [ success, failure ]\\n</code></pre>\\n<h2>settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>setting</th>\\n<th>for</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td>feisbu_bot_url</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>feisbu_bot_secret</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>content</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>format</td>\\n<td>format of content, default to markdown</td>\\n</tr>\\n<tr>\\n<td>markdown</td>\\n<td>=content+format=markdown</td>\\n</tr>\\n<tr>\\n<td>text</td>\\n<td>=content+format=text</td>\\n</tr>\\n<tr>\\n<td>dry_run</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>debug</td>\\n<td>print env</td>\\n</tr>\\n<tr>\\n<td>template</td>\\n<td>render as eta template, default to true</td>\\n</tr>\\n<tr>\\n<td>failsafe</td>\\n<td>if true, ignore error</td>\\n</tr>\\n</tbody></table>\\n<ul>\\n<li>eta template context<ul>\\n<li>env -&gt; process.env</li>\\n<li>fs -&gt; fs-extra</li>\\n</ul>\\n</li>\\n</ul>\\n","tags":["notify"],"containerImage":"wener/woodpecker-feishu-bot","containerImageUrl":"https://hub.docker.com/r/wener/woodpecker-feishu-bot","verified":false}')}}]);