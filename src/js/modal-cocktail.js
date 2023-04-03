/**
  |============================
  | Import
  |============================
*/

import { id } from './add-remove-fav';

/**
  |============================
  | Refs
  |============================
*/

const modalInfo = document.querySelector('.modal-cocktails-group');
const modal = document.querySelector('#modal-cocktails');
const openBtn = document.querySelector('.btn-secondary');
const closeBtn = document.querySelector('.modal-cocktails-close');
const modalGroup = document.querySelector('.backdrop2');
const removeFavoritesButton = document.querySelector('#modal-btn__remove-fav2');
const addFavoritesButton = document.querySelector('#modal-btn__add-to-fav2');

/**
  |============================
  | Code
  |============================
*/

removeFavoritesButton.style.display = 'none';
addFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'block';
  addFavoritesButton.style.display = 'none';
});
removeFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'none';
  addFavoritesButton.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  toggleModal();
});

export function toggleModal() {
  modalGroup.classList.toggle('is-hidden');
}

/* <div class="modal__cocktail">
  <h3 class="modal__title">${details.strDrink}</h3>
  <div class="modal__instructions-hold">
    <h4 class="modal__instructions">INSTRUCTION:</h4>
    <p class="instruction">${details.strInstructions}</p>
  </div>
  <div class="modal__ingredients-hold">
    <img
      class="modal__picture"
      src="${details.strDrinkThumb}"
      alt=""
      width="280"
      height="280"
    />
    <h4 class="modal__ingredients">INGREDIENTS</h4>
    <p class="modal__description">Per cocktail</p>
    <ul class="ingredients__list"></ul>
  </div>
</div>; */

/**
  |============================
  | Function
  |============================
*/

export async function fetchCocktailById(id) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { drinks } = await response.json();
  return drinks[0];
}

export async function onBtnAddRemoveFavClick(e) {
  const id = e.target.closest('li').getAttribute('id');
  console.log(id);

  const data = await fetchCocktailById(id);
  const html = `<div class="modal__cocktail">
  <h3 class="modal__title">${data.strDrink}</h3>
  <div class="modal__instructions-hold">
    <h4 class="modal__instructions">INSTRUCTION:</h4>
    <p class="instruction">${data.strInstructions}</p>
  </div>
  <div class="modal__ingredients-hold">
    <img
      class="modal__picture"
      src="${data.strDrinkThumb}"
      alt=""
      width="280"
      height="280"
    />
    <h4 class="modal__ingredients">INGREDIENTS</h4>
    <p class="modal__description">Per cocktail</p>
    <ul class="ingredients__list"></ul>
  </div>
</div>;`;

  const modalInfo = document.querySelector('.modal-cocktails-group');

  modalInfo.insertAdjacentHTML('afterbegin', html);

  const ingredientsList = modalInfo.querySelector('.ingredients__list');

  for (let i = 1; i <= 15; i++) {
    const ingredient = data['strIngredient' + i];
    if (ingredient) {
      const listItem = document.createElement('li');
      listItem.classList.add('ingredient__item');
      listItem.setAttribute('data-ingredient', ingredient);
      listItem.setAttribute('data-name', 'ingredient');
      listItem.innerHTML = `<span class="ingredientsBlack">✶ </span>${ingredient}`;
      ingredientsList.appendChild(listItem);
    } else {
      break;
    }
  }

  toggleModal();
}
