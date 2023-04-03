import { searchCocktails } from './search-cocktail';
import { rndCocktails } from './rnd_coctail';
import { refs } from './custom-select-box/select-box';

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

    const renderedCoctails = paginatedData
      .map(
        coctail => `<li class="searched-cocktail__item">
  <img class="searched-cocktail__image" src="${coctail.strDrinkThumb}" alt="${coctail.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">${coctail.strDrink}</h3><div class="searched-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn btn-add-to">
  Add to
  <svg
    class="btn-primary__icon btn-add-to"
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="outer"
      d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"
      fill="#FD5103"
    />
    <path
      class="inner"
      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"
      fill="#FD5103"
    />
  </svg>
</button></div></li></div></div>`
      )
      .join('');

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
  }

  function displayPaginationBtn(page) {
    btnPrevious.style.display = 'block';
    btnNext.style.display = 'block';
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

  function paginationBtnArrows(arrData, page) {
    const pagesCount = Math.ceil(arrData.length / cards);
    console.log(pagesCount);
    btnPrevious.style.display = 'block';
    console.log(btnPrevious);
    if (page === 1) {
      btnPrevious.classList.disable = true;
    } else {
      btnPrevious.addEventListener('click', () => {
        btnPrevious.classList.disable = false;
        currentPage = page - 1;
        displayList(dataCoctails, cardsPerPage, currentPage);
      });
    }
    btnNext.style.display = 'block';
    if ((page = pagesCount)) {
      btnNext.classList.disable = true;
    } else {
      btnNext.addEventListener('click', () => {
        btnNext.classList.disable = false;
        currentPage = page + 1;
        displayList(dataCoctails, cardsPerPage, currentPage);
      });
    }
  }

  displayList(dataCoctails, cardsPerPage, currentPage);
  displayPagination(dataCoctails, cardsPerPage);
  paginationBtnArrows(dataCoctails, currentPage);
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
