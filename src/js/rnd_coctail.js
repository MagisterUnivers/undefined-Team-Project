/**
  |============================
  | Import
  |============================
*/

/**
  |============================
  | Refs
  |============================
*/

const API_RANDOM = 'www.thecocktaildb.com/api/json/v1/1/random.php';

/**
  |============================
  | Code
  |============================
*/

// fetchSomePic(API_RANDOM)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// fetch(API_RANDOM)
//   .then(response => response.text())
//   .then(text => console.log(text))
//   .catch(error => console.log(error));

window.onload = async function () {
  const API_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(API_RANDOM);
    if (response.ok) {
      const resultData = await response.json();
      console.log(resultData);
      document.getElementsByClassName('random_coctail')[0].innerHTML =
        createPic(resultData);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.log('Error', error);
  }
};

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
//       .getElementsByClassName('random_coctail')[0]
//       .insertAdjacentHTML('beforebegin', createPic(results[0]));
//     document
//       .getElementsByClassName('random_coctail')[0]
//       .insertAdjacentHTML('beforebegin', createPic(results[1]));
//     document
//       .getElementsByClassName('random_coctail')[0]
//       .insertAdjacentHTML('beforebegin', createPic(results[2]));
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

function fetchSomePic(searchRndCocktail) {
  return fetch(`${searchRndCocktail}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .catch(error => {
      console.log('Error', error);
      return error;
    });
}

function createPic(picture) {
  return `<div class="photo-card">
  <img src="${picture.drinks[0].strDrinkThumb}" alt="${picture.drinks[0].strCategory}" loading="lazy" width=500 heigth=500/></div>`;
}
