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
const modalGroup = document.querySelector('.backdrop');
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

if (typeof localStorage !== 'undefined') {
  // Пытаемся получить данные из localStorage
  var favIngredients = JSON.parse(localStorage.getItem('favIngredients')) || {};
}

async function getIngredientData(ingredientName) {
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
  /*
    |============================
    | 
    |============================
  */
  let abv = `<li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color">&#10038;</span> Alcohol by volume: ${ingredient.strABV}%</li>`;
  if (ingredient.strAlcohol === 'No') {
    abv = '';
  }
  function updateIngredients() {
    return `<h2 class="modal-ingredient-title theme_text_color" id='${ingredient.idIngredient}''>${ingredient.strIngredient}</h2>
        <strong class="modal-ingredient-uptitle theme_text_color">${ingredient.strType}</strong>
        <p class="modal-ingredient-text theme_modal_text_color">${ingredient.strDescription}</p>
        <ul class="modal-ingredient-list specs-list">
        <li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color ">&#10038;</span> Alcohol: ${ingredient.strAlcohol}</li>
        ${abv}
          </ul>`;
  }

  modal.insertAdjacentHTML('afterbegin', updateIngredients());
  ingredientTitle = document.querySelector('.modal-ingredient-title');
  chooseAddOrRemoveButton();

  modal.insertAdjacentHTML('beforeend', updateIngredients());

  // Функция для получения избранных ингредиентов из localStorage
  function getFavorites() {
    const favorites = localStorage.getItem('favIngredients');
    if (favorites === null) {
      return [];
    }
    return JSON.parse(favorites);
  }

  // Функция для сохранения избранного ингредиента в localStorage
  function saveToFavorites() {
    const favorites = getFavorites();
    const ingredient = {
      idIngredient: data.ingredients[0].idIngredient,
      strIngredient: data.ingredients[0].strIngredient,
      strDescription: data.ingredients[0].strDescription,
      strType: data.ingredients[0].strType,
      strAlcohol: data.ingredients[0].strAlcohol,
      strABV: data.ingredients[0].strABV,
    };
    favorites.push(ingredient);
    localStorage.setItem('favIngredients', JSON.stringify(favorites));
  }

  // Функция для удаления ингредиента из localStorage
  function removeFromFavorites() {
    const favorites = getFavorites();
    const index = favorites.findIndex(
      ingredient => ingredient.idIngredient === data.ingredients[0].idIngredient
    );
    if (index > -1) {
      favorites.splice(index, 1);
      localStorage.setItem('favIngredients', JSON.stringify(favorites));
    }
  }

  // Обработчик клика на кнопку "Add to favorites"
  addFavoritesButton.addEventListener('click', () => {
    saveToFavorites();
    removeFavoritesButton.style.display = 'block';
    addFavoritesButton.style.display = 'none';
  });

  // Обработчик клика на кнопку "Remove from favorites"
  removeFavoritesButton.addEventListener('click', () => {
    removeFromFavorites();
    removeFavoritesButton.style.display = 'none';
    addFavoritesButton.style.display = 'block';
  });
}

closeBtn.addEventListener('click', toggleModal);
openBtn.addEventListener('click', toggleModal);
function toggleModal() {
  modalGroup.classList.toggle('is-hidden');
}
getIngredientData('Wine');

//   abv = `<li class="modal-ingredient-item specs-list__item theme_modal_text_color"><span class="specs-list__marker theme_text_color">&#10038;</span> Alcohol by volume: ${ingredient.strABV}%</li>`
// }
// let type = '';
// if (ingredient.strType) {
//   type = `<li class="modal-ingredient-item theme_modal_text_color"><span class="specs-list__marker theme_text_color ">&#10038;</span>Type: ${ingredient.strType}</li>`;
// }
// let country = '';
// if (ingredient.strCountry) {
//   country = `<li class="modal-ingredient-item theme_modal_text_color"><span class="specs-list__marker theme_text_color ">&#10038;</span> Country of origin: ${ingredient.strCountry}</li>`;
// }
// let taste = '';
// if (ingredient.strTaste) {
//   taste = `<li class="modal-ingredient-item theme_modal_text_color"> <span class="specs-list__marker theme_text_color ">&#10038;</span> Flavour: ${ingredient.strTaste}</li>`;
// }
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
