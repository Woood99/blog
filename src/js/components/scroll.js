function scrollAddedClass() {
    if (window.innerWidth > 1024) {
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
    const header = document.querySelector('.header');
    if (window.innerWidth > 1024) {
        if (!header.classList.contains('header-scroll-mini')) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop - (header.clientHeight - 10),
            });
        } else {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop - header.clientHeight,
            });
        }
    } else if (window.innerWidth <= 1024) {
        setTimeout(() => {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop - header.clientHeight,
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
