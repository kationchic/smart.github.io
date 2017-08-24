$(document).ready(function(){
	var isclosed=0;
	$("#main-nav").click(function() {
		/* Когда нажимаем на сендвич-меню */
		if(!isclosed)
		{
			$('#main-menu-view').hide('slow');
			$('#main-menu-view-close').show('slow');
			$('#main-nav-win').show('slow');
		}
		else
		{
			$('#main-menu-view').show('slow');
			$('#main-menu-view-close').hide('slow');
			$('#main-nav-win').hide('slow');
		}

		isclosed=!isclosed;
	});	
});