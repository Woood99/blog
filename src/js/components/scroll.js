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

function navAddedClassMobile() {
    const header = document.querySelector('.header');
    const navItemsScroll = header.querySelectorAll('[data-scroll]');
    navItemsScroll.forEach(el => {
        el.addEventListener('click', () => {
            navItemsScroll.forEach(el => {
                el.classList.remove('nav__link--active');
            });
            el.classList.add('nav__link--active');
        });
    })
}

function navItemActive() {
    let minResize = false;
    let maxResize = false;
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && !minResize) {
            minResize = true;
            maxResize = false;
            window.addEventListener('scroll', scrollAddedClass);
            console.log('desktop')
        } else if (window.innerWidth < 1024 && !maxResize) {
            maxResize = true;
            minResize = false;
            navAddedClassMobile();
            console.log('mobile');
        }
    });
    if (window.innerWidth >= 1024 && !minResize) {
        minResize = true;
        maxResize = false;
        window.addEventListener('scroll', scrollAddedClass);
        console.log('desktop')
    } else if (window.innerWidth < 1024 && !maxResize) {
        maxResize = true;
        minResize = false;
        navAddedClassMobile();
        console.log('mobile');
    }
}
navItemActive();
