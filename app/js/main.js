document.addEventListener('DOMContentLoaded', function () {

    const introSlider = document.querySelector('.swiper-container');
    const featuredSlider = document.querySelector('.featured-slider__container');
    const menuBtn = document.querySelector('.header__menu-btn');
    const menuNav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const authForm = document.querySelector('.auth__form');
    const mailingForm = document.querySelector('.footer-form');
    const inputError1 = document.querySelector('.input-error-1');
    const inputError2 = document.querySelector('.input-error-2');
    const inputError3 = document.querySelector('.input-error-3');
    const authBtn = document.querySelector('.auth__btn');
    const mailingBtn = document.querySelector('.footer-form__btn');
    const mailingInputEmail = document.querySelector('.footer-form__input');


    let errorStr = 'Заполните это поле!';

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuNav.classList.toggle('active');
    });

    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    mailingForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    authBtn.addEventListener('click', checkInput);

    mailingBtn.addEventListener('click', () => {
        if(mailingInputEmail.value == 0) {
            mailingInputEmail.style.borderColor = "red";
        } else {
            alert('Вы подписались на рассылку!');
            mailingInputEmail.style.borderColor = "";
        }
    });

    window.addEventListener('scroll', function() {
        
        if (this.pageYOffset > document.documentElement.clientHeight) {

            header.classList.add('fixed');

        } else {
            header.classList.remove('fixed');
        }
    });


    function checkInput() {

        for(let elem = 0; elem < authForm.length - 1; elem++) {
            let item = authForm[elem];

            
            if (item.value == 0) {
                item.style.borderColor = 'red';
                inputError1.innerHTML = errorStr;
                inputError2.innerHTML = errorStr;
                inputError3.innerHTML = errorStr;
            } else {
                item.style.borderColor = '';
                inputError1.innerHTML = '';
                inputError2.innerHTML = '';
                inputError3.innerHTML = '';
            }
        }
        
    }


    //скрипт плавной прокрутки

    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset,  // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;  // URL с хэшем
                }
            }
        }, false);
    }

    // слайдеры

    let firstSlider = new Swiper(introSlider, {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.intro__slider-arrow--left',
            prevEl: '.intro__slider-arrow--right',
        },
    });

    let secondSlider = new Swiper(featuredSlider, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        centeredSlides: true,
        slideClass: 'featured-slider__slide',
        grabCursor: true,
        loop: true,
        loopedSlides: 6,
    });

});

