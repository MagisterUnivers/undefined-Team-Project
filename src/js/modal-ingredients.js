const modal = document.querySelector('#modal-ingredients');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.modal-ingredients-close');
const modalGroup = document.querySelector('.backdrop');
const removeFavoritesButton = document.querySelector('#modal-btn__remove-fav');
const addFavoritesButton = document.querySelector('#modal-btn__add-to-fav');
removeFavoritesButton.style.display = 'none';
addFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'block';
  addFavoritesButton.style.display = 'none';
});
removeFavoritesButton.addEventListener('click', () => {
  removeFavoritesButton.style.display = 'none';
  addFavoritesButton.style.display = 'block';
});
async function getIngredientData(ingredientName) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
  );
  const data = await response.json();

  const ingredient = data.ingredients[0];
  let abv = `<li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol by volume: ${ingredient.strABV}%</li>`;
  if (ingredient.strAlcohol === 'No') {
    abv = '';
  }
  function updateIngredients() {
    return `<h2 class="modal-ingredient-title">${ingredient.strIngredient}</h2>
        <strong class="modal-ingredient-uptitle">${ingredient.strType}</strong>
        <p class="modal-ingredient-text">${ingredient.strDescription}</p>
        <ul class="modal-ingredient-list specs-list">
        <li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol: ${ingredient.strAlcohol}</li>
        ${abv}
          </ul>`;
  }

  modal.insertAdjacentHTML('beforeend', updateIngredients());
}

closeBtn.addEventListener('click', toggleModal);
openBtn.addEventListener('click', toggleModal);
function toggleModal() {
  modalGroup.classList.toggle('is-hidden');
}
getIngredientData('Wine');
//   abv = `<li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol by volume: ${ingredient.strABV}%</li>`
// }
// let type = '';
// if (ingredient.strType) {
//   type = `<li class="modal-ingredient-item"><span class="specs-list__marker">&#10038;</span>Type: ${ingredient.strType}</li>`;
// }
// let country = '';
// if (ingredient.strCountry) {
//   country = `<li class="modal-ingredient-item"><span class="specs-list__marker">&#10038;</span> Country of origin: ${ingredient.strCountry}</li>`;
// }
// let taste = '';
// if (ingredient.strTaste) {
//   taste = `<li class="modal-ingredient-item"> <span class="specs-list__marker">&#10038;</span> Flavour: ${ingredient.strTaste}</li>`;
// }
