/**
 * ViewImage is a jQuery plugin that makes it easy to support automatically
 *
 * @name ViewImage.js
 * @version 1.2.0
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
            var setting = $.extend({
                'target': '.view-image img',
                'exclude': ''
            }, options);
            $(setting.exclude).attr("view-image", false);
            $(setting.target).click(function (dt) {
                dt = {
                    t: $(this),
                    z: 0.9,
                    m: Math.min,
                    ww: $(window).width(),
                    wh: $(window).height()
                };
                console.log(dt.t)
                if (!$(this).attr("view-image") && !$(this).is(setting.exclude) && (dt.t.attr('src') || dt.t.attr('href').match(/.+\.(jpg|jpeg|webp|gif|png)/gi))) {
                    if (dt.t.attr('src')) {
                        dt.is = (dt.t[0].style.cursor === "zoom-out");
                        dt.os = dt.t.offset();
                        dt.w = dt.t.width();
                        dt.h = dt.t.height();
                        dt.scale = dt.is ? 1 : dt.m((dt.m(dt.t[0].naturalWidth, dt.ww * dt.z) / dt.w), (dt.m(dt.t[0].naturalHeight, dt.wh * dt.z) / dt.h));
                        dt.X = dt.is ? 0 : (-dt.os.left + (dt.ww - dt.w) / 2) / dt.scale;
                        dt.Y = dt.is ? 0 : (-dt.os.top + (dt.wh - dt.h) / 2 + $(document).scrollTop()) / dt.scale;
                        dt.t.attr('style', (dt.is ? "" : "position: relative;z-index: 999;") + "transition: transform 0.4s;transform: scale(" + dt.scale + ") translate(" + dt.X + "px, " + dt.Y + "px);cursor: zoom-" + (dt.is ? "in" : "out") + ";");
                    } else {
                        dt.c = ".vi-" + Math.random().toString(36).substr(2);
                        $("body").append("<div class='" + dt.c.substr(1) + "' style='position: fixed;background: rgba(255, 255, 255, " + dt.z + ");top: 0;left: 0;right: 0;bottom: 0;z-index: 999;'></div>");
                        $(dt.c).html("<img src=" + dt.t.attr('href') + " style='position: absolute;top: 50%;left: 50%;max-width: 90%;max-height: 90%;transform: translate(-50%,-50%);'>");
                        $(dt.c).click(function () {
                            $(this).remove();
                        });
                    }
                    return false;
                }
            });
        }
    });
})(jQuery);
