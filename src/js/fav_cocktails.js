import '../partials/components/switcher_theme_button/switcher_theme_button.ts';
import './add-remove-fav';
import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';
// import './fav-cocktails_pagintaion.js'
import './header';

const favCocktailsList = document.querySelector('.random-cocktail__list');
const headerForm = document.querySelector('.header-form');
const burgerForm = document.querySelector('.burger-form');
const mobileMenu = document.querySelector('.mobile-menu');
const closeModalBtn = document.querySelector('.burger-menu-btn');
const scrollTarget = document.querySelector('.fav-cocktails__title');

window.onload = renderCocktailsBySD();

showDefaultText();

favCocktailsList.addEventListener('click', onRemoveBtnClick);
headerForm.addEventListener('submit', onSubmitBtnClick);
burgerForm.addEventListener('submit', onBurgerSubmitBtnClick);

function onRemoveBtnClick(ev) {
  const liChildrenCount = Array.from(favCocktailsList.children).length;

  if (
    ev.target.closest('.btn-primary') && // Якщо closest знаходить btn-primary
    ev.target.closest('.btn-primary').classList.contains('btn-remove-from')
  ) {
    ev.target.closest('.random-cocktail__item').remove();
    if (liChildrenCount === 0) {
      document
        .querySelector('.fav-cocktails__default-text')
        .removeAttribute('hidden');
      document.querySelector('.fav-content__wrapper').style.display = 'block';
    }
  }
}

function onSubmitBtnClick(ev) {
  ev.preventDefault();

  const headerFormValue = headerForm.headerinput.value.toLowerCase();
  const cocktailsSDArr = getCocktailsBySD();

  const collectedWordsArray = cocktailsSDArr.map(cocktail => {
    let drinkName = cocktail.strDrink.toLowerCase();

    return drinkName.split(' ');
  });

  let cocktailsToParse = [];

  collectedWordsArray.forEach((wordsArr, wordsArrIndex) => {
    for (let word of wordsArr) {
      if (headerFormValue.split(' ').includes(word)) {
        cocktailsToParse.push(wordsArrIndex);
        break;
      }
    }
  });

  let cocktailsArr = cocktailsToParse.map(
    cocktailIndex => cocktailsSDArr[cocktailIndex]
  );

  document.querySelector('.random-cocktail__list').innerHTML = '';

  if (cocktailsArr.length === 0) {
    document
      .querySelector('.fav-cocktails__default-text')
      .removeAttribute('hidden');
    document.querySelector('.fav-content__wrapper').style.display = 'block';
    return;
  } else {
    document.querySelector('.fav-content__wrapper').style.display = 'none';
  }

  const cocktailElementsArr = createElements(cocktailsArr);

  document
    .querySelector('.random-cocktail__list')
    .insertAdjacentHTML('beforeend', cocktailElementsArr.join(''));
  document.getElementById('content').removeAttribute('hidden');
}

function onBurgerSubmitBtnClick(ev) {
  ev.preventDefault();

  const burgerFormValue = burgerForm.burgerinput.value.toLowerCase();
  const cocktailsSDArr = getCocktailsBySD();

  const collectedWordsArray = cocktailsSDArr.map(cocktail => {
    let drinkName = cocktail.strDrink.toLowerCase();

    return drinkName.split(' ');
  });

  let cocktailsToParse = [];

  collectedWordsArray.forEach((wordsArr, wordsArrIndex) => {
    for (let word of wordsArr) {
      if (burgerFormValue.split(' ').includes(word)) {
        cocktailsToParse.push(wordsArrIndex);
        break;
      }
    }
  });
  
  let cocktailsArr = cocktailsToParse.map(cocktailIndex => cocktailsSDArr[cocktailIndex]);

  document.querySelector('.random-cocktail__list').innerHTML = '';

  if (cocktailsArr.length === 0) {
    document
      .querySelector('.fav-cocktails__default-text')
      .removeAttribute('hidden');
    document.querySelector('.fav-content__wrapper').style.display = 'block';
    return;
  } else {
    document.querySelector('.fav-content__wrapper').style.display = 'none';
  }

  const cocktailElementsArr = createElements(cocktailsArr);

  document
    .querySelector('.random-cocktail__list')
    .insertAdjacentHTML('beforeend', cocktailElementsArr.join(''));
  document.getElementById('content').removeAttribute('hidden');

  mobileMenu.classList.remove('is-open');
  closeModalBtn.classList.remove('is-open');

  scrollTarget.scrollIntoView({ behavior: 'smooth' });
}

function showDefaultText() {
  favCocktailsList.addEventListener('click', onRemoveBtnClick);

  function onRemoveBtnClick(ev) {
    if (
      ev.target.closest('.btn-primary') && // Якщо closest знаходить btn-primary
      ev.target.closest('.btn-primary').classList.contains('btn-remove-from')
    ) {
      ev.target.closest('.random-cocktail__item').remove();
      if (getCocktailsBySD().length === 1) {
        document
          .querySelector('.fav-cocktails__default-text')
          .removeAttribute('hidden');
        document.querySelector('.fav-content__wrapper').style.display = 'block';
      }
    }
  }
}

export function getCocktailsBySD() {
  return JSON.parse(localStorage.getItem('favCocktails'));
}

function renderCocktailsBySD() {
  const cocktailsArr = getCocktailsBySD();
  if (cocktailsArr.length === 0) {
    document
      .querySelector('.fav-cocktails__default-text')
      .removeAttribute('hidden');
    document.querySelector('.fav-content__wrapper').style.display = 'block';
    return;
  } else {
    document.querySelector('.fav-content__wrapper').style.display = 'none';
  }

  const cocktailElementsArr = createElements(cocktailsArr);

  document
    .querySelector('.random-cocktail__list')
    .insertAdjacentHTML('beforeend', cocktailElementsArr.join(''));
  document.getElementById('content').removeAttribute('hidden');
}

function createElements(cocktails) {
  const elementsArr = cocktails.map(cocktail => {
    return createPic(cocktail);
  });

  return elementsArr;
}

function createPic(picture) {
  if (localStorage.getItem('favCocktails').includes(`${picture.idDrink}`)) {
    return `<li class="random-cocktail__item" id="${picture.idDrink}">
  <img class="random-cocktail__image" src="${picture.strDrinkThumb}" alt="${picture.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${picture.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${REMOVE_BTN}</div></li></div></div>`;
  } else {
    return `<li class="random-cocktail__item" id="${picture.idDrink}">
  <img class="random-cocktail__image" src="${picture.strDrinkThumb}" alt="${picture.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${picture.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${ADD_BTN}</div></li></div></div>`;
  }
}
