$(window).on('load', function () {
	if ($('#preloader').length) {
	$('#preloader').delay(1000).fadeOut('slow', function () {
	$(this).remove();
	});
	}
});

$(document).ready(function () {
    $("#projectsMain").hide();
    $('input[name="options"]').on("click",()=>{
        $(".page").hide();
        $("#" + $('input[name="options"]:checked').val()).show();
    });
})
//$('input[name="options"]:checked').val();