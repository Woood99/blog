function scrollAddedClass() {
    if (window.innerWidth >= 1024) {
        const header = document.querySelector('.header');
        const anchors = document.querySelectorAll('[data-anchor]');
        let scrollDistance = window.scrollY;
        let sectionList = document.querySelectorAll(`[data-anchor-section]`);
        sectionList.forEach(el => {
            if (el.offsetTop - header.clientHeight <= scrollDistance) {
                anchors.forEach(item => {
                    if (item.hash == `#${el.id}`) {
                        item.classList.add('nav__link--active');
                    } else {
                        item.classList.remove('nav__link--active');
                    }
                });
            }
        });
    }
};

function scrollTo(element) {
    if (window.innerWidth >= 1024) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - document.querySelector('.header').clientHeight,
        });
    } else if (window.innerWidth < 1024) {
        setTimeout(() => {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop - document.querySelector('.header').clientHeight,
            });
        }, 500);
    }
}

if (document.querySelector('[data-anchor]') && document.querySelector('[data-anchor-section]')) {
    const anchors = document.querySelectorAll('[data-anchor]');
    anchors.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.currentTarget.getAttribute('href');
            scrollTo(document.querySelector(id));
        });
    });
    window.addEventListener('scroll', scrollAddedClass);
}
