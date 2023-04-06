// -----------Burger menu------------------------

const burgerMenuOpen = document.querySelector('[data-burger-menu-toggle]');
const burgerMenu = document.querySelector('[data-burger-menu]');

burgerMenuOpen.addEventListener('click', onClickBurger);
const body = document.querySelector('body');
function onClickBurger() {
  burgerMenu.classList.toggle('is-open');

  burgerMenuOpen.setAttribute('aria-expanded', true);
  body.classList.toggle('no-scroll');
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

// -----------burger-menu-favorite-ingredients---------------

const dataBurgerMenuFavIng = document.querySelector('.burger-menu-btn');
dataBurgerMenuFavIng.addEventListener('click', onClickBurger);
