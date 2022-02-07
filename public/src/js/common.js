jQuery(function(){
    $(document).ready(function() {
        var searchOpen = 'false';
        //스크롤 시 헤더 배경 바뀜
        $(window).on('load scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.header').addClass('is-bg-white');
            } else {
                $('.header').removeClass('is-bg-white');
            }
        });

        $('.gnb-1depth__item').on('mouseenter', function () {
            var depth = $(this).attr('data-depth');
            if(depth != 1){
                $('.dim').addClass('is-active');
                $('.gnb').addClass('is-active');
            }
            $(this).addClass('is-active');
            $('.header').addClass('is-active');
        }).on('mouseleave',function(){
            var depth = $(this).attr('data-depth');
            $(this).removeClass('is-active');

            if (searchOpen != "true"){
                $('.header').removeClass('is-active');
                if (depth != 1) {
                    $('.dim').removeClass('is-active');
                    $('.gnb').removeClass('is-active');
                }
            }
        });

        /*
        //Header Search
        */

        //헤더 검색박스 레이어 열고닫기
        function jsOpenSearchLayer(){
            var status = $('.search').addClass('is-active');
            if(status){
                $('.search').addClass('is-active');
                $('.type-search').addClass('is-active');
            }else{
                $('.search').removeClass('is-active');
                $('.type-search').removeClass('is-active');
            }
        }
        $('.js-search-open').on('click',jsOpenSearchLayer);
    });
});
