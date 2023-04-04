import mobImg1 from '../images/results-section/mobile/mobile_not-found-280.png';
import mobImg2 from '../images/results-section/mobile/mobile_not-found-560.png';
import tabImg1 from '../images/results-section/tablet/tablet_not-found-345.png';
import tabImg2 from '../images/results-section/tablet/tablet_not-found-690.png';
import deskImg1 from '../images/results-section/desktop/desktop_not-found-345.png';
import deskImg2 from '../images/results-section/desktop/desktop_not-found-690.png';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-input');
const ul = document.querySelector('.random-cocktail__list');
const titleEl = document.querySelector('.random-cocktail__title');

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

// export async function parseRequest(data) {
//   return `<li class="random-cocktail__item">
//   <img class="random-cocktail__image" src="${data[0].strDrinkThumb}" alt="${data[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">${data[0].strDrink}</h3></li>`;
// }

export async function parseRequest(data = '') {
  titleEl.textContent = 'Searching results';
  let cocktailsHtml = '';

  if (!data) {
    titleEl.innerHTML = `<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>`;
    // cocktailsHtml = `<img
    //   class="userpic"
    //   srcset="
    //     ${mobImg1}  280w,
    //     ${mobImg1}   560w,
    //     ${tabImg1}   345w,
    //     ${tabImg2}   690w,
    //     ${deskImg1} 345w,
    //     ${deskImg2} 690w
    //   "
    //   sizes="(min-width: 1280px) 345px, (min-width: 768px) 345px, (min-width: 320px) 280px"
    //   src="${mobImg1}"
    // type="image/png"
    //   alt="Member photo 1"
    //   width="345"
    //   height="380"
    //   loading="lazy"
    // />`;
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
        `<li class="random-cocktail__item">
    <img class="random-cocktail__image" src="${cocktail.strDrinkThumb}" alt="${cocktail.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">${cocktail.strDrink}</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">
    Add to
    <svg
      class="btn-primary__icon"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="outer"
        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"
        fill="#FD5103"
      />
      <path
        class="inner"
        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"
        fill="#FD5103"
      />
    </svg>
  </button></div></li></div></div>`,
      ''
    );
  }

  return cocktailsHtml.includes('<li class="random-cocktail__item">')
    ? `<ul class="random-cocktail__list">${cocktailsHtml}</ul>`
    : cocktailsHtml;
  // return cocktailsHtml;
  // ? `<ul class="random-cocktail__list">${cocktailsHtml}</ul>`
  // : '<h2 class="random-cocktail__title">No search resultfgfgfgfgs</h2>';
}

// export async function parseRequest(Name) {
//   return `<li class="random-cocktail__item">
//   <img class="random-cocktail__image" src="${picture.drinks[0].strDrinkThumb}" alt="${picture.drinks[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">${picture.drinks[0].strDrink}</h3></li>`;
// }
