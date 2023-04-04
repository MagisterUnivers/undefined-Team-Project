import { addEventHandler } from '../../../js/utils';

(() => {
  const switchTheme = () => {
    const { body } = document;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);

    const checked = newTheme === 'dark' ? true : false;

    // get all inputs with switcher_theme_button inputs
    const inputs = document.querySelectorAll<HTMLInputElement>(
      '.switcher_theme_button input'
    );

    inputs.forEach(input => {
      input.checked = checked;
    });
  };

  addEventHandler(
    'body',
    '.switcher_theme_button input, .switcher_theme_button .switcher_theme_toggle',
    'click',
    switchTheme
  );
})();
