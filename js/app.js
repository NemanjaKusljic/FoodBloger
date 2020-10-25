let searchIcon = document.querySelector('.header__search__icon');
let links = document.querySelectorAll('.header__nav a');
let headerSearch = document.querySelector('.header__search');
let logo = document.querySelector('.header__logo');

// SHOW INPUT SEARCH ON CLICK
function showInput(){
    let searchInput = document.querySelector('.header__search__input');
    searchInput.classList.toggle('hidden');
    searchInput.classList.toggle('active');
}

searchIcon.addEventListener('click', ()=>{
    headerSearch.classList.toggle('fullwidth');
    if (screen.width <= 768){
        headerSearch.classList.toggle('tabletWidth');
        logo.classList.toggle('hide');
    }

    links.forEach(link =>{
        link.classList.toggle('hide');
    });

    showInput();
})

// TABS LOGIC
// Onclick change state, and opacity of items with that state, use data-key to change state
const navs = Array.from(document.querySelectorAll('.tabs__item'));
const slides = Array.from(document.querySelectorAll('.tabs__item__content'));

let state = {
    tab: 0
};

function changeMeal(num){
    const activeElements = document.querySelectorAll('[data-active]');
    Array.from(activeElements).forEach(el => el.removeAttribute('data-active'));

    state.tab = +num;
    let len = slides.length;
    //loop and set the state
    state.tab = Math.max(0, Math.min( state.tab, len - 1) );

    Array.from(document.querySelectorAll(`[data-key="${state.tab}"]`))
    .forEach( el => {
    el.setAttribute('data-active', true);
  });
};

navs.forEach(item => {
    item.addEventListener('click', ()=>{
        changeMeal(item.dataset.key);
    });
});

changeMeal(0);

// HAMBURGER MENU

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.navbar li');
    nav.classList.remove('nav--active');

        // toggle navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');

        // burger animation
        burger.classList.toggle('pressed');
    });


}

navSlide();
