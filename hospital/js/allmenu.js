$(function(){
    // 메뉴 아이콘을 클릭했을 때
    $('.menuBox').click(function(){
        if($(window).width() > 899){
            $('body').addClass('allmenu-open');
        }else{
            $('body').addClass('m_menu-open');
            $("#m_gnb").stop().animate({right:0},500,"swing");
        }
    });
    $('.menu_close').click(function(){
        if($(window).width() > 899){
            $('body').removeClass('allmenu-open');
        }else{
            $('body').removeClass('m_menu-open');
            $("#m_gnb").stop().animate({right:-9999},600,"swing");
        }
    });

    // 서브메뉴(tablet, mobile)
    $('#m_gnb>.m_list>ul>li').click(function(){
        $(this).next().slideToggle();
        // $(this).next().siblings('.sub').slideUp(); //메인메뉴를 펼친 후 접지 않고 다음 메인메뉴를 펼쳤을 때 원래 펼쳐져있던 메인메뉴는 접힘
    });

    // (tablet, mobile) 서브메뉴 화살표 아이콘 토글
    const main1 = document.querySelector(".main1");
    const slideSub1 = document.querySelector(".main1-1");

    const main2 = document.querySelector(".main2");
    const slideSub2 = document.querySelector(".main2-1");

    const main3 = document.querySelector(".main3");
    const slideSub3 = document.querySelector(".main3-1");

    const main4 = document.querySelector(".main4");
    const slideSub4 = document.querySelector(".main4-1");
    main1.addEventListener('click',() => {
        slideSub1.classList.toggle('active');
    });
    main2.addEventListener('click',() => {
        slideSub2.classList.toggle('active');
    });
    main3.addEventListener('click',() => {
        slideSub3.classList.toggle('active');
    });
    main4.addEventListener('click',() => {
        slideSub4.classList.toggle('active');
    });
});