// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.header__navigation-item-button');
    const menuList = document.querySelector('.header__navigation-burger-list');

    button.addEventListener('click', function () {
        // Тогглим класс для управления видимостью меню
        menuList.classList.toggle('visible');
    });
});

const IntroductionApplicationSwiper = new Swiper('.introduction-application__swiper', {
    slidesPerView: 1,
    // spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    pagination: {
        el: ".introduction-application__swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        375: {
            slidesPerView: 3
        }
    }
});

var mySwiper = new Swiper('.reviews__swiper', {
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 286,
        depth: 160,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: ".reviews__swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
            coverflowEffect: {
                rotate: 0,
                stretch: 497,
                depth: 150,
                modifier: 1,
            }
        },
    }
})
