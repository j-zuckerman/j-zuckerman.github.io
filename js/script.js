let isDarkTheme = true;
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  if (isDarkTheme) {
    document.documentElement.style.setProperty('--main-color', 'white');
    document.documentElement.style.setProperty('--secondary-color', 'black');
    isDarkTheme = false;
  } else {
    document.documentElement.style.setProperty('--main-color', 'black');
    document.documentElement.style.setProperty('--secondary-color', 'white');
    isDarkTheme = true;
  }
});
