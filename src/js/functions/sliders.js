// =========================================================================================
import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade]);
// =========================================================================================
function initSliders() {
    if (document.querySelector('.projects-slider')) {
        document.querySelectorAll('.projects-slider').forEach(el => {
            const slider = new Swiper(el, {
                observer: true,
                observeParents: true,
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 800,
                pagination: {
                    el: el.closest('.projects').querySelector('.projects__pagination'),
                    clickable: true,
                },

                navigation: {
                    prevEl: el.closest('.projects').querySelector('.projects-nav__prev'),
                    nextEl: el.closest('.projects').querySelector('.projects-nav__next'),
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                },
            });
        });
    }
    if (document.querySelector('.skills-slider')) {
        document.querySelectorAll('.skills-slider').forEach(el => {
            const slider = new Swiper(el, {
                observer: true,
                observeParents: true,
                slidesPerView: 2.5,
                spaceBetween: 15,
                speed: 800,
                breakpoints: {
                    568: {
                        slidesPerView: 3.5,
                    },
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                },
            });
        });
    }
}
// =========================================================================================
window.addEventListener("load", function (e) {
    initSliders();
});
// =========================================================================================
