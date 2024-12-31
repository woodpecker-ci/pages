"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([["4225"],{17093:function(e){e.exports=JSON.parse('{"name":"Prettier","url":"https://codeberg.org/woodpecker-plugins/prettier","icon":"https://codeberg.org/woodpecker-plugins/prettier/raw/branch/main/prettier.png","description":"This plugin can be used to check if a repository is following prettier rules.","docs":"<h1>plugin-prettier</h1>\\n<p>This plugin can be used to check if a repository is following <a href=\\"https://prettier.io/\\">prettier</a> rules.</p>\\n<h2>Sample</h2>\\n<pre><code class=\\"language-yaml\\">steps:\\n  prettier:\\n    image: woodpeckerci/plugin-prettier:next\\n</code></pre>\\n<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Type</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>check</code></td>\\n<td>boolean</td>\\n<td>true</td>\\n<td>If <code>false</code>, runs in \'write\' mode (-w)</td>\\n</tr>\\n<tr>\\n<td><code>path</code></td>\\n<td>string</td>\\n<td><code>.</code></td>\\n<td>If specified, it checks in a specified path</td>\\n</tr>\\n<tr>\\n<td><code>version</code></td>\\n<td>numeric</td>\\n<td>empty</td>\\n<td>If specified, this prettier version is installed</td>\\n</tr>\\n<tr>\\n<td><code>lockfile</code></td>\\n<td>string</td>\\n<td>empty</td>\\n<td>If specified, prettier version is read from lockfile (support npm and pnpm)</td>\\n</tr>\\n<tr>\\n<td><code>plugins</code></td>\\n<td>list</td>\\n<td>empty</td>\\n<td>Additional prettier plugins to install</td>\\n</tr>\\n</tbody></table>\\n","tags":["lint","test","prettier"],"author":"Woodpecker Authors","containerImage":"woodpeckerci/plugin-prettier","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-prettier","verified":true,"iconDataUrl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAnFBMVEUaKzQoTFNEiY1QpqhWs7QoS1MgMTssPkgyRE4zRlA3bXFWsrM3bHImOEI0RlFLNz6rTlHVWVrqXl6qT1FQTji3kkHlsUb7v0d+REjpXl59Q0iGcj36vkfWWVpRTzlQpadDioxDRFeSc5q1ibjGk8ZsXXrFksVMNz7ksEW2kkGHcz20ibeRdJltXXpERFiIcz0bKzQaKjQaKzUaLDQ2xOENAAAEqklEQVR4AezYg5kEQRBA4RrbWuef5fn6jPoGi3l/Bo2iAAAAAAAAAADwApbtuGfi2J584AdhNEIY+KIWu+eUpPJOFo2VZ6JkueeVeGL40Xi5Lzq2e2a2GEE0gUB0HPfMHDHCaAIhF0AIqHiJe16WGH4ejeeLUnreG4jlnWz8DWSi5p2zEbLO1ggBAAAARVnVv6qaQj5ou35YQN+1fzfK41vhzbb+03Yn7+wPw0IOe+2opN8JFtv6H7aFGO1hWMyhVQ7L+p1gWf9LKUY3LKhTr0sC0TnW/3IUox8W1KsXZiEXQAiQBFV2ay2DRtFUf8R/WcgHp/v27ivJbR2IwrBy1lXWROU4Oe1/b/eZU1Nttg8IG9b/rYCFKpDN5mnwXyiEAAAAgHplVQtita6XMjbb3T6n3XZjpBeNPKFeCve6RaX+Dse9w/FgpBeNPKH6MlTvFpX62xz3LsdNNr3ozxOGzwlKkaft3mlrXpUdpgqfE9RDb7u90864qvxxuhYLwBZI/yaYvSpfnrCR/mMwe1XOPGH/DxZC1UrAQqieLYTKYQshAAAAwE796R+sjTJ1MFyM3RbDwY9XIJTCd/dyZME/12sHMxxhjb7cE5zey6EV/1yvHc1xxHUaek9wJseWHJq5wlmOwFZTb4jMleCaMNa6GP+2hXkFLRaALXABN0HjChoX9hj8z90TpBACAAAA9I/YSimcLcHFYlwohZUYg/IydHevD1KJPUEhyKK/Dk/v9VE6vScoRpmUhshMH6bUGyJqmE1pic2LGqdtsQBsgUu6CUo9wfQfg0JPkEIIAAAAOA0Xxufn6ex8ZTo/TAs6qjvS7PC1GUB4vHe8noQcwoo2O3wKcGzW/TT4GF682eFhiIPTZsEHMeMNTi5CHJ03Dz6KK4zOsgBsAfU8wdNffxPUZ4etvN61t3MX9zEYfnZ4kC2ETt8KoYezs0uXRiEEAAAA2KWrXZJmy2jnsMtm+7Q3PT17P8ZHOE+w23MMPpndxpdj+DhGjPMEu3XH6JvRbdwcwwdy4pwnWBGGH4fucNa28B8sVIXW1EIYet0VFcprsQBsAW6CSTwGDwU/BhMohJ6f5FSiUAgBAAAAr9tdtvyM92u9+WzpLHYLKIVfzBeQt7i/VGx76S9Dr+Yr6DLuTzXbuhCzw1thvFEdg9QFmB3eCQOu6iCsrsUCsAXU2eHXqP8YXma6fjp9dvjFEZfXPXq7fiZ9dni3fb2QQggAAAB4/VVeT0/zxSD0BFXHQ9i+XuyeoCwbZGnHFf88QSnKFF788wSlMFsELRaALeDtCepeA/f1YvcEVS+B+3qxe4LPWiG0fU2yEAIAAADKlVXtB6t1/fuH8rN9nmCipXAn54DUo531S7YnWM45IreUs366+LPDlZxxqVnCDZFqzjHZuR51i6PFArAFws0Ol7OJQT3rF0HI2eFOzpMFH9PuCdZ/LoSqlbJ9xHI265dcIQQAAACchqOxYDQZpF0KX49VN7cp9wRPY93NIOGe4HAcwDDhhshiHMAi2ZYYC8AWGNyMdaeUe4K3+gpcp90THEy0Qmh4oicIAABwad5LuGgfJVy4zxKA/LhBfJUAANH9D5mak7hqUFbgAAAAAElFTkSuQmCC"}')}}]);