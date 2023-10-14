/*бургер-меню*/
document.querySelector(".header__burger-menu").addEventListener("click", function() {
    document.querySelector(".header__nav-list").classList.toggle("header__nav-list--show");
    document.querySelector(".header__burger-menu").classList.toggle("header__burger-close");  
    document.querySelector(".header__section").classList.toggle("header__section--background");
    document.querySelector(".header__top-container").classList.toggle("header__top-container--border");
    document.querySelector("body").classList.toggle("body-bg");
  });


  
