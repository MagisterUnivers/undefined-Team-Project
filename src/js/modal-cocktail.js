/**
  |============================
  | Import
  |============================
*/
import {
  getIngredientData,
  modalIngredients,
  openModal,
} from './modal-ingredients';
import { id } from './add-remove-fav';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { REMOVE_BTN, ADD_BTN } from './constants';
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
let cocktail; // Serhii var
let cocktailTitle; // Serhii var
const cocktailsDiv = document.querySelector('#rnd-cocktail');

/**
  |============================
  | Code
  |============================
*/

removeFavoritesButton.style.display = 'none';
addFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'block';
  addFavoritesButton.style.display = 'none';
  /*
    |============================
    | add to localStorage
    |============================
  */
  const parsedFavCocktails = JSON.parse(localStorage.getItem('favCocktails'));
  parsedFavCocktails.push(cocktail);
  localStorage.setItem('favCocktails', JSON.stringify(parsedFavCocktails));
  /*
    |============================
    | changing add button onto remove btn on mainPage
    |============================
  */
  const cardMainPageEl = cocktailsDiv.querySelector(
    `[id = "${cocktail.idDrink}"]`
  );
  const buttonsDivEl = cardMainPageEl.querySelector('.random-cocktail__btn');
  const addButtonEl = buttonsDivEl.querySelector('.btn-add-to');
  addButtonEl.remove();
  buttonsDivEl.insertAdjacentHTML('beforeend', REMOVE_BTN);

  Notify.success(`Cocktail ${cocktail.strDrink} added to your favorites😍!`);
});
removeFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'none';
  addFavoritesButton.style.display = 'block';
  /*
    |============================
    | remove from localStorage
    |============================
  */
  const parsedFavCocktails = JSON.parse(localStorage.getItem('favCocktails'));
  parsedFavCocktails.splice(
    parsedFavCocktails.findIndex(
      cocktail => Number(cocktail.idDrink) === Number(cocktailTitle.id)
    ),
    1
  );
  localStorage.setItem('favCocktails', JSON.stringify(parsedFavCocktails));
  /*
    |============================
    | changing remove button onto add btn on mainPage
    |============================
  */
  const cardMainPageEl = cocktailsDiv.querySelector(
    `[id = "${cocktail.idDrink}"]`
  );
  const buttonsDivEl = cardMainPageEl.querySelector('.random-cocktail__btn');
  const removeButtonEl = buttonsDivEl.querySelector('.btn-remove-from');
  removeButtonEl.remove();
  buttonsDivEl.insertAdjacentHTML('beforeend', ADD_BTN);

  Notify.info(
    `Cocktail ${cocktail.strDrink} was removed from your favorites🙄!`
  );
});

closeBtn.addEventListener('click', () => {
  const modalCocktail = document.querySelector('.modal__cocktail');

  modalCocktail.innerHTML = '';
  toggleModal();
  document.querySelector('body').classList.remove('no-scroll');
});

export function toggleModal() {
  document.querySelector('body').classList.add('no-scroll');
  modalGroup.classList.toggle('is-hidden');
}

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

export async function onBtnAddFavClick(e) {
  const id = e.target.closest('li').getAttribute('id');
  // console.log(id);

  const data = await fetchCocktailById(id);
  cocktail = data;
  const html = `<div class="modal__cocktail">
  <h3 class="modal__title theme_text_color" id='${data.idDrink}'>${data.strDrink}</h3>
  <div class="modal__instructions-hold">
    <h4 class="modal__instructions theme_text_color">INSTRUCTION:</h4>
    <p class="instruction">${data.strInstructions}</p>
  </div>
  <img
      class="modal__picture"
      src="${data.strDrinkThumb}"
      alt=""
      width="280"
      height="280"
    />
  <div class="modal__ingredients-hold">
    
    <h4 class="modal__ingredients theme_text_color">INGREDIENTS</h4>
    <p class="modal__description theme_text_color">Per cocktail</p>
    <ul class="ingredients__list theme_modal_text_color"></ul>
  </div>
</div>`;

  const modalInfo = document.querySelector('.modal-cocktails-group');

  modalInfo.insertAdjacentHTML('afterbegin', html);

  /*
  |============================
  | Serhii localStorage logic 
  |============================
*/
  cocktailTitle = document.querySelector('.modal__title');
  chooseAddOrRemoveButton();
  /*
    |============================
    | 
    |============================
  */
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
    ingredientsList.addEventListener('click', onIngredientClick);
  }

  toggleModal();
}

function onIngredientClick(event) {
  const liElement = event.target.closest('li');
  if (liElement) {
    const ingredientName = liElement.textContent.trim().substring(2);
    getIngredientData(ingredientName);
    modalIngredients.classList.toggle('is-hidden');
    console.log(ingredientName);
  }
}
/*
  |============================
  | what button will be showed
  |============================
*/
function chooseAddOrRemoveButton() {
  const parsedFavCocktails = JSON.parse(localStorage.getItem('favCocktails'));

  if (
    parsedFavCocktails.find(
      cocktail => Number(cocktail.idDrink) === Number(cocktailTitle.id)
    )
  ) {
    removeFavoritesButton.style.display = 'block';
    addFavoritesButton.style.display = 'none';
  } else {
    removeFavoritesButton.style.display = 'none';
    addFavoritesButton.style.display = 'block';
  }
}
