$(function(){
    var gnbA = $('#gnb>ul>li>a'); //메인메뉴
    gnbA.on('mouseenter focus',function(){
        $('.sub').hide(); //서브메뉴 감추기
        $(this).next().slideDown(400); //보이기
    });
    $('#gnb').mouseleave(function(){
        $('.sub').hide();
    });
});