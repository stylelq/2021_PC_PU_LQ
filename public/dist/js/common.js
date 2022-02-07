"use strict";

//loading
window.onload = function () {
  $('.loading').hide();
};

jQuery(function () {
  $(document).ready(function () {
    var searchOpen = 'false'; //스크롤 시 헤더 배경 바뀜

    $(window).on('load scroll', function () {
      if ($(window).scrollTop() > 0) {
        $('.header').addClass('is-bg-white');
      } else {
        $('.header').removeClass('is-bg-white');
      }
    });
    $('.gnb-1depth__item').on('mouseenter', function () {
      var depth = $(this).attr('data-depth');

      if (depth != 1) {
        $('.dim').addClass('is-active');
        $('.gnb').addClass('is-active');
      }

      $(this).addClass('is-active');
      $('.header').addClass('is-active');
    }).on('mouseleave', function () {
      var depth = $(this).attr('data-depth');
      $(this).removeClass('is-active');

      if (searchOpen != "true") {
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

    function jsOpenSearchLayer() {
      var status = $('.search').addClass('is-active');

      if (status) {
        $('.search').addClass('is-active');
        $('.type-search').addClass('is-active');
      } else {
        $('.search').removeClass('is-active');
        $('.type-search').removeClass('is-active');
      }
    }

    $('.js-search-open').on('click', jsOpenSearchLayer);
  }); //--[플로팅버튼] ----------------
  //우측 하단 카트(cart-fix)

  if ($('.cart-fix').length > 0) {
    var height = $(document).scrollTop(),
        headHeight = $('.header').scrollTop(),
        winH = $(window).height(),
        footY = $('.footer').offset().top;
    $(window).scroll(function () {
      height = $(document).scrollTop();
      headHeight = $('.header').scrollTop();
      winH = $(window).height();
      footY = $('.footer').offset().top;

      if (height > headHeight) {
        $('.cart-fix').addClass('is-view');
      } else {
        $('.cart-fix').removeClass('is-view');
      } // 푸터가 보일경우 버튼 위치값 조정


      if (height - (footY - winH) > 0) {
        $('.cart-fix').css({
          bottom: height - (footY - winH) + 50
        });
      }
    }); //히스토리 백, 또는 위치에서 새로고침 시 위치값 조정

    if (height - (footY - winH) > 0) {
      $('.cart-fix').css({
        bottom: height - (footY - winH) + 50
      });
    }
  } //스크롤탑 버튼


  function scrollTopBtn() {
    $('html, body').animate({
      scrollTop: '0'
    }, 340);
  }

  $(document).on('click', '.js-scrollTop', scrollTopBtn); //--END[플로팅버튼]----------------
  //--[탭] ----------------------
  //basic

  function basicTab() {
    var item = '[class $= __item]',
        //li
    tab = '[class $= -tab__fix]'; //ul

    $(this).closest(tab).children().removeClass('is-current');
    $(this).parent(item).addClass('is-current');
  }

  $(document).on('click', '.js-basic-tab-link', basicTab); //제품 상세 탭

  function detailTab() {
    var item = '[class $= __item]',
        //li
    tab = '[class $= -tab__fix]',
        //ul
    contents = $('.detail-tab__info'),
        //tab content
    idx = $(this).parent().index();
    $(this).closest(tab).children().removeClass('is-current');
    $(this).parent(item).addClass('is-current');
    contents.removeClass('is-current');
    contents.eq(idx).addClass('is-current');
    $('html').animate({
      scrollTop: contents.eq(idx).offset().top - 280
    });
  }

  $(document).on('click', '.js-tab-link', detailTab); //--END[탭] ----------------------
  //--[select] -------------------
  //custom select

  function customSelect() {
    // sorting btn dropDown
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).next().stop().slideUp();
    } else {
      $(this).addClass('is-active');
      $(this).next().stop().slideDown();
    } // select option view


    function selectView() {
      var link = '[class $= __link]',
          value = $(this).find(link).text(),
          select = $(this).parent(),
          selBoxLabel = select.siblings('.filter-custom__selected');
      $('.filter-custom__option').removeClass('is-current');
      $(this).addClass('is-current'); // selected 

      $(this).parent().siblings('.hidden-input').val(value);
      selBoxLabel.find('.selected_text').text(value);
      selBoxLabel.removeClass('is-active');
      select.stop().slideUp();
      return false;
    }

    $(document).on('click', '.filter-custom__option', selectView);
    return false;
  }

  $(document).on('click', '.filter-custom__selected', customSelect); //--END[select]--------------------------

  function productItem() {
    if ($(this).closest('.type-like').length > 0) {
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
      } else {
        $(this).addClass('is-active');
        alert('like!!');
      }
    }

    if ($(this).closest('.type-basket').length > 0) {
      alert('장바구니');
    }

    return false;
  }

  $(document).on('click', '.product-icon__link', productItem); //--[swiper slider] -------------------

  if ($('.detail-thumb').length > 0) {
    var detailThumbSlide = new Swiper('.detail-thumb__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      pagination: {
        el: ".detail-thumb__pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".detail-thumb--next",
        prevEl: ".detail-thumb--prev"
      }
    });
  } //-------------------------------
  //--[Scroll]-------------------------
  // 제품상세 option fix scroll


  if ($('.detail').length > 0) {
    var positionAbsolute = function positionAbsolute() {
      $('.product-option-fix__wrap').css({
        position: 'absolute',
        bottom: 100
      });
    };

    var positionFixed = function positionFixed() {
      $('.product-option-fix__wrap').css({
        position: 'fixed',
        bottom: 'auto'
      });
    };

    var sc = $(document).scrollTop(),
        winH = $(window).height(),
        div = $('.recommended').offset().top;
    $(window).scroll(function () {
      sc = $(document).scrollTop();
      winH = $(window).height();

      if ($('.detail-tab__cont').height() > winH) {
        sc - (div - winH) > 0 ? positionAbsolute() : positionFixed();
      } else {// div - winH > (div - sc) ? positionAbsolute() : positionFixed();
        // positionAbsolute()
      }

      console.group('================');
      console.log('scY : ', sc);
      console.log('div : ', div);
      console.log('-- sc - (div - winH) : ', sc - (div - winH));
      console.log('div height : ', $('.detail-tab__cont').height());
      console.log('++ div - winH > div - sc : ', $('.detail-tab__cont').height() - winH > div - sc);
      console.groupEnd();
    }); // $('.detail-tab__link').on('click',function(){
    //     div - winH > (div - sc) ? positionAbsolute() : positionFixed();
    // })
  } //-------------------------------

}); //jQuery