import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { getCocktail } from './get-cocktail';
const refs = {
  cocktailsDiv: document.querySelector('#rnd-cocktail'),
};
localStorage.setItem('favCocktails', JSON.stringify([]));
console.log(refs.cocktailsDiv);
refs.cocktailsDiv.addEventListener('click', onBtnAddFavClick);

function onBtnAddFavClick(e) {
  if (e.target.classList.contains('btn-add-to')) {
    console.dir(
      e.target.parentNode.parentNode.children.cocktailName.textContent
    );
    const favCocktail =
      e.target.parentNode.parentNode.children.cocktailName.textContent;
    console.log(favCocktail);
    console.log(getCocktail(favCocktail));
    getCocktail(favCocktail)
      .then(result => {
        console.log(result);
        const favList = JSON.parse(localStorage.getItem('favCocktails'));
        favList.push(result.drinks[0]);
        localStorage.setItem('favCocktails', JSON.stringify(favList));
        return favList[favList.length - 1].strDrink;
      })
      .then(result => {
        console.log(result);
        Notify.success(`Cocktail ${result} added to your favorites!✅`);
      })
      .catch(error => {
        console.log('ERROR>>', error.message);
        Notify.failure('Some error has occurred. Try in a few minutes.❌');
      });
  }
}
