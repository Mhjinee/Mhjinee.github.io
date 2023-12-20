$(function(){
	var searchWindow = $('.search');
	var search = $('#search');
    
    searchWindow.removeClass('open');
	
	$('.s_pop').click(function(){
		searchWindow.addClass('open');
	});
	$('#searchBox form .close').click(function(){
		searchWindow.removeClass('open');
	});

});