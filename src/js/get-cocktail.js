const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function getCocktail(cocktailName) {
  const response = await fetch(`${BASE_URL}${cocktailName}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error();
  }
}
