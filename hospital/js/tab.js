$(function(){
    $('.tab_tit').click(function(){
        var tab_menu =$(this).attr('data-tab'); //attr()함수 : 속성사용함수
        // tab메뉴에 current 속성을 제거한다
        $('.tab_tit').removeClass('current');
        $('.tab-con').removeClass('current');
        // tab메뉴에 current 속성을 적용한다
        $(this).addClass('current');
        $('#'+tab_menu).addClass('current');
    });
});