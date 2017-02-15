# ViewImage.js

基于jQuery ，Gzip后不足 1kb 的响应式极简灯箱插件

## 获取

你可以直接访问ViewImage的  GitHub 来获取最新版插件，当然你也可以通过下面的链接下载ViewImage：

[view-image.js][1] or [view-image.min.js][2]

## 引用

首先确保你的页面已经正确引用jQuery（建议2.0+），然后再引用ViewImage.js。

    <script src="//tokinx.github.io/view-image/view-image.min.js"></script>

## 启用

我们为您提供了非常简便的初始化方法，方便您对程序进行一些个性化设置并正确启用

    <script>
        jQuery(document).ready(function () {
            jQuery.viewImage({
                'target' : '.view-image img', //需要使用ViewImage的图片
                'exclude': '.exclude img',    //要排除的图片
                'delay'  : 300                //延迟时间
            });
        });
    </script>

## 示例 http://git.biji.io/view-image/#id-demo

我们提供了几个DEMO，方便您进一步了解ViewImage

    <script>
        jQuery(document).ready(function () {
            jQuery.viewImage({
                'target': '.view-image img,.view-image2 a,.view-image3 a',
                'exclude': '.exc',
                'delay': 300
            });
        });
    </script>

### [图片]

    <ul class="view-image">
        <li><img src="原图"></li>
        <li><img src="原图"></li>
        <li><img src="原图"></li>
        <li><img src="原图" class="exc"></li>
    </ul>

### [链接] + [文字]

    <ul class="view-image2">
        <li><a href="原图">可用</a></li>
        <li><a href="原图" class="exc">不可用</a></li>
    </ul>

### [链接] + [缩略图]

    <ul class="view-image3">
        <li><a href="原图"><img src="缩略图 或 原图"></a></li>
        <li><a href="原图" class="exc"><img src="缩略图 或 原图"></a></li>
    </ul>

  [1]: https://tokinx.github.io/view-image/view-image.js
  [2]: https://tokinx.github.io/view-image/view-image.min.js
