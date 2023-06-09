const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export async function getCocktail(cocktailName) {
  const response = await fetch(`${BASE_URL}${cocktailName}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error();
  }
}
