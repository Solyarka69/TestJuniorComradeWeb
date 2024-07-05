const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-list');
const getQuoteBtn = document.querySelector('.nav-panel-quote-btn-mobile');
const body = document.body;
const classNameList = 'nav-list-active';

menuBtn.addEventListener('click', () => {
    const menuIsActive = menu.classList.toggle(classNameList);
    getQuoteBtn.classList.toggle('nav-list-btn-active');
    body.style.overflowY = menuIsActive ? 'hidden' : 'visible';
});
