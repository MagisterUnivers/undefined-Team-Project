// -----------Burger menu------------------------

const burgerMenuOpen = document.querySelector('[data-burger-menu-toggle]');
const burgerMenu = document.querySelector('[data-burger-menu]');

burgerMenuOpen.addEventListener('click', onClickBurger);
const body = document.querySelector('body');
function onClickBurger() {
  burgerMenuOpen.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
  burgerMenuOpen.setAttribute('aria-expanded', true);
  body.classList.toggle('unscroll');
}

// -----------burger-menu-favorite---------------

const dataBurgerMenuArrow = document.querySelector('[data-burger-menu-arrow]');
const dataBurgerMenuFavorite = document.querySelector(
  '[data-burger-menu-favorite]'
);
dataBurgerMenuArrow.addEventListener('click', onClickBurgerMenuArrow);
function onClickBurgerMenuArrow() {
  dataBurgerMenuFavorite.classList.toggle('burger-favorite__items-display');
}
