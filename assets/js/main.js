const CLIlinks = {
	"1": {
		"title": "Readme Generator",
		"description": "Readme Generator is a CLI App. Below you can find links to videos demonstrating the app in action locally.",
		"resources": [
			"https://drive.google.com/file/d/1nvz_RAecO6fW1eDt8hpLZcyb1L76fYsA/view?usp=sharing", 
			"https://drive.google.com/file/d/1u2xOsvRGj993LnGEN9G5v3Ma38s7VD62/view?usp=sharing", 
			"https://drive.google.com/file/d/1u2xOsvRGj993LnGEN9G5v3Ma38s7VD62/view?usp=sharing",
			"https://drive.google.com/file/d/1keS7jNQ5ZV22MXhpaKCogg_mRosPZZmU/view?usp=sharing"
		]
	}
};

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
	
	//modal for CLI vide demostration
	$('#linkModal').on('show.bs.modal', function (event) {
		const prjButton = $(event.relatedTarget) // Button that triggered the modal
		const prjId = prjButton.data('prjid') // Extract info from data-* attributes
		const modalElem = $(this);
		const prjDesc = $("<p>");
		const ulLink = $("<ul>");
		//clearing content of modal body in case has info from another project
		modalElem.find('.modal-body').empty();
		//reset resource counter
		let resCounter = 0;
		//Modal Title
		modalElem.find('.modal-title').text(CLIlinks[prjId].title);
		//Modal project description
		prjDesc.text(CLIlinks[prjId].description);
		//list of resources
		for (let link of CLIlinks[prjId].resources) {
			resCounter++;
			const liLink = $("<li>");
			const aLink = $("<a>");
			aLink.attr("href", link);
			aLink.attr("target", "__blank");
			aLink.addClass("btn btn-primary");
			aLink.text(`Resource #${resCounter}`);
			liLink.append(aLink);
			ulLink.append(liLink);
		}
		//append text and list of resources to modal body
		modalElem.find('.modal-body').append(prjDesc);
		modalElem.find('.modal-body').append(ulLink);
	  })
});
