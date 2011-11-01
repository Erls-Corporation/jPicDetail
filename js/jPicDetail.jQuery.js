/*
 * jPicDetail
 * Show Information on Thumbnails in a smooth overlay
 *
 * Copyright (c) 2011, Michael Zahno
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : November 2011
 * Version : 0.5
 * Released: 1th Nov, 2011
 *
 * 
 * Usage (with default values):
 * $('.jPicDetail').jPicDetail({
 *      stickDurationAfter: 800,
 *      overlayColor: "#000",
 *      overlayTransparency: 0.8,
 *      descriptionTextColor: "#FFF",
 *      descriptionPadding: 0
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
			stickDurationAfter: 800,
			overlayColor: "#000",
			overlayTransparency: 0.8,
			descriptionTextColor: "#FFF",
			descriptionPadding: 0
		};
		options = $.extend({}, defaults, options);


		return this.each(function() {
			
			// Define the ul wrapper for easy access
			var obj = $(this);
			
			// Fetch dimension of the image
			function getDimension(ob) {
				var dimensions = [];
				dimensions.imgHeight = ob.find("img").innerHeight();
				dimensions.imgWidth = ob.find("img").innerWidth();
				dimensions.spanHeight = ob.find("span").innerHeight();
				return dimensions;
			}
			
			function setDimension(ob) {
				// Set height and width of containing elements (li, for now)
				ob.css({
					"position": "relative",
					"overflow": "hidden",
					"height": getDimension(ob).imgHeight,
					"width": getDimension(ob).imgWidth
				});
				
				// Set width of overlay (span, for now)
				ob.find("span").css({
					"width": getDimension(ob).imgWidth-(options.descriptionPadding*2)
				});
			}
			
			function setPosition(ob) {
				// Set Position of description
				ob.css({
					"top": getDimension(ob.parent()).imgHeight,
					"left": 0
				});
			}
			
			// Run if all pics are loaded
			obj.find("img").load(function() {
				
				// Set dimension on container
				obj.find("li").each(function(index) {
					var thisLi = $(this);
					setDimension(thisLi);
				});
				
				// Set position of description
				obj.find("li").each(function(index) {
					var span = $(this).find("img").next("span");
					setPosition(span);
				});
				
				// Set styles on overlay
				obj.find("span").css({
					"opacity": 0,
					"padding": options.descriptionPadding,
					"position": "absolute",
					"backgroundColor": options.overlayColor,
					"color": options.descriptionTextColor
				});
			});
			
			// do the fun stuff
			obj.find("li").hover(function(event) {
				$(this).find("span").animate({
					opacity: options.overlayTransparency,
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
			
			// Set description content
			obj.find("li").each(function(){
				var img = $(this).find("img");
				var descr = img.attr("data-descr");
				img.after("\<span\>"+descr+"\<\/span\>");
			});
		});
	};
})(jQuery);