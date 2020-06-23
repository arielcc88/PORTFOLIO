//ACP Supporting scripts
$(document).ready(function(){
	//changing class of navbar on scroll.
	$(window).scroll(function () {
        // set distance user needs to scroll before we fadeIn navbar
		if ($(this).scrollTop() > 0) {
			$("#navbar-fixed-top").addClass("navbar-drop-shadow");
			//console.log("pos", $(this).scrollTop());
		} else {
			$("#navbar-fixed-top").removeClass("navbar-drop-shadow");
			//adding "active" for acp-home section
			$(".navbar-nav > li > a").first().addClass("active");	
		}
	});
});
