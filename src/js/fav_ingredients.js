import '../partials/components/switcher_theme_button/switcher_theme_button.ts';
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
    li.innerHTML = `<h3 class="fav-ingredient__name theme_text_color ">${favorite.strIngredient}</h3>
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
  if (favorites.length > 4) {
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

const headerForm = document.querySelector('.header-form');
headerForm.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(ev) {
  ev.preventDefault();

  const headerFormValue = headerForm.headerinput.value.toLowerCase();
  console.log(headerFormValue);
  const ingredientsRenderArr = favorites;

  const collectedWordsArray = ingredientsRenderArr.map(ingredient => {
    let ingredientName = ingredient.strIngredient.toLowerCase();

    return ingredientName.split(' ');
  });
  console.log(headerFormValue.split(' '));

  let ingredientsToParse = [];

  collectedWordsArray.forEach((wordsArr, wordsArrIndex) => {
    for (let word of wordsArr) {
      if (headerFormValue.split(' ').includes(word)) {
        ingredientsToParse.push(wordsArrIndex);
      }
    }
  });

  let ingredientsArr = [];

  for (let ingredientIndex of ingredientsToParse) {
    ingredientsArr.push(ingredientsRenderArr[ingredientIndex]);
  }

  document.querySelector('.fav-ingredients__list').innerHTML = '';

  if (ingredientsArr.length === 0) {
    document
      .querySelector('.fav-ingredients__default')
      .removeAttribute('hidden');
    document.querySelector('.fav-ingredients__wrapper').style.display = 'block';
    return;
  } else {
    document.querySelector('.fav-ingredients__wrapper').style.display = 'none';
  }

  const ingredientElementsArr = createElements(ingredientsArr);

  handleWrapper();
  document
    .querySelector('.fav-ingredients__list')
    .insertAdjacentHTML('beforeend', ingredientElementsArr.join(''));

  const footer = document.querySelector('.footer');
  footer.style.position = 'absolute';
  footer.style.bottom = '0';
  footer.style.width = '100%';
}

async function createElements(ingredientsArr) {
  const elementsArr = ingredientsArr.map(ingredient => {
    const strType = ingredient.strType || ingredient.strIngredient;
    const li = `<li class="fav-ingredients__item">
      <h3 class="fav-ingredient__name">${ingredient.strIngredient}</h3>
      <h4 class="fav-ingredient__type">${strType}</h4>
      <div class="fav-ingredient__btn">
        ${LEARN_MORE_BTN}${REMOVE_BTN}
      </div>
    </li>`;
    return li;
  });
  return elementsArr;
}

document.querySelectorAll('.fav-ingredient__btn button').forEach(button => {
  button.addEventListener('click', e => {
    const ingredientName = e.target
      .closest('.fav-ingredients__item')
      .querySelector('.fav-ingredient__name').textContent;
    getIngredientData(ingredientName);
    document.querySelector('body').classList.add('no-scroll');

    modalIngredients.classList.toggle('is-hidden');
  });
});

document
  .querySelector('.modal-ingredients-close')
  .addEventListener('click', () => {
    document.querySelector('body').classList.remove('no-scroll');
  });
