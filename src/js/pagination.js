import { searchCocktails } from './search-cocktail';
import { rndCocktails } from './rnd_coctail';
import { refs } from './custom-select-box/select-box';
import { ADD_BTN, REMOVE_BTN, LEARN_MORE_BTN } from './constants.js';

const ulEl = document.querySelector('.random-cocktail__list');
const btnPrevious = document.querySelector('.arrow-btn-pagination.previous');
const btnNext = document.querySelector('.arrow-btn-pagination.next');

btnPrevious.style.display = 'none';
btnNext.style.display = 'none';

const ulList = document.querySelectorAll(
  '.hero___search__list .hero__search__item'
);

console.log(ulList);

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
  let currentPage = 1;
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

    page--;
    const start = cards * page;
    const end = start + cards;
    const paginatedData = arrData.slice(start, end);
    console.log(paginatedData);

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
    paginationList.innerHTML = '';
    const pagesCount = Math.ceil(arrData.length / cards);
    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      paginationList.appendChild(liEl);
    }

    btnPrevious.style.display = 'block';
    btnPrevious.disabled = true;
    btnPrevious.addEventListener('click', () => {
      if (currentPage === 0) {
      btnPrevious.disabled = true;
      btnNext.classList.remove('active')
    } else {
        btnNext.classList.add('active');
        btnPrevious.disabled = false;
        currentPage--;
        displayList(dataCoctails, cardsPerPage, currentPage);
        updatePaginationActiveClass();
      }
    });

    btnNext.style.display = 'block';
    btnNext.classList.add('active')
    btnNext.disabled = false;
    btnNext.addEventListener('click', () => {
      if (currentPage === pagesCount - 1) {
        console.log(pagesCount)
        btnNext.disabled = true;
        btnNext.classList.remove('active')
      } else {
        btnNext.classList.add('active');
        btnNext.disabled = false;
        btnPrevious.disabled = false;
        btnPrevious.classList.add('active');
        currentPage++;
        displayList(dataCoctails, cardsPerPage, currentPage);
        updatePaginationActiveClass();
      }
    });    
    }

    function updatePaginationActiveClass() {
      const activeItem = document.querySelector('.pagination__item--active');
      console.log(activeItem);
      if (activeItem) {
        activeItem.classList.remove('pagination__item--active');
      }
      const newActiveItem = document.querySelector(
        `.pagination__item:nth-child(${currentPage + 1})`
      );
      if (newActiveItem) {
        newActiveItem.classList.add('pagination__item--active');
      }
    }
  

  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;
    if (currentPage === page) {
      liEl.classList.add('pagination__item--active');
    }
    liEl.addEventListener('click', () => {
      currentPage = page;
      displayList(dataCoctails, cardsPerPage, currentPage);
      let currentLiItem = document.querySelector('li.pagination__item--active');
      currentLiItem.classList.remove('pagination__item--active');
      liEl.classList.add('pagination__item--active');
    });
    return liEl;
  }

  displayList(dataCoctails, cardsPerPage, currentPage);
  displayPagination(dataCoctails, cardsPerPage);
}

// function generatePagination(arrData, cards) {
//   const totalPages = Math.ceil(arrData.legth / cards);
//   let currentPage = 1;
//   let paginationHTML = '';
//   if (totalPages <= 5) {
//     displayPagination(dataCoctails, cardsPerPage);
//   } else {
//     if (totalPages > 5) {
//       for (let i = 1; i <= 3; i++) {
//         displayPagination(dataCoctails, cardsPerPage);
//       }
//       paginationHTML += '<span class="ellipsis">...</span>';
//       paginationHTML += generatePageButton(totalPages);
//     } else if (currentPage > 4 && currentPage < totalPages - 3) {
//       paginationHTML += generatePageButton(1);
//       paginationHTML += '<span class="ellipsis">...</span>';
//       for (let i = currentPage - 1; i <= currentPage + 1; i++) {
//         paginationHTML += generatePageButton(i);
//       }
//       paginationHTML += '<span class="ellipsis">...</span>';
//       paginationHTML += generatePageButton(totalPages);
//     } else {
//       paginationHTML += generatePageButton(1);
//       paginationHTML += '<span class="ellipsis">...</span>';
//       for (let i = totalPages - 4; i <= totalPages; i++) {
//         paginationHTML += generatePageButton(i);
//       }
//     }
//   }
//   return paginationHTML;
// }
