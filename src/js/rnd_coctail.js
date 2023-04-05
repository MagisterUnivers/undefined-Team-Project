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
    // console.log(results);

    document.querySelector('.random-cocktail__list').innerHTML =
      createPic(results);

    // results.forEach(result => {
    //   document
    //     .querySelector('.random-cocktail__list')
    //     .insertAdjacentHTML('beforeend', createPic(result));
    // });
  } catch (error) {
    console.log('Error', error);
  }
}

/**
  |============================
  | Working method
  |============================
*/

// window.onload = async function () {
//   const API_RANDOM1 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
//   const API_RANDOM2 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
//   const API_RANDOM3 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

//   try {
//     const responses = await Promise.all([
//       fetch(API_RANDOM1),
//       fetch(API_RANDOM2),
//       fetch(API_RANDOM3),
//     ]);
//     const results = await Promise.all(
//       responses.map(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//     );
//     console.log(results);
//     document
//       .getElementById('rnd-cocktail')
//       .insertAdjacentHTML('beforeend', createPic(results[0]));
//     document
//       .getElementById('rnd-cocktail')
//       .insertAdjacentHTML('beforeend', createPic(results[1]));
//     document
//       .getElementById('rnd-cocktail')
//       .insertAdjacentHTML('beforeend', createPic(results[2]));
//   } catch (error) {
//     console.log('Error', error);
//   }
// };

/**
  |============================
  | Functions
  |============================
*/

// async function fetchRandomCocktail1() {
//   const response = await fetch(API_RANDOM);
//   if (response.ok) {
//     const resultData = await response.json();
//     return resultData;
//   } else {
//     throw new Error(response.status);
//   }
// }

// async function fetchRandomCocktail2() {
//   const response = await fetch(API_RANDOM);
//   if (response.ok) {
//     const resultData = await response.json();
//     return resultData;
//   } else {
//     throw new Error(response.status);
//   }
// }

// function fetchSomePic(searchRndCocktail) {
//   return fetch(`${searchRndCocktail}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
//     .catch(error => {
//       console.log('Error', error);
//       return error;
//     });picture
// }

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
