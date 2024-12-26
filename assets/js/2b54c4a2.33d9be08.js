"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["7953"],{4534:function(e){e.exports=JSON.parse('{"name":"Nextcloud Upload","url":"https://github.com/Ellpeck/WoodpeckerPlugins/tree/main/nextcloud-upload","description":"Upload files to Nextcloud using chunking and optionally add tags to files","docs":"<h1>Nextcloud Upload</h1>\\n<p>Simple plugin to upload files to Nextcloud using chunking, based on a glob pattern and a destination location. Note that, since this uses Nextcloud\'s built-in chunking system, it likely doesn\'t work for other WebDAV applications.</p>\\n<p>Here\'s an example of how to use it:</p>\\n<pre><code class=\\"language-yml\\">steps:\\n  upload:\\n    image: ellpeck/woodpecker-nextcloud-upload\\n    settings:\\n      # required settings\\n      server: https://cloud.ellpeck.de # the server to use\\n      user: EllBot # the user\\n      token: access-token # the access token, or password if 2FA is disabled\\n      files: # the file(s), uses glob patterns\\n        - \\"**/*.md\\"\\n      dest: Uploads/CoolMarkdownFiles # the destination directory\\n\\n      # optional retention settings, useful if old builds should be deleted automatically\\n      retentionamount: 7 # amount of children that retentionbase is allowed to have before oldest ones are deleted on upload\\n      retentionbase: Uploads # directory that the retentionamount applies to\\n      retentionskiptrash: false # whether retention-based deletion should skip the Nextcloud trash, defaults to false\\n\\n      # misc optional settings\\n      basedir: \\".\\" # local base directory for files, defaults to .\\n      chunksize: # chunk size in bytes, defaults to 10485760, or 10 MiB\\n      quiet: false # whether to reduce output, defaults to false\\n      tags: # a set of tags to apply to uploaded files, tag is expected to already exist\\n        - mytag\\n      flatten: false # whether to flatten directories, causing all files to be placed directly in dest, defaults to false\\n</code></pre>\\n","tags":["deploy","publish"],"author":"Ellpeck","containerImage":"ellpeck/woodpecker-nextcloud-upload","containerImageUrl":"https://hub.docker.com/r/ellpeck/woodpecker-nextcloud-upload","verified":false}')}}]);