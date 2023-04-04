import '../partials/components/switcher_theme_button/switcher_theme_button.ts';
import './add-remove-fav';
import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';

window.onload = renderCocktailsBySD();

showDefaultText();

function showDefaultText() {
  const favCocktailsList = document.querySelector('.random-cocktail__list');

  favCocktailsList.addEventListener('click', onRemoveBtnClick);

  function onRemoveBtnClick(ev) {
    if (
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

function getCocktailsBySD() {
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
    console.log(cocktail);
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
