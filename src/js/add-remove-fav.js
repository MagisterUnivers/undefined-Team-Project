import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { getCocktail } from './get-cocktail';
import { ADD_BTN, REMOVE_BTN } from './constants';
import { onBtnAddFavClick } from './modal-cocktail';

const cocktailsDiv = document.querySelector('#rnd-cocktail');
// console.log(cocktailsDiv);
let btnsDiv;
let btnEl;
let selectedCocktail;
let cocktailName;
// console.log(JSON.parse(localStorage.getItem('favCocktails')));
if (!localStorage.getItem('favCocktails')) {
  localStorage.setItem('favCocktails', JSON.stringify([]));
}
cocktailsDiv.addEventListener('click', onBtnAddRemoveFavClick);

async function onBtnAddRemoveFavClick(e) {
  if (e.target.closest('.btn-add-to')) {
    btnEl = e.target.closest('.btn-add-to');
    btnsDiv = e.target.closest('.random-cocktail__btn');
    // console.log(btnEl);
    // console.dir(e.target.parentNode.parentNode);
    selectedCocktail = e.target.closest('.random-cocktail__item').id;

    // else {
    //   btnEl = e.target.parentNode.parentNode;
    //   btnsDiv = e.target.parentNode.parentNode.parentNode;
    //   selectedCocktail =
    //     e.target.parentNode.parentNode.parentNode.parentNode.id;
    // }
    btnEl.setAttribute('disabled', '');
    const result = await getCocktail(selectedCocktail);
    try {
      // console.log(result);
      const favList = JSON.parse(localStorage.getItem('favCocktails'));

      favList.push(result.drinks[0]);
      localStorage.setItem('favCocktails', JSON.stringify(favList));
      cocktailName = favList[favList.length - 1].strDrink;
      Notify.success(`Cocktail ${cocktailName} added to your favorites😍!`);
      btnEl.remove();
      btnsDiv.insertAdjacentHTML('beforeend', REMOVE_BTN);
    } catch {
      console.log('ERROR>>', error.message);
      Notify.failure('Some error has occurred. Try in a few minutes.❌');
    }
  } else if (e.target.closest('.btn-remove-from')) {
    btnEl = e.target.closest('.btn-remove-from');
    btnsDiv = e.target.closest('.random-cocktail__btn');

    btnEl.setAttribute('disabled', '');

    // console.log('click on remove');
    const favCocktails = JSON.parse(localStorage.getItem('favCocktails'));
    favCocktails.splice(
      favCocktails.findIndex(cocktail => {
        cocktailName = cocktail.strDrink;
        return (
          Number(cocktail.idDrink) === Number(e.target.parentNode.parentNode.id)
        );
      }),
      1
    );
    btnEl.remove();
    if (btnsDiv) {
      //
      btnsDiv.insertAdjacentHTML('beforeend', ADD_BTN); // добавлена проверка if btnsDiv, выбивало ошибку в консоли при нажатии на кнопку remove на странице fav_ingredients
    } //

    localStorage.setItem('favCocktails', JSON.stringify(favCocktails));
    Notify.info(`Cocktail ${cocktailName} was removed from your favorites🙄!`);
  } else if (e.target.classList.contains('btn-learn-more')) {
    onBtnAddFavClick(e);
  }
}
