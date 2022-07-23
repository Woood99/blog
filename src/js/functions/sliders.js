// =========================================================================================



import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
} from 'swiper';
Swiper.use([Navigation, Pagination,EffectFade]);



// =========================================================================================




function initSliders() {




    if (document.querySelector('.projects-slider')) {
        document.querySelectorAll('.projects-slider').forEach(el => {
            const slider = new Swiper(el, {

                // effect: 'fade',
                // autoplay: {
                // 	delay: 3000,
                // 	disableOnInteraction: false,
                // },

                observer: true,
                observeParents: true,
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages: false,
                // lazy: true,


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
                on: {

                }
            });
        });
    }


}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
