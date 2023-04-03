import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { getCocktail } from './get-cocktail';
import { resultsArray } from './rnd_coctail';
import { REMOVE_BTN } from './constants';
const refs = {
  cocktailsDiv: document.querySelector('#rnd-cocktail'),
};

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
      } else {
        favList.push(result.drinks[0]);
        localStorage.setItem('favCocktails', JSON.stringify(favList));
        const cocktailName = favList[favList.length - 1].strDrink;
        Notify.success(`Cocktail ${cocktailName} added to your favorites!✅`);
        btnEl.remove();
        btnDiv.insertAdjacentHTML('beforeend', REMOVE_BTN);
      }
    } catch {
      console.log('ERROR>>', error.message);
      Notify.failure('Some error has occurred. Try in a few minutes.❌');
    }
  }
}
