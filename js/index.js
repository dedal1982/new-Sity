//перебор ссылок в шапке
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLink.forEach((elem) => {
      elem.classList.remove("active");
      item.classList.add("active");
    });
  });
});

const backgrounds = [
  "./moscow/moscow1.jfif",
  "./moscow/moscow2.jfif",
  "./moscow/moscow3.jfif",
];

let currentIndex = localStorage.getItem("backgroundIndex");
currentIndex = currentIndex ? parseInt(currentIndex) : 0;

const promoMoscow = document.querySelector(".promo-moscow");
if (promoMoscow) {
  promoMoscow.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

currentIndex = (currentIndex + 1) % backgrounds.length;

localStorage.setItem("backgroundIndex", currentIndex);

//мобильное меню
const burgerButton = document.querySelector(".burger-button");
const menuMobile = document.querySelector(".menu-mobile");

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    document.body.classList.toggle("close");
    burgerButton.classList.toggle("active");
    menuMobile.classList.toggle("active");
  });
}

//закрытие мобильного меню при клике на ссылку
const menuMobileLinks = document.querySelectorAll(".menu-mobile-link");

if (menuMobileLinks) {
  menuMobileLinks.forEach((item) => {
    item.addEventListener("click", () => {
      document.body.classList.remove("close");
      burgerButton.classList.remove("active");
      menuMobile.classList.remove("active");
    });
  });
}

//лайк
const itemLike = document.querySelectorAll(".news__item-like");

if (itemLike) {
  itemLike.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}

//выбор города
const choiceCityBtn = document.querySelector(".main-start__choice");
const choiceNested = document.querySelector(".choice-nested");
const choiceIcon = document.querySelector(".choice-image");

if (choiceCityBtn) {
  choiceCityBtn.addEventListener("click", () => {
    choiceCityBtn.classList.toggle("active");
    choiceNested.classList.toggle("active");
    choiceIcon.classList.toggle("active");
  });
}
