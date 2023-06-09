import { rndCocktails } from './rnd_coctail';
import { refs } from './custom-select-box/select-box';
import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';

const ulEl = document.querySelector('.random-cocktail__list');
const btnPrevious = document.querySelector('.arrow-btn-pagination.previous');
const btnNext = document.querySelector('.arrow-btn-pagination.next');
const titleEl = document.querySelector('.random-cocktail__title');
const paginationBox = document.querySelector('.pagination__wrapper');
const ulList = document.querySelectorAll(
  '.hero___search__list .hero__search__item'
);

btnPrevious.style.display = 'none';
btnNext.style.display = 'none';

async function searchCocktails(firstLetter) {
  const API_SEARCH = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(API_SEARCH);
  const data = await response.json();
  return data.drinks;
}

refs.optionsList.forEach(option => {
  option.addEventListener('click', () => {
    const letterBySelector = option
      .querySelector('label')
      .innerHTML.toLowerCase();
    searchCocktails(letterBySelector).then(dataDrinks => {
      if (!dataDrinks) {
        rndCocktails();
      }
      parseCoctailWithPagination(dataDrinks);
    });
  });
});

ulList.forEach(li => {
  li.addEventListener('click', ev => {
    const selectedLetter = ev.target.textContent.toLowerCase();
    searchCocktails(selectedLetter).then(dataDrinks => {
      if (!dataDrinks) {
        rndCocktails();
      }
      parseCoctailWithPagination(dataDrinks);
    });
  });
});

export function parseCoctailWithPagination(data) {
  const dataCoctails = data;
  let currentPage = 1;
  let cardsPerPage;
  if (window.innerWidth < 768) {
    cardsPerPage = 3;
  } else if (window.innerWidth < 1280) {
    cardsPerPage = 6;
  } else {
    cardsPerPage = 9;
  }
  displayList(dataCoctails, cardsPerPage, currentPage);
  displayPaginationDots(dataCoctails, cardsPerPage, currentPage);
}

function displayList(arrData, cards, page) {
  titleEl.textContent = 'Searching results';
  ulEl.innerHTML = '';

  page--;
  const start = cards * page;
  const end = start + cards;
  const paginatedData = arrData.slice(start, end);

  const renderedCoctails = paginatedData.reduce((acc, coctail) => {
    if (localStorage.getItem('favCocktails').includes(`${coctail.idDrink}`)) {
      return (acc += `<li class="random-cocktail__item" id="${coctail.idDrink}">
  <img class="random-cocktail__image" src="${coctail.strDrinkThumb}" alt="${coctail.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${coctail.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${REMOVE_BTN}</div></li></div></div>`);
    } else {
      return (acc += `<li class="random-cocktail__item" id="${coctail.idDrink}">
  <img class="random-cocktail__image" src="${coctail.strDrinkThumb}" alt="${coctail.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">${coctail.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${ADD_BTN}</div></li></div></div>`);
    }
  }, '');
  ulEl.insertAdjacentHTML('afterbegin', renderedCoctails);
  page++;
  updatePaginationActiveClass(arrData, cards, page);
}

function createPaginationBtn(arrData, page, currentPage, cards) {
  const liEl = document.createElement('li');
  liEl.classList.add('pagination__item');
  liEl.innerText = page;
  if (currentPage === page) {
    liEl.classList.add('pagination__item--active');
  }
  liEl.addEventListener('click', () => {
    currentPage = page;
    displayList(arrData, cards, currentPage);
    updatePaginationActiveClass(arrData, cards, currentPage);
  });
  return liEl;
}

function prevBtnHandle(arrData, cards, currentPage) {
  btnPrevious.addEventListener('click', () => {
    currentPage--;
    displayList(arrData, cards, currentPage);
    updatePaginationActiveClass(arrData, cards, currentPage);
  });
}

function nextBtnHandle(arrData, cards, currentPage) {
  btnNext.addEventListener('click', () => {
    currentPage++;
    displayList(arrData, cards, currentPage);
    updatePaginationActiveClass(arrData, cards, currentPage);
  });
}

function updatePaginationActiveClass(arrData, cards, currentPage) {
  nextBtnHandle(arrData, cards, currentPage);
  prevBtnHandle(arrData, cards, currentPage);
  const pagesCount = Math.ceil(arrData.length / cards);
  const TOTAL_PAGES_PAGINATION = pagesCount;
  const activeItem = document.querySelector('.pagination__item--active');
  if (activeItem) {
    activeItem.classList.remove('pagination__item--active');
  }
  const newActiveItem = document.querySelector(
    `.pagination__item:nth-child(${currentPage})`
  );
  if (newActiveItem) {
    newActiveItem.classList.add('pagination__item--active');
  }
  if (currentPage === pagesCount) {
    btnNext.disabled = true;
    btnNext.classList.remove('active');
  } else {
    btnNext.disabled = false;
    btnNext.classList.add('active');
  }
  if (currentPage === 1) {
    btnPrevious.disabled = true;
    btnPrevious.classList.remove('active');
  } else {
    btnPrevious.disabled = false;
    btnPrevious.classList.add('active');
  }
}

function displayPaginationDots(arrData, cards, currentPage) {
  btnNext.style.display = 'block';
  btnNext.disabled = false;
  btnNext.classList.add('active');
  btnPrevious.style.display = 'block';
  btnPrevious.disabled = true;
  const paginationList = document.querySelector('.pagination__list');
  paginationList.innerHTML = '';
  const pagesCount = Math.ceil(arrData.length / cards);
  const spanEl = document.createElement('span');
  spanEl.classList.add('dots');
  spanEl.innerText = `...`;

  if (pagesCount === 1) {
    paginationBox.classList.add('visually-hidden');
  } else if (window.innerWidth < 768) {
    if (pagesCount > 5) {
      for (let i = 1; i <= 3; i++) {
        const liEl = createPaginationBtn(arrData, i, currentPage, cards);
        paginationList.appendChild(liEl);
      }
      paginationList.appendChild(spanEl);
      const lastLiEl = createPaginationBtn(
        arrData,
        pagesCount,
        currentPage,
        cards
      );
      lastLiEl.addEventListener('click', () => {
        currentPage = pagesCount;
        displayList(arrData, cards, currentPage);
        lastLiEl.classList.add('pagination__item--active');
      });
      paginationList.appendChild(lastLiEl);
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        const liEl = createPaginationBtn(arrData, i, currentPage, cards);
        paginationList.appendChild(liEl);
      }
    }
  } else if (window.innerWidth >= 768) {
    if (pagesCount > 7) {
      for (let i = 1; i <= 3; i++) {
        const liEl = createPaginationBtn(arrData, i, currentPage, cards);
        paginationList.appendChild(liEl);
      }
      paginationList.appendChild(spanEl);
      for (let i = pagesCount; i >= pagesCount - 2; i--) {
        const liEl = createPaginationBtn(i, currentPage);
        paginationList.appendChild(liEl);
      }
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        const liEl = createPaginationBtn(arrData, i, currentPage, cards);
        paginationList.appendChild(liEl);
      }
    }
  }
}

function displayPaginationOnMobile(currentPage) {}
