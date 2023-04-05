import { LEARN_MORE_BTN, REMOVE_BTN } from './constants.js';
import { getIngredientData, modalIngredients } from './modal-ingredients';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const favoritesList = document.querySelector('.fav-ingredients__list');
const favorites = JSON.parse(localStorage.getItem('favIngredients')) || [];

function defaultAppearance() {
  const defaultSection = document.querySelector('.fav-ingredients__default');
  if (favorites.length) {
    defaultSection.style.display = 'none';
  } else {
    defaultSection.style.display = 'block';
  }
}

function renderFavoritesList() {
  favoritesList.innerHTML = '';
  for (const favorite of favorites) {
    const strType = favorite.strType || favorite.strIngredient;
    const li = document.createElement('li');
    li.classList.add('fav-ingredients__item');
    li.innerHTML = `<h3 class="fav-ingredient__name">${favorite.strIngredient}</h3>
    <h4 class="fav-ingredient__type">${strType}</h4>
    <div class="fav-ingredient__btn">
      ${LEARN_MORE_BTN}${REMOVE_BTN}
    </div>`;
    const removeBtn = li.querySelector('.btn-remove-from');
    removeBtn.addEventListener('click', () => {
      const index = favorites.findIndex(
        fav =>
          fav.strIngredient === favorite.strIngredient &&
          fav.strType === favorite.strType
      );
      if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favIngredients', JSON.stringify(favorites));
        li.remove();
        Notify.info(
          `${favorite.strIngredient} was removed from your favorites🙄!`
        );
        defaultAppearance();
        handleWrapper();
      }
    });
    favoritesList.appendChild(li);
  }

  defaultAppearance();
}

function handleWrapper() {
  const wrapper = document.querySelector('.fav-ingredients__wrapper');
  if (favorites.length > 3) {
    wrapper.style.display = 'none';
  } else {
    wrapper.style.display = 'block';
  }
}

handleWrapper();

renderFavoritesList();

window.addEventListener('storage', event => {
  if (event.key === 'favIngredients') {
    renderFavoritesList();
  }
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
  const stuff = document.querySelector('.fav-ingredient__name').textContent;
  getIngredientData(stuff);
  modalIngredients.classList.toggle('is-hidden');
  console.log(stuff);
});
