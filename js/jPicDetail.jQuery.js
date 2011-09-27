/*
 * jPicDetail
 * Show Information on Thumbnails in a smooth overlay
 *
 * Copyright (c) 2011 ZHAW, Michael Zahno
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : September 2011
 * Version : 0.3
 * Released: 27th Sep, 2011
 *
 * Converted into a Plugin
 * 
 * Usage:
 * $('.jPicDetail').jPicDetail({
 *     stickDurationAfter: 0
 * });
 * 
 * 
 * Follow me on Twitter: 
 * http://twitter.com/SmartforceWeb
 * 
 */

(function($) {
    $.fn.jPicDetail = function(options) {

        var defaults = {
            stickDurationAfter: 800
        };
        options = $.extend({}, defaults, options);


        return this.each(function() {
            obj = $(this);

            // Fetch dimension of the image
            function getDimension(ob) {
                var dimensions = [];
                dimensions.imgHeight = ob.find("img").outerHeight();
                dimensions.imgWidth = ob.find("img").outerWidth(); // Not used yet
                dimensions.spanHeight = ob.find("span").outerHeight();
                return dimensions;
            }

            function setDimension(ob) {
                // Set height an width of containing elements (li, for now)
                $(ob).css({
                    "height": getDimension(ob).imgHeight,
                    "width": getDimension(ob).imgWidth
                });
                // Set width of overlay (span, for now)
                $(ob.find("span")).css({
                    "width": getDimension(ob).imgWidth
                });
            }

            // Run if all pics are loaded
            $(obj).find("img").load(function() {
                var thisImage = $(this);

                // Hide overlay content
                thisImage.siblings("span").css({
                    "opacity": 0
                });

                // Set dimension on container
                $(obj).find("li").each(function(index) {
                    var thisLi = $(this);
                    setDimension(thisLi);
                });
            });

            // do the fun stuff
            // throw in some more effects later
            $(obj).find("li").hover(function(event) {
                $(this).find("span").animate({
                    opacity: 0.75,
                    top: getDimension($(this)).imgHeight - (getDimension($(this)).spanHeight)
                }, 200, function() {
                    // Animation complete.
                });
                event.stopPropagation(); // Stop the event bubbling up, no idea if needed twice
            }, function(event) {
                $(this).find("span").delay(options.stickDurationAfter).animate({
                    opacity: 0,
                    top: getDimension($(this)).imgHeight + (getDimension($(this)).spanHeight)
                }, 300, function() {
                    // Animation complete.
                });
                event.stopPropagation();
            });
        });
    };
})(jQuery);