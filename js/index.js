var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;
var offset = 1000;
var h = window.innerHeight * 2;
var isMobile = window.matchMedia("only screen and (max-width: 760px)");
$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollBar: true,
		normalScrollElements: '#page'
	});
	resize();
	window.onresize = resize;

	// Reset window-based vars
	function resize() {
		var w = page.scrollWidth-window.innerWidth+window.innerHeight-2000;
		if(!isMobile.matches)
			w += (offset+2600);
		document.body.style.height = w + 'px';
	}
});
window.onscroll = function () {
  // Horizontal Scroll.
  if(!isMobile.matches){
    var y = window.scrollY;
		console.log(y)
    if(y > h+60){
      page.scrollLeft = y - offset;
      page.style.position = 'fixed';
			$('#footer').css('position', 'fixed');
			
    }
    else{
      offset = window.scrollY;
      page.scrollLeft = 0;
      page.style.position = 'relative';
			$('#footer').css('position', 'absolute');

    }
  }
  else{
    page.style.cssText = 'overflow: scroll; flex-wrap: wrap; white-space: normal';
  }
}
// Adjust the body height if the window resizes.
// Initial resize.
