const ref = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// console.log(ref.input);
// console.log(ref.body);
// console.log(typeof JSON.stringify(Theme.LIGHT));
// localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
const saveTheme = localStorage.getItem('Theme');
console.log(saveTheme);

if (JSON.parse(saveTheme) === Theme.DARK) {
  console.log('Hello');
  ref.body.classList.add('dark-theme');
  ref.input.checked = true;
}

ref.input.addEventListener('change', event => {
  const { target } = event;
  console.log(event.target.checked);

  const saveTheme = localStorage.getItem('Theme');
  ref.body.classList.add('dark-theme');
  console.log(saveTheme);
  console.log(Theme.DARK);

  if (JSON.parse(saveTheme) === Theme.DARK) {
    console.log('Hello');
    ref.body.classList.add('dark-theme');
  }

  if (target.checked) {
    ref.body.classList.add('dark-theme');
    ref.body.classList.remove('light-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    ref.body.classList.add('light-theme');
    ref.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
});
