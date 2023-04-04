import { rndCocktails } from './rnd_coctail';

import { refs } from './custom-select-box/select-box';
import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';
const ulEl = document.querySelector('.random-cocktail__list');
const btnPrevious = document.querySelector('.arrow-btn-pagination.previous');
const btnNext = document.querySelector('.arrow-btn-pagination.next');
const titleEl = document.querySelector('.random-cocktail__title');
const paginationBox = document.querySelector('.pagination__wrapper')
let CURRENT_PAGE = 1;

btnPrevious.style.display = 'none';
btnNext.style.display = 'none';

const ulList = document.querySelectorAll(
  '.hero___search__list .hero__search__item'
);


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
    console.log(letterBySelector);
    searchCocktails(letterBySelector).then(dataDrinks => {
      if (!dataDrinks) {
        rndCocktails();
      }
      parseCoctailPagination(dataDrinks);
    });
  });
});

ulList.forEach(li => {
  li.addEventListener('click', ev => {
    const selectedLetter = ev.target.textContent.toLowerCase();
    console.log(selectedLetter);
    searchCocktails(selectedLetter).then(dataDrinks => {
      if (!dataDrinks) {
        rndCocktails();
      }
      parseCoctailPagination(dataDrinks);
    });
  });
});






function parseCoctailPagination(data) {
  const dataCoctails = data;
  let CURRENT_PAGE = 1;
  let cardsPerPage;
  if (window.innerWidth < 768) {
    cardsPerPage = 3;
  } else if (window.innerWidth < 1280) {
    cardsPerPage = 6;
  } else {
    cardsPerPage = 9;
  }

  function displayList(arrData, cards, page) {
    ulEl.innerHTML = '';
    titleEl.textContent = 'Searching results';
    page--;
    console.log(page);
    const start = cards * page;
    const end = start + cards;
    const paginatedData = arrData.slice(start, end);

    const renderedCoctails = paginatedData.reduce((acc, coctail) => {
      if (
        localStorage.getItem('favCocktails').includes(`${coctail.idDrink}`)
      ) {
        return (acc += `<li class="random-cocktail__item" id="${coctail.idDrink}">
    <img class="random-cocktail__image" src="${coctail.strDrinkThumb}" alt="${coctail.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">${coctail.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${REMOVE_BTN}</div></li></div></div>`);
      } else {
        return (acc += `<li class="random-cocktail__item" id="${coctail.idDrink}">
    <img class="random-cocktail__image" src="${coctail.strDrinkThumb}" alt="${coctail.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">${coctail.strDrink}</h3><div class="random-cocktail__btn">${LEARN_MORE_BTN}${ADD_BTN}</div></li></div></div>`);
      }
    }, '');
    
    ulEl.insertAdjacentHTML('afterbegin', renderedCoctails);
  }

  function displayPagination(arrData, cards) {
    const paginationList = document.querySelector('.pagination__list');
    // const spanElDots = document.createElement('span');
    // spanElDots.classList.add('.dots')
    paginationList.innerHTML = '';
    const pagesCount = Math.ceil(arrData.length / cards);
    if(pagesCount === 1) {
      paginationBox.classList.add('visually-hidden');
    } else {
      for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      paginationList.appendChild(liEl)
      btnNext.classList.add('active');
    }}
      
    
    console.log(CURRENT_PAGE);

    btnPrevious.style.display = 'block';
    btnPrevious.disabled = true;
    console.log(CURRENT_PAGE);
    btnPrevious.addEventListener('click', () => {
      if (CURRENT_PAGE === 0) {
        console.log(CURRENT_PAGE);
      btnPrevious.disable = true;
    } else {
        btnPrevious.classList.add('active');
         btnPrevious.classList.disable = false;
        CURRENT_PAGE--;
        displayList(dataCoctails, cardsPerPage, CURRENT_PAGE);
        updatePaginationActiveClass();
      }
    });

    btnNext.style.display = 'block';
    btnNext.addEventListener('click', () => {
      console.log(pagesCount);
      btnPrevious.classList.add('active')
      if (CURRENT_PAGE === pagesCount - 1) {
        console.log(pagesCount)
        btnNext.disabled = true;
        return;
      } else {
        btnNext.classList.add('active');
        btnNext.disabled = false;
        CURRENT_PAGE += 1;
        displayList(dataCoctails, cardsPerPage, CURRENT_PAGE);
        updatePaginationActiveClass();
      }
    });    
    

    function updatePaginationActiveClass() {
      const activeItem = document.querySelector('.pagination__item--active');
      if (activeItem) {
        activeItem.classList.remove('pagination__item--active');
      }
      const newActiveItem = document.querySelector(
        `.pagination__item:nth-child(${CURRENT_PAGE + 1})`
      );
      if (newActiveItem) {
        newActiveItem.classList.add('pagination__item--active');
      }
    }
  }

  function displayPaginationBtn(page) {
    btnPrevious.style.display = 'block';
    btnNext.style.display = 'block';
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;
    if (CURRENT_PAGE === page) {
      liEl.classList.add('pagination__item--active');
    }
    liEl.addEventListener('click', () => {
      CURRENT_PAGE = page;
      displayList(dataCoctails, cardsPerPage, CURRENT_PAGE);
      let currentLiItem = document.querySelector('li.pagination__item--active');
      currentLiItem.classList.remove('pagination__item--active');
      liEl.classList.add('pagination__item--active');
    });
    return liEl;
  }

  displayList(dataCoctails, cardsPerPage, CURRENT_PAGE);
  displayPagination(dataCoctails, cardsPerPage);
  paginationBtnArrows(dataCoctails, currentPage);
}





 // if (window.innerWidth < 768) {
    //   if (pagesCount > 5) {
    //     for (let i = 0; i < 3; i++) {
    //       const liEl = displayPaginationBtn(i + 1);
    //       paginationList.appendChild(liEl);
    //       paginationList.appendChild(spanElDots);
    //       paginationList.appendChild(displayPaginationBtn(pagesCount));
    //     }