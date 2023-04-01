
const buttons = document.querySelectorAll('.hero__btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const activeButtons = document.querySelectorAll('.hero__btn--active');
    if (button.classList.contains('hero__btn--active')) {
      button.classList.remove('hero__btn--active');
      return;
    }
    if (activeButtons.length === 1) {
      const firstActiveButton = activeButtons[0];
      firstActiveButton.classList.remove('hero__btn--active');
    }
    button.classList.add('hero__btn--active');
  });
});
    