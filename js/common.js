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

}
