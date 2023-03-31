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

// window.onload = async function () {
//   const API_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

//   try {
//     const response = await fetch(API_RANDOM);
//     if (response.ok) {
//       const resultData = await response.json();
//       console.log(resultData);
//       document.getElementsByClassName('random_coctail')[0].innerHTML =
//         createPic(resultData);
//     } else {
//       throw new Error(response.status);
//     }
//   } catch (error) {
//     console.log('Error', error);
//   }
// };

/**
  |============================
  | Working method
  |============================
*/

window.onload = async function () {
  const API_RANDOM1 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const API_RANDOM2 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const API_RANDOM3 = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  try {
    const responses = await Promise.all([
      fetch(API_RANDOM1),
      fetch(API_RANDOM2),
      fetch(API_RANDOM3),
    ]);
    const results = await Promise.all(
      responses.map(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
    );
    console.log(results);
    document
      .getElementById('rnd-cocktail')
      .insertAdjacentHTML('beforeend', createPic(results[0]));
    document
      .getElementById('rnd-cocktail')
      .insertAdjacentHTML('beforeend', createPic(results[1]));
    document
      .getElementById('rnd-cocktail')
      .insertAdjacentHTML('beforeend', createPic(results[2]));
  } catch (error) {
    console.log('Error', error);
  }
};

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
  <img class="photo-card__image" src="${picture.drinks[0].strDrinkThumb}" alt="${picture.drinks[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="photo-card__uppertext">${picture.drinks[0].strDrink}</h3><div class="photo-card__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn btn-primary">
  Remove
  <svg
    class="btn-primary__icon"
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="inner"
      d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"
      fill="#FD5103"
    />
    <path
      class="outer-remove"
      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"
      fill="#FD5103"
    />
  </svg>
</button></div></div></div></div>`;
}
