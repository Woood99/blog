function headerFixed() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > (header.clientHeight / 1.5)) {
            header.classList.add('header-scroll-mini');
        } else {
            header.classList.remove('header-scroll-mini');
        }
    });
};
if (window.innerWidth > 1024) {
    headerFixed();
}
