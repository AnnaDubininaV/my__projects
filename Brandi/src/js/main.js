$(function() {
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({ scrollTop: bl_top }, 900);
        return false;
    })
});

var swiper = new Swiper('.swiper-container1', {
    spaceBetween: 30,
    effect: 'fade',
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,

});

var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 45,
    loop: true,

    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        960: {
            slidesPerView: 3,

        }

    }

});

var swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'row',
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    breakpoints: {
        540: {
            slidesPerView: 2,
            slidesPerColumn: 1,
        },
        720: {
            slidesPerView: 2,
            slidesPerColumn: 2,
        },
        960: {
            slidesPerView: 3,
            slidesPerColumn: 2,
        },
        1200: {
            slidesPerView: 4,
            slidesPerColumn: 2,
        }
    }
});

var swiper4 = new Swiper('.swiper-container4', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination4',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,

        },
        720: {
            slidesPerView: 3,

        },

        1200: {
            slidesPerView: 4,

        },
    }
});