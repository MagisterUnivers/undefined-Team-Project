import mobImg1 from '../images/results-section/mobile/mobile_not-found-280.png';
import mobImg2 from '../images/results-section/mobile/mobile_not-found-560.png';
import deskImg1 from '../images/results-section/desktop/desktop_not-found-345.png';
import deskImg2 from '../images/results-section/desktop/desktop_not-found-690.png';

import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-input');
const ul = document.querySelector('.random-cocktail__list');
const titleEl = document.querySelector('.random-cocktail__title');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const cocktailName = form.elements.headerinput.value.trim();

  if (!cocktailName) {
    document.getElementById('rnd-cocktail').innerHTML = '';
    titleEl.textContent = 'No search results found.';
    document
      .getElementById('rnd-cocktail')
      .insertAdjacentHTML('beforeend', await parseRequest());
    return '';
  }
  const request = await searchCocktails(cocktailName);
  document.getElementById('rnd-cocktail').innerHTML = '';
  document
    .getElementById('rnd-cocktail')
    .insertAdjacentHTML('beforeend', await parseRequest(request));
});

export async function searchCocktails(cocktailName) {
  const API_SEARCH = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
  const response = await fetch(API_SEARCH);
  const data = await response.json();
  return data.drinks;
}

export async function parseRequest(data = '') {
  titleEl.textContent = 'Searching results';
  let cocktailsHtml = '';

  if (!data) {
    titleEl.innerHTML = `<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>`;
    cocktailsHtml = `<li><picture >
          <source
          media="(min-width: 768px)"
          srcset="${deskImg1}, ${deskImg2} 2x"
          type="image/png"/>
          <source
          media="(max-width: 767px)"
          srcset="${mobImg1}, ${mobImg2} 2x"
          type="image/png"/>
          <img class="userpic" src="${mobImg1}" alt="People in the cafe" width="345" height="380"/>
          </picture>
          </li>`;
  } else {
    cocktailsHtml = data.reduce(
      (acc, cocktail) =>
        acc +
        `<li class="random-cocktail__item" id="${cocktail.idDrink}">
  <img class="random-cocktail__image" src="${cocktail.strDrinkThumb}" alt="${cocktail.strCategory}"  width=0 height=0/><div><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${cocktail.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${ADD_BTN}</div></div></li></div></div>`,
      ''
    );
  }

  return cocktailsHtml.includes(`<li class="random-cocktail__item"`)
    ? `<ul class="random-cocktail__list">${cocktailsHtml}</ul>`
    : cocktailsHtml;
}
