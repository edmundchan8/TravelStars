$(document).ready(function(){
	$("#menu").click(function () {
		  if ( $("#nav-bar").css('display') == 'none') {
			$("#nav-bar").css("display", "flex");
		  } else {
			$("#nav-bar").css("display", "none");
		  }
	});
});