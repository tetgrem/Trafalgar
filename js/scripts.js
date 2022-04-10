// Custom Scripts

$(document).ready(function(){
    $('.block__title').click(function (event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
});


// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')
    const scroll = document.querySelector('.header__section')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 100
    if (window.scrollY >= breakpoint) {
        scroll.classList.add('body_scroll')
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
        scroll.classList.remove('body_scroll')
    }
}
window.addEventListener('scroll', fixedNav)

const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

ScrollReveal().reveal('.header__block', {
    delay: 575,
    duration: 500,
    reset: false,
    distance: '55px',
    origin: 'bottom'
});



ScrollReveal().reveal('.block__header-text', {
    delay: 455,
    duration: 500,
    reset: false,
    distance: '100px',
    origin: 'bottom'
});

ScrollReveal().reveal('.ourservices__row', {
    delay: 675,
    duration: 600,
    reset: false,
    distance: '100px',
    origin: 'bottom'
});

ScrollReveal().reveal('.ourservices__button', {
    delay: 675,
    duration: 400,
    reset: false,
    distance: '40px',
    origin: 'bottom'
});

ScrollReveal().reveal('.leading__img', {
    delay: 475,
    duration: 600,
    reset: false,
    distance: '95px',
    origin: 'left'
});

ScrollReveal().reveal('.leading__block', {
    delay: 475,
    duration: 600,
    reset: false,
    distance: '95px',
    origin: 'right'
});


ScrollReveal().reveal('.download__block', {
    delay: 475,
    duration: 600,
    reset: false,
    distance: '95px',
    origin: 'left'
});

ScrollReveal().reveal('.download__img', {
    delay: 475,
    duration: 600,
    reset: false,
    distance: '95px',
    origin: 'right'
});

ScrollReveal().reveal('.article__item', {
    delay: 375,
    duration: 600,
    reset: false,
    distance: '95px',
    origin: 'bottom'
});

ScrollReveal().reveal('.article__button', {
    delay: 375,
    duration: 600,
    reset: false,
    distance: '95px',
    origin: 'bottom'
});



