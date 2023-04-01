import { rndCocktails } from './rnd_coctail';

const form = document.querySelector('.search-cocktail');
const input = document.querySelector('#search-input');

// form.addEventListener('submit', async e => {
//   e.preventDefault();
//   // const request = searchCocktails(
//   //   document.getElementById('search-input').value
//   // );
//   document.getElementById('rnd-cocktail').innerHTML = '';
//   parseRequest(request);
// });

form.addEventListener('submit', async e => {
  e.preventDefault();
  const cocktailName = form.elements.search.value.trim();

  if (!cocktailName) {
    rndCocktails();
  }
  const request = await searchCocktails(cocktailName);
  document.getElementById('rnd-cocktail').innerHTML = '';
  document
    .getElementById('rnd-cocktail')
    .insertAdjacentHTML('beforeend', '<h2>Search Results:</h2>');
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

// export async function parseRequest(data) {
//   return `<li class="random-cocktail__item">
//   <img class="random-cocktail__image" src="${data[0].strDrinkThumb}" alt="${data[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">${data[0].strDrink}</h3></li>`;
// }

export async function parseRequest(data) {
  if (!data) {
    return '<p>No search results found.</p>';
  }

  const cocktailsHtml = data
    .map(
      cocktail => `
    <li class="random-cocktail__item">
      <img class="random-cocktail__image" src="${cocktail.strDrinkThumb}" alt="${cocktail.strCategory}" loading="lazy" width="0" height="0"/>
      <h3 class="random-cocktail__uppertext">${cocktail.strDrink}</h3>
    </li>
  `
    )
    .join('');

  return `<ul>${cocktailsHtml}</ul>`;
}

// export async function parseRequest(Name) {
//   return `<li class="random-cocktail__item">
//   <img class="random-cocktail__image" src="${picture.drinks[0].strDrinkThumb}" alt="${picture.drinks[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">${picture.drinks[0].strDrink}</h3></li>`;
// }
