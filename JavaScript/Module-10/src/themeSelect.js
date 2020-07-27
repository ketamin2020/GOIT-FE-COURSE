const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;
const bodyRef = document.querySelector('body');
const inputRef = document.querySelector('.js-switch-input');
const inputClick = inputRef.addEventListener('change', changeTheme);
const startThemeLoad = document.addEventListener('DOMContentLoaded', loadTheme);

function changeTheme(e) {
  if (e.target.checked) {
    bodyRef.classList.add(DARK);
    localStorage.setItem('Theme', DARK);
  } else {
    bodyRef.classList.remove(DARK);
    bodyRef.classList.add(LIGHT);
    localStorage.setItem('Theme', LIGHT);
  }
}
function loadTheme() {
  const startTheme = localStorage.getItem('Theme') === DARK;
  if (startTheme) {
    bodyRef.classList.add(DARK);
    inputRef.setAttribute('checked', true);
  }
}
