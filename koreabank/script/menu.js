$(function(){
    $('.gnb>ul>li>a').mouseenter(function(){
        $(this).next('div').show();
    });
    $('.gnb>ul>li').mouseleave(function(){
        $('.subset').hide();
    });
});