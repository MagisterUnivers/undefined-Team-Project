import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { getCocktail } from './get-cocktail';
import { resultsArray } from './rnd_coctail';
const refs = {
  cocktailsDiv: document.querySelector('#rnd-cocktail'),
};

const REMOVE_BTN = `<button type="button" class="btn btn-primary">
  Remove
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
      class="inner-remove"
      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"
      fill="#FD5103"
    />
  </svg>
</button>`;
let btnDiv;
let btnEl;
let favCocktail;

console.log(resultsArray);
console.log(JSON.parse(localStorage.getItem('favCocktails')));
if (!localStorage.getItem('favCocktails')) {
  localStorage.setItem('favCocktails', JSON.stringify([]));
}
refs.cocktailsDiv.addEventListener('click', onBtnAddFavClick);

async function onBtnAddFavClick(e) {
  console.dir(e);
  if (
    e.target.classList.contains('btn-add-to') ||
    e.target.parentNode.classList.contains('btn-add-to')
  ) {
    if (e.target.classList.contains('btn-add-to')) {
      btnEl = e.target;
      btnDiv = e.target.parentNode;
      console.log(btnEl);
      favCocktail =
        e.target.parentNode.parentNode.children.cocktailName.textContent;
    } else {
      btnEl = e.target.parentNode.parentNode;
      btnDiv = e.target.parentNode.parentNode.parentNode;
      favCocktail =
        e.target.parentNode.parentNode.parentNode.parentNode.children
          .cocktailName.textContent;
    }
    btnEl.setAttribute('disabled', '');
    const result = await getCocktail(favCocktail);
    try {
      console.log(result);
      const favList = JSON.parse(localStorage.getItem('favCocktails'));
      if (
        localStorage
          .getItem('favCocktails')
          .includes(`${result.drinks[0].idDrink}`)
      ) {
        console.log('ALREADY IN ARRAY!!!');
      }
      favList.push(result.drinks[0]);
      localStorage.setItem('favCocktails', JSON.stringify(favList));
      const cocktailName = favList[favList.length - 1].strDrink;
      Notify.success(`Cocktail ${cocktailName} added to your favorites!✅`);
      btnEl.remove();
      btnDiv.insertAdjacentHTML('beforeend', REMOVE_BTN);
    } catch {
      console.log('ERROR>>', error.message);
      Notify.failure('Some error has occurred. Try in a few minutes.❌');
    }
  }
}
