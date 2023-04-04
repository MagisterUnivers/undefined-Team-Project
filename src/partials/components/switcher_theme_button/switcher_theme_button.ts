import { addEventHandler } from '../../../js/utils';

(() => {
  type Theme = 'light' | 'dark';
  const THEME = 'theme';

  const restoreTheme = () => {
    const currentTheme = (localStorage.getItem(THEME) ?? 'light') as Theme;

    setThemeAttribute(currentTheme);
  };

  const setThemeAttribute = (theme: Theme) => {
    document.body.setAttribute('data-theme', theme);

    localStorage.setItem(THEME, theme);

    const checked = theme === 'dark' ? true : false;

    setInputsValue(checked);
  };

  const setInputsValue = (checked: boolean) => {
    // get all inputs with switcher_theme_button inputs
    const inputs = document.querySelectorAll<HTMLInputElement>(
      '.switcher_theme_button input'
    );

    inputs.forEach(input => {
      input.checked = checked;
    });
  };

  const switchTheme = () => {
    const { body } = document;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';

    setThemeAttribute(newTheme);
  };

  restoreTheme();

  addEventHandler(
    'body',
    '.switcher_theme_button input, .switcher_theme_button .switcher_theme_toggle',
    'click',
    switchTheme
  );
})();
