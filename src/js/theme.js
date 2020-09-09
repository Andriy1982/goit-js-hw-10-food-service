const ref = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const saveTheme = localStorage.getItem('Theme');

if (!saveTheme) {
  ref.body.classList.add('light-theme');
  localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
}

if (JSON.parse(saveTheme) === Theme.DARK) {
  ref.body.classList.add('dark-theme');
  ref.input.checked = true;
}

const hendlChendge = event => {
  const { checked } = event.target;
  if (checked) {
    ref.body.classList.add('dark-theme');
    ref.body.classList.remove('light-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    ref.body.classList.add('light-theme');
    ref.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
};

ref.input.addEventListener('change', hendlChendge);
