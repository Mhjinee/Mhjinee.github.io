$(function(){
    $('#gnb>li>a').mouseenter(function(){
        $(this).next('div').show();
    });
    $('#gnb>li').mouseleave(function(){
        $('.gnb_set').hide();
    });
});