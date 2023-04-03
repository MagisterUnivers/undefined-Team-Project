const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export async function getCocktail(cocktailName) {
  const response = await fetch(`${BASE_URL}${cocktailName}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error();
  }
}
/*
  |============================
  | Old variant
  |============================
*/
// export function getCocktail(cocktailName) {
//   return fetch(`${BASE_URL}${cocktailName}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error();
//     }
//   });
// }
