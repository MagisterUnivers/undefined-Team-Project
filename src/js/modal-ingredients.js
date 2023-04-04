/*
  |============================
  | Imports
  |============================
*/
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
/*
  |============================
  | Variables
  |============================
*/
const modal = document.querySelector('#modal-ingredients');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.modal-ingredients-close');
export const modalIngredients = document.querySelector('.backdrop');
const removeFavoritesButton = document.querySelector('#modal-btn__remove-fav');
const addFavoritesButton = document.querySelector('#modal-btn__add-to-fav');
let ingredientTitle;
let ingredient;
if (!localStorage.getItem('favIngredients')) {
  localStorage.setItem('favIngredients', JSON.stringify([]));
}

removeFavoritesButton.style.display = 'none';
addFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'block';
  addFavoritesButton.style.display = 'none';
  /*
    |============================
    | Serhii adding to localStorage logic
    |============================
  */
  const parsedFavIngredients = JSON.parse(
    localStorage.getItem('favIngredients')
  );
  console.log(ingredient);
  parsedFavIngredients.push(ingredient);
  console.log(parsedFavIngredients);
  localStorage.setItem('favIngredients', JSON.stringify(parsedFavIngredients));
  Notify.success(`${ingredient.strIngredient} added to your favorites😍!`);
});
removeFavoritesButton.addEventListener('click', e => {
  removeFavoritesButton.style.display = 'none';
  addFavoritesButton.style.display = 'block';
  const parsedFavIngredients = JSON.parse(
    localStorage.getItem('favIngredients')
  );
  console.log(parsedFavIngredients);
  console.dir(e.target);
  parsedFavIngredients.splice(
    parsedFavIngredients.findIndex(
      ingredient =>
        Number(ingredient.idIngredient) === Number(ingredientTitle.id)
    ),
    1
  );
  localStorage.setItem('favIngredients', JSON.stringify(parsedFavIngredients));
  Notify.info(`${ingredient.strIngredient} was removed from your favorites🙄!`);
});

/**
  |============================
  | Julia logic
  |============================
*/

export async function getIngredientData(ingredientName) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
  );
  const data = await response.json();
  /*
    |============================
    | var ingredient moved to global scope
    |============================
  */
  // const ingredient = data.ingredients[0];
  ingredient = data.ingredients[0];
  //

  let type = '';
  if (ingredient.strType) {
    type = `<strong class="modal-ingredient-uptitle theme_text_color">${ingredient.strType}</strong>`;
  }
  let description = '';
  if (ingredient.strDescription) {
    description = `<p class="modal-ingredient-text theme_modal_text_color">${ingredient.strDescription}</p>`;
  }
  let abv = '';
  if (ingredient.strABV) {
    abv = `<li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color">&#10038;</span> Alcohol by volume: ${ingredient.strABV}%</li>`;
  }
  function updateIngredients() {
    return `<div class="remove"><h2 class="modal-ingredient-title theme_text_color" id='${ingredient.idIngredient}''>${ingredient.strIngredient}</h2>
        ${type}
        ${description}
        <ul class="modal-ingredient-list specs-list">
        <li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color ">&#10038;</span> Alcohol: ${ingredient.strAlcohol}</li>
        ${abv}
          </ul></div>`;
  }

  modal.insertAdjacentHTML('afterbegin', updateIngredients());
  ingredientTitle = document.querySelector('.modal-ingredient-title');
  chooseAddOrRemoveButton();
}

closeBtn.addEventListener('click', () => {
  toggleModal();
  const remove = document.querySelector('.remove');
  // remove.style.display = 'none';
  document.querySelector('.remove').innerHTML = '';
});
function toggleModal() {
  modalIngredients.classList.toggle('is-hidden');
}

/*
  |============================
  | Check what button needed to be shown
  |============================
*/
function chooseAddOrRemoveButton() {
  const parsedFavIngredients = JSON.parse(
    localStorage.getItem('favIngredients')
  );

  if (
    parsedFavIngredients.find(
      ingredient =>
        Number(ingredient.idIngredient) === Number(ingredientTitle.id)
    )
  ) {
    removeFavoritesButton.style.display = 'block';
    addFavoritesButton.style.display = 'none';
  } else {
    removeFavoritesButton.style.display = 'none';
    addFavoritesButton.style.display = 'block';
  }
}
