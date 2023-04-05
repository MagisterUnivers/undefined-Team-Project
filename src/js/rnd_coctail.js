/**
  |============================
  | Import
  |============================
*/

import '../sass/utils/_ui-kit.scss';
import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';
/**
  |============================
  | Refs
  |============================
*/

/**
  |============================
  | Code
  |============================
*/

window.onload = rndCocktails();

export async function rndCocktails() {
  const API_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  let numOfPics;

  if (window.innerWidth < 768) {
    numOfPics = 3;
  } else if (window.innerWidth < 1280) {
    numOfPics = 6;
  } else {
    numOfPics = 9;
  }

  try {
    const responses = await Promise.all(
      Array.from({ length: numOfPics }, () => fetch(API_RANDOM))
    );
    const results = await Promise.all(
      responses.map(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
    );
    document.getElementById('content').removeAttribute('hidden');
    document.getElementById('loading').style.display = 'none';

    document.querySelector('.random-cocktail__list').innerHTML =
      createPic(results);
  } catch (error) {
    console.log('Error', error);
  }
}

function createPic(cards) {
  // console.log(cards);
  return cards.reduce((acc, card) => {
    if (
      localStorage.getItem('favCocktails').includes(`${card.drinks[0].idDrink}`)
    ) {
      return (acc += `<li class="random-cocktail__item" id="${card.drinks[0].idDrink}">
  <img class="random-cocktail__image" src="${card.drinks[0].strDrinkThumb}" alt="${card.drinks[0].strCategory}"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${card.drinks[0].strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${REMOVE_BTN}</div></li></div></div>`);
    } else {
      return (acc += `<li class="random-cocktail__item" id="${card.drinks[0].idDrink}">
  <img class="random-cocktail__image" src="${card.drinks[0].strDrinkThumb}" alt="${card.drinks[0].strCategory}"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${card.drinks[0].strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${ADD_BTN}</div></li></div></div>`);
    }
  }, '');
}
