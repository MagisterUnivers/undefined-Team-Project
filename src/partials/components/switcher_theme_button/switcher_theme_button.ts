(() => {
  const inputs = document.querySelectorAll<HTMLInputElement>(
    '.switcher_theme_button input'
  );

  const toggles = document.querySelectorAll<HTMLLabelElement>(
    '.switcher_theme_button .switcher_theme_toggle'
  );

  const switchTheme = () => {
    const { body } = document;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);

    const checked = newTheme === 'dark' ? true : false;

    inputs.forEach(input => {
      input.checked = checked;
    });
  };

  [...toggles, ...inputs].forEach(element => {
    element.addEventListener('click', switchTheme);
  });
})();
