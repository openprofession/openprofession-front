'use strict';

// sticky footer
//-----------------------------------------------------------------------------------
if (!Modernizr.flexbox) {
    (function () {
        var $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            noFlexboxStickyFooter = function () {
                $pageBody.height('auto');
                if ($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
                } else {
                    $pageWrapper.height('auto');
                }
            };
        $(window).on('load resize', noFlexboxStickyFooter);
    })();
}
if (ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
    (function () {
        var $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            ieFlexboxFix = function () {
                if ($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageWrapper.height($(window).height());
                    $pageBody.removeClass('flex-none');
                } else {
                    $pageWrapper.height('auto');
                }
            };
        ieFlexboxFix();
        $(window).on('load resize', ieFlexboxFix);
    })();
}

// placeholder
//-----------------------------------------------------------------------------------
$(function () {
    $('input[placeholder], textarea[placeholder]').placeholder();
});

// fixed svg show
//-----------------------------------------------------------------------------
function fixedSvg() {
    var baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
    $('use').filter(function () {
        return ( $(this).attr("xlink:href").indexOf("#") > -1);
    }).each(function () {
        $(this).attr("xlink:href", baseUrl + $(this).attr("xlink:href").split('/').slice(-1)[0]);
    });
}

fixedSvg();

// checking if element for page
//-----------------------------------------------------------------------------------
function isOnPage(selector) {
    return ($(selector).length) ? $(selector) : false;
}


// select
//-----------------------------------------------------------------------------------
$('.js-select').on('click', '.placeholder', function () {
    var parent = $(this).closest('.js-select');
    if (!parent.hasClass('is-open')) {
        parent.addClass('is-open');
        $('.js-select.is-open').not(parent).removeClass('is-open');
    } else {
        parent.removeClass('is-open');
    }
}).on('click', 'ul>li', function () {
    var parent = $(this).closest('.js-select');
    parent.removeClass('is-open').find('.placeholder').text($(this).text());
    parent.find('input').attr('value', $(this).attr('data-value')).trigger('focusout');
});

$(window).on('click', function (el) {
    if (!el.target.closest('.js-select, .placeholder, .js-select ul>li')) $('.js-select').removeClass('is-open');
    if (!el.target.closest('.wrap-drop')) $('.filter-toggle').removeClass('show');
});

$('.js-select li').each(function () {
    if ($(this).hasClass('js-active')) {

        var jsActive = $(this);
        jsActive.parents('.js-select').find('.placeholder').text(jsActive.text());

        jsActive.parents('.js-select').find('input').attr('value', jsActive.attr('data-value')).trigger('focusout');
    }
});

// carousel-1
//-----------------------------------------------------------------------------------
if (isOnPage($('.js-carousel-1'))) {
    $('.js-carousel-1').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="icon-arrow-l"></i>', '<i class="icon-arrow-l"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
}


// spikier
//-----------------------------------------------------------------------------------

function callback() {
    var sliderWrap = $('.js-spikier');
    $('.slide-lengs .all-element').text(sliderWrap.find('.owl-item').length);

}


if (isOnPage($('.js-spikier'))) {

    $('.js-spikier').on('changed.owl.carousel', function (event) {
        var currentItem = event.item.index;
        $('.slide-lengs .this-element').text(currentItem + 2);
    });

    $('.js-spikier').owlCarousel({
        // loop: true,
        margin: 30,
        nav: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        },
        onTranslated: callback
    });
    callback();
}

var $lecturerSlider = $('.js-lecturer-slider');
if (isOnPage($lecturerSlider)) {
  $lecturerSlider.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<i class="icon-arrow-l"></i>', '<i class="icon-arrow-l"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
}

// list-dropdown
//-----------------------------------------------------------------------------------
$(document).on('click', '.show-all', function (el) {
    el.preventDefault();
    $(this).toggleClass('js-open');
    $('.js-list-dropdown').toggleClass('js-open');

});

if (isOnPage($('.js-list-dropdown'))) {
    $('.js-list-dropdown').on('click', '.title-item', function (el) {
        el.preventDefault();
        $(this).parent('.dropdown-item').toggleClass('js-open');

    });

    $('.js-list-dropdown').on('click', '.title-item-strong', function (el) {
        el.preventDefault();
        $(this).parent('.dropdown-item-strong').toggleClass('js-open');

    });

}


// js-partner
//-----------------------------------------------------------------------------------
if (isOnPage($('.js-partner'))) {

    $('.js-partner').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="icon-arrow-l"></i>', '<i class="icon-arrow-l"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
}


// js-partner-home
//-----------------------------------------------------------------------------------
if (isOnPage($('.js-partner-home'))) {
    $('.js-partner-home').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="icon-arrow-l"></i>', '<i class="icon-arrow-l"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });
}

$('#scroll-wrap').slimScroll({
    height: '410px',
    size: '3px'
});
$('#scroll-wrap1').slimScroll({
    height: '260px',
    size: '3px'
});

$('.competence').on('click', '.js-toggle-menu', function (el) {
    el.preventDefault();
    $(this).parents('.competence').addClass('js-open');

});

$('.competence').on('click', '.js-toggle-close', function (el) {
    el.preventDefault();
    $(this).parents('.competence').removeClass('js-open');
});

// Modal functions
//-----------------------------------------------------------------------------------
$(document).on('confirmation closed', '.sign-up', function () {
    $('.sign-up-form')
        .trigger('reset')
        .validate().resetForm();
    $('input[name="password"]').attr('type', 'password');
    $('.js-pass').removeClass('show');
});

$(document).on('click', '.js-promo-step', function (el) {
    el.preventDefault();

    $('.promo-step-1').hide();
    $('.promo-step-2').fadeIn();
});

$(document).on('closed', '.promo-code', function (e) {
    $('.promo-step-1').show();
    $('.promo-step-2').hide();
});

$(document).on('click', '.js-show', function (el) {
    el.preventDefault();
});

// Show password
//-----------------------------------------------------------------------------------
function showHidePassword(elClass) {
    var element = $('.' + elClass).next('input[name="password"]');
    element.replaceWith(element.clone().attr('type', (element.attr('type') == 'password') ? 'text' : 'password'));
}

$(document).on('click', '.js-pass', function (el) {
    el.preventDefault();

    $(this).toggleClass('show');
    showHidePassword('js-pass');
});

// Validation init
//-----------------------------------------------------------------------------------
validator.init();


// js-toggle-menu
// js-open
// graph
//-----------------------------------------------------------------------------------
if (isOnPage($('#graph'))) {
    var el = document.getElementById('graph'); // get canvas

    var options = {
        percent: el.getAttribute('data-percent') || 20,
        size: el.getAttribute('data-size') || 44,
        lineWidth: el.getAttribute('data-line') || 4,
        rotate: el.getAttribute('data-rotate') || 0
    };

    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options.percent + '%';

    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    var radius = (options.size - options.lineWidth) / 2;

    var drawCircle = function (color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };

    drawCircle('#cacaca', 1, 100 / 100);
    drawCircle('#00e8cb', options.lineWidth, options.percent / 100);


}

if (isOnPage($('#graph1'))) {
    var el = document.getElementById('graph1'); // get canvas

    var options = {
        percent: el.getAttribute('data-percent') || 20,
        size: el.getAttribute('data-size') || 44,
        lineWidth: el.getAttribute('data-line') || 4,
        rotate: el.getAttribute('data-rotate') || 0
    };

    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options.percent + '%';

    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    var radius = (options.size - options.lineWidth) / 2;

    var drawCircle = function (color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };

    drawCircle('#cacaca', 1, 100 / 100);
    drawCircle('#00e8cb', options.lineWidth, options.percent / 100);


}

// filter
//-----------------------------------------------------------------------------------
$(document).on('click', '.filter-toggle', function (el) {
    $(this).toggleClass('show');
});

$(document).on('click', '.el-search li', function (el) {
    $(this).toggleClass('active');
});

$(document).on('click', '.js-search-clear', function (el) {
    $(this).closest('.el-search').find('li').removeClass('active');
});

$(document).on('click', '.js-filter-clear', function (el) {
    $(this).closest('.el-check-group').find('input').removeAttr('checked');
});


// tabs
//-----------------------------------------------------------------------------------

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
        tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();

});

// btn in courses page
//-----------------------------------------------------------------------------------

$('.js-show-block').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('visible');
    $(this).closest('.visibility-block').next('.hidden-block').slideToggle(200);
});


// datepicker at personal17 page
//-----------------------------------------------------------------------------------
$( "#datepicker" ).datepicker({
    dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
    monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
});
<<<<<<< HEAD


var $btnSubmit = $('button[type=submit]');
$(document).on('click', '.toggle-variant-wrap input[type=radio]', function () {
  if ($(this).hasClass('js-other-btn-name')) {
    if (!$btnSubmit.hasClass('mod-second-name')) {
        $btnSubmit.addClass('mod-second-name mod-w');
    }
    if (isOnPage('.pick-schedule-group')) {
        $('input[type=checkbox]').removeAttr('checked');
    }
  } else {
      $btnSubmit.removeClass('mod-second-name mod-w');
  }
});

$(document).on('click', '.pick-schedule-group input[type=checkbox]', function () {
    $('input[type=radio]:not(.js-other-btn-name)').click();
});
=======
>>>>>>> e2180466738699505feeee326ffb65031d9a59bf
