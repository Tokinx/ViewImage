# ViewImage.js

Gzip后仅 2kb，小巧卓越的原生JavaScript灯箱插件

## 获取

你可以直接访问ViewImage的  GitHub 来获取最新版插件，当然你也可以通过下面的链接下载ViewImage：

[view-image.js][1] or [view-image.min.js][2]

## 引用

首先确保你的页面已经正确引用jQuery（建议2.0+），然后再引用ViewImage.js。

    <script src="//tokinx.github.io/ViewImage/view-image.min.js"></script>

## 启用

我们为您提供了非常简便的初始化方法，方便您对程序进行一些个性化设置并正确启用

    <script>
        window.ViewImage && ViewImage.init('.content img');
    </script>

使用 view-image 属性控制灯箱范围

使用 no-view 属性排除一些图片

### 独立使用

    <script>
        ViewImage.display([图片URL数组], '当前展示的图片URL')
    </script>

详细文档请阅读：https://tokinx.github.io/ViewImage

  [1]: https://tokinx.github.io/ViewImage/view-image.js
  [2]: https://tokinx.github.io/ViewImage/view-image.min.js
