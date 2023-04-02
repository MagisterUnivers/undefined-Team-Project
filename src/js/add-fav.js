import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { getCocktail } from './get-cocktail';
const refs = {
  cocktailsDiv: document.querySelector('#rnd-cocktail'),
};
let favCocktail;
console.log(JSON.parse(localStorage.getItem('favCocktails')));
if (!localStorage.getItem('favCocktails')) {
  localStorage.setItem('favCocktails', JSON.stringify([]));
}
refs.cocktailsDiv.addEventListener('click', onBtnAddFavClick);

async function onBtnAddFavClick(e) {
  console.dir(e);
  if (
    e.target.classList.contains('btn-add-to') ||
    e.target.parentNode.classList.contains('btn-primary__icon')
  ) {
    console.dir(
      e.target
      //   e.target.parentNode.parentNode.children.cocktailName.textContent
    );
    if (e.target.classList.contains('btn-add-to')) {
      favCocktail =
        e.target.parentNode.parentNode.children.cocktailName.textContent;
    } else {
      favCocktail =
        e.target.parentNode.parentNode.parentNode.parentNode.children
          .cocktailName.textContent;
    }
    console.log(favCocktail);
    const result = await getCocktail(favCocktail);
    try {
      console.log(result);
      const favList = JSON.parse(localStorage.getItem('favCocktails'));
      favList.push(result.drinks[0]);
      localStorage.setItem('favCocktails', JSON.stringify(favList));
      const cocktailName = favList[favList.length - 1].strDrink;
      Notify.success(`Cocktail ${cocktailName} added to your favorites!✅`);
    } catch {
      console.log('ERROR>>', error.message);
      Notify.failure('Some error has occurred. Try in a few minutes.❌');
    }
  }
}

// function onBtnAddFavClick(e) {
//   console.dir(e);
//   if (
//     e.target.classList.contains('btn-add-to') ||
//     e.target.parentNode.classList.contains('btn-primary__icon')
//   ) {
//     console.dir(
//       e.target
//       //   e.target.parentNode.parentNode.children.cocktailName.textContent
//     );
//     if (e.target.classList.contains('btn-add-to')) {
//       favCocktail =
//         e.target.parentNode.parentNode.children.cocktailName.textContent;
//     } else {
//       favCocktail =
//         e.target.parentNode.parentNode.parentNode.parentNode.children
//           .cocktailName.textContent;
//     }
//     console.log(favCocktail);
//     getCocktail(favCocktail)
//       .then(result => {
//         console.log(result);
//         const favList = JSON.parse(localStorage.getItem('favCocktails'));
//         favList.push(result.drinks[0]);
//         localStorage.setItem('favCocktails', JSON.stringify(favList));
//         return favList[favList.length - 1].strDrink;
//       })
//       .then(result => {
//         console.log(result);
//         Notify.success(`Cocktail ${result} added to your favorites!✅`);
//       })
//       .catch(error => {
//         console.log('ERROR>>', error.message);
//         Notify.failure('Some error has occurred. Try in a few minutes.❌');
//       });
//   }
// }
