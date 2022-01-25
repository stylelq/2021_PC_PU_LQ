"use strict";

<<<<<<< HEAD
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
        }
      }
    });
  });
=======
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**********
* 공통
* *********/
$(function () {
  /*
  //Header Scroll Bg
  */
  // 헤더 스크롤 백그라운드
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header').outerHeight();
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var thisSt = $(window).scrollTop();
    if (Math.abs(lastScrollTop - thisSt) <= delta) return;

    if (thisSt > lastScrollTop && thisSt > navbarHeight) {
      $('.header').addClass('type-bg');
      $('.detail-tab').removeClass('is-down');
      $('.js-fixed-check').removeClass('is-down');
    } else {
      if (thisSt + $(window).height() < $(document).height()) {
        $('.header').removeClass('type-bg');
        $('.detail-tab').addClass('is-down');
        $('.js-fixed-check').addClass('is-down');
      }
    }

    lastScrollTop = thisSt;
  } //스크롤 헤더 백그라운드


  $(window).scroll(function () {
    var height = $(document).scrollTop();

    if (height > 0) {
      $('.header').addClass('is-bg-view');
    } else {
      $('.header').removeClass('is-bg-view');
    }
  }); //우측 하단 카트(cart-fix)

  if ($('.cart-fix').length > 0) {
    $(window).scroll(function () {
      var height = $(document).scrollTop();
      var headHeight = $('.header').scrollTop();

      if (height > headHeight) {
        $('.cart-fix').addClass('is-view');
      } else {
        $('.cart-fix').removeClass('is-view');
      }
    });
  } //스크롤탑 버튼


  function scrollTopBtn() {
    $('html, body').animate({
      scrollTop: '0'
    }, 340);
  }

  $(document).on('click', '.js-scrollTop', scrollTopBtn);
});
/**********
* main
* *********/

$(function () {// 내용
});
/**********
* sub-page
* *********/

$(function () {
  if ($('.detail-thumb').length > 0) {
    var _Swiper;

    var detailThumbSlide = new Swiper('.detail-thumb__container', (_Swiper = {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1
    }, _defineProperty(_Swiper, "slidesPerView", 1), _defineProperty(_Swiper, "pagination", {
      el: ".detail-thumb__pagination",
      type: "fraction"
    }), _defineProperty(_Swiper, "navigation", {
      nextEl: ".detail-thumb--next",
      prevEl: ".detail-thumb--prev"
    }), _Swiper));
  } //기본탭


  function basicTab() {
    var idx = $(this).parent('li').index();
    $(this).parent('li').addClass('is-current').siblings('li').removeClass('is-current');
    $(this).closest('.js-tab-wrap').find('.js-change-cont').eq(idx).addClass('is-current').siblings('.js-change-cont').removeClass('is-current');
    return false;
  }

  $(document).on('click', '.js-tab-change', basicTab);
  /*
  //Join(회원가입, 로그인)
  */
  //전체 체크박스 체크

  function allCheck() {
    var dataName = $(this).attr('name');
    var allCheckInput = $(this);
    $(allCheckInput).change(function () {
      if ($(allCheckInput).is(":checked") == true) {
        $('[name="' + dataName + '"]:not(:disabled)').prop("checked", true);
        $(this).parent('li').addClass('is-active');
      } else {
        $('[name="' + dataName + '"]:not(:disabled)').prop("checked", false);
      }
    });
  }

  ;
  $(document).on('click', '.js-check-all', allCheck); //통합 체크시 관련 체크박스 제어

  function allCheckItem() {
    var label = $(this).prev('[type=checkbox]');
    var dataName = label.attr('name');
    var subInput = $('[name="' + dataName + '"]:not(:disabled):not(.js-check-all)');
    $(label).change(function () {
      if (subInput.length > subInput.filter(":checked").length) {
        $('[name="' + dataName + '"].js-check-all').prop("checked", false);
      } else {
        $('[name="' + dataName + '"].js-check-all').prop("checked", true);
      }
    });
  }

  ;
  $(document).on('click', '.terms__depth2-item label', allCheckItem);
  /*
  //Product(리스트페이지)
  */
  //상품리스트 타입 변경 버튼제어

  function productTypeChage() {
    if ($(this).hasClass('filter__link--list')) {
      $(this).removeClass('filter__link--list');
      $(this).addClass('filter__link--post');
      $('.product-post').removeClass('product-post--post');
      $('.product-post').addClass('product-post--list');
    } else {
      $(this).removeClass('filter__link--post');
      $(this).addClass('filter__link--list');
      $('.product-post').removeClass('product-post--list');
      $('.product-post').addClass('product-post--post');
    }
  }

  $(document).on('click', '.js-layout-chage', productTypeChage);
  /*
  //Product(상세페이지)
  */
  //상품상세 상단 배너슬라이드

  if ($('.detail-thumb').length > 0) {
    var _Swiper2;

    var detailThumbSlide = new Swiper('.detail-thumb__container', (_Swiper2 = {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1
    }, _defineProperty(_Swiper2, "slidesPerView", 1), _defineProperty(_Swiper2, "pagination", {
      el: ".detail-thumb__pagination",
      type: "fraction"
    }), _defineProperty(_Swiper2, "navigation", {
      nextEl: ".detail-thumb--next",
      prevEl: ".detail-thumb--prev"
    }), _Swiper2));
  } //상품상세 쉐어 버튼 열기/닫기


  function detailShareOpen() {
    if ($('.detail-fix__share').hasClass('is-open')) {
      $('.detail-fix__share').removeClass('is-open');
    } else {
      $('.detail-fix__share').addClass('is-open');
    }
  }

  $(document).on('click', '.js-share-btn', detailShareOpen); //제품 서브메뉴 스크롤 픽시드

  if ($('.detail-tab').length > 0) {
    $(window).scroll(function () {
      var height = $(document).scrollTop();
      var topContHeight = $('.product-option').height();
      var mainOuterHeight = $('.site-main').outerHeight(true);
      var mainHeight = $('.site-main').height();
      var headerHeight = $('.header').height();
      var marginHeight = mainOuterHeight - mainHeight;
      var totalHeight = topContHeight + marginHeight + headerHeight;
      var upTotalHeight = topContHeight + marginHeight;

      if ($('.header').hasClass('type-bg')) {
        if (height > totalHeight) {
          $('.detail-tab').addClass('is-fixed');
          $('.header').addClass('is-bg-white');
        } else {
          $('.detail-tab').removeClass('is-fixed');
          $('.header').removeClass('is-bg-white');
        }
      } else {
        if (height > upTotalHeight) {
          $('.detail-tab').addClass('is-fixed');
          $('.header').addClass('is-bg-white');
        } else {
          $('.detail-tab').removeClass('is-fixed');
          $('.header').removeClass('is-bg-white');
        }
      }
    });
  } //제품상세 탭


  function detailTab() {
    var topContHeight = $('.product-option').height();
    var mainOuterHeight = $('.site-main').outerHeight(true);
    var mainHeight = $('.site-main').height();
    var marginHeight = mainOuterHeight - mainHeight;
    var totalHeight = topContHeight + marginHeight;
    var idx = $(this).parent('li').index();
    $(this).parent('li').addClass('is-current').siblings('li').removeClass('is-current');
    $('.detail-tab__info').eq(idx).addClass('is-current').siblings('.detail-tab__info').removeClass('is-current');
    $('html, body').animate({
      scrollTop: totalHeight
    }, 340);
  }

  $(document).on('click', '.js-tab-link', detailTab); //제품 상세 하단 픽시드 결제 박스

  if ($('.fix-button , .cart-fix__button, .inquiry-fix').length > 0) {
    $(window).scroll(function () {
      var height = $(document).scrollTop();
      var headHeight = $('.header').scrollTop();

      if (height > headHeight) {
        $('.fix-button').addClass('is-on');
      } else {
        $('.fix-button').removeClass('is-on');
      }
    });
    $('.cart-fix').addClass('is-up');
    $('.footer').addClass('bottom-fix');
  } //연관제품 슬라이드


  if ($('.recommended-slide').length > 0) {
    var recommendeSlide = new Swiper('.recommended-slide__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      pagination: {
        el: ".recommended-slide__pagination",
        type: "fraction"
      }
    });
  } //프로젝트 슬라이드


  if ($('.project-slider').length > 0) {
    var projectSlide = new Swiper('.project-slider__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".project-pagination"
      }
    });
  } // 프로젝트 작품별 슬라이드


  if ($('.project-slide').length > 0) {
    var projectSlide2 = new Swiper('.project-slide__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".project-slide-pagination"
      }
    });
  } // 장소 슬라이드


  if ($('.project-place-slide').length > 0) {
    var projectSlide2 = new Swiper('.project-place__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".project-place-pagination"
      }
    });
  } // 컬렉션 상품슬라이드


  if ($('.collection-slide').length > 0) {
    var collectionSlide = new Swiper('.collection-slide__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: ".collecton-next-btn",
        prevEl: ".collecton-prev-btn"
      }
    });
  } // 컬렉션 더보기 슬라이드


  if ($('.collection-more-slide').length > 0) {
    var collectionSlide = new Swiper('.collection-more__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".more-next-btn",
        prevEl: ".more-prev-btn"
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      }
    });
  } // 컬렉션 모델슬라이드(상단)


  if ($('.collection-model-slide').length > 0) {
    var collectionModelSlide = new Swiper('.collection-model__container', {
      effect: 'fade',
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.collection-slide-pagination',
        clickable: true
      },
      navigation: {
        nextEl: ".model-next-btn",
        prevEl: ".model-prev-btn"
      }
    });
  } // 컬렉션 모델슬라이드(하단)


  if ($('.collection-model-slideSecond').length > 0) {
    var collectionModelSlideSecond = new Swiper('.collection-model__containerSecond', {
      effect: 'fade',
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.collection-slide-paginationSecond',
        clickable: true
      },
      navigation: {
        nextEl: ".model-next-btn",
        prevEl: ".model-prev-btn"
      }
    });
  } // 컬렉션 썸네일 슬라이드


  if ($('.gallery-thumbs').length > 0) {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 8,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.gallery-top', {
      navigation: {
        nextEl: ".thumb-prev-btn",
        prevEl: ".thumb-next-btn"
      },
      thumbs: {
        swiper: galleryThumbs
      },
      effect: "fade",
      loop: true
    });
  } //리뷰 더보기(아코디언)


  function reviewMore() {
    var parent = $(this).closest('.review-list');

    if (parent.hasClass('is-view')) {
      parent.removeClass('is-view');
      $(this).text('더보기');
    } else {
      parent.addClass('is-view');
      $(this).text('접기');
    }
  }

  $(document).on('click', '.js-more-view', reviewMore); //qna 더보기(아코디언)

  function qnaMore() {
    var parent = $(this).closest('.qna-item');

    if (parent.hasClass('is-view')) {
      parent.removeClass('is-view');
    } else {
      parent.addClass('is-view');
    }
  }

  $(document).on('click', '.js-qna-more', qnaMore); //faq 더보기(아코디언)

  function faqMore() {
    var parent = $(this).closest('.notice-faq__item');

    if (parent.hasClass('is-active')) {
      parent.removeClass('is-active');
    } else {
      parent.addClass('is-active').siblings('li').removeClass('is-active');
    }

    return false;
  }

  $(document).on('click', '.js-faq-more', faqMore); //로케이션 더보기(아코디언)

  function locationMore() {
    var parent = $(this).closest('.stores-location__item');

    if (parent.hasClass('is-active')) {
      parent.removeClass('is-active');
    } else {
      parent.addClass('is-active').siblings('li').removeClass('is-active');
    }

    return false;
  }

  $(document).on('click', '.js-location-more', locationMore); //셀렉트 박스 텍스트 컬러변경(placeholder 시각적 효과)

  function selectPlaceholder() {
    $(this).addClass('is-check');
  }

  $(document).on('change', '.js-placeholder', selectPlaceholder); //기본 아코디언

  function accordionMore() {
    var parent = $(this).parent('li');

    if (parent.hasClass('is-active')) {
      parent.removeClass('is-active');
    } else {
      parent.addClass('is-active').siblings('li').removeClass('is-active');
    }

    return false;
  }

  $(document).on('click', '.js-accordion', accordionMore); //마이페이지 :: 주문배송조회 기간조회 dropDown

  function btnDropDown() {
    var parent = $(this).closest('.myOrderList-filter__btnList'),
        parentNext = parent.next('.myOrderList-filter__detail');

    if (parentNext.hasClass('is-view')) {
      parentNext.removeClass('is-view');
    } else {
      parentNext.addClass('is-view');
    }
  }

  $(document).on('click', '.js-btn-dropDown', btnDropDown); //마이페이지 :: qna 더보기(아코디언)

  function myQnaMore() {
    var parent = $(this).closest('.myQna-wrap__item');

    if (parent.hasClass('is-active')) {
      parent.removeClass('is-active');
    } else {
      $('.myQna-wrap__item').removeClass('is-active');
      parent.addClass('is-active');
    }
  }

  $(document).on('click', '.js-myQna-more', myQnaMore); //결제탭

  function paymentTab() {
    var el = $(this).attr('href').replace("#", "");
    $(this).parent('li').addClass('is-current').siblings('li').removeClass('is-current');
    $('.payment-tool__list--item').removeClass('is-current');
    $('#' + el).addClass('is-current');
    return false;
  }

  $(document).on('click', '.js-payment-open', paymentTab); //스토어 스페셜 슬라이드

  if ($('.special-slide').length > 0) {
    var specialSlide = new Swiper('.special-slide__container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: ".special-slide__pagination",
        type: "fraction"
      }
    });
  } //메세지 카드 체크시 노출


  function messageCheck() {
    var messageCheckInput = $(this).prev('input[type="checkbox"]');
    var activeClass = $(this).closest('.order-product__item').find('.order-product__message');
    messageCheckInput.change(function () {
      if (messageCheckInput.is(":checked") == true) {
        activeClass.addClass('is-active');
      } else {
        activeClass.removeClass('is-active');
      }
    });
  }

  $(document).on('click', '.js-open-message', messageCheck); //적립금 전액 체크

  function useTotalCheck() {
    var useTotalCheckInput = $(this).prev('input[type="checkbox"]');
    var totalPrice = $('.coupon-info__use--total-price').text().replace(/,/g, '');
    useTotalCheckInput.change(function () {
      if (useTotalCheckInput.is(":checked") == true) {
        $('.js-full-use-text').attr('value', totalPrice);
      } else {
        $('.js-full-use-text').attr('value', '0');
      }
    });
  }

  $(document).on('click', '.js-full-use', useTotalCheck);

  function textareaKeyup() {
    if ($(this).val().length > 50) {
      alert("글자수는 50자로 이내로 제한됩니다.");
      $(this).val($(this).val().substring(0, 50));
    }
  }

  ;
  $(document).off('keyup').on('keyup', '.js-max-keyup', textareaKeyup);

  function customOption() {
    var customOption = $(this).next('.js-select-custom');
    var optionSelected = $(this).find('option:selected');

    if (optionSelected.val() == 6) {
      customOption.addClass('is-active');
    } else {
      customOption.removeClass('is-active');
    }
  }

  ;
  $(document).on('change', '.js-custom-message', customOption); //셀렉트 박스 텍스트 멀티(상품검색 팝업)

  function selectMulti() {
    var selectMultiSelected = $(this).find('option:selected');
    var idxDisabled = $(this).closest('.product-search__item').nextAll('.product-search__item').find('.js-multiselect');

    if (selectMultiSelected.val() == "") {
      $(this).removeClass('is-check');
      idxDisabled.attr("disabled", true).removeClass('is-check');
      idxDisabled.find('option:eq(0)').prop('selected', true);
    } else {
      $(this).addClass('is-check');
      idxDisabled.removeAttr('disabled');
    }
  }

  $(document).on('change', '.js-multiselect', selectMulti); //멤버쉽 스크롤 픽시드

  if ($('.js-fixed-check').length > 0) {
    $(window).scroll(function () {
      var height = $(document).scrollTop();
      var mainOuterHeight = $('.site-main').outerHeight(true);
      var lnbHeight = $('.lnb').height();
      var mainHeight = $('.site-main').height();
      var headerHeight = $('.header').height();
      var marginHeight = mainOuterHeight - mainHeight;
      var totalHeight = lnbHeight + marginHeight + headerHeight;
      var upTotalHeight = lnbHeight + marginHeight;

      if ($('.header').hasClass('type-bg')) {
        if (height > totalHeight) {
          $('.js-fixed-check').addClass('is-fixed');
          $('.header').addClass('is-bg-white');
        } else {
          $('.js-fixed-check').removeClass('is-fixed');
          $('.header').removeClass('is-bg-white');
        }
      } else {
        if (height > upTotalHeight) {
          $('.js-fixed-check').addClass('is-fixed');
          $('.header').addClass('is-bg-white');
        } else {
          $('.js-fixed-check').removeClass('is-fixed');
          $('.header').removeClass('is-bg-white');
        }
      }
    });
  } //멤버쉽 스크롤 탭


  function membershipTab() {
    var mainOuterHeight = $('.site-main').outerHeight(true);
    var lnbHeight = $('.lnb').height();
    var mainHeight = $('.site-main').height();
    var marginHeight = mainOuterHeight - mainHeight;
    var totalHeight = lnbHeight + marginHeight;
    var idx = $(this).parent('li').index();
    $(this).parent('li').addClass('is-current').siblings('li').removeClass('is-current');
    $('.js-basic-tab-cont').eq(idx).addClass('is-current').siblings('.js-basic-tab-cont').removeClass('is-current');

    if ($('.js-fixed-check').hasClass('is-fixed')) {
      $('html, body').animate({
        scrollTop: totalHeight
      }, 340);
    }
  }

  $(document).on('click', '.js-basic-tab-link', membershipTab); //스토어 스페셜탭으로 가져오기

  if ($('.stores-tab').length > 0) {
    var url_param = $(location).attr('href').split("?");
    var param = url_param[1];

    if (param) {
      if (param.indexOf('tabNo=2') != -1) {
        $('.stores-tab__item').removeClass('is-current').eq(2).addClass('is-current');
        $('.stores-tab__info').removeClass('is-current').eq(2).addClass('is-current');
      }
    }
  }
}); //입고알림 버튼클릭시

function stoNtsAsk() {
  alert('입고 알림을 \n신청하시겠습니까?');
} //카트 제품 삭제 버튼클릭시


function basketDelete() {
  alert('삭제하시겠습니까?');
}
/**
 * ScrollMagic: Opacity
 */


if ($('.motion-up').length > 0) {
  var controller = new ScrollMagic.Controller();
  $('.motion-up').each(function () {
    var Opacity = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    }).reverse(false).setClassToggle(this, 'motion-up--active').addTo(controller);
  });
}
/*collabo 리스트 클릭 시 텍스트 호버효과*/


var collaboElemAll = document.querySelectorAll('.collabo-list__link');
Array.prototype.forEach.call(collaboElemAll, function (collaboElem) {
  collaboElem.addEventListener('click', function (e) {
    e.preventDefault();
    var collaboName = this.getAttribute('data-name');
    body.classList.add('is-stop');
    setTimeout(function () {
      body.classList.add('is-stop');
    }, 300);
    collaboPopup.classList.add('is-active');
    setPopup(collaboName);
  });
  collaboElem.addEventListener('mouseenter', function (e) {
    this.parentNode.classList.add('is-hover');
  });
  collaboElem.addEventListener('mouseleave', function (e) {
    this.parentNode.classList.remove('is-hover');
  });
}); // [ui추가] productFixButton :: 좋아요버튼 너비값

$('.fix-button__link--like').parent().css({
  width: '15%'
>>>>>>> 0fc2268daa1c1a4d1465e7c5aa2ded6b11cc7b88
});