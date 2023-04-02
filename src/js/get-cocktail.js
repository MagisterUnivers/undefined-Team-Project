const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export function getCocktail(cocktailName) {
  return fetch(`${BASE_URL}${cocktailName}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  });
}
