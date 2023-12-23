const mobMenu = document.querySelector(".mobile-menu");
const mobMenuOpen = document.querySelector(".header-burger");
const mobMenuClose = document.querySelector(".mob-btn-close");

const handleMenu = () => {
  mobMenu.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
};
mobMenuOpen.addEventListener("click", handleMenu);
mobMenuClose.addEventListener("click", handleMenu);
