"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2232],{78559:e=>{e.exports=JSON.parse('{"name":"S3 Plugin","url":"https://github.com/woodpecker-ci/plugin-s3","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to publish files and artifacts to Amazon S3 or Minio.","docs":"<h1>S3 Plugin</h1>\\n<p>The S3 plugin uploads files and build artifacts to your S3 bucket, or S3-compatible bucket such as Minio.\\nThe below pipeline configuration demonstrates simple usage:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      access_key: a50d28f4dd477bc184fbd10b376de753\\n      secret_key: ****************************************\\n      source: public/**/*\\n      target: /target/location\\n</code></pre>\\n<p>Source the aws credentials from secrets:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      access_key:\\n        from_secret: aws_access_key_id\\n      secret_key:\\n        from_secret: aws_secret_access_key\\n      source: public/**/*\\n      target: /target/location\\n</code></pre>\\n<p>Use the build number in the S3 target prefix:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location/${CI_BUILD_NUMBER}\\n</code></pre>\\n<p>Override the default acl and region:</p>\\n<pre><code class=\\"language-yml\\">steps:\\n- name: upload\\n  image: woodpeckerci/plugin-s3\\n  settings:\\n    bucket: my-bucket-name\\n    acl: public-read\\n    region: us-east-1\\n    source: public/**/*\\n    target: /target/location\\n</code></pre>\\n<p>Configure the plugin to strip path prefixes when uploading:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      strip_prefix: public/\\n</code></pre>\\n<p>Configure the plugin to exclude files from upload:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      exclude:\\n        - **/*.xml\\n</code></pre>\\n<p>Configure the plugin to connect to a Minio server:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  upload:\\n    image: woodpeckerci/plugin-s3\\n    settings:\\n      bucket: my-bucket-name\\n      source: public/**/*\\n      target: /target/location\\n      path_style: true\\n      endpoint: https://play.minio.io:9000\\n</code></pre>\\n<h2>Parameter Reference</h2>\\n<p>endpoint\\n: custom endpoint URL (optional, to use a S3 compatible non-Amazon service)</p>\\n<p>access_key\\n: amazon key (optional)</p>\\n<p>secret_key\\n: amazon secret key (optional)</p>\\n<p>bucket\\n: bucket name</p>\\n<p>region\\n: bucket region (<code>us-east-1</code>, <code>eu-west-1</code>, etc)</p>\\n<p>acl\\n: access to files that are uploaded (<code>private</code>, <code>public-read</code>, etc)</p>\\n<p>source\\n: source location of the files, using a glob matching pattern. Location must be within the woodpecker workspace.</p>\\n<p>target\\n: target location of files in the bucket</p>\\n<p>encryption\\n: if provided, use server-side encryption</p>\\n<p>strip_prefix\\n: strip the prefix from source path</p>\\n<p>exclude\\n: glob exclusion patterns</p>\\n<p>path_style\\n: whether path style URLs should be used (true for minio)</p>\\n","tags":["publish","s3","amazon","minio","storage"],"containerImage":"woodpeckerci/plugin-s3","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-s3","verified":true}')}}]);