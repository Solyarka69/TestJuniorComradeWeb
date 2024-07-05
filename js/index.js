const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-list');
const getQuoteBtn = document.querySelector('.nav-panel-quote-btn-mobile');
const body = document.body;
const navListActiveClass = 'nav-list-active';
const navListBtnActiveClass = 'nav-list-btn-active';

function toggleMenu() {
    const menuIsActive = menu.classList.toggle(navListActiveClass);
    getQuoteBtn.classList.toggle(navListBtnActiveClass);
    body.style.overflowY = menuIsActive ? 'hidden' : 'visible';
}

menuBtn.addEventListener('click', toggleMenu);
