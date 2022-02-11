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

    var status;

    function jsOpenSearchLayer() {
      if (!status) {
        $('.search').addClass('is-active');
        $('.type-search').addClass('is-active');
        status = true;
      } else {
        $('.search').removeClass('is-active');
        $('.type-search').removeClass('is-active');
        status = false;
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

<<<<<<< HEAD
  $(document).on('click', '.js-scrollTop', scrollTopBtn); //--END[플로팅버튼]----------------
  //--[탭] ----------------------
=======
  if ($('.detail').length > 0) {
    var positionAbsolute = function positionAbsolute(num) {
      styleOpt.position = 'absolute';
      styleOpt.top = num;
    };

    var positionFixed = function positionFixed(num) {
      styleOpt.position = 'fixed';
      styleOpt.top = num;
    };

    var sc, winH, divH;
    var styleOpt = {};
    $(window).on('scroll', function () {
      sc = $(document).scrollTop();
      winH = $(window).height();
      divH = $('.detail-tab__cont').height();

      if (sc >= 900) {
        $('.detail-tab').addClass('fixed');

        if (divH < winH) {
          if (sc - divH > 470) {
            positionAbsolute(divH + 240);
            $('.detail-tab').removeClass('fixed');
          } else {
            positionFixed($('.header').height() + 20);
          }
        } else {
          if (sc - divH > 0) {
            positionAbsolute(divH + 240);
            $('.detail-tab').removeClass('fixed');
          } else {
            positionFixed($('.header').height() + 20);
          }
        }
      } else {
        $('.detail-tab').removeClass('fixed');
        positionFixed('inherit');
      }

      if (sc == 0) {
        $('.detail-tab__item').removeClass('is-current');
        $('.detail-tab__item').eq(0).addClass('is-current');
        $('.detail-tab__info').eq(0).addClass('is-current');
      }

      $('.product-option-fix').css(styleOpt);
      console.group('================');
      console.log('scY : ', sc);
      console.groupEnd();
      return;
    });
  } //--END[Scroll]----------------------------- 

  /*------------------------
  * [탭]
  ------------------------*/
>>>>>>> 3aa2a87dd0234cc713189e2dfbc3ad0c8c17df0a
  //basic

  function basicTab() {
    var item = '[class $= __item]',
        //li
    tab = '[class $= -tab__fix]'; //ul

    $(this).closest(tab).children().removeClass('is-current');
    $(this).parent().addClass('is-current');
  }

<<<<<<< HEAD
  $(document).on('click', '.js-basic-tab-link', basicTab); //--[select] -------------------
  //custom select
=======
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
    contents.eq(idx).addClass('is-current'); //왼쪽 탭 고정시키기 

    $('html').animate({
      scrollTop: 920
    });
    $('.detail-tab').addClass('fixed');
    contents.eq(idx).css({
      minHeight: 600
    }); //오른쪽 옵션값 고정시키기

    $('.product-option-fix').css({
      position: 'fixed',
      top: $('.header').height() + 20
    });
  }

  $(document).on('click', '.js-tab-link', detailTab); //--END[탭] ----------------------

  /*------------------------
  * [dropdown::아코디언]
  ------------------------*/
  //qna 더보기

  function qnaMore() {
    var parent = $(this).closest('.qna-item');

    if (parent.hasClass('is-view')) {
      parent.removeClass('is-view');
    } else {
      parent.addClass('is-view');
    }

    return false;
  }

  $(document).on('click', '.js-qna-more', qnaMore); //--END[dropdown::아코디언] ----------------------

  /*---------------------
  * [select] :: custom 
  ---------------------*/
  //--custom select setting::option view -----

  function selectView(selected, option) {
    var link = '[class $= __link]',
        value = $(this).find(link).text(),
        select = $(this).parent(),
        selName = selected,
        optName = option,
        selBoxLabel = select.siblings(selName);
    $(optName).removeClass('is-current');
    $(this).addClass('is-current'); // selected 

    $(this).parent().siblings('.hidden-input').val(value);
    selBoxLabel.find('.selected_text').text(value);
    selBoxLabel.removeClass('is-active');
    select.stop().slideUp();
    $(document).on('click', optName, selectView);
    return false;
  } //리스트 소팅버튼

>>>>>>> 3aa2a87dd0234cc713189e2dfbc3ad0c8c17df0a

  function customSelect() {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).next().stop().slideUp();
    } else {
      $(this).addClass('is-active');
      $(this).next().stop().slideDown();
    }

    selectView('.filter-custom__selected', '.filter-custom__option');
    return false;
  }

  $(document).on('click', '.filter-custom__selected', customSelect); // 장바구니FREESIZE

  function cartCustomSelect() {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $(this).next().stop().slideUp();
    } else {
      $(this).addClass('is-active');
      $(this).next().stop().slideDown();
    }

    selectView('.selBox-custom__selected', '.selBox-custom__option');
    return false;
  }

  $(document).on('click', '.selBox-custom__selected', cartCustomSelect); //--END[select]--------------------------

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

  $(document).on('click', '.product-icon__link', productItem);
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
  $(document).on('click', '.terms__depth2-item label', allCheckItem); //기본 아코디언

  function accordionMore() {
    var parent = $(this).parent('li');

    if (parent.hasClass('is-active')) {
      parent.removeClass('is-active');
    } else {
      parent.addClass('is-active').siblings('li').removeClass('is-active');
    }

    return false;
  }

<<<<<<< HEAD
  $(document).on('click', '.js-accordion', accordionMore); //팝업열기(공통)
=======
  $(document).on('click', '.color-list__title', colorCheck); //장바구니 checkbox checked ALL

  function checkBoxChkAll() {
    var chkBox = $('[name=' + this.name + ']');

    function chked(sta) {
      for (var i = 0, len = chkBox.length; i < len; i++) {
        chkBox[i].checked = sta;
      }
    }

    return this.checked ? chked(true) : chked(false);
  }

  $(document).on('input, click', '.js-table-checkAll', checkBoxChkAll); //--END[기타 click EVENT] -------------------
>>>>>>> 3aa2a87dd0234cc713189e2dfbc3ad0c8c17df0a

  function openPopup() {
    var el = '';

    if (this.tagName === 'BUTTON') {
      el = this.dataset.popup;
    }

    if (this.tagName === "A") {
      el = $(this).attr('href').replace('#', '');
    }

    if ($('.popup.is-active').length <= 1) {
      $('.dim-join').addClass('is-active');
    } else {
      $('.popup').removeClass('is-active');
      $('.dim-join').removeClass('is-active');
    }

    $('#' + el).addClass('is-active');
    $('.popup__body').scrollTop(0); // 전체 팝업 body scroll 없앰

    $('html').addClass('is-hidden'); // 예외 modal-pop

    var typeModal = ['small-popup', 'button-popup', 'modal-pop'];
    var popId = $('#' + el);
    typeModal.forEach(function (name) {
      if (popId.hasClass(name)) {
        $('html').removeClass('is-hidden');
        $('.popup__body').scrollTop(0);
      }

      return false;
    });
    return false;
  }

  $(document).on('click', '.js-popup-open', openPopup);
}); //jQuery