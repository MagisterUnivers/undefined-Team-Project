import { LEARN_MORE_BTN, REMOVE_BTN } from './constants.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

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
        Notify.info(
          `${favorite.strIngredient} was removed from your favorites🙄!`
        );
        checkFooter();
      }
    });
    favoritesList.appendChild(li);
  }

  function checkFooter() {
    const footer = document.querySelector('.footer');
    const defaultText = document.querySelector('.fav-ingredients__default');
    if (!favorites.length) {
      footer.style.position = 'absolute';
      footer.style.bottom = '0';
      footer.style.width = '100%';
      defaultText.style.display = 'block';
    } else if (favorites.length < 4) {
      footer.style.position = 'absolute';
      footer.style.bottom = '0';
      footer.style.width = '100%';
    } else {
      footer.style.position = 'static';
      defaultText.style.display = 'none';
    }
  }

  checkFooter();
}

renderFavoritesList();

window.addEventListener('storage', event => {
  if (event.key === 'favIngredients') {
    renderFavoritesList();
  }
});
