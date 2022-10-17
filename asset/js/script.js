$(function () {


    /////// 헤더 배너 ////////////
    const headerbanner = new Swiper(".headerbanner", {
        // simulateTouch:false, 터치금지
        // loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // 헤더 배너 끝////////////

    /////// 주요 슬라이드 /////////////
    const slide1 = new Swiper(".main-slide", {
        // simulateTouch:false, 터치금지
        effect: "fade",
        scrollbar: {
            el: ".swiper-scrollbar",

        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    /////// 주요 슬라이드 끝/////////////


    // 레깅스, 브라탑, 세트 ,,, //////////
    var swiper = new Swiper(".bannerswiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // 레깅스, 브라탑, 세트 ,,, //////////


    $('.sc-titleTab').click(function () {
        $(this).addClass('on').siblings().removeClass('on');

        target = $(this).data('target');
        $(target).addClass('active').siblings().removeClass('active');
    })


    // hamburger, close
    $('#hamburger > a').click(function(){
        $('.sc-left').addClass('active')
    })

    $('.sc-left .btn-close, .container').click(function(e){
        e.preventDefault();
        $('.sc-left').removeClass('active')
    })////////////

    //
    $('.sc-left .category').click(function(e){
        e.preventDefault();

        // $(this).addClass('active');
        // $(this).show('.sublist')
        if ($(this).hasClass('active')) { // 두번 클릭시
            // 유무판단★ 토글은 그것만 가능해서!!!! 토글 비추
            $(this).removeClass('active');
            $('.sub-list').stop().slideUp();
        } else {// 한 번 클릭시
            $(this).removeClass('active');
            $('.sub-list').stop().slideUp();

            $(this).addClass('active');
            $(this).find('.sub-list').stop().slideDown();
        }
    })////////

   
 


})

// height 0보다 커졌을 때, 탑버튼 생김!!! 
// scrollTop 으로 올라가기
//jquery top 이동 검색해서 하기!!!!!