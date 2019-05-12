$("ul").on("click","li",function() {
	$(this).toggleClass("done");
});
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});
$("input").keypress(function(event) {
	if (event.which===13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});
$(".fa-plus").click(function() {
	$("input").fadeToggle(500);
});