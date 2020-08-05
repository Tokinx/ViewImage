/**
 * ViewImage is a jQuery plugin that makes it easy to support automatically
 *
 * @name ViewImage.js
 * @version 1.3.2
 * @requires jQuery v2.0+
 * @author Tokin (Tokinx)
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * https://tokinx.github.io/ViewImage/
 *
 * Copyright (c) 2017, Biji.IO
 */
(function ($) {
    $.extend({
        viewImage: function (options) {
            let setting = $.extend({
                'target': '.view-image img',
                'exclude': '',
                'delay': 300
            }, options);
            $(setting.exclude).attr("view-image", false);
            $(setting.target).off().on('click', function (el) {
                let dt = {
                    src: el.currentTarget.src,
                    href: el.currentTarget.href,
                    style: "<style class='view-image-css'>.view-img{position:fixed;background:#fff;background:rgba(255,255,255,.92);width:100%;height:100%;top:0;left:0;text-align:center;padding:2%;z-index:999;cursor: zoom-out}.view-img img,.view-img span{max-width:100%;max-height:100%;position:relative;top:50%;transform: translateY(-50%);}.view-img img{animation:view-img-show .8s -0.1s ease-in-out}.view-img span{height:2em;color:#AAB2BD;overflow:hidden;position:absolute;top:50%;left:0;right:0;width:120px;text-align:center;margin:-1em auto;}.view-img span:after{content:'';position:absolute;bottom:0;left:0;transform: translateX(-100%);width:100%;height:2px;background:#3274ff;animation:view-img-load .8s -0.1s ease-in-out infinite;}@keyframes view-img-load{0%{transform: translateX(-100%);}100%{transform: translateX(100%);}}@keyframes view-img-show{0%{opacity:0;}100%{opacity:1;}}</style>",
                    class: ".vi-" + Math.random().toString(36).substr(2)
                };
                if (!$(this).attr("view-image") && !$(this).is(setting.exclude) && (dt.src || (dt.href && dt.href.match(/.+\.(jpg|jpeg|webp|gif|png)/gi)))) {
                    $("body").append(dt.style + "<div class='view-img'><span>loading...</span></div>");
                    setTimeout(() => {
                        let img = new Image;
                        img.src = dt.src || dt.href;
                        img.onload = function () {
                            $(".view-img").html('<img src="' + img.src + '" alt="ViewImage">')
                        };
                        $(".view-img").off().on('click', function () {
                            $(".view-image-css").remove();
                            $(this).remove();
                        });
                        $(dt.class).html();
                    }, setting.delay);
                    return false;
                }
            });
        }
    });
})(jQuery);
