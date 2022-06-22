// MENU BAR ON MOBILE
const menuBarOverlay = document.querySelector('#menu-bar-overlay');
const closeMenu = document.querySelector('#close-menu-item');
const openMenu = document.querySelector('#hamburger-menu');
const menuOptions = document.querySelectorAll('.menu-options');
// view menu list

const viewMenuItems = () => {
  openMenu.addEventListener('click', () => {
    menuBarOverlay.style.display = 'block';
  });
};
viewMenuItems();

// close menu list

const closeMenuItems = () => {
  closeMenu.addEventListener('click', () => {
    menuBarOverlay.style.display = 'none';
  });
};
closeMenuItems();

// Select menu options
const openMenuOption = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener('click', () => {
      menuBarOverlay.style.display = 'none';
    });
  });
};
openMenuOption();
