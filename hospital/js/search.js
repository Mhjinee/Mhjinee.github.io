$(function(){
    $('#search').addClass('hide');
    $('#searchBox').click(function(){
        $('#search').removeClass('hide');
        $('#search').addClass('show');
        // $('#search').css('display','block');
    });
    $('.s_close').click(function(){
        $('#search').removeClass('show');
        $('#search').addClass('hide');
        // $('#search').css('display','none');
    });
});