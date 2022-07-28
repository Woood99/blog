window.addEventListener('scroll', scrollAddedClass);

function scrollAddedClass() {
    let header = document.querySelector('.header');
    let scrollItems = header.querySelectorAll(`[data-scroll]`);
    let scrollDistance = window.scrollY;
    let sectionList = document.querySelectorAll(`[data-scroll-section]`);
    sectionList.forEach(el => {
        if (el.offsetTop - header.clientHeight <= scrollDistance) {
            scrollItems.forEach(item => {
                if (item.hash == `#${el.id}`) {
                    item.classList.add('nav__link--active');
                } else {
                    item.classList.remove('nav__link--active');
                }
            });
        }
    });
};
