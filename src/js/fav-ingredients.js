import './add-remove-fav';
import { LEARN_MORE_BTN, REMOVE_BTN } from './constants.js';

const favoritesList = document.querySelector('.fav-ingredients__list');

function renderFavoritesList() {
  const favorites = JSON.parse(localStorage.getItem('favIngredients')) || [];
  favoritesList.innerHTML = '';
  for (const favorite of favorites) {
    const li = document.createElement('li');
    li.classList.add('fav-ingredients__item');
    li.innerHTML = `<h3 class="fav-ingredient__name">${favorite.strIngredient}</h3>
    <h4 class="fav-ingredient__type">${favorite.strType}</h4>
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
      }
    });
    favoritesList.appendChild(li);
  }
}

renderFavoritesList();

window.addEventListener('storage', event => {
  if (event.key === 'favIngredients') {
    renderFavoritesList();
  }
});
