$(document).ready(function() {
	$('span').each(function(index, element) {
		if (index % 2 == 0) {
			$(element).css('color', 'red');
		};
	});
	
	$('p').each(function(index, element) {
		$(element).append(
			$('<button>')
			.addClass("btn")
			.attr({ 'data-tmp': index })
			.text('Click me');
		)
	});
	
	$("button").click(function() {
		alert($(this).attr("data-tmp"));
	});
});

