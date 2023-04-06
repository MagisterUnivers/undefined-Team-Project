import { searchCocktails, parseRequest } from './search-cocktail';

const mobileMenu = document.querySelector('.mobile-menu');
const closeModalBtn = document.querySelector('.burger-menu-btn');
const scrollTarget = document.querySelector('.random-cocktail__title');
const form = document.querySelector('.burger-form');
const titleEl = document.querySelector('.random-cocktail__title');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const cocktailName = form.elements.burgerinput.value.trim();

  if (!cocktailName) {
    document.getElementById('rnd-cocktail').innerHTML = '';
    titleEl.textContent = 'No search results found.';
    document
      .getElementById('rnd-cocktail')
      .insertAdjacentHTML('beforeend', await parseRequest());
    return '';
  }
  const request = await searchCocktails(cocktailName);
  document.getElementById('rnd-cocktail').innerHTML = '';
  document
    .getElementById('rnd-cocktail')
    .insertAdjacentHTML('beforeend', await parseRequest(request));
  mobileMenu.classList.remove('is-open');
  closeModalBtn.classList.remove('is-open');
  document.querySelector('body').classList.toggle('no-scroll');

  scrollTarget.scrollIntoView({ behavior: 'smooth' });
});
