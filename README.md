# jPicDetail

jPicDetail is a jQuery plugin for showing information on pictures in a nice animated way without distracting the viewer. Information will be blended in on hover.

### Demo
On [JSFiddle](http://jsfiddle.net/mzahno/adKby/)

### Download
On [GitHub](https://github.com/mikezahno/jPicDetail)


### How it works
You will want to include jQuery:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
   	<script src="jquery.jPicDetail.min.js"></script>
   	<script>
      	$('.jPicDetail').jPicDetail( {
			stickDurationAfter: 0, // will it stick after mouse leave?
			overlayColor: "#000", 
			overlayTransparency: 0.8 
		 });
    </script>

### Setup

* Add all the Javascripts (jQuery, jPicDetail and `$(element).jPicDetail();` block) as described above.
* Add the necessary CSS.
* Hover over your Image
* Have fun

### Changelog

#####Version : 0.4, Released: 05th Oct, 2011
 * Setting init position of overlay with jquery
 * Updated CSS
 * [JSFiddle](http://jsfiddle.net/mzahno/PNRKA/)

### History

* Launch  : September 2011
* Project @ ZHAW IAS (http://www.ias.zhaw.ch/)
* Released: 27th Sep, 2011 and converted into a jQuery plugin, MIT License

### Contact
* [Twitter](http://twitter.com/SmartforceWeb)
* [Web](http://www.smartforce.ch)
* [Forrst](http://forrst.com/people/SmartforceWeb)

### License
Licensed under MIT
http://www.opensource.org/licenses/mit-license.php