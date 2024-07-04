const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-list');
const getQuoteBtn = document.querySelector('.nav-panel-quote-btn-mobile');
const body = document.querySelector('body');
const classNameList = 'nav-list-active';

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-list-active');
    getQuoteBtn.classList.toggle('nav-list-btn-active');
    if (menu.classList.contains(classNameList)){
        body.style.overflowY = 'hidden';
    } else{
        body.style.overflowY = 'visible';
    }

});



const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    pagination: {
    el: ".swiper-pagination",
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    pagination: {
    el: ".swiper-pagination",
    },
});