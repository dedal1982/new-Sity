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
  "../moscow/moscow1.jfif",
  "../moscow/moscow2.jfif",
  "../moscow/moscow3.jfif",
];

let currentIndex = localStorage.getItem("backgroundIndex");
currentIndex = currentIndex ? parseInt(currentIndex) : 0;

const promoMoscow = document.querySelector(".promo-moscow");
promoMoscow.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

currentIndex = (currentIndex + 1) % backgrounds.length;

localStorage.setItem("backgroundIndex", currentIndex);
