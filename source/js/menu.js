let menu = document.querySelector(".menu");
let munuButton = document.querySelector(".header__menu-button");

menu.classList.remove("menu--no-js")
munuButton.classList.remove("header__menu-button--close")

munuButton.addEventListener("click", function () {
  if (menu.classList.contains("menu--open")) {
    menu.classList.remove("menu--open")
    munuButton.classList.remove("header__menu-button--close")
  } else {
    menu.classList.add("menu--open")
    munuButton.classList.add("header__menu-button--close")
  }
})
