$(document).ready(function(){
    //이미지 교체
    $(document).on('mouseenter','.js-img-place',function(){
        console.log($(this).attr('src'));
        $(this).attr('src',$(this).attr('src').replace('_0','_1'));
    }).on('mouseleave','.js-img-place',function(){
        $(this).attr('src',$(this).attr('src').replace('_1','_0'));
    });



    //gnb

    var searchOpen = 'false';

    $(window).on('load scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.header-v2').addClass('is-white');
        } else {
            $('.header-v2').removeClass('is-white');
        }
    });
    $('.gnb-1depth__item').on('mouseenter', function () {
        var depth = $(this).attr('data-depth');
        if(depth != 1){
            $('.dim-v2').addClass('is-active');
        }
        $(this).addClass('is-active');
        $('.header-v2').addClass('is-active');
    }).on('mouseleave',function(){
        var depth = $(this).attr('data-depth');
        $(this).removeClass('is-active');
        
        if (searchOpen != "true"){
            $('.header-v2').removeClass('is-active');
            if (depth != 1) {
                $('.dim-v2').removeClass('is-active');
            }
        }     
    });

    $('.js-search-btn').on('click',function(e){
        e.preventDefault();
        var state = $(this).parents('.header-v2__item');
        var depth = $(this).attr('data-depth');
        if (state.hasClass('is-active')){
            state.removeClass('is-active');
            $('.header-v2').removeClass('is-active');
            $('.dim-v2').removeClass('is-active');
            $('.header-search').removeClass('is-active');
            $('.gnb-1depth__list').removeClass('is-hide');
            searchOpen = "false"
        }else{
            state.addClass('is-active');
            $('.dim-v2').addClass('is-active');
            $('.header-v2').addClass('is-active');
            $('.header-search').addClass('is-active');
            $('.gnb-1depth__list').addClass('is-hide');
            $('.header-search__input').focus();
            searchOpen = "true"
        }
    });
    $('.dim-v2').on('click',function(){
        $('.js-search-btn').trigger('click');
    });

    $('.js-mypage').on('click',function(e){
        e.preventDefault();
        if ($('.header-mypage').hasClass('is-active')) {
            $('.header-mypage').removeClass('is-active');
        }else{
            $('.header-mypage').addClass('is-active');
        }
    });


    $('.js-popup-v2-close').on('click', function (e) {
        e.preventDefault();
        $('.popup-v2').removeClass('is-active');
    });

    $('.js-popup-v2-open').on('click', function (e) {
        e.preventDefault();
        var popupClass = $(this).attr('href');
        $('.popup-v2').removeClass('is-active');
        $("." + popupClass).addClass('is-active');
        if (popupClass == "page-coupon"){
            $('.coupon-v2__name').each(function () {
                var length = 50;
                $(this).each(function () {
                    if ($(this).text().length >= length) {
                        $(this).text($(this).text().trim().substr(0, length) + '...');
                    }
                });
            });
        }     
    });

    $('.js-popup-v3-open').on('click', function (e) {
        e.preventDefault();
        $('.popup-v3').addClass('is-active');
    });

    $('.js-popup-v3-close').on('click', function (e) {
        e.preventDefault();
        $('.popup-v3').removeClass('is-active');
    });

    $(window).on("load", function () {
        try {
            $(".js-customScroll").mCustomScrollbar({
                theme: "minimal-dark",
                
                advanced:{
                   updateOnContentResize: true
               }
            });
        } catch (e) { }
    });
});
