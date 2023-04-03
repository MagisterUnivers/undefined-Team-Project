export const refs = {
  selected: document.querySelector('.selected'),
  optionsContainer: document.querySelector('.options-container'),
  optionsList: document.querySelectorAll('.option'),
};

refs.selected.addEventListener('click', () => {
  refs.optionsContainer.classList.toggle('active');
});

refs.optionsList.forEach(option => {
  option.addEventListener('click', () => {
    refs.selected.innerHTML = option.querySelector('label').innerHTML;
    refs.optionsContainer.classList.remove('active');
  });
});
