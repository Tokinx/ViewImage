# ViewImage.js

基于jQuery ，Gzip后不足 1kb 的响应式极简灯箱插件

## 获取ViewImage.js

你可以直接访问 ViewImage for GitHub 来获取最新版插件

当然你也可以通过后面的链接下载ViewImage：view-image.js or view-image.min.js

## 如何使用

ViewImage是一个基于jQuery的插件，首先确保你的页面已经正确引用该库类，然后再引用ViewImage.js。

    <script src="//view-image.git.nz/static/view-image.min.js"></script>

## 初始化并启用

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

## DEMO http://view-image.git.nz/#demo

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

### 建议使用方法

    <ul class="view-image">
        <li><img src="原图"></li>
        <li><img src="原图"></li>
        <li><img src="原图"></li>
        <li><img src="原图" class="exc"></li>
    </ul>

### A 链接指向图片

    <ul class="view-image2">
        <li><a href="原图">可用</a></li>
        <li><a href="原图" class="exc">不可用</a></li>
    </ul>

### A 链接指向图片并嵌套图片

    <ul class="view-image3">
    <li><a href="原图"><img src="缩略图 或 原图"></a></li>
    <li><a href="原图" class="exc"><img src="缩略图 或 原图"></a></li>
    </ul>