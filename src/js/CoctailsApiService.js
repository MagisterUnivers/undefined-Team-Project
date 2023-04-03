const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/';
const API_KEY = '1';

export async function getCocktailById(searchParams) {
  const url = `${BASE_URL}/${API_KEY}/lookup.php?i=${searchParams}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    console.log(error.message);
  }
}
// export async function searchCocktailByName(searchParams) {
//   const url = `${BASE_URL}/${API_KEY}/search.php?s=${searchParams}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log(error.message);
//   }
// }

// export async function searchCocktailsByLetter(searchParams) {
//   const url = `${BASE_URL}/${API_KEY}/search.php?f=${searchParams}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log(error.message);
//   }
// }

// export async function searchIngredientsByName(searchParams) {
//   const url = `${BASE_URL}/${API_KEY}/search.php?i=${searchParams}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log(error.message);
//   }
// }

// export async function searchByIngredients(searchParams) {
//   const url = `${BASE_URL}/${API_KEY}/filter.php?i=${searchParams}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log(error.message);
//   }
// }

// export async function getIngredientById(searchParams) {
//   const url = `${BASE_URL}/${API_KEY}/lookup.php?iid=${searchParams}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log(error.message);
//   }
// }

// export async function getRandomCocktail() {
//   const url = `${BASE_URL}/${API_KEY}/random.php`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch {
//     console.log(error.message);
//   }
// }
