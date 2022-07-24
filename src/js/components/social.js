if (document.querySelector('.nav__link--contacts') && document.querySelector('.section-social')) {
    function contactsSocialAnimate() {
        const navContacts = document.querySelector('.nav__link--contacts');
        const social = document.querySelector('.section-social');
        const body = document.querySelector('body');
        navContacts.addEventListener('click', (e) => {
            e.preventDefault();
            if (!social.classList.contains('social-animate')) {
                if (!social.classList.contains('social--active-menu')) {
                    social.classList.add('social-animate');
                    body.classList.add('overlay');
                    setTimeout(() => {
                        social.classList.remove('social-animate');
                        body.classList.remove('overlay');
                    }, 3700);
                } else if (social.classList.contains('social--active-menu') && !social.classList.contains('social-animate--mobile')) {
                    social.classList.add('social-animate--mobile');
                    setTimeout(() => {
                        social.classList.remove('social-animate--mobile');
                    }, 1500);
                }
            }
        })
    }
    contactsSocialAnimate();
}
