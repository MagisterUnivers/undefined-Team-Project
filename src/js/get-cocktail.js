const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export function getCocktail(cocktailName) {
  return fetch(`${BASE_URL}${cocktailName}`).then(response => response.json());
}
